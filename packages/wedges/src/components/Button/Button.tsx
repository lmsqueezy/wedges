import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn, isReactElement } from "../../helpers/utils";

/* -------------------------------- Variants -------------------------------- */
const buttonVariants = cva(
  "group wg-antialiased text-sm leading-6 font-medium transition-colors inline-flex justify-center items-center focus:outline focus:outline-2 outline-offset-2 disabled:pointer-events-none",
  {
    variants: {
      size: {
        "xs-icon": "py-1 px-8px gap-0",
        sm: "py-1 px-8px gap-0",
        md: "py-2 px-12px gap-1",
      },
      shape: {
        rounded: "rounded-lg",
        pill: "rounded-full",
      },
      variant: {
        primary:
          "bg-primary text-primary-foreground-contrast outline-primary hover:bg-primary-stronger disabled:opacity-50",

        secondary:
          "bg-secondary text-secondary-foreground-contrast hover:bg-secondary-softer outline-secondary disabled:bg-secondary-subtle dark:disabled:text-secondary-foreground-softer",

        tertiary: "bg-surface hover:bg-surface-100",

        outline:
          "hover:bg-surface disabled:border-surface-100 border-surface-200 border shadow-wg-xs dark:shadow:none [--wg-border-width:1px]",

        transparent: "bg-transparent hover:bg-surface",
        link: "p-0 underline underline-offset-3",
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
          "bg-destructive hover:bg-destructive-600 outline-destructive text-white dark:disabled:text-white disabled:bg-destructive disabled:opacity-50",
      },
      {
        variant: "tertiary",
        destructive: true,
        class:
          "bg-destructive-50 hover:bg-destructive-100 disabled:bg-destructive-50 dark:bg-surface dark:hover:bg-surface-200",
      },
      {
        variant: "transparent",
        destructive: true,
        class: "hover:bg-destructive-50 dark:hover:bg-surface",
      },
      {
        variant: "outline",
        destructive: true,
        class:
          "border-destructive disabled:border-destructive-100 dark:disabled:border-destructive-900 hover:bg-destructive-50 dark:hover:bg-surface",
      },
      {
        variant: "link",
        destructive: true,
        class: "focus:text-destructive-foreground hover:text-destructive-foreground-contrast",
      },

      // Outline, tertiary, transparent, link
      {
        variant: ["outline", "tertiary", "transparent", "link"],
        class: "text-surface-900 outline-primary disabled:text-surface-300",
      },
      {
        variant: ["outline", "tertiary", "transparent", "link"],
        destructive: true,
        class:
          "text-destructive-700 dark:text-destructive-500 outline-destructive disabled:text-destructive-300 dark:disabled:text-destructive/50",
      },
    ],
    defaultVariants: {
      shape: "rounded",
      size: "md",
      variant: "primary",
    },
  }
);

const iconVariations = cva("transition-colors", {
  variants: {
    variant: {
      primary: "",
      secondary: "",
      tertiary: "",
      outline: "",
      transparent: "",
      link: "",
    },
    destructive: {
      true: "text-current transition-none",
    },
    size: {
      "xs-icon": "h-5 w-5",
      sm: "h-5 w-5",
      md: "h-6 w-6",
    },
  },
  compoundVariants: [
    {
      variant: ["primary", "secondary"],
      class: "text-current transition-none",
    },
    {
      variant: ["tertiary", "outline", "transparent", "link"],
      class: "text-surface-400",
    },
    {
      variant: ["tertiary", "outline", "transparent", "link"],
      destructive: true,
      class: "text-current transition-none",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

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

    // Render an icon with size, variant, and destructive properties applied.
    const renderIcon = (icon: React.ReactElement<HTMLElement>) => {
      const Component = React.isValidElement(icon) ? Slot : "span";

      const classNames = cn(
        iconVariations({ size, variant, destructive }),
        variant &&
          ["link", "outline", "tertiary", "transparent"].includes(variant) &&
          !children &&
          !after &&
          before &&
          !destructive &&
          "group-hover:text-surface-600",
        variant &&
          ["link", "outline", "tertiary", "transparent"].includes(variant) &&
          !children &&
          after &&
          !before &&
          !destructive &&
          "group-hover:text-surface-600",
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
