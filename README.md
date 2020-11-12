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

### [Webpack 与浏览器缓存( Caching )](https://webpack.docschina.org/guides/caching/)
    代码不变，文件名不变。代码改变，文件名就改变。来实现浏览器，是否需要从服务器重新加载文件
    配置如下：添加一个contenthash 这样的占位符，
    output: {
        filename: '[name].[contenthash].js',
    }
    解决老版本内容不变，文件名变化，需要额外配置如下内容,打包后最终会单独提取用于描述文件之间的runtime.xxx.js文件
    optimization: {
        runtimeChunk: {
            name: "runtime"
        }
    }

### [Shimming 预置全局变量](https://webpack.docschina.org/guides/shimming/)
    如下配置 就可以在全局使用lodash,甚至只使用lodash中join一个方法,还有可以解决this指向，等问题
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
            _: 'lodash',
            join: ['lodash', 'join']
        }),
    ]
###  [library 的打包](https://webpack.docschina.org/guides/author-libraries/#authoring-a-library)
    基本配置如下：
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'labrary.js',
        library: 'root',     // 可以通过script src引用
        libraryTarget: 'umd' // 支持umd引用
    },
    externals: {
        lodash: 'lodash' // 自己库中如果使用其他库 别打包一起
    }

### [PWA](https://webpack.docschina.org/guides/progressive-web-application/#root)
    作用：在断网的情况下依然可以浏览页面
    基本配置如下：
    安装 workbox-webpack-plugin 插件
    plugins: [
        new WorkBoxWebpackPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ]
    index.js
    if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
    });
}

### [打包TypeScript](https://webpack.docschina.org/guides/typescript/)

### [多页面打包配置](https://github.com/jantimon/html-webpack-plugin)
    使用html-webpack-plugin的配置进行多页面配置
    配置如下：
    根据入口文件个数自动生成 多个index.html文件
    Object.keys(config.entry).forEach(item=>{
        plugins.push(
                new htmlWebpackPlugin({
                template: 'src/index.html',
                filename: `${item}.html`,
                chunks: ['runtime', 'vendors', item]
            })
        )
    })

### [实现一个loade](https://webpack.docschina.org/api/loaders/#examples)