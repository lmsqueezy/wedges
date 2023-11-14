import { cva } from "class-variance-authority";

export const tabListVariants = cva("", {
  variants: {
    variant: {
      fill: "gap-2",
      underlined: "gap-2 border-b border-surface-100 dark:border-surface-50",
      "contained-bottom": "",
      "contained-top": "",
    },
  },
  compoundVariants: [
    {
      variant: ["contained-top", "contained-bottom"],
      class:
        "overflow-hidden [&:has(:focus-visible)]:overflow-visible border border-surface-200 dark:border-surface-100 shadow-wg-xs rounded-lg",
    },
  ],

  defaultVariants: {
    variant: "fill",
  },
});

export const tabVariants = cva("leading-6", {
  variants: {
    variant: {
      fill: [
        "py-2 px-3 rounded-lg bg-transparent hover:bg-surface hover:text-surface-900",

        // active
        "data-[state=active]:text-surface-900 data-[state=active]:bg-surface",
      ],

      underlined: [
        "-mb-px focus-visible:-outline-offset-2 hover:text-surface-900 hover:border-surface-200 dark:hover:border-surface-100 border-b-2 border-transparent pt-2 pb-3 px-3",

        // active
        "data-[state=active]:border-primary data-[state=active]:text-primary dark:data-[state=active]:border-primary",
      ],

      "contained-bottom":
        "border-b-2 hover:border-b-surface border-transparent data-[state=active]:border-b-primary",

      "contained-top":
        "border-t-2 border-transparent hover:border-t-surface data-[state=active]:border-t-primary ",
    },
  },
  compoundVariants: [
    {
      variant: ["contained-top", "contained-bottom"],
      class: [
        "px-4 py-3 border-r border-r-surface-100 last:border-r-0 bg-transparent hover:bg-surface hover:text-surface-900 bg-clip-padding focus-visible:-outline-offset-2 first:focus-visible:rounded-s-[7px] last:focus-visible:rounded-r-[7px]",

        // active
        "data-[state=active]:text-primary",
      ],
    },
  ],
  defaultVariants: {
    variant: "fill",
  },
});
