import * as React from "react";

import { siteConfig } from "@/config/siteConfig";

import { BreadcrumbsItem } from "./BreadcrumbsItem";

export function Breadcrumbs({ path }: { path: string[] }) {
  if (path?.length) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumbs" className="mb-6 flex text-sm text-surface-500">
      <ol className="flex items-center space-x-0.5">
        <li className="truncate">
          <a className="hover:underline" href={siteConfig.wedgesURL}>
            Wedges
          </a>
        </li>

        <BreadcrumbsItem href="/" isLast={false} label="Docs" />

        {path.map((label, index) => (
          <BreadcrumbsItem key={index} isLast={index === path.length - 1} label={label} />
        ))}
      </ol>
    </nav>
  );
}
