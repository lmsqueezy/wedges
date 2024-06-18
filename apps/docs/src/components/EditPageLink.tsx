"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronUpIcon } from "@iconicicons/react";
import { Button } from "@lemonsqueezy/wedges";

import { GithubIcon } from "./Icons";

const DATA_FOLDER_PATH = "https://github.com/lmsqueezy/wedges/edit/main/apps/docs/public/docs";

export function EditPageLink() {
  const pathname = usePathname();
  let routerSlug = "";

  if (pathname === "/") {
    routerSlug = "/index";
  } else if (pathname) {
    routerSlug = pathname;
  }

  const editURL = `${DATA_FOLDER_PATH}${routerSlug}.mdx`;

  return (
    <div className="mt-8 flex items-center justify-between gap-3 border-t border-surface-100 pt-3.5">
      <Button
        asChild
        before={<GithubIcon className="mr-0.5 size-5 shrink-0 opacity-100" />}
        className="font-normal text-surface-400 no-underline hover:text-surface-900 hover:underline"
        variant="link"
      >
        <Link href={editURL} rel="noopener noreferrer" target="_blank">
          <span>Edit this page</span>
        </Link>
      </Button>

      <Button
        before={<ChevronUpIcon className="size-5 shrink-0 opacity-100" />}
        className="font-normal text-surface-400 no-underline hover:text-surface-900 hover:underline"
        variant="link"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top
      </Button>
    </div>
  );
}
