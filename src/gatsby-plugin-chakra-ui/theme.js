import "fontsource-chivo/400-normal.css";
import "fontsource-chivo/700-normal.css";
import "fontsource-fira-sans/400.css";
import "fontsource-fira-sans/700.css";
import { theme } from "@chakra-ui/core";

export default {
    ...theme,
    fonts: {
        body: "Fira Sans, system-ui, sans-serif",
        heading: "Chivo, sans-serif",
        mono: "monospace"
    }
};
