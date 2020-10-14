const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
// 1.在命令行中运行 webpack  2.在node中运行 webpack  
const complier = webpack(config);

const app = express();
app.use(webpackDevMiddleware(complier,{
    // publicPath:config.output.publicPath
}))

app.listen(3000,()=>{
    console.log('server is running')
})