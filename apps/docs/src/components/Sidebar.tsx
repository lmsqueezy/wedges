"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "@iconicicons/react";

import { ScrollArea } from "./ScrollArea";

import { sidebarConfig } from "@/config/sidebarConfig";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types/nav";

export function Sidebar() {
  const sidebarNav = sidebarConfig.nav;

  return (
    <aside className="sticky top-16 z-30 hidden h-[calc(100vh-153px)] min-h-[30vh] w-full shrink-0 pb-4 pt-14 text-sm leading-6 md:sticky md:block">
      <ScrollArea className="-ms-3 h-full pr-3">
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
      <div className="sticky -top-2 flex items-center justify-between">
        <h3 className="text-surface-900 rounded-md bg-white/90 px-3 py-2 font-medium">
          {item.label}
        </h3>

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
