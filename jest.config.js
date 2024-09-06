global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

module.exports = {
  modulePaths: ["<rootDir>/src", "node_modules"],
  moduleNameMapper: {
    "^lodash-es$": "lodash",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mock__/imgMock.ts",
    'd3': '<rootDir>/node_modules/d3/dist/d3.min.js',
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: "jsdom",
  snapshotSerializers: ["@emotion/jest/serializer"],
  "transformIgnorePatterns": [],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          target: "es2021",
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
};
