import { ChevronDownIcon } from "@iconicicons/react";
import { Button, CheckboxGroup, Popover } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="tertiary" size="sm" after={<ChevronDownIcon />} shape="pill">
          Show Popover
        </Button>
      </Popover.Trigger>

      <Popover.Content className="min-w-[140px]">
        <CheckboxGroup label="Group Label">
          <CheckboxGroup.Item label="Option 1" />
          <CheckboxGroup.Item label="Option 2" />
          <CheckboxGroup.Item label="Option 3" />
          <CheckboxGroup.Item label="Option 4" />
        </CheckboxGroup>
      </Popover.Content>
    </Popover>
  );
}
