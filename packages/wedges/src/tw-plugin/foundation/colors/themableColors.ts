import { palette } from "./palette";

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

export type ColorScale = {
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
};

export type ThemableColorScale = Partial<ColorScale> | string;

export type ThemableColors = {
  background: string;
  foreground: string;
  primary: ThemableColorScale;
  secondary: ThemableColorScale;
  surface: ThemableColorScale;
  destructive: ThemableColorScale;
};

/* -------------------------------------------------------------------------- */
export const themableColorsLight: ThemableColors = {
  background: "#FFFFFF",
  foreground: palette.gray[900],

  primary: {
    ...palette.purple,
    DEFAULT: palette.purple[500],
  },

  secondary: {
    ...palette.gray,
    DEFAULT: palette.gray[900],
  },

  surface: {
    ...palette.gray,
    DEFAULT: palette.gray[50],
  },

  destructive: {
    ...palette.red,
  },
};

export const themableColorsDark: ThemableColors = {
  background: palette.gray[900],
  foreground: "#FFFFFF",

  primary: {
    ...palette.purple,
    DEFAULT: palette.purple[400],
    600: palette.purple[500],
  },

  secondary: {
    ...palette.white,
    900: palette.gray[900],
    DEFAULT: palette.white[900],
  },

  surface: {
    50: "rgba(255,255,255, 0.1)",
    100: "rgba(255,255,255, 0.2)",
    200: "rgba(255,255,255, 0.3)",
    300: "rgba(255,255,255, 0.4)",
    400: "rgba(255,255,255, 0.5)",
    500: "rgba(255,255,255, 0.5)",
    600: "rgba(255,255,255, 0.7)",
    700: "rgba(255,255,255, 0.8)",
    800: "rgba(255,255,255, 0.9)",
    900: "#FFFFFF",
    DEFAULT: "rgba(255,255,255, 0.1)",
  },

  destructive: {
    ...palette.red,
  },
};

export const themableColors = {
  light: themableColorsLight,
  dark: themableColorsDark,
} as const;
