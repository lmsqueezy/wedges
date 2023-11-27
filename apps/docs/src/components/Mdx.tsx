"use client";

import Image from "next/image";
import { Alert, Button, Tabs, Tooltip } from "@lmsqueezy/wedges";
import { useMDXComponent } from "next-contentlayer/hooks";

import { cn } from "@/lib/utils";

import { Colors } from "./Colors";
import { CopyButton } from "./CopyButton";
import { PreviewComponent } from "./PreviewComponent";

type MdxProps = {
  code: string;
};

// Here we register components we want to use in MDX.
const components = {
  Alert,
  Button,
  Image,
  PreviewComponent,
  Tabs,
  Tooltip,
  Colors,
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step steps mb-16 ml-4 border-l border-surface-100 pl-8 [counter-reset:step]"
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
