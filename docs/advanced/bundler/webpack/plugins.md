# plugin

## plugin的作用

通过插件我们可以扩展webpack，加入自定义的构建行为，使webpack可以执行更广泛的任务，拥有更强的额构建能力

## plugin工作原理

webpack在编译代码过程中，会触发一系列`Tapable`的钩子事件，插件所做的，就是找到对应的钩子，在上面挂上自己的任务，也就是注册事件，这样，当webpack构建的时候，插件注册的事件就会随着钩子的触发而执行

## 如何注册钩子

- tap：可以注册同步和异步钩子
- tapAsync：回调方式注册异步钩子
- tapPromise：Promise方式注册异步钩子

## 第一个plugin

```js
/**
 * 1. webpack加载webpack.config.js中所有配置，此时就会new TestPlugin()，执行插件的constructor
 * 2. webpack创建 compiler 对象
 * 3. 遍历所有 plugins 中插件，调用插件的apply方法
 * 4. 执行剩下编译流程（触发各个hooks事件）
 */
class TestPlugin {
    constructor() {
        console.log('TestPlugin constructor')
    }
    apply(compiler) {
        console.log('TestPlugin apply')
    }
}

module.exports = TestPlugin
```

## 注册hooks事件

```js
/**
 * 1. webpack加载webpack.config.js中所有配置，此时就会new TestPlugin()，执行插件的constructor
 * 2. webpack创建 compiler 对象
 * 3. 遍历所有 plugins 中插件，调用插件的apply方法
 * 4. 执行剩下编译流程（触发各个hooks事件）
 */
class TestPlugin {
    constructor() {
        console.log('TestPlugin constructor')
    }
    apply(compiler) {
        console.log('TestPlugin apply')

        // 由文档可知，environment 是同步钩子，所以需要使用tap注册
        compiler.hooks.environment.tap('TestPlugin', () => {
            console.log('TestPlugin environment')
        })

        // emit 是异步串行钩子
        compiler.hooks.emit.tap('TestPlugin', (compilation) => {
            console.log('TestPlugin emit 111')
        })

        compiler.hooks.emit.tapAsync('TestPlugin', (compilation, callback) => {
            setTimeout(() => {
                console.log('TestPlugin emit 222')
                callback()
            }, 2000)
        })

        compiler.hooks.emit.tapPromise('TestPlugin', (compilation) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log('TestPlugin emit 333')
                    resolve()
                }, 1000)
            })
        })

        // make是异步并行钩子
        compiler.hooks.make.tapAsync('TestPlugin', (compilation, callback) => {
            setTimeout(() => {
                console.log('TestPlugin make 222')
                callback()
            }, 3000)
        })

    }
}

module.exports = TestPlugin
```

## compiler和compilation对象

通过如下命令来调试查看

```bash
node --inspect-brc ./node_modules/webpack-cli/bin/cli.js
```

文件中打断点`debugger`

## 自定义BannerWebpackPlugin

思路：

- 需要在打包输出前，添加注释，需要使用`compiler.hooks.emit`钩子，它是打包输出前触发的
- 如何获取打包输出的资源，`compilation.assets`可以获取所有即将输出的资源文件

实现：

```js
class BannerWebpackPlugin {
    constructor(options = {}) {
        this.options = options
    }
    apply(compiler) {
        // debugger
        // 需要处理的文件
        const extensions = ['js', 'css']
        // emit是异步串行钩子
        compiler.hooks.emit.tap('BannerWebpackPlugin', (compilation) => {
            // 1. compilation.assets包含所以即将输出的资源
            // 2. 通过过滤只保留需要处理的js和css资源
            const assets = Object.keys(compilation.assets).filter(path => {
                const splitted = path.split(".")
                return extensions.includes(splitted[splitted.length - 1])
            })

            const prefix = `/*
* Author ${this.options.author}
*/`

            // 3. 遍历剩下资源添加注释
            assets.forEach(asset => {
                // 获取原来内容
                const source = compilation.assets[asset].source()
                // 拼接上注释
                const content= prefix + source
                // 修改资源
                compilation.assets[asset] = {
                    source() {
                        return content
                    },
                    size() {
                        return content.length
                    }
                }
            })
        })
    }
}

module.exports = BannerWebpackPlugin
```

## 自定义CleanWebpackPlugin

思路：

- 如何在打包输出前执行？需要使用`compiler.hooks.emit`钩子，它是打包输出前触发的
- 如何清空上次打包内容？
  - 获取打包输出目录，通过`compiler`对象
  - 通过文件操作清空内容：通过`compiler.outputFileSystem`操作文件

实现：

```js
class CleanWebpackPlugin {
    apply(compiler) {
        // 获取操作对象
        const fs = compiler.outputFileSystem
        // 获取输出文件目录
        const outputPath = compiler.options.output.path
        // emit是异步串行钩子
        compiler.hooks.emit.tap('CleanWebpackPlugin', (compilation) => {
            // 删除目录所有文件
            this.removeFiles(fs, outputPath)
        })
    }
    removeFiles(fs, filePath) {
        // 读取当前目录下所有文件
        const files = fs.readdirSync(filePath)
        console.log(files)
        // 遍历文件，删除
        files.forEach(file => {
            // 判断是文件夹还是文件
            const path = `${filePath}/${file}`
            const fileStat = fs.statSync(path)
            if (fileStat.isDirectory()) {
                // 文件夹
                this.removeFiles(fs, path)
            } else {
                // 文件
                fs.unlinkSync(path)
            }
        })
    }
}

module.exports = CleanWebpackPlugin
```