import * as React from "react";

import { cn } from "../../helpers/utils";
import Avatar, { AvatarElement, AvatarProps } from "../Avatar/Avatar";

/* ---------------------------------- Types --------------------------------- */
type AvatarGroupAvatarProps = Omit<AvatarProps, "size" | "notification" | "status" | "initial">;

type BaseAvatarGroupProps = {
  /**
   * The items to display in the group.
   */
  items: AvatarGroupAvatarProps[];

  /**
   * The size of the avatar group.
   */
  size?: AvatarProps["size"];

  /**
   * The label to display at the end of the group.
   */
  moreLabel?: string;

  /**
   * Whether the previous item should be on top of the stack.
   * If false, the next item will be at the top of the stack.
   */
  previousOnTop?: boolean;
};

export type AvatarGroupElement = React.ElementRef<typeof AvatarGroupRoot> | null;
export type AvatarGroupProps = Omit<React.ComponentPropsWithoutRef<"div">, "size"> &
  BaseAvatarGroupProps;

type AvatarMoreLabelProps = Omit<AvatarProps, "notification" | "status" | "initial"> & {
  /**
   * The label to display.
   */
  label: string;
};

/* ------------------------------- Components ------------------------------- */
const AvatarGroupRoot = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  ({ children, className, ...otherProps }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-wrap items-center gap-y-1 -space-x-1", className)}
      {...otherProps}
    >
      {children}
    </div>
  )
);

const AvatarMoreLabel = React.forwardRef<AvatarElement, AvatarMoreLabelProps>(
  ({ label, size, className, children, ...otherProps }, ref) => {
    return (
      <Avatar
        ref={ref}
        asChild={React.isValidElement(children)}
        className={cn(
          "ring-background bg-wg-gray-200 dark:bg-wg-dark-2 aspect-auto h-full px-2 text-white ring-4",
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
      className={cn("ring-background ring-4", !initials && "dark:bg-black", className)}
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
    <AvatarGroupRoot ref={ref} className={className} {...otherProps}>
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
export { AvatarGroupItem, AvatarGroupRoot, AvatarMoreLabel };
