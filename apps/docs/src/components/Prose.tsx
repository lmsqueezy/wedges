import { forwardRef, isValidElement, type HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

type ProseProps = HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
};

const Prose = forwardRef<HTMLDivElement, ProseProps>(
  ({ asChild = false, className, children, ...otherProps }, ref) => {
    const useAsChild = asChild && isValidElement(children);
    const Component = useAsChild ? Slot : "div";

    return (
      <Component
        ref={ref}
        className={cn(
          className,
          "prose prose-neutral dark:prose-invert max-w-none leading-7 text-gray-500 dark:text-white/60 [&_h4+p]:!mt-0",

          // headings
          "prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal prose-headings:text-gray-900 dark:prose-headings:text-white lg:prose-headings:scroll-mt-[7.5rem]",
          "prose-h1:leading-[44px] prose-h1:tracking-[-.02em]",
          "prose-h2:text-[32px] prose-h2:leading-[40px] prose-h2:tracking-[-.02em]",
          "prose-h3:text-[26px] prose-h3:leading-[40px] prose-h3:tracking-[-.02em]",
          "prose-h4:text-[20px] prose-h4:mt-[2.5rem] prose-h4:tracking-[-.02em]",
          "prose-p:my-6",
          "[&_[data-link]:hover>a]:duration-180 [&_[data-link]:hover>a]:opacity-100 [&_[data-link]:hover>a]:transition-opacity [&_[data-link]>a:hover]:text-primary [&_[data-link]>a>svg]:h-5 [&_[data-link]>a>svg]:w-5 [&_[data-link]>a]:translate-y-[2px] [&_[data-link]>a]:border-none [&_[data-link]>a]:text-surface-400 [&_[data-link]>a]:opacity-0 [&_[data-link]]:flex [&_[data-link]]:items-center [&_[data-link]]:gap-2",

          // lead
          "prose-lead:text-surface-500 dark:prose-lead:text-surface-400",

          // links
          "prose-a:border-b prose-a:border-current prose-a:font-normal prose-a:text-purple-500 hover:prose-a:text-gray-900 dark:prose-a:border-purple-400 dark:prose-a:text-purple-400 hover:dark:prose-a:text-white",

          // link underline
          "prose-a:no-underline",

          // hr
          "prose-hr:my-12 prose-hr:border-surface-100",

          // th
          "prose-th:font-sans prose-th:font-medium prose-th:p-3",

          // thead
          "prose-thead:border-surface-100 prose-thead:bg-surface-50/60",

          // td
          "prose-td:p-3 prose-td:border-surface",

          // p
          "prose-p:[text-wrap:pretty]",

          // figure
          "[&_[role=tabpanel]>[data-rehype-pretty-code-figure]]:mt-0"
        )}
        {...otherProps}
      >
        {children}
      </Component>
    );
  }
);

Prose.displayName = "Prose";

export { Prose };
