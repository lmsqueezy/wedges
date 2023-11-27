import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Prevents output of unnecessary Tailwind classes and merges classes.
 *
 * @param inputs - Any number of class names or class name arrays.
 * @returns A string of merged class names.
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
