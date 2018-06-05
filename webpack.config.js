const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: {
        'index': PATHS.source + '/pages/index/index.js',
        'blog': PATHS.source + '/pages/blog/blog.js'
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            // title: 'Webpack app'
            // template: PATHS.source + '/index.pug'
            filename: 'index.html',
            chunks: ['index'],
            template: PATHS.source + '/pages/index/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            chunks: ['blog'],
            template: PATHS.source + '/pages/blog/blog.pug'
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true // расставить отступы и переносы строк
                }
            }
        ]
    }
};