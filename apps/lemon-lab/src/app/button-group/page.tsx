"use client";

import {
  ChevronDownIcon,
  CloudIcon,
  CopyIcon,
  DotsVerticalIcon,
  DownloadIcon,
  EditIcon,
  MoonIcon,
  SendIcon,
  StarIcon,
  SunIcon,
} from "@iconicicons/react";
import { ButtonGroup, Tooltip } from "@lmsqueezy/wedges";

import PageTitle from "@/components/PageTitle";

export default function ButtonGroupPage() {
  return (
    <main>
      <PageTitle>Button Group</PageTitle>

      <div className="flex flex-col items-start gap-10">
        <ButtonGroup.Root size="md">
          <ButtonGroup.Item after={<CopyIcon />} before={<SunIcon />}>
            Button 1
          </ButtonGroup.Item>

          <ButtonGroup.Item after={<StarIcon />} before={<CloudIcon />}>
            Button 2
          </ButtonGroup.Item>

          <ButtonGroup.Item after={<SendIcon />} before={<MoonIcon />}>
            Button 3
          </ButtonGroup.Item>
        </ButtonGroup.Root>

        <ButtonGroup.Root>
          <ButtonGroup.Item before={<DownloadIcon />}>Download</ButtonGroup.Item>

          <ButtonGroup.Item isIconOnly>
            <DotsVerticalIcon />
          </ButtonGroup.Item>
        </ButtonGroup.Root>

        <ButtonGroup.Root size="sm">
          <ButtonGroup.Item disabled>Create pull request</ButtonGroup.Item>

          <ButtonGroup.Item isIconOnly>
            <ChevronDownIcon />
          </ButtonGroup.Item>
        </ButtonGroup.Root>

        <ButtonGroup.Root size="sm">
          <ButtonGroup.Item>Raw</ButtonGroup.Item>

          <ButtonGroup.Item isIconOnly>
            <CopyIcon />
          </ButtonGroup.Item>

          <ButtonGroup.Item isIconOnly>
            <DownloadIcon />
          </ButtonGroup.Item>

          <Tooltip align="center" animation={true} content="Edit page" delayDuration={0} side="top">
            <ButtonGroup.Item isIconOnly>
              <EditIcon />
            </ButtonGroup.Item>
          </Tooltip>

          <ButtonGroup.Item isIconOnly>
            <ChevronDownIcon />
          </ButtonGroup.Item>
        </ButtonGroup.Root>

        <ButtonGroup.Root size="sm">
          <ButtonGroup.Item before={<DownloadIcon />}>Download Assets</ButtonGroup.Item>

          <ButtonGroup.Item disabled className="px-1 text-sm">
            12.3k
          </ButtonGroup.Item>
        </ButtonGroup.Root>

        <ButtonGroup.Root size="md">
          <ButtonGroup.Item before={<SunIcon />} />
          <ButtonGroup.Item before={<CloudIcon />} />
          <ButtonGroup.Item before={<MoonIcon />} />
        </ButtonGroup.Root>

        <ButtonGroup.Root orientation="vertical" size="md">
          <ButtonGroup.Item before={<SunIcon />}>Button 1</ButtonGroup.Item>
          <ButtonGroup.Item before={<CloudIcon />}>Button 2</ButtonGroup.Item>
          <ButtonGroup.Item before={<MoonIcon />}>Button 3</ButtonGroup.Item>
        </ButtonGroup.Root>
      </div>
    </main>
  );
}
