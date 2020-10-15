### [code splitting](https://webpack.docschina.org/guides/code-splitting/#entry-points) 
    解决什么问题：解决引入其他库的代码和业务代码打包成一起

    一. 解决其他js代码和业务代码分割（demo在codeSplitting中查看）
        1.新建一个js文件，把它挂载到window对象上，最后对该js进行单独打包（例子在src/lodash.js）
        webapck 共有2中方式可以实现代码分割
        2-1.例如在dist中自动打包一个新的 vendors~main.js 文件，当改变业务代码时，就不用重新加载lodash库
        如何配置：在 webpack.config.js配置如下
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
        2-2.使用符合ECMAScript提案的import()语法 实现code splitting，请看index.js方式二
        
    二. 解决css代码分割
        使用 mini-css-extract-plugin插件

    三. Prefetching 提高网页加载速度 请参考index.js写法

