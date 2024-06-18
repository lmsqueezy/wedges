import Link from "next/link";
import { HomeIcon } from "@iconicicons/react";
import { Button } from "@lemonsqueezy/wedges";

import { LemonSqueezyLogomark } from "@/components/icons/lemonsqueezy";
import { SearchButton } from "@/components/Search";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-fit flex-col">
      <LemonSqueezyLogomark className="mt-[7px]" />

      <h2 className="font-display mb-6 mt-16 text-4xl tracking-tight text-wg-gray-900 [text-wrap:balance]">
        Sorry, page not found
      </h2>

      <p className="max-w-[400px] text-base text-gray-500 lg:text-lg">
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
            <span className="mx-1">Go back</span>
          </Link>
        </Button>

        <SearchButton />
      </div>
    </div>
  );
}
