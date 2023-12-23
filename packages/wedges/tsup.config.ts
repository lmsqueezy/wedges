import { defineConfig } from "tsup";

export default defineConfig((options) => {
  // Convert format to string
  const formatString = Array.isArray(options.format)
    ? options.format.join("-")
    : options.format ?? "esm";

  return {
    entry: ["src/index.ts"],
    name: "🍋 wedges",
    tsconfig: `tsconfig-${formatString ?? "esm"}.json`,
    clean: true,
    dts: true,
    format: options.format ?? ["esm"],
    minify: true,
    target: "es2022",
    silent: true,
    sourcemap: true,
    outDir: `dist/${formatString ?? "esm"}`,
    banner: { js: '"use client";' },
  };
});
