import { Textarea } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="m-auto flex max-w-sm flex-col gap-10 text-left">
      <Textarea
        className="resize-none"
        placeholder="Placeholder"
        label="Label"
        tooltip="Hello world"
        value="Value in disabled state"
        disabled
      />

      <Textarea
        className="resize-none"
        description="(description)"
        helperText="Helper text"
        label="Label"
      />
    </div>
  );
}
