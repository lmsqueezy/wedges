import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../helpers/utils";

/* -------------------------------- Variants -------------------------------- */
const defaultDarkClasses = "dark:wg-bg-surface dark:outline-surface-borders";

const badgeVariants = cva("py-1 px-2 rounded-lg text-sm min-h-7 flex items-center w-fit", {
  variants: {
    color: {
      default: ["wg-bg-surface text-surface-foreground outline-surface-2-borders"],
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
      primary: [
        "wg-bg-primary-50 outline-primary-200 text-primary-700 dark:text-primary-400",
        defaultDarkClasses,
      ],
      secondary: [
        "wg-bg-secondary-50 outline-secondary-200 text-secondary-700 dark:text-secondary-700",
        defaultDarkClasses,
      ],
    },
    variant: {
      rounded: "rounded-lg",
      pill: "rounded-full",
      default: "rounded-lg",
    },
    stroke: {
      true: "outline -outline-offset-1 outline-1",
      false: "",
    },
  },
  defaultVariants: {
    color: "default",
    variant: "default",
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
    children,
    className,
    color = "default",
    before,
    after,
    stroke = false,
    variant = "default",
    ...otherProps
  } = props;

  return (
    <span
      ref={ref}
      className={cn(badgeVariants({ color, variant, stroke }), className)}
      {...otherProps}
    >
      {before &&
        (React.isValidElement(before) ? (
          React.cloneElement(before, {
            className: cn("h-4 min-w-4 w-auto opacity-90", before.props.className || ""),
          })
        ) : (
          <span>{before}</span>
        ))}

      {children && <span className="px-1">{children}</span>}

      {after &&
        (React.isValidElement(after) ? (
          React.cloneElement(after, {
            className: cn("h-4 min-w-4 w-auto opacity-90", after.props.className || ""),
          })
        ) : (
          <span>{after}</span>
        ))}
    </span>
  );
});

Badge.displayName = "Badge";

export default Badge;
