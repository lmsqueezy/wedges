import Image from "next/image";
import Link from "next/link";

import { type WebflowResource } from "@/types/webflow";
import { focusClasses } from "@/lib/a11y";
import { cn } from "@/lib/utils";

export function WebflowResourceItem({
  webflowResource,
  size = "lg",
}: {
  webflowResource?: WebflowResource;
  size?: "sm" | "lg";
}) {
  if (!webflowResource) return null;

  return (
    <ul>
      <li>
        <Link
          href={webflowResource.url}
          className={cn(
            focusClasses,
            size === "lg" &&
              "duration-180 p-4 outline-white transition-colors hover:bg-white focus-visible:bg-white",
            "group flex select-none flex-col rounded-lg leading-6"
          )}
        >
          <div
            className={cn(
              "relative max-h-[192px] w-full rounded-md bg-white/10",
              size === "lg" && "mb-5 aspect-square",
              size === "sm" && "mb-3 aspect-video"
            )}
          >
            <Image
              className="rounded-md"
              src={webflowResource.image}
              alt={webflowResource.title}
              layout="fill"
              placeholder="empty"
              objectFit="cover"
            />
          </div>

          <span
            className={cn(
              "flex items-center",
              size === "lg" &&
                "duration-180 text-base text-white transition-colors group-hover:text-gray-900 group-focus-visible:text-gray-900",
              size === "sm" && "text-surface-500"
            )}
          >
            {webflowResource.title}
          </span>
        </Link>
      </li>
    </ul>
  );
}
