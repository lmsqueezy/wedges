import { Switch } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="flex flex-col gap-12">
      <div className="mx-auto flex max-w-fit flex-col items-start gap-6 text-start">
        {/* Example 1 */}
        <Switch label="Label" tooltip="Tooltip example" />

        {/* Example 2 */}
        <Switch
          description="(disabled)"
          helperText="Helper text"
          label="Label"
          tooltip="Tooltip example"
          disabled
        />
      </div>

      <div className="mx-auto flex max-w-fit flex-col items-start gap-6 text-start">
        {/* Example 3 */}
        <Switch alignLabel="start" label="Label" tooltip="Tooltip example" />

        {/* Example 4 */}
        <Switch
          alignLabel="start"
          description="(disabled)"
          helperText="Helper text"
          label="Label"
          tooltip="Tooltip example"
          disabled
        />
      </div>
    </div>
  );
}
