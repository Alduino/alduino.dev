import { getProjects } from "../../utils/projects";

export async function data() {
    return await getProjects();
}
