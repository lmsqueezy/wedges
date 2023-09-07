import type { Config } from "tailwindcss";

// import { wedgesTW } from "./src/tw-plugin/plugin";

const config: Config = {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  tailwindFunctions: ["clsx", "cn"],
  //   plugins: [wedgesTW],
};

export default config;
