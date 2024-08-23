import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { cn } from "../../helpers/utils";
import { CheckIcon } from "../icons/CheckIcon";
import { Kbd, type KbdElement, type KbdProps } from "../Kbd";

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
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & { inset?: boolean }
>(
  (
    {
      align = "start",
      collisionPadding = 8,
      className,
      inset = false,
      sideOffset = 8,
      ...otherProps
    },
    ref
  ) => (
    <DropdownMenuPrimitive.Content
      ref={ref}
      align={align}
      className={cn(
        // state animations
        "data-[side=bottom]:animate-wg-fade-in-down data-[side=left]:animate-wg-fade-in-left data-[side=right]:animate-wg-fade-in-right data-[side=top]:animate-wg-fade-in-up",

        // base styles
        "flex origin-[var(--radix-popper-transform-origin)] flex-col gap-2 rounded-lg bg-white py-2 text-sm leading-6 text-surface-900 shadow-wg-overlay wg-antialiased dark:border dark:border-surface dark:bg-neutral-800 dark:text-surface-700 dark:shadow-none",

        // has checkbox or radio item - offset start padding
        inset && "[--wg-offset-padding-left:32px]",

        className
      )}
      collisionPadding={collisionPadding}
      sideOffset={sideOffset}
      {...otherProps}
    />
  )
);

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, ...otherProps }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "flex select-none items-center gap-1 px-4 py-1 text-xxs font-medium uppercase tracking-wider opacity-50",
      "pl-[var(--wg-offset-padding-left,1rem)]",
      className
    )}
    {...otherProps}
  />
));

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    destructive?: boolean;
  }
>(({ className, destructive, ...otherProps }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center gap-2 px-4 py-1 outline-none focus:bg-surface data-[disabled]:pointer-events-none data-[disabled]:opacity-40 dark:focus:bg-white/5 [&:has(>svg:first-child)]:pl-3",
      !destructive &&
        "text-surface-900 dark:text-surface-700 [&_svg]:text-surface-900 [&_svg]:opacity-40",
      destructive && "text-destructive",
      "pl-[var(--wg-offset-padding-left,1rem)]",
      className
    )}
    {...otherProps}
  />
));

/* -------------------------------------------------------------------------- */
/*                                  Shortcut                                  */
/* -------------------------------------------------------------------------- */
const DropdownMenuShortcut = React.forwardRef<KbdElement, KbdProps>(
  ({ className, ...otherProps }, ref) => {
    return (
      <Kbd
        ref={ref}
        className={cn(
          "shadow-0 ms-auto border-0 bg-transparent p-0 ps-4 text-xs text-surface-500 dark:bg-transparent dark:text-surface-500",
          className
        )}
        {...otherProps}
      />
    );
  }
);

/* -------------------------------------------------------------------------- */
/*                                  Separator                                 */
/* -------------------------------------------------------------------------- */
const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...otherProps }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("h-px bg-surface-100 dark:bg-white/5", className)}
    {...otherProps}
  />
));

/* -------------------------------------------------------------------------- */
/*                                Checkbox Item                               */
/* -------------------------------------------------------------------------- */

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> & {
    destructive?: boolean;
  }
>(({ className, children, checked, destructive, ...otherProps }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    checked={checked}
    className={cn(
      "wg-dropdown-menu__checkbox-item relative flex cursor-pointer select-none items-center px-4 py-1 pl-[var(--wg-offset-padding-left,1rem)] outline-none focus:bg-surface-overlay-focus data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
      !destructive && "text-surface-overlay-foreground [&_svg]:opacity-40",
      destructive && "text-destructive",
      className
    )}
    {...otherProps}
  >
    <span className="flex items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator className="flex items-center justify-center">
        <CheckIcon className="absolute left-2" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>

    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));

/* -------------------------------------------------------------------------- */
/*                                 Radio Item                                 */
/* -------------------------------------------------------------------------- */
const CircleIcon = ({ className, ...otherProps }: React.ComponentProps<"svg">) => (
  <svg
    {...otherProps}
    className={cn("!opacity-100", className)}
    fill="currentColor"
    height="24"
    stroke="none"
    viewBox="0 0 24 24"
    width="24"
  >
    <circle cx="12" cy="12" fill="currentColor" r="2.5" />
  </svg>
);

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> & {
    destructive?: boolean;
  }
>(({ className, children, destructive, ...otherProps }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "wg-dropdown-menu__checkbox-item relative flex cursor-pointer select-none items-center px-4 py-1 pl-[var(--wg-offset-padding-left,1rem)] outline-none focus:bg-surface-overlay-focus data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
      !destructive && "text-surface-overlay-foreground [&_svg]:opacity-40",
      destructive && "text-destructive",
      className
    )}
    {...otherProps}
  >
    <span className="flex items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator className="flex items-center justify-center">
        <CircleIcon className="absolute left-2" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>

    {children}
  </DropdownMenuPrimitive.RadioItem>
));

/* -------------------------------------------------------------------------- */
/*                                 Sub Content                                */
/* -------------------------------------------------------------------------- */
const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> & { inset?: boolean }
>(
  (
    {
      className,
      collisionPadding = 8,
      sideOffset = -4,
      alignOffset = -9,
      inset = false,
      ...otherProps
    },
    ref
  ) => (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      alignOffset={alignOffset}
      className={cn(
        // state animations
        "data-[side=bottom]:animate-wg-fade-in-down data-[side=left]:animate-wg-fade-in-left data-[side=right]:animate-wg-fade-in-right data-[side=top]:animate-wg-fade-in-up data-[state=closed]:animate-wg-fade-out",

        // base styles
        "z-50 flex min-w-36 origin-[var(--radix-popper-transform-origin)] flex-col gap-2 rounded-lg bg-surface-overlay py-2 shadow-wg-overlay dark:border dark:border-surface dark:shadow-none",

        // has checkbox or radio item - offset start padding
        inset && "[--wg-offset-padding-left:34px]",
        className
      )}
      collisionPadding={collisionPadding}
      sideOffset={sideOffset}
      {...otherProps}
    />
  )
);

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, children, ...otherProps }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center gap-2 px-4 py-1 leading-6 text-surface-overlay-foreground outline-none focus:wg-bg-surface-overlay-focus data-[disabled]:pointer-events-none data-[state=open]:bg-surface-overlay-focus data-[disabled]:opacity-40",
      "[&_svg]:opacity-40",
      className
    )}
    {...otherProps}
  >
    {children}

    <svg
      className="ms-auto size-6 text-surface-500"
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

DropdownMenuWedges.displayName = "DropdownMenu";
DropdownMenuContent.displayName = "DropdownMenuContent";
DropdownMenuItem.displayName = "DropdownMenuItem";
DropdownMenuLabel.displayName = "DropdownMenuLabel";
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

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
  CheckboxItem: DropdownMenuCheckboxItem,
  RadioItem: DropdownMenuRadioItem,
  Shortcut: DropdownMenuShortcut,
  Sub: DropdownMenuSub,
  Trigger: DropdownMenuTrigger,
});

export default DropdownMenu;
