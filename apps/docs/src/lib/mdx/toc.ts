/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { fromMarkdown } from "mdast-util-from-markdown";
import { toc } from "mdast-util-toc";

export type TOCItem = {
  title: string;
  url: string;
  level: number;
  children: TOCItem[];
};

function removeFrontMatter(markdown: string) {
  // Regular expression to match YAML frontmatter
  const frontMatterRegex = /^---[\s\S]*?---\n/;
  return markdown.replace(frontMatterRegex, "");
}

export function extractTOC(markdown: string) {
  const cleanedMarkdown = removeFrontMatter(markdown);
  const tree = fromMarkdown(cleanedMarkdown);
  const tableOfContents = toc(tree);
  const tocItems: TOCItem[] = [];

  const buildTOC = (node: any, level = 1): TOCItem | null => {
    if (node.type === "listItem" && node.children && node.children[0].type === "paragraph") {
      const paragraph = node.children[0];
      const heading = paragraph.children[0];

      if (heading.type === "link") {
        const title = heading.children[0].value;
        const url = heading.url;
        const children: TOCItem[] = [];

        if (node.children.length > 1 && node.children[1].type === "list") {
          node.children[1].children.forEach((child: any) => {
            const childItem = buildTOC(child, level + 1);
            if (childItem) {
              children.push(childItem);
            }
          });
        }

        return { title, url, level, children };
      }
    }
    return null;
  };

  if (tableOfContents.map?.children) {
    tableOfContents.map.children.forEach((node) => {
      const tocItem = buildTOC(node);

      if (tocItem) {
        tocItems.push(tocItem);
      }
    });
  }

  return tocItems;
}

/**
 * Extracts the IDs from a Table of Contents (TOC) array.
 *
 * @param toc - The Table of Contents array.
 * @returns An array of extracted IDs.
 */
export function extractFlatIds(toc: TOCItem[]): string[] {
  const ids: string[] = [];

  const traverse = (items: TOCItem[]) => {
    items.forEach((item) => {
      const id = item.url.split("#")[1];
      if (id) ids.push(id);

      if (item.children.length > 0) {
        traverse(item.children);
      }
    });
  };

  traverse(toc);

  return ids;
}
