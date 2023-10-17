import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

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
const Label = React.forwardRef<LabelElement, LabelProps>(
  ({ asChild = false, children, className, disabled, required = false, ...otherProps }, ref) => {
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
      <div className="inline-flex items-center gap-1">
        <LabelPrimitive.Root
          ref={ref}
          asChild={useAsChild}
          className={cn(
            "inline-flex items-center gap-1 text-sm leading-6",
            disabled && "pointer-events-none",
            className
          )}
          {...otherProps}
        >
          {innerContent}
        </LabelPrimitive.Root>

        <Tooltip content="Hello World" />
      </div>
    );
  }
);

Label.displayName = "Label";

export default Label;
