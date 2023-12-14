import { CheckboxGroup } from "@lmsqueezy/wedges";

export default function Example() {
  return (
    <div className="m-auto flex w-fit flex-col gap-8 text-left">
      <CheckboxGroup
        required
        helperText="Helper text"
        label="Vertical Checkbox Group"
        orientation="vertical"
        tooltip="Tooltip example"
      >
        <CheckboxGroup.Item label="Option 1" />
        <CheckboxGroup.Item defaultChecked label="Option 2" />
        <CheckboxGroup.Item disabled label="Option 3" />
        <CheckboxGroup.Item label="Option 4" />
        <CheckboxGroup.Item label="Option 5" />
      </CheckboxGroup>

      <CheckboxGroup
        required
        helperText="Helper text"
        label="Horizontal Checkbox Group"
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
