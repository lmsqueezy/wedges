import * as React from "react";
import { clsx, type ClassValue } from "clsx";

import { twMerge } from "../tw-plugin/plugin";

/**
 * Prevents output of unnecessary Tailwind classes and merges classes.
 *
 * @param inputs - Any number of class names or class name arrays.
 * @returns A string of merged class names.
 */

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

/**
 * Returns the initials of a name or word.
 * If the input string is longer than two characters, it returns the first character.
 * If the input string is two characters or less, it returns the input string as is.
 * If the input string is empty, it returns an empty string.
 * If the input contains spaces (e.g. a full name), it returns the first and last initials.
 *
 * @param initial - The input string to get the initials from.
 * @returns The initials of the input string.
 */
export const getInitials = (name: string): string => {
  const trimmedName = name.trim();

  // If the name is empty, a single character, or two characters (already initials)
  if (trimmedName.length === 0 || trimmedName.length === 1 || trimmedName.length === 2) {
    return trimmedName.toUpperCase();
  }

  const nameArray = trimmedName.split(" ");

  if (nameArray.length === 1) {
    return trimmedName.charAt(0).toUpperCase();
  } else if (nameArray.length > 1) {
    const firstName = nameArray[0]?.charAt(0).toUpperCase() ?? "";
    const lastName = nameArray[nameArray.length - 1]?.charAt(0).toUpperCase() ?? "";

    return firstName + lastName;
  }

  return name;
};

/**
 * Calculates a 32-bit integer hash value for the given string using the djb2 algorithm.
 *
 * @param str - The input string to be hashed.
 * @returns A 32-bit integer hash value.
 */
export const stringToHash = (str: string) => {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);

    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32-bit integer
  }

  return hash;
};

/**
 * Returns a string from array based on a given hash number.
 *
 * @param hash - The hash number to generate a color for.
 * @param strings - The array of strings to choose from.
 * @returns The color string generated from the hash.
 */
export const getElementFromHash = (hash: number, strings: string[]) => {
  const index = Math.abs(hash) % strings.length;

  return strings[index];
};

/**
 * Checks if the given element is a React element.
 *
 * @param element - The element to check.
 * @returns Whether the element is a React element.
 */
export const isReactElement = (element: React.ReactNode): element is React.ReactElement => {
  return React.isValidElement(element);
};

/**
 * Typeguard function that checks if the given element is a
 * React element with a className prop.
 *
 * @param element
 * @returns Whether the element is a React element with a className prop.
 */
export const isElementWithClassName = (
  element: React.ReactNode
): element is React.ReactElement<{ className?: string }> => {
  return (
    React.isValidElement(element) &&
    typeof (element as React.ReactElement<{ className?: string }>).props.className === "string"
  );
};

/**
 * Typeguard function that checks if the given element is a
 * React element with a children prop.
 *
 * @param element
 * @returns Whether the element is a React element with a children prop.
 */
export const isElementWithChildren = (
  element: React.ReactNode
): element is React.ReactElement<{ children?: React.ReactNode }> => {
  return (
    React.isValidElement(element) &&
    typeof (element as React.ReactElement<{ children?: React.ReactNode }>).props.children !==
      "undefined"
  );
};
