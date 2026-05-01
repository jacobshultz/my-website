import "../../../styles/article-viewer.css";
import "../../../styles/markdown.css";
import path from "path";
import Return from "@/components/return"
import { getMarkdownParts } from "@/lib/markdown";
import MarkdownContentToHTML from "@/components/markdown";

interface PageProps {
  params: { slug: string };
}

export default async function ArticleViewer({ params }: PageProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "articles", slug);

  let { data, content } = getMarkdownParts(filePath);

  return (
    <>
    <Return />
    <article>
      <div id="topper">
        <h2>{data.title || "Untitled"}</h2>
        <span>{data.date?.toISOString().split("T")[0] || "Unknown date"}</span>
      </div>
      <MarkdownContentToHTML content={content} />
    </article>
    </>
  );
}