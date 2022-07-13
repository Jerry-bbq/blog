---
sidebar: auto
---

# 前端工程化

前端工程化可以分为四个方面：**模块化**、**组件化**、**规范化**、**自动化**

## 模块化

### AMD

- AMD 是 RequireJS 在推广过程中对模块定义的规范化产出
- AMD异步加载模块。它的模块支持对象 函数 构造器 字符串 JSON等各种类型的模块
- 它要在声明模块的时候指定所有的依赖 dependencies ，并且还要当做形参传到factory 中，对于依赖的模块提前执行，依赖前置。

```js
define("module", ["dep1", "dep2"], function(d1, d2) {
  return someExportedValue;
});
require(["module", "../file"], function(module, file) { /* ... */ });

```
### CommonJS

- nodejs的模块化方案
- 一个单独的文件就是一个模块
- 加载模块使用require方法，该方法读取一个文件并执行，最后返回文件内部的exports对象
- CommonJS 加载模块是同步的，所以只有加载完成才能执行后面的操作
- 像Node.js主要用于服务器的编程，加载的模块文件一般都已经存在本地硬盘，所以加载起来比较快，不用考虑异步加载的方式，所以CommonJS规范比较适用。但如果是浏览器环境，要从服务器加载模块，这是就必须采用异步模式。所以就有了 AMD  CMD 解决方案
- CommonJS 模块是运行时加载
- CommonJS 模块输出的是一个值的拷贝

```js
require("module");
require("../file.js");
exports.doStuff = function() {};
module.exports = someValue;
```

### CMD

- CMD是SeaJS 在推广过程中对模块定义的规范化产出
- 也是异步加载模块
- Common Module Definition 规范和 AMD 很相似，尽量保持简单，并与 CommonJS 和 Node.js 的 Modules 规范保持了很大的兼容性。

```js
define(function(require, exports, module) {
  var $ = require('jquery');
  var Spinning = require('./spinning');
  exports.doSomething = ...
  module.exports = ...
})
```

### ES6模块化

- ES6 模块输出的是值的引用
- ES6 模块是编译时输出接口
- ES6 模块的运行机制与 CommonJS 不一样。ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

将独立的功能代码封装成一个独立的文件，其他模块需要使用，在进行引用。模块化有利于代码的拆分和架构上的解耦

- JS 模块化：CommonJS、AMD、CMD 以及 ES6 Module。
- CSS 模块化：Sass、Less、Stylus、BEM、CSS Modules 等。其中预处理器和 BEM 都会有的一个问题就是样式覆盖。而 CSS Modules 则是通过 JS 来管理依赖，最大化的结合了 JS 模块化和 CSS 生态，比如 Vue 中的 style scoped。
- 资源模块化：任何资源都能以模块的形式进行加载，目前大部分项目中的文件、CSS、图片等都能直接通过 JS 做统一的依赖关系处理。

ES6 模块规范和 commonjs 规范 运行机制的区别：

CommonJS 模块是运行时加载，ES6 模块是编译时输出接口

- 运行时加载: CommonJS 模块就是对象；即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。
- 编译时加载: ES6 模块不是对象，而是通过 export 命令显式指定输出的代码，import时采用静态命令的形式。即在import时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”。

CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

## 组件化

不同于模块化，模块化是对文件、对代码和资源拆分，而**组件化则是对 UI 层面的拆分**

通常，我们会需要对页面进行拆分，将其拆分成一个一个的零件，然后分别去实现这一个个零件，最后再进行组装。
在我们的实际业务开发中，对于组件的拆分我们需要做不同程度的考量，其中主要包括细粒度和通用性这两块的考虑。
对于业务组件，你更多需要考量的是针对你负责业务线的一个适用度，即你设计的业务组件是否成为你当前业务的 “通用” 组件。

## 规范化

正所谓无规矩不成方圆，一些好的规范则能很好的帮助我们对项目进行良好的开发管理。规范化指的是我们在工程开发初期以及开发期间制定的系列规范，其中又包含了

- 项目目录结构
- 编码规范：对于编码这块的约束，一般我们都会采用一些强制措施，比如 ESLint、StyleLint 等。
- 联调规范
- 文件命名规范
- 样式管理规范：目前流行的样式管理有 BEM、Sass、Less、Stylus、CSS Modules 等方式。
- git flow 工作流：其中包含分支命名规范、代码合并规范等。
- 定期 code review… 等等

## 自动化

从最早先的 grunt、gulp 等，再到目前的 webpack、parcel。这些自动化工具在自动化合并、构建、打包都能为我们节省很多工作。而这些只是前端自动化其中的一部分，前端自动化还包含了持续集成、自动化测试等方方面面。


## 持续集成工具Jenkins