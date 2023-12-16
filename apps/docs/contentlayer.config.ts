import {
  defineDocumentType,
  defineNestedType,
  makeSource,
  type ComputedFields,
} from "contentlayer/source-files";
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
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
  grid: true,
};

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      preProcess,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          properties: {
            className: ["bg-surface w-6 h-6 rounded-lg flex items-center justify-center"],
          },
          headingProperties: {
            "data-link": "",
          },
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          content: fromHtmlIsomorphic(
            '<svg fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.75 13.25L18 12C19.6569 10.3431 19.6569 7.65685 18 6V6C16.3431 4.34315 13.6569 4.34315 12 6L10.75 7.25"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.25 10.75L6 12C4.34315 13.6569 4.34315 16.3431 6 18V18C7.65685 19.6569 10.3431 19.6569 12 18L13.25 16.75"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.25 9.75L9.75 14.25"></path</svg>',
            { fragment: true }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          ).children,
        },
      ],
      addCode,
      // @ts-expect-error rehype-pretty-code types are wrong
      [rehypePrettyCode, prettyCodeOptions],
      postProcess,
    ],
  },
});
