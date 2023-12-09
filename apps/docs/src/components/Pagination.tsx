import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@iconicicons/react";
import { Button } from "@lmsqueezy/wedges";
import { type Doc } from "contentlayer/generated";

import { type NavItem } from "@/types/nav";
import { sidebarConfig } from "@/config/sidebarConfig";

export function Pagination({ doc }: { doc: Doc }) {
  const pagination = getPagination(doc);

  return (
    <div className="mt-16 flex items-center justify-between gap-4">
      {pagination.prev ? (
        <Button asChild before={<ChevronLeftIcon />} className="pr-3" size="sm" variant="outline">
          <Link href={pagination.prev.href ?? "/"}>{pagination.prev.label}</Link>
        </Button>
      ) : (
        <span />
      )}

      {pagination.next ? (
        <Button asChild after={<ChevronRightIcon />} className="pl-3" size="sm" variant="outline">
          <Link href={pagination.next.href ?? "/"}>{pagination.next.label}</Link>
        </Button>
      ) : (
        <span />
      )}
    </div>
  );
}

function getPagination(doc: Doc) {
  const flattenedLinks = flatten(sidebarConfig.nav);
  const activeIndex = flattenedLinks.findIndex((link) => doc.slug === link?.href);

  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next = activeIndex !== flattenedLinks.length - 1 ? flattenedLinks[activeIndex + 1] : null;

  return {
    prev,
    next,
  };
}

export function flatten(links: NavItem[]): NavItem[] {
  return links
    .reduce<NavItem[]>((flat, link) => {
      return flat.concat(link.items?.length ? flatten(link.items) : link);
    }, [])
    .filter((link) => !link?.disabled);
}
