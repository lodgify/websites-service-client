module.exports = {
  automock: false,
  clearMocks: false,
  verbose: false,
  bail: true,
  rootDir: '../../',
  cacheDirectory: '<rootDir>/tools/jest/tmp/',
  collectCoverageFrom: [
    '!**/*+(eslint-config)*/**',
    '!**/index.js',
    '!**/jest*',
    '!**/lib/**',
    '!**/node_modules/**',
    '!**/tools/**',
    '**/*.js',
  ],
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  roots: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/tools/jest/jest.framework-setup.js'],
  // https://github.com/facebook/jest/issues/3285
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  modulePathIgnorePatterns: ['<rootDir>/lib'],
};
