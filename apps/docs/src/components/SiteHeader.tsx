import { Button } from "@lmsqueezy/wedges";

import { Logo, Logomark } from "./Logo";
import { ArrowRightIcon, Navigation } from "./Navigation";
import { WedgesHeader } from "./WedgesHeader";

import { siteConfig } from "@/config/siteConfig";
import { focusClasses } from "@/lib/a11y";
import { cn } from "@/lib/utils";

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
      <div className="container flex min-h-[88px] items-center justify-start gap-6 md:grid-cols-[1fr_auto_1fr] lg:grid">
        <a
          aria-label="Lemon Squeezy home page"
          className={cn(focusClasses, "outline-white")}
          href={siteConfig.lemonSqueezyURL}
        >
          <Logomark className="lg:hidden" />
          <Logo className="hidden w-auto fill-slate-700 dark:fill-sky-100 lg:block" />
        </a>

        <Navigation aria-label="Main Nav" className="hidden self-stretch md:flex">
          <Navigation.Item>Platform</Navigation.Item>
          <Navigation.Item>Resources</Navigation.Item>
          <Navigation.Item>Pricing</Navigation.Item>
          <Navigation.Item active={true}>Wedges</Navigation.Item>
          <Navigation.Item>Help</Navigation.Item>
        </Navigation>

        <Navigation aria-label="Login Nav" className="ml-auto justify-self-end">
          <Navigation.Item
            className={cn("hover:text-white", focusClasses, "outline-white")}
            href="https://app.lemonsqueezy.com/login"
          >
            Sign in
          </Navigation.Item>

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
        </Navigation>
      </div>
    </header>
  );
}
