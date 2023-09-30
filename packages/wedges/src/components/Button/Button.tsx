import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn, isReactElement } from "../../helpers/utils";

/* -------------------------------- Variants -------------------------------- */
const buttonVariants = cva(
  "wg-antialiased text-sm leading-6 font-medium transition-colors inline-flex justify-center items-center focus:outline focus:outline-2 outline-offset-2 disabled:pointer-events-none py-2 px-12px gap-1",
  {
    variants: {
      size: {
        "xs-icon": [],
        sm: "py-1 px-8px gap-0",
        md: "py-2 px-12px gap-1",
      },
      shape: {
        rounded: "rounded-lg",
        pill: "rounded-full",
      },
      variant: {
        primary:
          "bg-primary text-primary-foreground-contrast outline-primary hover:bg-primary-stronger disabled:opacity-40 dark:disabled:opacity-50",

        secondary:
          "bg-secondary text-secondary-foreground-contrast hover:bg-secondary-softer outline-secondary disabled:bg-secondary-subtle dark:disabled:text-secondary-foreground-softer",

        tertiary:
          "bg-surface hover:bg-surface-stronger text-surface-foreground-contrast outline-primary disabled:text-surface-foreground-softer",

        transparent:
          "bg-transparent hover:bg-surface text-surface-foreground-contrast outline-primary disabled:text-surface-foreground-softer",

        outline:
          "outline-primary hover:bg-surface text-surface-foreground-contrast border-surface-borders-stronger disabled:border-surface-borders disabled:text-surface-foreground-softer border [--wg-border-width:1px] shadow-wg-xs dark:shadow:none",

        link: "",
      },
      destructive: {
        true: [],
        false: [],
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        size: "md",
        class: "py-8px",
      },
      {
        variant: "outline",
        size: "sm",
        class: "py-4px",
      },
      {
        variant: ["primary", "secondary"],
        destructive: true,
        class:
          "bg-destructive hover:bg-destructive-stronger outline-destructive text-white dark:disabled:text-white disabled:bg-destructive disabled:opacity-40",
      },
      {
        variant: "tertiary",
        destructive: true,
        class:
          "text-destructive-foreground bg-destructive-softer/10 hover:bg-destructive-softer/20 outline-destructive disabled:bg-destructive-softer/10 disabled:text-destructive/50 dark:bg-surface dark:hover:bg-surface-stronger",
      },
      {
        variant: "transparent",
        destructive: true,
        class:
          "text-destructive-foreground hover:bg-destructive-softer/10 outline-destructive disabled:text-destructive/50 dark:hover:bg-surface",
      },
      {
        variant: "outline",
        destructive: true,
        class:
          "border-destructive-borders-stronger hover:bg-destructive-softer/10 text-destructive-foreground outline-destructive disabled:text-destructive/50 disabled:border-destructive-borders dark:hover:bg-surface",
      },
    ],
    defaultVariants: {
      shape: "rounded",
      size: "md",
      variant: "primary",
    },
  }
);

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

    const innerContent = useAsChild ? (
      React.cloneElement(children, {
        children: (
          <>
            {before}
            {children.props.children}
            {after}
          </>
        ),
      })
    ) : (
      <>
        {before &&
          (isReactElement(before) ? (
            React.cloneElement(before, {
              className: cn(
                "h-6 w-6",
                size === "sm" && "h-5 w-5",
                variant === "tertiary" && !destructive && !disabled && "opacity-40",
                variant === "transparent" && !destructive && !disabled && "opacity-40",
                variant === "outline" && !destructive && !disabled && "opacity-40",
                before.props.className || ""
              ),
            })
          ) : (
            <span>{before}</span>
          ))}

        {children ? <span className="px-1">{children}</span> : null}

        {after &&
          (isReactElement(after) ? (
            React.cloneElement(after, {
              className: cn(
                "h-6 w-6",
                size === "sm" && "h-5 w-5",
                variant === "tertiary" && !destructive && !disabled && "opacity-40",
                variant === "transparent" && !destructive && !disabled && "opacity-40",
                variant === "outline" && !destructive && !disabled && "opacity-40",
                after.props.className || ""
              ),
            })
          ) : (
            <span>{after}</span>
          ))}
      </>
    );

    return (
      <Component
        ref={ref}
        className={cn(
          buttonVariants({ size, variant, shape, destructive }),

          // Icon-only buttons
          before && !after && !children && size === "md" && "p-8px",
          after && !before && !children && size === "md" && "p-8px",

          before && !after && !children && size === "sm" && "p-6px",
          after && !before && !children && size === "sm" && "p-6px",

          before && !after && !children && size === "xs-icon" && "p-2px",
          after && !before && !children && size === "xs-icon" && "p-2px",

          // Allow overriding of the default classes
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
