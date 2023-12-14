import {
  ChevronDownIcon,
  DotsVerticalIcon,
  Monitor2Icon,
  MoonIcon,
  PlusIcon,
  SunIcon,
} from "@iconicicons/react";
import { ButtonGroup } from "@lmsqueezy/wedges";

export default function Example() {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Example 1 */}
      <ButtonGroup.Root orientation="vertical">
        <ButtonGroup.Item className="justify-start" before={<SunIcon />}>
          Light
        </ButtonGroup.Item>

        <ButtonGroup.Item className="justify-start" before={<MoonIcon />}>
          Dark
        </ButtonGroup.Item>

        <ButtonGroup.Item className="justify-start" before={<Monitor2Icon />}>
          System
        </ButtonGroup.Item>
      </ButtonGroup.Root>

      {/* Example 2 */}
      <ButtonGroup>
        <ButtonGroup.Item disabled>Publish</ButtonGroup.Item>
        <ButtonGroup.Item>Draft</ButtonGroup.Item>
        <ButtonGroup.Item before={<ChevronDownIcon />} />
      </ButtonGroup>

      {/* Example 3 */}
      <ButtonGroup size="sm">
        <ButtonGroup.Item destructive before={<PlusIcon />} after={<PlusIcon />}>
          Destructive
        </ButtonGroup.Item>

        <ButtonGroup.Item before={<PlusIcon />} after={<PlusIcon />}>
          Button
        </ButtonGroup.Item>

        <ButtonGroup.Item before={<PlusIcon />} after={<PlusIcon />}>
          Button
        </ButtonGroup.Item>

        <ButtonGroup.Item before={<DotsVerticalIcon />} />
      </ButtonGroup>
    </div>
  );
}
