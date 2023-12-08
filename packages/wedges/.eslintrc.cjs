/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@wedges/eslint-config/eslint-wedges.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
};
