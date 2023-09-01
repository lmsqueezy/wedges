import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/index.ts"],
  format: options.format ?? ["esm"],
  outDir: `dist/${options.format ?? "esm"}`,
  tsconfig: `tsconfig-${options.format ?? "esm"}.json`,
  name: "🍋 wedges",
  outExtension() {
    return {
      js: ".js",
      dts: ".d.ts",
    };
  },
  sourcemap: true,
  clean: true,
  minify: true,
  dts: true,
  banner: { js: '"use client";' },
}));
