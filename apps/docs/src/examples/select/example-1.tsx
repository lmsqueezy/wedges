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

  const DotIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  );

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
              <SelectItem value="pending">
                <div className="flex items-center gap-1">
                  <DotIcon className="-ms-1 size-6 text-wg-red" />
                  <span>Pending</span>
                </div>
              </SelectItem>

              <SelectItem value="in-progress">
                <div className="flex items-center gap-1">
                  <DotIcon className="-ms-1 size-6 text-wg-yellow" />
                  <span>In Progress</span>
                </div>
              </SelectItem>

              <SelectItem value="in-review">
                <div className="flex items-center gap-1">
                  <DotIcon className="-ms-1 size-6 text-wg-blue" />
                  <span>In Review</span>
                </div>
              </SelectItem>

              <SelectItem value="complete">
                <div className="flex items-center gap-1">
                  <DotIcon className="-ms-1 size-6 text-wg-green" />
                  <span>Complete</span>
                </div>
              </SelectItem>

              <SelectItem value="archived">
                <div className="flex items-center gap-1">
                  <DotIcon className="-ms-1 size-6 text-wg-gray-300" />
                  <span>Archived</span>
                </div>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </SelectPortal>
      </Select>
    </div>
  );
}
