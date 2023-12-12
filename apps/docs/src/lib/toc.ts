/* -------------------------------------------------------------------------- */
/*                         Table of Contents utilities                        */
/* -------------------------------------------------------------------------- */
// @ts-nocheck

import { toc } from "mdast-util-toc";
import { remark } from "remark";
import { visit } from "unist-util-visit";

type VFile = {
  data: TOCItems;
};

type Node = {
  type: string;
  children?: Node[];
  value?: string;
  url?: string;
};

type Item = {
  title: string;
  url: string;
  items?: Item[];
};

export type TOCItems = {
  items?: Item[];
};

const textTypes = ["text", "emphasis", "strong", "inlineCode"];

function flattenNode(node: Node) {
  const p = [];

  visit(node, (node) => {
    if (!textTypes.includes(node.type)) {
      return;
    }

    p.push(node.value);
  });

  return p.join(``);
}

function getItems(node: Node, current: Item): TOCItems {
  if (!node) {
    return {};
  }

  if (node.type === "paragraph") {
    visit(node, (item) => {
      if (item.type === "link") {
        current.url = item.url;
        current.title = flattenNode(node);
      }

      if (item.type === "text") {
        current.title = flattenNode(node);
      }
    });

    return current;
  }

  if (node.type === "list") {
    current.items = node.children.map((i) => getItems(i, {}));

    return current;
  } else if (node.type === "listItem") {
    const heading = getItems(node.children[0], {});

    if (node.children.length > 1) {
      getItems(node.children[1], heading);
    }

    return heading;
  }

  return {};
}

const getToc = () => (node: Node, file: VFile) => {
  const table = toc(node);
  const items = getItems(table.map, {});

  file.data = items;
};

export type TableOfContents = TOCItems;

export async function getTableOfContents(content: string): Promise<TableOfContents> {
  const result = await remark().use(getToc).process(content);

  return result.data as TableOfContents;
}
