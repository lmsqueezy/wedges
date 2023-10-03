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
  background: string;
  foreground: string;

  primary: CScale;
  secondary: CScale;
  //   surface: Omit<CScale, "subtle">;

  surface: ColorScale;
  destructive: ColorScale;

  //   destructive: Omit<CScale, "subtle" | "foreground-contrast-softer" | "foreground-softer">;
};

/* -------------------------------------------------------------------------- */

export const themeableColorsLight: ThemeableColors = {
  background: "#FFFFFF",
  foreground: palette.gray[900],

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

  // Surface
  surface: {
    // DEFAULT: palette["gray"][50],
    // stronger: palette["gray"][100],
    // softer: "rgba(255, 255, 255, 0)",
    // foreground: palette["gray"][400],
    // "foreground-softer": palette["gray"][500],
    // "foreground-contrast": palette["gray"][900],
    // "foreground-contrast-softer": palette["gray"][700],
    // borders: palette["gray"][100],
    // "borders-stronger": palette["gray"][200],
    ...palette["gray"],
    DEFAULT: palette["gray"][50],
  },

  // Destructive
  destructive: {
    // DEFAULT: palette["red"][500],

    // stronger: palette["red"][600],
    // softer: palette["red"][300],

    // foreground: palette["red"][700],
    // "foreground-contrast": palette["red"][800],

    // borders: palette["red"][100],
    // "borders-stronger": palette["red"][200],
    ...palette["red"],
  },
};

export const themeableColorsDark: ThemeableColors = {
  background: "#000000",
  foreground: "#FFFFFF",

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

  // Surface
  surface: {
    // DEFAULT: "rgba(255,255,255,0.1)",
    // stronger: "rgba(255,255,255,0.2)",
    // softer: "rgba(255, 255, 255, 0.05)",
    // foreground: palette["gray"][700],
    // "foreground-softer": "rgba(255, 255, 255, 0.4)",
    // "foreground-contrast": "#FFFFFF",
    // "foreground-contrast-softer": "rgba(255, 255, 255, 0.5)",
    // borders: "rgba(255,255,255,0.1)",
    // "borders-stronger": "rgba(255,255,255,0.2)",
    50: "rgba(255,255,255, 0.1)",
    100: "rgba(255,255,255, 0.2)",
    200: "rgba(255,255,255, 0.3)",
    300: "rgba(255,255,255, 0.4)",
    400: "rgba(255,255,255, 0.45)",
    500: "rgba(255,255,255, 0.5)",
    600: "rgba(255,255,255, 0.7)",
    700: "rgba(255,255,255, 0.8)",
    800: "rgba(255,255,255, 0.9)",
    900: "#FFFFFF",
    DEFAULT: "rgba(255,255,255, 0.1)",
  },

  // Destructive
  destructive: {
    // DEFAULT: palette["red"][500],

    // stronger: palette["red"][600],
    // softer: palette["red"][400],

    // foreground: palette["red"][500],
    // "foreground-contrast": palette["red"][400],

    // borders: palette["red"][500],
    // "borders-stronger": palette["red"][500],
    ...palette["red"],
  },
};

export const themeableColors = {
  light: themeableColorsLight,
  dark: themeableColorsDark,
} as const;
