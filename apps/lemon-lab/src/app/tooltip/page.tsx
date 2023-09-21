"use client";
import PageTitle from "@/components/PageTitle";
import { HelpCircleIcon, InformationIcon } from "@iconicicons/react";

import { Avatar, Badge, Tooltip } from "@lmsqueezy/wedges";
import * as React from "react";

export default function TooltipPage() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <main>
      <PageTitle>Tooltip</PageTitle>

      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Tooltip
            side="top"
            align="start"
            animation={true}
            delayDuration={0}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          />

          <Tooltip
            side="top"
            align="center"
            animation={true}
            delayDuration={0}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          />

          <Tooltip
            side="top"
            align="end"
            animation={true}
            delayDuration={0}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          />
        </div>

        <div className="flex items-center gap-4">
          <Tooltip
            side="bottom"
            align="start"
            animation={true}
            delayDuration={0}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          />

          <Tooltip
            side="bottom"
            align="center"
            animation={true}
            delayDuration={0}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          />

          <Tooltip
            side="bottom"
            align="end"
            animation={true}
            delayDuration={0}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          />
        </div>

        <div className="flex items-center gap-4">
          <Tooltip
            side="left"
            align="start"
            animation={true}
            delayDuration={0}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          />

          <Tooltip
            side="left"
            align="center"
            animation={true}
            delayDuration={0}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          />

          <Tooltip
            side="left"
            align="end"
            animation={true}
            delayDuration={0}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          />
        </div>

        <div className="flex items-center gap-4">
          <Tooltip
            side="right"
            align="start"
            animation={true}
            delayDuration={0}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          />

          <Tooltip
            side="right"
            align="center"
            animation={true}
            delayDuration={0}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          />

          <Tooltip
            side="right"
            align="end"
            animation={true}
            delayDuration={0}
            content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          />
        </div>
      </section>

      <section className="mt-20">
        <h2>Controlled</h2>

        <Tooltip
          side="right"
          align="end"
          animation={true}
          delayDuration={0}
          content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          open={open}
          onClick={() => setOpen((prev) => !prev)}
          onPointerDownOutside={(e) => {
            e.preventDefault();
            open && setOpen(false);
          }}
        />
      </section>

      <section className="mt-20">
        <Tooltip delayDuration={0} open={true} color="destructive" content="Hello world">
          <Badge>Custom Trigger</Badge>
        </Tooltip>
      </section>
    </main>
  );
}

const TooltipTrig = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  (props, ref) => {
    const { ...otherProps } = props;

    return (
      <span
        className="focus-visible:outline-primary text-surface-2-borders hover:text-primary flex items-center justify-center rounded-full focus-visible:outline-2"
        ref={ref}
        tabIndex={0}
        {...otherProps}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9ZM12 12C12.5523 12 13 12.4477 13 13V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V13C11 12.4477 11.4477 12 12 12Z"
          />
        </svg>
      </span>
    );
  }
);

TooltipTrig.displayName = "TooltipTrig";
