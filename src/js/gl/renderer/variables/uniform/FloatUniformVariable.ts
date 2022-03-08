import UniformVariable from "./UniformVariable";
import Vector2 from "@equinor/videx-vector2";
import Variable, {Precision, VariableCreator} from "../../Variable";
import {GLProgram, GLUniforms, UniformType} from "../../../graphics";

export default class FloatUniformVariable extends UniformVariable<number, GLUniforms.f1> {
    protected getPrecisionKeyword(): Precision {
        return this.precision;
    }

    protected getTypeKeyword(): string {
        return "float";
    }

    constructor(program: GLProgram, name: string, location: number, private precision?: Precision) {
        super(program, name, location, UniformType.f1);
    }

    set(value: number): void {
        this.uniform.set(value);
    }
}

class UFloatCreator extends VariableCreator<number> {
    constructor(name: string, private precision?: Precision) {
        super(name);
    }

    protected createVariable(program: GLProgram, location: number): Variable<number> {
        return new FloatUniformVariable(program, this.name, location, this.precision);
    }
}

export function uFloat(name: string, precision?: Precision): VariableCreator<number> {
    return new UFloatCreator(name, precision);
}
