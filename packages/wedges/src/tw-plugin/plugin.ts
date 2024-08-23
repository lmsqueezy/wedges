/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/**
 * This Tailwind plugin is based and inspired on "tw-colors" and "NextUI".
 *
 * @see https://github.com/L-Blondy/tw-colors
 * @see https://github.com/nextui-org/nextui
 */

import Color from "color";
import deepMerge from "deepmerge";
import omit from "lodash.omit";
import { extendTailwindMerge } from "tailwind-merge";
import plugin from "tailwindcss/plugin.js";

import { boxShadows, fontSizes, minWidth, themableColors, wedgesPalette } from "./foundation";
import { addPrefix, flattenThemeObject, getColorString, isBaseTheme } from "./utils";
import type { ConfigTheme, ConfigThemes, DefaultThemeType, WedgesOptions } from "./utils/types";

const DEFAULT_PREFIX = "wg";

/**
 * twMerge with extended options.
 */
export const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      padding: ["2px", "4px", "6px", "8px", "12px", "14px", "16px"],
    },
  },
});

const resolveConfig = (
  themes: ConfigThemes = {},
  defaultTheme: DefaultThemeType,
  prefix: string
) => {
  const resolved: {
    variants: { name: string; definition: string[] }[];
    utilities: Record<string, Record<string, string>>;
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
    const themeConfig = themes[themeName] ?? {}; // fallback to {} if undefined or null
    const { colors = {}, extend = "light" } = themeConfig;
    const flatColors = flattenThemeObject(colors);

    let cssSelector = `.${themeName},[data-theme="${themeName}"]`;
    const scheme = themeName === "light" || themeName === "dark" ? themeName : extend;

    // if the theme is the default theme, add the selector to the root element
    if (themeName === defaultTheme) {
      cssSelector = `:where(:root)`; // add :where to prevent specificity issues when theme is set on the html element
    }

    resolved.utilities[cssSelector] = { "color-scheme": scheme };

    // Set varaints
    resolved.variants.push({
      name: themeName,
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
        const [h, s, l, defaultAlphaValue = 1] = Color(colorValue).hsl().round().array(); // fallback defaultAlphaValue to 1 if undefined
        const wedgesColorVar = `--${prefix}-${colorName}`;
        const wedgesOpacityVar = `--${prefix}-${colorName}-opacity`;

        // Set the css variable in "@layer utilities"
        resolved.utilities[cssSelector]![wedgesColorVar] = `${h} ${s}% ${l}%`;

        // If an alpha value was provided in the color definition, store it in a css variable
        if (typeof defaultAlphaValue === "number") {
          resolved.utilities[cssSelector]![wedgesOpacityVar] = defaultAlphaValue.toFixed(2);
        }

        // Set the dynamic color in tailwind config theme.colors
        resolved.colors[colorName] = ({ opacityVariable, opacityValue }) =>
          getColorString(wedgesColorVar, wedgesOpacityVar, opacityValue, opacityVariable);
      } catch (error: unknown) {
        if (error instanceof Error) {
          // eslint-disable-next-line no-console
          console.warn("wedges-tw-plugin-error", error.message);
        } else {
          // eslint-disable-next-line no-console
          console.warn("wedges-tw-plugin-error", error);
        }
      }
    });
  });

  return resolved;
};

/**
 * The core plugin function.
 */
const corePlugin = (
  themes: ConfigThemes = {},
  defaultTheme: DefaultThemeType,
  prefix: string,
  fontSmooth: WedgesOptions["fontSmooth"]
) => {
  const resolved = resolveConfig(themes, defaultTheme, prefix);

  const prefixedBaseColors = addPrefix(wedgesPalette, "wg");
  const prefixedBoxShadows = addPrefix(boxShadows, "wg");
  const animationEasing = "cubic-bezier(.2,1,.4,1)";

  return plugin(
    // eslint-disable-next-line @typescript-eslint/unbound-method
    ({ addBase, addUtilities, addVariant, matchUtilities, theme }) => {
      addBase({
        ":root": {
          "--wg-font-smooth--webkit": fontSmooth === "antialiased" ? "antialiased" : "unset",
          "--wg-font-smooth--moz": fontSmooth === "antialiased" ? "grayscale" : "unset",
        },

        html: {
          color: `hsl(var(--${prefix}-foreground))`,
          backgroundColor: `hsl(var(--${prefix}-background))`,
        },
      });

      addUtilities({
        ...resolved.utilities,
        ".wg-antialiased": {
          "-webkit-font-smoothing": "var(--wg-font-smooth--webkit)",
          "-moz-osx-font-smoothing": "var(--wg-font-smooth--moz)",
        },
      });

      // e.g. "[theme-name]:text-2xl"
      resolved.variants.forEach(({ name, definition }) => addVariant(name, definition));

      // Add 'wg-bg' utility
      matchUtilities(
        {
          "wg-bg": (value: any) => {
            if (typeof value === "function") {
              const res = value({ opacityValue: "1", opacityVariable: "1" });
              const match = res.match(/var\(([^)]+)\)/);

              if (match) {
                return {
                  background: value("", ""),
                  [`--${prefix}-background`]: `var(${match[1]})`,
                };
              }
            }

            try {
              const [h, s, l, defaultAlphaValue] = Color(value).hsl().round().array();

              const colorString = getColorString(
                `--${prefix}-background`,
                `--${prefix}-background-opacity`,
                defaultAlphaValue
              );

              return {
                background: colorString,
                [`--${prefix}-background`]: `${h} ${s}% ${l}%`,
              };
            } catch {
              const match = value.match(/var\(([^)]+)\)/);

              return {
                background: value,
                [`--${prefix}-background`]: match ? `var(${match[1]})` : value,
              };
            }
          },
        },
        {
          values: flattenThemeObject(theme("colors")),
          type: ["color"],
        }
      );
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
          minHeight: {
            ...minWidth,
          },
          fontSize: {
            ...fontSizes,
          },
          boxShadow: {
            ...prefixedBoxShadows,
          },
          screens: {
            xs: "480px",
          },
          padding: {
            "2px": "calc(2px - var(--wg-border-width, 0px))",
            "4px": "calc(4px - var(--wg-border-width, 0px))",
            "6px": "calc(6px - var(--wg-border-width, 0px))",
            "8px": "calc(8px - var(--wg-border-width, 0px))",
            "12px": "calc(12px - var(--wg-border-width, 0px))",
            "14px": "14px",
            "16px": "calc(16px - var(--wg-border-width, 0px))",
          },
          outlineOffset: {
            3: "3px",
          },
          textUnderlineOffset: {
            3: "3px",
          },
          animation: {
            "wg-fade-in-up": `fadeInUp 0.3s ${animationEasing}`,
            "wg-fade-in-down": `fadeInDown 0.3s ${animationEasing}`,
            "wg-fade-in-left": `fadeInLeft 0.3s ${animationEasing}`,
            "wg-fade-in-right": `fadeInRight 0.3s ${animationEasing}`,
            "wg-fade-out": `fadeOut 0.15s ${animationEasing}`,
            "wg-line-spinner": "lineSpinner 1.5s ease-in-out infinite both",
          },
          keyframes: {
            fadeInUp: {
              "0%": {
                opacity: "0",
                transform: "translateY(5px) scale(.97)",
              },
              "100%": {
                opacity: "1",
                transform: "translateY(0px) scale(1)",
              },
            },
            fadeInDown: {
              "0%": {
                opacity: "0",
                transform: "translateY(-5px) scale(.97)",
              },
              "100%": {
                opacity: "1",
                transform: "translateY(0px) scale(1)",
              },
            },
            fadeInLeft: {
              "0%": {
                opacity: "0",
                transform: "translateX(5px) scale(.97)",
              },
              "100%": {
                opacity: "1",
                transform: "translateX(0px) scale(1)",
              },
            },
            fadeInRight: {
              "0%": {
                opacity: "0",
                transform: "translateX(-5px) scale(.97)",
              },
              "100%": {
                opacity: "1",
                transform: "translateX(0px) scale(1)",
              },
            },
            fadeOut: {
              "0%": {
                opacity: "1",
                transform: "scale(1)",
              },
              "100%": {
                opacity: "0",
                transform: "scale(.97)",
              },
            },
            lineSpinner: {
              "0%, 25%": {
                strokeDashoffset: "var(--wg-dashoffset-97)",
                transform: "rotate(0)",
              },

              "50%, 75%": {
                strokeDashoffset: "var(--wg-dashoffset-25)",
                transform: "rotate(45deg)",
              },

              "100%": {
                strokeDashoffset: "var(--wg-dashoffset-97)",
                transform: "rotate(360deg)",
              },
            },
          },
        },
      },
    }
  );
};

/**
 * The actual plugin function.
 */
export const wedgesTW = (config: WedgesOptions = {}): ReturnType<typeof plugin> => {
  const {
    defaultExtendTheme = "light",
    defaultTheme = "light",
    prefix: defaultPrefix = DEFAULT_PREFIX,
    fontSmooth = "antialiased",
    themes: themeObject = {},
  } = config;

  const userLightColors = themeObject.light?.colors ?? {};
  const userDarkColors = themeObject.dark?.colors ?? {};
  const otherUserThemes = omit(themeObject, ["light", "dark"]);

  Object.keys(otherUserThemes).forEach((themeName) => {
    const { colors, extend }: ConfigTheme = otherUserThemes[themeName] ?? {};
    const baseTheme = extend && isBaseTheme(extend) ? extend : defaultExtendTheme;

    if (colors && typeof colors === "object") {
      otherUserThemes[themeName]!.colors = deepMerge(themableColors[baseTheme], colors);
    }
  });

  const light: ConfigTheme = { colors: deepMerge(themableColors.light, userLightColors) };
  const dark: ConfigTheme = { colors: deepMerge(themableColors.dark, userDarkColors) };

  const themes = {
    light,
    dark,
    ...otherUserThemes,
  };

  return corePlugin(themes, defaultTheme, defaultPrefix, fontSmooth);
};
