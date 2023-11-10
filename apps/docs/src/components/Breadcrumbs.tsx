import { ChevronRightIcon } from "@iconicicons/react";

export function Breadcrumbs({ title }: { title: string }) {
  if (!title) {
    return null;
  }

  return (
    <div className="text-surface-500 mb-4 flex items-center space-x-0.5 text-sm">
      <div className="overflow-hidden text-ellipsis whitespace-nowrap">Wedges Docs</div>
      <ChevronRightIcon className="h-5 w-5" />
      <div className="text-surface-700 font-medium">{title}</div>
    </div>
  );
}
