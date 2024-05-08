import { Button, Dialog } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header title="Dialog Title" description="Dialog Description" />
      </Dialog.Content>
    </Dialog>
  );
}
