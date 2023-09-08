"use client";
import { Badge } from "@lmsqueezy/wedges";

import PageTitle from "@/components/PageTitle";

export default function BadgePage() {
  return (
    <main>
      <PageTitle>Badge</PageTitle>

      <div className="wg-bg-wg-accent m-20 h-40 w-40 rounded"></div>

      <section className="flex gap-4">
        <Badge variant="rounded" avatar="https://github.com/brankoconjic.png" stroke={false}>
          @brankoconjic
        </Badge>

        <Badge variant="pill" color="red" stroke={true}>
          @brankoconjic
        </Badge>

        <Badge variant="pill" color="accent" stroke={true}>
          @brankoconjic
        </Badge>
      </section>
    </main>
  );
}
