import * as React from "react";
import { ProgressCircle } from "@lemonsqueezy/wedges";

export default function Example() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => (value + 1) % 101);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block">
      <ProgressCircle color={value < 33 ? "red" : value < 66 ? "orange" : "green"} value={value} />
    </div>
  );
}
