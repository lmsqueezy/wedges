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
};

export type WedgesPalette = typeof palette;
export type WedgesPaletteKeys = keyof WedgesPalette;
