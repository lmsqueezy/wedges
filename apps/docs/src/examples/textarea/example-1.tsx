import { Textarea } from "@lmsqueezy/wedges";

export default function Example() {
  return (
    <Textarea
      placeholder="Your message"
      helperText="Please describe the issue"
      label="Hello world"
      required
      tooltip="Hello world"
      destructive
    />
  );
}
