import { PlusIcon } from "@iconicicons/react";
import { Badge } from "@lmsqueezy/wedges";

export default function Example() {
  return (
    <Badge before={<PlusIcon />} after={<PlusIcon />}>
      Label
    </Badge>
  );
}
