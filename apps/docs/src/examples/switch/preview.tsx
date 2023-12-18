import { Switch } from "@lmsqueezy/wedges";

export default function Example() {
  return (
    <Switch
      required
      alignLabel="end"
      description="(description)"
      disabled={false}
      helperText="Helper Text"
      label="Label"
      tooltip="Tooltip example"
    />
  );
}
