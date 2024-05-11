import * as React from "react";
import { cva, type VariantProps } from "cva";

import { cn, isReactElement } from "../../helpers/utils";
import Avatar, { type AvatarElement, type AvatarProps } from "../Avatar/Avatar";

/* -------------------------------- Variants -------------------------------- */
const defaultAvatarGroupClasses = "wg-antialiased flex flex-wrap items-center gap-y-1 -space-x-3";

const avatarGroupVariants = cva({
  base: defaultAvatarGroupClasses,
  variants: {
    size: {
      xs: "-space-x-1",
      sm: "-space-x-2",
      md: "-space-x-3",
      lg: "-space-x-4",
      xl: "-space-x-5",
      "2xl": "-space-x-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

/* ---------------------------------- Types --------------------------------- */
type AvatarGroupAvatarProps = Omit<AvatarProps, "size" | "notification" | "status" | "asChild">;

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

type AvatarMoreLabelProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * The label to display.
   */
  label?: React.ReactNode;

  /**
   * The size of the element.
   */
  size?: AvatarProps["size"];
};

/* ------------------------------- Components ------------------------------- */
const AvatarGroupRoot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
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
          "aspect-auto h-full bg-surface-200 px-2 font-medium text-white ring-2 ring-background dark:text-white",
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
      className={cn("ring-2 ring-background backdrop-blur-3xl", className)}
      initials={initials}
      {...otherProps}
    >
      {children}
    </Avatar>
  );
});

const AvatarGroupWedges = React.forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
  const { items, className, children, size, previousOnTop, moreLabel, ...otherProps } = props;

  return (
    <AvatarGroupRoot
      ref={ref}
      className={cn(avatarGroupVariants({ size }), className)}
      {...otherProps}
    >
      <>
        {items.length > 0
          ? items.map((item, i) => {
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
            })
          : null}

        {children}

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
