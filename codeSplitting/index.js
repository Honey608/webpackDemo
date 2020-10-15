// 方式一 使用SplitChunksPlugin插件配置webpack.config.js 实现code splitting
// import _ from 'lodash';
// console.log(_.join(['webpack', 'demo'],'-'))


// 方式二 使用符合ECMAScript提案的import()语法 实现code splitting
// async function getComponent() {
//       const element = document.createElement('div');
//       const { default: _ } = await import('lodash');
//       element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//       return element;
//    }
//    document.onclick = function(){
//        getComponent().then(component => {
//          document.body.appendChild(component);
//        })
//    }

// 使用 Prefetching 提高网页加载速度 原理就是比如先加载核心代码有空再加载 点击后代码
document.addEventListener('click',()=>{
    import(/* webpackPrefetch: true */'./prefetching').then(({default:fun})=>{
        fun();
    })
})

// 分割 css 代码
import './style.css'