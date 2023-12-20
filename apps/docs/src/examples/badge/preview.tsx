import { PlusIcon } from "@iconicicons/react";
import { Badge } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <Badge before={<PlusIcon />} after={<PlusIcon />}>
      Label
    </Badge>
  );
}
