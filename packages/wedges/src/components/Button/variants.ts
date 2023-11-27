import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "wg-antialiased group inline-flex shrink-0 select-none items-center justify-center text-sm font-medium leading-6 transition-colors duration-100 focus:outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none",
  {
    variants: {
      size: {
        "xs-icon": "px-8px gap-0 py-1",
        sm: "px-8px gap-0 py-1",
        md: "px-12px gap-1 py-2",
      },
      shape: {
        rounded: "rounded-lg",
        pill: "rounded-full",
      },
      variant: {
        primary: "bg-primary outline-primary hover:bg-primary-600 text-white disabled:opacity-50",

        secondary:
          "bg-secondary dark:text-secondary-900 hover:bg-secondary-700 dark:disabled:text-wg-white-500 dark:hover:bg-secondary-800 outline-secondary disabled:bg-secondary-200 text-white",

        tertiary: "bg-surface hover:bg-surface-100",

        outline:
          "hover:bg-surface disabled:border-surface-50 border-surface-200 dark:border-surface-100 shadow-wg-xs dark:shadow:none border [--wg-border-width:1px]",

        transparent: "hover:bg-surface bg-transparent",
        link: "underline-offset-3 p-0 underline",
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
          "bg-destructive hover:bg-destructive-600 dark:hover:bg-destructive-600 outline-destructive disabled:bg-destructive text-white disabled:opacity-50 dark:text-white dark:disabled:text-white",
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
          "border-destructive dark:border-destructive disabled:border-destructive-100 dark:disabled:border-destructive-900 hover:bg-destructive-50 dark:hover:bg-surface",
      },
      {
        variant: "link",
        destructive: true,
        class:
          "focus-visible:text-destructive-800 hover:text-destructive-800 dark:hover:text-destructive-400 dark:focus-visible:text-destructive-400",
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

export const iconVariants = cva("text-current", {
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
      "xs-icon": "h-5 w-5",
      sm: "h-5 w-5",
      md: "h-6 w-6",
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
