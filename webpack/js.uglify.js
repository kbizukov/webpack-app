const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function () {
    return {
        // plugins: [
        //     new webpack.optimize.UglifyJsPlugin({
        //         sourceMap: true,
        //         compress: {
        //             warnings: false
        //         }
        //     })
        // ]
        optimization: {
            // minimize: true,
            minimizer: [
                new UglifyJsPlugin({
                    // test: /\.js($|\?)/i,
                    // include: /\.js$/,
                    sourceMap: true,
                    // warningsFilter: () => false,
                    uglifyOptions: {
                        warnings: 'verbose',
                        ecma: 6,
                        keep_classnames: true,
                        compress: true
                    }
                })
            ]
        }
    };
};