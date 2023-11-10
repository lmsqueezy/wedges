import { HomeIcon, SearchIcon } from "@iconicicons/react";
import { Button } from "@lmsqueezy/wedges";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex grow flex-col items-center justify-center gap-6 py-16">
      <h2 className="font-display text-wg-gray-900 text-center text-4xl tracking-tight [text-wrap:balance]">
        Sorry, page not found
      </h2>

      <p className="text-center [text-wrap:balance]">
        The content you are looking for does not exist or it has been moved.
      </p>

      <div className="mt-2 flex items-center gap-3 md:mb-[10vh]">
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

        <Button
          before={<SearchIcon aria-hidden="true" />}
          className="px-4"
          shape="pill"
          variant="transparent"
        >
          Search
        </Button>
      </div>
    </div>
  );
}
