"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "@iconicicons/react";

export function BreadcrumbsItem({
  label,
  isLast,
  href,
}: {
  label: string;
  isLast: boolean;
  href?: string;
}) {
  const pathname = usePathname();

  if (!label) {
    return null;
  }

  let wrappedLabel = <span>{label}</span>;

  if (!isLast && href && href !== pathname) {
    wrappedLabel = (
      <Link className="hover:underline" href={href}>
        {wrappedLabel}
      </Link>
    );
  }

  return (
    <li
      aria-current={isLast ? "page" : undefined}
      className="flex items-center space-x-0.5 last-of-type:font-medium last-of-type:text-surface-900"
    >
      <ChevronRightIcon aria-hidden={true} className="h-5 w-5 text-surface-500" />
      {wrappedLabel}
    </li>
  );
}
