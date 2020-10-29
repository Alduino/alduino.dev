const gradient = (gradient: string) => ({
    background: gradient,
    backgroundClip: "text",
    color: "transparent"
});
export default gradient;

export const gradientBetween = (a: string, b: string, angle = "to right") =>
    gradient(`linear-gradient(${angle}, ${a}, ${b})`);
