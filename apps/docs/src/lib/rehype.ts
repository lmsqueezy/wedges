import { visit } from "unist-util-visit";

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
