import { keyframes, style } from "@vanilla-extract/css";
import { linkHoverColour, linkInactiveColour, textColour } from "../styles.css";

export const landingContainerClass = style({
    display: "grid",
    placeItems: "center",
    height: "100vh",
});
export const contentContainerClass = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mixBlendMode: "luminosity",
});
export const titleClass = style({
    display: "flex",
    gap: "1rem",
    alignItems: "center",

    margin: 0,
    fontFamily: "Kanit",
    fontWeight: 900,
    fontSize: "69px",
    textTransform: "uppercase",
    textShadow: "0 0 4px #0003",
    color: textColour,
    lineHeight: 0.7,

    selectors: {
        "&::before, &::after": {
            content: "",
            display: "block",
            width: "1rem",
            height: "1px",
            backgroundColor: textColour,
        },
    },
});
export const subtitleClass = style({
    margin: 0,
    fontFamily: "Kulim Park",
    fontSize: "25px",
    textTransform: "lowercase",
    textShadow: "0 0 4px #0001",
    color: textColour,
    opacity: 0.65,

    "@media": {
        "(prefers-color-scheme: dark)": {
            color: "#e3e3e3",
        },
    },
});
export const separatorClass = style({
    width: "50%",
    height: 0,
    margin: "1rem 0",
    border: "none",
    borderBottom: `1px dashed ${textColour}`,
});
export const linksContainerClass = style({
    display: "flex",
    gap: "1rem",
    margin: 0,
    padding: 0,
});
export const linkItemClass = style({
    display: "block",
});
export const linkClass = style({
    display: "flex",
    flexDirection: "column",
    gap: 0,

    fontFamily: "Kulim Park",
    textDecoration: "none",
    color: linkInactiveColour,
    transition: "color 150ms",

    ":hover": {
        color: linkHoverColour,
    },

    "::after": {
        content: "",
        display: "block",
        width: 0,
        height: "1px",
        backgroundColor: "currentColor",
        transition: "width cubic-bezier(0.22, 1, 0.36, 1) 300ms",
    },

    selectors: {
        "&:hover::after": {
            width: "100%",
        },
    },
});
const downArrowAnimation = keyframes({
    "0%": {
        transform: "translateY(0)",
    },
    "50%": {
        transform: "translateY(-0.25rem)",
    },
    "100%": {
        transform: "translateY(0)",
    },
});
export const downArrowClass = style({
    width: "2rem",
    height: "1rem",
    stroke: textColour,
    marginTop: "2rem",
    animation: `${downArrowAnimation} 1s cubic-bezier(0.65, 0, 0.35, 1)`,
    opacity: 0.5,
});
