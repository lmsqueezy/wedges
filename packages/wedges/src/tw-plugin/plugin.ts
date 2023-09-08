/**
 * This plugin is inspired and based on L-Blondy's tw-colors.
 * @see https://github.com/L-Blondy/tw-colors
 */

import Color from "color";
import deepMerge from "deepmerge";
import flatten from "flat";
import omit from "lodash.omit";
import plugin from "tailwindcss/plugin.js";

import {
  ThemeableColors,
  boxShadows,
  fontSizes,
  minWidth,
  themeableColors,
  wedgesPalette,
} from "./foundation";
import { addPrefix } from "./utils";

const DEFAULT_PREFIX = "wg";

/* -------------------------------------------------------------------------- */
/*                                  types.ts                                  */
/* -------------------------------------------------------------------------- */

export type DefaultThemeType = "light" | "dark" | (string & {});

export type WedgesOptions = {
  /**
   * The prefix for the css variables.
   * @default "wg"
   */
  prefix?: string;

  /**
   * The theme definitions.
   */
  themes?: ConfigThemes;
  /**
   * The default theme to use.
   * @default "light"
   */
  defaultTheme?: DefaultThemeType;
  /**
   * The default theme to extend. Available values are "light" and "dark".
   * @default "light"
   */
  defaultExtendTheme?: "light" | "dark";
};

export type ConfigTheme = {
  extend?: "light" | "dark";
  colors?: Partial<ThemeableColors> | Record<string, string | Record<string, string>>;
};

export type ConfigThemes = Record<DefaultThemeType | string, ConfigTheme>;

/* -------------------------------------------------------------------------- */

const resolveConfig = (
  themes: ConfigThemes = {},
  defaultTheme: DefaultThemeType,
  prefix: string
) => {
  const resolved: {
    variants: { name: string; definition: string[] }[];
    utilities: { [selector: string]: Record<string, string> };
    colors: Record<
      string,
      ({
        opacityValue,
        opacityVariable,
      }: {
        opacityValue: string;
        opacityVariable: string;
      }) => string
    >;
  } = {
    variants: [],
    utilities: {},
    colors: {},
  };

  Object.keys(themes).forEach((themeName) => {
    const { colors, extend }: ConfigTheme = themes[themeName] ?? {};
    const flatColors = flattenThemeObject(colors);

    let cssSelector = `.${themeName},[data-theme="${themeName}"]`;
    const scheme = themeName === "light" || themeName === "dark" ? themeName : extend;

    // if the theme is the default theme, add the selector to the root element
    if (themeName === defaultTheme) {
      cssSelector = `:root,${cssSelector}`;
    }

    resolved.utilities[cssSelector] = scheme ? { "color-scheme": scheme } : {};

    // Set varaints
    resolved.variants.push({
      name: themeName,
      //   definition: [`&.${themeName}`, `&[data-theme='${themeName}']`],
      definition: [
        `.${themeName}&`,
        `:is(.${themeName} > &:not([data-theme]))`,
        `:is(.${themeName} &:not(.${themeName} [data-theme]:not(.${themeName}) * ))`,
        `:is(.${themeName}:not(:has([data-theme])) &:not([data-theme]))`, // See the browser support: https://caniuse.com/css-has
        `[data-theme='${themeName}']&`,
        `:is([data-theme='${themeName}'] > &:not([data-theme]))`,
        `:is([data-theme='${themeName}'] &:not([data-theme='${themeName}'] [data-theme]:not([data-theme='${themeName}']) * ))`,
        `:is([data-theme='${themeName}']:not(:has([data-theme])) &:not([data-theme]))`, // See the browser support: https://caniuse.com/css-has
      ],
    });

    /* --------------------------------- Colors --------------------------------- */
    Object.keys(flatColors).forEach((colorName) => {
      const colorValue = flatColors[colorName as keyof typeof flatColors];

      if (!colorValue) {
        return;
      }

      try {
        const [h, s, l, defaultAlphaValue] = Color(colorValue).hsl().round().array();
        const wedgesColorVar = `--${prefix}-${colorName}`;
        const wedgesOpacityVar = `--${prefix}-${colorName}-opacity`;

        // Set the css variable in "@layer utilities"
        resolved.utilities[cssSelector]![wedgesColorVar] = `${h} ${s}% ${l}%`;

        // If an alpha value was provided in the color definition, store it in a css variable
        if (typeof defaultAlphaValue === "number") {
          resolved.utilities[cssSelector]![wedgesOpacityVar] = defaultAlphaValue.toFixed(2);
        }

        // Set the dynamic color in tailwind config theme.colors
        resolved.colors[colorName] = ({ opacityVariable, opacityValue }) => {
          // if the opacity is set  with a slash (e.g. bg-primary/90), use the provided value
          if (!isNaN(+opacityValue)) {
            return `hsl(var(${wedgesColorVar}) / ${opacityValue})`;
          }

          // if no opacityValue was provided (it is not parsable to a number)
          // the cssOpacityVar (opacity defined in the color definition rgb(0, 0, 0, 0.5)) should have the priority
          // over the tw class based opacity(e.g. "bg-opacity-90")
          // This is how tailwind behaves as for v3.2.4
          if (opacityVariable) {
            return `hsl(var(${wedgesColorVar}) / var(${wedgesOpacityVar}, var(${opacityVariable})))`;
          }

          return `hsl(var(${wedgesColorVar}) / var(${wedgesOpacityVar}, 1))`;
        };
      } catch (error: any) {
        // eslint-disable-next-line no-console
        console.warn("wedges-tw-plugin-error", error?.message);
      }
    });
  });

  return resolved;
};

/* -------------------------------------------------------------------------- */
/*                                 Core Plugin                                */
/* -------------------------------------------------------------------------- */
const corePlugin = (themes: ConfigThemes = {}, defaultTheme: DefaultThemeType, prefix: string) => {
  const resolved = resolveConfig(themes, defaultTheme, prefix);

  // Prefix where needed
  const prefixedBaseColors = addPrefix(wedgesPalette, "wg");
  const prefixedBoxShadow = addPrefix(boxShadows, "wg");

  return plugin(
    ({ addBase, addUtilities, addVariant }) => {
      addBase({
        ":root, [data-theme]": {
          color: `hsl(var(--${prefix}-foreground))`,
          backgroundColor: `hsl(var(--${prefix}-background))`,
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
        },
      });

      addUtilities({
        ...resolved.utilities,
      });

      // add the theme as variant e.g. "[theme-name]:text-2xl"
      resolved.variants.forEach(({ name, definition }) => addVariant(name, definition));
    },
    // Extend the Tailwind config
    {
      theme: {
        extend: {
          colors: {
            ...prefixedBaseColors,
            ...resolved.colors,
          },
          minWidth: {
            ...minWidth,
          },
          fontSize: {
            ...fontSizes,
          },
          boxShadow: {
            ...prefixedBoxShadow,
          },
        },
      },
    }
  );
};

/* -------------------------------------------------------------------------- */
/*                                  Wedges TW                                 */
/* -------------------------------------------------------------------------- */
export const wedgesTW = (config: WedgesOptions = {}): ReturnType<typeof plugin> => {
  const {
    themes: themeObject = {},
    defaultTheme = "light",
    defaultExtendTheme = "light",
    prefix: defaultPrefix = DEFAULT_PREFIX,
  } = config;

  const userLightColors = themeObject["light"]?.colors || {};
  const userDarkColors = themeObject["dark"]?.colors || {};
  const otherUserThemes = omit(themeObject, ["light", "dark"]);

  Object.keys(otherUserThemes).forEach((themeName) => {
    const { colors, extend }: ConfigTheme = otherUserThemes[themeName] || {};
    const baseTheme = extend && isBaseTheme(extend) ? extend : defaultExtendTheme;

    if (colors && typeof colors === "object") {
      otherUserThemes[themeName]!.colors = deepMerge(themeableColors[baseTheme], colors);
    }
  });

  const light: ConfigTheme = { colors: deepMerge(themeableColors.light, userLightColors) };
  const dark: ConfigTheme = { colors: deepMerge(themeableColors.dark, userDarkColors) };

  const themes = {
    light,
    dark,
    ...otherUserThemes,
  };

  return corePlugin(themes, defaultTheme, defaultPrefix);
};

/* -------------------------------------------------------------------------- */
/*                               Colors helpers                               */
/* -------------------------------------------------------------------------- */
/**
 * Determines if the theme is a base theme
 *
 * @param theme string
 * @returns "light" | "dark
 */
export const isBaseTheme = (theme: string) => theme === "light" || theme === "dark";

export const removeDefaultKeys = <T extends Object>(obj: T) => {
  const newObj = {};

  for (const key in obj) {
    if (key.endsWith("-DEFAULT")) {
      // @ts-ignore
      newObj[key.replace("-DEFAULT", "")] = obj[key];
      continue;
    }
    // @ts-ignore
    newObj[key] = obj[key];
  }

  return newObj;
};

/**
 *
 * Flatten theme object and remove default keys
 *
 * @param obj theme object
 * @returns object with flattened keys
 */
export const flattenThemeObject = <T>(obj: T) =>
  removeDefaultKeys(
    flatten(obj, {
      safe: true,
      delimiter: "-",
    }) as Object
  );
