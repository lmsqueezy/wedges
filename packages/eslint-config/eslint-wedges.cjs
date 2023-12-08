const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  env: {
    browser: false,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier", "turbo", "plugin:jsx-a11y/recommended"],
  plugins: ["jsx-a11y"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    ".*.cjs",
    "node_modules/",
    "dist/",
  ],
  rules: {
    "no-console": "warn",
  },
};

module.exports = config;
