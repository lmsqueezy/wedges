import * as React from "react";
import { TooltipTrigger as PrimitiveTrigger } from "@radix-ui/react-tooltip";

import { cn, isReactElement } from "../../helpers/utils";
import { InfoIcon } from "../icons";

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof PrimitiveTrigger>,
  React.ComponentPropsWithoutRef<typeof PrimitiveTrigger>
>((props, ref) => {
  const {
    children,
    asChild = children ? isReactElement(children) : children === undefined,
    className,
    onClick,
    ...otherProps
  } = props;
  return (
    <PrimitiveTrigger ref={ref} asChild={asChild} {...otherProps}>
      {children ? (
        children
      ) : (
        <span
          className={cn(
            onClick ? "cursor-pointer" : "cursor-default",
            "inline-flex items-center justify-center rounded-full text-surface-200 transition-colors duration-100 focus:outline-none focus-visible:text-primary focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary data-[state=delayed-open]:text-primary data-[state=instant-open]:!transition-none dark:hover:text-primary dark:focus-visible:text-primary [&:not([data-state=closed])]:text-primary",
            className
          )}
          onClick={onClick}
          role={onClick ? "button" : undefined}
          tabIndex={0}
          onKeyDown={(e: React.KeyboardEvent) => {
            // Allow the action on "Enter" and "Space" key
            if (e.key === "Enter" || e.key === " ") {
              if (onClick) {
                onClick(e as unknown as React.MouseEvent<HTMLButtonElement, MouseEvent>);
              }
            }
          }}
        >
          <InfoIcon className="scale-100" />
        </span>
      )}
    </PrimitiveTrigger>
  );
});

TooltipContent.displayName = PrimitiveTrigger.displayName;

export default TooltipContent;
