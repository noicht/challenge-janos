export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^../config/swagger.js$': '<rootDir>/src/tests/__mocks__/swaggerMock.js',
  },
};
