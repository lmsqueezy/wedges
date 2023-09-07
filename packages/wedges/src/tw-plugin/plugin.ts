// @ts-ignore
import plugin from "tailwindcss/plugin.js";
import { Config, PluginAPI } from "tailwindcss/types/config";

import { baseColors, boxShadows, fontSizes, minWidth, themeableColors } from "./foundation";
import { ColorOptions } from "./foundation/colors";
import { addPrefix } from "./utils";
import { getBaseThemeableColors, transformVarColor } from "./utils/colors";

export type ThemeOptions = {
  /**
   * Override "light" theme colors.
   */
  light?: Partial<ColorOptions>;

  /**
   * Override "dark" theme colors.
   */
  dark?: Partial<ColorOptions>;
};

export type WedgesOptions = {
  /**
   * The prefix to use for all Wedges classes.
   */
  prefix?: string;

  /**
   * The themes to use for Wedges.
   */
  themes?: ThemeOptions;
};

/**
 * The default options for the Tailwind plugin.
 */
const defaultOptions: Required<WedgesOptions> = {
  prefix: "wg-",
  themes: {
    light: {},
    dark: {},
  },
};

/**
 * The Tailwind plugin.
 */
const wedgesPlugin = (options: WedgesOptions = defaultOptions) => {
  return ({ addBase }: PluginAPI) => {
    const { lightColors, darkColors } = getBaseThemeableColors(options.themes);

    addBase({
      ":root": {
        ...lightColors,
      },

      ".dark": {
        ...darkColors,
      },
    });
  };
};

/**
 * Extends the Tailwind config with Wedges' customizations.
 */
const extendConfig = ({ prefix = defaultOptions.prefix }: WedgesOptions = defaultOptions) => {
  const prefixedFontSize = addPrefix(fontSizes, prefix);
  const prefixedBoxShadow = addPrefix(boxShadows, prefix);
  const prefixedBaseColors = addPrefix(baseColors, prefix);
  const prefixedThemeableColors = addPrefix(transformVarColor(themeableColors), prefix);

  const config: Partial<Config> = {
    theme: {
      extend: {
        boxShadow: { ...prefixedBoxShadow },
        colors: { ...prefixedThemeableColors, ...prefixedBaseColors },
        fontSize: { ...prefixedFontSize },
        minWidth: { ...minWidth }, // do not prefix
      },
    },
  };

  return config;
};

export const wedgesTW = plugin.withOptions<WedgesOptions>(wedgesPlugin, extendConfig);
export { wedgesPalette } from "./foundation/colors";
