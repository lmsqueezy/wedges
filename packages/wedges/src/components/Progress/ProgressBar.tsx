import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cva, type VariantProps } from "cva";

import { cn } from "../../helpers/utils";
import { Label, type LabelProps } from "../Label";
import { type LabelHelperProps } from "../types";

/* -------------------------------- Variants -------------------------------- */
const progressBarVariants = cva({
  base: "flex w-full text-sm wg-antialiased disabled:opacity-50",
  variants: {
    variant: {
      default: "flex-col gap-2",
      inline: "min-w-[200px] flex-wrap items-center gap-2 xs:flex-nowrap xs:gap-4",
    },
    color: {
      primary: ["bg-primary"],
      purple: ["bg-wg-purple"],
      green: ["bg-wg-green"],
      blue: ["bg-wg-blue"],
      orange: ["bg-wg-orange"],
      pink: ["bg-wg-pink"],
      yellow: ["bg-wg-yellow"],
      red: ["bg-wg-red"],
      secondary: ["bg-secondary"],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

/* ---------------------------------- Types --------------------------------- */
export type ProgressBarElement = React.ElementRef<typeof ProgressPrimitive.Root>;
export type ProgressBarProps = React.ComponentProps<typeof ProgressPrimitive.Root> &
  Omit<LabelProps, "required"> &
  LabelHelperProps & {
    /**
     * The indicator to be rendered to the right of the progress bar.
     */
    indicator?: React.ReactNode;

    /**
     * The slot to be rendered after the indicator.
     */
    afterIndicator?: React.ReactNode;

    /**
     * If `true`, the progress bar CSS transition will be disabled.
     */
    disableAnimation?: boolean;
  } & VariantProps<typeof progressBarVariants>;

const ProgressBar = React.forwardRef<ProgressBarElement, ProgressBarProps>((props, ref) => {
  const {
    afterIndicator,
    className,
    color = "primary",
    description,
    disableAnimation,
    disabled,
    helperText,
    id,
    indicator,
    label,
    max = 100,
    tooltip,
    value,
    variant = "default",
    ...otherProps
  } = props;
  const generatedId = React.useId();
  const elId = id ?? generatedId;

  const Wrapper = ({ children: wrapperChildren }: { children: React.ReactNode }) => {
    return variant === "default" ? (
      <div
        className={cn(
          "flex items-center justify-between gap-4 self-stretch",
          variant === "default" && "flex-wrap gap-y-0"
        )}
      >
        {wrapperChildren}
      </div>
    ) : (
      <>{wrapperChildren}</>
    );
  };

  return (
    <div className={progressBarVariants({ variant })}>
      <Wrapper>
        {(label ?? tooltip ?? description) ? (
          <Label
            className="shrink-0 cursor-default"
            description={description}
            disabled={disabled}
            id={`${elId}__label`}
            tooltip={tooltip}
          >
            {label}
          </Label>
        ) : variant === "default" ? (
          <span />
        ) : null}

        {(indicator ?? afterIndicator) ? (
          <span
            className={cn(
              "flex shrink-0 items-center gap-1",
              disabled && "opacity-50",
              variant === "inline" && "order-3"
            )}
          >
            {indicator ? <span>{indicator}</span> : null}
            {afterIndicator ? (
              <span className="flex items-center justify-center text-surface-400">
                {afterIndicator}
              </span>
            ) : null}
          </span>
        ) : null}
      </Wrapper>

      <ProgressPrimitive.Root
        ref={ref}
        id={elId}
        max={max}
        aria-describedby={helperText && variant === "default" ? `${elId}__describer` : undefined}
        aria-labelledby={label ? `${elId}__label` : undefined}
        className={cn(
          "shrink-1 relative h-2 w-full overflow-hidden rounded-full bg-surface-100",
          disabled && "opacity-50",
          className
        )}
        {...otherProps}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            "size-full rounded-e-full",
            !disableAnimation && "transition-transform duration-150 ease-in-out",
            progressBarVariants({ color })
          )}
          style={{ transform: `translateX(-${100 - (Math.min(value ?? 0, max) / max) * 100}%)` }}
        />
      </ProgressPrimitive.Root>

      {variant === "default" ? (
        <Label.Helper disabled={disabled} className="w-fit shrink-0" id={`${elId}__describer`}>
          {helperText}
        </Label.Helper>
      ) : null}
    </div>
  );
});

ProgressBar.displayName = "ProgressBar";
export default ProgressBar;
