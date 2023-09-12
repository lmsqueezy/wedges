/**
 * Returns the corresponding CSS color string based on the provided color and opacity values.
 *
 * @param wedgesColorVar - The CSS variable for the color value.
 * @param wedgesOpacityVar - The CSS variable for the opacity value.
 * @param opacityValue - The opacity value to use. If not provided, the opacity value from the CSS variable will be used.
 * @param opacityVariable - The CSS variable for the opacity value to use if `opacityValue` is not provided.
 * @returns The corresponding CSS color string.
 */
export const getColorString = (
  wedgesColorVar: string,
  wedgesOpacityVar: string,
  opacityValue?: number | string,
  opacityVariable?: string
): string => {
  if (!isNaN(+opacityValue!)) {
    return `hsl(var(${wedgesColorVar}) / ${opacityValue})`;
  }

  if (opacityVariable) {
    return `hsl(var(${wedgesColorVar}) / var(${wedgesOpacityVar}, var(${opacityVariable})))`;
  }

  return `hsl(var(${wedgesColorVar}) / var(${wedgesOpacityVar}, 1))`;
};
