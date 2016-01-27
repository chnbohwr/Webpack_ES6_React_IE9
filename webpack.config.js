module.exports = {
    entry: ['es6-shim', 'es5-shim', './src/main.js'],
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },devtool: 'source-map'
};