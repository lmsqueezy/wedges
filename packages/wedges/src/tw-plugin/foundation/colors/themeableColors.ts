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
      DEFAULT: string;
    }>
  | string;

type BaseColors = {
  background: ColorScale;
  foreground: ColorScale;
};

export type ThemeableColors = BaseColors & {
  primary: ColorScale;
  secondary: ColorScale;
};

type BaseThemeableColors = {
  light: BaseColors;
  dark: BaseColors;
};

/* -------------------------------------------------------------------------- */

const baseThemableColors: BaseThemeableColors = {
  light: {
    background: {
      DEFAULT: "#FFFFFF",
    },
    foreground: {
      DEFAULT: "#000000",
    },
  },
  dark: {
    background: {
      DEFAULT: "#000000",
    },
    foreground: {
      DEFAULT: "#FFFFFF",
    },
  },
};

export const themeableColorsLight: ThemeableColors = {
  ...baseThemableColors.light,
  primary: {
    ...palette["purple"],
    foreground: readableColor(palette["purple"].DEFAULT),
  },
  secondary: {
    ...palette["gray"],
    foreground: readableColor(palette["gray"].DEFAULT),
  },
};

export const themeableColorsDark: ThemeableColors = {
  ...baseThemableColors.dark,
  primary: {
    ...palette["purple"],
    foreground: readableColor(palette["purple"].DEFAULT),
  },
  secondary: {
    ...palette["gray"],
    foreground: readableColor(palette["gray"].DEFAULT),
  },
};

export const themeableColors = {
  light: themeableColorsLight,
  dark: themeableColorsDark,
} as const;
