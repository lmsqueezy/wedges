"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon, CloseIcon } from "@iconicicons/react";
import { Button } from "@lmsqueezy/wedges";

import { type NavItem } from "@/types/nav";
import { sidebarConfig } from "@/config/sidebarConfig";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

import { Logomark } from "./Logo";
import { useSidebar } from "./Providers";
import { ScrollArea } from "./ScrollArea";
import { Search } from "./Search";

export function Sidebar() {
  const sidebarNav = sidebarConfig.nav;
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 m-0 bg-wg-gray-900/50 md:mt-14 md:bg-transparent md:pb-20",
        isSidebarOpen ? "block" : "hidden",
        "z-[60] w-full text-base leading-8 backdrop-blur md:sticky md:top-[104px] md:z-30 md:block md:h-[calc(100vh-119px)] md:shrink-0 md:text-sm md:leading-6 md:backdrop-blur-none"
      )}
      role={isSidebarOpen ? "dialog" : undefined}
      onClick={() => isSidebarOpen && toggleSidebar()}
    >
      <Search className="hidden md:flex" />

      <ScrollArea
        className="relative h-full w-80 bg-white px-4 py-6 md:-ms-3 md:w-[auto] md:bg-transparent md:py-0 md:pl-0 md:pr-2"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="mb-5 flex items-center space-x-6 md:hidden">
          <Button
            isIconOnly
            aria-label="Toggle sidebar"
            variant="transparent"
            onClick={toggleSidebar}
          >
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
      <div className="sticky -top-2 flex items-center justify-between bg-background py-2 pl-3">
        <h3 className="rounded-md font-medium text-surface-900">{item.label}</h3>

        <Button
          isIconOnly
          className="hover:bg-gray-50 focus-visible:-outline-offset-2"
          size="xs-icon"
          variant="transparent"
          onClick={toggle}
        >
          {<ChevronDownIcon className={cn(isOpen ? "" : "rotate-180")} />}
        </Button>
      </div>

      {isOpen ? <SidebarDropdownItems items={item.items} pathname={pathname} /> : null}
    </div>
  );
}

function SidebarDropdownItems({ items, pathname }: { items?: NavItem[]; pathname?: string }) {
  const id = useId();
  const { toggleSidebar } = useSidebar();

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
              "flex w-full items-center rounded-md px-3 py-1 !outline-0 transition-colors hover:bg-surface",
              pathname === item.href
                ? "font-medium text-purple-600"
                : "text-surface-500 hover:text-surface-700",
              item.disabled && "cursor-not-allowed opacity-60",
              "focus-visible:bg-surface-50 focus-visible:text-surface-700"
            )}
            href={item.href}
            rel={item.external ? "noreferrer" : ""}
            target={item.external ? "_blank" : ""}
            onClick={toggleSidebar}
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
