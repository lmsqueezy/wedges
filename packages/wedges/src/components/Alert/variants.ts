import { cva } from "class-variance-authority";

export const alertVariants = cva("", {
  variants: {
    variant: {
      inline: "rounded-lg",
      expanded: "p-4 pl-14px border-l-2 items-start rounded-r-lg",
    },
    color: {
      gray: "text-surface-500 border-surface-200",
      primary: "text-surface-500 border-primary",
      info: "bg-wg-blue-50 text-wg-blue-700 border-wg-blue",
      success: "bg-wg-green-50 text-wg-green-700 border-wg-green",
      error: "bg-wg-red-50 text-wg-red-700 border-wg-red",
      warning: "bg-wg-yellow-50 text-wg-yellow-700 border-wg-yellow",
    },
  },
  defaultVariants: {
    variant: "inline",
    color: "gray",
  },
});

export const alertTitleVariants = cva("font-medium", {
  variants: {
    color: {
      gray: "text-surface-900",
      primary: "text-surface-900",
      info: "text-wg-blue-800 dark:text-wg-blue",
      success: "text-wg-green-800 dark:text-wg-green",
      error: "text-wg-red-800 dark:text-wg-red",
      warning: "text-wg-yellow-800 dark:text-wg-yellow",
    },
  },
  defaultVariants: {
    color: "gray",
  },
});

export const alertIconVariants = cva("", {
  variants: {
    color: {
      gray: "text-surface-200",
      primary: "text-primary",
      info: "text-wg-blue",
      success: "text-wg-green",
      error: "text-wg-red",
      warning: "text-wg-yellow",
    },
  },
  defaultVariants: {
    color: "gray",
  },
});
