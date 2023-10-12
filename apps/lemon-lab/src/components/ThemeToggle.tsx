"use client";

import { MoonIcon, SunIcon } from "@iconicicons/react";
import { ToggleGroup } from "@lmsqueezy/wedges";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="bg-surface shadow-xs ml-4 h-[34px] w-[67px] rounded-lg" />;
  }

  return (
    <>
      <ToggleGroup.Root
        className="ml-4"
        defaultValue={resolvedTheme}
        size="sm"
        type="single"
        value={resolvedTheme}
        onValueChange={(value) => value && setTheme(value)}
      >
        <ToggleGroup.Item isIconOnly value="light">
          <SunIcon className={resolvedTheme === "light" ? "text-surface-900" : undefined} />
        </ToggleGroup.Item>

        <ToggleGroup.Item isIconOnly value="dark">
          <MoonIcon className={resolvedTheme === "dark" ? "text-surface-900" : undefined} />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </>
  );
};

export default ThemeToggle;
