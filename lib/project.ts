import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Project {
  filename: string;
  title: string;
  internship: string | null;
  dates: string;
  skills: string | null;
  summary: string;
  order: number
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
      const { data } = matter(
        fs.readFileSync(path.join(projectsDir, filename), "utf8")
      );
      return {
        filename,
        title: data.title || "Untitled",
        internship: data.internship,
        dates: data.dates || "January 1970 to January 1970",
        skills: data.skills,
        summary: data.summary || "No summary provided.",
        order: data.order || 999
      };
    })
    .sort((a, b) => (a.order < b.order ? 1 : -1));
}