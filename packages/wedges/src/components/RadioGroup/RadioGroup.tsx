import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "../../helpers/utils";
import { Label, LabelProps } from "../Label";
import { LabelHelperProps } from "../types";

/* ---------------------------------- Types --------------------------------- */
export type RadioGroupElement = React.ElementRef<typeof RadioGroupPrimitive.Root>;
export type RadioGroupProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> &
  LabelHelperProps;

type RadioGroupItemElement = React.ElementRef<typeof RadioGroupPrimitive.Item>;
type RadioGroupItemProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> &
  LabelProps &
  Omit<LabelHelperProps, "label"> & {
    label: React.ReactNode;
  };

type SwitchGroupContextProps = {
  disabled?: RadioGroupProps["disabled"];
};

/* --------------------------------- Context -------------------------------- */
const RadioGroupContext = React.createContext<SwitchGroupContextProps | null>(null);

/**
 * Hook to get the current context value for ButtonGroup.
 *
 * @returns The current context value for ButtonGroup.
 * @throws If the context is undefined.
 */
export function useSwitchGroupContext() {
  const context = React.useContext(RadioGroupContext);

  if (!context) {
    throw new Error("RadioGroup.Item must be used within a RadioGrou or RadioGroup.Root");
  }

  return context;
}

/* -------------------------------- Component ------------------------------- */
const RadioGroupWedges = React.forwardRef<RadioGroupElement, RadioGroupProps>(
  (
    {
      children,
      className,
      disabled,
      helperText,
      id,
      label,
      orientation,
      required,
      tooltip,
      ...otherProps
    },
    ref
  ) => {
    const generatedId = React.useId();
    const elId = id || generatedId;
    const ariaInvalid = otherProps["aria-invalid"];

    return (
      <RadioGroupContext.Provider value={{ disabled }}>
        <RadioGroupPrimitive.Root
          ref={ref}
          className={cn("flex flex-col gap-4", className)}
          disabled={disabled}
          {...otherProps}
        >
          {/* label */}
          {(label || helperText) && (
            <div className="flex flex-col">
              {label ? (
                <Label
                  className="cursor-default"
                  disabled={disabled}
                  id={`${elId}__label`}
                  required={required}
                  tooltip={tooltip}
                >
                  {label}
                </Label>
              ) : null}

              {helperText ? (
                <Label.Helper
                  aria-invalid={ariaInvalid}
                  disabled={disabled}
                  id={`${elId}__describer`}
                >
                  {helperText}
                </Label.Helper>
              ) : null}
            </div>
          )}

          {children ? (
            <div className={cn("flex flex-col gap-2", orientation && "flex-row gap-6")}>
              {children}
            </div>
          ) : null}
        </RadioGroupPrimitive.Root>
      </RadioGroupContext.Provider>
    );
  }
);

const RadioGroupItem = React.forwardRef<RadioGroupItemElement, RadioGroupItemProps>(
  ({ label, helperText, disabled, required, tooltip, id, ...otherProps }, ref) => {
    const context = useSwitchGroupContext();
    const { disabled: ctxDisabled } = context || {};
    const isDisabled = ctxDisabled || disabled;

    const generatedId = React.useId();
    const elId = id || generatedId;

    const renderLabel = (
      <div className="inline-flex flex-col">
        {label && (
          <Label
            className="font-normal"
            disabled={isDisabled}
            htmlFor={elId}
            id={`${elId}__label`}
            required={required}
            tooltip={tooltip}
          >
            {label}
          </Label>
        )}

        {helperText ? (
          <Label.Helper disabled={isDisabled} id={`${elId}__describer`}>
            {helperText}
          </Label.Helper>
        ) : null}
      </div>
    );

    return (
      <div className="flex gap-2">
        <RadioGroupPrimitive.Item
          ref={ref}
          aria-labelledby={label ? `${elId}__label` : undefined}
          className={cn(
            "outline-primary text-surface-200 group relative flex flex h-6 w-6 items-center justify-center rounded-full transition-colors duration-100 focus:outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 [&:has([data-state=checked])_.wg-unchecked]:hidden",
            isDisabled && "text-surface-200 dark:text-surface-100 pointer-events-none",
            !isDisabled && "hover:text-surface-300"
          )}
          disabled={isDisabled}
          id={elId}
          {...otherProps}
        >
          <svg
            className={cn("aspect-square w-full", isDisabled && "fill-surface-50")}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>

          <RadioGroupPrimitive.Indicator asChild className="text-primary absolute">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
              <path
                d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                fill="currentColor"
              />
            </svg>
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>

        {renderLabel}
      </div>
    );
  }
);

RadioGroupWedges.displayName = "RadioGroup";
RadioGroupItem.displayName = "RadioGroupItem";

const RadioGroup = Object.assign(RadioGroupWedges, {
  Root: RadioGroupPrimitive.Root,
  Item: RadioGroupItem,
});

export default RadioGroup;
