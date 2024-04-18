const config = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@domain/(.*)': '<rootDir>/src/domain/$1',
    '^@global/(.*)': '<rootDir>/src/global/$1',
    '^@presentation/(.*)': '<rootDir>/src/presentation/$1'
  },
};


module.exports = config;