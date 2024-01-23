import { SpinnerIcon } from "@iconicicons/react";
import { ProgressBar } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="inline-block w-full max-w-[400px]">
      <ProgressBar
        afterIndicator={<SpinnerIcon className="animate-spin" />}
        helperText="Helper text"
        indicator="50%"
        label="Label"
        tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        value={50}
        max={100}
      />
    </div>
  );
}
