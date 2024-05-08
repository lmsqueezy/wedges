import * as React from "react";
import { CloseIcon } from "@iconicicons/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { type VariantProps } from "cva";

import { cn } from "../../helpers/utils";
import { dialogVariants } from "./variants";

/* ---------------------------------- Types --------------------------------- */
export type DialogElement = React.ElementRef<typeof DialogPrimitive.Root>;
export type DialogElementProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;

/* ------------------------------- Components ------------------------------- */

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",

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
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-wedges-gray-900 text-lg font-medium", className)}
    {...props}
  />
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

const DialogHeader = ({
  className,
  title,
  description,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
}) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props}>
    {title && <DialogTitle>{title}</DialogTitle>}
    {description && <DialogDescription>{description}</DialogDescription>}
    {children}
  </div>
);

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
    VariantProps<typeof dialogVariants>
>(({ className, size, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        // state animations
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",

        // base styles
        "fixed top-1/2 z-50 grid gap-4 bg-white p-6 text-surface-900 shadow-wg-overlay wg-antialiased dark:border dark:border-surface dark:bg-neutral-800 dark:text-surface-700 dark:shadow-none sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-lg",

        dialogVariants({ size }),

        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-6 rounded-sm text-surface-900 opacity-70 outline-primary transition-opacity disabled:pointer-events-none disabled:text-surface-300">
        <CloseIcon className="size-6" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));

DialogTitle.displayName = "DialogTitle";
DialogDescription.displayName = "DialogDescription";
DialogContent.displayName = "DialogContent";
DialogOverlay.displayName = "DialogOverlay";

const Dialog = Object.assign(DialogPrimitive.Root, {
  Title: DialogTitle,
  Description: DialogDescription,
  Header: DialogHeader,
  Trigger: DialogPrimitive.Trigger,
  Content: DialogContent,
  Portal: DialogPrimitive.Portal,
  Close: DialogPrimitive.Close,
  Overlay: DialogOverlay,
});

export default Dialog;
