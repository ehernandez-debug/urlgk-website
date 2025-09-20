/* eslint-env node */
module.exports = {
  env: { node: true, es2022: true },
  extends: ["eslint:recommended"],
  parserOptions: { ecmaVersion: "latest", sourceType: "script" },
  rules: {
    "no-unused-vars": ["warn", { args: "none", ignoreRestSiblings: true }],
    "no-undef": "error",
  },
};
