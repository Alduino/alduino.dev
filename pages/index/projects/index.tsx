import {
    containerClass,
    iconClass,
    linkItemClass,
    linkLinkClass,
    linksContainerClass,
    linkTitleClass,
    logoClass,
    projectClass,
    projectContentClass,
    projectTitleClass,
    summaryClass,
    summaryFirstLineClass,
    summarySecondLineClass,
    summaryTextClass,
    summaryThirdLineClass,
} from "./styles.css";
import { Project } from "../../../utils/projects";
import { useData } from "vike-react/useData";
import Markdown from "react-markdown";
import moduleStyles from "./markdown.module.css";
import { VscCloud, VscCode } from "react-icons/vsc";

export function Projects() {
    const projects = useData<Project[]>();

    return (
        <div className={containerClass}>
            {projects.map((project, i) => (
                <Project key={i} project={project} />
            ))}
        </div>
    );
}

interface ProjectProps {
    project: Project;
}

function Project({ project }: ProjectProps) {
    return (
        <details className={projectClass}>
            <summary className={summaryClass}>
                <img className={logoClass} alt="" src={project.iconPath} />
                <div className={summaryTextClass}>
                    <div className={summaryFirstLineClass}>
                        <h2 className={projectTitleClass}>{project.title}</h2>
                        {project.sourceCode && (
                            <VscCode className={iconClass} title="Source available" />
                        )}
                        {project.website && (
                            <VscCloud className={iconClass} title="Currently hosted" />
                        )}
                    </div>
                    <p className={summarySecondLineClass}>{project.tech.join(", ")}</p>
                    <p className={summaryThirdLineClass}>{project.dates} · {project.type}</p>
                </div>
            </summary>

            {(project.sourceCode || project.website) && (
                <div className={linksContainerClass}>
                    {project.sourceCode && (
                        <div className={linkItemClass}>
                            <VscCode className={iconClass} />
                            <h3 className={linkTitleClass}>Source code:</h3>
                            <a className={linkLinkClass} target="_blank"
                               href={typeof project.sourceCode === "string" ? project.sourceCode : project.sourceCode.url}>
                                {typeof project.sourceCode === "string" ? project.sourceCode : project.sourceCode.label}
                            </a>
                        </div>
                    )}
                    {project.website && (
                        <div className={linkItemClass}>
                            <VscCloud className={iconClass} />
                            <h3 className={linkTitleClass}>Website:</h3>
                            <a className={linkLinkClass} target="_blank"
                               href={typeof project.website === "string" ? project.website : project.website.url}>
                                {typeof project.website === "string" ? project.website : project.website.label}
                            </a>
                        </div>
                    )}
                </div>
            )}

            <div className={projectContentClass}>
                <div className={moduleStyles.markdown}>
                    <Markdown>{project.description}</Markdown>
                </div>
            </div>
        </details>
    );
}
