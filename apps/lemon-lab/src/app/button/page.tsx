"use client";

import { SpeakerIcon } from "@iconicicons/react";
import { Button } from "@lmsqueezy/wedges";
import { useState } from "react";

import CloseIcon from "@/components/CloseIcon";
import PageTitle from "@/components/PageTitle";

export default function ButtonPage() {
  const [disabled, setDisabled] = useState(false);
  const [destructive, setDestructive] = useState(false);
  const [shape, setShape] = useState<"pill" | "rounded">("pill");
  const [size, setSize] = useState<"sm" | "md" | "xs-icon">("md");
  const [iconsVisible, setIconsVisible] = useState(true);

  return (
    <main>
      <PageTitle>Button</PageTitle>

      <div className="border-b-surface-borders-stronger divide-surface-borders-stronger mb-10 flex items-center divide-x border-b text-sm">
        <div className="flex items-center gap-2 p-4 pb-2 pt-0">
          <span>Size:</span>
          <Button
            size="sm"
            variant={size === "sm" ? "secondary" : "outline"}
            onClick={() => setSize("sm")}
          >
            sm
          </Button>

          <Button
            size="sm"
            variant={size === "md" ? "secondary" : "outline"}
            onClick={() => setSize("md")}
          >
            md
          </Button>

          <Button
            size="sm"
            variant={size === "xs-icon" ? "secondary" : "outline"}
            onClick={() => setSize("xs-icon")}
          >
            xs-icon
          </Button>
        </div>

        <div className="flex items-center gap-2 p-4 pb-2 pt-0">
          <span>Shape:</span>
          <Button
            size="sm"
            variant={shape === "pill" ? "secondary" : "outline"}
            onClick={() => setShape("pill")}
          >
            Pill
          </Button>

          <Button
            size="sm"
            variant={shape === "rounded" ? "secondary" : "outline"}
            onClick={() => setShape("rounded")}
          >
            Rounded
          </Button>
        </div>

        <div className="flex items-center gap-2 p-4 pb-2 pt-0">
          <span>Destructive:</span>

          <Button
            size="sm"
            variant={destructive ? "secondary" : "outline"}
            onClick={() => {
              setDestructive((prev) => !prev);
            }}
          >
            {destructive.toString()}
          </Button>
        </div>

        <div className="flex items-center gap-2 p-4 pb-2 pt-0">
          <span>Disabled:</span>

          <Button
            size="sm"
            variant={disabled ? "secondary" : "outline"}
            onClick={() => {
              setDisabled((prev) => !prev);
            }}
          >
            {disabled.toString()}
          </Button>
        </div>

        <div className="flex items-center gap-2 p-4 pb-2 pt-0">
          <span>Hide Icons:</span>

          <Button
            size="sm"
            variant={!iconsVisible ? "secondary" : "outline"}
            onClick={() => {
              setIconsVisible((prev) => !prev);
            }}
          >
            {(!iconsVisible).toString()}
          </Button>
        </div>
      </div>

      <div className="flex h-10 items-center gap-2">
        <Button
          after={iconsVisible ? <CloseIcon /> : undefined}
          before={iconsVisible ? <CloseIcon /> : undefined}
          destructive={destructive}
          disabled={disabled}
          shape={shape}
          size={size}
          variant="primary"
        >
          Primary
        </Button>

        <Button
          after={iconsVisible ? <CloseIcon /> : undefined}
          before={iconsVisible ? <CloseIcon /> : undefined}
          destructive={destructive}
          disabled={disabled}
          shape={shape}
          size={size}
          variant="secondary"
        >
          Secondary
        </Button>

        <Button
          after={iconsVisible ? <CloseIcon /> : undefined}
          before={iconsVisible ? <CloseIcon /> : undefined}
          destructive={destructive}
          disabled={disabled}
          shape={shape}
          size={size}
          variant="tertiary"
        >
          Tertiary
        </Button>

        <Button
          after={iconsVisible ? <CloseIcon /> : undefined}
          before={iconsVisible ? <CloseIcon /> : undefined}
          destructive={destructive}
          disabled={disabled}
          shape={shape}
          size={size}
          variant="outline"
        >
          Outline
        </Button>

        <Button
          after={iconsVisible ? <CloseIcon /> : undefined}
          before={iconsVisible ? <CloseIcon /> : undefined}
          destructive={destructive}
          disabled={disabled}
          shape={shape}
          size={size}
          variant="transparent"
        >
          Transparent
        </Button>
      </div>

      <div className="mt-8 flex h-10 items-center gap-2">
        <Button
          after={<CloseIcon />}
          destructive={destructive}
          disabled={disabled}
          shape={shape}
          size={size}
          variant="primary"
        />

        <Button
          after={<CloseIcon />}
          destructive={destructive}
          disabled={disabled}
          shape={shape}
          size={size}
          variant="secondary"
        />

        <Button
          after={<CloseIcon />}
          destructive={destructive}
          disabled={disabled}
          shape={shape}
          size={size}
          variant="tertiary"
        />

        <Button
          after={<CloseIcon />}
          destructive={destructive}
          disabled={disabled}
          shape={shape}
          size={size}
          variant="outline"
        />

        <Button
          after={<CloseIcon />}
          destructive={destructive}
          disabled={disabled}
          shape={shape}
          size={size}
          variant="transparent"
        />
      </div>

      <div className="mt-8 flex h-10 items-center gap-2">
        <Button
          after={<SpeakerIcon />}
          className="bg-wg-orange-600 hover:bg-wg-orange-500 outline-wg-orange-600 rounded-0"
          destructive={destructive}
          disabled={disabled}
          shape={shape}
          size={size}
          variant="primary"
        >
          Custom
        </Button>
      </div>
    </main>
  );
}
