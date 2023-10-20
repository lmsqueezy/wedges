import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { Label } from "../Label";
import { LabelHelperProps } from "../types";
import { cn } from "../../helpers/utils";

/* ---------------------------------- Types --------------------------------- */
export type CheckboxElement = React.ElementRef<typeof CheckboxPrimitive.Root>;
export type CheckboxElementProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
  Omit<LabelHelperProps, "label"> & {
    label: React.ReactNode;
  };

/* -------------------------------- Component ------------------------------- */
const Checkbox = React.forwardRef<CheckboxElement, CheckboxElementProps>(
  ({ disabled, id, label, className, required, tooltip, helperText, ...otherProps }, ref) => {
    const isDisabled = disabled;

    const generatedId = React.useId();
    const elId = id || generatedId;

    const renderLabel = (
      <div className="inline-flex flex-col">
        {label && (
          <Label
            className="font-normal"
            disabled={isDisabled}
            htmlFor={elId}
            id={`${elId}__label`}
            required={required}
            tooltip={tooltip}
          >
            {label}
          </Label>
        )}

        {helperText ? (
          <Label.Helper disabled={isDisabled} id={`${elId}__describer`}>
            {helperText}
          </Label.Helper>
        ) : null}
      </div>
    );

    return (
      <div className="flex gap-2">
        <CheckboxPrimitive.Root
          ref={ref}
          aria-labelledby={label ? `${elId}__label` : undefined}
          className={cn(
            "outline-primary text-surface-200 group relative flex flex h-6 w-6 items-center justify-center rounded-lg transition-colors duration-100 focus:outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 [&:has([data-state=checked])_.wg-unchecked]:hidden",
            isDisabled && "text-surface-200 dark:text-surface-100 pointer-events-none",
            !isDisabled && "hover:text-surface-300",
            className
          )}
          disabled={isDisabled}
          id={elId}
          {...otherProps}
        >
          <svg
            className={cn("wg-unchecked aspect-square w-full", isDisabled && "fill-surface-50")}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M4.75 8.75C4.75 6.54086 6.54086 4.75 8.75 4.75H15.25C17.4591 4.75 19.25 6.54086 19.25 8.75V15.25C19.25 17.4591 17.4591 19.25 15.25 19.25H8.75C6.54086 19.25 4.75 17.4591 4.75 15.25V8.75Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>

          <CheckboxPrimitive.Indicator asChild className="text-primary absolute">
            <svg
              className={cn(
                "aspect-square w-full",
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
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

        {renderLabel}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
