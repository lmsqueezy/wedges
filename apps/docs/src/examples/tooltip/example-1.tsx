import { Tooltip } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <section className="mx-auto flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
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

      <div className="flex items-center gap-4">
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

      <div className="flex items-center gap-4">
        <Tooltip
          align="start"
          animation={true}
          content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
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

      <div className="flex items-center gap-4">
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
  );
}
