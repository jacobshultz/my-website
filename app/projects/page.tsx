import Return from "@/components/return";
import { getAllProjects } from "@/lib/project";

export default function Projects() {
    const projects = getAllProjects();

    return (
        <>
            <Return/>
            <h1 style={{textAlign: "center"}}>My Work Experience</h1>
            <p>For a complete list of projects I've completed, please visit my <a className="bigger" href="https://github.com/jacobshultz">github</a></p>
            <p>These are just the most impressive ones (for now at least).</p>
            <ul>
                {projects.map((project) => (
                    <li key={project.filename} className="project-item">
                        <div className="topper">
                            <h2>{project.title}</h2>
                            <p>{project.internship}</p>
                            <span>{project.dates}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}