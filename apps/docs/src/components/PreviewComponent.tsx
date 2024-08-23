"use client";

import { forwardRef, Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Demos } from "@/examples";
import { CodeIcon, EyeIcon, MoonIcon, SunIcon } from "@iconicicons/react";
import { Button, Tabs, type TabsElement, type TabsProps } from "@lemonsqueezy/wedges";

import { cn } from "@/lib/utils";

import { LemonSqueezyLogomark } from "./icons/lemonsqueezy";
import { PreviewCode } from "./PreviewCode";

type PreviewComponentType = TabsElement;
type PreviewComponentProps = TabsProps & {
  align?: "start" | "center" | "end";

  /**
   * Name of the demo component defined in `@/examples/index.ts`.
   */
  name: string;
};

export const PreviewComponent = forwardRef<PreviewComponentType, PreviewComponentProps>(
  ({ align, children, name, ...otherProps }, ref) => {
    const previewRef = useRef<HTMLDivElement>(null);
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const Component = useMemo(() => Demos[name]?.component, [name]);
    const Preview = !Component ? NotFound : Component;

    const toggleTheme = () => {
      if (previewRef.current) {
        previewRef.current.classList.add("[&_*]:!transition-none");
      }

      if (theme === "light") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };

    useEffect(() => {
      // This function runs after the render is committed to the screen
      const removeTransitionClass = () => {
        if (!previewRef.current) {
          return;
        }

        previewRef.current.classList.remove("[&_*]:!transition-none");
      };

      setTimeout(removeTransitionClass, 0);
    }, [theme]); // This effect runs when `theme` changes

    return (
      <Tabs
        defaultValue="preview"
        className="mb-[2em] mt-[1em]"
        variant="underlined"
        {...otherProps}
        ref={ref}
      >
        <Tabs.List>
          <Tabs.Trigger before={<EyeIcon />} value="preview">
            Preview
          </Tabs.Trigger>

          <Tabs.Trigger before={<CodeIcon />} value="code">
            Code
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className={cn("rounded-lg", theme)} value="preview">
          <div
            ref={previewRef}
            className="preview not-prose dark:bg-wg-gray-950 relative flex w-full items-center justify-center rounded-lg border border-surface-100 bg-background text-sm text-foreground shadow-wg-xs"
          >
            <div
              className={cn("flex min-h-[300px] w-full items-center overflow-x-auto p-10", {
                "items-center": align === "center",
                "items-start": align === "start",
                "items-end": align === "end",
              })}
            >
              <div className="mx-auto block w-full min-w-fit text-center">
                <Suspense fallback={<SuspenseFallback />}>
                  <Preview />
                </Suspense>
              </div>
            </div>

            <Button
              isIconOnly
              className="absolute right-2 top-2"
              size="sm"
              variant="transparent"
              onClick={toggleTheme}
            >
              {theme === "light" ? <SunIcon /> : <MoonIcon />}
            </Button>
          </div>
        </Tabs.Content>

        <Tabs.Content
          className="rounded-lg [&_pre.expanded]:max-h-[1600px] [&_pre:not(.expanded)]:max-h-[302px] [&_pre]:overflow-auto"
          value="code"
        >
          <PreviewCode>{children}</PreviewCode>
        </Tabs.Content>
      </Tabs>
    );
  }
);

PreviewComponent.displayName = "PreviewComponent";

function SuspenseFallback() {
  return (
    <div className="flex flex-col items-center gap-4 text-xs leading-6 text-surface-500">
      <LemonSqueezyLogomark className="fill-surface-200" fill="none" loading={true} />
      <span>Loading preview</span>
    </div>
  );
}

function NotFound() {
  return <span className="text-surface-500">Unable to display component preview</span>;
}
