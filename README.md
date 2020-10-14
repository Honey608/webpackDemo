### code splitting
    解决什么问题：解决引入其他库的代码和业务代码打包成一起
    三种解决方式实现其他代码和业务代码分割
    1.新建一个js文件，把它挂载到window对象上，最后对该js进行单独打包（例子在src/lodash.js）
    webapck 共有2中方式可以实现代码分割
    2-1.例如在dist中自动打包一个新的 vendors~main.js 文件，当改变业务代码时，就不用重新加载lodash库
    如何配置：例如可以在该demo中的 webpack.common.js配置如下
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
