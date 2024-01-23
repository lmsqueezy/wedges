import { SpinnerIcon } from "@iconicicons/react";
import { ProgressBar } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="inline-flex w-full max-w-[400px] flex-col gap-y-12">
      <ProgressBar
        afterIndicator={<SpinnerIcon className="animate-spin" />}
        helperText="Helper text"
        indicator="50%"
        label="Label"
        tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        value={50}
      />

      <ProgressBar helperText="Helper text" value={50} />

      <ProgressBar
        afterIndicator={<SpinnerIcon className="animate-spin" />}
        variant="inline"
        indicator="50%"
        label="Label"
        tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        value={50}
      />
    </div>
  );
}
