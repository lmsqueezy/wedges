import { CloseIcon } from "@iconicicons/react";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../helpers/utils";
import { Avatar } from "../Avatar";

/* -------------------------------- Variants -------------------------------- */
const badgeVariants = cva("py-1 px-2 rounded-lg text-sm flex items-center", {
  variants: {
    color: {
      default: [
        "wg-background-wg-surface dark:wg-background-slate-800 text-wg-foreground border-wg-surface-border",
      ],
      red: "bg-wg-red-50 text-wg-red",
      accent: "bg-wg-accent/5 text-wg-accent",
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
  compoundVariants: [
    { stroke: true, color: "red", class: "border-wg-red" },
    { stroke: true, color: "accent", class: "border-wg-accent" },
  ],
});

/* ---------------------------------- Types --------------------------------- */

type BaseBadgeProps = {
  /**
   * The src of the avatar image to be rendered before the label.
   */
  avatar?: string;

  /**
   * The label to be rendered inside the badge.
   */
  label?: string;

  /**
   * Whether the badge has border or not.
   */
  stroke?: boolean;

  /**
   * The slot to be rendered before the avatar.
   */
  leftSlot?: React.ReactNode;
};

type ClosableBadgeProps = {
  /**
   * Whether the badge is closable or not.
   */
  closable: true;

  /**
   * Callback fired when the component requests to be closed.
   */
  onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

type UnclosableBadgeProps = {
  /**
   * Whether the badge is closable or not.
   */
  closable?: false;

  /**
   * Callback fired when the component requests to be closed.
   */
  onClose?: never;
};

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants> &
  BaseBadgeProps &
  (ClosableBadgeProps | UnclosableBadgeProps);

/* ------------------------------- Components ------------------------------- */
const BadgeWedges = React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const {
    avatar,
    children,
    className,
    closable,
    color,
    label,
    leftSlot,
    stroke,
    variant,
    onClose,
    ...otherProps
  } = props;

  return (
    <span
      ref={ref}
      className={cn(badgeVariants({ color, variant, stroke }), className)}
      {...otherProps}
    >
      {leftSlot}

      {avatar && (
        <Avatar.Root className="min-w-5 h-5">
          <Avatar.Image alt="avatar" src={avatar} />
          <Avatar.Fallback className="bg-wg-gray-900/10 dark:bg-wg-white-100" />
        </Avatar.Root>
      )}

      <span className="px-1">{children || label}</span>

      {closable && (
        <button className="focus-visible:outline-wg-accent" onClick={onClose}>
          <CloseIcon className="text-wg-gray-400" height={16} width={16} />
        </button>
      )}
    </span>
  );
});

BadgeWedges.displayName = "Badge";

export default BadgeWedges;
