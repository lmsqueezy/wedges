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
     * Does the button only contains an icon?
     * If true, the button will be rendered with matching padding.
     */
    isIconOnly?: boolean;

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

export type ButtonElement = HTMLButtonElement;

const iconOnlyPadding = {
  md: "p-8px",
  sm: "p-6px",
  "xs-icon": "p-2px",
};

const Button = React.forwardRef<ButtonElement, ButtonProps>(
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
      isIconOnly = false,
      ...otherProps
    },
    ref
  ) => {
    const useAsChild = asChild && isReactElement(children);
    const Component = useAsChild ? Slot : "button";

    // Determine if the button is icon-only.
    const isIcon =
      React.useMemo(() => {
        return (before && !after && !children && size) || (after && !before && !children && size);
      }, [before, after, children, size]) || isIconOnly === true;

    // Determine if the button is a 'link', 'outline', 'tertiary', or 'transparent' variant.
    const isVariantLinkOutlineTertiaryTransparent = React.useMemo(
      () => ["link", "outline", "tertiary", "transparent"].includes(variant!),
      [variant]
    );

    // Render an icon with size, variant, and destructive properties applied.
    const renderIcon = (icon: React.ReactElement<HTMLElement>) => {
      const Component = React.isValidElement(icon) ? Slot : "span";

      const isNonDestructiveIconOnly =
        variant && isVariantLinkOutlineTertiaryTransparent && isIcon && !destructive;

      const iconClasses = cn(
        iconVariants({ size, variant, destructive }),
        isNonDestructiveIconOnly && "group-hover:text-surface-700",
        disabled && isIcon && "opacity-50",
        disabled && "text-current",
        icon.props?.className
      );

      return <Component className={iconClasses}>{icon}</Component>;
    };

    const innerContent = useAsChild ? (
      React.cloneElement(children, {
        children: (
          <>
            {before ? renderIcon(before) : null}
            {children.props.children && isIconOnly && renderIcon(children.props.children)}
            {children.props.children && !isIconOnly && (
              <span className="px-1">{children.props.children}</span>
            )}
            {after ? renderIcon(after) : null}
          </>
        ),
      })
    ) : (
      <>
        {before ? renderIcon(before) : null}
        {React.isValidElement(children) && isIconOnly && renderIcon(children as React.ReactElement)}
        {children && !isIconOnly && <span className="px-1">{children}</span>}
        {after ? renderIcon(after) : null}
      </>
    );

    return (
      <Component
        ref={ref}
        className={cn(
          buttonVariants({ size, variant, shape, destructive }),
          variant === "link" && children && "focus-visible:outline-0",
          isIcon && iconOnlyPadding[size!],
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
