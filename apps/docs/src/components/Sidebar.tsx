"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon, CloseIcon } from "@iconicicons/react";
import { Button } from "@lmsqueezy/wedges";

import { sidebarConfig } from "@/config/sidebarConfig";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/siteConfig";

import { Logomark } from "./Logo";
import { useSidebar } from "./Providers";
import { ScrollArea } from "./ScrollArea";

export function Sidebar() {
  const sidebarNav = sidebarConfig.nav;
  const { isOpen, toggle } = useSidebar();

  const handleSidebarClick = () => {
    if (isOpen) {
      toggle();
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <aside
      className={cn(
        "bg-wg-gray-900/50 fixed bottom-0 left-0 top-0 m-0 md:bg-transparent",
        isOpen ? "block" : "hidden",
        "z-[60] w-full text-base leading-8 backdrop-blur md:sticky md:sticky md:top-[104px] md:z-30 md:mt-14 md:block md:h-[calc(100vh-153px)] md:min-h-[30vh] md:shrink-0 md:pb-4 md:text-sm md:leading-6 md:backdrop-blur-none"
      )}
      role={isOpen ? "dialog" : undefined}
      onClick={handleSidebarClick}
    >
      <ScrollArea
        className="h-full w-80 bg-white px-4 pb-12 pt-5 md:-ms-3 md:w-[auto] md:bg-transparent md:p-0 md:pr-3"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="mb-5 flex items-center space-x-6 md:hidden">
          <Button isIconOnly aria-label="Toggle sidebar" variant="transparent" onClick={toggle}>
            <CloseIcon aria-hidden />
          </Button>

          <a aria-label="Go to Lemon Squeezy home page" href={siteConfig.lemonSqueezyURL}>
            <Logomark />
          </a>
        </div>

        <SidebarNav items={sidebarNav} />
      </ScrollArea>
    </aside>
  );
}

type SidebarNavProps = {
  items: NavItem[];
};

function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname();
  const id = useId();

  if (!items.length) {
    return null;
  }

  return (
    <nav className="w-full space-y-6">
      {items.map((item, index) => (
        <SidebarDropdown key={`${id}-${index}`} item={item} pathname={pathname} />
      ))}
    </nav>
  );
}

function SidebarDropdown({ item, pathname }: { item: NavItem; pathname?: string }) {
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <div className="bg-background sticky -top-2 flex items-center justify-between px-3 py-2">
        <h3 className="text-surface-900 rounded-md font-medium">{item.label}</h3>

        <button className="rounded-lg transition-colors hover:bg-gray-50" onClick={toggle}>
          {<ChevronDownIcon className={cn(isOpen ? "" : "rotate-180")} />}
        </button>
      </div>

      {isOpen ? <SidebarDropdownItems items={item.items} pathname={pathname} /> : null}
    </div>
  );
}

function SidebarDropdownItems({ items, pathname }: { items?: NavItem[]; pathname?: string }) {
  const id = useId();
  const { toggle, isOpen } = useSidebar();

  if (!items) {
    return null;
  }

  if (!items.length) {
    return null;
  }

  return (
    <div>
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={`${id}-${index}`}
            className={cn(
              "hover:bg-surface flex w-full items-center rounded-md px-3 py-1 !outline-0 transition-colors",
              pathname === item.href
                ? "font-medium text-purple-600"
                : "text-surface-500 hover:text-surface-700",
              item.disabled && "cursor-not-allowed opacity-60",
              "focus-visible:bg-surface-50 focus-visible:text-surface-700"
            )}
            href={item.href}
            rel={item.external ? "noreferrer" : ""}
            target={item.external ? "_blank" : ""}
            onClick={() => isOpen && toggle()}
          >
            {item.label}
          </Link>
        ) : (
          <span
            key={`${id}-${index}`}
            className={cn(
              "text-muted-foreground flex w-full cursor-not-allowed items-center rounded-md p-2 hover:underline",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {item.label && (
              <span className="bg-muted text-muted-foreground ml-2 rounded-md px-1.5 py-0.5 text-xs leading-none no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </span>
        )
      )}
    </div>
  );
}
