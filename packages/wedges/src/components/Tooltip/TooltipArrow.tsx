import * as React from "react";
import { TooltipArrow as PrimitiveArrow } from "@radix-ui/react-tooltip";

import { cn, isReactElement } from "../../helpers/utils";
import { TippyIcon } from "../icons";

const TooltipArrow = React.forwardRef<
  React.ElementRef<typeof PrimitiveArrow>,
  React.ComponentPropsWithoutRef<typeof PrimitiveArrow>
>(
  (
    {
      className,
      children,
      asChild = children ? isReactElement(children) : children === undefined,
      width = 24,
      height = 8,
      ...props
    },
    ref
  ) => {
    return (
      <PrimitiveArrow
        ref={ref}
        asChild={asChild}
        className={cn(className)}
        height={height}
        viewBox="0 0 24 8"
        width={width}
        {...props}
      >
        {children ? children : <TippyIcon className="text-background" />}
      </PrimitiveArrow>
    );
  }
);

TooltipArrow.displayName = PrimitiveArrow.displayName;

export default TooltipArrow;
