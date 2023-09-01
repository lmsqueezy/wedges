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

export * from "./helpers";

const ColorScale = [
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

const DarkColorScale = ["0", "1", "2", "DEFAULT"] as const;

export type ColorScale = (typeof ColorScale)[number];
export type DarkColorScale = (typeof DarkColorScale)[number];
export type ColorRecord = Record<ColorScale, string>;
export type DarkColorRecord = Record<DarkColorScale, string>;

export type ColorValue = Partial<ColorRecord> | Partial<DarkColorRecord>;

export const colors = {
  "wg-blue": blue,
  "wg-dark": dark,
  "wg-gray": gray,
  "wg-green": green,
  "wg-orange": orange,
  "wg-pink": pink,
  "wg-purple": purple,
  "wg-red": red,
  "wg-white": white,
  "wg-yellow": yellow,
} as const;

export type ColorKey = keyof typeof colors;
export type Colors = Partial<Record<ColorKey, ColorValue>>;
