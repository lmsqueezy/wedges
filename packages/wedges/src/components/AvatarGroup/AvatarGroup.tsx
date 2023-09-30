import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn, isReactElement } from "../../helpers/utils";
import Avatar, { AvatarElement, AvatarProps } from "../Avatar/Avatar";

/* -------------------------------- Variants -------------------------------- */
const defaultAvatarGroupClasses = "inline-flex flex-wrap items-center gap-y-1 -space-x-1.5";
const avatarGroupVariants = cva(defaultAvatarGroupClasses, {
  variants: {
    size: {
      xs: "-space-x-0.5",
      sm: "-space-x-1",
      md: "-space-x-1.5",
      lg: "-space-x-2",
      xl: "-space-x-2.5",
      "2xl": "-space-x-3",
      default: "-space-x-1.5",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

/* ---------------------------------- Types --------------------------------- */
type AvatarGroupAvatarProps = Omit<AvatarProps, "size" | "notification" | "status" | "initial">;

type BaseAvatarGroupProps = {
  /**
   * The items to display in the group.
   */
  items: AvatarGroupAvatarProps[];

  /**
   * The label to display at the end of the group.
   */
  moreLabel?: React.ReactNode;

  /**
   * Whether the previous item should be on top of the stack.
   * If false, the next item will be at the top of the stack.
   */
  previousOnTop?: boolean;
};

export type AvatarGroupElement = React.ElementRef<typeof AvatarGroupRoot> | null;
export type AvatarGroupProps = Omit<React.ComponentPropsWithoutRef<"div">, "size"> &
  BaseAvatarGroupProps &
  VariantProps<typeof avatarGroupVariants>;

type AvatarMoreLabelProps = Omit<AvatarProps, "notification" | "status" | "initial"> & {
  /**
   * The label to display.
   */
  label?: React.ReactNode;
};

/* ------------------------------- Components ------------------------------- */
const AvatarGroupRoot = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  ({ children, className, ...otherProps }, ref) => (
    <div ref={ref} className={cn(defaultAvatarGroupClasses, className)} {...otherProps}>
      {children}
    </div>
  )
);

const AvatarMoreLabel = React.forwardRef<AvatarElement, AvatarMoreLabelProps>(
  ({ label, size, className, children, ...otherProps }, ref) => {
    return (
      <Avatar
        ref={ref}
        asChild={isReactElement(children)}
        className={cn(
          "ring-background bg-surface-3 aspect-auto h-full px-2 text-white ring-2",
          className
        )}
        size={size}
        {...otherProps}
      >
        {!children && <span>{label}</span>}
        {children}
      </Avatar>
    );
  }
);

const AvatarGroupItem = React.forwardRef<
  AvatarElement,
  React.ComponentPropsWithoutRef<typeof Avatar>
>(({ children, className, initials, ...otherProps }, ref) => {
  return (
    <Avatar
      ref={ref}
      className={cn("ring-background ring-2", className)}
      initials={initials}
      {...otherProps}
    >
      {children}
    </Avatar>
  );
});

const AvatarGroupWedges = React.forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
  const { items, className, size, previousOnTop, moreLabel, ...otherProps } = props;

  return (
    <AvatarGroupRoot
      ref={ref}
      className={cn(avatarGroupVariants({ size }), className)}
      {...otherProps}
    >
      <>
        {items.map((item, i) => {
          const {
            alt: itemAlt,
            className: itemClassName,
            src: itemSrc,
            style: itemStyle,
            ...otherItemProps
          } = item;

          const styleOutput = {
            zIndex: previousOnTop ? items.length - i : undefined,
            ...itemStyle,
          };

          return (
            <AvatarGroupItem
              key={`avatar-${i}`}
              alt={itemAlt}
              className={itemClassName}
              size={size}
              src={itemSrc}
              style={styleOutput}
              {...otherItemProps}
            />
          );
        })}

        {moreLabel && <AvatarMoreLabel label={moreLabel} size={size} />}
      </>
    </AvatarGroupRoot>
  );
});

const AvatarGroup = Object.assign(AvatarGroupWedges, {
  Root: AvatarGroupRoot,
  Item: AvatarGroupItem,
  Label: AvatarMoreLabel,
});

AvatarGroupRoot.displayName = "AvatarGroupRoot";
AvatarGroupItem.displayName = "AvatarGroupItem";
AvatarMoreLabel.displayName = "AvatarMoreLabel";
AvatarGroupWedges.displayName = "AvatarGroup";

export default AvatarGroup;
