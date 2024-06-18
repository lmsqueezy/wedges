import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@iconicicons/react";
import { Button } from "@lemonsqueezy/wedges";

import { sidebarConfig, type DocsConfig } from "@/config/sidebarConfig";

export function Pagination({ pageHref }: { pageHref: string }) {
  const pagination = getPagination(pageHref);

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

function getPagination(pageHref: string) {
  const flattenedLinks = flatten(sidebarConfig.nav);

  const activeIndex = flattenedLinks.findIndex((link) => pageHref === link?.href);
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next = activeIndex !== flattenedLinks.length - 1 ? flattenedLinks[activeIndex + 1] : null;

  return {
    prev,
    next,
  };
}

export function flatten(links: DocsConfig["nav"]): DocsConfig["nav"] {
  return links
    .reduce<DocsConfig["nav"]>((flat, link) => {
      return flat.concat(link.children?.length ? flatten(link.children) : link);
    }, [])
    .filter((link) => !link?.disabled);
}
