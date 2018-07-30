const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = function() {
  return {
    plugins: [
      new StyleLintPlugin({
        confgFile: "./.stylelintrc"
      })
    ]
  };
};
