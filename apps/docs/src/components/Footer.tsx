import { forwardRef, HTMLAttributes, useId } from "react";
import Link from "next/link";

import type { FooterNav, FooterNavItem } from "@/types/nav";
import { footerNavigation } from "@/config/footerNav";
import { siteConfig } from "@/config/siteConfig";
import { focusClasses } from "@/lib/a11y";
import { cn } from "@/lib/utils";
import { Logomark } from "@/components/Logo";

import { ArrowRightIcon } from "./Navigation";

export function Footer() {
  return (
    <footer className="mt-24 bg-purple-600 text-white dark:bg-transparent [&_a]:transition-colors [&_a]:duration-180">
      <div className="container py-16">
        <div className="grid gap-10 sm:grid-cols-5 sm:gap-6">
          <div>
            <a aria-label="Go to Lemon Squeezy home page" href={siteConfig.lemonSqueezyURL}>
              <Logomark />
            </a>
          </div>

          <div className="col-span-4 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div>
              <FooterNav navigation="resources" title="Resources" />
              <FooterNav navigation="compare" title="Compare" />
            </div>

            <FooterNav navigation="features" title="Features" />
            <FooterNav navigation="platform" title="Platform" />
            <FooterNav navigation="company" title="Company" />
          </div>
        </div>

        <CopyrightLine navigation="copyright" />
      </div>
    </footer>
  );
}

const FooterNav = forwardRef<
  HTMLElement,
  Omit<HTMLAttributes<HTMLElement>, "title"> & {
    navigation: keyof typeof footerNavigation;
    title?: string;
  }
>(({ navigation, title, className, ...otherProps }, ref) => {
  const navigationItems: FooterNavItem[] = footerNavigation[navigation] ?? ({} as FooterNavItem[]); // Fallback to an empty object
  const generatedId = useId();

  return (
    <nav
      ref={ref}
      aria-labelledby={title ? generatedId : undefined}
      className={cn("mb-8 flex flex-col gap-6", className)}
      {...otherProps}
    >
      {title ? (
        <p className="text-base font-medium text-white" id={generatedId}>
          {title}
        </p>
      ) : null}

      <ul>
        {Object.values(navigationItems as FooterNavItem[]).map(({ label, href }, index) => (
          <li key={`${generatedId}-${index}`}>
            <Link
              aria-label={label}
              className="group flex items-center gap-1 py-2 text-base leading-[26px] text-white/60 hover:text-white dark:text-white/50 dark:hover:text-white"
              href={href ?? siteConfig.lemonSqueezyURL}
            >
              {label}

              <ArrowRightIcon
                aria-hidden
                className="ml-1 -translate-x-1 opacity-0 transition duration-200 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
});

FooterNav.displayName = "FooterNav";

function CopyrightLine({ navigation }: { navigation: keyof typeof footerNavigation }) {
  const navigationItems: FooterNavItem[] = footerNavigation[navigation] ?? ({} as FooterNavItem[]); // Fallback to an empty object
  const id = useId();

  return (
    <div className="flex items-center justify-center gap-1.5 px-2 pt-12 text-center text-sm leading-5 text-white/60 dark:text-white/50">
      <span>&copy; {new Date().getFullYear()} Lemon Squeezy, LLC</span>
      <span className="relative -top-px">&bull;</span>

      {Object.values(navigationItems).map(({ label, href }, index) => (
        <div key={`${id}-${index}`} className="flex items-center justify-center gap-1.5">
          <Link
            aria-label={label}
            className={cn("hover:text-white focus-visible:outline-white", focusClasses)}
            href={href ?? siteConfig.lemonSqueezyURL}
          >
            {label}
          </Link>

          {index !== navigationItems.length - 1 && <span className="relative -top-px">&bull;</span>}
        </div>
      ))}
    </div>
  );
}
