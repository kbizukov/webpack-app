module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: "plugin:prettier/recommended",
  parserOptions: {
    sourceType: "module"
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error"
  },
  globals: {
    $: true,
    jQuery: true
  }
};
