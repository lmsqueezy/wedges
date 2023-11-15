"use client";

import { MenuIcon } from "@iconicicons/react";
import { Button } from "@lmsqueezy/wedges";
import Link from "next/link";

import { focusClasses } from "@/lib/a11y";
import { cn } from "@/lib/utils";

import { GithubIcon } from "./GithubIcon";
import { useSidebar } from "./Providers";
import { Search } from "./Search";

export function WedgesHeader() {
  const { toggle } = useSidebar();

  return (
    <>
      <header
        aria-labelledby="wedges-site-title"
        className="[&_a]:duration-180 sticky top-0 z-50 border-b border-white/20 bg-purple-600 dark:bg-transparent [&_a]:transition-colors"
      >
        <div className="container flex min-h-[60px] items-center justify-between md:min-h-[88px]">
          <Link className={cn(focusClasses, "outline-white")} href="/">
            <h1
              className="font-display text-2xl font-medium tracking-tight text-white"
              id="wedges-site-title"
            >
              <span>Wedges</span>
              <span className="hidden sm:inline"> Documentation</span>
            </h1>
          </Link>

          <div className="flex items-center gap-1 md:gap-1" data-theme="dark">
            <Search />

            {/* Github */}
            <Link
              aria-label="Github"
              className={cn(
                "text-surface-500 inline-flex h-10 w-10 items-center justify-center rounded-lg outline-white hover:bg-white/10 hover:text-white",
                focusClasses
              )}
              href="https://github.com/lmsqueezy"
              target="_blank"
            >
              <GithubIcon />
            </Link>

            {/* Mobile menu */}
            <Button
              isIconOnly
              className="duration-180 group h-10 w-10 items-center justify-center transition-colors hover:text-white md:hidden"
              data-theme="dark"
              variant="transparent"
              onClick={toggle}
            >
              <MenuIcon className="duration-180 text-white transition-colors group-hover:opacity-100" />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
