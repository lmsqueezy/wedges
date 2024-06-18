"use client";

import { useLayoutEffect, useRef, useState, type ReactNode, type SVGAttributes } from "react";
import { Button } from "@lemonsqueezy/wedges";

export function PreviewCode({ children }: { children: ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const elRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Get the height of the `code` element

    if (!elRef.current) {
      return;
    }

    const container = elRef.current;
    const codeEl = container.querySelector("code");
    const codeHeight = codeEl?.clientHeight;

    // our container height is 302px, if the code element is taller than that, we should show the expand button
    if (codeHeight && codeHeight > 302) {
      setShouldShow(true);
    }
  }, []);

  return (
    <div ref={elRef} className="not-prose relative w-full dark">
      {children}

      {shouldShow ? (
        <Button
          size="sm"
          className="absolute right-9 top-2 size-7 [&_svg]:size-4"
          onClick={() => {
            setIsExpanded((prev) => !prev);
            elRef.current?.querySelector("pre")?.classList.toggle("expanded");
          }}
          variant="transparent"
          isIconOnly
          before={
            isExpanded ? (
              <MinimizeIcon className="size-4" />
            ) : (
              <ExpandIcon className="size-4" strokeWidth={1.5} />
            )
          }
        />
      ) : null}
    </div>
  );
}

function ExpandIcon(props: SVGAttributes<SVGElement>) {
  const { className, ...otherProps } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...otherProps}
    >
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" x2="14" y1="3" y2="10" />
      <line x1="3" x2="10" y1="21" y2="14" />
    </svg>
  );
}

function MinimizeIcon(props: SVGAttributes<SVGElement>) {
  const { className, ...otherProps } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...otherProps}
    >
      <polyline points="4 14 10 14 10 20" />
      <polyline points="20 10 14 10 14 4" />
      <line x1="14" x2="21" y1="10" y2="3" />
      <line x1="3" x2="10" y1="21" y2="14" />
    </svg>
  );
}
