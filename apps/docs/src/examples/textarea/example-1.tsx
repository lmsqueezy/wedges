import { Textarea } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="m-auto max-w-sm text-left">
      <Textarea
        destructive
        required
        description="(description)"
        helperText="Helper text"
        label="Label"
        placeholder="Placeholder"
        tooltip="Tooltip example"
        className="max-h-64"
      />
    </div>
  );
}
