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
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        align={align}
        className={cn(
          // state animations
          "data-[side=bottom]:animate-fade-in-down data-[side=top]:animate-fade-in-up data-[side=left]:animate-fade-in-left data-[side=right]:animate-fade-in-right",

          // base styles
          "wg-antialiased text-surface-900 dark:text-surface-700 shadow-wg-overlay dark:border-surface flex origin-[var(--radix-popper-transform-origin)] flex-col gap-2 rounded-lg bg-white py-2 text-sm leading-6 dark:border dark:bg-neutral-800 dark:shadow-none",

          // has checkbox or radio item - offset start padding
          inset && "[--wg-offset-padding-left:32px]",

          className
        )}
        collisionPadding={collisionPadding}
        sideOffset={sideOffset}
        {...otherProps}
      />
    </DropdownMenuPrimitive.Portal>
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
      "text-xxs flex select-none items-center gap-1 px-4 py-1 font-medium uppercase tracking-wider opacity-50",
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
      "focus:bg-surface relative flex cursor-pointer select-none items-center gap-2 px-4 py-1 outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-40 dark:focus:bg-white/5",
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
          "text-surface-500 dark:text-surface-500 shadow-0 ms-auto border-0 bg-transparent p-0 ps-4 text-xs dark:bg-transparent",
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
    className={cn("bg-surface-100 h-px dark:bg-white/5", className)}
    {...otherProps}
  />
));

/* -------------------------------------------------------------------------- */
/*                                Checkbox Item                               */
/* -------------------------------------------------------------------------- */
const CheckIcon = ({ className, ...otherProps }: React.ComponentProps<"svg">) => (
  <svg
    {...otherProps}
    className={cn("!opacity-100", className)}
    fill="none"
    height="24"
    stroke="currentColor"
    viewBox="0 0 24 24"
    width="24"
  >
    <path
      d="M8 11.6923L10.6667 14.7692L16 9.23077"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

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
      "wg-dropdown-menu__checkbox-item focus:bg-surface relative flex cursor-pointer select-none items-center px-4 py-1 pl-7 outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-40 dark:focus:bg-white/5",
      !destructive &&
        "text-surface-900 dark:text-surface-700 [&_svg]:text-surface-900 [&_svg]:opacity-40",
      destructive && "text-destructive",
      "pl-[var(--wg-offset-padding-left,1rem)]",
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
      "wg-dropdown-menu__checkbox-item focus:bg-surface relative flex cursor-pointer select-none items-center px-4 py-1 pl-7 outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-40 dark:focus:bg-white/5",
      !destructive &&
        "text-surface-900 dark:text-surface-700 [&_svg]:text-surface-900 [&_svg]:opacity-40",
      destructive && "text-destructive",
      "pl-[var(--wg-offset-padding-left,1rem)]",
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
      collisionPadding={collisionPadding}
      className={cn(
        // state animations
        "data-[side=bottom]:animate-fade-in-down data-[side=top]:animate-fade-in-up data-[side=left]:animate-fade-in-left data-[side=right]:animate-fade-in-right data-[state=closed]:animate-fade-out",

        // base styles
        "shadow-wg-overlay dark:border-surface z-50 flex min-w-[9rem] origin-[var(--radix-popper-transform-origin)] flex-col gap-2 rounded-lg bg-white py-2 dark:border dark:bg-neutral-800 dark:shadow-none",

        // has checkbox or radio item - offset start padding
        inset && "[--wg-offset-padding-left:34px]",
        className
      )}
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
      "focus:bg-surface text-surface-900 dark:text-surface-700 data-[state=open]:bg-surface relative flex cursor-pointer select-none items-center gap-2 px-4 py-1 leading-6 outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-white/5 dark:data-[state=open]:bg-white/5",
      "[&_svg]:text-surface-900 [&_svg]:opacity-40",
      className
    )}
    {...otherProps}
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
