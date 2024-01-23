import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "cva";

import { cn, isReactElement } from "../../helpers/utils";
import { Button } from "../Button";
import { CloseIcon, InfoIcon } from "../icons";
import { alertIconVariants, alertTitleVariants, alertVariants } from "./variants";

const defaultRootClasses =
  "wg-antialiased flex text-sm leading-6 bg-surface dark:bg-surface dark:text-surface-500 items-start";

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
   * Is the alert closable? If true, a close button will be displayed and
   * when clicked on it will hide the alert element
   * @default true
   */
  closable?: false;

  /**
   * An optional callback function to be called when the close button is clicked.
   * Requires the `closable` prop to be set to `true`.
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
    {
      after,
      before,
      className,
      closable,
      color,
      variant = "inline",
      children,
      title,
      onClose,
      ...otherProps
    },
    ref
  ) => {
    const [visible, setVisible] = React.useState(true);

    /**
     * Handle the close event.
     * @param event - The event object
     */
    const handleClose = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        // Do not close if the event is prevented by the onClose callback
        if (!event.defaultPrevented) {
          setVisible(false);
        }

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
        <AlertBefore className={cn(variant === "inline" && "pl-1")} color={color}>
          {before}
        </AlertBefore>

        <div
          className={cn(
            "flex grow flex-col items-start",
            variant === "expanded" && "items-start gap-3 px-2",
            variant === "inline" && "px-2 sm:flex-row sm:items-center sm:gap-2",
            variant === "inline" && closable && "pr-1"
          )}
        >
          <div
            className={cn(
              "flex grow flex-col items-start",
              variant === "expanded" && "items-start",
              variant === "inline" && "sm:flex-row sm:items-center sm:gap-2"
            )}
          >
            {title && <AlertTitle color={color}>{title}</AlertTitle>}
            {children && <AlertDescription>{children}</AlertDescription>}
          </div>

          {after && (
            <div className={cn(variant === "inline" && "mt-3 sm:ml-auto sm:mt-0")}>
              <AlertAfter>{after}</AlertAfter>
            </div>
          )}
        </div>

        {closable && (
          <AlertCloseButton className={cn(variant === "inline" && "pr-1")} onClick={handleClose} />
        )}
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
    return <InfoIcon className={cn("size-6 shrink-0", alertIconVariants({ color }), className)} />;
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
      <Component ref={ref} className={className} {...props}>
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
    <Component ref={ref} className={cn("text-start", className)} {...props}>
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
    return isReactElement(children) ? children : <CloseIcon aria-label="Close" />;
  };

  return (
    <Button
      ref={ref}
      after={renderCloseIcon(children)}
      shape="rounded"
      size="xs-icon"
      variant="link"
      {...otherProps}
    />
  );
});

AlertWedges.displayName = "Alert";
AlertRoot.displayName = "AlertRoot";
AlertAfter.displayName = "AlertAfter";
AlertBefore.displayName = "AlertBefore";
AlertCloseButton.displayName = "AlertCloseButton";
AlertDescription.displayName = "AlertDescription";
AlertTitle.displayName = "AlertTitle";

export default AlertWedges;
