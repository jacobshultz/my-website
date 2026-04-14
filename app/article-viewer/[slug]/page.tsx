import "../../../styles/article-viewer.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";
import Return from "@/components/return"

interface PageProps {
  params: { slug: string };
}

export default async function ArticleViewer({ params }: PageProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "articles", slug);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return (
    <article>
      <Return />
      <div id="topper">
        <h2>{data.title || "Untitled"}</h2>
        <span>{data.date?.toISOString().split("T")[0] || "Unknown date"}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}