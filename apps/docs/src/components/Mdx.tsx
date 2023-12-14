"use client";

import Image from "next/image";
import Link from "next/link";
import { Alert, Button, Tabs, Tooltip } from "@lmsqueezy/wedges";
import { useMDXComponent } from "next-contentlayer/hooks";

import { cn } from "@/lib/utils";

import { Colors } from "./Colors";
import { CopyButton } from "./CopyButton";
import { Logomark } from "./Logo";
import { PreviewComponent } from "./PreviewComponent";
import { PropsTable } from "./PropsTable";

type MdxProps = {
  code: string;
};

// Here we register components we want to use in MDX.
const components = {
  Alert,
  Button,
  Image,
  PreviewComponent,
  PropsTable,
  Tabs,
  Link,
  Tooltip,
  Colors,
  Logomark,
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step [&>h4]:step steps mb-16 ml-4 border-l border-surface-100 pl-8 [counter-reset:step] [&>h3::before]:top-0 [&>h3]:relative [&>h4::before]:-top-1 [&>h4]:relative"
      {...props}
    />
  ),
  LinkCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        "not-prose flex min-h-[140px] w-full flex-col items-center justify-center gap-4 rounded-xl border border-surface-100 bg-white p-6 text-surface-400 shadow-wg-xs outline-primary transition-colors hover:border-surface-200/70 hover:bg-surface-50/50 hover:text-surface-900 sm:p-10 [&>p]:text-center",
        className
      )}
      {...props}
    />
  ),
  pre: ({
    children,
    className,
    raw,
    ...otherProps
  }: React.HTMLAttributes<HTMLPreElement> & { raw?: string }) => {
    return (
      <pre
        className={cn(
          "not-prose my-6 max-h-[650px] overflow-x-auto rounded-lg py-4",
          raw && "!bg-wg-gray-800",
          className
        )}
        {...otherProps}
      >
        {children}
        {raw ? <CopyButton className="absolute right-3 top-3" content={raw} /> : null}
      </pre>
    );
  },
  code: ({ className, ...otherProps }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "not-prose relative rounded bg-surface-100 px-[0.3rem] py-[0.2rem] font-mono text-[13px] text-surface-900",
        className
      )}
      {...otherProps}
    />
  ),
};

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  if (!code) {
    return null;
  }

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
