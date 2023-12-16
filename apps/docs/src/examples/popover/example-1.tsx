import { ChevronDownIcon, CopyIcon, DownloadIcon } from "@iconicicons/react";
import { ButtonGroup, CheckboxGroup, Popover } from "@lmsqueezy/wedges";

export default function Example() {
  return (
    <ButtonGroup>
      <ButtonGroup.Item isIconOnly>
        <CopyIcon />
      </ButtonGroup.Item>

      <ButtonGroup.Item isIconOnly>
        <DownloadIcon />
      </ButtonGroup.Item>

      <Popover>
        <Popover.Trigger asChild>
          <ButtonGroup.Item isIconOnly>
            <ChevronDownIcon />
          </ButtonGroup.Item>
        </Popover.Trigger>

        <Popover.Content align="end" className="min-w-[130px]">
          <CheckboxGroup label="Group Label">
            <CheckboxGroup.Item label="Option 1" />
            <CheckboxGroup.Item label="Option 2" />
            <CheckboxGroup.Item label="Option 3" />
            <CheckboxGroup.Item label="Option 4" />
          </CheckboxGroup>
        </Popover.Content>
      </Popover>
    </ButtonGroup>
  );
}
