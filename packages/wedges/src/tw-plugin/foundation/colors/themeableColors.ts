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
      DEFAULT: string;
    }>
  | string;

export type ThemeableColors = {
  background: string;
  foreground: string;
  primary: ColorScale;
  secondary: ColorScale;
  surface: ColorScale;
  destructive: ColorScale;
};

/* -------------------------------------------------------------------------- */
export const themeableColorsLight: ThemeableColors = {
  background: "#FFFFFF",
  foreground: palette.gray[900],

  // Primary
  primary: {
    ...palette["purple"],
    DEFAULT: palette["purple"][500],
  },

  // Secondary
  secondary: {
    ...palette["gray"],
    DEFAULT: palette["gray"][900],
  },

  // Surface
  surface: {
    ...palette["gray"],
    DEFAULT: palette["gray"][50],
  },

  // Destructive
  destructive: {
    ...palette["red"],
  },
};

export const themeableColorsDark: ThemeableColors = {
  background: palette.gray[900],
  foreground: "#FFFFFF",

  primary: {
    ...palette["purple"],
    DEFAULT: palette["purple"][400],
  },

  secondary: {
    ...palette["white"],
    900: palette["gray"][900],
    DEFAULT: palette["white"][900],
  },

  surface: {
    50: "rgba(255,255,255, 0.1)",
    100: "rgba(255,255,255, 0.15)",
    200: "rgba(255,255,255, 0.2)",
    300: "rgba(255,255,255, 0.4)",
    400: "rgba(255,255,255, 0.45)",
    500: "rgba(255,255,255, 0.5)",
    600: "rgba(255,255,255, 0.7)",
    700: "rgba(255,255,255, 0.8)",
    800: "rgba(255,255,255, 0.9)",
    900: "#FFFFFF",
    DEFAULT: "rgba(255,255,255, 0.1)",
  },

  destructive: {
    ...palette["red"],
  },
};

export const themeableColors = {
  light: themeableColorsLight,
  dark: themeableColorsDark,
} as const;
