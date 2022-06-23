module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx", ".jsx"],
      },
    ],
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["arrow-function"],
        unnamedComponents: ["arrow-function"],
      },
    ],
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
  },
};
