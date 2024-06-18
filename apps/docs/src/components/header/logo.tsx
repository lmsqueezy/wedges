import { siteConfig } from "@/config/siteConfig";
import { focusClasses } from "@/lib/a11y";
import { cn } from "@/lib/utils";
import { LemonSqueezyLogo, LemonSqueezyLogomark } from "@/components/icons/lemonsqueezy";

export function Logo() {
  return (
    <a
      aria-label="Lemon Squeezy home page"
      className={cn(
        focusClasses,
        "duration-180 w-fit outline-white transition-opacity hover:opacity-70"
      )}
      href={siteConfig.lemonSqueezyURL}
    >
      <LemonSqueezyLogo className="hidden lg:block" />
      <LemonSqueezyLogomark className="lg:hidden" />
    </a>
  );
}
