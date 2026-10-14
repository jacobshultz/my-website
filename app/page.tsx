import Nav from "@/components/nav";
import { getAllArticles } from "@/lib/article";
import Splash from "@/components/splash";
import linksData from "@/data/links.json";
import { getAllProjects } from "@/lib/project";
import MarkdownContentToHTML from "@/components/markdown";
import "../styles/projects.css";
import "../styles/markdown.css";

export default function Home() {
  const articles = getAllArticles();
  const projects = getAllProjects();

  return (
    <>
    <h1>shultz.foo</h1>
      <section>
        <p>Software Engineer, DevOps</p>
        <p>jshultz.biz@outlook.com</p>
        <Splash/>
      </section>

      <div style={{ display: "flex", gap: "5%" }}>
        <Nav links={linksData} />

        <ul id="articles-container">
          <h3>Articles</h3>
          {articles.map((article) => (
            <li key={article.filename} className="article-item">
              <h2>
                <a href={`/article-viewer/${article.filename}`}>{article.title}</a>
              </h2>
              <span>{article.date}</span>
              <p>{article.summary}</p>
            </li>
          ))}
        </ul>
      </div>
      
      <ul id="project-list">
        <h3>Projects</h3>
        {projects.map((project) => (
            <li key={project.filename} className="project-item">
                <div className="topper">
                    <h2>{project.title}</h2>
                    <span>{project.dates}</span>
                    {project.organization ? 
                        <p className="org">For {project.organization}</p> 
                    : project.position ? 
                        <p className="org">{project.position}</p> 
                    : 
                        <div></div>}
                    <div className="link-container">
                        {project.repo && <span><a href={project.repo}>GitHub</a></span>}
                        {project.youtube && <span><a href={project.youtube}>YouTube</a></span>}
                    </div>
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