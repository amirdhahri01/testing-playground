import type { Config } from "@jest/types";

const baseDir = "<rootDir>/src/app/testing_styles";
const baseTestDir = "<rootDir>/src/test/testing_styles";

const config : Config.InitialOptions = {
  preset:"ts-jest",
  testEnvironment : "node",
  verbose : true,
  collectCoverage: true,
  collectCoverageFrom : [
    `${baseDir}/**/*.ts`, 
  ],
  testMatch : [
    `${baseTestDir}/**/*.ts`, 
  ]
}

export default config