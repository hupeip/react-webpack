const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: './src/main.js',
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:4001',
        './src/main.js'
    ],
    output: {
        path: 'public',
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.less/, loader: 'style!css!less'},
        ]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
           template: path.join(__dirname,'./src/index.html'),
           hash:false
       }),
    ]
}
