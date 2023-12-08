import * as React from "react";
import { DollarIcon } from "@iconicicons/react";

import { cn } from "../../helpers/utils";
import { Label, LabelProps } from "../Label";
import { LabelHelperProps } from "../types";

/* ---------------------------------- Types --------------------------------- */
export type InputElement = HTMLInputElement;
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  LabelProps &
  LabelHelperProps & {
    destructive?: boolean;
  };

/* -------------------------------- Component ------------------------------- */
const Input = React.forwardRef<InputElement, InputProps>(
  (
    {
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
    },
    ref
  ) => {
    const generatedId = React.useId();
    const elId = id || generatedId;
    const ariaInvalid = otherProps["aria-invalid"] || destructive;

    return (
      <div className="flex flex-col gap-2 wg-antialiased">
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

        <div className="relative flex items-center">
          <input
            ref={ref}
            aria-describedby={helperText ? `${elId}__describer` : undefined}
            aria-invalid={ariaInvalid}
            aria-labelledby={label ? `${elId}__label` : undefined}
            className={cn(
              "flex grow rounded-lg border bg-background px-4 py-2 text-sm leading-6 shadow-wg-xs transition-colors duration-100 placeholder:text-surface-500",
              "outline-primary focus:outline focus:outline-2 focus:-outline-offset-1",
              !disabled &&
                "text-surface-900 hover:border-surface-300 dark:hover:border-surface-200",
              disabled &&
                "cursor-not-allowed bg-surface-50 text-surface-300 placeholder:text-surface-300 dark:bg-white/5 dark:text-surface-200 dark:placeholder:text-surface-200",
              ariaInvalid &&
                "border-destructive outline-destructive hover:border-destructive dark:hover:border-destructive",
              !ariaInvalid && "border-surface-200 dark:border-surface-100",
              className
            )}
            disabled={disabled}
            id={elId}
            {...otherProps}
          />
          <DollarIcon className="absolute right-4 text-surface-900 opacity-40 dark:text-surface-900" />
        </div>

        <Label.Helper aria-invalid={ariaInvalid} disabled={disabled} id={`${elId}__describer`}>
          {helperText}
        </Label.Helper>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
