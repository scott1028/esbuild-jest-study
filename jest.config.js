module.exports = {
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'esbuild-jest',
  },
  moduleNameMapper: {
    '^MY_LIB/(.*)$': "<rootDir>/src/lib/$1"
  }
};
