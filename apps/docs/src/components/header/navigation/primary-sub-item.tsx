import Link from "next/link";

import { type NavBadge, type NavItem } from "@/types/nav";
import { type WebflowData } from "@/types/webflow";
import { focusClasses } from "@/lib/a11y";
import { cn } from "@/lib/utils";

import { Navigation } from "./navigation";
import { WebflowResourceItem } from "./webflow-resource-item";

export function PrimarySubItem({
  item,
  webflowData,
}: {
  item: NavItem;
  webflowData?: WebflowData;
}) {
  return (
    <li className="grid auto-rows-max grid-cols-1 border-r border-white/20 px-6 py-8 last-of-type:border-none">
      <SubLabel label={item.label} buttonLabel={item.buttonLabel} buttonHref={item.buttonHref} />

      {item.isBlog && webflowData ? (
        <WebflowResourceItem webflowResource={webflowData.blog} />
      ) : null}

      {item.isCaseStudy && webflowData ? (
        <WebflowResourceItem webflowResource={webflowData.caseStudy} />
      ) : null}

      {!item.isBlog && !item.isCaseStudy ? (
        <ul>
          {item.children?.map((subChild, subIndex) => (
            <SubLink key={`primary-sub-item-${subIndex.toString()}`} item={subChild} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

/* -------------------------------- SubLink -------------------------------- */
function SubLink({ item }: { item: NavItem }) {
  return (
    <li
      className={cn(
        item.separator &&
          "before:my-8 before:-ml-6 before:block before:h-px before:bg-white/20 before:content-['']"
      )}
    >
      <Navigation.Link
        className={cn(
          focusClasses,
          "duration-180 group flex select-none flex-col justify-center rounded-lg px-4 py-3 outline-white transition-colors hover:bg-white focus-visible:bg-white"
        )}
        href={item.href}
      >
        <span className="duration-180 flex items-center text-base leading-[1.6] text-white transition-colors group-hover:text-gray-900 group-focus-visible:text-gray-900">
          <span>{item.label}</span>
          {item.tag ? <Badge type={item.tag} /> : null}
          <span className="duration-180 text-gray-900 opacity-0 transition-all group-hover:translate-x-1.5 group-hover:opacity-100">
            →
          </span>
        </span>

        {item.description ? (
          <span className="duration-180 text-sm leading-[1.7] text-white/60 transition-colors group-hover:text-gray-500 group-focus-visible:text-gray-500">
            {item.description}
          </span>
        ) : null}
      </Navigation.Link>
    </li>
  );
}

/* ---------------------------------- Badge --------------------------------- */
function Badge({ type }: { type: NavBadge }) {
  return (
    <span
      className={cn(
        "ml-2 rounded-full px-3 text-sm leading-6",
        type === "new" && "bg-wg-orange-200 text-[#8a6100]",
        type === "updates" && "bg-wg-purple-500 text-white"
      )}
    >
      {type}
    </span>
  );
}

/* -------------------------------- SubLabel -------------------------------- */
function SubLabel({
  label,
  buttonLabel,
  buttonHref,
}: {
  label?: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  if (!label) return null;

  return (
    <div className="mb-4 flex shrink-0 flex-wrap items-center justify-between gap-3 px-4 text-sm">
      {label ? (
        <span className="font-medium uppercase tracking-[2px] text-wg-yellow-500">{label}</span>
      ) : null}

      {buttonLabel && buttonHref ? (
        <Link
          className={cn(
            focusClasses,
            "duration-180 group flex items-center gap-1.5 outline-white transition-colors hover:text-white focus-visible:outline-offset-2"
          )}
          href={buttonHref}
        >
          <span>{buttonLabel} →</span>
        </Link>
      ) : null}
    </div>
  );
}
