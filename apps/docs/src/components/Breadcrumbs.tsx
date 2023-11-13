import { ChevronRightIcon } from "@iconicicons/react";

export function Breadcrumbs({ path }: { path: string[] }) {
  if (!path || !path.length) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumbs" className="text-surface-500 mb-6 flex text-sm">
      <ol className="flex items-center space-x-0.5">
        <li className="overflow-hidden text-ellipsis whitespace-nowrap">Documentation</li>

        {path.map((label, index) => (
          <BreadcrumbsItem key={index} isLast={index === path.length - 1} label={label} />
        ))}
      </ol>
    </nav>
  );
}

function BreadcrumbsItem({ label, isLast }: { label: string; isLast: boolean }) {
  if (!label) {
    return null;
  }

  return (
    <li
      aria-current={isLast ? "page" : undefined}
      className="last-of-type:text-surface-900 flex items-center space-x-0.5 last-of-type:font-medium"
    >
      <ChevronRightIcon aria-hidden={true} className="text-surface-500 h-5 w-5" />
      <span>{label}</span>
    </li>
  );
}
