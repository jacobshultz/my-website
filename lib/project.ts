import fs from "fs";
import path from "path";
import { getMarkdownParts } from "./markdown";

export interface Project {
  filename: string;
  title: string;
  organization: string | null;
  position: string | null;
  dates: string;
  skills: string | null;
  summary: string;
  order: number;
  repo: string | null;
  youtube: string | null;
  content: string;
}

/**
 * @returns a list of all projects represented by the project interface
 */
export function getAllProjects(): Project[] {
  const projectsDir = path.join(process.cwd(), "projects");
  const filenames = fs.readdirSync(projectsDir);

  return filenames
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const { data, content } = getMarkdownParts(path.join(process.cwd(), "projects", filename))
      return {
        filename,
        title: data.title || "Untitled",
        organization: data.organization,
        position: data.position,
        dates: data.dates || "January 1970 to January 1970",
        skills: data.skills,
        summary: data.summary || "No summary provided.",
        order: data.order ?? 999,
        repo: data.repo,
        youtube: data.youtube,
        content: content
      };
    })
    .sort((a, b) => (a.order > b.order ? 1 : -1));
}