import * as React from "react";
import { cva, type VariantProps } from "cva";

import { cn } from "../../helpers/utils";
import { Dots } from "./Dots";
import { Line } from "./Line";
import { Spinner } from "./Spinner";

/* ---------------------------------- Types --------------------------------- */
export type LoadingElement = HTMLDivElement;
export type LoadingProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof loadingVariants>;

/* -------------------------------- Variants -------------------------------- */
export const loadingVariants = cva({
  base: "relative inline-flex items-center justify-center border-0",
  variants: {
    color: {
      primary: "stroke-surface-100 text-primary",
      secondary: "stroke-surface-100 text-secondary",
    },
    size: {
      xxs: "h-4 w-4",
      xs: "h-6 w-6",
      sm: "h-8 w-8",
      md: "h-12 w-12 [--wg-loading-stroke-width:6px]",
      lg: "h-14 w-14",
      xl: "h-16 w-16",
      xxl: "h-[88px] w-[88px]",
    },
    type: {
      line: "",
      spinner: "-rotate-45",
      dots: "",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    type: "line",
  },
});

/* ------------------------------- Components ------------------------------- */
const Loading = React.forwardRef<LoadingElement, LoadingProps>((props, ref) => {
  const {
    "aria-label": ariaLabel = "Loading",
    className,
    color = "primary",
    size = "md",
    type = "line",
    ...otherProps
  } = props;

  let element = null;

  switch (type) {
    case "line":
      element = (
        <Line
          className={cn(loadingVariants({ size }), "animate-spin will-change-transform")}
          size={size}
        />
      );
      break;

    case "spinner":
      element = (
        <Spinner
          className="h-full w-full animate-[spin_.6s_ease-in-out_infinite] will-change-transform"
          size={size}
        />
      );
      break;

    case "dots":
      element = (
        <Dots className="animate-[spin_1.25s_linear_infinite] will-change-transform" size={size} />
      );
      break;
  }

  return (
    <div
      ref={ref}
      aria-label={ariaLabel}
      className={cn(loadingVariants({ color, size, type }), className)}
      {...otherProps}
    >
      {element}
    </div>
  );
});

Loading.displayName = "Loading";
export default Loading;
