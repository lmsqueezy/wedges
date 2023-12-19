import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";

import { cn } from "../../helpers/utils";
import { Button, type ButtonProps } from "../Button";

/* ---------------------------------- Types --------------------------------- */
export type ToggleElement = React.ElementRef<typeof TogglePrimitive.Root>;
export type ToggleProps = React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
  Omit<ButtonProps, "variant"> & {
    variant?: "outline" | "transparent";
  };

/* ------------------------------- Components ------------------------------- */
const Toggle = React.forwardRef<ToggleElement, ToggleProps>(
  (
    {
      asChild = false,
      after,
      before,
      children,
      className,
      disabled,
      isIconOnly = false,
      shape = "rounded",
      size = "md",
      variant = "outline",
      ...otherProps
    },
    ref
  ) => {
    return (
      <TogglePrimitive.Root asChild {...otherProps}>
        <Button
          after={after}
          asChild={asChild}
          before={before}
          className={cn(
            "font-normal data-[state=on]:bg-surface-50 data-[state=on]:font-medium",
            className
          )}
          disabled={disabled}
          isIconOnly={isIconOnly}
          ref={ref}
          shape={shape}
          size={size}
          variant={variant}
        >
          {children}
        </Button>
      </TogglePrimitive.Root>
    );
  }
);

Toggle.displayName = "Toggle";

export default Toggle;
