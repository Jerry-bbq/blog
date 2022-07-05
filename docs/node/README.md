# node

nodejs是一个能够在服务器端运行JavaScript的开放源代码、跨平台Javascript运行环境

用途：

- web服务于api，比如rest
- 实时多人游戏
- 后端的额web服务，例如跨域、服务端的请求
- 基于web的应用
- 多客户端的通信，比如即时通讯

## 简单命令

```bash
dir
cd 
ll
ls
mkdir
touch
clear
```

## 线程和进程

### 进程

- 进程负责为程序的运行提供必备的环境
- 进程就相当于工厂中的车间

### 线程

- 线程是计算机中的最小的计算单位，负责执行进程中的程序
- 线程就相当于是工厂中的工人

- 单线程，一个人干一个活
  - JS是单线程
- 多线程，多个人干一个活

## commonjs规范

- 模块引用
- 模块定义
- 模块表示

```js
// module1.js，导出模块
exports.a = 1
exports.arr = [1, 2, 3]
exports.fun = function test () { }
exports.obj = { name: 'module1' }

// module2.js，引入模块
const mod = require('./module1.js')
console.log(mod) 
/*
{
  a: 1,
  arr: [ 1, 2, 3 ],
  fun: [Function: test],
  obj: { name: 'module1' }
}
*/
```

nodejs的模块中的代码实际上都是包含在如下函数中执行的：

```js
function (exports, require, module, __filename, __dirname) {
    // ...
}

// 可通过方法 console.log(arguments.callee+'') 来验证
```

- 模块中定义的变量都是局部变量
- 这也是`exports`,`require`,`module`,`__filename`,`__dirname`可以直接使用的原因
  - `exports`：该对象用来将变量或函数暴露到外部
  - `require`：函数，用来引入外部模块
  - `exports`与`module.exports`同一个作用，可以验证 `console.log(exports === module.exports); // true`
  - `__filename`：当前模块的完整路径，`/Users/xx/demo/node/module2.js`
  - `__dirname`：当前模块所在文件夹的完整路径，`/Users/xx/demo/node`


::: tip 提示

- `exports`只能通过`exports.变量名`向外暴露内部变量
- `module.exports`既可以通过`module.exports.变量名`的形式，也可以通过直接赋值

:::

```js
exports.xxx = 1

module.exports.xxx = 1
module.exports = {
    xxx: 1
}

// 可通过一个案例来思考为什么
var obj = new Object()
obj.name = 'test1'
var obj2 = obj
obj2.name = 'test2'   // 改变的是堆内存的对象

obj2 = null // 改变的是栈中的值
console.log(obj.name)
console.log(obj2)
```

## 包结构

- package.json 描述文件
- bin 执行二进制文件（binary）
- lib js代码（library）
- doc 文档（document）
- test 单元测试

## Buffer缓冲区

- Buffer的结构和数组很像，操作的方法也和数组类似
- 数组中不能存储二进制的文件，而Buffer就是专门用来存储二级制数据
- 使用Buffer不需要引入模块，直接使用即可
- 在Buffer中存储的都是二进制数据，但是在显示的时都是以16进制的形式显示，Buffer中每个元素范围都是从00 - ff
  - 00 - ff -> 0 - 255 -> 00000000 - 11111111
  - 计算机中一个0或1表示1位（bit）
  - 8bit = 1byte（字节）
  - 1024byte = 1kb
  - 1024kb = 1mb
  - 1024mb = 1gb
  - 1024gb = 1tb
- Buffer中的每一个元素，占用内存的一个字节 
- Buffer的大小一旦确定，则不能修改（Buffer实际上是对底层内存的直接操作）

将一个字符串保存到Buffer中年

```js
let str = 'hello world'
var buf = Buffer.from(str)
console.log(buf) // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
```

### 分配内存

```js
var buf = Buffer.alloc(10)
console.log(buf) // <Buffer 00 00 00 00 00 00 00 00 00 00>
```

## fs文件系统

- 文件系统简单来说就是通过nodejs来操作系统中的文件
- 使用文件系统，需要引入fs模块，fs是核心模块，直接引入不需要下载

### 同步文件写入

1. 打开文件
   1. let fd = fs.openSync(path, flags)
2. 向文件写入内容
   1. fs.writeSync(fd, string)
3. 保存并关闭文件
   1. fs.closeSync(fd)


```js
var fs = require('fs')

let fd = fs.openSync('hello.txt', 'w')
fs.writeSync(fd, 'Hello World!')
fs.closeSync(fd)
```

### 异步文件写入

1. 打开文件
   1. fs.open(path, flags, callback)
   2. 异步调用的方法，结果都是通过回调函数的参数返回的
      1. 回调函数有两个参数：
         1. err 错误对象，如果没有错误则为null
         2. fd
2. 向文件写入内容
   1. fs.write(fd, string, callback)
3. 保存并关闭文件
   1. fs.close(fd, callback)


```js
var fs = require('fs')

fs.open('hello.txt', 'w', function (err, fd) {
    if (!err) {
        fs.write(fd, 'Hello World', function (err) {
            if (!err) {
                console.log('写入成功')
            }
            fs.close(fd, function (err) {
                if (!err) {
                    console.log('文件已关闭')
                }

            })
        })
    } else {
        console.log(err)
    }
}) 
```

### 简单文件写入

- fs.writeFile(file, data, callback)
- fs.writeFileSync(file, data)

```js
var fs = require('fs')

fs.writeFile('hello.txt', 'Hello World', function (err) {
    if (!err) {
        console.log('写入成功')
    }
})
```

### 流式文件写入

同步、异步、简单文件的写入都不适合大文件的写入，性能差，容易导致内存泄漏

```js
var fs = require('fs')

// 创建一个可写流
var ws = fs.createWriteStream('hello.txt')

// 可以通过监听流的open和close事件来监听流的打开和关闭，打开一次就可以了
ws.once('open', function () {
    // once触发一次就会自动失效
    console.log('流打开了')
})

ws.once('close', function () {
    console.log('流关闭了')
})

// 写入内容
ws.write('hello')
ws.write('world')

// 关闭流
ws.end()
```

## 文件读取

### 同步文件读取

### 异步文件读取

### 简单文件读取

- fs.readFile()
- fs.readFileSync()

```js
var fs = require('fs')

fs.readFile('bg.jpg', function (err, data) {
    if (!err) {
        console.log(data) // 返回的是buffer对象，可能是文本，也可能是二进制图片，视频等
        // console.log(data.toString())
        fs.writeFile('bg2.jpg', data, function (err) {
            if (!err) {
                console.log('写入成功')
            }
        })
    }
})
```

### 流式文件读取

流式文件读物也适用于一些比较大的文件，可以分多次将文件读物到内存中


```js
var fs = require('fs')

// 创建一个可读流
var rs = fs.createReadStream('bg.jpg')

// 创建一个可写流
var ws = fs.createWriteStream('bg2.jpg')

rs.once('open', function() {
    console.log('可读流打开了')
})

rs.once('close', function() {
    console.log('可读流关闭了')
})

ws.once('open', function() {
    console.log('可写流打开了')
})

ws.once('close', function() {
    console.log('可写流关闭了')
    // 数据读取完毕，关闭可写流
    ws.end()
})

// 如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据
rs.on('data', function(data) {
    console.log(data.length)
    ws.write(data)
})
```

使用pipe()简化流程

```js
var fs = require('fs')

// 创建一个可读流
var rs = fs.createReadStream('bg.jpg')

// 创建一个可写流
var ws = fs.createWriteStream('bg2.jpg')

rs.once('open', function() {
    console.log('可读流打开了')
})

rs.once('close', function() {
    console.log('可读流关闭了')
})

ws.once('open', function() {
    console.log('可写流打开了')
})

ws.once('close', function() {
    console.log('可写流关闭了')
    // 数据读取完毕，关闭可写流
    ws.end()
})

// // 如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据
// rs.on('data', function(data) {
//     console.log(data.length)
//     ws.write(data)
// })

// pipe() 将可读流中的内容，直接输出到可写流中
rs.pipe(ws)
```

### 其他模块