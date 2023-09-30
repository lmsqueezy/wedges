import { TooltipTrigger as PrimitiveTrigger } from "@radix-ui/react-tooltip";
import * as React from "react";

import { cn, isReactElement } from "../../helpers/utils";
import { InfoIcon } from "../icons";

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof PrimitiveTrigger>,
  React.ComponentPropsWithoutRef<typeof PrimitiveTrigger>
>(
  (
    {
      children,
      className,
      onClick,
      asChild = children ? isReactElement(children) : children === undefined,
      ...otherProps
    },
    ref
  ) => {
    return (
      <PrimitiveTrigger ref={ref} asChild={asChild} {...otherProps}>
        {children ? (
          children
        ) : (
          <InfoIcon
            className={cn(
              "text-foreground-muted hover:text-primary data-[state=delayed-open]:text-primary data-[state=instant-open]:text-primary focus:text-primary focus:outline-primary rounded-full focus:outline-2",
              onClick && "cursor-pointer",
              className
            )}
            tabIndex={0}
            onClick={onClick as React.MouseEventHandler}
          />
        )}
      </PrimitiveTrigger>
    );
  }
);

TooltipContent.displayName = PrimitiveTrigger.displayName;

export default TooltipContent;
