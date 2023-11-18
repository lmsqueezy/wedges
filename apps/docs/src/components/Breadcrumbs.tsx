import { BreadcrumbsItem } from "./BreadcrumbsItem";

import { siteConfig } from "@/config/siteConfig";

export function Breadcrumbs({ path }: { path: string[] }) {
  if (!path || !path.length) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumbs" className="text-surface-500 mb-6 flex text-sm">
      <ol className="flex items-center space-x-0.5">
        <li className="overflow-hidden text-ellipsis whitespace-nowrap">
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
