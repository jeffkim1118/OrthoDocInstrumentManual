import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  transform:  {
    "\\.js$": "<rootDir>/node_modules/babel-jest"
  }
};

export default config;

