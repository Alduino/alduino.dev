import { parse } from "yaml";
import { readFile } from "node:fs/promises";

export interface Project {
    title: string;
    type: "individual" | "group";
    iconPath: string;
    dates: string;
    sourceCode?: string | { label: string, url: string };
    website?: string | { label: string, url: string };
    screenshots?: { path: string; description: string }[];
    tech: string[];
    description: string;
}

export async function getProjects(): Promise<Project[]> {
    const data = await readFile("data/projects.yaml", "utf-8");
    return parse(data);
}
