import { PlusIcon } from "@iconicicons/react";
import { Button } from "@lmsqueezy/wedges";

export default function Example() {
  return (
    <Button after={<PlusIcon />} before={<PlusIcon />}>
      Button
    </Button>
  );
}
