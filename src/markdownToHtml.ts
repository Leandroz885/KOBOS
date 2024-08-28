import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import html from "remark-html";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export default async function markdownToHtml(markdown: string) {
  // const result = await remark().use(html).process(markdown)
  // return result.toString()
  // console.log("input: ", markdown);
  let result = await unified()
    .use(remarkParse) // Parse markdown content to a syntax tree
    .use(remarkRehype, { allowDangerousHtml: true }) // Pass raw HTML strings through
    .use(rehypeStringify, { allowDangerousHtml: true }) // Serialize the raw HTML strings
    .process(markdown);
  const resultAsString = result.toString();
  // console.log('resultAsString',resultAsString)
  return resultAsString;
}
