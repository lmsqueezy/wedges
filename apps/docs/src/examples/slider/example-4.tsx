"use client";

import { useState } from "react";
import { MinusIcon, PlusIcon } from "@iconicicons/react";
import { Button, Slider } from "@lemonsqueezy/wedges";

export default function Example() {
  const [value, setValue] = useState<number[]>([24]);

  const decrementValue = () => {
    setValue((currentValue) => {
      if (currentValue && currentValue.length > 0) {
        return [Math.max(currentValue[0]! - 2, 12)];
      }
      return currentValue;
    });
  };

  const incrementValue = () => {
    setValue((currentValue) => {
      if (currentValue && currentValue.length > 0) {
        return [Math.min(currentValue[0]! + 2, 48)];
      }
      return currentValue;
    });
  };

  const renderHelperText = () => {
    if (value && Array.isArray(value) && value.length > 0) {
      const firstValue = value[0]!;
      return firstValue < 24 ? "Small" : firstValue > 32 ? "Large" : "Medium";
    }

    return "";
  };

  return (
    <Slider
      after={
        <Button size="sm" onClick={incrementValue} isIconOnly variant="transparent">
          <PlusIcon />
        </Button>
      }
      before={
        <Button size="sm" onClick={decrementValue} isIconOnly variant="transparent">
          <MinusIcon />
        </Button>
      }
      onValueChange={(val) => {
        setValue(val);
      }}
      defaultValue={value}
      helperText={renderHelperText()}
      label="Font Size"
      max={48}
      min={12}
      renderTooltip={() => value.toString() + "px"}
      showTooltip="hover"
      step={2}
      value={value}
    />
  );
}
