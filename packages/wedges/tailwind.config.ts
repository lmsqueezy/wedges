import type { Config } from "tailwindcss";

import { wedgesTW } from "./src";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  tailwindFunctions: ["clsx", "cn", "cva"],
  darkMode: "class",
  plugins: [wedgesTW()],
};

export default config;
