import * as Primitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn, getElementFromHash, getInitials, stringToHash } from "../../helpers/utils";
import { UserIcon } from "../icons";
import LemonSqueezyIcon from "../icons/LemonSqueezy";

/* -------------------------------- Variants -------------------------------- */
const defaultAvatarSize = "h-10 min-w-10 text-wg-base [--wg-notification-size:10px]";
const rootClasses = cn("relative flex aspect-square shrink-0 items-center", defaultAvatarSize);

const statusClasses =
  "absolute right-0 bottom-0 aspect-square bg-wg-gray-300 h-[var(--wg-notification-size,10px)] rounded-full ring-2 ring-wg-background";

const notificationClasses =
  "absolute right-0 top-0 aspect-square h-[var(--wg-notification-size,10px)] rounded-full ring-2 ring-wg-background";

const avatarVariants = cva(rootClasses, {
  variants: {
    size: {
      xs: "h-6 min-w-6 text-wg-xs [--wg-notification-size:6px]",
      sm: "h-8 min-w-8 text-wg-sm [--wg-notification-size:8px]",
      md: "h-10 min-w-10 text-wg-base [--wg-notification-size:10px]",
      lg: "h-12 min-w-12 text-wg-lg [--wg-notification-size:12px]",
      xl: "h-14 min-w-14 text-wg-xl [--wg-notification-size:14px]",
      "2xl": "h-16 min-w-16 text-wg-2xl [--wg-notification-size:16px]",
      default: defaultAvatarSize,
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const fallbackVariants = cva("", {
  variants: {
    size: {
      xs: "w-4 h-4",
      sm: "w-5 h-5",
      md: "w-6 h-6",
      lg: "w-7 h-7",
      xl: "w-8 h-8",
      "2xl": "w-10 h-10",
      default: "w-6 h-6",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const statusVariants = cva(statusClasses, {
  variants: {
    status: {
      gray: "bg-wg-gray",
      green: "bg-wg-green",
      yellow: "bg-wg-yellow",
      red: "bg-wg-red",
      default: "bg-wg-gray-300 dark:bg-wg-gray",
    },
  },
  defaultVariants: {
    status: "default",
  },
});

const notificationVariants = cva(notificationClasses, {
  variants: {
    /**
     * Represents the color of the notification dot.
     */
    notification: {
      gray: "bg-wg-gray",
      green: "bg-wg-green",
      yellow: "bg-wg-yellow",
      red: "bg-wg-red",
      default: "bg-wg-gray",
    },
  },
  defaultVariants: {
    notification: "default",
  },
});

/* ---------------------------------- Types --------------------------------- */
export type AvatarElement = React.ElementRef<typeof Primitive.Image> | HTMLSpanElement;

type AvatarVariantProps = VariantProps<typeof statusVariants> &
  VariantProps<typeof notificationVariants> &
  VariantProps<typeof avatarVariants> &
  VariantProps<typeof fallbackVariants>;

type BaseAvatarProps = {
  /**
   * Represents the initials displayed on the Avatar.
   *
   * - Supports single characters, two characters, or full words.
   * - For full words, initials will be derived from the first letter of the
   *   first word and the first letter of the last word.
   *
   * Example: "John Doe" => "JD"
   */
  initials?: string;
};

export type AvatarProps = React.ComponentPropsWithoutRef<typeof Primitive.Image> &
  BaseAvatarProps &
  AvatarVariantProps;

/* ------------------------------- Components ------------------------------- */
const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof Primitive.Root>,
  React.ComponentPropsWithoutRef<typeof Primitive.Root>
>(({ className, ...props }, ref) => (
  <Primitive.Root ref={ref} className={cn(rootClasses, className)} {...props} />
));

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof Primitive.Image>,
  React.ComponentPropsWithoutRef<typeof Primitive.Image>
>(({ className, ...props }, ref) => (
  <Primitive.Image
    ref={ref}
    className={cn("aspect-square w-full grow rounded-full object-cover object-center", className)}
    {...props}
  />
));

const AvatarStatus = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn(statusClasses, "bg-wg-gray-500", className)} {...props} />
  )
);

const AvatarNotification = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn(notificationClasses, "bg-wg-gray", className)} {...props} />
));

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof Primitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof Primitive.Fallback>
>(({ className, ...props }, ref) => (
  <Primitive.Fallback
    ref={ref}
    className={cn(
      "bg-wg-gray-100 dark:bg-wg-white-100 flex aspect-square grow items-center justify-center rounded-full",
      className
    )}
    {...props}
  />
));

const AvatarWedges = React.forwardRef<AvatarElement, AvatarProps>((props, ref) => {
  const {
    alt,
    children,
    className,
    initials,
    notification,
    size = "default",
    src,
    status,
    ...otherProps
  } = props;

  // Get a random color for initial variant.
  const randomColors = [
    "bg-wg-blue",
    "bg-wg-pink",
    "bg-wg-purple",
    "bg-wg-green",
    "bg-wg-orange",
    "bg-wg-yellow",
    "bg-wg-red",
  ];
  const identifier = (src || alt || initials || "default") + size;
  const bgColor = getElementFromHash(stringToHash(identifier + size), randomColors);

  return (
    <AvatarRoot
      className={cn(
        avatarVariants({ size }),
        !src && !initials && children && "aspect-auto w-auto"
      )}
    >
      {/* Show image if available */}
      {src && (
        <AvatarImage
          ref={ref as React.RefObject<HTMLImageElement>}
          alt={alt}
          className={className}
          src={src}
          {...otherProps}
        />
      )}

      {/* Allow children to be used as fallback */}
      {children && (
        <AvatarFallback
          ref={ref}
          aria-label={alt}
          asChild={React.isValidElement(children)}
          className={cn(className)}
        >
          {children}
        </AvatarFallback>
      )}

      {/* Show Lemon Squeezy icon until image is loaded, 
          only if children fallback is not set */}
      {!children && src && !initials && (
        <AvatarFallback aria-label={alt} className={cn(className)}>
          <LemonSqueezyIcon
            aria-hidden="true"
            className={cn(
              fallbackVariants({ size }),
              "dark:fill-wg-white-300 fill-wg-gray-300 -mr-[4.5%] w-auto stroke-none"
            )}
          />
        </AvatarFallback>
      )}

      {/* Initials */}
      {!children && initials && (
        <Primitive.Fallback
          ref={ref}
          aria-label={alt}
          className={cn(
            "flex aspect-square grow items-center justify-center rounded-full uppercase text-white",
            bgColor,
            className
          )}
          {...otherProps}
        >
          {getInitials(initials)}
        </Primitive.Fallback>
      )}

      {/* Fallback */}
      {!children && !src && !initials && (
        <AvatarFallback
          ref={ref}
          aria-label={alt}
          className={cn(className)}
          role="img"
          {...otherProps}
        >
          <UserIcon
            className={cn("text-wg-gray-400 dark:text-wg-white-500", fallbackVariants({ size }))}
          />
        </AvatarFallback>
      )}

      {/* Status and Notification */}
      {status && <AvatarStatus className={statusVariants({ status })} />}
      {notification && <AvatarNotification className={notificationVariants({ notification })} />}
    </AvatarRoot>
  );
});

AvatarWedges.displayName = "Avatar";
AvatarRoot.displayName = "AvatarRoot";
AvatarFallback.displayName = Primitive.Fallback.displayName;
AvatarImage.displayName = "AvatarImage";
AvatarNotification.displayName = "AvatarNotification";
AvatarStatus.displayName = "AvatarStatus";

const Avatar = Object.assign(AvatarWedges, {
  Fallback: AvatarFallback,
  Image: AvatarImage,
  Notification: AvatarNotification,
  Root: AvatarRoot,
  Status: AvatarStatus,
});

export default Avatar;
export { AvatarFallback, AvatarImage, AvatarNotification, AvatarRoot, AvatarStatus };
