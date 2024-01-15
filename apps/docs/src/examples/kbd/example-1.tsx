import { Kbd } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="inline-flex items-center gap-4">
      <Kbd keys={["option", "command"]} size="xs">
        W
      </Kbd>

      <Kbd keys={["option", "command"]} size="sm">
        D
      </Kbd>

      <Kbd keys={["option", "command"]} size="md">
        G
      </Kbd>

      <Kbd keys={["option", "command"]} size="lg">
        S
      </Kbd>
    </div>
  );
}
