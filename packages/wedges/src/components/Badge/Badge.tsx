import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../helpers/utils";

import { badgeVariants, iconVariants } from "./variants";

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
    color = "gray",
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
