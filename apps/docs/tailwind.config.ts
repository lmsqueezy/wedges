import type { Config } from "tailwindcss";

import tailwindTypography from "@tailwindcss/typography";
import { wedgesTW } from "@lmsqueezy/wedges";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // This is required in order to include Tailwind classes from Wedges.
    "node_modules/@lmsqueezy/wedges/dist/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: {
              padding: 0,
              borderRadius: "0.5rem",
              margin: 0,
            },
          },
        },
      },
      animation: {
        flash: "flash 1s ease-in-out infinite",
      },
      keyframes: {
        flash: {
          "0%, 20%": { opacity: "0.4" },
          "70%, 100%": { opacity: "1" },
        },
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
        "10xl": "102rem",
        "11xl": "108rem",
      },
      colors: {
        "gray-50": "#F7F7F8",
        "gray-100": "#E8E8ED",
        "gray-500": "#6C6C89",
        "gray-800": "#282833",
        "gray-900": "#121217",
        "purple-200": "#fcc5f3",
        "purple-400": "#8D6CEF",
        "purple-500": "#7047EB",
        "purple-600": "#5423E7",
        "yellow-500": "#FFC233",
        "wtf-gainsboro": "#EAEAEB",
      },
      container: {
        center: true,
        screens: {
          md: "100%",
          xl: "77rem", // 72 + 5 for padding
        },
        padding: {
          DEFAULT: "1.5rem",
          md: "2.5rem",
          xl: "2.5rem",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "-apple-system"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-monospace", "SFMono-Regular"],
      },
      minHeight: {
        "screen-dvh": "100dvh",
      },
      transitionDuration: {
        180: "180ms",
      },
    },
  },
  plugins: [wedgesTW(), tailwindTypography],
};

export default config;
