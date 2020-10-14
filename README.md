### code splitting
    作用：在webpack.common.js中配置，可以实现代码分割，例如在dist中自动打包一个新的 vendors~main.js 文件
    ```
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
    ```

