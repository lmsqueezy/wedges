import type { Config } from "tailwindcss";

import { wedgesTW } from "./src";

const config: Config = {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  tailwindFunctions: ["clsx", "cn"],
  plugins: [wedgesTW()],
};

export default config;
