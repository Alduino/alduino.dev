import { createCustomProperty } from "../../utils/custom-property";
import { createVar } from "@vanilla-extract/css";

export const parallaxScrollNormalised = createCustomProperty({
    debugId: "parallaxScrollNormalised",
    syntax: "<number>",
    initialValue: 0,
    inherits: false
});

export const parallaxScroll = createVar();

/**
 * Same as {@link parallaxScroll} but smoothed by a CSS transition.
 */
export const parallaxScrollSmooth = createCustomProperty({
    debugId: "parallaxScrollSmooth",
    syntax: "<number>",
    initialValue: 0,
    inherits: true
});

export const unitlessWindowHeight = createVar();
