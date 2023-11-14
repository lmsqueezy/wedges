import { cva } from "class-variance-authority";

const defaultDarkClasses = "dark:wg-bg-surface dark:outline-surface-50";

export const badgeVariants = cva("wg-antialiased rounded-lg py-1 px-2 flex items-center", {
  variants: {
    size: {
      sm: "text-xs leading-4",
      md: "text-sm leading-6",
    },
    color: {
      gray: [
        "wg-bg-surface text-surface-900 dark:text-surface-800 outline-surface-200 dark:outline-surface-100",
        defaultDarkClasses,
      ],
      green: [
        "wg-bg-wg-green-50 outline-wg-green-200 text-wg-green-800 dark:text-wg-green",
        defaultDarkClasses,
      ],
      purple: [
        "wg-bg-wg-purple-50 outline-wg-purple-200 text-wg-purple-700 dark:text-wg-purple-400",
        defaultDarkClasses,
      ],
      orange: [
        "wg-bg-wg-orange-50 outline-wg-orange-200 text-wg-orange-800 dark:text-wg-orange",
        defaultDarkClasses,
      ],
      red: [
        "wg-bg-wg-red-50 outline-wg-red-200 text-wg-red-700 dark:text-wg-red",
        defaultDarkClasses,
      ],
      pink: [
        "wg-bg-wg-pink-50 outline-wg-pink-200 text-wg-pink-700 dark:text-wg-pink",
        defaultDarkClasses,
      ],
      blue: [
        "wg-bg-wg-blue-50 outline-wg-blue-200 text-wg-blue-700 dark:text-wg-blue",
        defaultDarkClasses,
      ],
      yellow: [
        "wg-bg-wg-yellow-50 outline-wg-yellow-300 text-wg-yellow-800 dark:text-wg-yellow",
        defaultDarkClasses,
      ],
      primary: [
        "wg-bg-primary-50 outline-primary-200 text-primary-800 dark:text-primary-300",
        defaultDarkClasses,
      ],
    },
    shape: {
      rounded: "rounded-lg",
      pill: "rounded-full",
    },
    stroke: {
      true: "outline -outline-offset-1 outline-1",
      false: "",
    },
  },
  defaultVariants: {
    color: "gray",
    shape: "rounded",
  },
});

export const iconVariants = cva("h-4 w-4", {
  variants: {
    color: {
      gray: "text-surface-400",
      green: "text-wg-green-700",
      purple: "text-wg-purple-700",
      orange: "text-wg-orange-700",
      red: "text-wg-red-700",
      pink: "text-wg-pink-700",
      blue: "text-wg-blue-700",
      yellow: "text-wg-yellow-700",
      primary: "text-primary-700",
    },
  },
  compoundVariants: [
    {
      color: ["green", "purple", "orange", "red", "pink", "blue", "yellow", "primary"],
      class: "dark:text-current",
    },
  ],
  defaultVariants: {
    color: "gray",
  },
});
