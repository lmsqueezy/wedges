// @ts-ignore
import { parseColor } from "tailwindcss/lib/util/color";

import { BaseColorKeys, ThemeableColors, baseColors, wedgesPalette } from "../foundation";
import {
  ACCENT_VAR,
  BACKGROUND_VAR,
  ThemeableColorVarKeys,
} from "../foundation/colors/themeableColors";
import { WedgesOptions } from "../plugin";

/**
 * Transforms the input colors object. Each property can be a color string or an object with color scales.
 *
 * Transformation process:
 * - If the color string does not start with "var(--", it attempts to parse the string using the `parseColor` function. If parsed successfully, it transforms them into an RGB string with a placeholder for the alpha value.
 * - If the color string starts with "var(--", it transforms them into an RGB string format with a placeholder for the alpha value, without parsing.
 *
 * Note: This function modifies the input object in-place and returns it with transformed color values.
 *
 * @example
 * const inputColors = {
 *   "--color-var1": "#ff0000",
 *   "--color-var2": "var(--color-var1)",
 * };
 * const result = transformVarColor(inputColors);
 * // Output:
 * // {
 * //   "--color-var1": "rgb(255 0 0 / <alpha-value>)",
 * //   "--color-var2": "rgb(var(--color-var1) / <alpha-value>)",
 * // }
 *
 * @param colors - An object of themeable colors to be transformed. Each key represents a color variable, and the value can be a color string or an object with color scales.
 * @returns The transformed colors object with modified color values.
 */
export const transformVarColor = (colors: ThemeableColors): ThemeableColors => {
  const transformedColors = {} as ThemeableColors;

  for (const key of Object.keys(colors)) {
    const k = key as keyof ThemeableColors;
    let color = colors[k];

    if (typeof color === "string") {
      const parsedColor = parseColor(color);

      if (parsedColor && parsedColor.color) {
        color = `rgb(${parsedColor.color.join(" ")} / <alpha-value>)`;
      } else if (color.startsWith("var(--")) {
        color = `rgb(${color} / <alpha-value>)`;
      }
    }

    transformedColors[k] = color;
  }

  return transformedColors;
};

/**
 * Transforms a set of themeable colors by executing the following steps:
 * 1. Replacing references to base color names with their default values.
 * 2. Parsing the resulting colors to yield an RGB string representation.
 *
 * The function iterates over the properties of the `colors` object, identifying any base color references
 * and replacing them with the actual values from the `baseColors` object. Then, it parses these values (as well as any
 * other direct color values initially found in the `colors` object) to generate a new object with RGB string
 * representations of the colors.
 *
 * @example
 * const inputColors = {
 *   "--wg-color-accent": "red",
 *   "--wg-color-bg": "blue",
 * };
 * const result = transformBaseThemeableColor(inputColors);
 * // Output:
 * // {
 * //   "--wg-color-accent": "255 0 0",
 * //   "--wg-color-bg": "0 0 255",
 * // }
 *
 * @param colors - A record with keys representing themeable color variables and values either pointing to a base color
 *                 reference or an explicit color value. Base color references are replaced with their default values
 *                 from the `baseColors` object and subsequently parsed using the `parseColor` function.
 * @returns A record with the same keys, but with values transformed to their parsed color representation in RGB string format
 *          (e.g., "255 0 0" for red).
 */
export const transformBaseThemeableColor = (colors: Record<ThemeableColorVarKeys, string>) => {
  const transformedColors = {} as Record<ThemeableColorVarKeys, string>;

  for (const key of Object.keys(colors)) {
    let color = colors[key as ThemeableColorVarKeys];

    if (color in baseColors) {
      color = baseColors[color as BaseColorKeys].DEFAULT;
    }

    const parsedColor = parseColor(color);

    if (parsedColor && parsedColor.color) {
      transformedColors[key as ThemeableColorVarKeys] = parsedColor.color.join(" ") || "";
    } else {
      transformedColors[key as ThemeableColorVarKeys] = color;
    }
  }

  return transformedColors;
};

/**
 * Returns an object containing base themeable colors for light and dark themes.
 *
 * This function helps in setting up base themeable colors for light and dark themes
 * based on the user-specified themes or the default palette. It applies transformations
 * to the color values to ensure that they adhere to the expected format.
 *
 * @param themes - Optional plugion options themes object containing custom colors for light and dark themes.
 * @returns An object with separate properties for light and dark themes, each containing a
 *          set of base themeable colors with the respective theme modifications applied.
 */
export const getBaseThemeableColors = (themes?: WedgesOptions["themes"]) => {
  const getThemeColors = (theme?: Partial<ThemeableColors>) => ({
    [ACCENT_VAR]: theme?.accent ?? wedgesPalette.purple.DEFAULT,

    [BACKGROUND_VAR]:
      theme?.background ?? themes?.dark ? wedgesPalette.dark.DEFAULT : wedgesPalette.white.DEFAULT,
  });

  const lightColors = transformBaseThemeableColor(getThemeColors(themes?.light));
  const darkColors = transformBaseThemeableColor(getThemeColors(themes?.dark));

  return { lightColors, darkColors };
};
