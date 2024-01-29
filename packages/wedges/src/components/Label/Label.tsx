import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";

import { cn, isElementWithChildren, isReactElement } from "../../helpers/utils";
import { Tooltip } from "../Tooltip";

/* ---------------------------------- Types --------------------------------- */
export type LabelElement = React.ElementRef<typeof LabelPrimitive.Root>;
export type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
  /** Tooltip text to display when hovering over the label */
  tooltip?: React.ReactNode;

  /** Additional description text, shown next to the primary label */
  description?: React.ReactNode;

  /** Indicates if the label is associated with a required field */
  required?: boolean;

  /** Indicates if the label is associated with a disabled field */
  disabled?: boolean;
};

/* -------------------------------- Component ------------------------------- */
const LabelWedges = React.forwardRef<LabelElement, LabelProps>(
  (
    {
      asChild = false,
      children,
      className,
      description,
      disabled,
      required = false,
      tooltip,
      ...otherProps
    },
    ref
  ) => {
    const useAsChild = asChild && isReactElement(children);

    const innerContent = useAsChild ? (
      React.cloneElement(children, {
        children: (
          <>
            {isElementWithChildren(children) && children.props.children}
            {required && <span className="text-destructive">*</span>}
          </>
        ),
      })
    ) : (
      <>
        {children ? <span>{children}</span> : null}

        {description ? (
          <span className={cn("font-normal text-surface-500", disabled && "text-current")}>
            {description}
          </span>
        ) : null}

        {required ? <span className="font-normal text-destructive">*</span> : null}
      </>
    );

    if (!children && !tooltip && !description) {
      return null;
    }

    return (
      <div className="wg-label inline-flex shrink-0 items-center gap-1 text-surface-900 wg-antialiased">
        <LabelPrimitive.Root
          ref={ref}
          asChild={useAsChild}
          className={cn(
            "wg-label inline-flex cursor-pointer items-center gap-1 text-sm font-medium leading-6",
            disabled && "pointer-events-none text-surface-300",
            className
          )}
          {...otherProps}
        >
          {innerContent}
        </LabelPrimitive.Root>

        {tooltip ? <Tooltip content={tooltip} /> : null}
      </div>
    );
  }
);

const HelperText = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { error?: boolean; disabled?: boolean }
>(({ children, error, disabled, className, ...otherProps }, ref) => {
  const HelperTextComponent = children && isReactElement(children) ? Slot : "span";
  const ariaInvalid = otherProps["aria-invalid"];

  return children ? (
    <HelperTextComponent
      ref={ref}
      className={cn(
        "wg-label__helper text-start text-sm leading-6 text-surface-500 wg-antialiased",
        (ariaInvalid ?? error) && "text-destructive",
        disabled && "text-surface-300",
        className
      )}
      role={ariaInvalid ? "alert" : undefined}
      {...otherProps}
    >
      {children}
    </HelperTextComponent>
  ) : null;
});

LabelWedges.displayName = "Label";
HelperText.displayName = "HelperText";

const Label = Object.assign(LabelWedges, {
  Helper: HelperText,
});

export default Label;
