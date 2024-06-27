type Param = string | number;

export function clamp(min: Param, max: Param, value: Param): string {
    return `clamp(${min}, ${max}, ${value})`;
}
