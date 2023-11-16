"use client";

import { Button } from "@lmsqueezy/wedges";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { GithubIcon } from "./Icons";

const DATA_FOLDER_PATH = "https://github.com/lmsqueezy/wedges/edit/main/apps/docs/src/content";

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
    <>
      <hr className="mt-10 w-16 pt-4" />
      <Button
        asChild
        before={<GithubIcon className="h-5 w-5 opacity-100" />}
        className="text-surface-400 hover:text-surface-900 font-normal no-underline hover:underline"
        variant="link"
      >
        <Link href={editURL} rel="noopener noreferrer" target="_blank">
          <span>Edit this page</span>
        </Link>
      </Button>
    </>
  );
}
