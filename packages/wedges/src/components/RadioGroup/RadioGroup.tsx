import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "../../helpers/utils";
import { Label, LabelProps } from "../Label";

/* ---------------------------------- Types --------------------------------- */

export type RadioGroupElement = React.ElementRef<typeof RadioGroupPrimitive.Root>;
export type RadioGroupProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
  /**
   * Main label displayed above radio buttons. It can be a string, element, or any other
   * renderable node.
   */
  label?: React.ReactNode;

  /**
   * Additional text or information to guide the user. This can be an instruction,
   * a hint, or any other supplementary information. It's rendered below label.
   */
  helperText?: React.ReactNode;

  /**
   * Tooltip displayed next to the label. It can be a string, element, or any other
   * renderable node.
   */
  tooltip?: React.ReactNode;
};

type RadioGroupItemElement = React.ElementRef<typeof RadioGroupPrimitive.Item>;
type RadioGroupItemProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> &
  LabelProps & {
    /**
     * Label displayed next to the radio button. It can be a string, element, or any other
     * renderable node.
     */
    label: React.ReactNode;

    /**
     * Additional text or information to guide the user. This can be an instruction,
     * a hint, or any other supplementary information. It's rendered below label.
     */
    helperText?: React.ReactNode;

    /**
     * Tooltip displayed next to the label. It can be a string, element, or any other
     * renderable node.
     */
    tooltip?: React.ReactNode;
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
      <div className="flex gap-3">
        <RadioGroupPrimitive.Item
          ref={ref}
          aria-labelledby={label ? `${elId}__label` : undefined}
          className={cn(
            "outline-primary text-surface-200 group flex h-6 w-6 items-center justify-center rounded-full fill-none transition-colors duration-75 after:bg-current focus:outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 data-[state=checked]:after:absolute data-[state=checked]:after:h-[8px] data-[state=checked]:after:w-[8px] data-[state=checked]:after:rounded-full data-[state=checked]:after:content-['']",
            isDisabled && "text-surface-200 dark:text-surface-100 pointer-events-none",
            !isDisabled && "data-[state=checked]:text-primary hover:text-surface-300"
          )}
          disabled={isDisabled}
          id={elId}
          {...otherProps}
        >
          <svg
            className={cn("aspect-square w-full", isDisabled && "fill-surface-50")}
            fill="none"
            height="24"
            width="24"
          >
            <path
              d="M19.25 12a7.25 7.25 0 11-14.5 0 7.25 7.25 0 0114.5 0z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
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
