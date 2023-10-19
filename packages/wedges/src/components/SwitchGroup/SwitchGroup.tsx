import * as React from "react";

import { cn } from "../../helpers/utils";
import { Label, LabelProps } from "../Label";
import { Switch, SwitchElement, SwitchProps } from "../Switch";

/* ---------------------------------- Types --------------------------------- */
export type SwitchGroupElement = HTMLDivElement;
export type SwitchGroupProps = Omit<
  React.HTMLAttributes<HTMLDivElement> & LabelProps,
  "asChild"
> & {
  /**
   * The main label for the component. It can be a string, element, or any other
   * renderable node. Typically, this label describes the purpose or main function
   * of the component.
   */
  label?: React.ReactNode;

  /**
   * Additional text or information to guide the user. This can be an instruction,
   * a hint, or any other supplementary information. It's rendered below label.
   */
  helperText?: React.ReactNode;

  /**
   * Alignment of the labels: "start" (usually left) or "end" (usually right).
   * @default "end"
   */
  alignLabels?: "start" | "end";
};

type SwitchGroupItemElement = SwitchElement;
type SwitchGroupItemProps = SwitchProps;

type SwitchGroupContextProps = {
  alignLabels?: SwitchGroupProps["alignLabels"];
  disabled?: SwitchGroupProps["disabled"];
};

/* --------------------------------- Context -------------------------------- */
const SwitchGroupContext = React.createContext<SwitchGroupContextProps | null>(null);

/**
 * Hook to get the current context value for ButtonGroup.
 *
 * @returns The current context value for ButtonGroup.
 * @throws If the context is undefined.
 */
export function useSwitchGroupContext(skipCheck = false) {
  const context = React.useContext(SwitchGroupContext);

  if (!context && !skipCheck) {
    throw new Error("SwitchGroup.Item must be used within a SwitchGroup or SwitchGroup.Root");
  }

  return context;
}

/* ------------------------------- Components ------------------------------- */
const SwitchGroupWedges = React.forwardRef<SwitchGroupElement, SwitchGroupProps>(
  (
    {
      alignLabels = "end",
      children,
      tooltip,
      required = false,
      helperText,
      disabled = false,
      label,
      id,
      ...otherProps
    },
    ref
  ) => {
    const generatedId = React.useId();
    const elId = id || generatedId;
    const ariaInvalid = otherProps["aria-invalid"];

    return (
      <SwitchGroupContext.Provider value={{ alignLabels, disabled }}>
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

          {children ? <div className="flex flex-col gap-2">{children}</div> : null}
        </div>
      </SwitchGroupContext.Provider>
    );
  }
);

const SwitchGroupItem = React.forwardRef<SwitchGroupItemElement, SwitchGroupItemProps>(
  ({ label, className, disabled, ...otherProps }, ref) => {
    const context = useSwitchGroupContext();
    const { disabled: ctxDisabled, alignLabels } = context || {};

    return (
      <Switch
        ref={ref}
        alignLabel={alignLabels}
        className={(cn(alignLabels === "start" && "flex w-full justify-between"), className)}
        disabled={ctxDisabled || disabled}
        label={label}
        required={false}
        {...otherProps}
      />
    );
  }
);

SwitchGroupWedges.displayName = "SwitchGroup";
SwitchGroupItem.displayName = "SwitchGroupItem";

const SwitchGroup = Object.assign(SwitchGroupWedges, {
  Root: SwitchGroupWedges,
  Item: SwitchGroupItem,
});

export default SwitchGroup;
