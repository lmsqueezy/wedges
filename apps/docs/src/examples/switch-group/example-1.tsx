import { SwitchGroup } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="mx-auto flex w-fit flex-col gap-8 text-left">
      {/* Example 1 */}
      <SwitchGroup
        alignLabels="end"
        description="(description)"
        helperText="Helper text"
        label="Group Label"
        tooltip="Tooltip example"
      >
        <SwitchGroup.Item defaultChecked label="Option 1" />
        <SwitchGroup.Item disabled label="Option 2" />
        <SwitchGroup.Item label="Option 3" />
        <SwitchGroup.Item
          description="(description)"
          helperText="Helper text"
          label="Option 4"
          tooltip="Tooltip example"
        />
      </SwitchGroup>

      {/* Example 2 */}
      <SwitchGroup
        alignLabels="start"
        description="(description)"
        helperText="Helper text"
        label="Group Label"
        tooltip="Tooltip example"
      >
        <SwitchGroup.Item defaultChecked label="Option 1" />
        <SwitchGroup.Item disabled label="Option 2" />
        <SwitchGroup.Item label="Option 3" />
        <SwitchGroup.Item
          description="(description)"
          helperText="Helper text"
          label="Option 4"
          tooltip="Tooltip example"
        />
      </SwitchGroup>
    </div>
  );
}
