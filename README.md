### code splitting
    解决什么问题：例如在index.js中 import _ from 'lodash', 后直接使用,打包的mian.js会包含lodash库所有代码
    使用splitting后，可以实现代码分割，例如在dist中自动打包一个新的 vendors~main.js 文件，当改变业务代码时，就不用重新加载lodash库
    如何配置：例如可以在该demo中的 webpack.common.js配置如下
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }

