"use client";

import { useState } from "react";
import { Slider } from "@lemonsqueezy/wedges";

export default function Example() {
  const [value, setValue] = useState([2500, 5000]);

  return (
    <Slider
      after="$10,000"
      before="$1,000"
      defaultValue={[2500, 5000]}
      label="Price Range"
      max={10000}
      min={1000}
      showTooltip="hover"
      onValueChange={(val) => setValue(val)}
      helperText={
        "Selected range: $" +
        value[0]?.toLocaleString("en-us") +
        " - $" +
        value[1]?.toLocaleString("en-us")
      }
      renderTooltip={(val) => {
        if (val) {
          return "$" + val.toLocaleString("en-US");
        }

        return "";
      }}
      step={100}
    />
  );
}
