import * as React from "react";
import { SpinnerIcon } from "@iconicicons/react";
import { ProgressBar } from "@lemonsqueezy/wedges";

export default function Example() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => (value + 1) % 101);
    }, 150);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="inline-block w-full max-w-[400px]">
      <ProgressBar
        afterIndicator={<SpinnerIcon className="animate-spin" />}
        helperText="Helper text"
        indicator={value + "%"}
        label="Label"
        tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        value={value}
        max={100}
      />
    </div>
  );
}
