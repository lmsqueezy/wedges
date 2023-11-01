"use client";

import { Popover } from "@lmsqueezy/wedges";

import PageTitle from "@/components/PageTitle";

export default function PopoverPage() {
  return (
    <main>
      <PageTitle>Popover</PageTitle>

      <div className="flex gap-72">
        <div>
          <Popover>
            <Popover.Trigger>Open</Popover.Trigger>
            <Popover.Content>Place content for the popover here.</Popover.Content>
          </Popover>
        </div>
      </div>
    </main>
  );
}
