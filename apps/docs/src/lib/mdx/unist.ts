import { Demos } from "@/examples";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

import type { UnistNode, UnistTree } from "@/types/unist";

export const rehypeCopyCodePreProcess = () => (tree: UnistTree) => {
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

export const rehypeCopyCodePostProcess = () => (tree: UnistTree) => {
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

export const rehypeAddPreviewCode = () => (tree: UnistTree) => {
  visit(tree, (node: UnistNode) => {
    if (node.name === "PreviewComponent") {
      const nameAttribute = getNodeAttributeByName(node, "name");

      const code = nameAttribute
        ? (Demos[nameAttribute?.value as keyof typeof Demos]?.code ?? "")
        : "";

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

export const rehypeSourceRedirect = (options: { folderPath: string }) => {
  const { folderPath } = options;

  return (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      if (node.name === "Image" || node.name === "img" || node.name === "source") {
        const srcAttr = node.attributes?.find((attribute) => attribute.name === "src");
        if (srcAttr) {
          let srcVal = srcAttr.value as string;
          let folderPath = options.folderPath;

          if (srcVal.startsWith("/")) {
            srcVal = srcVal.slice(1);
          }

          if (folderPath.endsWith("/")) {
            folderPath = folderPath.slice(0, -1);
          }

          srcAttr.value = `${folderPath}/${srcVal}`;
        }
      }

      if (node.tagName === "p") {
        const image = node.children?.find((child) => child.tagName === "img");

        if (image) {
          const imageUrl = image.properties?.src as string;
          // @ts-ignore
          image.properties.src = `${folderPath}/${imageUrl}`;
        }
      }
    });
  };
};

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}
