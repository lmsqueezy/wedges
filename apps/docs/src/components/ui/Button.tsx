import { forwardRef, Fragment, type ComponentPropsWithoutRef, type ElementRef } from "react";
import Link from "next/link";
import { Button as WedgesButton } from "@lemonsqueezy/wedges";

import { cn } from "@/lib/utils";

type ButtonElement = ElementRef<typeof WedgesButton>;
type ButtonProps = Omit<ComponentPropsWithoutRef<typeof WedgesButton>, "size"> & {
  size?: "lg" | "md" | "md-lg";
  href?: string;
  target?: string;
  scroll?: boolean;
  hoverEffect?: boolean;
};

function HoverComponent({ children }: { children: React.ReactNode }) {
  return <span className="relative isolate">{children}</span>;
}

export const Button = forwardRef<ButtonElement, ButtonProps>((props, ref) => {
  const {
    after,
    children,
    className,
    href,
    scroll,
    shape = "pill",
    size = "md",
    asChild = false,
    target,
    variant,
    disabled,
    hoverEffect = false,
    ...otherProps
  } = props;

  const buttonSizes = cn(
    size === "lg" && "px-10 py-4 text-base",
    size === "md" && "px-12px py-8px",
    size === "md-lg" && "text-[15px]"
  );

  const hoverEffectArrow = after ?? (
    <span aria-hidden className="ease-hover-effect arrow ml-0.5 opacity-100 transition-transform">
      →
    </span>
  );

  const HoverEffectWrapper = hoverEffect ? HoverComponent : Fragment;

  return (
    <HoverEffectWrapper>
      <WedgesButton
        after={hoverEffect ? hoverEffectArrow : after}
        ref={ref}
        className={cn(
          buttonSizes,
          variant === "primary" && "bg-wg-purple hover:bg-wg-purple-400",
          disabled && "pointer-events-none",
          className,
          hoverEffect &&
            "hover-effect !ease-hover-effect group relative gap-0 !outline-wg-yellow-500 transition-all hover:-translate-x-2 hover:-translate-y-2 hover:bg-wg-yellow-500 hover:after:absolute hover:after:left-2 hover:after:top-2 hover:after:size-full hover:after:rounded-full hover:after:content-[''] focus-visible:bg-wg-yellow-500"
        )}
        shape={shape}
        size="md"
        asChild={Boolean(href) || asChild}
        variant={variant}
        disabled={disabled}
        {...otherProps}
      >
        {
          // eslint-disable-next-line no-nested-ternary -- allow for cleaner code
          asChild ? (
            children
          ) : href ? (
            <Link scroll={scroll} href={href} target={target} className={cn(buttonSizes)}>
              <span className="px-2">{children}</span>
            </Link>
          ) : (
            <>{children}</>
          )
        }
      </WedgesButton>

      {hoverEffect ? (
        <span className="absolute inset-0 -z-10 rounded-full bg-wg-yellow-300" />
      ) : null}
    </HoverEffectWrapper>
  );
});

Button.displayName = "Button";
