import { cva } from "cva";

export const dialogVariants = cva({
  base: "w-full max-w-lg",
  variants: {
    size: {
      sm: "sm:max-w-[448px]",
      md: "sm:max-w-[512px]",
      lg: "sm:max-w-[672px]",
      xl: "sm:max-w-[896px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
