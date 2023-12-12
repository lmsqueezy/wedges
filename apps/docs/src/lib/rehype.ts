import { u } from "unist-builder";
import { visit } from "unist-util-visit";

import type { UnistNode, UnistTree } from "@/types/unist";

import { Demos } from "../examples";

export const preProcess = () => (tree: UnistTree) => {
  visit(tree, "element", (node: UnistNode) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      if (!node.children || node.children.length === 0) {
        return;
      }

      const [codeEl] = node.children;

      if (codeEl?.tagName !== "code") {
        return;
      }

      node.raw = codeEl.children?.at(0)?.value;
    }
  });
};

export const postProcess = () => (tree: UnistTree) => {
  visit(tree, "element", (node: UnistNode) => {
    if (node?.type === "element" && node?.tagName === "figure") {
      if (!node.properties || !("data-rehype-pretty-code-figure" in node.properties)) {
        return;
      }

      // Get pre element
      const preElement = node.children?.find((child: UnistNode) => child.tagName === "pre");

      if (preElement?.tagName !== "pre") {
        return;
      }

      if (preElement?.properties) {
        preElement.properties.raw = node.raw!;
      }
    }
  });
};

export const addCode = () => (tree: UnistTree) => {
  visit<UnistNode, "element">(tree, (node: UnistNode) => {
    if (node.name === "PreviewComponent") {
      const nameAttribute = getNodeAttributeByName(node, "name");
      const code = nameAttribute ? Demos[nameAttribute.name]?.code ?? "" : "";

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
        }) as unknown as UnistNode
      );
    }
  });
};

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}
