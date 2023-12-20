import { RadioGroup } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="m-auto flex w-fit flex-col gap-8 text-left">
      {/* Example 1 */}
      <RadioGroup
        required
        description="(description)"
        helperText="Helper text"
        label="Vertical"
        tooltip="Tooltip example"
      >
        <RadioGroup.Item value="option-1" label="Option 1" />
        <RadioGroup.Item value="option-2" label="Option 2" />
        <RadioGroup.Item value="option-3" label="Option 3" />
        <RadioGroup.Item
          value="option-4"
          description="(description)"
          helperText="Helper text"
          label="Option 4"
          tooltip="Tooltip example"
        >
          children?
        </RadioGroup.Item>
      </RadioGroup>

      {/* Example 2 */}
      <RadioGroup
        disabled
        description="(disabled)"
        helperText="Helper text"
        label="Horizontal"
        orientation="horizontal"
        tooltip="Tooltip example"
      >
        <RadioGroup.Item value="option-1" label="Option 1" />
        <RadioGroup.Item value="option-2" label="Option 2" />
        <RadioGroup.Item value="option-3" label="Option 3" />
      </RadioGroup>
    </div>
  );
}
