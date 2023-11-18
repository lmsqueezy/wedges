import { cva } from "class-variance-authority";

export const tabListVariants = cva("", {
  variants: {
    variant: {
      fill: "gap-2",
      underlined: "border-surface-100 dark:border-surface-50 gap-2 border-b",
      "contained-bottom": "",
      "contained-top": "",
    },
  },
  compoundVariants: [
    {
      variant: ["contained-top", "contained-bottom"],
      class:
        "border-surface-200 dark:border-surface-100 shadow-wg-xs overflow-hidden rounded-lg border [&:has(:focus-visible)]:overflow-visible",
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
        "hover:bg-surface hover:text-surface-900 rounded-lg bg-transparent px-3 py-2",

        // active
        "data-[state=active]:text-surface-900 data-[state=active]:bg-surface",
      ],

      underlined: [
        "hover:text-surface-900 hover:border-surface-200 dark:hover:border-surface-100 -mb-px border-b-2 border-transparent px-3 pb-3 pt-2 focus-visible:-outline-offset-2",

        // active
        "data-[state=active]:border-primary data-[state=active]:text-primary dark:data-[state=active]:border-primary",
      ],

      "contained-bottom":
        "hover:border-b-surface data-[state=active]:border-b-primary border-b-2 border-transparent",

      "contained-top":
        "hover:border-t-surface data-[state=active]:border-t-primary border-t-2 border-transparent ",
    },
  },
  compoundVariants: [
    {
      variant: ["contained-top", "contained-bottom"],
      class: [
        "border-r-surface-100 hover:bg-surface hover:text-surface-900 border-r bg-transparent bg-clip-padding px-4 py-3 [--wg-border-width:1px] last:border-r-0 focus-visible:-outline-offset-2 first:focus-visible:rounded-s-[7px] last:focus-visible:rounded-r-[7px]",

        // active
        "data-[state=active]:text-primary",
      ],
    },
  ],
  defaultVariants: {
    variant: "fill",
  },
});
