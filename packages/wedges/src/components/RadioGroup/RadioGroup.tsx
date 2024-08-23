import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "../../helpers/utils";
import { Label, type LabelProps } from "../Label";
import { type LabelHelperProps } from "../types";

/* ---------------------------------- Types --------------------------------- */
export type RadioGroupElement = React.ElementRef<typeof RadioGroupPrimitive.Root>;
export type RadioGroupProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> &
  LabelProps &
  LabelHelperProps;

type RadioGroupItemElement = React.ElementRef<typeof RadioGroupPrimitive.Item>;
type RadioGroupItemPropsBase = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> &
  LabelProps &
  Omit<LabelHelperProps, "label">;

type WithChildren = {
  children: React.ReactNode;
  label?: React.ReactNode;
};

type WithoutChildren = {
  children?: never;
  label: React.ReactNode;
};

type RadioGroupItemProps = RadioGroupItemPropsBase & (WithChildren | WithoutChildren);

type RadioGroupContextProps = {
  disabled?: RadioGroupProps["disabled"];
};

/* --------------------------------- Context -------------------------------- */
const RadioGroupContext = React.createContext<RadioGroupContextProps | null>(null);

/**
 * Hook to get the current context value for ButtonGroup.
 *
 * @returns The current context value for ButtonGroup.
 * @throws If the context is undefined.
 */
export function useRadioGroupContext() {
  const context = React.useContext(RadioGroupContext);

  if (!context) {
    throw new Error("RadioGroup.Item must be used within a RadioGroup or RadioGroup.Root");
  }

  return context;
}

/* -------------------------------- Component ------------------------------- */
const RadioGroupWedges = React.forwardRef<RadioGroupElement, RadioGroupProps>(
  (
    {
      children,
      className,
      description,
      disabled,
      helperText,
      id,
      label,
      orientation = "vertical",
      required,
      tooltip,
      ...otherProps
    },
    ref
  ) => {
    const generatedId = React.useId();
    const elId = id ?? generatedId;
    const ariaInvalid = otherProps["aria-invalid"];

    const renderLabel =
      (label ?? description ?? tooltip ?? helperText) ? (
        <div className="inline-flex flex-col">
          <Label
            className="cursor-auto"
            description={description}
            disabled={disabled}
            htmlFor={elId}
            id={`${elId}__label`}
            required={required}
            tooltip={tooltip}
          >
            {label}
          </Label>

          <Label.Helper aria-invalid={ariaInvalid} disabled={disabled} id={`${elId}__describer`}>
            {helperText}
          </Label.Helper>
        </div>
      ) : null;

    return (
      <RadioGroupContext.Provider value={{ disabled }}>
        <RadioGroupPrimitive.Root
          ref={ref}
          className={cn("flex flex-col gap-4", className)}
          disabled={disabled}
          {...otherProps}
        >
          {/* label */}
          {renderLabel}

          {children ? (
            <div
              className={cn(
                "flex flex-col gap-2",
                orientation === "horizontal" && "flex-row gap-6"
              )}
            >
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
    const context = useRadioGroupContext();
    const { disabled: ctxDisabled } = context ?? {};

    const isDisabled = ctxDisabled ?? disabled;
    const ariaInvalid = otherProps["aria-invalid"];

    const generatedId = React.useId();
    const elId = id ?? generatedId;

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
            {...otherProps}
          >
            {label}
          </Label>
        )}

        {helperText ? (
          <Label.Helper aria-invalid={ariaInvalid} disabled={isDisabled} id={`${elId}__describer`}>
            {helperText}
          </Label.Helper>
        ) : null}
      </div>
    );

    return (
      <div className="wg-radio-group__item flex gap-2">
        <RadioGroupPrimitive.Item
          ref={ref}
          aria-labelledby={label ? `${elId}__label` : undefined}
          className={cn(
            "group relative flex size-6 items-center justify-center rounded-full text-surface-200 outline-primary transition-colors duration-100 focus:outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 [&:has([data-state=checked])_.wg-unchecked]:hidden",
            isDisabled && "pointer-events-none text-surface-200 dark:text-surface-100",
            !isDisabled && "hover:text-surface-300 data-[state=checked]:text-primary"
          )}
          disabled={isDisabled}
          id={elId}
          {...otherProps}
        >
          <svg
            className={cn("aspect-square w-full scale-100", isDisabled && "fill-surface-50")}
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

          <RadioGroupPrimitive.Indicator asChild>
            <svg
              className={cn(
                "absolute aspect-square w-full scale-100 text-primary",
                isDisabled && "text-surface-200 dark:text-surface-100"
              )}
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
