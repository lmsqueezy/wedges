"use client";
import { Alert, Button } from "@lmsqueezy/wedges";
import { useMDXComponent } from "next-contentlayer/hooks";

import { CopyButton } from "./CopyButton";

import { cn } from "@/lib/utils";

type MdxProps = {
  code: string;
};

// Here we register components we want to use in MDX.
const components = {
  Button,
  Alert,

  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step steps border-surface-100 mb-16 ml-4 border-l pl-8 [counter-reset:step]"
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
          "not-prose relative my-6 max-h-[650px] overflow-x-auto rounded-lg py-4",
          className
        )}
        {...otherProps}
      >
        {children}
        {raw ? <CopyButton className="absolute right-3 top-2" content={raw} /> : null}
      </pre>
    );
  },

  code: ({ className, ...otherProps }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "not-prose bg-surface-100 text-surface-900 relative rounded px-[0.3rem] py-[0.2rem] font-mono text-[13px]",
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
