import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Slot } from "@radix-ui/react-slot";

import { cn, isReactElement } from "../../helpers/utils";
import { useCheckboxGroupContext } from "../CheckboxGroup/CheckboxGroup";
import { Label, type LabelProps } from "../Label";
import { type LabelHelperProps } from "../types";

/* ---------------------------------- Types --------------------------------- */
export type CheckboxElement = React.ElementRef<typeof CheckboxPrimitive.Root>;
export type CheckboxElementProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
  LabelProps &
  LabelHelperProps & {
    isIndeterminate?: boolean;
  };

type CheckboxRootProps = React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean };

/* ------------------------------- Components ------------------------------- */
const CheckboxRoot = React.forwardRef<HTMLDivElement, CheckboxRootProps>(
  ({ className, children, asChild, ...otherProps }, ref) => {
    const useAsChild = asChild && isReactElement(children);
    const Component = useAsChild ? Slot : "div";

    return (
      <Component ref={ref} className={cn("wg-checkbox flex gap-2", className)} {...otherProps}>
        {children}
      </Component>
    );
  }
);

const CheckboxWedges = React.forwardRef<CheckboxElement, CheckboxElementProps>(
  (
    {
      checked,
      children,
      className,
      description,
      disabled,
      helperText,
      id,
      label,
      required,
      tooltip,
      ...otherProps
    },
    ref
  ) => {
    const isDisabled = disabled;
    const ariaInvalid = otherProps["aria-invalid"];
    const isIndeterminate = checked === "indeterminate";

    const generatedId = React.useId();
    const elId = id ?? generatedId;

    const isInGroup = useCheckboxGroupContext(true) ? true : false;

    const indeterminateIcon = (
      <svg className="scale-100" fill="none" height="24" viewBox="0 0 24 24" width="24">
        <path
          clipRule="evenodd"
          d="M8 4C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8ZM9 11C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H9Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    );

    const renderEmptyBox = isIndeterminate ? (
      indeterminateIcon
    ) : (
      <svg
        className={cn(
          "wg-unchecked aspect-square w-full scale-100",
          isDisabled && "text-surface-100 dark:text-surface-50"
        )}
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <rect
          fill="none"
          height="14.5"
          rx="3"
          ry="3"
          stroke="currentColor"
          strokeWidth="1.5"
          width="14.5"
          x="4.75"
          y="4.75"
        />
      </svg>
    );

    const renderCheckedBox = isIndeterminate ? (
      indeterminateIcon
    ) : (
      <svg
        className={cn(
          "aspect-square w-full scale-100",
          isDisabled && "text-surface-200 dark:text-surface-100"
        )}
        fill="none"
        height="24"
        stroke="none"
        viewBox="0 0 24 24"
        width="24"
      >
        <path
          clipRule="evenodd"
          d="M8 4C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8ZM15.7902 10.2702C16.0776 9.97186 16.0686 9.49708 15.7702 9.20976C15.4719 8.92244 14.9971 8.9314 14.7098 9.22977L10.9458 13.1385L9.31677 11.2588C9.04549 10.9458 8.57182 10.912 8.2588 11.1832C7.94579 11.4545 7.91195 11.9282 8.18323 12.2412L10.3499 14.7412C10.4879 14.9004 10.6864 14.9942 10.897 14.9997C11.1076 15.0053 11.3108 14.922 11.4569 14.7702L15.7902 10.2702Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    );

    const renderLabel =
      (label ?? description ?? tooltip ?? helperText) ? (
        <div className="inline-flex flex-col">
          <Label
            className={cn(isInGroup && "font-normal")}
            description={description}
            disabled={isDisabled}
            htmlFor={elId}
            id={`${elId}__label`}
            required={required}
            tooltip={tooltip}
          >
            {label}
          </Label>

          <Label.Helper aria-invalid={ariaInvalid} disabled={isDisabled} id={`${elId}__describer`}>
            {helperText}
          </Label.Helper>
        </div>
      ) : null;

    return (
      <CheckboxRoot>
        <CheckboxPrimitive.Root
          ref={ref}
          aria-labelledby={label ? `${elId}__label` : undefined}
          checked={checked}
          className={cn(
            "group relative flex size-6 items-center justify-center rounded-lg text-surface-200 outline-primary transition-colors duration-100 focus:outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 [&:has([data-state=checked])_.wg-unchecked]:hidden",
            isDisabled && "pointer-events-none text-surface-200 dark:text-surface-100",
            !isDisabled && !isIndeterminate && "hover:text-surface-300",
            !isDisabled && isIndeterminate && "text-primary",
            className
          )}
          disabled={isDisabled}
          id={elId}
          required={required}
          {...otherProps}
        >
          {renderEmptyBox}

          <CheckboxPrimitive.Indicator asChild className="absolute text-primary">
            {renderCheckedBox}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

        {!children ? renderLabel : children}
      </CheckboxRoot>
    );
  }
);

CheckboxWedges.displayName = "CheckboxWedges";
CheckboxRoot.displayName = "CheckboxRoot";

const Checkbox = Object.assign(CheckboxWedges, {
  Root: CheckboxRoot,
  Item: CheckboxWedges,
});

export default Checkbox;
