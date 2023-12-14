import { Checkbox } from "@lmsqueezy/wedges";

export default function Example() {
  return (
    <div className="m-auto w-fit text-left">
      <Checkbox
        required
        description="description"
        helperText="Helper text"
        label="Label"
        tooltip="Tooltip example"
      />
    </div>
  );
}
