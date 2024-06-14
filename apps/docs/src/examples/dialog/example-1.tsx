import { useRef } from "react";
import { Button, Dialog } from "@lemonsqueezy/wedges";

export default function Example() {
  // You most likely don't need to use `containerRef` in your implementation. This is just for preview.
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button>Open Dialog</Button>
        </Dialog.Trigger>

        <Dialog.Content className="text-left" container={containerRef.current}>
          <Dialog.Header>
            <Dialog.Title>Dialog Custom Close</Dialog.Title>
            <Dialog.Description>Dialog with custom close button</Dialog.Description>
          </Dialog.Header>
          Dialog content goes here.
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button variant="tertiary">Close</Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}
