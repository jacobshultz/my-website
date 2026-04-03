import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Article {
  filename: string;
  title: string;
  date: string;
  summary: string;
}

/**
 * @returns a list of all articles represented by the article interface
 */
export function getAllArticles(): Article[] {
  const articlesDir = path.join(process.cwd(), "articles");
  const filenames = fs.readdirSync(articlesDir);

  return filenames
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const { data } = matter(
        fs.readFileSync(path.join(articlesDir, filename), "utf8")
      );
      return {
        filename,
        title: data.title || "Untitled",
        date: data.date?.toISOString().split("T")[0] || "1970-01-01",
        summary: data.summary || "No summary provided.",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}