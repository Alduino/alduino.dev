export default function debug(tag: string, message: string) {
    if (process.env.NODE_ENV !== "production") {
        console.debug(`[${tag}] ${message}`);
    }
}
