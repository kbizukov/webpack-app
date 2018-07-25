const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function (paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: paths,
                    // loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
                    use: ExtractTextPlugin.extract({
                        publicPath: '../', // чтобы пути к картинкам в файлах стилей были правильными после сборки
                        fallback: "style-loader",
                        use: ["css-loader", "sass-loader"]
                    })
                },
                {
                    test: /\.css$/,
                    include: paths,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader"
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin("./css/[name].css"),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
                canPrint: true
            })
        ]/* ,
        optimization: {
            minimizer: [
                new OptimizeCssAssetsPlugin({
                    assetNameRegExp: /\.css$/g,
                    cssProcessor: require('cssnano'),
                    cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
                    canPrint: true
                })
            ]
        } */
    };
};