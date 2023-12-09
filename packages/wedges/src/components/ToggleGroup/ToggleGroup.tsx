import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

import { cn, isElementWithClassName, isReactElement } from "../../helpers/utils";
import Button, { type ButtonProps } from "../Button/Button";

/* ---------------------------------- Types --------------------------------- */
export type ToggleGroupElement = React.ElementRef<typeof ToggleGroupPrimitive.Root>;
export type ToggleGroupProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & {
  /**
   * The size of the buttons in group.
   */
  size?: "sm" | "md";
};

export type ToggleGroupItemProps = React.ComponentPropsWithoutRef<
  typeof ToggleGroupPrimitive.Item
> &
  Omit<ButtonProps, "shape" | "size">;

type ToggleGroupContextProps = {
  size?: "sm" | "md";
  disabled?: boolean;
  orientation?: "horizontal" | "vertical";
};

/* --------------------------------- Context -------------------------------- */
const ToggleGroupContext = React.createContext<ToggleGroupContextProps | null>(null);

/* ------------------------------- Components ------------------------------- */
const ToggleGroupWedges = React.forwardRef<ToggleGroupElement, ToggleGroupProps>(
  (
    {
      className,
      type = "single",
      orientation = "horizontal",
      disabled = false,
      size = "md",
      ...otherProps
    },
    ref
  ) => {
    return (
      <ToggleGroupContext.Provider value={{ disabled, orientation, size }}>
        {/* @ts-expect-error requires separate props */}
        <ToggleGroupPrimitive.Root
          ref={ref}
          className={cn(
            "dark:shadow:none inline-flex flex-wrap items-stretch rounded-[9px] border border-surface-200 shadow-wg-xs dark:border-surface-100",
            orientation === "vertical" && "flex-col",
            className
          )}
          type={type}
          {...otherProps}
        />
      </ToggleGroupContext.Provider>
    );
  }
);

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, children, asChild, isIconOnly = false, before, after, ...otherProps }, ref) => {
  const context = React.useContext(ToggleGroupContext);
  const { size, disabled, orientation } = context ?? {};

  const useAsChild = asChild && isReactElement(children);

  return (
    <>
      <ToggleGroupPrimitive.Item
        asChild={true}
        className={cn("flex items-center", className)}
        {...otherProps}
      >
        {useAsChild ? (
          React.cloneElement(children, {
            className: cn(
              "focus:outline-none last-of-type:[&+span]:hidden",
              isElementWithClassName(children) && children.props.className
            ),
          })
        ) : (
          <Button
            ref={ref}
            after={after}
            before={before}
            className={cn(
              "rounded-none focus-visible:z-10 focus-visible:-outline-offset-1 data-[state=on]:bg-surface-50 last-of-type:[&+span]:hidden",
              orientation === "horizontal"
                ? "first-of-type:rounded-s-lg last-of-type:rounded-e-lg"
                : "first-of-type:rounded-t-lg last-of-type:rounded-b-lg"
            )}
            disabled={disabled}
            isIconOnly={isIconOnly}
            shape="rounded"
            size={size}
            variant="transparent"
          >
            {children}
          </Button>
        )}
      </ToggleGroupPrimitive.Item>

      <span
        aria-hidden
        className={cn("flex w-px bg-surface-100", orientation === "vertical" && "h-px w-full")}
      />
    </>
  );
});

ToggleGroupWedges.displayName = "ToggleGroup";
ToggleGroupItem.displayName = "ToggleGroupItem";

const ToggleGroup = Object.assign(ToggleGroupWedges, {
  Root: ToggleGroupWedges,
  Item: ToggleGroupItem,
});

export default ToggleGroup;
