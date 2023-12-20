import { Label } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="mx-auto flex max-w-fit flex-col items-start text-start">
      <Label description="description" required tooltip="Tooltip example">
        Label
      </Label>

      <Label.Helper error>There are errors in your form.</Label.Helper>
    </div>
  );
}
