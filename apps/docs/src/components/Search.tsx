/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// @ts-nocheck
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { DocSearchModal, useDocSearchKeyboardEvents } from "@docsearch/react";
import { SearchIcon } from "@iconicicons/react";
import { Button, Kbd } from "@lemonsqueezy/wedges";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";

import { useSidebar } from "./Providers";

const docSearchConfig = {
  appId: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,
  apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,
  indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME,
};

function Hit({ hit, children }) {
  return (
    <Link
      className={cn({
        "DocSearch-Hit--Result": hit.__is_result?.(),
        "DocSearch-Hit--Parent": hit.__is_parent?.(),
        "DocSearch-Hit--FirstChild": hit.__is_first?.(),
        "DocSearch-Hit--LastChild": hit.__is_last?.(),
        "DocSearch-Hit--Child": hit.__is_child?.(),
      })}
      href={hit.url}
    >
      {children}
    </Link>
  );
}

export function Search({ className, ...otherProps }: { className?: string; otherProps?: any }) {
  const { isSearchOpen, toggleSearch } = useSidebar();
  const [modifierKey, setModifierKey] = useState("command");

  const suffixTitle = (title) => {
    if (!title) {
      return title;
    }

    const section = "Wedges Docs";

    return `${title} - ${section}`;
  };

  useDocSearchKeyboardEvents({ isOpen: isSearchOpen, onOpen: toggleSearch, onClose: toggleSearch });

  useEffect(() => {
    setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "command" : "ctrl");
  }, []);

  return (
    <>
      <Button
        asChild
        className={cn(
          "duration-180 group mb-6 mt-2 flex w-full justify-between border-surface-100 !bg-transparent px-12px py-8px shadow-wg-xs outline-primary hover:border-surface-200",
          className
        )}
        variant="outline"
        onClick={toggleSearch}
        {...otherProps}
      >
        <button>
          <span className="duration-180 flex items-center gap-1.5 text-surface-400 transition-colors group-hover:text-surface-500">
            <SearchIcon aria-label="Quick search" className="h-5 w-5" />
            <span className="hidden md:block">Quick search&hellip;</span>
          </span>

          <Kbd
            className="ml-2 hidden border-none text-surface-500 md:inline-flex"
            keys={[modifierKey]}
          >
            K
          </Kbd>
        </button>
      </Button>

      {isSearchOpen &&
        createPortal(
          <DocSearchModal
            {...docSearchConfig}
            hitComponent={Hit}
            initialScrollY={window.scrollY}
            navigator={{
              navigate({ itemUrl }) {
                Router.push(itemUrl);
              },
            }}
            transformItems={(items) => {
              return items.map((item, index) => {
                // We transform the absolute URL into a relative URL to
                // leverage Next's preloading.
                const a = document.createElement("a");

                a.href = item.url;

                const hash = a.hash === "#content-wrapper" || a.hash === "#header" ? "" : a.hash;

                if (item.hierarchy?.lvl0) {
                  item.hierarchy.lvl0 = item.hierarchy.lvl0.replace(/&amp;/g, "&");
                  item.hierarchy.lvl0 = item.hierarchy.lvl0.replace("Documentation ", "");
                }

                if (item._highlightResult?.hierarchy?.lvl0?.value) {
                  item._highlightResult.hierarchy.lvl0.value =
                    item._highlightResult.hierarchy.lvl0.value.replace(/&amp;/g, "&");

                  item._highlightResult.hierarchy.lvl0.value =
                    item._highlightResult.hierarchy.lvl0.value.replace("Documentation ", "");
                }

                if (item.content) {
                  item.content = suffixTitle(item.content, item);
                }

                if (item._snippetResult?.content?.value) {
                  item._snippetResult.content.value = suffixTitle(
                    item._snippetResult.content.value,
                    item
                  );
                }
                if (item._highlightResult?.content?.value) {
                  item._highlightResult.content.value = suffixTitle(
                    item._highlightResult.content.value,
                    item
                  );
                }
                if (
                  item._snippetResult?.hierarchy?.[item.type]?.value &&
                  item._snippetResult?.hierarchy?.[item.type]?.value !== null
                ) {
                  item._snippetResult.hierarchy[item.type].value = suffixTitle(
                    item._snippetResult?.hierarchy?.lvl2?.value,
                    item
                  );
                }
                if (item._highlightResult?.hierarchy_camel[0]?.[item.type]?.value) {
                  item._highlightResult.hierarchy_camel[0][item.type].value = suffixTitle(
                    item._highlightResult.hierarchy_camel[0][item.type].value,
                    item
                  );
                }

                item.hierarchy[item.type] = suffixTitle(item.hierarchy[item.type], item);

                return {
                  ...item,
                  url: `${a.pathname}${hash}`,
                  __is_result: () => true,
                  __is_parent: () => item.type === "lvl1" && items.length > 1 && index === 0,
                  __is_child: () =>
                    item.type !== "lvl1" &&
                    items.length > 1 &&
                    items[0].type === "lvl1" &&
                    index !== 0,
                  __is_first: () => index === 1,
                  __is_last: () => index === items.length - 1 && index !== 0,
                };
              });
            }}
            onClose={toggleSearch}
          />,
          document.body
        )}
    </>
  );
}

export function SearchButton() {
  const { toggleSearch } = useSidebar();

  return (
    <Button
      before={<SearchIcon aria-hidden="true" />}
      className="px-4"
      shape="pill"
      variant="transparent"
      onClick={toggleSearch}
    >
      Search
    </Button>
  );
}
