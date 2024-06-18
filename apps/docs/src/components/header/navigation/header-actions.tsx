import { Button } from "@lemonsqueezy/wedges";

import { siteConfig } from "@/config/siteConfig";
import { focusClasses } from "@/lib/a11y";
import { cn } from "@/lib/utils";

export function HeaderActions() {
  return (
    <nav aria-label="Actions" className="justify-self-end">
      <ul className="flex items-center gap-6">
        <li>
          <a
            href="https://app.lemonsqueezy.com/login"
            className={cn(
              focusClasses,
              "shrink-0 text-nowrap text-white/60 outline-white duration-100 hover:text-white"
            )}
          >
            Sign in
          </a>
        </li>

        <li>
          <Button
            asChild
            className="group shrink-0 flex-nowrap gap-[6px] text-nowrap !bg-white px-5 py-2 text-base tracking-[-0.01em] !text-wg-gray-900 !outline-white lg:text-[15px] hover:[&_svg]:hidden"
            shape="pill"
          >
            <a href={siteConfig.getStartedURL}>
              Get started{" "}
              <span className="duration-180 transition-transform group-hover:translate-x-2">→</span>
            </a>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
