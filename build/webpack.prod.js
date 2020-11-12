const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const WorkBoxWebpackPlugin = require('workbox-webpack-plugin');

const prodConfig = {
    mode: "production",
    devtool: "source-map",
    plugins: [
        new WorkBoxWebpackPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)