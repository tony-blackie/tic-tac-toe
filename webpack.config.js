var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    context: path.join(__dirname, 'src'),
    entry: {
        app: './app/app.jsx',
        index: './index.css'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,    // turn off default running inside the iframe
        stats: 'errors-only' //remove built assets from console output
    },
    plugins: [
        new htmlWebpackPlugin(
            {
                template: path.join(__dirname, 'src', 'index.html'),
                inject: 'body', //this is default, but can be injected elsewhere
                hash: true, //add random hash to every bundle on rebuild
                filename: 'index.html',
                chunks: ['app']
            }
        ),
        new ExtractTextPlugin("[name].css")
    ]
};