import { blue } from "./blue";
import { dark } from "./dark";
import { gray } from "./gray";
import { green } from "./green";
import { orange } from "./orange";
import { pink } from "./pink";
import { purple } from "./purple";
import { red } from "./red";
import { white } from "./white";
import { yellow } from "./yellow";
import { themeableColors } from "./themeableColors";

const baseColors = {
  blue: blue,
  dark: dark,
  gray: gray,
  green: green,
  orange: orange,
  pink: pink,
  purple: purple,
  red: red,
  white: white,
  yellow: yellow,
};

const FULL_COLOR_SCALE = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "DEFAULT",
] as const;

const SMALL_COLOR_SCALE = ["0", "1", "2", "DEFAULT"] as const;

type FullColorScale = (typeof FULL_COLOR_SCALE)[number];
type SmallColorScale = (typeof SMALL_COLOR_SCALE)[number];

type ColorScale<K extends WedgesPaletteKeys> = K extends "dark"
  ? Record<SmallColorScale, string> | string
  : Record<FullColorScale, string> | string;

type ThemeableColorKeys = [keyof typeof themeableColors];
type ThemeableColors = Record<ThemeableColorKeys[number], string>;

type ColorOptions = Record<ThemeableColorKeys[number], BaseColorKeys | (string & {})>;

type BaseColorKeys = keyof typeof baseColors;
type BaseColors = { [K in BaseColorKeys]: ColorScale<K> };

type WedgesPalette = BaseColors & ThemeableColors;
type WedgesPaletteKeys = keyof WedgesPalette;

const wedgesPalette = { ...baseColors, ...themeableColors } satisfies WedgesPalette;

export {
  baseColors,
  themeableColors,
  wedgesPalette,
  type ThemeableColorKeys,
  type ThemeableColors,
  type BaseColors,
  type BaseColorKeys,
  type WedgesPalette,
  type WedgesPaletteKeys,
  type ColorScale,
  type ColorOptions,
};
