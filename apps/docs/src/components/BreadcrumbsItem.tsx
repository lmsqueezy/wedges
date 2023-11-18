"use client";

import { ChevronRightIcon } from "@iconicicons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  if (href && pathname !== href) {
    wrappedLabel = (
      <Link className="hover:underline" href={href}>
        {wrappedLabel}
      </Link>
    );
  }

  return (
    <li
      aria-current={isLast ? "page" : undefined}
      className="last-of-type:text-surface-900 flex items-center space-x-0.5 last-of-type:font-medium"
    >
      <ChevronRightIcon aria-hidden={true} className="text-surface-500 h-5 w-5" />
      {wrappedLabel}
    </li>
  );
}
