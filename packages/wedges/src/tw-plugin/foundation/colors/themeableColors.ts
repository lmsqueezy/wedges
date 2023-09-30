import { readableColor } from "color2k";

import { palette } from "./palette";

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

export type ColorScale =
  | Partial<{
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      foreground: string;
      "foreground-muted": string;
      borders: string;
      DEFAULT: string;
    }>
  | string;

export type CScale = {
  DEFAULT: string; // 500

  stronger: string; // 600 or 700
  softer: string; // 400 or 300
  subtle: string; // 50

  foreground: string;
  "foreground-softer": string;
  "foreground-contrast": string;
  "foreground-contrast-softer": string;

  borders: string;
  "borders-stronger": string;
};

export type ThemeableColors = {
  primary: CScale;
  secondary: CScale;
  destructive: Omit<
    CScale,
    "subtle" | "foreground-contrast" | "foreground-contrast-softer" | "foreground-softer"
  >;
  surface: Omit<CScale, "subtle">;

  background: ColorScale;
  foreground: ColorScale & { muted: string };
  "surface-2": ColorScale;
  "surface-3": ColorScale;
};

/* -------------------------------------------------------------------------- */

export const themeableColorsLight: ThemeableColors = {
  background: {
    ...palette["white"],
    foreground: readableColor(palette["white"].DEFAULT),
    borders: "rgba(0,0,0, 0.15)",
  },
  foreground: {
    DEFAULT: readableColor(palette["white"].DEFAULT),
    muted: palette["gray"][200],
  },

  // Primary
  primary: {
    DEFAULT: palette["purple"][500],

    stronger: palette["purple"][600],
    softer: palette["purple"][400],
    subtle: palette["purple"][50],

    foreground: palette["purple"][700],
    "foreground-softer": palette["purple"][400],
    "foreground-contrast": "#FFFFFF",
    "foreground-contrast-softer": "rgba(255,255,255, 0.7)",

    borders: palette["purple"][100],
    "borders-stronger": palette["purple"][200],
  },

  // Secondary
  secondary: {
    DEFAULT: palette["gray"][900],

    stronger: "#000000",
    softer: palette["gray"][700],
    subtle: palette["gray"][200],

    foreground: palette["gray"][900],
    "foreground-softer": palette["gray"][500],
    "foreground-contrast": "#FFFFFF",
    "foreground-contrast-softer": "rgba(255,255,255, 0.7)",

    borders: "rgba(0,0,0,0.05)",
    "borders-stronger": "rgba(0,0,0,0.1)",
  },

  // Destructive
  destructive: {
    DEFAULT: palette["red"][500],

    stronger: palette["red"][600],
    softer: palette["red"][300],

    foreground: palette["red"][700],

    borders: palette["red"][100],
    "borders-stronger": palette["red"][200],
  },

  // Surface
  surface: {
    DEFAULT: palette["gray"][50],

    stronger: palette["gray"][100],
    softer: "rgba(255, 255, 255, 0)",

    foreground: palette["gray"][700],
    "foreground-softer": palette["gray"][500],
    "foreground-contrast": palette["gray"][900],
    "foreground-contrast-softer": palette["gray"][700],

    borders: palette["gray"][100],
    "borders-stronger": palette["gray"][200],
  },

  "surface-2": {
    DEFAULT: palette["gray"][100],
    borders: palette["gray"][200],
    foreground: palette["gray"][700],
    "foreground-muted": palette["gray"][400],
  },

  "surface-3": {
    DEFAULT: palette["gray"][200],
    borders: palette["gray"][300],
    foreground: palette["gray"][800],
    "foreground-muted": palette["gray"][500],
  },
};

export const themeableColorsDark: ThemeableColors = {
  background: {
    ...palette["black"],
    foreground: readableColor(palette["black"].DEFAULT),
    borders: "rgba(255,255,255, 0.20)",
  },

  foreground: {
    DEFAULT: readableColor(palette["black"].DEFAULT),
    muted: palette["white"][300],
  },

  // Primary
  primary: {
    DEFAULT: palette["purple"][400],

    stronger: palette["purple"][500],
    softer: palette["purple"][300],
    subtle: "rgba(255, 255, 255, 0.1)",

    foreground: palette["purple"][400],
    "foreground-softer": palette["purple"][500],
    "foreground-contrast": "#FFFFFF",
    "foreground-contrast-softer": "rgba(255,255,255, 0.7)",

    borders: "rgba(255, 255, 255, 0.1)",
    "borders-stronger": "rgba(255, 255, 255, 0.2)",
  },

  // Secondary
  secondary: {
    DEFAULT: "#FFFFFF",

    stronger: "#FFFFFF",
    softer: "rgba(255,255,255,0.8)",
    subtle: "rgba(255,255,255, 0.2)",

    foreground: palette["gray"][100],
    "foreground-softer": "rgba(255,255,255, 0.5)",
    "foreground-contrast": palette["gray"][900],
    "foreground-contrast-softer": palette["gray"][700],

    borders: "rgba(255,255,255, 0.1)",
    "borders-stronger": "rgba(255,255,255, 0.2)",
  },

  // Destructive
  destructive: {
    DEFAULT: palette["red"][500],

    stronger: palette["red"][600],
    softer: palette["red"][400],

    foreground: palette["red"][500],

    borders: palette["red"][500],
    "borders-stronger": palette["red"][500],
  },

  // Surface
  surface: {
    DEFAULT: "rgba(255,255,255,0.1)",

    stronger: "rgba(255,255,255,0.2)",
    softer: "rgba(255, 255, 255, 0.05)",

    foreground: palette["gray"][700],
    "foreground-softer": "rgba(255, 255, 255, 0.4)",
    "foreground-contrast": "#FFFFFF",
    "foreground-contrast-softer": "rgba(255, 255, 255, 0.5)",

    borders: "rgba(255,255,255,0.1)",
    "borders-stronger": "rgba(255,255,255,0.2)",
  },

  "surface-2": {
    DEFAULT: "#1A1A1A",
    borders: "rgba(255,255,255, 0.1)",
    foreground: "rgba(255,255,255, 0.8)",
    "foreground-muted": "rgba(255,255,255, 0.5)",
  },
  "surface-3": {
    DEFAULT: "#292929",
    borders: "rgba(255,255,255, 0.1)",
    foreground: "rgba(255,255,255, 0.8)",
    "foreground-muted": "rgba(255,255,255, 0.5)",
  },
};

export const themeableColors = {
  light: themeableColorsLight,
  dark: themeableColorsDark,
} as const;
