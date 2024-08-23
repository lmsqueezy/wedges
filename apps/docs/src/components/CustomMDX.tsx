import { type AnchorHTMLAttributes, type ComponentProps, type HTMLAttributes } from "react";
import Image from "next/image";
import Link from "next/link";
import { Alert, Button, Tooltip } from "@lemonsqueezy/wedges";
import { transformerNotationDiff } from "@shikijs/transformers";
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkSmartypants from "remark-smartypants";

import {
  rehypeAddPreviewCode,
  rehypeCopyCodePostProcess,
  rehypeCopyCodePreProcess,
  rehypeSourceRedirect,
} from "@/lib/mdx/unist";
import { cn } from "@/lib/utils";

import { Colors } from "./Colors";
import { CopyButton } from "./CopyButton";
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "./CustomTabs";
import { LemonSqueezyLogomark } from "./icons/lemonsqueezy";
import { PreviewComponent } from "./PreviewComponent";
import { PropsTable } from "./PropsTable";

const prettyCodeOptions: Options = {
  defaultLang: { block: "tsx" },
  grid: true,
  keepBackground: false,
  transformers: [transformerNotationDiff()],
  theme: "github-dark-dimmed",
};

/* -------------------------------------------------------------------------- */
/*                                 Components                                 */
/* -------------------------------------------------------------------------- */

function CustomLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const href = props.href;

  if (href?.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href?.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function CustomCode(props: HTMLAttributes<HTMLElement>) {
  const { className, ...otherProps } = props;

  return (
    <code
      className={cn(
        "not-prose relative rounded bg-surface-100/70 px-[0.3rem] py-[0.15rem] font-mono text-[13px] leading-6 text-surface-800",
        className
      )}
      {...otherProps}
    />
  );
}

function CustomPre(props: HTMLAttributes<HTMLPreElement> & { raw?: string }) {
  const { children, className, raw, ...otherProps } = props;

  return (
    <pre
      className={cn(
        "not-prose my-6 max-h-[650px] overflow-x-auto rounded-lg bg-wg-gray-900 py-4 leading-6",
        className
      )}
      {...otherProps}
    >
      {children}
      {raw ? <CopyButton className="absolute right-2 top-2" content={raw} /> : null}
    </pre>
  );
}

function LinkCard({ className, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "not-prose flex aspect-[3/2] min-h-[140px] w-full flex-col items-center justify-center gap-4 rounded-xl border border-surface-100 bg-white p-6 text-surface-400 shadow-wg-xs outline-primary transition-colors duration-75 last-of-type:aspect-auto hover:border-surface-200/70 hover:bg-surface-50/50 hover:text-surface-900 sm:p-10 [&>p]:text-center",
        className
      )}
      {...props}
    />
  );
}

function Steps(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="[&>h3]:step [&>h4]:step steps mb-16 ml-4 border-l border-surface-100 pl-8 [counter-reset:step] [&>h3::before]:top-0 [&>h3]:relative [&>h4::before]:-top-1 [&>h4]:relative"
      {...props}
    />
  );
}

export function CustomMDX(
  props: ComponentProps<typeof MDXRemote> & {
    folderPath: string;
  }
) {
  const { folderPath } = props;

  const components = {
    a: CustomLink,
    code: CustomCode,
    pre: CustomPre,
    PropsTable,
    PreviewComponent,
    Alert,
    Button,
    Tabs: TabsRoot,
    TabsContent,
    TabsList,
    TabsTrigger,
    Tooltip,
    Logomark: LemonSqueezyLogomark,
    Image: (props: ComponentProps<typeof Image>) => <Image {...props} />,
    Colors,
    LinkCard,
    Steps,
  };

  return (
    <MDXRemote
      components={components}
      options={{
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkSmartypants],
          rehypePlugins: [
            rehypeSlug,
            rehypeCopyCodePreProcess,
            rehypeAddPreviewCode,
            [rehypeSourceRedirect, { folderPath }],
            [
              rehypeAutolinkHeadings,
              {
                behavior: "append",
                properties: {
                  className: ["outline-primary size-6 rounded-lg flex items-center justify-center"],
                },
                headingProperties: {
                  "data-link": "",
                },

                content: fromHtmlIsomorphic(
                  '<svg fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.75 13.25L18 12C19.6569 10.3431 19.6569 7.65685 18 6V6C16.3431 4.34315 13.6569 4.34315 12 6L10.75 7.25"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.25 10.75L6 12C4.34315 13.6569 4.34315 16.3431 6 18V18C7.65685 19.6569 10.3431 19.6569 12 18L13.25 16.75"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.25 9.75L9.75 14.25"></path</svg>',
                  { fragment: true }
                ).children,
              },
            ],

            [rehypePrettyCode, prettyCodeOptions],
            rehypeCopyCodePostProcess,
          ],
        },
      }}
      {...props}
    />
  );
}
