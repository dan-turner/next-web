module.exports = {
  roots: ["<rootDir>"],
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  modulePathIgnorePatterns: ["e2e"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
