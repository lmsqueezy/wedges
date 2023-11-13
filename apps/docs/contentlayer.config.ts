import { ComputedFields, defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { postProcess, preProcess } from "./src/lib/rehype";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the article",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the article",
      required: false,
    },
    breadcrumbs: {
      type: "list",
      of: { type: "string" },
      description: "The breadcrumbs of the article. An array of strings.",
      required: false,
    },
    toc: {
      type: "boolean",
      default: true,
      required: false,
    },
  },
  computedFields,
}));

const prettyCodeOptions: Options = {
  defaultLang: {
    block: "tsx",
  },
  grid: false,
};

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [preProcess, rehypeSlug, [rehypePrettyCode, prettyCodeOptions], postProcess],
  },
});
