import plugin from "tailwindcss/plugin.js";
import { Config, PluginAPI } from "tailwindcss/types/config";

import {
  ColorKey,
  Colors,
  FontSizes,
  Shadows,
  addPrefixToObjKey,
  colors,
  fontSizes,
  shadows,
} from "./foundation";
import {
  BACKGROUND_PROPERTY,
  generateExtendedColorUtilities,
  getBaseThemableColors,
} from "./utils";

const themeableColors = [
  "background",
  //   "accent",
  //   "secondary",
  //   "surface",
  //   "foreground",
  //   "error",
  //   "warning",
  //   "success",
] as const;

type ThemeableColors = (typeof themeableColors)[number];

// Suggest color literals but also allow colors to be defined as strings.
type ColorOptions = Record<ThemeableColors, ColorKey | (string & {})>;
export type ThemeableColorOptions =
  | {
      light?: Partial<ColorOptions>;
      dark?: Partial<ColorOptions>;
    }
  | undefined;

export type WedgesOptions = {
  colors?: ThemeableColorOptions;
};

/**
 * Tailwind API.
 */
const wedgesPlugin = (options: WedgesOptions) => {
  return ({ addBase, addUtilities, theme }: PluginAPI) => {
    const colors: Colors = theme("colors");

    addBase({
      ...getBaseThemableColors(options?.colors, colors),
    });

    addUtilities(generateExtendedColorUtilities(colors));
  };
};

/**
 * Extend the theme with the colors from the Wedges palette.
 */
const themeConfig = () => {
  const fontSize = addPrefixToObjKey<FontSizes>(false, fontSizes);
  const shadow = addPrefixToObjKey<Shadows>(false, shadows);

  const config: Partial<Config> = {
    theme: {
      extend: {
        colors: {
          ...colors,
          "wg-background": `var(${BACKGROUND_PROPERTY})`,
        },
        fontSize: { ...fontSize },
        boxShadow: { ...shadow },
        minWidth: {
          6: "24px",
          8: "32px",
          10: "40px",
          12: "48px",
          14: "56px",
          16: "64px",
        },
      },
    },
  };

  return config;
};

/**
 * Register our plugin.
 */
export const wedgesTW = plugin.withOptions<WedgesOptions>(wedgesPlugin, themeConfig);
