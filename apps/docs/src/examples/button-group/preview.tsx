import { CloudIcon, CopyIcon, MoonIcon, SendIcon, StarIcon, SunIcon } from "@iconicicons/react";
import { ButtonGroup } from "@lmsqueezy/wedges";

export default function Example() {
  return (
    <ButtonGroup>
      <ButtonGroup.Item after={<CopyIcon />} before={<SunIcon />}>
        Button
      </ButtonGroup.Item>

      <ButtonGroup.Item after={<StarIcon />} before={<CloudIcon />}>
        Button
      </ButtonGroup.Item>

      <ButtonGroup.Item after={<SendIcon />} before={<MoonIcon />}>
        Button
      </ButtonGroup.Item>
    </ButtonGroup>
  );
}
