import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "../../helpers/utils";
import { Label, type LabelProps } from "../Label";
import { useSwitchGroupContext } from "../SwitchGroup/SwitchGroup";
import { type LabelHelperProps } from "../types";

/* ---------------------------------- Types --------------------------------- */
type HasLabel = {
  /**
   * Label displayed next to the switch. It can be a string, element, or any other
   * renderable node.
   */
  label: React.ReactNode;

  /**
   * Alignment of the labels: "start" (usually left) or "end" (usually right).
   */
  alignLabel?: "start" | "end";
};

type HasNoLabel = {
  label?: never;

  /**
   * Alignment of the labels: "start" (usually left) or "end" (usually right).
   */
  alignLabel?: never;
};

export type SwitchElement = React.ElementRef<typeof SwitchPrimitive.Root>;
export type SwitchProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> &
  LabelProps &
  Omit<LabelHelperProps, "label"> &
  (HasLabel | HasNoLabel);

/* -------------------------------- Component ------------------------------- */
const Switch = React.forwardRef<SwitchElement, SwitchProps>(
  (
    {
      alignLabel = "end",
      children,
      className,
      description,
      disabled,
      helperText,
      id,
      label,
      required,
      tooltip,
      ...otherProps
    },
    ref
  ) => {
    const LabelWrapComponent = (label ?? helperText) ? "div" : React.Fragment;
    const isInGroup = useSwitchGroupContext(true) ? true : false;

    const generatedId = React.useId();
    const elId = id ?? generatedId;
    const ariaInvalid = otherProps["aria-invalid"];

    const renderSwitch = (
      <div className="wg-switch inline-flex min-h-6 shrink-0 items-center">
        <SwitchPrimitive.Root
          ref={ref}
          aria-describedby={helperText ? `${elId}__describer` : undefined}
          aria-labelledby={label ? `${elId}__label` : undefined}
          className={cn(
            "peer inline-flex h-4 w-7 items-center rounded-full bg-surface-200 outline-primary transition-colors duration-100 wg-antialiased hover:bg-surface-300 focus:outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none data-[state=checked]:bg-primary",
            disabled && "bg-surface-100 data-[state=checked]:bg-surface-100",
            className
          )}
          disabled={disabled}
          id={elId}
          required={required}
          {...otherProps}
        >
          <SwitchPrimitive.Thumb
            className={cn(
              "size-3 rounded-full bg-white transition-transform duration-200 data-[state=checked]:translate-x-[14px] data-[state=unchecked]:translate-x-0.5",
              disabled && "dark:bg-surface-200"
            )}
          />
        </SwitchPrimitive.Root>
      </div>
    );

    const renderLabel = (
      <LabelWrapComponent className="inline-flex flex-col">
        <Label
          className={cn(isInGroup && "font-normal")}
          description={description}
          disabled={disabled}
          htmlFor={elId}
          id={`${elId}__label`}
          required={required}
          tooltip={tooltip}
        >
          {label ?? children}
        </Label>

        {helperText ? (
          <Label.Helper aria-invalid={ariaInvalid} disabled={disabled} id={`${elId}__describer`}>
            {helperText}
          </Label.Helper>
        ) : null}
      </LabelWrapComponent>
    );

    return (
      <div
        className={cn(
          "inline-flex items-start gap-4",
          isInGroup && alignLabel === "start" && "flex justify-between",
          !disabled && "[&:has([data-state=unchecked])_.wg-label]:text-surface-700"
        )}
      >
        {alignLabel === "start" ? renderLabel : null}
        {renderSwitch}
        {alignLabel === "end" ? renderLabel : null}
      </div>
    );
  }
);

Switch.displayName = "Switch";

export default Switch;
