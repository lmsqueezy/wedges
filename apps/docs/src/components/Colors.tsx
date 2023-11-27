import { HTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

const ColorsWedges = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLElement> & {
    title: string;
  }
>(({ className, children, title, ...otherProps }, ref) => {
  return (
    <div className="my-8">
      {title ? (
        <div className="text-surface-900 mb-3 mt-2 flex items-center gap-2 text-sm font-medium">
          <span>{title}</span>
          <span className="text-surface-200 select-none text-xs">•</span>
          <span className="not-prose text-surface-500 font-mono text-xs">{`wg-${title.toLowerCase()}`}</span>
        </div>
      ) : null}

      <div ref={ref} className={cn("grid grid-cols-10", className)} {...otherProps}>
        {children}
      </div>
    </div>
  );
});

const Color = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLElement> & {
    title: string;
    hex: string;
  }
>(({ className, title, hex, ...otherProps }, ref) => {
  return (
    <div className="group flex w-full flex-col">
      <div
        ref={ref}
        className={cn("h-10 w-full group-first:rounded-l group-last:rounded-r", className)}
        {...otherProps}
      />

      <span className="text-surface-700 mt-1 pl-1 text-center text-xs md:text-start">{title}</span>
      <span className="text-surface-400 hidden pl-1 font-mono text-[9px] md:block">{hex}</span>
    </div>
  );
});

const ColorThemable = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLElement> & {
    title: string;
    hex: string;
  }
>(({ className, title, hex, ...otherProps }, ref) => {
  return (
    <div className="group flex w-full flex-col">
      <div
        ref={ref}
        className={cn("h-10 w-full rounded-sm ring-1 ring-inset ring-black/10 sm:h-12", className)}
        {...otherProps}
      />

      <span className="text-surface-700 mt-1.5 pl-1 text-xs">{title}</span>
      {hex && <span className="text-surface-400 pl-1 font-mono text-[9px]">{hex}</span>}
    </div>
  );
});

Color.displayName = "Color";
ColorsWedges.displayName = "Colors";
ColorThemable.displayName = "ColorThemable";

export const Colors = Object.assign(ColorsWedges, { Color, ColorThemable });
