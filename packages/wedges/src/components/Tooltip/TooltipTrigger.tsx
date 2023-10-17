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
              "text-surface-200 hover:text-primary dark:hover:text-primary focus-visible:text-primary dark:focus-visible:text-primary focus-visible:outline-primary data-[state=delayed-open]:text-primary rounded-full transition-colors duration-100 focus:outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 data-[state=instant-open]:transition-none",
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
