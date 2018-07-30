module.exports = function() {
  return {
    devServer: {
      // webpack-dev-server settings
      stats: "errors-only",
      port: 9000
    }
  };
};
