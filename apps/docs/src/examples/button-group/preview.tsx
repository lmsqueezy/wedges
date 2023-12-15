import { PlusIcon } from "@iconicicons/react";
import { ButtonGroup } from "@lmsqueezy/wedges";

export default function Example() {
  return (
    <ButtonGroup>
      <ButtonGroup.Item after={<PlusIcon />} before={<PlusIcon />}>
        Button
      </ButtonGroup.Item>

      <ButtonGroup.Item after={<PlusIcon />} before={<PlusIcon />}>
        Button
      </ButtonGroup.Item>

      <ButtonGroup.Item after={<PlusIcon />} before={<PlusIcon />}>
        Button
      </ButtonGroup.Item>
    </ButtonGroup>
  );
}
