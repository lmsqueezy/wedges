/**
 * Constructs a new type by prefixing all keys of a given object type with a string.
 *
 * @template T - The object type to prefix keys of.
 * @template P - The string to prefix keys with.
 * @returns A new object type with all keys prefixed with the given string.
 */
type PrefixKeys<T extends Record<string, any>, P extends string> = {
  [K in keyof T & string as `${P}${K & string}`]: T[K];
};

/**
 * Adds a specified prefix to the first-level keys of a given object.
 *
 * @param obj - The object whose first-level keys will be prefixed.
 * @param prefix - The prefix.
 * @returns A new object with the first-level keys prefixed.
 *
 * @example
 * const obj = { a: 1, b: 2 };
 * const result = addPrefixToObjKey('wedges-', obj);
 * // result: { 'wedges-a': 1, 'wedges-b': 2 }
 */
export const addPrefix = <T extends Record<string, any>, P extends string>(
  obj: T,
  prefix: P
): PrefixKeys<T, P> => {
  const result = {} as PrefixKeys<T, P>;

  for (const key of Object.keys(obj)) {
    result[`${prefix}${key}` as keyof PrefixKeys<T, P>] = obj[key as keyof T];
  }

  return result;
};
