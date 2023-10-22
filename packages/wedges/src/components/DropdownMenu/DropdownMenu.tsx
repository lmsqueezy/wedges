import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { cn } from "../../helpers/utils";
import { Kbd, KbdElement, KbdProps } from "../Kbd";

/* ---------------------------------- Types --------------------------------- */
export type DropdownMenuElement = React.ElementRef<typeof DropdownMenuPrimitive.Root>;
export type DropdownMenuProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root>;

/* ------------------------------- Components ------------------------------- */
const DropdownMenuWedges = DropdownMenuPrimitive.Root;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ align = "start", collisionPadding = 8, className, sideOffset = 8, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      align={align}
      className={cn(
        "wg-antialiased text-surface-900 dark:text-surface-700 shadow-wg-overlay dark:border-surface flex flex-col gap-2 rounded-lg bg-white py-2 text-sm leading-6 dark:border dark:bg-neutral-800 dark:shadow-none",
        className
      )}
      collisionPadding={collisionPadding}
      sideOffset={sideOffset}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-4 py-1 font-medium opacity-40", inset && "pl-8", className)}
    {...props}
  />
));

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "focus:bg-surface text-surface-900 dark:text-surface-700 [&_svg]:text-surface-400 relative flex cursor-pointer select-none items-center gap-2 px-4 py-1 outline-none transition-none duration-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-40 dark:focus:bg-white/5",
      className
    )}
    {...props}
  />
));

const DropdownMenuShortcut = React.forwardRef<KbdElement, KbdProps>(
  ({ className, ...props }, ref) => {
    return (
      <Kbd
        ref={ref}
        className={cn(
          "text-surface-500 dark:text-surface-500 ms-auto border-0 bg-transparent p-0 ps-4 text-xs shadow-none dark:bg-transparent",
          className
        )}
        {...props}
      />
    );
  }
);

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("bg-surface-100 h-px dark:bg-white/5", className)}
    {...props}
  />
));

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, sideOffset = -4, alignOffset = -9, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    alignOffset={alignOffset}
    className={cn(
      "shadow-wg-overlay dark:border-surface z-50 flex min-w-[9rem] flex-col gap-2 rounded-lg bg-white py-2 dark:border dark:bg-neutral-800 dark:shadow-none",
      className
    )}
    sideOffset={sideOffset}
    {...props}
  />
));

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "focus:bg-surface [&_svg]:text-surface-400 data-[state=open]:bg-surface text-surface-900 dark:text-surface-700 relative flex cursor-pointer select-none items-center gap-2 px-4 py-1 leading-6 outline-none transition-colors duration-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-white/5 dark:data-[state=open]:bg-white/5",
      className
    )}
    {...props}
  >
    {children}

    <svg
      className="text-surface-500 ms-auto h-6 w-6"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </DropdownMenuPrimitive.SubTrigger>
));

DropdownMenuContent.displayName = "DropdownMenuContent";
DropdownMenuItem.displayName = "DropdownMenuItem";
DropdownMenuLabel.displayName = "DropdownMenuLabel";
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";
DropdownMenuWedges.displayName = "DropdownMenu";

const DropdownMenu = Object.assign(DropdownMenuWedges, {
  Content: DropdownMenuContent,
  Group: DropdownMenuGroup,
  Item: DropdownMenuItem,
  Label: DropdownMenuLabel,
  Portal: DropdownMenuPortal,
  RadioGroup: DropdownMenuRadioGroup,
  Separator: DropdownMenuSeparator,
  SubTrigger: DropdownMenuSubTrigger,
  SubContent: DropdownMenuSubContent,
  Shortcut: DropdownMenuShortcut,
  Sub: DropdownMenuSub,
  Trigger: DropdownMenuTrigger,
});

export default DropdownMenu;
