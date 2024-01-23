import { cva } from "cva";

export const buttonVariants = cva({
  base: "group inline-flex shrink-0 select-none items-center justify-center text-sm font-medium leading-6 transition-colors duration-100 wg-antialiased focus:outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none",
  variants: {
    size: {
      "xs-icon": "gap-0 px-8px py-1",
      sm: "gap-0 px-8px py-1",
      md: "gap-1 px-12px py-2",
    },
    shape: {
      rounded: "rounded-lg",
      pill: "rounded-full",
    },
    variant: {
      primary: "bg-primary text-white outline-primary hover:bg-primary-600 disabled:opacity-50",

      secondary:
        "bg-secondary text-white outline-secondary hover:bg-secondary-700 disabled:bg-secondary-200 dark:text-secondary-900 dark:hover:bg-secondary-800 dark:disabled:text-wg-white-500",

      tertiary: "bg-surface hover:bg-surface-100",

      outline:
        "dark:shadow:none border border-surface-200 shadow-wg-xs [--wg-border-width:1px] hover:bg-surface disabled:border-surface-50 dark:border-surface-100",

      transparent: "bg-transparent hover:bg-surface",
      link: "p-0 underline underline-offset-3 focus-visible:text-primary",
    },

    destructive: {
      true: [],
      false: [],
    },
  },
  compoundVariants: [
    {
      variant: "outline",
      size: "md",
      class: "py-8px",
    },
    {
      variant: "outline",
      size: "sm",
      class: "py-4px",
    },
    {
      variant: ["primary", "secondary"],
      destructive: true,
      class:
        "bg-destructive text-white outline-destructive hover:bg-destructive-600 disabled:bg-destructive disabled:opacity-50 dark:text-white dark:hover:bg-destructive-600 dark:disabled:text-white",
    },
    {
      variant: "tertiary",
      destructive: true,
      class:
        "bg-destructive-50 hover:bg-destructive-100 disabled:bg-destructive-50 dark:bg-surface dark:hover:bg-surface-200",
    },
    {
      variant: "transparent",
      destructive: true,
      class: "hover:bg-destructive-50 dark:hover:bg-surface",
    },
    {
      variant: "outline",
      destructive: true,
      class:
        "border-destructive hover:bg-destructive-50 disabled:border-destructive-100 dark:border-destructive dark:hover:bg-surface dark:disabled:border-destructive-900",
    },
    {
      variant: "link",
      destructive: true,
      class:
        "hover:text-destructive-800 focus-visible:text-destructive-800 dark:hover:text-destructive-400 dark:focus-visible:text-destructive-400",
    },

    {
      variant: ["outline", "tertiary", "transparent", "link"],
      class: "text-surface-900 outline-primary disabled:text-surface-300",
    },
    {
      variant: ["outline", "tertiary", "transparent", "link"],
      destructive: true,
      class:
        "text-destructive-700 outline-destructive disabled:text-destructive-300 dark:text-destructive-500 dark:disabled:text-destructive/50",
    },
  ],
  defaultVariants: {
    shape: "rounded",
    size: "md",
    variant: "primary",
  },
});

export const iconVariants = cva({
  base: "text-current",
  variants: {
    variant: {
      primary: "",
      secondary: "",
      tertiary: "",
      outline: "",
      transparent: "",
      link: "",
    },
    destructive: {
      true: "text-current",
    },
    size: {
      "xs-icon": "size-5",
      sm: "size-5",
      md: "size-6",
    },
  },
  compoundVariants: [
    {
      variant: ["tertiary", "outline", "transparent", "link"],
      class: "opacity-50",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
