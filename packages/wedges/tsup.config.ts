import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/index.ts"],
  name: "🍋 wedges",
  tsconfig: `tsconfig-${options.format ?? "esm"}.json`,
  clean: true,
  dts: true,
  format: options.format ?? ["esm"],
  minify: true,
  silent: true,
  sourcemap: true,
  outDir: `dist/${options.format ?? "esm"}`,
  banner: { js: '"use client";' },
  outExtension() {
    return {
      js: ".js",
      dts: ".d.ts",
    };
  },
}));
