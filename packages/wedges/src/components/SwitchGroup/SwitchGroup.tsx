import * as React from "react";

import { cn } from "../../helpers/utils";
import { Label, type LabelProps } from "../Label";
import { Switch, type SwitchElement, type SwitchProps } from "../Switch";
import { type LabelHelperProps } from "../types";

/* ---------------------------------- Types --------------------------------- */
export type SwitchGroupElement = HTMLDivElement;
export type SwitchGroupProps = React.HTMLAttributes<HTMLDivElement> &
  LabelProps &
  LabelHelperProps & {
    /**
     * Alignment of the labels: "start" (usually left) or "end" (usually right).
     * @default "end"
     */
    alignLabels?: "start" | "end";
  };

type SwitchGroupItemElement = SwitchElement;
type SwitchGroupItemProps = Omit<SwitchProps, "alignLabel">;

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
      description,
      disabled,
      helperText,
      id,
      label,
      required = false,
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
          {(label ?? helperText ?? description ?? tooltip) ? (
            <div className="flex flex-col">{renderLabel}</div>
          ) : null}

          {children ? <div className="flex flex-col gap-2">{children}</div> : null}
        </div>
      </SwitchGroupContext.Provider>
    );
  }
);

const SwitchGroupItem = React.forwardRef<SwitchGroupItemElement, SwitchGroupItemProps>(
  ({ label, className, disabled, ...otherProps }, ref) => {
    const context = useSwitchGroupContext();
    const { disabled: ctxDisabled = null, alignLabels } = context ?? {};

    const isDisabled = ctxDisabled ?? disabled;

    return (
      <Switch
        ref={ref}
        alignLabel={alignLabels}
        className={
          (cn("wg-switch-group__item", alignLabels === "start" && "flex w-full justify-between"),
          className)
        }
        disabled={isDisabled}
        label={label}
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
