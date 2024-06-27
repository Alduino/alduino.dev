import { style } from "@vanilla-extract/css";
import { textColour } from "../styles.css";

export const textClass = style({
    margin: "8rem",
    textAlign: "center",
    fontFamily: "cursive",
    color: textColour,
});
