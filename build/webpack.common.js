const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        // lodash: './src/lodash.js',
        main: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        // publicPath: 'https://cdn.example.com/assets/'
    },
    module: {
        rules: [{
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        limit: 8192,
                    }
                }, ],
            },
            {
                test: /\.(css|less)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: true
                        }
                    },
                    'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(eot|ttf|svg|woff|woff2)$/,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'welcome to webpack demo',
            template: 'index.html'
        }),
        new CleanWebpackPlugin(),
    ]
}