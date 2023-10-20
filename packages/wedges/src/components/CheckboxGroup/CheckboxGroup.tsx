import * as React from "react";

import { cn } from "../../helpers/utils";

import { LabelProps } from "../Label";
import { LabelHelperProps } from "../types";

/* ---------------------------------- Types --------------------------------- */
export type CheckboxGroupElement = HTMLDivElement;
export type CheckboxGroupProps = Omit<React.HTMLAttributes<HTMLDivElement>, "asChild"> &
  LabelProps &
  LabelHelperProps;

type CheckboxGroupItemElement = HTMLDivElement;

type CheckboxGroupItemProps = {
  disabled?: CheckboxGroupProps["disabled"];
};

/* --------------------------------- Context -------------------------------- */
const CheckboxGroupContext = React.createContext<CheckboxGroupItemProps | null>(null);

/**
 * Hook to get the current context value for ButtonGroup.
 *
 * @returns The current context value for ButtonGroup.
 * @throws If the context is undefined.
 */
export function useCheckboxGroupContext(skipCheck = false) {
  const context = React.useContext(CheckboxGroupContext);

  if (!context && !skipCheck) {
    throw new Error("CheckboxGroup.Item must be used within a CheckboxGroup or CheckboxGroup.Root");
  }

  return context;
}

/* -------------------------------- Component ------------------------------- */
const CheckboxGroupWedges = React.forwardRef<CheckboxGroupElement, CheckboxGroupProps>(
  (props, ref) => {
    return <div></div>;
  }
);

CheckboxGroupWedges.displayName = "CheckboxGroup";

const CheckboxGroup = Object.assign(CheckboxGroupWedges, {
  // Item: CheckboxPrimitive.Item,
});

export default CheckboxGroup;
