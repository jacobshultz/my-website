import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";

/**Get markdown stuff from file, send to not found if issues */
export function getMarkdownParts(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  return matter(fileContents)
}