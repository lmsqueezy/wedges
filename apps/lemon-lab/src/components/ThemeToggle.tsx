"use client";

import { useTheme } from "next-themes";
import React from "react";

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <nav className="text-wg-sm dark:text-wg-white-500 flex items-center gap-5 text-neutral-500">
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
    </nav>
  );
};

export default ThemeToggle;
