import { CheckboxGroup } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="m-auto flex w-fit flex-col gap-8 text-left">
      <CheckboxGroup
        required
        description="(description)"
        helperText="Helper text"
        label="Vertical"
        tooltip="Tooltip example"
      >
        <CheckboxGroup.Item label="Option 1" />
        <CheckboxGroup.Item defaultChecked label="Option 2" />
        <CheckboxGroup.Item disabled label="Option 3" />
        <CheckboxGroup.Item label="Option 4" />
        <CheckboxGroup.Item label="Option 5" tooltip="Optional tooltip content" />
      </CheckboxGroup>

      <CheckboxGroup
        disabled
        description="(disabled)"
        helperText="Helper text"
        label="Horizontal"
        orientation="horizontal"
        tooltip="Tooltip example"
      >
        <CheckboxGroup.Item label="Option 1" />
        <CheckboxGroup.Item defaultChecked label="Option 2" />
        <CheckboxGroup.Item disabled label="Option 3" />
      </CheckboxGroup>
    </div>
  );
}
