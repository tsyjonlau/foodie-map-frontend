module.exports = {
    automock: false,
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules'],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/mocks/fileMock.js',
      '\\.(css|less)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: 'jsdom',
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest",
    }
  };