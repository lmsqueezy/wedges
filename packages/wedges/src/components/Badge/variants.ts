import { cva } from "cva";

const defaultDarkClasses = "dark:wg-bg-surface/5 dark:outline-surface-50";

export const badgeVariants = cva({
  base: "inline-flex items-center rounded-lg px-2 py-1 wg-antialiased",
  variants: {
    size: {
      sm: "text-xs leading-4",
      md: "text-sm leading-5",
    },
    color: {
      gray: [
        "text-surface-900 outline-surface-200 wg-bg-surface dark:text-surface-800 dark:outline-surface-100",
        defaultDarkClasses,
      ],
      green: [
        "text-wg-green-800 outline-wg-green-200 wg-bg-wg-green-50 dark:text-wg-green",
        defaultDarkClasses,
      ],
      purple: [
        "text-wg-purple-700 outline-wg-purple-200 wg-bg-wg-purple-50 dark:text-wg-purple-400",
        defaultDarkClasses,
      ],
      orange: [
        "text-wg-orange-800 outline-wg-orange-200 wg-bg-wg-orange-50 dark:text-wg-orange",
        defaultDarkClasses,
      ],
      red: [
        "text-wg-red-700 outline-wg-red-200 wg-bg-wg-red-50 dark:text-wg-red",
        defaultDarkClasses,
      ],
      pink: [
        "text-wg-pink-800 outline-wg-pink-200 wg-bg-wg-pink-50 dark:text-wg-pink",
        defaultDarkClasses,
      ],
      blue: [
        "text-wg-blue-700 outline-wg-blue-200 wg-bg-wg-blue-50 dark:text-wg-blue",
        defaultDarkClasses,
      ],
      yellow: [
        "text-wg-yellow-800 outline-wg-yellow-300 wg-bg-wg-yellow-50 dark:text-wg-yellow",
        defaultDarkClasses,
      ],
      primary: [
        "text-primary-800 outline-primary-200 wg-bg-primary-50 dark:text-primary-300",
        defaultDarkClasses,
      ],
    },
    shape: {
      rounded: "rounded-lg",
      pill: "rounded-full",
    },
    stroke: {
      true: "outline outline-1 -outline-offset-1",
      false: "",
    },
  },
  defaultVariants: {
    color: "gray",
    shape: "rounded",
  },
});

export const iconVariants = cva({
  base: "size-4",
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
