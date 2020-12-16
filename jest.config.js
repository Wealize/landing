module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/e2e',
    '<rootDir>/__tests__/__mocks__',
    '<rootDir>/node_modules/'
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTest.ts', 'jest-canvas-mock'],
  snapshotSerializers: ['enzyme-to-json/serializer']
}
