# loader

帮助webpack将不同类型的文件转换为webpack可识别的模块

## loader的执行顺序

- [loaders](https://webpack.docschina.org/concepts/loaders)

1. 分类

- pre：前置loader
- normal：普通loader
- inline：内联loader
- post：后置loader

2. 执行顺序

- 4类loader的执行顺序：pre->normal->inline->post
- 相同优先级的loader执行顺序：从右到左，从下到上

可以通过`enforce`定义顺序

```js
module: {
    rules: [
        {
            enforce: 'pre',
            test: /\.js/,
            loader: 'loader1'
        },
        {
            test: /\.js/,
            loader: 'loader2'
        },
        {
            enforce: 'post',
            test: /\.js/,
            loader: 'loader3'
        }
    ]
}
```

3. 使用loader的方式

- 配置方式：在`webpack.config.js`文件中指定loader（pre、normal、post loader）
- 内联方式：在每个`import`语句中显示指定loader（inline loader）

4. inline loader

用法：`import Styles from 'style-loader!css-loader?modules!./style.css'`

含义：

- 使用`css-loader`和`style-loader`处理`style.css`
- 通过`!`将资源中的loader分开

`inline loader`可以通过添加不同的前缀，跳过其他类型的loader

- `!`跳过normal loader

`import Styles from '!style-loader!css-loader?modules!./style.css'`

- `!!`跳过pre、normal和post loader

`import Styles from '!!style-loader!css-loader?modules!./style.css'`

## 开发一个loader

```js
module.exports = function (content) {
    console.log(content)
    return content
}
```

## loader的分类

- [分类](https://webpack.docschina.org/api/loaders/#synchronous-loaders)

### 同步loader

```js
module.exports = function (content, map, meta) {
    return content
}
```

`this.callback`方法更灵活，因为它允许传递等多个参数，而不仅仅是`content`

```js
module.exports = function (content, map, meta) {
    /**
     * 第一个参数：err 代表是否有错误
     * 第二个参数：content 处理后的内容
     * 第三个参数：source-map 继续传递source-map，不让source-map中断
     * 第四个参数：meta 给下一个loader传递参数
     */
    this.callback(null, content, map, meta)
    return // 当调用callback()函数时，总是返回 undefined
}
```

### 异步loader

对于异步 loader，使用 this.async 来获取 callback 函数

```js
module.exports = function (content, map, meta) {
  var callback = this.async();
  someAsyncOperation(content, function (err, result) {
    if (err) return callback(err);
    callback(null, result, map, meta);
  });
};
```

### Raw loader

默认情况下，资源文件会被转化为 UTF-8 字符串，然后传给 loader。通过设置 raw 为 true，loader 可以接收原始的 Buffer。每一个 loader 都可以用 String 或者 Buffer 的形式传递它的处理结果。complier 将会把它们在 loader 之间相互转换。

```js
module.exports = function (content) {
    return content
}
module.exports.raw = true
```

### pitching loader

loader 总是 从右到左被调用。有些情况下，loader 只关心 request 后面的 元数据(metadata)，并且忽略前一个 loader 的结果。在实际（从右到左）执行 loader 之前，会先 从左到右 调用 loader 上的 pitch 方法。

## loader api

- [context](https://webpack.docschina.org/api/loaders/#the-loader-context)

## 自定义clean-log-loader

```js
module.exports = function(content) {
    // 清除文件内容中的console.log(xx)
    return content.replace(/console\.log\(.*\);?/g, '')
}
```

```js
// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: './loaders/clean-log-loader.js'
            },
        ]
    },
}
```

## 自定义banner-loader

schema.json

```json
{
    "type": "object",
    "properties": {
        "author": {
            "type": "string"
        }
    },
    "additionalProperties": false
}
```

- `"additionalProperties": false`：除了定义的`author`字段，添加了其他的多余字段会报错

```js
// banner-loader.js
const schema = require('./schema.json')

module.exports = function (content) {
    // 添加作者信息
    const options = this.getOptions(schema)
    const prefix = `
    /**
     * Author: ${options.author}
     */
    `
    return prefix + content
}
```

```js
// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: './loaders/banner-loader',
                options: {
                    author: 'Jerry'
                }
            },
        ]
    },
}
```

## 自定义babel-loader

schema.json

```json
{
    "type": "object",
    "properties": {
        "presets": {
            "type": "array"
        }
    },
    "additionalProperties": true
}
```

```js
const babel = require('@babel/core')
const schema = require('./schema.json')

module.exports = function(content) {
    // 异步loader
    const callback = this.async()
    const options = this.getOptions(schema)
    
    // 使用babel对代码进行编译
    babel.transform(content, options, function(err, result) {
        if (err) {
            callback(err)
        } else {
            callback(null, result.code)
        }
    })
}
```


```js
// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: './loaders/babel-loader',
                options: {
                    presets: ["@babel/preset-env"]
                }
            },
        ]
    },
}
```

## 自定义file-loader

- 借助`loader-utils`

```js
const loaderUtils = require('loader-utils')

module.exports = function (content) {
    // 1. 根据文件内容生成带hash值文件名
    const interpolateName = loaderUtils.interpolateName(this, '[hash].[ext][query]', {
        content
    })
    console.log(interpolateName)
    // 2. 将文件返回
    this.emitFile(interpolateName, content)
    // 3. 返回 module.exports = "文件路径（文件名）"
    return `module.exports = "${interpolateName}"`
}

// 需要处理图片、字体等文件。它们都是buffer数据
module.exports.raw = true
```

```js
// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: './loaders/file-loader',
                type: 'javascript/auto' // 阻止webpack默认处理图片资源，只使用file-loader处理
            }
        ]
    },
}
```

## 自定义style-loader

```js
module.exports.pitch = function (remainingRequest) {
    // remainingRequest 剩下还需要处理的loader
    // console.log(remainingRequest)
    // 1. 将 remainingRequest 中的绝对路径改成相对路径（因为后面只能使用相对路径）,
    // 然后，返回一个相对路径
    let relativePath = remainingRequest.split('!').map(absolutePath => {
        return this.utils.contextify(this.context, absolutePath)
    }).join('!')

    // console.log(relativePath)

    // 2. 引入css-loader处理后的资源
    // 3. 创建style，将内容插入页面中农生效
    const script = `
    import style from '!!${relativePath}'
    const styleEl = document.createElement('style')
    styleEl.innerHTML = style
    document.head.appendChild(styleEl)
    `
    // 终止后面loader执行
    return script

}
```

```js
// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['./loaders/style-loader', 'css-loader']
            }
        ]
    },
}
```

## 学习

可以多学习loader的源码