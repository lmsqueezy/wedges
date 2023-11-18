import { HTMLAttributes, forwardRef, isValidElement } from "react";
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
          "prose prose-neutral dark:prose-invert text-surface-600 max-w-none leading-relaxed dark:text-white/60 [&_h4+p]:!mt-0",

          // headings
          "prose-headings:scroll-mt-28 prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]",
          "prose-h1:leading-[44px] prose-h1:tracking-[-.02em]",
          "prose-h2:text-[32px] prose-h2:leading-[42px] prose-h2:tracking-[-.02em]",
          "prose-h3:text-[26px] prose-h3:leading-[40px] prose-h3:tracking-[-.02em]",
          "prose-h4:mt-[2.5rem] prose-h4:tracking-[-.02em]",
          "prose-p:my-6",

          // lead
          "prose-lead:text-surface-500 dark:prose-lead:text-surface-400",

          // links
          "prose-a:text-purple-500 dark:prose-a:text-purple-400 hover:dark:prose-a:text-white prose-a:border-b prose-a:border-current dark:prose-a:border-purple-400 prose-a:font-normal hover:prose-a:text-gray-900",

          // link underline
          "prose-a:no-underline",

          // hr
          "dark:prose-hr:border-slate-800 prose-hr:my-12",

          // th
          "prose-th:font-sans prose-th:font-medium"
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
