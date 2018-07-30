const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const pug = require("./webpack/pug");
const devserver = require("./webpack/devserver");
const sass = require("./webpack/sass");
const css = require("./webpack/css");
const extractCSS = require("./webpack/css.extract");
const images = require("./webpack/images");
const uglifyJS = require("./webpack/js.uglify");
const clean = require("./webpack/clean");

const PATHS = {
  source: path.join(__dirname, "source"),
  build: path.join(__dirname, "build")
};

const common = merge([
  {
    entry: {
      index: PATHS.source + "/pages/index/index.js",
      blog: PATHS.source + "/pages/blog/blog.js"
    },
    output: {
      path: PATHS.build,
      filename: "js/[name].js"
    },
    mode: "none",
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        chunks: ["index", "common"],
        template: PATHS.source + "/pages/index/index.pug",
        minify: true
      }),
      new HtmlWebpackPlugin({
        filename: "blog.html",
        chunks: ["blog", "common"],
        template: PATHS.source + "/pages/blog/blog.pug",
        minify: true
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ],
    optimization: {
      splitChunks: {
        name: "common",
        cacheGroups: {
          commons: {
            name: "common",
            chunks: "initial",
            minChunks: 2
          }
        }
      }
    }
  },
  pug(),
  images()
]);

module.exports = function(env) {
  if (env === "production") {
    return merge([
      clean(),
      common,
      extractCSS(),
      uglifyJS()
    ]);
  }
  if (env === "development") {
    return merge([
      // Object.assign
      common,
      devserver(),
      sass(),
      css()
    ]);
  }
};