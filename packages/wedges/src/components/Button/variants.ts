import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "group wg-antialiased text-sm leading-6 font-medium transition-colors inline-flex justify-center items-center focus:outline focus:outline-2 outline-offset-2 disabled:pointer-events-none",
  {
    variants: {
      size: {
        "xs-icon": "py-1 px-8px gap-0",
        sm: "py-1 px-8px gap-0",
        md: "py-2 px-12px gap-1",
      },
      shape: {
        rounded: "rounded-lg",
        pill: "rounded-full",
      },
      variant: {
        primary:
          "bg-primary text-white outline-primary hover:bg-primary-600 dark:hover:bg-primary-500 disabled:opacity-50",

        secondary:
          "bg-secondary text-white dark:text-secondary-900 hover:bg-secondary-700 dark:disabled:text-wg-white-500 dark:hover:bg-secondary-800 outline-secondary disabled:bg-secondary-200",

        tertiary: "bg-surface hover:bg-surface-100",

        outline:
          "hover:bg-surface disabled:border-surface-100 border-surface-200 border shadow-wg-xs dark:shadow:none [--wg-border-width:1px]",

        transparent: "bg-transparent hover:bg-surface",
        link: "p-0 underline underline-offset-3",
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
          "bg-destructive hover:bg-destructive-600 dark:hover:bg-destructive-600 outline-destructive text-white dark:text-white dark:disabled:text-white disabled:bg-destructive disabled:opacity-50",
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
          "border-destructive disabled:border-destructive-100 dark:disabled:border-destructive-900 hover:bg-destructive-50 dark:hover:bg-surface",
      },
      {
        variant: "link",
        destructive: true,
        class:
          "focus:text-destructive-800 hover:text-destructive-800 dark:hover:text-destructive-400 dark:focus:text-destructive-400",
      },

      {
        variant: ["outline", "tertiary", "transparent", "link"],
        class: "text-surface-900 outline-primary disabled:text-surface-300",
      },
      {
        variant: ["outline", "tertiary", "transparent", "link"],
        destructive: true,
        class:
          "text-destructive-700 dark:text-destructive-500 outline-destructive disabled:text-destructive-300 dark:disabled:text-destructive/50",
      },
    ],
    defaultVariants: {
      shape: "rounded",
      size: "md",
      variant: "primary",
    },
  }
);

export const iconVariants = cva("transition-colors", {
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
      true: "text-current transition-none",
    },
    size: {
      "xs-icon": "h-5 w-5",
      sm: "h-5 w-5",
      md: "h-6 w-6",
    },
  },
  compoundVariants: [
    {
      variant: ["primary", "secondary"],
      class: "text-current transition-none",
    },
    {
      variant: ["tertiary", "outline", "transparent", "link"],
      class: "text-surface-400",
    },
    {
      variant: ["tertiary", "outline", "transparent", "link"],
      destructive: true,
      class: "text-current transition-none",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
