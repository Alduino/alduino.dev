import {createVar, generateIdentifier, globalStyle} from "@vanilla-extract/css";

export interface CustomPropertyOptions {
    debugId?: string;

    // todo: better typing for syntax
    syntax: string;
    inherits: boolean;
    initialValue?: string | number;
}

/**
 * Polyfill for Vanilla Extract to create custom CSS properties.
 * @see https://github.com/vanilla-extract-css/vanilla-extract/pull/1092
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@property
 * @returns CSS variable declaration
 */
export function createCustomProperty(
    options: CustomPropertyOptions
): ReturnType<typeof createVar> {
    const identifier = generateIdentifier(options.debugId);
    const propertyName = `--${identifier}` as const;

    globalStyle(`@property ${propertyName}`, {
        // @ts-expect-error: not normal css
        syntax: JSON.stringify(options.syntax),
        inherits: options.inherits ? "true" : "false",
        initialValue: options.initialValue?.toString()
    });

    return `var(${propertyName})`;
}
