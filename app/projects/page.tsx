import Return from "@/components/return";
import { getAllProjects } from "@/lib/project";
import "../../styles/projects.css";
import "../../styles/markdown.css";
import MarkdownContentToHTML from "@/components/markdown";

export default function Projects() {
    const projects = getAllProjects();

    return (
        <>
            <Return/>
            <h1 style={{textAlign: "center"}}>Big Projects</h1>
            <p>Some of my best work. If you want to see more of my work, including that which is in-progress, please visit my <a className="bigger" href="https://github.com/jacobshultz" target="_blank">github</a>.</p>
            <ul id="project-list">
                {projects.map((project) => (
                    <li key={project.filename} className="project-item">
                        <div className="topper">
                            <h2>{project.title}</h2>
                            <span>{project.dates}</span>
                            {project.organization && <p className="org">For {project.organization}</p>}
                            {project.repo && <span className="repo"><a href={project.repo}>GitHub Repository</a></span>}
                        </div>
                        <details>
                            <summary>{project.summary}</summary>
                            <MarkdownContentToHTML content={project.content} />
                        </details>
                        <p className="skills">SKILLS: {project.skills}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}