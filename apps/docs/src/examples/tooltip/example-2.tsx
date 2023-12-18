import * as React from "react";
import { HelpIcon } from "@iconicicons/react";
import { Button, Tooltip } from "@lmsqueezy/wedges";

export default function Example() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <section className="mx-auto flex items-center justify-center gap-4">
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

      <Tooltip
        align="start"
        animation={true}
        content="A tooltip is a small box that appears when the trigger is clicked."
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

      <Tooltip
        arrow={false}
        color="soft"
        content="The example below demonstrates advanced usage of a controlled Tooltip component and illustrates how to customize the Tooltip Trigger and its initial open state."
        size="md"
        sideOffset={16}
      >
        Hover me!
      </Tooltip>
    </section>
  );
}
