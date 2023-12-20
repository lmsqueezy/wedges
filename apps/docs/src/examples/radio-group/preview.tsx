import { RadioGroup } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="m-auto w-fit text-left">
      <RadioGroup
        defaultValue="value-1"
        description="description"
        helperText="Helper text"
        label="Label"
        required
        tooltip="Tooltip example"
      >
        <RadioGroup.Item label="Value 1" value="value-1" />
        <RadioGroup.Item label="Value 2" value="value-2" />
        <RadioGroup.Item label="Value 3" value="value-3" />
        <RadioGroup.Item label="Value 4" value="value-4" />
      </RadioGroup>
    </div>
  );
}
