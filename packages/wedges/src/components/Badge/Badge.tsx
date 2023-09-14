import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../helpers/utils";

/* -------------------------------- Variants -------------------------------- */
const defaultDarkClasses = "dark:wg-bg-surface dark:border-surface-borders";

const badgeVariants = cva("py-1 px-2 rounded-lg text-sm flex items-center w-fit", {
  variants: {
    color: {
      default: ["wg-bg-surface text-surface-foreground border-surface-2-borders"],
      green: [
        "wg-bg-wg-green-50 border-wg-green-200 text-wg-green-800 dark:text-wg-green",
        defaultDarkClasses,
      ],
      purple: [
        "wg-bg-wg-purple-50 border-wg-purple-200 text-wg-purple-700 dark:text-wg-purple-400",
        defaultDarkClasses,
      ],
      orange: [
        "wg-bg-wg-orange-50 border-wg-orange-200 text-wg-orange-800 dark:text-wg-orange",
        defaultDarkClasses,
      ],
      red: [
        "wg-bg-wg-red-50 border-wg-red-200 text-wg-red-700 dark:text-wg-red",
        defaultDarkClasses,
      ],
      pink: [
        "wg-bg-wg-pink-50 border-wg-pink-200 text-wg-pink-700 dark:text-wg-pink",
        defaultDarkClasses,
      ],
      blue: [
        "wg-bg-wg-blue-50 border-wg-blue-200 text-wg-blue-700 dark:text-wg-blue",
        defaultDarkClasses,
      ],
      yellow: [
        "wg-bg-wg-yellow-50 border-wg-yellow-300 text-wg-yellow-800 dark:text-wg-yellow",
        defaultDarkClasses,
      ],
      primary: [
        "wg-bg-primary-50 border-primary-200 text-primary-700 dark:text-primary-400",
        defaultDarkClasses,
      ],
      secondary: [
        "wg-bg-secondary-50 border-secondary-200 text-secondary-700 dark:text-secondary-400",
        defaultDarkClasses,
      ],
    },
    variant: {
      rounded: "rounded-lg",
      pill: "rounded-full",
      default: "rounded-lg",
    },
    stroke: {
      true: "border",
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
  before?: React.ReactNode;

  /**
   * The slot to be rendered after the label.
   */
  after?: React.ReactNode;
};

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants> &
  BaseBadgeProps;

/* ------------------------------- Components ------------------------------- */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
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
      {before && (React.isValidElement(before) ? before : <span>{before}</span>)}
      {children && <span className="px-1">{children}</span>}
      {after && (React.isValidElement(after) ? after : <span>{after}</span>)}
    </span>
  );
});

Badge.displayName = "Badge";

export default Badge;
