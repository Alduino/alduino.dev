import createShader, { Shader } from "./gl/renderer/Shader";
import { aVec2b } from "./gl/renderer/variables/attribute/Vec2BufferAttributeVariable";
import { noise3d } from "./noise3d";
import { DrawType, WebGLImpl } from "./gl/graphics";
import Variable, { VariableCache, VariableCreator } from "./gl/renderer/Variable";
import Vector2 from "@equinor/videx-vector2";
import { uFloat } from "./gl/renderer/variables/uniform/FloatUniformVariable";
import { uVec2 } from "./gl/renderer/variables/uniform/Vec2UniformVariable";

const ATTR_POSITION = aVec2b("pos", {});
const ATTR_COORD = aVec2b("coord", {});

const UNIFORM_MOUSE = uVec2("mousePos");
const UNIFORM_TIME = uFloat("time");

// language=glsl
const vertexShader = createShader`
    precision mediump float;

    ${["include", noise3d]}

    ${["var", ATTR_POSITION]};
    ${["var", ATTR_COORD]};
    
    ${["var", UNIFORM_MOUSE]};
    ${["var", UNIFORM_TIME]};

    varying vec2 triCoord;
    varying float mouseDist;
    
    float distance(vec2 dist) {
        return sqrt(dist.x * dist.x + dist.y * dist.y);
    }

    void main() {
        float dist = distance(${UNIFORM_MOUSE} - ${ATTR_COORD});
        
        float distortion = .1 / dist;
        
        vec2 realCoord = vec2(${ATTR_COORD}.x * 2. - 1., ${ATTR_COORD}.y * 2. - 1.);

        triCoord = ${ATTR_COORD};
        
        mouseDist = distance(${UNIFORM_MOUSE} - realCoord);

        gl_Position = vec4(${ATTR_POSITION} * 1.01 + ${UNIFORM_MOUSE} / 100., 0., 1.);
    }
`;

// language=glsl
const fragmentShader = createShader`
    precision mediump float;

    ${["include", noise3d]}
    
    ${["var", UNIFORM_TIME]};

    varying vec2 triCoord;
    varying float mouseDist;

    float hash(float n) {return fract(sin(n * 0.1346) * 43758.5453123);}//from iq

    void main() {
        float offsetX = snoise(vec3(triCoord * 10., 0.)) / 10.;
        vec3 pos = vec3(vec2(triCoord.x + offsetX, triCoord.y) * 4., ${UNIFORM_TIME});
        float noise = snoise(pos);
        
        vec3 colour = mix(
        vec3(.2, 0.6, 0.95),
        vec3(1., 1., 1.),
        noise
        );
        
        float grain = noise3d(vec3(gl_FragCoord.xy * 100., ${UNIFORM_TIME} * 600.));
        float fadeOut = hash13(vec3(pos.xy, ${UNIFORM_TIME} / 3000.));
        
        vec3 result = colour - (fadeOut / 5.);
        result = result * -1.;
        
        float resultBrightness = (result.r + result.g + result.b) / 3. + .4;
        
        gl_FragColor = vec4(result - (grain * (1. - resultBrightness) * .4), 1.);
    }
`;

function buildTris() {
    const COUNT_X = 20;
    const COUNT_Y = 20;

    const SIZE_X = 2 / COUNT_X;
    const SIZE_Y = 2 / COUNT_Y;

    const realCountX = COUNT_X + 1;
    const realCountY = COUNT_Y * 2;

    return Array.from({ length: realCountX * realCountY }, (_, idx) => {
        const xIdx = idx % realCountX;
        const yIdx = Math.floor(idx / realCountX);

        const isOdd = yIdx % 2 === 1;

        const leftOffset = SIZE_X * xIdx - (isOdd ? SIZE_X / 2 : 0);
        const bottomOffset = SIZE_Y * Math.floor(yIdx / 2);

        const glIdx = new Vector2(xIdx / COUNT_X, yIdx / COUNT_Y / 2);

        return {
            pos: [
                new Vector2(-1 + leftOffset, -1 + bottomOffset + (isOdd ? SIZE_Y : 0)),
                new Vector2(-1 + leftOffset + SIZE_X / 2, -1 + bottomOffset + (isOdd ? 0 : SIZE_Y)),
                new Vector2(-1 + leftOffset + SIZE_X, -1 + bottomOffset + (isOdd ? SIZE_Y : 0))
            ],
            idx: [
                glIdx,
                glIdx,
                glIdx
            ],
            indices: [
                idx * 3,
                idx * 3 + 1,
                idx * 3 + 2
            ]
        };
    });
}

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("webgl");
ctx.disable(ctx.BLEND);

const gl = new WebGLImpl(ctx);

const program = gl.createProgram("triangles");

const variableCache: VariableCache = new Map();
const getVar = <T>(from: VariableCreator<T>): Variable<T> => from.getInstance(variableCache);

const vs = new Shader(vertexShader, program, variableCache);
const fs = new Shader(fragmentShader, program, variableCache);

program.link(vs.source, fs.source);

const triangles = buildTris();

getVar(ATTR_POSITION).set({
    values: triangles.flatMap(tris => tris.pos),
    indices: triangles.flatMap(tris => tris.indices)
});

getVar(ATTR_COORD).set({
    values: triangles.flatMap(tris => tris.idx),
    indices: triangles.flatMap(tris => tris.indices)
});

console.log("Hello!");

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.viewport(0, 0, canvas.width, canvas.height);
};

window.onresize(null);

function draw() {
    getVar(UNIFORM_TIME).set(performance.now() / 1e4);
    program.draw(triangles.length * 3, DrawType.triangles);

    requestAnimationFrame(draw);
}

draw();

window.onmousemove = ({clientX, clientY}) => {
    getVar(UNIFORM_MOUSE).set(new Vector2(
        clientX / canvas.width * 2 - 1,
        -(clientY / canvas.height * 2 - 1)
    ))
};
