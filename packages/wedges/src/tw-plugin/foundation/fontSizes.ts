type FontSizeValue = [
  fontSize: string,
  configuration: {
    lineHeight?: string;
    letterSpacing?: string;
    fontWeight?: string;
  },
];

export type FontSizes = Record<string, FontSizeValue>;

export const fontSizes = {
  xxs: [
    "0.625rem",
    {
      lineHeight: "1rem",
    },
  ],
  xs: [
    "0.75rem",
    {
      lineHeight: "1rem",
    },
  ],
  sm: [
    "0.875rem",
    {
      lineHeight: "1.25rem",
    },
  ],
  base: [
    "1rem",
    {
      lineHeight: "1.5rem",
    },
  ],
  lg: [
    "1.125rem",
    {
      lineHeight: "1.75rem",
    },
  ],
  xl: [
    "1.25rem",
    {
      lineHeight: "1.75rem",
    },
  ],
  "2xl": [
    "1.5rem",
    {
      lineHeight: "2rem",
    },
  ],
  "3xl": [
    "1.875rem",
    {
      lineHeight: "2.25rem",
    },
  ],
  "4xl": [
    "2.25rem",
    {
      lineHeight: "2.5rem",
    },
  ],
  "5xl": [
    "3rem",
    {
      lineHeight: "3.5rem",
      letterSpacing: "-0.075rem",
    },
  ],
  "6xl": [
    "3.75rem",
    {
      lineHeight: "4.5rem",
      letterSpacing: "-0.09375rem",
    },
  ],
  "7xl": [
    "4.5rem",
    {
      lineHeight: "5rem",
      letterSpacing: "-0.1125rem",
    },
  ],
  "8xl": [
    "6rem",
    {
      lineHeight: "6.5rem",
      letterSpacing: "-0.15rem",
    },
  ],
  "9xl": [
    "8rem",
    {
      lineHeight: "8rem",
      letterSpacing: "-0.2rem",
    },
  ],
} satisfies FontSizes;
