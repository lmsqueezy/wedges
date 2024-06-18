"use client";

import { type TOCItem } from "@/types/mdx";
import { extractFlatIds, extractTOC } from "@/lib/mdx/toc";
import { cn } from "@/lib/utils";
import { useActiveItem } from "@/hooks/useActiveMenu";

export function TableOfContents({ source }: { source: string }) {
  const toc = extractTOC(source);
  const ids = extractFlatIds(toc);
  const activeItemId = useActiveItem(ids);

  if (toc.length === 0) return null;

  return (
    <div className="leadning-6 sticky top-[152px] hidden space-y-4 self-start text-sm xl:block">
      <h2 className="not-prose text-sm font-medium text-surface-900">On this page</h2>
      <Items activeItemId={activeItemId} items={toc} />
    </div>
  );
}

type TreeProps = {
  activeItemId?: string | null;
  className?: string;
  sub?: boolean;
  items: TOCItem[];
};

function Items({ items, activeItemId, className, sub }: TreeProps) {
  if (!items) {
    return null;
  }

  return (
    <ul
      className={cn("not-prose m-0 list-none space-y-3 text-surface-500", sub && "mt-2", className)}
    >
      {items.map((item) => {
        const isActive = item.url === `#${activeItemId}`;

        return (
          <li key={item.url.substring(1)}>
            <a
              className={cn(
                "flex max-w-fit items-center border-l border-transparent outline-primary transition-colors",
                !isActive && "hover:text-surface-900",
                isActive && "font-medium text-primary",
                sub && "ml-2"
              )}
              href={item.url}
            >
              {sub ? "→ " : null}
              {item.title}
            </a>

            {item?.children?.length ? (
              <Items activeItemId={activeItemId} items={item.children} sub={true} />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
