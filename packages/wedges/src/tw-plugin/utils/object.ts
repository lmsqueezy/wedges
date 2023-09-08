import { flatten } from "flat";

/**
 * Determines if the theme is a base theme
 *
 * @param theme string
 * @returns "light" | "dark
 */
export const isBaseTheme = (theme: string) => theme === "light" || theme === "dark";

/**
 * Removes keys with "-DEFAULT" suffix from the given object and returns a new object.
 *
 * @param obj - The object to remove keys from.
 * @returns A new object with keys ending in "-DEFAULT" removed.
 */
const removeDefaultKeys = <T extends Object>(obj: T) => {
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
