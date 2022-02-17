---
sidebar: auto
---

# 性能优化

## 网络层面

- DNS解析
- TCP连接
- HTTP请求和响应

### HTTP优化概述

- 减少请求次数
- 减少单次请求所花的时间

总的来说也就是资源的压缩与合并，在这里使用webpack来实现。

webpack的优化瓶颈有两个方面：

- 构建过程时间太长
- 打包体积过大

### loader优化-以babel-loader为例：

使用`exclude`和`include`来避免不必要的转义，如第三方库`node_modules`：

```js
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```

开启缓存系统：

```js
loader: 'babel-loader?cacheDirectory'
// 或者
loader: 'babel-loader?cacheDirectory=true'
```

### 第三方库提取

- `externals`可以防止将某些`import`的包打包到`bundle`中，而在运行时再去从外部获取这些依赖。比如第三方库`jQuery`使用CDN引入

webpack.config.js

```js
module.exports = {
  externals: {
    jquery: 'jQuery',
  },
};
```

在代码中`import $ from 'jquery'`依然可以正常运行

- `CommonsChunkPlugin`提取第三方库和代码中的**公共模块**，并将他们打包到一个单独的文件中避免bundle体积过大，也避免重复打包（于webpack v4 版本中移除，新增`SplitChunksPlugin`）

```js
new webpack.optimize.CommonsChunkPlugin(options);
```

- `SplitChunksPlugin`

```js
module.exports = {
  optimization: {
      splitChunks: {
          // options
      }
  },
};
```

- `DllPlugin`，拆分bundles，同时大大提升构建速度。

```js
// 生成一个`manifest.json`文件
new webpack.DllPlugin(options)

// 引用`manifest.json`文件
new webpack.DllReferencePlugin(options)
```

### 构建结果体积压缩

引入可视化工具[webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)，查看各个模块的大小以及依赖关系进行分析

```bash
npm install --save-dev webpack-bundle-analyzer
# 或
yarn add -D webpack-bundle-analyzer
```

- 拆分资源（DllPlugin）
- 删除冗余代码（Tree Shaking基于import/export语法）
- 按需加载（异步路由）
- 代码压缩

### Gzip压缩原理

### 图片的优化

Web图片格式有JPEG/JPG、PNG、WebP、Base64、SVG等

JPEG/JPG关键字：有损压缩、体积小、加载快、不支持透明

PNG关键字：无损压缩、质量高、体积大、支持透明

SVG文本文件、体积小、不失真、兼容性好

Base64文本文件、依赖编码、小图标解决方案

- 雪碧图（CSS Sprites），将小图标合并到一张图中，减少请求次数，Base64是作为雪碧图的补充而存在的。

Base64是一种用于传输8Bit字节码的编码方式，通过对图片进行Base64编码，我们可以直接将编码结果写入HTML或者写入CSS，从而减少HTTP请求的次数。

Base64的应用场景：

- 图片的实际尺寸很小（大家可以观察一下掘金页面的Base64图，几乎没有超过2kb的）
- 图片无法以雪碧图的形式与其它小图结合（合成雪碧图仍是主要的减少HTTP请求的途径，Base64是雪碧图的补充）
- 图片的更新频率非常低（不需我们重复编码和修改文件内容，维护成本较低）


webpack的`url-loader`可以帮助我们进行Base64编码

webp像jpeg图片细节丰富，像png支持透明，像gif支持动态显示图片，兼容性不是很好

### 浏览器的缓存

- 强缓存
- 协商缓存

### 本地缓存

cookie，localstorage，sessionstorage

### CDN内容分发网络

### 服务端渲染SSR

## 渲染层面

- 减少DOM操作
- 异步更新DOM
- 图片懒加载
- 防抖节流

## 性能监控

浏览器的performance、Lighthouse与performance api






















## 定位问题

[参考](https://juejin.cn/post/6904517485349830670)

- chrome的network
- webpack的webpack-bundle-analyzer
- chrome的Performance
- PerformanceNavigationTiming
- 抓包
- 性能测试工具（Pingdom、Load Impact、Free Speed Test等）

## 减少网络时间

- DNS缓存

```html
<meta http-equiv="x-dns-prefetch-control" content="on">
<link rel="dns-prefetch" href="//host_name_to_prefetch.com">
```

- 减少传输的文件大小（文件压缩）
- 加快文件传输速度（静态资源使用CDN内容分发网络）
- 使用 HTTP2

## 减少请求量

- 浏览器缓存（强缓存和协商缓存）

    1. 强缓存
    不会向服务器发送请求，直接从缓存中读取资源，在chrome控制台的network选项中可以看到该请求返回200的状态码;
    ```bash
    Expires:Thu,21 Jan 2017 23:39:02 GMT
    Cache-Control Cache-Control:max-age=3600
    ```
    2. 协商缓存
    向服务器发送请求，服务器会根据这个请求的request header的一些参数来判断是否命中协商缓存，如果命中，则返回304状态码并带上新的response header通知浏览器从缓存中读取资源；
    ```bash
    Last-Modified/If-Modified-Since Last-Modified:Wed,26 Jan 2017 00:35:11 GMT
    Etag If-None-Match
    ```

::: tip 区别
都是从客户端缓存中读取资源；区别是强缓存不会发请求，协商缓存会发请求
:::

- 减少HTTP请求
- 资源压缩合并
- 小图片采用雪碧图，合并成一个大的图片文件
- 图片使用base64编码
- 使用字体图标来代替图片

## 异步加载的方式

1. 动态脚本加载；
2. defer：defer是在HTML解析完之后才会执行，如果是多个，按照加载的顺序依次执行
3. async：async是在加载完之后立即执行，如果是多个，执行顺序和加载顺序无关

## 其他

- 图片延迟加载
- 提取第三方库
- 减少DOM操作
- 使用事件委托
- 降低CSS选择器的复杂性

## 服务端返回十万条数据，前端如何优雅的展示

还可以加上`fragment`

### setTimeout

```js
const renderListBySetTimeout = async () => {
    console.time('列表时间')
    const list = await getList()
    const total = list.length
    const page = 0
    const limit = 200
    const totalPage = Math.ceil(total / limit)

    const render = (page) => {
        if (page >= totalPage) return
        setTimeout(() => {
            for (let i = page * limit; i < page * limit + limit; i++) {
                const item = list[i]
                const div = document.createElement('div')
                div.className = 'sunshine'
                div.innerHTML = `<img src="${item.src}" /><span>${item.text}</span>`
                container.appendChild(div)
            }
            render(page + 1)
        }, 0)
    }
    render(page)
    console.timeEnd('列表时间')
}
```

### requestAnimationFrame

```js
const renderListByrequestAnimationFrame = async () => {
    console.time('列表时间')
    const list = await getList()
    console.log(list)
    const total = list.length
    const page = 0
    const limit = 200
    const totalPage = Math.ceil(total / limit)

    const render = (page) => {
        if (page >= totalPage) return
        // 使用requestAnimationFrame代替setTimeout
        requestAnimationFrame(() => {
            for (let i = page * limit; i < page * limit + limit; i++) {
                const item = list[i]
                const div = document.createElement('div')
                div.className = 'sunshine'
                div.innerHTML = `<img src="${item.src}" /><span>${item.text}</span>`
                container.appendChild(div)
            }
            render(page + 1)
        })
    }
    render(page)
    console.timeEnd('列表时间')
}
```

### requestAnimationFrame+fragment

```js
// requestAnimationFrame + 文档碎片
const renderListByRequestAnimationFrameAndFragment = async () => {
    console.time('列表时间')
    const list = await getList()
    console.log(list)
    const total = list.length
    const page = 0
    const limit = 200
    const totalPage = Math.ceil(total / limit)

    const render = (page) => {
        if (page >= totalPage) return
        requestAnimationFrame(() => {
            // 创建一个文档碎片
            const fragment = document.createDocumentFragment()
            for (let i = page * limit; i < page * limit + limit; i++) {
                const item = list[i]
                const div = document.createElement('div')
                div.className = 'sunshine'
                div.innerHTML = `<img src="${item.src}" /><span>${item.text}</span>`
                // 先塞进文档碎片
                fragment.appendChild(div)
            }
            // 一次性appendChild
            container.appendChild(fragment)
            render(page + 1)
        })
    }
    render(page)
    console.timeEnd('列表时间')
}
```

[demo](https://github.com/luguanrui/more-data-render)

## 页面卡顿如何优化

纯列表展示，Vue项目可以使用`Object.freeze()`冻结接口返回的数据

## chrome浏览器performance

## 前端性能监控

[参考W3C标准](https://github.com/w3c/navigation-timing)

前端性能监控主要使用`Performance`接口，获取当前页面中与性能相关的信息，有三个level:

- [草案](https://w3c.github.io/navigation-timing/)
- [Navigation Timing Level 2](https://www.w3.org/TR/navigation-timing-2/)
- [Navigation Timing Level 1](https://www.w3.org/TR/navigation-timing/)

可以通过`window.performance`来获取

### timing

从输入url到用户可以使用页面的全过程时间统计，会返回一个PerformanceTiming对象，单位均为毫秒

![timing](./images/timestamp-diagram.svg)

按照触发顺序排列所有属性：

- navigationStart:在同一个浏览器上下文中，前一个网页（与当前页面不一定同域）unload 的时间戳，如果无前一个网页 unload ，则与 fetchStart 值相等
- unloadEventStart:前一个网页（与当前页面同域）unload 的时间戳，如果无前一个网页 unload 或者前一个网页与当前页面不同域，则值为 0
- unloadEventEnd:和 unloadEventStart 相对应，返回前一个网页 unload 事件绑定的回调函数执行完毕的时间戳
- redirectStart:第一个 HTTP 重定向发生时的时间。有跳转且是同域名内的重定向才算，否则值为 0
- redirectEnd:最后一个 HTTP 重定向完成时的时间。有跳转且是同域名内的重定向才算，否则值为 0
- fetchStart:浏览器准备好使用 HTTP 请求抓取文档的时间，这发生在检查本地缓存之前
- domainLookupStart:DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等
- domainLookupEnd:DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等
- connectStart:HTTP（TCP） 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等,如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间
- connectEnd:HTTP（TCP） 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等,如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间（这里握手结束，包括安全连接建立完成、SOCKS 授权通过）
- secureConnectionStart:HTTPS 连接开始的时间，如果不是安全连接，则值为 0
- requestStart:HTTP 请求读取真实文档开始的时间（完成建立连接），包括从本地读取缓存,连接错误重连时，这里显示的也是新建立连接的时间
- responseStart:HTTP 开始接收响应的时间（获取到第一个字节），包括从本地读取缓存
- responseEnd:HTTP 响应全部接收完成的时间（获取到最后一个字节），包括从本地读取缓存
- domLoading:开始解析渲染 DOM 树的时间，此时 Document.readyState 变为 loading，并将抛出 readystatechange 相关事件
- domInteractive:完成解析 DOM 树的时间，Document.readyState 变为 interactive，并将抛出 readystatechange 相关事件
- domContentLoadedEventStart:DOM 解析完成后，网页内资源加载开始的时间,文档发生 DOMContentLoaded事件的时间
- domContentLoadedEventEnd:DOM 解析完成后，网页内资源加载完成的时间（如 JS 脚本加载执行完毕），文档的DOMContentLoaded 事件的结束时间
- domComplete:DOM 树解析完成，且资源也准备就绪的时间，Document.readyState 变为 complete，并将抛出 readystatechange 相关事件
- loadEventStart:load 事件发送给文档，也即 load 回调函数开始执行的时间,如果没有绑定 load 事件，值为 0
- loadEventEnd:load 事件的回调函数执行完毕的时间,如果没有绑定 load 事件，值为 0

#### 常用计算

- DNS查询耗时 ：domainLookupEnd - domainLookupStart
- TCP链接耗时 ：connectEnd - connectStart
- request请求耗时 ：responseEnd - responseStart
- 解析dom树耗时 ： domComplete - domInteractive
- 白屏时间 domLoading - fetchStart
- domready时间(用户可操作时间节点) ：domContentLoadedEventEnd - fetchStart
- onload时间(总下载时间) : loadEventEnd - fetchStart

### navigation

旨在告诉开发者当前页面是通过什么方式导航过来的，只有两个属性：`type`，`redirectCount`

- type:标志页面导航类型
    - 0:普通进入，包括：点击链接、在地址栏中输入 URL、表单提交、或者通过除下表中 TYPE_RELOAD 和 TYPE_BACK_FORWARD 的方式初始化脚本。
    - 1:通过刷新进入，包括：浏览器的刷新按钮、快捷键刷新、location.reload()等方法。
    - 2:通过操作历史记录进入，包括：浏览器的前进后退按钮、快捷键操作、history.forward()、history.back()、history.go(num)。
    - 255:其他非以上类型的方式进入。

- redirectCount:表示到达最终页面前，重定向的次数，但是这个接口有同源策略限制，即仅能检测同源的重定向。


### memory

描述内存多少，是在Chrome中添加的一个非标准属性。

- jsHeapSizeLimit: 内存大小限制
- totalJSHeapSize: 可使用的内存
- usedJSHeapSize: JS对象(包括V8引擎内部对象)占用的内存，不能大于totalJSHeapSize，如果大于，有可能出现了内存泄漏
