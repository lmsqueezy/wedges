import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn, isReactElement } from "../../helpers/utils";
import { Button, ButtonElement } from "../Button/";

/* ---------------------------------- Types --------------------------------- */
export type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * The size of the buttons in group.
   */
  size?: "sm" | "md";

  /**
   * Disable all actions on buttons within this group.
   */
  disabled?: boolean;

  /**
   * Orientation of the group.
   */
  orientation?: "horizontal" | "vertical";
};

type ButtonGroupContextProps = {
  size?: ButtonGroupProps["size"];
  disabled?: ButtonGroupProps["disabled"];
  orientation?: ButtonGroupProps["orientation"];
};

export type ButtonGroupElement = HTMLDivElement;

export type ButtonGroupItemProps = Omit<
  React.ComponentPropsWithoutRef<typeof Button>,
  "variant" | "shape" | "size"
>;

/* --------------------------------- Context -------------------------------- */
const ButtonGroupContext = React.createContext<ButtonGroupContextProps | null>(null);

/**
 * Hook to get the current context value for ButtonGroup.
 *
 * @returns The current context value for ButtonGroup.
 * @throws If the context is undefined.
 */
function useButtonGroupContext() {
  const context = React.useContext(ButtonGroupContext);

  if (!context) {
    throw new Error("ButtonGroup.Item must be used within a ButtonGroup or ButtonGroup.Root");
  }

  return context;
}

/* ------------------------------- Components ------------------------------- */
const ButtonGroupWedges = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      className,
      children,
      size = "md",
      disabled = false,
      orientation = "horizontal",
      ...otherProps
    },
    ref
  ) => {
    return (
      <ButtonGroupContext.Provider value={{ size, disabled, orientation }}>
        <div
          ref={ref}
          className={cn(
            "border-surface-200 shadow-wg-xs dark:shadow:none inline-flex flex-wrap items-stretch rounded-[9px] border",
            orientation === "vertical" && "flex-col",
            className
          )}
          {...otherProps}
        >
          {children}
        </div>
      </ButtonGroupContext.Provider>
    );
  }
);

const ButtonGroupItem = React.forwardRef<ButtonElement, ButtonGroupItemProps>(
  ({ asChild = false, children, disabled = false, className, ...otherProps }, ref) => {
    const context = useButtonGroupContext();
    const { disabled: ctxDisabled, orientation, size } = context || {};

    const useAsChild = asChild && isReactElement(children);
    const Component = useAsChild ? Slot : Button;

    return (
      <>
        <Component
          ref={ref}
          className={cn(
            "flex items-center rounded-none focus-visible:z-10 focus-visible:-outline-offset-1",
            "last-of-type:[&+span]:hidden",
            orientation === "horizontal"
              ? "first-of-type:rounded-s-lg last-of-type:rounded-e-lg"
              : "first-of-type:rounded-t-lg last-of-type:rounded-b-lg",
            className
          )}
          disabled={ctxDisabled || disabled}
          size={size}
          variant="transparent"
          {...otherProps}
        >
          {children}
        </Component>

        <span
          aria-hidden
          className={cn("bg-surface-100 flex w-px", orientation === "vertical" && "h-px w-full")}
        />
      </>
    );
  }
);

ButtonGroupWedges.displayName = "ButtonGroup";
ButtonGroupItem.displayName = "ButtonGroupItem";

const ButtonGroup = Object.assign(ButtonGroupWedges, {
  Root: ButtonGroupWedges,
  Item: ButtonGroupItem,
});

export default ButtonGroup;
