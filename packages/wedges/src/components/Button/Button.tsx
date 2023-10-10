import { Slot } from "@radix-ui/react-slot";
import { VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn, isReactElement } from "../../helpers/utils";

import { buttonVariants, iconVariants } from "./variants";

/* ---------------------------------- Types --------------------------------- */
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    /**
     * If set to true, the button will be rendered as a child of the component.
     */
    asChild?: boolean;

    /**
     * The slot to be rendered before the label.
     */
    before?: React.ReactElement<HTMLElement>;

    /**
     * The slot to be rendered after the label.
     */
    after?: React.ReactElement<HTMLElement>;

    /**
     * Specifies whether this button has a destructive action.
     * If true, the button should be styled differently to indicate that it will perform a destructive action.
     */
    destructive?: boolean;
  };

const iconOnlyPadding = {
  md: "p-8px",
  sm: "p-6px",
  "xs-icon": "p-2px",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      after,
      asChild,
      before,
      children,
      className,
      destructive = false,
      disabled = false,
      shape = "rounded",
      size = "md",
      variant = "primary",
      ...otherProps
    },
    ref
  ) => {
    const useAsChild = asChild && isReactElement(children);
    const Component = useAsChild ? Slot : "button";

    // Determine if the button is icon-only.
    const isIconOnly = React.useMemo(() => {
      return (before && !after && !children && size) || (after && !before && !children && size);
    }, [before, after, children, size]);

    // Determine if the button is a 'link', 'outline', 'tertiary', or 'transparent' variant.
    const isVariantLinkOutlineTertiaryTransparent = React.useMemo(
      () => ["link", "outline", "tertiary", "transparent"].includes(variant!),
      [variant]
    );

    // Render an icon with size, variant, and destructive properties applied.
    const renderIcon = (icon: React.ReactElement<HTMLElement>) => {
      const Component = React.isValidElement(icon) ? Slot : "span";

      const isNonDestructiveIconOnly =
        variant && isVariantLinkOutlineTertiaryTransparent && isIconOnly && !destructive;

      const classNames = cn(
        iconVariants({ size, variant, destructive }),
        isNonDestructiveIconOnly && "group-hover:text-surface-700",
        disabled && "text-current transition-none",
        icon.props?.className
      );

      return <Component className={classNames}>{icon}</Component>;
    };

    const innerContent = useAsChild ? (
      React.cloneElement(children, {
        children: (
          <>
            {before ? renderIcon(before) : null}
            <span className="px-1">{children.props.children}</span>
            {after ? renderIcon(after) : null}
          </>
        ),
      })
    ) : (
      <>
        {before ? renderIcon(before) : null}
        {children ? <span className="px-1">{children}</span> : null}
        {after ? renderIcon(after) : null}
      </>
    );

    return (
      <Component
        ref={ref}
        className={cn(
          buttonVariants({ size, variant, shape, destructive }),
          variant === "link" && children && "focus:outline-0",
          isIconOnly && iconOnlyPadding[size!],
          className
        )}
        disabled={disabled}
        {...otherProps}
      >
        {innerContent}
      </Component>
    );
  }
);

Button.displayName = "Button";

export default Button;
