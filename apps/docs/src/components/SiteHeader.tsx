import { HeaderNav } from "./HeaderNav";
import { Logo, Logomark } from "./Logo";
import { WedgesHeader } from "./WedgesHeader";

import { cn } from "@/lib/utils";
import { focusClasses } from "@/lib/a11y";

export function SiteHeader() {
  return (
    <>
      <LemonSqueezyHeader />
      <WedgesHeader />
    </>
  );
}

/* ------------------------------- Components ------------------------------- */
function LemonSqueezyHeader() {
  return (
    <header className="[&_a]:duration-180 border-b border-white/20 bg-purple-600 dark:bg-transparent [&_a]:transition-colors">
      <div className="container flex min-h-[88px] items-center justify-between">
        <a
          aria-label="Lemon Squeezy home page"
          className={cn(focusClasses, "outline-white")}
          href="https://lemonsqueezy.com"
        >
          <Logomark className="lg:hidden" />
          <Logo className="hidden w-auto fill-slate-700 dark:fill-sky-100 lg:block" />
        </a>

        <HeaderNav />
      </div>
    </header>
  );
}
