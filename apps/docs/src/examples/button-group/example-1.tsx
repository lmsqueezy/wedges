import {
  ChevronDownIcon,
  DotsVerticalIcon,
  GridIcon,
  GridMasonryIcon,
  Monitor2Icon,
  MoonIcon,
  PlusIcon,
  SunIcon,
  TableColumnsIcon,
  TableRowsIcon,
} from "@iconicicons/react";
import { ButtonGroup } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Example 1 */}
      <ButtonGroup orientation="vertical">
        <ButtonGroup.Item className="justify-start" before={<SunIcon />}>
          Light
        </ButtonGroup.Item>

        <ButtonGroup.Item className="justify-start" before={<MoonIcon />}>
          Dark
        </ButtonGroup.Item>

        <ButtonGroup.Item className="justify-start" before={<Monitor2Icon />}>
          System
        </ButtonGroup.Item>
      </ButtonGroup>

      {/* Example 2 */}
      <ButtonGroup>
        <ButtonGroup.Item after={<GridIcon />} />
        <ButtonGroup.Item after={<GridMasonryIcon />} />
        <ButtonGroup.Item after={<TableColumnsIcon />} />
        <ButtonGroup.Item after={<TableRowsIcon />} />
      </ButtonGroup>

      {/* Example 3 */}
      <ButtonGroup>
        <ButtonGroup.Item disabled>Publish Post</ButtonGroup.Item>
        <ButtonGroup.Item>Draft</ButtonGroup.Item>
        <ButtonGroup.Item before={<DotsVerticalIcon />} />
      </ButtonGroup>

      {/* Example 4 */}
      <ButtonGroup size="sm">
        <ButtonGroup.Item destructive before={<PlusIcon />}>
          Destructive
        </ButtonGroup.Item>

        <ButtonGroup.Item before={<PlusIcon />}>Button</ButtonGroup.Item>

        <ButtonGroup.Item before={<ChevronDownIcon />} />
      </ButtonGroup>
    </div>
  );
}
