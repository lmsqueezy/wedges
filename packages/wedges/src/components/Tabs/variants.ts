import { cva } from "cva";

export const tabListVariants = cva({
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
        "overflow-hidden rounded-lg border border-surface-200 shadow-wg-xs dark:border-surface-100 [&:has(:focus-visible)]:overflow-visible",
    },
  ],

  defaultVariants: {
    variant: "fill",
  },
});

export const tabVariants = cva({
  base: "leading-6 data-[state=active]:font-medium",
  variants: {
    variant: {
      fill: [
        "rounded-lg bg-transparent px-3 py-2 hover:bg-surface hover:text-surface-900",

        // active
        "data-[state=active]:bg-surface data-[state=active]:text-surface-900",
      ],

      underlined: [
        "-mb-px border-b-2 border-transparent px-3 pb-3 pt-2 hover:border-surface-200 hover:text-surface-900 focus-visible:-outline-offset-2 dark:hover:border-surface-100",

        // active
        "data-[state=active]:border-primary data-[state=active]:text-primary dark:data-[state=active]:border-primary",
      ],

      "contained-bottom":
        "border-b-2 border-transparent hover:border-b-surface data-[state=active]:border-b-primary",

      "contained-top":
        "border-t-2 border-transparent hover:border-t-surface data-[state=active]:border-t-primary",
    },
  },
  compoundVariants: [
    {
      variant: ["contained-top", "contained-bottom"],
      class: [
        "border-r border-r-surface-100 bg-transparent bg-clip-padding px-4 py-14px [--wg-border-width:1px] last:border-r-0 focus-visible:-outline-offset-2 first:focus-visible:rounded-s-[7px] last:focus-visible:rounded-r-[7px] hover:[&:not(:disabled)]:bg-surface hover:[&:not(:disabled)]:text-surface-900",

        // active
        "data-[state=active]:text-primary",
      ],
    },
  ],
  defaultVariants: {
    variant: "fill",
  },
});
