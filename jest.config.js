export default {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  }
};