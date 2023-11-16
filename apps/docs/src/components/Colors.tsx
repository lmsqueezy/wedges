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
          <span className="text-surface-200 text-xs">•</span>
          <span className="not-prose text-surface-500 relative rounded px-[0.3rem] py-[0.2rem] font-mono text-xs">{`wg-${title.toLowerCase()}`}</span>
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
        className={cn(
          "h-10 w-10 sm:w-full sm:group-first:rounded-l sm:group-last:rounded-r",
          className
        )}
        {...otherProps}
      />

      <span className="text-surface-700 mt-1 pl-1 text-xs">{title}</span>
      <span className="text-surface-400 pl-1 font-mono text-[9px]">{hex}</span>
    </div>
  );
});

ColorsWedges.displayName = "Colors";
Color.displayName = "Color";

export const Colors = Object.assign(ColorsWedges, { Color });
