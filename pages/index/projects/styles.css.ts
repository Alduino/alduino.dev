import { createVar, style } from "@vanilla-extract/css";
import { textColour } from "../styles.css";

const hoverBackground = createVar();
const hoverBorderColour = createVar();
const openBackground = createVar();
const openBorderColour = createVar();
const openInnerBorderColour = createVar();

export const containerClass = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",

    marginBottom: "16rem",

    vars: {
        [hoverBackground]: "#fff6",
        [hoverBorderColour]: "#fffc",
        [openBackground]: "#fffa",
        [openBorderColour]: "#fff",
        [openInnerBorderColour]: "#fffa",
    },

    "@media": {
        "(prefers-color-scheme: dark)": {
            vars: {
                [hoverBackground]: "#fff1",
                [hoverBorderColour]: "#fff4",
                [openBackground]: "#fff1",
                [openBorderColour]: "#fff8",
                [openInnerBorderColour]: "#fff4",
            },
        },
    },
});

export const projectClass = style({
    width: "48rem",
    color: textColour,
    transition: "cubic-bezier(0.22, 1, 0.36, 1) 300ms",

    borderRadius: "4px",
    border: "1px solid transparent",
    margin: "-1rem 0",

    ":hover": {
        backgroundColor: hoverBackground,
        borderColor: hoverBorderColour,
    },

    selectors: {
        "&[open]": {
            backgroundColor: openBackground,
            borderColor: openBorderColour,
            margin: 0,
            boxShadow: `
                0px 0px 2.2px rgba(0, 0, 0, 0.006),
                0px 0px 5.3px rgba(0, 0, 0, 0.008),
                0px 0px 10px rgba(0, 0, 0, 0.01),
                0px 0px 17.9px rgba(0, 0, 0, 0.012),
                0px 0px 33.4px rgba(0, 0, 0, 0.014),
                0px 0px 80px rgba(0, 0, 0, 0.02)
            `,
        },

        "[open] + &[open]": {
            marginTop: "-1rem",
        },
    },
});

export const summaryClass = style({
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    cursor: "pointer",
    padding: "1rem",

    selectors: {
        "[open] > &": {
            borderBottom: `1px solid ${openInnerBorderColour}`,
        },
    },
});

export const logoClass = style({
    width: "4rem",
    height: "4rem",
});

export const summaryTextClass = style({
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
});

export const summaryFirstLineClass = style({
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",

    fontFamily: "Kulim Park",
    fontSize: "1.5rem",
    margin: 0,
});

export const projectTitleClass = style({
    margin: 0,
    fontSize: "1em",
    fontWeight: "600",
});

export const iconClass = style({
    opacity: 0.8,
    fontSize: "1rem",
});

export const summarySecondLineClass = style({
    fontFamily: "Kulim Park",
    margin: 0,
});

export const summaryThirdLineClass = style({
    fontFamily: "Kulim Park",
    opacity: 0.8,
    margin: 0,
});

export const linksContainerClass = style({
    display: "grid",
    gridAutoColumns: "1fr",
    gridTemplateRows: "auto",
    gridAutoFlow: "column",

    borderBottom: `1px solid ${openInnerBorderColour}`,
});

export const linkItemClass = style({
    display: "flex",
    height: "1rem",
    gap: "0.25rem",
    alignItems: "center",

    padding: "0.5rem 1rem",

    selectors: {
        "&:not(:last-child)": {
            borderInlineEnd: `1px solid ${openInnerBorderColour}`,
        },
    },
});

export const projectContentClass = style({
    padding: "1rem",
});

export const linkTitleClass = style({
    flexShrink: 0,
    fontSize: "0.8rem",
    fontWeight: 400,
    opacity: 0.8,
});

export const linkLinkClass = style({
    fontSize: "0.8rem",
    fontWeight: 500,
    textDecoration: "none",
    color: "currentColor",

    minWidth: 0,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",

    ":hover": {
        textDecoration: "underline",
    },
});
