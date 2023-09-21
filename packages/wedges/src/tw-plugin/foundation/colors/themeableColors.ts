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

export type ThemeableColors = {
  primary: ColorScale;
  secondary: ColorScale;
  background: ColorScale;
  destructive: ColorScale;
  foreground: ColorScale & { muted: string };
  surface: ColorScale;
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
  primary: {
    ...palette["purple"],
    foreground: readableColor(palette["purple"].DEFAULT),
  },
  secondary: {
    ...palette["gray"],
    DEFAULT: palette["gray"][900],
    foreground: readableColor(palette["gray"]["900"]),
  },
  destructive: {
    ...palette["red"],
    foreground: readableColor(palette["red"].DEFAULT),
  },
  surface: {
    DEFAULT: palette["gray"][50],
    borders: palette["gray"][100],
    foreground: palette["gray"][700],
    "foreground-muted": palette["gray"][400],
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
  primary: {
    ...palette["purple"],
    foreground: readableColor(palette["purple"].DEFAULT),
  },
  secondary: {
    ...palette["white"],
    foreground: readableColor(palette["white"].DEFAULT),
  },
  destructive: {
    ...palette["red"],
    foreground: readableColor(palette["red"].DEFAULT),
  },
  surface: {
    DEFAULT: "rgba(255,255,255, 0.1)",
    borders: "rgba(255,255,255, 0.1)",
    foreground: "rgba(255,255,255, 0.8)",
    "foreground-muted": "rgba(255,255,255, 0.5)",
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
