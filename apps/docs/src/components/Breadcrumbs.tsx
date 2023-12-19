"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/siteConfig";

import { BreadcrumbsItem } from "./BreadcrumbsItem";

export function Breadcrumbs({ path }: { path: string[] }) {
  const pathname = usePathname();
  const pathnamePath = pathname.split("/").filter(Boolean).slice(0, -1);

  if (!path?.length && !pathnamePath?.length) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumbs" className="mb-6 flex text-sm leading-6 text-gray-500">
      <ol className="flex items-center space-x-0.5">
        <li className="truncate">
          <a className="hover:text-primary hover:underline" href={siteConfig.wedgesURL}>
            Wedges
          </a>
        </li>

        <BreadcrumbsItem href="/" isLast={false} label="Docs" />

        {path.length
          ? path.map((label, index) => (
              <BreadcrumbsItem key={index} isLast={index === path.length - 1} label={label} />
            ))
          : pathnamePath.map((label, index) => (
              <BreadcrumbsItem
                key={index}
                isLast={index === pathnamePath.length - 1}
                label={label.charAt(0).toUpperCase() + label.slice(1)}
              />
            ))}
      </ol>
    </nav>
  );
}
