import { CheckboxGroup, Popover } from "@lmsqueezy/wedges";

export default function Example() {
  return (
    <Popover>
      <Popover.Trigger>Open</Popover.Trigger>

      <Popover.Content className="min-w-[150px]">
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
