import { CodeIcon, EyeIcon, MoonIcon, SunIcon } from "@iconicicons/react";
import { Button, Tabs, TabsElement, TabsProps } from "@lmsqueezy/wedges";
import { Suspense, forwardRef, useEffect, useMemo, useRef, useState } from "react";

import { Logomark } from "./Logo";

import { cn } from "@/lib/utils";
import { Demos } from "@/examples";

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

      theme === "light" ? setTheme("dark") : setTheme("light");
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
      <Tabs defaultValue="preview" variant="underlined" {...otherProps} ref={ref}>
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
            className={cn(
              "preview border-surface-100 bg-background text-foreground shadow-wg-xs dark:bg-wg-gray-950 relative flex min-h-[300px] w-full items-center justify-center rounded-lg border p-10 text-sm",
              {
                "items-center": align === "center",
                "items-start": align === "start",
                "items-end": align === "end",
              }
            )}
          >
            <Suspense fallback={<SuspenseFallback />}>
              <Preview />
            </Suspense>

            <Button
              isIconOnly
              className="absolute right-3 top-3"
              size="sm"
              variant="transparent"
              onClick={toggleTheme}
            >
              {theme === "light" ? <SunIcon /> : <MoonIcon />}
            </Button>
          </div>
        </Tabs.Content>

        <Tabs.Content
          className="rounded-lg [&_pre]:max-h-[300px] [&_pre]:overflow-auto"
          value="code"
        >
          <div className="not-prose w-full">{children}</div>
        </Tabs.Content>
      </Tabs>
    );
  }
);

PreviewComponent.displayName = "PreviewComponent";

function SuspenseFallback() {
  return (
    <div className="text-surface-500 flex flex-col items-center gap-4 text-xs leading-6">
      <Logomark className="fill-surface-200" fill="none" loading={true} />
      <span>Loading preview</span>
    </div>
  );
}

function NotFound() {
  return <span className="text-surface-500">Unable to display component preview</span>;
}
