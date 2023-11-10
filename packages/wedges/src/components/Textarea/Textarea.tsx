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
            disabled={disabled}
            htmlFor={elId}
            id={`${elId}__label`}
            required={required}
            tooltip={tooltip}
          >
            {label}
          </Label>
        ) : null}

        <textarea
          ref={ref}
          aria-describedby={helperText ? `${elId}__describer` : undefined}
          aria-invalid={ariaInvalid}
          aria-labelledby={label ? `${elId}__label` : undefined}
          className={cn(
            "shadow-wg-xs placeholder-surface-500 bg-background flex min-h-[112px] rounded-lg border px-4 py-2 text-sm leading-6 transition-colors duration-100",

            "outline-primary focus:outline focus:outline-2 focus:-outline-offset-1",

            !disabled && "hover:border-surface-300 dark:hover:border-surface-200 text-surface-900",

            disabled &&
              "text-surface-300 placeholder-surface-300 dark:text-surface-200 dark:placeholder-surface-200 bg-surface-50 cursor-not-allowed dark:bg-white/5",

            ariaInvalid &&
              "border-destructive outline-destructive hover:border-destructive dark:hover:border-destructive",

            !ariaInvalid && "border-surface-200 dark:border-surface-100",

            className
          )}
          disabled={disabled}
          id={elId}
          required={required}
          {...otherProps}
        />

        <Label.Helper aria-invalid={ariaInvalid} disabled={disabled} id={`${elId}__describer`}>
          {helperText}
        </Label.Helper>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
