import * as React from "react";

import { cn } from "../../helpers/utils";
import { Label, LabelProps } from "../Label";
import { LabelHelperProps } from "../types";

/* ---------------------------------- Types --------------------------------- */
export type TextareaElement = HTMLTextAreaElement;
export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  LabelProps &
  LabelHelperProps & {
    destructive?: boolean;
  };

/* -------------------------------- Component ------------------------------- */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, tooltip, id, helperText, label, destructive, required, disabled, ...otherProps },
    ref
  ) => {
    const generatedId = React.useId();
    const elId = id || generatedId;
    const ariaInvalid = otherProps["aria-invalid"] || destructive;

    return (
      <div className="wg-antialiased flex flex-col gap-2">
        {label || tooltip ? (
          <Label
            tooltip={tooltip}
            disabled={disabled}
            htmlFor={elId}
            id={`${elId}__label`}
            required={required}
          >
            {label}
          </Label>
        ) : null}

        <textarea
          ref={ref}
          aria-describedby={helperText ? `${elId}__describer` : undefined}
          aria-labelledby={label ? `${elId}__label` : undefined}
          aria-invalid={ariaInvalid}
          className={cn(
            "shadow-wg-xs placeholder-surface-500 bg-background flex min-h-[112px] rounded-lg border px-4 py-2 text-sm leading-6 transition-colors duration-100",

            "outline-primary focus:outline focus:outline-2 focus:-outline-offset-1",

            !disabled && "hover:border-surface-300 dark:hover:border-surface-200 text-surface-900",

            disabled &&
              "text-surface-300 placeholder-surface-300 dark:text-surface-200 dark:placeholder-surface-200 bg-surface-50 cursor-not-allowed",

            ariaInvalid &&
              "border-destructive outline-destructive hover:border-destructive dark:hover:border-destructive",

            !ariaInvalid && "border-surface-200 dark:border-surface-100",

            className
          )}
          disabled={disabled}
          required={required}
          id={elId}
          {...otherProps}
        />

        {helperText ? (
          <Label.Helper disabled={disabled} aria-invalid={ariaInvalid} id={`${elId}__describer`}>
            {helperText}
          </Label.Helper>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
