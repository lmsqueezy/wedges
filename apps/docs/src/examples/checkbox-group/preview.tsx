import { CheckboxGroup } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="m-auto w-fit text-left">
      <CheckboxGroup
        description="description"
        helperText="Helper text"
        label="Label"
        required
        tooltip="Tooltip example"
      >
        <CheckboxGroup.Item label="Option 1" />
        <CheckboxGroup.Item label="Option 2" />
        <CheckboxGroup.Item label="Option 3" />
        <CheckboxGroup.Item label="Option 4" />
      </CheckboxGroup>
    </div>
  );
}
