import { Slider } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="inline-flex w-full min-w-80 max-w-[400px] flex-col items-stretch gap-12">
      <Slider
        after="100"
        before="0"
        content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        defaultValue={[50]}
        description="(description)"
        helperText="Helper text"
        label="Label"
        disabled
      />
    </div>
  );
}
