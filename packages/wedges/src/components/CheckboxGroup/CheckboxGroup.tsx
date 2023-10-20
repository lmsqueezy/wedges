import * as React from "react";

import { LabelHelperProps } from "../types";
import { cn } from "../../helpers/utils";
import { Checkbox, CheckboxElement, CheckboxElementProps } from "../Checkbox";
import { Label, LabelProps } from "../Label";

/* ---------------------------------- Types --------------------------------- */
export type CheckboxGroupElement = HTMLDivElement;
export type CheckboxGroupProps = Omit<React.HTMLAttributes<HTMLDivElement>, "asChild"> &
  LabelProps &
  LabelHelperProps & {
    orientation?: "horizontal" | "vertical";
  };

type CheckboxGroupItemElement = CheckboxElement;
type CheckboxGroupItemProps = CheckboxElementProps;

type CheckboxGroupContextProps = {
  disabled?: CheckboxGroupProps["disabled"];
};

/* --------------------------------- Context -------------------------------- */
const CheckboxGroupContext = React.createContext<CheckboxGroupContextProps | null>(null);

/**
 * Hook to get the current context value for ButtonGroup.
 *
 * @returns The current context value for ButtonGroup.
 * @throws If the context is undefined.
 */
export function useCheckboxGroupContext() {
  const context = React.useContext(CheckboxGroupContext);

  if (!context) {
    throw new Error("CheckboxGroup.Item must be used within a CheckboxGroup or CheckboxGroup.Root");
  }

  return context;
}

/* -------------------------------- Component ------------------------------- */
const CheckboxGroupWedges = React.forwardRef<CheckboxGroupElement, CheckboxGroupProps>(
  (
    { children, disabled, helperText, id, label, orientation, required, tooltip, ...otherProps },
    ref
  ) => {
    const generatedId = React.useId();
    const elId = id || generatedId;
    const ariaInvalid = otherProps["aria-invalid"];

    return (
      <CheckboxGroupContext.Provider value={{ disabled }}>
        <div
          ref={ref}
          aria-describedby={helperText ? `${elId}__describer` : undefined}
          aria-labelledby={label ? `${elId}__label` : undefined}
          className="flex flex-col gap-4"
          role="group"
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
                <Label.Helper aria-invalid={ariaInvalid} id={`${elId}__describer`}>
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
        </div>
      </CheckboxGroupContext.Provider>
    );
  }
);

const CheckboxGroupItem = React.forwardRef<CheckboxGroupItemElement, CheckboxGroupItemProps>(
  ({ disabled, label, ...otherProps }, ref) => {
    const context = useCheckboxGroupContext();
    const { disabled: ctxDisabled } = context || {};

    return (
      <Checkbox
        ref={ref}
        className="wg-checkbox-group__item"
        disabled={disabled || ctxDisabled}
        label={label}
        {...otherProps}
      />
    );
  }
);

CheckboxGroupWedges.displayName = "CheckboxGroup";
CheckboxGroupItem.displayName = "CheckboxGroup.Item";

const CheckboxGroup = Object.assign(CheckboxGroupWedges, {
  Root: CheckboxGroupWedges,
  Item: CheckboxGroupItem,
});

export default CheckboxGroup;
