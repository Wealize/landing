module.exports = {
  preset: 'ts-jest',
  coverageProvider: 'v8',
  collectCoverage: true,
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  coverageDirectory: 'coverage',
  coverageReporters: ['json-summary', 'html'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!src/components/Global.tsx',
    '!src/components/icons/**/*.tsx',
    '!src/components/layout/**/*.{ts,tsx}',
    '!src/data/**/*.ts',
    '!src/utils/testHook.tsx',
    '!src/interfaces/**/*.ts',
    '!src/styles/**/*.ts',
    '!src/pages/**/*.{ts,tsx}',
    '!__tests__/**'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/e2e',
    '<rootDir>/__tests__/__mocks__',
    '<rootDir>/node_modules/'
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer']
}
