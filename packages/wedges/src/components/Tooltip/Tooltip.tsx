import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../helpers/utils";
import TooltipArrow from "./TooltipArrow";
import TooltipTrigger from "./TooltipTrigger";

const TOOLTIP_ANIMATION_CLASSES = [
  // transform-origin
  "origin-[var(--radix-popper-transform-origin)]",

  // state animations
  "data-[side=bottom]:animate-fade-in-down data-[side=top]:animate-fade-in-up data-[side=left]:animate-fade-in-left data-[side=right]:animate-fade-in-right data-[state=closed]:animate-fade-out",

  // instant-open
  "data-[state=instant-open]:!animate-none",
];

const {
  Content: TooltipContent,
  Portal: TooltipPortal,
  Root: TooltipRoot,
  TooltipProvider,
} = TooltipPrimitive;

/* -------------------------------- Variants -------------------------------- */

const tooltipVariant = cva(["z-50 rounded-md text-white wg-antialiased"], {
  variants: {
    size: {
      sm: "max-w-xs px-3 py-2 text-xs",
      md: "max-w-xs px-4 py-3 text-sm",
    },
    color: {
      primary: "text-white wg-bg-primary",
      secondary: "text-white wg-bg-secondary dark:text-secondary-900 ",
    },
  },
  defaultVariants: {
    size: "sm",
    color: "primary",
  },
});

/* ---------------------------------- Types --------------------------------- */
export type TooltipProps = Omit<React.ComponentPropsWithoutRef<typeof TooltipContent>, "content"> &
  VariantProps<typeof tooltipVariant> & {
    /**
     * Whether to animate the tooltip when it opens/closes
     */
    animation?: boolean;

    /**
     * Whether to show an arrow pointing to the target element
     */
    arrow?: boolean;

    /**
     * The content to display inside the tooltip
     */
    content: React.ReactNode;

    /**
     * The duration (in milliseconds) to delay before showing/hiding the tooltip
     */
    delayDuration?: number;

    /**
     * Whether the tooltip is open
     */
    open?: boolean;

    /**
     * Callback function that is called when the tooltip's open state changes
     */
    onOpenChange?: (open: boolean) => void;
  };

/* ------------------------------- Components ------------------------------- */
const TooltipWedges = React.forwardRef<React.ElementRef<typeof TooltipContent>, TooltipProps>(
  (
    {
      alignOffset = -12,
      animation = true,
      arrow = true,
      arrowPadding = 12,
      children,
      className,
      collisionPadding = 12,
      color,
      content,
      delayDuration = 200,
      onOpenChange,
      onClick,
      open,
      sideOffset = 2,
      size,
      sticky = "partial",
      ...otherProps
    },
    ref
  ) => {
    return (
      <TooltipProvider delayDuration={delayDuration} skipDelayDuration={0}>
        <TooltipRoot open={open} onOpenChange={onOpenChange}>
          <TooltipContent
            ref={ref}
            alignOffset={alignOffset}
            arrowPadding={arrowPadding}
            className={cn(
              tooltipVariant({ size, color }),
              animation && TOOLTIP_ANIMATION_CLASSES,
              className
            )}
            collisionPadding={collisionPadding}
            sideOffset={sideOffset}
            sticky={sticky}
            {...otherProps}
          >
            {content}
            {arrow && <TooltipArrow />}
          </TooltipContent>

          <TooltipTrigger onClick={onClick as React.MouseEventHandler}>{children}</TooltipTrigger>
        </TooltipRoot>
      </TooltipProvider>
    );
  }
);

TooltipWedges.displayName = "Tooltip";

const Tooltip = Object.assign(TooltipWedges, {
  Arrow: TooltipArrow,
  Content: TooltipContent,
  Portal: TooltipPortal,
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
});

export default Tooltip;
