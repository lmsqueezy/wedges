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
  extends: [
    "eslint:recommended",
    "prettier",
    "turbo",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
  ],
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
    tailwindcss: {
      callees: ["cn", "clsx", "cva"],
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
    "tailwind.config.cjs",
    "node_modules/",
    "dist/",
  ],
  rules: {
    "no-console": "warn",
    "no-unused-vars": "off",

    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "off",
  },
};

module.exports = config;
