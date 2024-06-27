import { createVar, style } from "@vanilla-extract/css";
import { parallaxScroll, parallaxScrollNormalised, parallaxScrollSmooth, unitlessWindowHeight } from "./animation.css";
import { calc } from "@vanilla-extract/css-utils";
import { getNormalisedAnimationValue, interpolate } from "./animation-helpers";

const gradientColourA = createVar();
const gradientColourB = createVar();
const gradientColourC = createVar();

export const textColour = createVar();
export const linkInactiveColour = createVar();
export const linkHoverColour = createVar();

const backgroundRotationAnimation = createVar();
export const backgroundClass = style({
    vars: {
        [parallaxScroll]: calc.multiply(parallaxScrollNormalised, unitlessWindowHeight),
        [parallaxScrollSmooth]: parallaxScroll,

        [backgroundRotationAnimation]: getNormalisedAnimationValue(0, calc.multiply(unitlessWindowHeight, 1.5)),

        [gradientColourA]: "#f0c7dc",
        [gradientColourB]: "#eef2f9",
        [gradientColourC]: "#c8e6ef",
        [textColour]: "#3e3e3e",
        [linkInactiveColour]: "#777",
        [linkHoverColour]: "#3c3c3c",
    },

    "@media": {
        "(prefers-color-scheme: dark)": {
            vars: {
                [gradientColourA]: "#270316",
                [gradientColourB]: "#242429",
                [gradientColourC]: "#021820",
                [textColour]: "#e3e3e3",
                [linkInactiveColour]: "#ccc",
                [linkHoverColour]: "#eee",
            },
        },
    },

    "::before": {
        content: "",
        position: "fixed",
        zIndex: -1,
        inset: 0,
        backgroundImage: `linear-gradient(${interpolate("135deg", "225deg", backgroundRotationAnimation)}, ${gradientColourA}, ${gradientColourB}, ${gradientColourC})`,
        boxShadow: "inset 0 0 4px #0007, inset 0 0 120px #0003",
    }
});

