"use client";

import { useState } from "react";
import { Button, Tooltip } from "@lemonsqueezy/wedges";

import { cn } from "@/lib/utils";

type CopyButtonProps = {
  className?: string;
  content: string;
};

export function CopyButton({ className, content }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div data-theme="dark">
      <Tooltip className="font-sans" content="Copied" open={isCopied} side="left">
        <Button
          isIconOnly
          aria-label="Copy code to clipboard"
          className={cn(
            "wg-copy-button size-7 [&_svg]:size-4",
            className,
            isCopied && "pointer-events-none bg-wg-gray-700 text-white"
          )}
          data-theme="dark"
          size="sm"
          variant="transparent"
          onClick={handleCopy}
        >
          {isCopied ? (
            <CheckIcon aria-hidden="true" className="opacity-100" />
          ) : (
            <CopyIcon aria-hidden="true" />
          )}
        </Button>
      </Tooltip>
    </div>
  );
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className)}
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className)}
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
