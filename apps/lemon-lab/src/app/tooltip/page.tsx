"use client";

import * as React from "react";
import { HelpIcon } from "@iconicicons/react";
import { Button, Tooltip } from "@lmsqueezy/wedges";

import PageTitle from "@/components/PageTitle";

export default function TooltipPage() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <main>
      <PageTitle>Tooltip</PageTitle>

      <section className="mx-auto flex max-w-lg flex-col items-center gap-10">
        <div className="flex items-center gap-10">
          <Tooltip
            align="start"
            animation={true}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
            delayDuration={0}
            side="top"
          />

          <Tooltip
            align="center"
            animation={true}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
            delayDuration={0}
            side="top"
          />

          <Tooltip
            align="end"
            animation={true}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
            delayDuration={0}
            side="top"
          />
        </div>

        <div className="flex items-center gap-10">
          <Tooltip
            align="start"
            animation={true}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
            delayDuration={0}
            side="bottom"
          />

          <Tooltip
            align="center"
            animation={true}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
            delayDuration={0}
            side="bottom"
          />

          <Tooltip
            align="end"
            animation={true}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
            delayDuration={0}
            side="bottom"
          />
        </div>

        <div className="flex items-center gap-10">
          <Tooltip
            align="start"
            animation={true}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information. A tooltip is a small box that appears when hovering over a UI element, providing additional information. A tooltip is a small box that appears when hovering over a UI element, providing additional information."
            delayDuration={0}
            side="left"
          />

          <Tooltip
            align="center"
            animation={true}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
            delayDuration={0}
            side="left"
          />

          <Tooltip
            align="end"
            animation={true}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
            delayDuration={0}
            side="left"
          />
        </div>

        <div className="flex items-center gap-10">
          <Tooltip
            align="start"
            animation={true}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
            delayDuration={0}
            side="right"
          />

          <Tooltip
            align="center"
            animation={true}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
            delayDuration={0}
            side="right"
          />

          <Tooltip
            align="end"
            animation={true}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
            delayDuration={0}
            side="right"
          />
        </div>
      </section>

      <section className="mt-20">
        <h2>Controlled</h2>

        <Tooltip
          align="end"
          animation={true}
          content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          delayDuration={0}
          open={open}
          side="right"
          onClick={() => setOpen((prev) => !prev)}
          onPointerDownOutside={(e) => {
            e.preventDefault();
            const targetElement = e.target as HTMLElement;

            if (!targetElement.closest("svg") && !(e.target instanceof SVGElement) && open) {
              setOpen(false);
            }
          }}
        />
      </section>

      <section className="mt-20">
        <Tooltip
          align="start"
          color="secondary"
          content="Hello world"
          delayDuration={0}
          open={true}
          sideOffset={4}
          size="sm"
        >
          <Button after={<HelpIcon />} size="md" variant="outline" />
        </Tooltip>
      </section>
    </main>
  );
}
