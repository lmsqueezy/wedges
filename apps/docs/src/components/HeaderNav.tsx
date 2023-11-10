import { HTMLAttributes, SVGProps, forwardRef } from "react";
import { Button } from "@lmsqueezy/wedges";

import { cn } from "@/lib/utils";
import { focusClasses } from "@/lib/a11y";

const HeaderNav = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...otherProps }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn("flex items-center gap-4 text-[15px] leading-6 text-white/60", className)}
        {...otherProps}
      >
        <a
          className={cn("hover:text-white", focusClasses, "outline-white")}
          href="https://app.lemonsqueezy.com/login"
        >
          Sign in
        </a>

        <Button
          asChild
          className="!text-wg-gray-900 group gap-[6px] !bg-white px-5 py-2 text-[15px] tracking-[-0.01em] !outline-white hover:[&_svg]:hidden"
          shape="pill"
        >
          <a href="https://app.lemonsqueezy.com/register">
            <span>Get started</span>

            <ArrowRightIcon
              aria-hidden
              className="duration-180 pointer-events-none transition-transform group-hover:translate-x-2"
            />
          </a>
        </Button>
      </nav>
    );
  }
);

HeaderNav.displayName = "HeaderNav";

export { HeaderNav };

/* --------------------------------- Helper --------------------------------- */
export function ArrowRightIcon({ className, ...otherProps }: SVGProps<SVGSVGElement>) {
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
