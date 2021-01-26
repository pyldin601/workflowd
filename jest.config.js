module.exports = {
  collectCoverageFrom: ['**/*.?(m)[jt]s?(x)'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['mjs', 'ts', 'tsx', 'js', 'jsx', 'json'],
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  setupFiles: [],
  setupFilesAfterEnv: [],
  testMatch: ['**/?(*.)+(spec|test).?(m)[jt]s?(x)'],
  testPathIgnorePatterns: ['/.git/', '<rootDir>/dist/', '/node_modules/'],
  testEnvironmentOptions: {
    // Allow JSDOM to load images etc to get their params
    resources: 'usable',
  },
}
