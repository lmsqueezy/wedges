import { visit } from "unist-util-visit";
import { u } from "unist-builder";

import { Demos } from "../examples";

export const preProcess = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;

      if (codeEl.tagName !== "code") {
        return;
      }

      node.raw = codeEl.children?.at(0).value;
    }
  });
};

export const postProcess = () => (tree: any) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "span") {
      if (!("data-rehype-pretty-code-fragment" in node.properties)) {
        return;
      }

      // Skip for inline code
      node.properties = undefined;
    }

    if (node?.type === "element" && node?.tagName === "div") {
      if (!("data-rehype-pretty-code-fragment" in node.properties)) {
        return;
      }

      // Get pre element
      const preElement = node.children.find((child: any) => child.tagName === "pre");

      if (preElement.tagName !== "pre") {
        return;
      }

      preElement.properties["raw"] = node.raw;
    }
  });
};

export const addCode = () => (tree: any) => {
  visit(tree, (node) => {
    if (node.name === "PreviewComponent") {
      const name = getNodeAttributeByName(node, "name");
      const code = Demos[name?.value]?.code ?? "";

      node.children?.push(
        u("element", {
          tagName: "pre",
          properties: {
            raw: code,
          },
          raw: code,
          children: [
            u("element", {
              tagName: "code",
              data: { meta: "showLineNumbers" },
              properties: {
                className: ["language-tsx"],
              },
              children: [
                {
                  type: "text",
                  value: code,
                },
              ],
            }),
          ],
        })
      );
    }
  });
};

function getNodeAttributeByName(node: any, name: string) {
  return node.attributes?.find((attribute: any) => attribute.name === name);
}
