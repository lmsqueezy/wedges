"use client";

import { type WebflowData } from "@/types/webflow";
import { mainNav as nav } from "@/config/navigation";

import { NavigationItem } from "./nav-item";
import { Navigation } from "./navigation";

export function MainNav({ webflowData }: { webflowData?: WebflowData }) {
  if (!nav.length) return null;

  return (
    <Navigation className="hidden lg:flex [&>div]:!static [&>div]:flex [&>div]:grow">
      <Navigation.List className="flex grow">
        {nav.map((item, index) => (
          <NavigationItem
            item={item}
            key={`${item.href}-${index.toString()}`}
            webflowData={webflowData}
          />
        ))}
        <Navigation.Viewport className="animate-in data-[state=closed]:fade-out-100 data-[state=open]:fade-in-0 absolute left-0 top-full z-50 w-full border-t border-white/20 bg-primary opacity-0 shadow-2xl transition-all duration-100 data-[state=open]:opacity-100" />
      </Navigation.List>
    </Navigation>
  );
}
