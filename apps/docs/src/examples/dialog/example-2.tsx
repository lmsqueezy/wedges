import { useRef, useState } from "react";
import { Button, Dialog } from "@lemonsqueezy/wedges";

export default function Example() {
  // You most likely don't need to use `containerRef` in your implementation. This is just for preview.
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <div ref={containerRef}>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>

      <Dialog
        open={open}
        onOpenChange={setOpen}
        container={containerRef.current}
        className="text-left"
        title="Dialog With Footer"
        description="Dialog description"
      >
        Dialog content goes here.
        <Dialog.Footer>
          <Button variant="tertiary" onClick={() => setOpen(false)}>
            Close
          </Button>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}
