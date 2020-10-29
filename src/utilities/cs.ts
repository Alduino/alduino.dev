import { CSSPropertiesWithMultiValues } from "@emotion/serialize";

/**
 * Merges stylesheets into one object
 */
export default (...styles: CSSPropertiesWithMultiValues[]) => {
    const entries = styles.flatMap(v => Object.entries(v));
    return Object.fromEntries(entries) as CSSPropertiesWithMultiValues;
};
