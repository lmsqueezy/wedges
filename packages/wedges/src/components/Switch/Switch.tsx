import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "../../helpers/utils";
import { Label } from "../Label";
import { useSwitchGroupContext } from "../SwitchGroup/SwitchGroup";
import { LabelHelperProps } from "../types";

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
  Omit<LabelHelperProps, "label"> &
  (HasLabel | HasNoLabel);

/* -------------------------------- Component ------------------------------- */
const Switch = React.forwardRef<SwitchElement, SwitchProps>(
  (
    {
      className,
      required,
      disabled,
      helperText,
      tooltip,
      label,
      alignLabel = "end",
      id,
      ...otherProps
    },
    ref
  ) => {
    const LabelWrapComponent = label || helperText ? "div" : React.Fragment;
    const isInGroup = useSwitchGroupContext(true) ? true : false;

    const generatedId = React.useId();
    const elId = id || generatedId;

    const renderSwitch = (
      <div className="min-h-6 inline-flex shrink-0 items-center">
        <SwitchPrimitive.Root
          ref={ref}
          aria-describedby={helperText ? `${elId}__describer` : undefined}
          aria-labelledby={label ? `${elId}__label` : undefined}
          className={cn(
            "wg-antialiased data-[state=checked]:bg-primary bg-surface-200 hover:bg-surface-300 outline-primary peer inline-flex h-4 w-7 items-center rounded-full transition-colors duration-100 focus:outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none",
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
              "h-3 w-3 rounded-full bg-white transition-transform duration-100 data-[state=checked]:translate-x-[14px] data-[state=unchecked]:translate-x-0.5",
              disabled && "dark:bg-surface-200"
            )}
          />
        </SwitchPrimitive.Root>
      </div>
    );

    const renderLabel = (
      <LabelWrapComponent className="inline-flex flex-col">
        {label && (
          <Label
            className={cn(isInGroup && "font-normal")}
            disabled={disabled}
            htmlFor={elId}
            id={`${elId}__label`}
            required={required}
            tooltip={tooltip}
          >
            {label}
          </Label>
        )}

        {helperText ? (
          <Label.Helper disabled={disabled} id={`${elId}__describer`}>
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
