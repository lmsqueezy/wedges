import { cva } from "class-variance-authority";

export const alertVariants = cva("", {
  variants: {
    variant: {
      inline: "rounded-lg sm:items-center",
      expanded: "items-start rounded-r-lg border-l-2 p-4 pl-14px",
    },
    color: {
      gray: "border-surface-200 text-surface-500",
      primary: "border-primary text-surface-500",
      info: "border-wg-blue bg-wg-blue-50 text-wg-blue-700",
      success: "border-wg-green bg-wg-green-50 text-wg-green-700",
      error: "border-wg-red bg-wg-red-50 text-wg-red-700",
      warning: "border-wg-yellow bg-wg-yellow-50 text-wg-yellow-700",
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
