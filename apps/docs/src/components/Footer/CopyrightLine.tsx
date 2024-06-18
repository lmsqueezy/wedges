import Link from "next/link";

import { copyrightNav } from "@/config/navigation";
import { siteConfig } from "@/config/siteConfig";
import { focusClasses } from "@/lib/a11y";
import { cn } from "@/lib/utils";

export function CopyrightLine() {
  return (
    <div className="flex flex-col items-center justify-center gap-2.5 pt-20 text-center text-sm leading-6 text-white/50 md:flex-row lg:pt-40">
      <span>&copy; {new Date().getFullYear()} Lemon Squeezy, LLC</span>
      <span className="relative -top-px hidden select-none text-white/30 md:inline-block">•</span>

      <span className="flex items-center gap-2.5">
        {copyrightNav.map(({ label, href }, index) => (
          <div
            key={`copyright-nav-${index.toString()}`}
            className="flex items-center justify-center gap-1.5"
          >
            <Link
              className={cn(focusClasses, "hover:text-white focus-visible:outline-white")}
              href={href ?? siteConfig.lemonSqueezyURL}
            >
              {label}
            </Link>

            {index !== copyrightNav.length - 1 && (
              <span className="relative -top-px select-none text-white/30">•</span>
            )}
          </div>
        ))}
      </span>
    </div>
  );
}
