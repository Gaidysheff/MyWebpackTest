module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["prettier", "eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "no-unused-vars": "warn",
    semi: ["error", "always"],
    quotes: ["warn", "single"],
  },
};
