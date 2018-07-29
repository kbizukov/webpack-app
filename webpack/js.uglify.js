const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = function() {
  return {
    plugins: [
      new UglifyJsPlugin({
        sourceMap: true,
        // warningsFilter: () => false,
        uglifyOptions: {
          warnings: "verbose",
          ecma: 6,
          keep_classnames: true,
          compress: true
        }
      })
    ]
  };
};