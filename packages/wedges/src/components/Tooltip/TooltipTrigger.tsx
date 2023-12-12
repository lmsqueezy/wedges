import * as React from "react";
import { TooltipTrigger as PrimitiveTrigger } from "@radix-ui/react-tooltip";

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
          <span
            className={cn(
              onClick && "cursor-pointer",
              'data-[state=instant-open]:transition-none", inline-flex items-center justify-center rounded-full text-surface-200 transition-colors duration-100 hover:text-primary focus:outline-none focus-visible:text-primary focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary data-[state=delayed-open]:text-primary dark:hover:text-primary dark:focus-visible:text-primary',
              className
            )}
            role="button" // Add role to specify it behaves like a button
            tabIndex={0}
            onClick={onClick}
            onKeyDown={(e: React.KeyboardEvent) => {
              // Allow the action on "Enter" and "Space" key
              if (e.key === "Enter" || e.key === "Space") {
                onClick && onClick(e as unknown as React.MouseEvent<HTMLButtonElement, MouseEvent>);
              }
            }}
          >
            <InfoIcon className="scale-100" />
          </span>
        )}
      </PrimitiveTrigger>
    );
  }
);

TooltipContent.displayName = PrimitiveTrigger.displayName;

export default TooltipContent;
