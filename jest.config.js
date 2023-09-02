/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverageFrom: ["packages/**/*.{ts,tsx}"],
  testMatch: ["**/?(*.)+(test).+(ts|tsx|js)"],
};
