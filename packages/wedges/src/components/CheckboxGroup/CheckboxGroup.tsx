import * as React from "react";

import { cn } from "../../helpers/utils";
import { Checkbox, type CheckboxElement, type CheckboxElementProps } from "../Checkbox";
import { Label, type LabelProps } from "../Label";
import { type LabelHelperProps } from "../types";

/* ---------------------------------- Types --------------------------------- */
export type CheckboxGroupElement = HTMLDivElement;
export type CheckboxGroupProps = React.HTMLAttributes<HTMLDivElement> &
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
export function useCheckboxGroupContext(skipCheck = false) {
  const context = React.useContext(CheckboxGroupContext);

  if (!context && !skipCheck) {
    throw new Error("Checkbox.Item must be used within a CheckboxGroup or CheckboxGroup.Root");
  }

  return context;
}

/* -------------------------------- Component ------------------------------- */
const CheckboxGroupWedges = React.forwardRef<CheckboxGroupElement, CheckboxGroupProps>(
  (
    {
      children,
      description,
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
    const elId = id ?? generatedId;
    const ariaInvalid = otherProps["aria-invalid"];

    const renderLabel =
      (label ?? description ?? tooltip ?? helperText) ? (
        <div className="inline-flex flex-col">
          <Label
            className="cursor-default"
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
          {(label ?? helperText ?? description ?? tooltip) ? (
            <div className="flex flex-col">{renderLabel}</div>
          ) : null}

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
        </div>
      </CheckboxGroupContext.Provider>
    );
  }
);

const CheckboxGroupItem = React.forwardRef<CheckboxGroupItemElement, CheckboxGroupItemProps>(
  ({ disabled, label, ...otherProps }, ref) => {
    const context = useCheckboxGroupContext();
    const { disabled: ctxDisabled } = context ?? {};

    return (
      <Checkbox
        ref={ref}
        className="wg-checkbox-group__item"
        disabled={disabled ?? ctxDisabled}
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
