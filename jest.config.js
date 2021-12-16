/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    '@/__tests__/(.*)': '<rootDir>/__tests__/$1',
    '@/(.*)': '<rootDir>/src/$1'
  },
  coverageThreshold: {
    global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
    },
  },
  coverageDirectory: "__tests__/coverage",
};
