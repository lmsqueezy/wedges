import { cva } from "class-variance-authority";

export const rootClasses =
  "h-10 min-w-10 [--wg-notification-size:10px] relative inline-flex aspect-square shrink-0 items-center wg-antialiased";

export const statusClasses =
  "absolute right-0 bottom-0 aspect-square bg-wg-gray-300 h-[var(--wg-notification-size,10px)] rounded-full ring-background";

export const notificationClasses =
  "absolute right-0 top-0 aspect-square h-[var(--wg-notification-size,10px)] rounded-full ring-background";

export const avatarVariants = cva(rootClasses, {
  variants: {
    size: {
      xxs: "h-4 min-w-4 text-xxs [--wg-notification-size:4px]",
      xs: "h-6 min-w-6 text-xs [--wg-notification-size:6px]",
      sm: "h-8 min-w-8 text-sm [--wg-notification-size:8px]",
      md: "h-10 min-w-10 text-base [--wg-notification-size:10px]",
      lg: "h-12 min-w-12 text-lg [--wg-notification-size:12px]",
      xl: "h-14 min-w-14 text-xl [--wg-notification-size:14px]",
      "2xl": "h-16 min-w-16 text-2xl [--wg-notification-size:16px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const fallbackVariants = cva("", {
  variants: {
    size: {
      xxs: "w-3 h-3",
      xs: "w-4 h-4",
      sm: "w-5 h-5",
      md: "w-6 h-6",
      lg: "w-7 h-7",
      xl: "w-8 h-8",
      "2xl": "w-10 h-10",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const statusVariants = cva(statusClasses, {
  variants: {
    status: {
      primary: "bg-primary",
      gray: "bg-wg-gray",
      green: "bg-wg-green",
      yellow: "bg-wg-yellow",
      red: "bg-wg-red",
    },
  },
  defaultVariants: {
    status: "gray",
  },
});

export const notificationVariants = cva(notificationClasses, {
  variants: {
    notification: {
      primary: "bg-primary",
      gray: "bg-wg-gray",
      green: "bg-wg-green",
      yellow: "bg-wg-yellow",
      red: "bg-wg-red",
    },
  },
  defaultVariants: {
    notification: "gray",
  },
});
