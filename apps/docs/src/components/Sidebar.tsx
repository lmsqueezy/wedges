"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon, CloseIcon } from "@iconicicons/react";
import { Badge, Button } from "@lemonsqueezy/wedges";

import { type NavItem } from "@/types/nav";
import { sidebarConfig, type DocsConfig } from "@/config/sidebarConfig";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

import { LemonSqueezyLogomark } from "./icons/lemonsqueezy";
import { useSidebar } from "./Providers";
import { ScrollArea } from "./ScrollArea";
import { Search } from "./Search";

export function Sidebar() {
  const sidebarNav = sidebarConfig.nav;
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 m-0 bg-wg-gray-900/50 md:mt-16 md:bg-transparent md:pb-20",
        isSidebarOpen ? "block" : "hidden",
        "z-[60] w-full text-base leading-8 backdrop-blur md:sticky md:top-32 md:z-30 md:block md:h-[calc(100vh-119px)] md:shrink-0 md:text-sm md:leading-6 md:backdrop-blur-none"
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
            <LemonSqueezyLogomark />
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
    <div className="pl-3">
      <div className="flex items-center justify-between">
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

      {isOpen ? <SidebarDropdownItems items={item.children} pathname={pathname} /> : null}
    </div>
  );
}

function SidebarDropdownItems({
  items,
  pathname,
}: {
  items?: DocsConfig["nav"];
  pathname?: string;
}) {
  const id = useId();
  const { toggleSidebar } = useSidebar();

  if (!items) {
    return null;
  }

  if (!items.length) {
    return null;
  }

  return (
    <div className="mt-[9px]">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <span
            key={`${id}-${index}`}
            className="relative [&>a]:first:after:top-4 [&>a]:last:after:bottom-4"
          >
            <Link
              className={cn(
                "flex w-full items-center gap-2 rounded-md py-1 pl-9 pr-3 !outline-0 hover:bg-surface",
                pathname === item.href
                  ? "font-medium text-purple-600"
                  : "text-gray-500 hover:text-slate-600",
                item.disabled && "cursor-not-allowed opacity-60",
                "focus-visible:bg-surface-50 focus-visible:text-slate-600",

                // the line
                "before:pointer-events-none",
                "before:absolute before:left-[9px] before:top-1/2 before:z-10 before:h-[5px] before:w-[5px] before:-translate-y-1/2 before:rounded-full",
                "after:absolute after:bottom-0 after:left-[11px] after:top-0 after:w-[1px] after:bg-gray-100 dark:after:bg-gray-800",
                "before:bg-slate-300",
                pathname === item.href && "before:bg-primary"
              )}
              href={item.href}
              rel={item.external ? "noreferrer" : ""}
              target={item.external ? "_blank" : ""}
              onClick={toggleSidebar}
            >
              {item.label}

              {item.new ? (
                <Badge shape="pill" color="primary" className="font-normal" size="sm">
                  New
                </Badge>
              ) : null}
            </Link>
          </span>
        ) : (
          <span
            key={`${id}-${index}`}
            className={cn(
              "relative flex w-full items-center justify-between rounded-md py-1 pl-9 pr-3 text-surface-500 !outline-0 transition-colors last:after:bottom-4",
              item.disabled && "text-gray-400",
              // the line
              "before:pointer-events-none",
              "before:absolute before:left-[9px] before:top-1/2 before:z-10 before:h-[5px] before:w-[5px] before:-translate-y-1/2 before:rounded-full",
              "after:absolute after:bottom-0 after:left-[11px] after:top-0 after:w-[1px] after:bg-gray-100 dark:after:bg-gray-800",
              "before:bg-slate-300"
            )}
          >
            <span>{item.label}</span>
            <Badge className="text-gray-500" shape="pill" color="gray" size="sm">
              In progress
            </Badge>
          </span>
        )
      )}
    </div>
  );
}
