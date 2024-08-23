import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectPortal,
  SelectSeparator,
  SelectTrigger,
} from "@lemonsqueezy/wedges";

export default function Example() {
  const wrapper = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={wrapper} className="inline-flex max-w-[192px] flex-col gap-10">
      <Select
        required
        label="Food"
        defaultValue="potato"
        tooltip="Tooltip example"
        helperText="Helper text"
      >
        <SelectTrigger className="min-w-[192px] data-[state=open]:border-transparent data-[state=open]:outline-none" />

        <SelectPortal container={wrapper.current}>
          <SelectContent className="max-h-[100px]" position="item-aligned">
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectGroup>

            <SelectSeparator />

            <SelectGroup>
              <SelectLabel>Veggies</SelectLabel>
              <SelectItem value="carrot">Carrot</SelectItem>
              <SelectItem value="potato">Potato</SelectItem>
              <SelectItem value="tomato">Tomato</SelectItem>
            </SelectGroup>

            <SelectSeparator />

            <SelectGroup>
              <SelectLabel>Meat</SelectLabel>
              <SelectItem value="beef">Beef</SelectItem>
              <SelectItem value="chicken">Chicken</SelectItem>
              <SelectItem value="pork">Pork</SelectItem>
            </SelectGroup>
          </SelectContent>
        </SelectPortal>
      </Select>
    </div>
  );
}
