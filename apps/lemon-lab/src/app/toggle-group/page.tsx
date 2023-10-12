"use client";

import {
  CopyIcon,
  CropIcon,
  CursorIcon,
  MoonIcon,
  StopIcon,
  SunIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "@iconicicons/react";
import { ToggleGroup } from "@lmsqueezy/wedges";

import PageTitle from "@/components/PageTitle";

export default function ToggleGroupPage() {
  return (
    <main>
      <PageTitle>Toggle Group</PageTitle>

      <div className="flex flex-col items-start gap-10">
        <ToggleGroup.Root orientation="horizontal" size="md" type="single">
          <ToggleGroup.Item value="1">1</ToggleGroup.Item>
          <ToggleGroup.Item value="2">2</ToggleGroup.Item>
          <ToggleGroup.Item value="3">3</ToggleGroup.Item>
        </ToggleGroup.Root>

        <ToggleGroup.Root orientation="vertical" size="md" type="single">
          <ToggleGroup.Item value="1">1</ToggleGroup.Item>
          <ToggleGroup.Item value="2">2</ToggleGroup.Item>
          <ToggleGroup.Item value="3">3</ToggleGroup.Item>
        </ToggleGroup.Root>

        <ToggleGroup.Root size="sm" type="single">
          <ToggleGroup.Item isIconOnly value="cursor">
            <CursorIcon />
          </ToggleGroup.Item>

          <ToggleGroup.Item isIconOnly value="stop">
            <StopIcon />
          </ToggleGroup.Item>

          <ToggleGroup.Item isIconOnly value="crop">
            <CropIcon />
          </ToggleGroup.Item>

          <ToggleGroup.Item isIconOnly value="copy">
            <CopyIcon />
          </ToggleGroup.Item>
        </ToggleGroup.Root>

        <ToggleGroup.Root orientation="vertical" size="sm" type="single">
          <ToggleGroup.Item isIconOnly value="cursor">
            <CursorIcon />
          </ToggleGroup.Item>

          <ToggleGroup.Item isIconOnly value="stop">
            <StopIcon />
          </ToggleGroup.Item>

          <ToggleGroup.Item isIconOnly value="crop">
            <CropIcon />
          </ToggleGroup.Item>

          <ToggleGroup.Item isIconOnly value="copy">
            <CopyIcon />
          </ToggleGroup.Item>
        </ToggleGroup.Root>

        <ToggleGroup.Root size="md" type="multiple">
          <ToggleGroup.Item before={<ZoomOutIcon />} value="zoom-out">
            Out
          </ToggleGroup.Item>

          <ToggleGroup.Item after={<ZoomInIcon />} value="zoom-in">
            In
          </ToggleGroup.Item>
        </ToggleGroup.Root>

        <div>
          <h2 className="mb-8 mt-14 text-xl">Custom</h2>

          <ToggleGroup.Root defaultValue="zoom-out" size="sm" type="single">
            <ToggleGroup.Item asChild isIconOnly value="light">
              <button className="hover:bg-surface data-[state=on]:bg-primary m-[2px] rounded-s-md p-2 data-[state=on]:text-white">
                <SunIcon className="h-6 w-6 text-current" />
              </button>
            </ToggleGroup.Item>

            <ToggleGroup.Item asChild isIconOnly value="dark">
              <button className="hover:bg-surface data-[state=on]:bg-primary m-[2px] rounded-e-md p-2 data-[state=on]:text-white">
                <MoonIcon className="h-6 w-6 text-current" />
              </button>
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </div>
      </div>
    </main>
  );
}
