import { HomeIcon } from "@iconicicons/react";
import { Button } from "@lmsqueezy/wedges";
import Link from "next/link";

import { Logomark } from "@/components/Logo";
import { SearchButton } from "@/components/Search";

export default function NotFound() {
  return (
    <div className="pb-24">
      <Logomark className="mt-[7px]" />

      <h2 className="font-display text-wg-gray-900 mb-6 mt-10 text-4xl tracking-tight [text-wrap:balance]">
        Sorry, page not found
      </h2>

      <p className="text-surface-600 max-w-[400px] text-base lg:text-lg">
        The content you are looking for either does not exist or has been moved.
      </p>

      <div className="mt-8 flex items-center gap-3 md:mb-[10vh]">
        <Button
          asChild
          before={<HomeIcon aria-hidden />}
          className="px-5"
          shape="pill"
          variant="outline"
        >
          <Link href="/">
            <span className="mx-1">Return Home</span>
          </Link>
        </Button>

        <SearchButton />
      </div>
    </div>
  );
}
