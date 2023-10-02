import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn, isReactElement } from "../../helpers/utils";
import { Button } from "../Button";
import { CloseIcon, InfoIcon } from "../icons";

const defaultRootClasses =
  "wg-antialiased flex text-sm leading-6 gap-2 bg-surface dark:text-surface-foreground-contrast-softer dark:bg-surface p-3 items-center";

/* -------------------------------- Variants -------------------------------- */
const alertVariants = cva("", {
  variants: {
    variant: {
      inline: "rounded-lg",
      expanded: "p-4 pl-14px border-l-2 border-surface-borders-stronger items-start rounded-r-lg",
    },
    color: {
      gray: "text-surface-foreground-softer border-surface-borders-stronger",
      primary: "text-surface-foreground-softer border-primary",
      info: "bg-wg-blue-50 text-wg-blue-700 border-wg-blue",
      success: "bg-wg-green-50 text-wg-green-700 border-wg-green",
      error: "bg-wg-red-50 text-wg-red-700 border-wg-red",
      warning: "bg-wg-yellow-50 text-wg-yellow-700 border-wg-yellow",
    },
  },
  defaultVariants: {
    variant: "inline",
    color: "gray",
  },
});

const alertTitleVariants = cva("font-medium", {
  variants: {
    color: {
      gray: "text-surface-foreground-contrast",
      primary: "text-surface-foreground-contrast",
      info: "text-wg-blue-800 dark:text-wg-blue",
      success: "text-wg-green-800 dark:text-wg-green",
      error: "text-wg-red-800 dark:text-wg-red",
      warning: "text-wg-yellow-800 dark:text-wg-yellow",
    },
  },
  defaultVariants: {
    color: "gray",
  },
});

const alertIconVariants = cva("", {
  variants: {
    color: {
      gray: "text-surface-borders-stronger dark:text-surface-foreground-softer",
      primary: "text-primary",
      info: "text-wg-blue",
      success: "text-wg-green",
      error: "text-wg-red",
      warning: "text-wg-yellow",
    },
  },
  defaultVariants: {
    color: "gray",
  },
});

/* ---------------------------------- Types --------------------------------- */
type ClosableProps = {
  /**
   * Is the alert closable? If true, a close icon will be displayed.
   * @default true
   */
  closable: true;

  /**
   * An optional callback function to be called when the close icon is clicked.
   * This can be used to handle the removal of the tag.
   * If provided, the close icon will be displayed.
   */
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
};

type NotClosableProps = {
  /**
   * Is the alert closable? If true, a close icon will be displayed.
   * @default true
   */
  closable?: false;

  /**
   * An optional callback function to be called when the close icon is clicked.
   * This can be used to handle the removal of the tag.
   * If provided, the close icon will be displayed.
   */
  onClose?: never;
};

export type AlertProps = Omit<React.HTMLAttributes<HTMLDivElement>, "title"> &
  VariantProps<typeof alertVariants> & {
    /**
     * The slot to be rendered before the description.
     * This can be used to render an icon
     * or any other element before the description. Also accepts a string,
     * number, or any valid React element.
     * If the `before` prop is omitted, the default icon will be displayed.
     *
     * @example
     * // Display an alert with icon
     * <Alert before={<SuccessIcon />} />
     */
    before?: React.ReactNode;

    /**
     * The slot to be rendered after the description.
     * This can be a string, number or any valid React element.
     * If omitted, it will not be displayed.
     *
     * @example
     * // Display an alert with button
     * <Alert after={<Button size='sm'>Save</Button>} />
     */
    after?: React.ReactNode;

    /**
     * The title to display within the Alert component.
     * This can be a string, number or any valid React element.
     * If omitted, no title will be displayed.
     * If a string is provided, it will be wrapped in an <AlertTitle /> component.
     * If a React element is provided, it will be rendered as-is.
     */
    title?: React.ReactNode;
  } & (ClosableProps | NotClosableProps);

/* ------------------------------- Components ------------------------------- */
const AlertWedges = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    { after, before, className, closable, color, variant, children, title, onClose, ...otherProps },
    ref
  ) => {
    const [visible, setVisible] = React.useState(true);
    const ExpandedWrapper = variant === "inline" ? React.Fragment : "div";

    /**
     * Handle the close event.
     * @param event - The event object
     */
    const handleClose = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        setVisible(false);

        if (onClose) {
          onClose(event);
        }
      },
      [onClose]
    );

    if (!visible) {
      return null;
    }

    return (
      <AlertRoot
        ref={ref}
        className={cn(alertVariants({ variant, color }), className)}
        {...otherProps}
      >
        <AlertBefore color={color}>{before}</AlertBefore>

        <div
          className={cn(
            "flex grow items-center gap-2",
            variant === "expanded" && "flex-col items-start gap-3"
          )}
        >
          <ExpandedWrapper>
            {title && <AlertTitle color={color}>{title}</AlertTitle>}
            {children && <AlertDescription color={color}>{children}</AlertDescription>}
          </ExpandedWrapper>

          {after && (
            <div className={cn(variant === "inline" && "ml-auto")}>
              <AlertAfter>{after}</AlertAfter>
            </div>
          )}
        </div>

        {closable && <AlertCloseButton onClick={handleClose} />}
      </AlertRoot>
    );
  }
);

/* Root */
const AlertRoot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...otherProps }, ref) => {
    return (
      <div ref={ref} className={cn(defaultRootClasses, className)} role="alert" {...otherProps}>
        {children}
      </div>
    );
  }
);

/* Before */
const AlertBefore = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & VariantProps<typeof alertIconVariants>
>(({ className, color, children, ...props }, ref) => {
  const Component = isReactElement(children) ? Slot : "span";

  if (!children) {
    return <InfoIcon className={cn("h-6 w-6 shrink-0", alertIconVariants({ color }), className)} />;
  }

  return (
    <Component ref={ref} className={cn(alertIconVariants({ color }), className)} {...props}>
      {children}
    </Component>
  );
});

/* After */
const AlertAfter = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => {
    const Component = isReactElement(children) ? Slot : "span";

    return (
      <Component ref={ref} className={cn("", className)} {...props}>
        {children}
      </Component>
    );
  }
);

/* Title */
const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & VariantProps<typeof alertTitleVariants>
>(({ className, color, children, ...props }, ref) => {
  const Component = isReactElement(children) ? Slot : "p";

  return (
    <Component ref={ref} className={cn(alertTitleVariants({ color }), className)} {...props}>
      {children}
    </Component>
  );
});

/* Description */
const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const Component = isReactElement(children) ? Slot : "p";

  return (
    <Component ref={ref} className={className} {...props}>
      {children}
    </Component>
  );
});

/* CloseButton */
const AlertCloseButton = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ children, ...otherProps }, ref) => {
  const renderCloseIcon = (children: React.ReactNode): React.ReactElement<HTMLElement> => {
    return isReactElement(children) ? children : <CloseIcon />;
  };

  return (
    <Button
      ref={ref}
      after={renderCloseIcon(children)}
      className="hover:bg-wg-gray-700/5 dark:hover:bg-wg-white-50"
      shape="rounded"
      size="xs-icon"
      variant="transparent"
      {...otherProps}
    />
  );
});

const Alert = Object.assign(AlertWedges, {
  Root: AlertRoot,
  Before: AlertBefore,
  After: AlertAfter,
  Title: AlertTitle,
  Description: AlertDescription,
  CloseButton: AlertCloseButton,
});

AlertWedges.displayName = "Alert";
AlertRoot.displayName = "AlertRoot";
AlertTitle.displayName = "AlertTitle";
AlertAfter.displayName = "AlertAfter";
AlertBefore.displayName = "AlertBefore";
AlertCloseButton.displayName = "AlertCloseButton";
AlertDescription.displayName = "AlertDescription";

export default Alert;
