import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import React from "react";

import { cn, isReactElement } from "../../helpers/utils";
import { Tooltip } from "../Tooltip";

/* ---------------------------------- Types --------------------------------- */
export type LabelElement = React.ElementRef<typeof LabelPrimitive.Root>;
export type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
  /** Tooltip text to display when hovering over the label */
  tooltip?: React.ReactNode;

  /** Indicates if the label is associated with a required field */
  required?: boolean;

  /** Indicates if the label is associated with a disabled field */
  disabled?: boolean;
};

/* -------------------------------- Component ------------------------------- */
const LabelWedges = React.forwardRef<LabelElement, LabelProps>(
  (
    { asChild = false, children, className, disabled, tooltip, required = false, ...otherProps },
    ref
  ) => {
    const useAsChild = asChild && isReactElement(children);

    const innerContent = useAsChild ? (
      React.cloneElement(children, {
        children: (
          <>
            {children.props.children}
            {required && <span className="text-destructive">*</span>}
          </>
        ),
      })
    ) : (
      <>
        {children}
        {required && <span className="text-destructive">*</span>}
      </>
    );

    return (
      <div className="wg-antialiased wg-label inline-flex items-center gap-1">
        {children ? (
          <LabelPrimitive.Root
            ref={ref}
            asChild={useAsChild}
            className={cn(
              "wg-label inline-flex cursor-pointer items-center gap-1 text-sm font-medium leading-6",
              disabled && "text-surface-300 pointer-events-none",
              className
            )}
            {...otherProps}
          >
            {innerContent}
          </LabelPrimitive.Root>
        ) : null}

        {tooltip ? <Tooltip content={tooltip} /> : null}
      </div>
    );
  }
);

const HelperText = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { error?: boolean; disabled?: boolean }
>(({ children, disabled, className, ...otherProps }, ref) => {
  const HelperTextComponent = children && isReactElement(children) ? Slot : "span";
  const ariaInvalid = otherProps["aria-invalid"];

  return children ? (
    <HelperTextComponent
      ref={ref}
      className={cn(
        "wg-antialiased wg-label__helper text-surface-500 text-sm leading-6",
        ariaInvalid && "text-destructive",
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
