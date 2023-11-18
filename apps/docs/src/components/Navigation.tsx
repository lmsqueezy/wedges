import {
  AnchorHTMLAttributes,
  HTMLAttributes,
  SVGAttributes,
  forwardRef,
  isValidElement,
} from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";
import { focusClasses } from "@/lib/a11y";

/* -------------------------------------------------------------------------- */
/*                               Navigation Root                              */
/* -------------------------------------------------------------------------- */
const NavRoot = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...otherProps }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn("flex text-[15px] leading-6 text-white/60", className)}
        {...otherProps}
      />
    );
  }
);

/* -------------------------------------------------------------------------- */
/*                               Navigation Item                              */
/* -------------------------------------------------------------------------- */
const NavItem = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean;
    active?: boolean;
  }
>(({ active, children, className, asChild, ...otherProps }, ref) => {
  const useAsChild = asChild && isValidElement(children);
  const Component = useAsChild ? Slot : "a";

  return (
    <Component
      ref={ref}
      {...otherProps}
      className={cn(
        focusClasses,
        "-mb-px inline-flex shrink-0 items-center justify-center border-b-2 border-transparent px-[10px] outline-white hover:text-white lg:px-4",
        active && "border-yellow-500 text-white",
        !active && "hover:text-white",
        className
      )}
    >
      {children}
    </Component>
  );
});

NavRoot.displayName = "NavRoot";
NavItem.displayName = "NavItem";

export const Navigation = Object.assign(NavRoot, { Item: NavItem });

/* --------------------------------- Helper --------------------------------- */
export function ArrowRightIcon({ className, ...otherProps }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      className={cn("h-3 w-3", className)}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      {...otherProps}
    >
      <path
        d="M6.39205 11.2102L5.36932 10.1988L8.92045 6.64768H0V5.17041H8.92045L5.36932 1.62496L6.39205 0.60791L11.6932 5.90905L6.39205 11.2102Z"
        fill="currentColor"
      />
    </svg>
  );
}
