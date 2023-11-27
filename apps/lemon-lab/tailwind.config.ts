import { wedgesTW } from "@lmsqueezy/wedges";
import type { Config } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // This is required in order to include Tailwind classes from Wedges.
    "node_modules/@lmsqueezy/wedges/dist/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  tailwindFunctions: ["clsx", "cn", "cva"],
  darkMode: "class",
  plugins: [wedgesTW()],
};

export default config;
