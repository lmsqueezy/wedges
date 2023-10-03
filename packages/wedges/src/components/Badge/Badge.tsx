import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../helpers/utils";

/* -------------------------------- Variants -------------------------------- */
const defaultDarkClasses = "dark:wg-bg-surface dark:outline-surface-100";

const badgeVariants = cva("wg-antialiased py-1 px-2 rounded-lg text-sm flex items-center", {
  variants: {
    color: {
      default: [
        "wg-bg-surface text-surface-900 dark:text-surface-800 outline-surface-200 dark:outline-surface-100",
      ],
      green: [
        "wg-bg-wg-green-50 outline-wg-green-200 text-wg-green-800 dark:text-wg-green",
        defaultDarkClasses,
      ],
      purple: [
        "wg-bg-wg-purple-50 outline-wg-purple-200 text-wg-purple-700 dark:text-wg-purple-400",
        defaultDarkClasses,
      ],
      orange: [
        "wg-bg-wg-orange-50 outline-wg-orange-200 text-wg-orange-800 dark:text-wg-orange",
        defaultDarkClasses,
      ],
      red: [
        "wg-bg-wg-red-50 outline-wg-red-200 text-wg-red-700 dark:text-wg-red",
        defaultDarkClasses,
      ],
      pink: [
        "wg-bg-wg-pink-50 outline-wg-pink-200 text-wg-pink-700 dark:text-wg-pink",
        defaultDarkClasses,
      ],
      blue: [
        "wg-bg-wg-blue-50 outline-wg-blue-200 text-wg-blue-700 dark:text-wg-blue",
        defaultDarkClasses,
      ],
      yellow: [
        "wg-bg-wg-yellow-50 outline-wg-yellow-300 text-wg-yellow-800 dark:text-wg-yellow",
        defaultDarkClasses,
      ],
      primary: ["wg-bg-primary-subtle outline-primary-borders text-primary-foreground"],
      secondary: ["wg-bg-secondary-subtle outline-secondary-borders text-secondary-foreground"],
    },
    shape: {
      rounded: "rounded-lg",
      pill: "rounded-full",
    },
    stroke: {
      true: "outline -outline-offset-1 outline-1",
      false: "",
    },
  },
  defaultVariants: {
    color: "default",
    shape: "rounded",
  },
});

const iconVariants = cva("h-4 w-4", {
  variants: {
    color: {
      default: "text-surface-400",
      green: "text-wg-green-700",
      purple: "text-wg-purple-700",
      orange: "text-wg-orange-700",
      red: "text-wg-red-700",
      pink: "text-wg-pink-700",
      blue: "text-wg-blue-700",
      yellow: "text-wg-yellow-700",
      primary: "text-surface-100",
      secondary: "text-surface-400",
    },
  },
  compoundVariants: [
    {
      color: ["green", "purple", "orange", "red", "pink", "blue", "yellow"],
      class: "dark:text-current",
    },
  ],
  defaultVariants: {
    color: "default",
  },
});

/* ---------------------------------- Types --------------------------------- */
type BaseBadgeProps = {
  /**
   * Whether the badge has border or not.
   */
  stroke?: boolean;

  /**
   * The slot to be rendered before the label.
   */
  before?: React.ReactElement<HTMLElement>;

  /**
   * The slot to be rendered after the label.
   */
  after?: React.ReactElement<HTMLElement>;
};

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants> &
  BaseBadgeProps;

export type BadgeElement = HTMLSpanElement;

/* ------------------------------- Components ------------------------------- */
const Badge = React.forwardRef<BadgeElement, BadgeProps>((props, ref) => {
  const {
    after,
    before,
    children,
    className,
    color = "default",
    shape = "rounded",
    stroke = false,
    ...otherProps
  } = props;

  // Render an icon with size, variant, and destructive properties applied.
  const renderIcon = (icon: React.ReactElement<HTMLElement>) => {
    const Component = React.isValidElement(icon) ? Slot : "span";
    const classNames = cn(iconVariants({ color }), icon.props?.className);

    return <Component className={classNames}>{icon}</Component>;
  };

  return (
    <span
      ref={ref}
      className={cn(badgeVariants({ color, shape, stroke }), className)}
      {...otherProps}
    >
      {before && renderIcon(before)}
      {children && <span className="px-1">{children}</span>}
      {after && renderIcon(after)}
    </span>
  );
});

Badge.displayName = "Badge";

export default Badge;
