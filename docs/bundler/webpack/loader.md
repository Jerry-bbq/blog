# loader

帮助webpack将不同类型的文件转换为webpack可识别的模块

## loader的执行顺序

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

### Raw loader

接受到的content是一个Buffer数据

```js
module.exports = function (content) {
    return content
}
module.exports.raw = true
```

### pitching loader