import { ChevronDownIcon, CopyIcon, DownloadIcon, EditIcon } from "@iconicicons/react";
import { ButtonGroup, Tooltip } from "@lmsqueezy/wedges";

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

      <Tooltip align="center" animation={false} content="Copy" delayDuration={0} side="top">
        <ButtonGroup.Item isIconOnly>
          <CopyIcon />
        </ButtonGroup.Item>
      </Tooltip>

      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger>
            <ButtonGroup.Item isIconOnly>
              <DownloadIcon />
            </ButtonGroup.Item>
          </Tooltip.Trigger>

          <Tooltip.Portal>
            <Tooltip.Content>Download</Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>

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
    </ButtonGroup>
  );
}
