import { wedgesTW } from "@lmsqueezy/wedges";
import { Config } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // This is required in order to include our Tailwind classes.
    "node_modules/@lmsqueezy/wedges/dist/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  darkMode: "class",
  plugins: [
    wedgesTW({
      prefix: "wg-",
      themes: {
        light: {},
        dark: {},
      },
    }),
  ],
};

export default config;
