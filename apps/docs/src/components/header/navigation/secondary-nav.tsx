"use client";

import { secondaryNav } from "@/config/navigation";
import { focusClasses } from "@/lib/a11y";
import { cn } from "@/lib/utils";

import { Navigation } from "./navigation";

export function SecondaryNav() {
  return (
    <Navigation className="shrink-0 [&>div]:!static [&>div]:flex [&>div]:h-full [&>div]:grow">
      <Navigation.List className="flex grow">
        {secondaryNav.map((item, index) => {
          const isActive = item.slug === "guides";

          return (
            <Navigation.Item key={`${item.slug}-${index}`} className="inline-flex grow">
              <Navigation.Link
                className={cn(
                  focusClasses,
                  "group z-[51] -mb-px inline-flex shrink-0 grow items-center justify-center px-4 !outline-none outline-white transition-all duration-100 focus-visible:text-white",
                  isActive && "text-white shadow-[inset_0_-2px_0px_#FFC233]",
                  !isActive &&
                    "hover:text-white data-[state=open]:text-white data-[state=open]:shadow-[inset_0_-2px_0px_#FFC233]",
                  item.children && "pr-2 hover:shadow-[inset_0_-2px_0px_#FFC233]"
                )}
                href={item.href}
              >
                {item.label}
              </Navigation.Link>
            </Navigation.Item>
          );
        })}

        <Navigation.Viewport className="animate-in data-[state=closed]:fade-out-100 data-[state=open]:fade-in-0 absolute left-0 top-full z-50 w-full border-t border-white/20 bg-primary opacity-0 shadow-2xl transition-all duration-200 data-[state=open]:opacity-100" />
      </Navigation.List>
    </Navigation>
  );
}
