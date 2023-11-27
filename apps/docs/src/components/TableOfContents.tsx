"use client";

import * as React from "react";
import { useMemo } from "react";

import { Items } from "@/lib/toc";
import { cn } from "@/lib/utils";
import { useActiveItem } from "@/hooks/useActiveMenu";
import { useMounted } from "@/hooks/useMounted";

type TOCProps = Items;

export function TableOfContents({ items }: TOCProps) {
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
    <div className="sticky top-28 hidden space-y-2 self-start border-l border-surface-100 text-sm leading-6 xl:block">
      <p className="-mt-2 px-4 py-2 font-medium text-surface-900">On this page</p>
      <Tree activeItemId={activeItemId ?? undefined} items={items} />
    </div>
  );
}

type TreeProps = {
  activeItemId?: string;
  className?: string;
  sub?: boolean;
} & Items;

function Tree({ items, activeItemId, className, sub }: TreeProps) {
  const id = React.useId();

  if (!items) {
    return <div>a</div>;
  }

  return (
    <ul className={cn("m-0 list-none space-y-1 text-surface-500", sub && "pt-1", className)}>
      {items.map((item, index) => {
        return (
          <li key={`${id}-${index}`} className="[&:has(.active)&_>a]:text-surface-900">
            <a
              className={cn(
                "-ml-px flex w-full items-center border-l border-transparent px-4 py-0 !outline-0 transition-colors",
                " hover:text-surface-900",
                item.url === `#${activeItemId}` && "active border-purple-600",
                sub && "pl-6"
              )}
              href={item.url}
            >
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
