export const ACCENT_VAR = "--wg-color-accent";
export const BACKGROUND_VAR = "--wg-color-background";

export const themeableColors = {
  accent: `var(${ACCENT_VAR})`,
  background: `var(${BACKGROUND_VAR})`,
};

export const themeableColorVars = [ACCENT_VAR] as const;
export type ThemeableColorVarKeys = (typeof themeableColorVars)[number];
