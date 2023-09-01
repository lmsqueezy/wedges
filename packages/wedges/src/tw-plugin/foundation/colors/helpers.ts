export type Colors = Record<string, Record<string, string>>;

const defaultPrefix = "wg" as const;

/**
 * Adds a specified prefix to the first-level keys of a given object.
 * If no prefix is provided, a default one will be used.
 *
 * @param prefix - The prefix to be added to the object's keys (optional).
 * @param obj - The object whose keys will be prefixed.
 * @returns A new object with the keys prefixed.
 *
 * @example
 * const obj = { a: 1, b: 2 };
 * const result = addPrefixToObjKey('prefix_', obj);
 * // result: { 'prefix_a': 1, 'prefix_b': 2 }
 */
export const addPrefixToObjKey = <T extends Record<string, any>>(
  prefix: string | boolean = defaultPrefix,
  obj: T
): Record<string, T[keyof T]> => {
  const result: Record<string, T[keyof T]> = {};
  const p = prefix || defaultPrefix;

  for (const [key, value] of Object.entries(obj)) {
    result[`${p}-${key}`] = value;
  }

  return result;
};
