import { clamp } from "../../utils/clamp";
import { calc } from "@vanilla-extract/css-utils";
import { parallaxScrollSmooth } from "./animation.css";

/**
 * Delerps the overall animation progress to get the progress for a specific
 * animation.
 *
 * @param start The scroll position the animation should start at, in px.
 * @param duration The duration of the animation, in px.
 *   The animation will therefore end at start+duration.
 */
export function getNormalisedAnimationValue(
    start: number | string,
    duration: number | string,
): string {
    return clamp(
        0,
        1,
        calc.divide(calc.subtract(parallaxScrollSmooth, start), duration),
    );
}

export function interpolate(start: string, end: string, t: string): string {
    return calc.add(start, calc.multiply(calc.subtract(end, start), t));
}

export function ease(t: string) {
    const oneMinusT = calc.subtract(1, t);
    return calc.subtract(1, calc.multiply(oneMinusT, oneMinusT, oneMinusT));
}
