import { type FooterNavItem } from "@/types/nav";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/siteConfig";
import { focusClasses } from "@/lib/a11y";
import { cn } from "@/lib/utils";

import { LemonSqueezyLogomark } from "../icons/lemonsqueezy";

export function FooterNav() {
  return (
    <nav className="container">
      <ul className="grid gap-12 md:grid-cols-5 md:gap-6">
        <li>
          <a
            aria-label="Go to Lemon Squeezy home page"
            href={siteConfig.lemonSqueezyURL}
            className={cn(
              focusClasses,
              "inline-block outline-white !transition-all hover:opacity-70"
            )}
          >
            <LemonSqueezyLogomark />
          </a>
        </li>

        {footerNav.map((item, index) => (
          <FooterNavItem item={item} key={`footer-nav-${index.toString()}`} />
        ))}
      </ul>
    </nav>
  );
}

function FooterNavItem({ item }: { item: FooterNavItem }) {
  // If there's no label then this is a top-level column.
  if (!item.label) {
    return (
      <div className="flex flex-col gap-12">
        {item.children?.map((child, index) => <FooterNavItem key={index} item={child} />)}
      </div>
    );
  }

  // If there's no href and there are children then this is a column heading.
  if (!item.href && item.children) {
    return (
      <li>
        <p className="mb-8 text-base font-medium text-white">{item.label}</p>

        <ul>
          {item.children.map((child, index) => (
            <FooterNavItem key={index} item={child} />
          ))}
        </ul>
      </li>
    );
  }

  // Finally, this is a menu item link
  return (
    <li className="py-2 text-[15px] leading-6">
      <a
        className={cn(
          focusClasses,
          "group flex items-center outline-white hover:text-white focus-visible:text-white"
        )}
        href={item.href}
      >
        <span>{item.label}</span>

        <span className="duration-180 text-white opacity-0 transition-all group-hover:translate-x-1.5 group-hover:opacity-100 group-focus-visible:translate-x-1.5 group-focus-visible:opacity-100">
          →
        </span>
      </a>
    </li>
  );
}
