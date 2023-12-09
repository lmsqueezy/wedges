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
type TransformedKeys<T extends Record<string, unknown>> = {
  [K in keyof T as K extends `${infer Prefix}-DEFAULT` ? Prefix : K]: T[K];
};

const removeDefaultKeys = <T extends Record<string, unknown>>(obj: T) => {
  const newObj = {} as Record<string, unknown>;

  for (const key in obj) {
    const newKey = key.endsWith("-DEFAULT") ? key.replace("-DEFAULT", "") : key;
    newObj[newKey] = obj[key];
  }

  return newObj as TransformedKeys<T>;
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
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    flatten(obj, {
      safe: true,
      delimiter: "-",
    }) as Record<string, unknown>
  );
