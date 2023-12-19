import { Textarea } from "@lmsqueezy/wedges";

export default function Example() {
  return (
    <div className="flex flex-col gap-12">
      <Textarea
        className="resize-none"
        placeholder="Your message"
        label="Your Message"
        required
        tooltip="Hello world"
        value="Custom value in disabled state"
        disabled
      />

      <Textarea
        className="resize-none"
        description="(optional)"
        helperText="Please describe the issue"
        label="Message"
      />
    </div>
  );
}
