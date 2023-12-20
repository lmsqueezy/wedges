import { ChevronDownIcon, CopyIcon, DownloadIcon, EditIcon } from "@iconicicons/react";
import { ButtonGroup, Tooltip } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <ButtonGroup size="sm">
      <Tooltip
        align="center"
        animation={false}
        content="View raw code"
        delayDuration={0}
        side="top"
      >
        <ButtonGroup.Item>Raw</ButtonGroup.Item>
      </Tooltip>

      <Tooltip align="center" animation={false} content="Copy" delayDuration={0}>
        <ButtonGroup.Item isIconOnly>
          <CopyIcon />
        </ButtonGroup.Item>
      </Tooltip>

      <Tooltip content="Download" delayDuration={0}>
        <ButtonGroup.Item isIconOnly>
          <DownloadIcon />
        </ButtonGroup.Item>
      </Tooltip>

      <Tooltip align="center" animation={false} content="Edit" delayDuration={0}>
        <ButtonGroup.Item isIconOnly>
          <EditIcon />
        </ButtonGroup.Item>
      </Tooltip>

      <Tooltip align="center" animation={false} content="More" delayDuration={0}>
        <ButtonGroup.Item isIconOnly>
          <ChevronDownIcon />
        </ButtonGroup.Item>
      </Tooltip>
    </ButtonGroup>
  );
}
