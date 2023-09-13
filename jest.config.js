/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  collectCoverageFrom: [
    "packages/**/*.tsx",
    "!packages/**/icons/**/*", // Exclude files in the 'icons' folder
  ],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)+(test).+(ts|tsx|js)"],
  verbose: true,
};
