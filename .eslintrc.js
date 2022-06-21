module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    es6: true,
  },
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "react/jsx-filename-extension": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
  },
};
