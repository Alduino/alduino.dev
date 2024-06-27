import { style } from "@vanilla-extract/css";
import { textColour } from "../styles.css";
import { ease, getNormalisedAnimationValue, interpolate } from "../animation-helpers";
import { unitlessWindowHeight } from "../animation.css";
import { calc } from "@vanilla-extract/css-utils";

const animation = ease(getNormalisedAnimationValue(calc.multiply(unitlessWindowHeight, 0.35), 64));

export const containerClass = style({
    position: "fixed",
    zIndex: 1,
    top: 0,
    left: 0,
    width: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "3rem",

    backgroundColor: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(10px)",

    opacity: animation,
    transform: `scaleX(${interpolate("1.5", "1", animation)})`,

    "@media": {
        "(prefers-color-scheme: dark)": {
            backgroundColor: "rgba(0,0,0,0.5)",
        },
    },
});

export const titleClass = style({
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",

    margin: 0,
    fontFamily: "Kanit",
    fontWeight: 900,
    fontSize: "1.5rem",
    textTransform: "uppercase",
    textShadow: "0 0 4px #0003",
    color: textColour,
    lineHeight: 0.7,

    selectors: {
        "&::before, &::after": {
            content: "",
            display: "block",
            width: "0.5rem",
            height: "1px",
            backgroundColor: textColour,
        },
    },
});
