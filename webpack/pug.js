module.exports = function () {
    return {
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
};