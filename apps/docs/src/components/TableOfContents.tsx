"use client";

import * as React from "react";
import { useMemo } from "react";

import { type TOCItems } from "@/lib/toc";
import { cn } from "@/lib/utils";
import { useActiveItem } from "@/hooks/useActiveMenu";
import { useMounted } from "@/hooks/useMounted";

export function TableOfContents({ items }: TOCItems) {
  /**
   * Generate an array of item IDs from the items prop.
   * Each ID is extracted from the URL of an item and its sub-items (if any), specifically the part after the "#".
   * The useMemo hook is used to optimize performance by only recalculating the IDs when the items prop changes.
   */
  const itemIds = useMemo(() => {
    return items
      ? items
          .flatMap((item) => [item.url, item?.items?.map((subItem) => subItem.url)])
          .flat()
          .filter(Boolean) // Remove falsy values (like undefined or null)
          .map((id) => id?.split("#")[1])
          .filter((id): id is string => id !== undefined) // Ensure all elements are strings
      : [];
  }, [items]);

  const activeItemId = useActiveItem(itemIds);
  const mounted = useMounted();

  if (!items?.length || !mounted) {
    return null;
  }

  return (
    <div className="sticky top-32 hidden space-y-4 self-start text-sm leading-6 xl:block">
      <p className="font-medium text-surface-900">On this page</p>
      <Tree activeItemId={activeItemId ?? undefined} items={items} />
    </div>
  );
}

type TreeProps = {
  activeItemId?: string;
  className?: string;
  sub?: boolean;
} & TOCItems;

function Tree({ items, activeItemId, className, sub }: TreeProps) {
  const id = React.useId();

  if (!items) {
    return null;
  }

  return (
    <ul className={cn("m-0 list-none space-y-3 text-gray-500", sub && "mt-2", className)}>
      {items.map((item, index) => {
        return (
          <li key={`${id}-${index}`} className="[&:has(.active)&_>a]:text-primary">
            <a
              className={cn(
                "-ml-px flex max-w-fit items-center border-l border-transparent outline-primary transition-colors",
                " hover:text-surface-900",
                item.url === `#${activeItemId}` && "active",
                sub && "ml-2"
              )}
              href={item.url}
            >
              {sub ? "→ " : null}
              {item.title}
            </a>

            {item?.items?.length ? (
              <Tree activeItemId={activeItemId} items={item.items} sub={true} />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
