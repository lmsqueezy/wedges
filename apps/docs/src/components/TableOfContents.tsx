"use client";

import * as React from "react";
import { useMemo } from "react";

import { NavItem } from "@/types/nav";
import { useMounted } from "@/hooks/useMounted";
import { useActiveItem } from "@/hooks/useActiveMenu";
import { cn } from "@/lib/utils";

type TOCProps = {
  items: NavItem[];
};

export function TableOfContents({ items }: TOCProps) {
  /**
   * Generate an array of item IDs from the items prop.
   * Each ID is extracted from the URL of an item and its sub-items (if any), specifically the part after the "#".
   * The useMemo hook is used to optimize performance by only recalculating the IDs when the items prop changes.
   */
  const itemIds = useMemo(() => {
    return items
      ? items
          .flatMap((item) => [item.href, item?.items?.map((subItem) => subItem.href)])
          .flat()
          .filter(Boolean) // Remove falsy values (like undefined or null)
          .map((id) => id?.split("#")[1])
          .filter((id): id is string => id !== undefined) // Ensure all elements are strings
      : [];
  }, [items]);

  const activeItemId = useActiveItem(itemIds);
  const mounted = useMounted();

  if (!items.length || !mounted) {
    return null;
  }

  return (
    <div className="sticky top-16 hidden space-y-2 text-sm leading-6 xl:block">
      <p className="text-surface-900 px-3 pb-2 font-medium">On This Page</p>
      <Tree activeItemId={activeItemId ?? undefined} items={items} />
    </div>
  );
}

type TreeProps = {
  activeItemId?: string;
  className?: string;
  items: NavItem[];
};

function Tree({ items, activeItemId, className }: TreeProps) {
  const id = React.useId();

  return (
    <ul className={cn("m-0 list-none", className)}>
      {items.map((item, index) => {
        return (
          <li key={`${id}-${index}`}>
            <a
              className={cn(
                "hover:bg-surface text-surface-500 flex w-full items-center rounded-md px-3 py-1 !outline-0 transition-colors",
                item.href === `#${activeItemId}` && "text-purple-600"
              )}
              href={item.href}
            >
              {item.label}
            </a>

            {item?.items?.length ? (
              <Tree activeItemId={activeItemId} className="pl-4" items={item.items} />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

// interface TreeProps {
//   tree: TableOfContents;
//   level?: number;
//   activeItem?: string;
// }

// function Tree({ tree, level = 1, activeItem }: TreeProps) {
//   return tree?.items?.length && level < 3 ? (
//     <ul className={cn("m-0 list-none", { "pl-4": level !== 1 })}>
//       {tree.items.map((item, index) => {
//         return (
//           <li key={index} className={cn("mt-0 pt-2")}>
//             <a
//               className={cn(
//                 "hover:text-foreground inline-block no-underline transition-colors",
//                 item.url === `#${activeItem}`
//                   ? "text-foreground font-medium"
//                   : "text-muted-foreground"
//               )}
//               href={item.url}
//             >
//               {item.title}
//             </a>
//             {item.items?.length ? (
//               <Tree activeItem={activeItem} level={level + 1} tree={item} />
//             ) : null}
//           </li>
//         );
//       })}
//     </ul>
//   ) : null;
// }
