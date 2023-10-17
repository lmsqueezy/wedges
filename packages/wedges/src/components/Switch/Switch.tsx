import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { Slot } from "@radix-ui/react-slot";

import { cn, isReactElement, stringToHash } from "../../helpers/utils";
import { Label } from "../Label";

/* ---------------------------------- Types --------------------------------- */
type HasLabel = {
  label: React.ReactNode;
  labelPosition?: "start" | "end";
};

type HasNoLabel = {
  label?: never;
  labelPosition?: never;
};

export type SwitchElement = React.ElementRef<typeof SwitchPrimitive.Root>;
export type SwitchProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & {
  helperText?: React.ReactNode;
  tooltip?: React.ReactNode;
} & (HasLabel | HasNoLabel);

/* -------------------------------- Component ------------------------------- */
const Switch = React.forwardRef<SwitchElement, SwitchProps>(
  (
    { className, disabled, helperText, tooltip, label, labelPosition = "end", id, ...otherProps },
    ref
  ) => {
    const LabelWrapComponent = label || helperText ? "div" : React.Fragment;
    const HelperTextComponent = helperText && isReactElement(helperText) ? Slot : "span";

    const elId =
      id || `wg-${stringToHash(JSON.stringify({ className, disabled, helperText, label }))}`;

    const renderSwitch = (
      <div className="min-h-6 inline-flex items-center">
        <SwitchPrimitive.Root
          ref={ref}
          className={cn(
            "wg-antialiased data-[state=checked]:bg-primary bg-surface-200 hover:bg-surface-300 outline-primary peer inline-flex h-4 w-7 items-center rounded-full transition-colors duration-100 focus:outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none",
            disabled && "bg-surface-100 data-[state=checked]:bg-surface-100",
            className
          )}
          disabled={disabled}
          id={elId}
          {...otherProps}
        >
          <SwitchPrimitive.Thumb className="h-3 w-3 rounded-full bg-white transition-transform duration-200 data-[state=checked]:translate-x-[14px] data-[state=unchecked]:translate-x-0.5" />
        </SwitchPrimitive.Root>
      </div>
    );

    const renderLabel = (
      <LabelWrapComponent className="inline-flex flex-col">
        {label && (
          <Label disabled={disabled} htmlFor={elId} required={true} tooltip={tooltip}>
            {label}
          </Label>
        )}

        {helperText && (
          <HelperTextComponent className="text-surface-500 text-sm leading-6">
            {helperText}
          </HelperTextComponent>
        )}
      </LabelWrapComponent>
    );

    return (
      <div className="inline-flex items-start gap-4">
        {labelPosition === "start" ? renderLabel : null}
        {renderSwitch}
        {labelPosition === "end" ? renderLabel : null}
      </div>
    );
  }
);

Switch.displayName = "Switch";

export default Switch;
