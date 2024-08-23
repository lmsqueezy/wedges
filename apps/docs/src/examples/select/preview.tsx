import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  SelectValue,
} from "@lemonsqueezy/wedges";

export default function Example() {
  const wrapper = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={wrapper} className="inline-flex max-w-[192px] flex-col gap-10">
      <Select label="Project status" tooltip="Tooltip example" required>
        <SelectTrigger className="min-w-[192px]">
          <SelectValue placeholder="Select status" />
          <SelectIcon />
        </SelectTrigger>

        <SelectPortal container={wrapper.current}>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="overdue">Overdue</SelectItem>
              <SelectItem value="due-this-week">Due this week</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
            </SelectGroup>
          </SelectContent>
        </SelectPortal>
      </Select>
    </div>
  );
}
