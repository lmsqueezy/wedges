import { CheckboxGroup } from "@lmsqueezy/wedges";

export default function Example() {
  return (
    <div className="m-auto w-fit text-left">
      <CheckboxGroup
        required
        description="(optional)"
        helperText="Helper text"
        label="Group Label"
        tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
      >
        <CheckboxGroup.Item label="Option 1" />
        <CheckboxGroup.Item label="Option 2" />
        <CheckboxGroup.Item label="Option 3" />
        <CheckboxGroup.Item label="Option 4" />
      </CheckboxGroup>
    </div>
  );
}
