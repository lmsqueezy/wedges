import * as React from "react";
import { Tooltip } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-4">
        <Tooltip content="A tooltip is a compact, informational box that becomes visible upon hovering the trigger element." />

        <Tooltip
          color="secondary"
          content="A tooltip is a compact, informational box that becomes visible upon hovering the trigger element."
        />

        <Tooltip
          color="soft"
          content="A tooltip is a compact, informational box that becomes visible upon hovering the trigger element."
          arrow={false}
          sideOffset={10}
        />
      </div>

      <div className="flex items-center gap-4">
        <Tooltip
          content="A tooltip is a compact, informational box that becomes visible upon hovering the trigger element. It typically contains brief, helpful text or instructions relevant to the trigger's context."
          size="md"
        />

        <Tooltip
          color="secondary"
          content="A tooltip is a compact, informational box that becomes visible upon hovering the trigger element. It typically contains brief, helpful text or instructions relevant to the trigger's context."
          size="md"
        />

        <Tooltip
          color="soft"
          content="A tooltip is a compact, informational box that becomes visible upon hovering the trigger element. It typically contains brief, helpful text or instructions relevant to the trigger's context."
          arrow={false}
          sideOffset={10}
          size="md"
        />
      </div>
    </div>
  );
}
