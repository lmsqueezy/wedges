import {
  ComputedFields,
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { addCode, postProcess, preProcess } from "./src/lib/rehype";

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

const LinkProperties = defineNestedType(() => ({
  name: "LinkProperties",
  fields: {
    radix: {
      type: "string",
    },
    source: {
      type: "string",
    },
    sandbox: {
      type: "string",
    },
  },
}));

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
    links: {
      type: "nested",
      of: LinkProperties,
      description: "The links of the article. An array of strings.",
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
    rehypePlugins: [
      preProcess,
      rehypeSlug,
      addCode,
      [rehypePrettyCode, prettyCodeOptions],
      postProcess,
    ],
  },
});
