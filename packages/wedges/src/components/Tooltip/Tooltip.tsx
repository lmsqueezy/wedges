import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cva, type VariantProps } from "cva";

import { cn } from "../../helpers/utils";
import TooltipArrow from "./TooltipArrow";
import TooltipTrigger from "./TooltipTrigger";

const TOOLTIP_ANIMATION_CLASSES = [
  // transform-origin
  "origin-[var(--radix-popper-transform-origin)]",

  // state animations
  "data-[side=bottom]:animate-wg-fade-in-down data-[side=top]:animate-wg-fade-in-up data-[side=left]:animate-wg-fade-in-left data-[side=right]:animate-wg-fade-in-right data-[state=closed]:animate-wg-fade-out",

  // instant-open
  "data-[state=instant-open]:!animate-none",
];

/* -------------------------------- Variants -------------------------------- */
const tooltipVariant = cva({
  base: "z-50 rounded-md text-start text-white wg-antialiased",
  variants: {
    size: {
      sm: "max-w-xs px-3 py-2 text-xs",
      md: "max-w-[350px] p-4 text-sm",
    },
    color: {
      primary: "text-white wg-bg-primary",
      secondary: "text-white wg-bg-secondary dark:text-secondary-900",
      soft: "border border-transparent text-wg-gray-700 shadow-wg-overlay wg-bg-white dark:border-surface dark:bg-neutral-800 dark:text-surface-700 dark:shadow-none",
    },
  },
  defaultVariants: {
    size: "sm",
    color: "primary",
  },
});

/* ---------------------------- Tooltip Provider ---------------------------- */
type TooltipProviderElement = React.ElementRef<typeof TooltipPrimitive.Provider>;
type TooltipProviderProps = React.ComponentPropsWithRef<typeof TooltipPrimitive.Provider>;

const TooltipProvider = React.forwardRef<TooltipProviderElement, TooltipProviderProps>(
  // This component does not expect ref.
  (props, _ref) => {
    const { delayDuration = 200, skipDelayDuration = 0, ...otherProps } = props;

    return (
      <TooltipPrimitive.Provider
        delayDuration={delayDuration}
        skipDelayDuration={skipDelayDuration}
        {...otherProps}
      />
    );
  }
);

/* ------------------------------ Tooltip Root ------------------------------ */
type TooltipRootElement = React.ElementRef<typeof TooltipPrimitive.Root>;
type TooltipRootProps = React.ComponentPropsWithRef<typeof TooltipPrimitive.Root>;

const TooltipRoot = React.forwardRef<TooltipRootElement, TooltipRootProps>(
  // This component does not expect ref.
  (props, _ref) => {
    const { delayDuration = 200, ...otherProps } = props;

    return <TooltipPrimitive.Root delayDuration={delayDuration} {...otherProps} />;
  }
);

/* ----------------------------- Tooltip Content ---------------------------- */
type TooltipContentElement = React.ElementRef<typeof TooltipPrimitive.Content>;
type TooltipContentProps = Omit<
  React.ComponentPropsWithRef<typeof TooltipPrimitive.Content>,
  "content"
> & {
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
} & VariantProps<typeof tooltipVariant>;

const TooltipContent = React.forwardRef<TooltipContentElement, TooltipContentProps>(
  (props, ref) => {
    const {
      alignOffset = -12,
      animation = true,
      arrow = true,
      arrowPadding = 12,
      children,
      content,
      className,
      collisionPadding = 12,
      sideOffset = 2,

      // variants
      size,
      color,

      ...otherProps
    } = props;

    return (
      <TooltipPrimitive.Content
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
        {...otherProps}
      >
        {children ?? content}
        {arrow ? <TooltipArrow /> : null}
      </TooltipPrimitive.Content>
    );
  }
);

/* ----------------------------- Tooltip Wedges ----------------------------- */
export type TooltipElement = TooltipContentElement;
type TooltipProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> &
  TooltipContentProps;

const TooltipWedges = React.forwardRef<TooltipElement, TooltipProps>((props, ref) => {
  const {
    // root props
    defaultOpen,
    delayDuration = 200,
    disableHoverableContent,
    onOpenChange,
    open,

    // trigger
    asChild,
    children,
    onClick,

    // content
    ...otherProps
  } = props;

  return (
    <TooltipProvider>
      <TooltipRoot
        defaultOpen={defaultOpen}
        delayDuration={delayDuration}
        disableHoverableContent={disableHoverableContent}
        onOpenChange={onOpenChange}
        open={open}
      >
        <TooltipContent ref={ref} {...otherProps} />

        <TooltipTrigger
          asChild={asChild}
          onClick={onClick as React.MouseEventHandler<HTMLButtonElement> | undefined}
        >
          {children}
        </TooltipTrigger>
      </TooltipRoot>
    </TooltipProvider>
  );
});

/* --------------------------------- Exports -------------------------------- */
const Tooltip = Object.assign(TooltipWedges, {
  Arrow: TooltipArrow,
  Content: TooltipContent,
  Portal: TooltipPrimitive.Portal,
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
});

export default Tooltip;
