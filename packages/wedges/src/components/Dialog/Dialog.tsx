import * as React from "react";
import { CloseIcon } from "@iconicicons/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "../../helpers/utils";
import { Button } from "../Button";
import { dialogVariants } from "./variants";

/* ---------------------------------- Types --------------------------------- */
export type DialogElement = React.ElementRef<typeof DialogPrimitive.Root>;
export type DialogElementProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> &
  DialogHeaderElementProps &
  DialogContentElementProps;

export type DialogHeaderElement = React.ElementRef<"div">;
export type DialogHeaderElementProps = React.ComponentPropsWithoutRef<"div"> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
};

export type DialogContentElement = React.ElementRef<typeof DialogPrimitive.Content>;
export type DialogContentElementProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> & {
  size?: keyof typeof dialogVariants;
  container?: DialogPrimitive.DialogPortalProps["container"];
};

/* ------------------------------- Components ------------------------------- */

const DialogRoot = React.forwardRef<DialogElement, DialogElementProps>(
  ({ title, description, size, container, className, ...props }, ref) => (
    <DialogPrimitive.Root {...props}>
      <DialogContent ref={ref} container={container} size={size} className={className}>
        <DialogHeader title={title} description={description} />
        {props.children}
      </DialogContent>
    </DialogPrimitive.Root>
  )
);

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "data-[state=closed]:animate-wg-fade-out data-[state=open]:animate-wg-fade-in",
      "fixed inset-0 z-50 bg-white/70",
      className
    )}
    {...props}
  />
));

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn("text-lg font-medium", className)} {...props} />
));

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-surface-500", className)}
    {...props}
  />
));

const DialogHeader = React.forwardRef<DialogHeaderElement, DialogHeaderElementProps>(
  ({ title, description, children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)}
      {...props}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      {description && <DialogDescription>{description}</DialogDescription>}
      {children}
    </div>
  )
);

const DialogContent = React.forwardRef<DialogContentElement, DialogContentElementProps>(
  ({ className, size, container, children, ...props }, ref) => (
    <DialogPrimitive.Portal container={container ?? undefined}>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          // state animations
          "data-[state=closed]:animate-wg-fade-out data-[state=open]:animate-wg-fade-in",

          // base styles
          "fixed top-1/2 z-50 grid gap-4 bg-white p-6 text-surface-900 shadow-wg-overlay wg-antialiased dark:border dark:border-surface dark:bg-neutral-800 dark:text-surface-700 dark:shadow-none sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-lg",

          dialogVariants({ size }),

          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          asChild
          className="absolute right-4 top-6 rounded-sm text-surface-900 opacity-70 outline-primary transition-opacity disabled:pointer-events-none disabled:text-surface-300"
        >
          <Button before={<CloseIcon />} variant="link" size="xs-icon" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
);

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);

DialogRoot.displayName = "Dialog";
DialogHeader.displayName = "DialogHeader";
DialogTitle.displayName = "DialogTitle";
DialogDescription.displayName = "DialogDescription";
DialogContent.displayName = "DialogContent";
DialogOverlay.displayName = "DialogOverlay";
DialogFooter.displayName = "DialogFooter";

const Dialog = Object.assign(DialogRoot, {
  Root: DialogPrimitive.Root,
  Title: DialogTitle,
  Description: DialogDescription,
  Header: DialogHeader,
  Trigger: DialogPrimitive.Trigger,
  Content: DialogContent,
  Portal: DialogPrimitive.Portal,
  Close: DialogPrimitive.Close,
  Overlay: DialogOverlay,
  Footer: DialogFooter,
});

export default Dialog;
