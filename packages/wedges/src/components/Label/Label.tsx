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
          <>{children.props.children && required && <span className="text-destructive">*</span>}</>
        ),
      })
    ) : (
      <>
        {children}
        {required && <span className="text-destructive">*</span>}
      </>
    );

    return (
      <div className="wg-antialiased inline-flex items-center gap-1">
        <LabelPrimitive.Root
          ref={ref}
          asChild={useAsChild}
          className={cn(
            "wg-label inline-flex cursor-pointer items-center gap-1 text-sm leading-6",
            disabled && "pointer-events-none",
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
  React.HTMLAttributes<HTMLSpanElement> & { error?: boolean }
>(({ children, className, ...otherProps }, ref) => {
  const HelperTextComponent = children && isReactElement(children) ? Slot : "span";
  const ariaInvalid = otherProps["aria-invalid"];

  return children ? (
    <HelperTextComponent
      ref={ref}
      className={cn(
        "wg-antialiased text-surface-500 text-sm leading-6",
        ariaInvalid && "text-destructive",
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
