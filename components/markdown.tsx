import { remark } from "remark";
import html from "remark-html";

type Props = { content: string }

/**Convert markdown contents to a HTML react component */
export default async function MarkdownContentToHTML({ content }: Props) {
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return (
    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
  );
}