import * as React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@iconicicons/react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { cn } from "../../helpers/utils";
import { CheckIcon } from "../icons/CheckIcon";
import { Label, type LabelProps } from "../Label";
import { type LabelHelperProps } from "../types";

/* ----------------------------- Select Trigger ----------------------------- */
type SelectTriggerElement = React.ElementRef<typeof SelectPrimitive.Trigger>;
type SelectTriggerProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>;

const SelectTrigger = React.forwardRef<SelectTriggerElement, SelectTriggerProps>((props, ref) => {
  const { className, children, disabled = false, ...otherProps } = props;

  return (
    <SelectPrimitive.Trigger
      ref={ref}
      disabled={disabled}
      className={cn(
        "flex shrink-0 items-center justify-start gap-2 text-nowrap rounded-lg border border-surface-200 py-8px pl-4 pr-3 text-start text-sm leading-6 transition-colors duration-100 dark:border-surface-100 [&>span]:truncate",
        "[--wg-border-width:1px]",

        // focus
        "outline-primary focus:outline focus:outline-2 focus:-outline-offset-1",

        // open state
        "data-[state=open]:outline data-[state=open]:outline-2 data-[state=open]:-outline-offset-1",
        "[&[data-state=open]_.wg-select-icon]:!rotate-180",

        !disabled &&
          "text-surface-900 shadow-wg-xs hover:border-surface-300 data-[placeholder]:text-surface-500",

        // disabled
        "disabled:cursor-not-allowed disabled:bg-surface-overlay-focus disabled:opacity-50",
        className
      )}
      {...otherProps}
    >
      {children ?? (
        <>
          <SelectValue placeholder="Select" />
          <SelectIcon />
        </>
      )}
    </SelectPrimitive.Trigger>
  );
});

SelectTrigger.displayName = "SelectTrigger";

/* ------------------------------- Select Icon ------------------------------ */
type SelectIconElement = React.ElementRef<typeof SelectPrimitive.Icon>;
type SelectIconProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Icon>;

const SelectIcon = React.forwardRef<SelectIconElement, SelectIconProps>((props, ref) => {
  const { className, children, ...otherProps } = props;

  return (
    <SelectPrimitive.Icon
      ref={ref}
      className={cn(
        "wg-overlay-trigger-icon ms-auto size-6 shrink-0 text-surface-900 opacity-50",
        className
      )}
      {...otherProps}
    >
      {children ?? <ChevronDownIcon className="wg-select-icon" />}
    </SelectPrimitive.Icon>
  );
});

SelectIcon.displayName = "SelectIcon";

/* ----------------------------- Select Content ----------------------------- */
type SelectContentElement = React.ElementRef<typeof SelectPrimitive.Content>;
type SelectContentProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
  showScrollButtons?: boolean;
};

const SelectContent = React.forwardRef<SelectContentElement, SelectContentProps>((props, ref) => {
  const {
    children,
    className,
    position = "popper",
    showScrollButtons = true,
    sideOffset = 8,
    ...otherProps
  } = props;

  return (
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        // state animations
        "data-[side=bottom]:animate-wg-fade-in-down data-[side=left]:animate-wg-fade-in-left data-[side=right]:animate-wg-fade-in-right data-[side=top]:animate-wg-fade-in-up data-[state=closed]:animate-wg-fade-out",

        // base styles
        "z-[9991] flex min-w-36 flex-col gap-2 rounded-lg bg-surface-overlay py-2 shadow-wg-overlay dark:border dark:border-surface dark:shadow-none",

        className
      )}
      position={position}
      sideOffset={sideOffset}
      {...otherProps}
    >
      {showScrollButtons ? (
        <SelectPrimitive.SelectScrollUpButton className="-mt-2 flex items-center justify-center">
          <ChevronUpIcon className="size-6" />
        </SelectPrimitive.SelectScrollUpButton>
      ) : null}

      <SelectPrimitive.Viewport
        className={cn(
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] min-w-[calc(var(--radix-select-trigger-width)+1px)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>

      {showScrollButtons ? (
        <SelectPrimitive.SelectScrollDownButton className="-mb-2 flex items-center justify-center">
          <ChevronDownIcon className="size-6" />
        </SelectPrimitive.SelectScrollDownButton>
      ) : null}
    </SelectPrimitive.Content>
  );
});

SelectContent.displayName = "SelectContent";

/* ------------------------------ Select Label ------------------------------ */
const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("w-full px-4 py-1 text-start text-sm leading-6 text-surface-500", className)}
    {...props}
  />
));

SelectLabel.displayName = SelectPrimitive.Label.displayName;

/* ------------------------------- Select Item ------------------------------ */

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center px-4 py-1 text-sm leading-6 outline-none focus:bg-surface-overlay-focus data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
      "data-[state=checked]:bg-surface-overlay-focus",
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemIndicator className="absolute right-3 ml-4 flex shrink-0 items-center justify-center pl-4 text-primary">
      <CheckIcon className="size-6" />
    </SelectPrimitive.ItemIndicator>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

/* ---------------------------- Select Separator ---------------------------- */
type SelectSeparatorElement = React.ElementRef<typeof SelectPrimitive.Separator>;
type SelectSeparatorProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>;
const SelectSeparator = React.forwardRef<SelectSeparatorElement, SelectSeparatorProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;

    return (
      <SelectPrimitive.Separator
        ref={ref}
        className={cn("my-2 h-px bg-surface-overlay-focus", className)}
        {...otherProps}
      />
    );
  }
);

/* --------------------------------- Select --------------------------------- */
type SelectElement = React.ElementRef<typeof SelectPrimitive.Root>;
type SelectProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> &
  LabelProps &
  LabelHelperProps & {
    destructive?: boolean;
  };
const Select = React.forwardRef<SelectElement, SelectProps>((props, ref) => {
  const {
    children,
    className,
    description,
    destructive,
    disabled,
    helperText,
    id,
    label,
    required,
    tooltip,
    ...otherProps
  } = props;

  const generatedId = React.useId();
  const elId = id ?? generatedId;
  const ariaInvalid = otherProps["aria-invalid"] ?? destructive;

  return (
    <div ref={ref} className={cn("flex flex-col gap-2 wg-antialiased", className)}>
      <Label
        description={description}
        disabled={disabled}
        htmlFor={elId}
        id={`${elId}__label`}
        required={required}
        tooltip={tooltip}
      >
        {label}
      </Label>

      <SelectPrimitive.Root disabled={disabled} {...otherProps}>
        {children}
      </SelectPrimitive.Root>

      <Label.Helper aria-invalid={ariaInvalid} disabled={disabled} id={`${elId}__describer`}>
        {helperText}
      </Label.Helper>
    </div>
  );
});

Select.displayName = "Select";

/* ---------------------------------- Other --------------------------------- */
const SelectValue = SelectPrimitive.Value;
const SelectGroup = SelectPrimitive.Group;
const SelectPortal = SelectPrimitive.Portal;

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
