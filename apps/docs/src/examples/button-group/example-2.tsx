import { ChevronDownIcon, CopyIcon, DownloadIcon, EditIcon } from "@iconicicons/react";
import { ButtonGroup, Tooltip } from "@lmsqueezy/wedges";

export default function Example() {
  return (
    <ButtonGroup.Root size="sm">
      <ButtonGroup.Item>Raw</ButtonGroup.Item>

      <Tooltip align="center" animation={false} content="Copy" delayDuration={0} side="top">
        <ButtonGroup.Item isIconOnly>
          <CopyIcon />
        </ButtonGroup.Item>
      </Tooltip>

      <Tooltip align="center" animation={false} content="Download" delayDuration={0} side="top">
        <ButtonGroup.Item isIconOnly>
          <DownloadIcon />
        </ButtonGroup.Item>
      </Tooltip>

      <Tooltip align="center" animation={false} content="Edit" delayDuration={0} side="top">
        <ButtonGroup.Item isIconOnly>
          <EditIcon />
        </ButtonGroup.Item>
      </Tooltip>

      <Tooltip align="center" animation={false} content="More" delayDuration={0} side="top">
        <ButtonGroup.Item isIconOnly>
          <ChevronDownIcon />
        </ButtonGroup.Item>
      </Tooltip>
    </ButtonGroup.Root>
  );
}
