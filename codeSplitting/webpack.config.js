const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash].js',
        chunkFilename:'[name].chunk.js'
    },
    optimization: {
        runtimeChunk: {
            name: "runtime"
        }
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
        ],
    },
    // 方式一实现code splitting
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },
    plugins: [
        new HtmlWebpackPlugin ({
            template: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css'
        })
    ]
}