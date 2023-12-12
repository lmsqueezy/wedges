import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "../../helpers/utils";

/* ---------------------------------- Types --------------------------------- */
export type PopoverElement = React.ElementRef<typeof PopoverPrimitive.Root>;
export type PopoverProps = React.ComponentProps<typeof PopoverPrimitive.Root>;

type PopoverContentElement = React.ElementRef<typeof PopoverPrimitive.Content>;
type PopoverContentProps = React.ComponentProps<typeof PopoverPrimitive.Content>;

/* ------------------------------- Components ------------------------------- */
const PopoverContent = React.forwardRef<PopoverContentElement, PopoverContentProps>(
  ({ align = "center", className, sideOffset = 8, collisionPadding = 8, ...otherProps }, ref) => {
    return (
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          ref={ref}
          align={align}
          className={cn(
            // state animations
            "data-[side=bottom]:animate-fade-in-down data-[side=left]:animate-fade-in-left data-[side=right]:animate-fade-in-right data-[side=top]:animate-fade-in-up",

            // base styles
            "flex origin-[var(--radix-popper-transform-origin)] flex-col gap-2 rounded-lg bg-white p-4 text-sm leading-6 text-surface-900 shadow-wg-overlay wg-antialiased dark:border dark:border-surface dark:bg-neutral-800 dark:text-surface-700 dark:shadow-none",

            className
          )}
          collisionPadding={collisionPadding}
          sideOffset={sideOffset}
          {...otherProps}
        />
      </PopoverPrimitive.Portal>
    );
  }
);

PopoverContent.displayName = "PopoverContent";

const Popover = Object.assign(PopoverPrimitive.Root, {
  Trigger: PopoverPrimitive.Trigger,
  Content: PopoverContent,
});

export default Popover;
