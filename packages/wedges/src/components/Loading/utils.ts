import { type VariantProps } from "cva";

import { type loadingVariants } from "./Loading";

export const calcDimension = (size: VariantProps<typeof loadingVariants>["size"]) => {
  switch (size) {
    case "xxs":
      return 16;
    case "xs":
      return 24;
    case "sm":
      return 32;
    case "md":
      return 48;
    case "lg":
      return 56;
    case "xl":
      return 64;
    case "xxl":
      return 88;
    default:
      return 48;
  }
};

export const calcStroke = (size: VariantProps<typeof loadingVariants>["size"]) => {
  switch (size) {
    case "xxs":
      return 4;
    case "xs":
      return 4;
    case "sm":
      return 4;
    case "md":
      return 6;
    case "lg":
      return 6;
    case "xl":
      return 6;
    case "xxl":
      return 8;
    default:
      return 6;
  }
};
