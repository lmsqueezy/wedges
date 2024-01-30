import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "../../helpers/utils";
import { Label } from "../Label";
import { Tooltip } from "../Tooltip";

/* -------------------------------- SlideRoot ------------------------------- */
export type SliderWedgesElement = React.ElementRef<typeof SliderPrimitive.Root>;
export type SliderWedgesProps = Omit<
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
  "asChild"
> & {
  /**
   * The slot to be rendered after the slider.
   */
  after?: React.ReactNode;

  /**
   * The slot to be rendered before the slider.
   */
  before?: React.ReactNode;

  /**
   * Should tooltip be shown always, when hoverign, or never.
   */
  showTooltip?: "always" | "hover" | "never";

  /**
   * Tooltip render function.
   */
  renderTooltip?: (value: number) => string;

  label?: React.ReactNode;
  tooltip?: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
  helperText?: React.ReactNode;
  required?: boolean;
};

const SliderWedges = React.forwardRef<SliderWedgesElement, SliderWedgesProps>((props, ref) => {
  const {
    after,
    before,
    children,
    className,
    defaultValue,
    description,
    disabled,
    helperText,
    id,
    label,
    onValueChange,
    orientation = "horizontal",
    renderTooltip = (value) => value.toString(),
    required = false,
    showTooltip = "hover",
    tooltip,
    ...otherProps
  } = props;

  const [tooltipValue, setTooltipValue] = React.useState<number[]>(defaultValue ?? [0]);
  const generatedId = React.useId();
  const elId = id ?? generatedId;

  return (
    <div className={cn("flex flex-col gap-2", disabled && "text-surface-300")}>
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

      <div
        className={cn(
          "flex justify-between gap-4 self-stretch",
          orientation === "vertical" && "flex-col items-start",
          orientation !== "vertical" && "items-center"
        )}
      >
        {before ? <span>{before}</span> : null}

        <SliderRoot
          className={cn("relative flex w-full touch-none select-none items-center", className)}
          defaultValue={defaultValue}
          disabled={disabled}
          id={elId}
          onValueChange={(value) => {
            setTooltipValue(value);
            onValueChange?.(value);
          }}
          orientation={orientation}
          ref={ref}
          {...otherProps}
        >
          <Slider.Track>
            <Slider.Range aria-disabled={disabled} />
          </Slider.Track>

          {tooltipValue?.map((value, index) => (
            <Slider.Thumb
              key={index}
              aria-disabled={disabled}
              orientation={orientation}
              showTooltip={showTooltip}
              tooltip={showTooltip && showTooltip !== "never" && renderTooltip?.(value)}
            />
          ))}

          {children}
        </SliderRoot>

        {after ? <span>{after}</span> : null}
      </div>

      <Label.Helper disabled={disabled} id={`${elId}__describer`}>
        {helperText}
      </Label.Helper>
    </div>
  );
});

/* ------------------------------- SliderRoot ------------------------------- */
type SliderRootElement = React.ElementRef<typeof SliderPrimitive.Root>;
type SliderRootProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>;

const SliderRoot = React.forwardRef<SliderRootElement, SliderRootProps>((props, ref) => {
  const { className, ...otherProps } = props;

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        "data-[orientation=horizontal]:min-h-6",
        "data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:justify-center data-[orientation=vertical]:px-3",
        className
      )}
      {...otherProps}
    />
  );
});

/* ------------------------------- SliderTrack ------------------------------ */
type SliderTrackElement = React.ElementRef<typeof SliderPrimitive.Track>;
type SliderTrackProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Track>;

const SliderTrack = React.forwardRef<SliderTrackElement, SliderTrackProps>((props, ref) => {
  const { className, ...otherProps } = props;

  return (
    <SliderPrimitive.Track
      ref={ref}
      className={cn(
        "relative h-2 w-full grow overflow-hidden rounded-full bg-surface-100",
        "data-[orientation=vertical]:h-72 data-[orientation=vertical]:w-2",
        className
      )}
      {...otherProps}
    />
  );
});

/* ---------------------------------- Range --------------------------------- */
type SliderRangeElement = React.ElementRef<typeof SliderPrimitive.Range>;
type SliderRangeProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Range>;

const SliderRange = React.forwardRef<SliderRangeElement, SliderRangeProps>((props, ref) => {
  const { className, ...otherProps } = props;
  const disabled = props["aria-disabled"] ?? false;

  return (
    <SliderPrimitive.Range
      ref={ref}
      className={cn(
        "absolute rounded-full bg-primary",
        "data-[orientation=vertical]:left-0 data-[orientation=vertical]:w-full",
        "data-[orientation=horizontal]:l-0 data-[orientation=horizontal]:h-full",
        disabled && "bg-surface-200",
        className
      )}
      {...otherProps}
    />
  );
});

/* ------------------------------- SliderThumb ------------------------------ */
type SliderThumbElement = React.ElementRef<typeof SliderPrimitive.Thumb>;
type SliderThumbProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb> & {
  currentValue?: number;
  tooltip?: string | boolean;
  showTooltip?: "always" | "hover" | "never";
  orientation?: "horizontal" | "vertical";
};

const SliderThumb = React.forwardRef<SliderThumbElement, SliderThumbProps>((props, ref) => {
  const {
    className,
    orientation = "horizontal",
    onBlur,
    onFocus,
    onPointerDown,
    onPointerEnter,
    onPointerLeave,
    onPointerUp,
    showTooltip = "hover",
    tooltip = false,
    ...otherProps
  } = props;
  const [isPointerDown, setIsPointerDown] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);
  const disabled = props["aria-disabled"] ?? false;

  const shouldShowTooltip =
    (showTooltip === "always" && !!tooltip) ||
    (showTooltip === "hover" && (isPointerDown || isHovering) && !!tooltip);

  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={0} open={shouldShowTooltip}>
        <Tooltip.Trigger asChild>
          <SliderPrimitive.Thumb
            onPointerDown={(event) => {
              setIsPointerDown(true);
              onPointerDown?.(event);
            }}
            onPointerUp={(event) => {
              setIsPointerDown(false);
              onPointerUp?.(event);
            }}
            onFocus={(event) => {
              setIsPointerDown(true);
              onFocus?.(event);
            }}
            onBlur={(event) => {
              setIsPointerDown(false);
              onBlur?.(event);
            }}
            onPointerEnter={(event) => {
              setIsHovering(true);
              onPointerEnter?.(event);
            }}
            onPointerLeave={(event) => {
              setIsHovering(false);
              onPointerLeave?.(event);
            }}
            ref={ref}
            data-state={isPointerDown ? "active" : "inactive"}
            className={cn(
              "block size-5 cursor-grab rounded-full border border-surface-200 bg-white shadow-wg-sm disabled:hidden",

              // focus
              "focus:outline-none focus-visible:border-primary dark:focus-visible:border-white",

              // active state
              "data-[state=active]:cursor-grabbing data-[state=active]:border-primary dark:data-[state=active]:border-white",

              // disabled
              disabled && "hidden",

              className
            )}
            {...otherProps}
          >
            {tooltip ? (
              <Tooltip.Content
                side={orientation === "horizontal" ? "top" : "left"}
                content={tooltip}
                className="px-2 py-1 text-xs leading-4"
              />
            ) : null}
          </SliderPrimitive.Thumb>
        </Tooltip.Trigger>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
});

const Slider = Object.assign(SliderWedges, {
  Root: SliderRoot,
  Track: SliderTrack,
  Range: SliderRange,
  Thumb: SliderThumb,
});

Slider.displayName = "Slider";

export default Slider;
