import { blue } from "./blue";
import { gray } from "./gray";
import { green } from "./green";
import { orange } from "./orange";
import { pink } from "./pink";
import { purple } from "./purple";
import { red } from "./red";
import { yellow } from "./yellow";

export const palette = {
  white: {
    50: "rgba(255,255,255, 0.05)",
    100: "rgba(255,255,255, 0.1)",
    200: "rgba(255,255,255, 0.2)",
    300: "rgba(255,255,255, 0.3)",
    400: "rgba(255,255,255, 0.4)",
    500: "rgba(255,255,255, 0.5)",
    600: "rgba(255,255,255, 0.6)",
    700: "rgba(255,255,255, 0.8)",
    800: "rgba(255,255,255, 0.9)",
    900: "#FFFFFF",
    DEFAULT: "#FFFFFF",
  },
  black: {
    DEFAULT: "#000000",
  },
  blue: blue,
  gray: gray,
  green: green,
  orange: orange,
  pink: pink,
  purple: purple,
  red: red,
  yellow: yellow,
} as const;

export type WedgesPalette = typeof palette;
export type WedgesPaletteKeys = keyof WedgesPalette;
export type PrefixedPaletteKeys = {
  [K in keyof WedgesPalette as `wg-${string & K}`]: WedgesPalette[K];
};
