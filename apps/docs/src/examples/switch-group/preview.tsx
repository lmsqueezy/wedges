import { SwitchGroup } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="m-auto w-fit text-left">
      <SwitchGroup
        alignLabels="end"
        description="(description)"
        helperText="Helper text"
        label="Group Label"
        tooltip="Tooltip example"
      >
        <SwitchGroup.Item label="Option 1" />
        <SwitchGroup.Item label="Option 2" />
        <SwitchGroup.Item label="Option 3" />
        <SwitchGroup.Item label="Option 4" />
      </SwitchGroup>
    </div>
  );
}
