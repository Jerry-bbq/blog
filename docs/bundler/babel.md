---
sidebar: auto
---

# babel

## babel是什么

Babel 是一个 JavaScript 编译器Babel 是一个 JavaScript 编译器。

babel不会转义全局变量、Promise、Symbol、WeakMap、Set、includes、generator 函数，如果需要转义，需要引入 polyfill 来解决

## 工作原理

Babel 的编译过程和大多数其他语言的编译器相似，可以分为三个阶段：

- 解析（Parsing）：将代码字符串解析成**抽象语法树**。
- 转换（Transformation）：对抽象语法树进行转换操作。
- 生成（Code Generation）： 根据变换后的抽象语法树再生成代码字符串。

### 解析

Babel 拿到源代码会把代码抽象出来，变成 AST （抽象语法树），学过编译原理的同学应该都听过这个词，全称是 Abstract Syntax Tree。

抽象语法树是源代码的抽象语法结构的树状表示，树上的每个节点都表示源代码中的一种结构，只所以说是抽象的，是因为抽象语法树并不会表示出真实语法出现的每一个细节，比如说，嵌套括号被隐含在树的结构中，并没有以节点的形式呈现，它们主要用于源代码的简单转换。

console.log('zcy')； 的 AST 长这样：

```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "name": "console"
          },
          "property": {
            "type": "Identifier",
            "name": "log"
          }
        },
        "arguments": [
          {
          "type": "Literal",
          "value": "zcy",
          "raw": "'zcy'"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```

整个解析过程分为两个步骤：

- 分词：将整个代码字符串分割成语法单元数组
- 语法分析：建立分析语法单元之间的关系

### 转换

插件应用于 babel 的转译过程，尤其是第二个阶段 Transformation，如果这个阶段不使用任何插件，那么 babel 会原样输出代码。

Babel 官方帮我们做了一些预设的插件集，称之为 Preset，这样我们只需要使用对应的 Preset 就可以了。每年每个 Preset 只编译当年批准的内容。而 babel-preset-env 相当于 ES2015 ，ES2016 ，ES2017 及最新版本。

### 生成

用 babel-generator 通过 AST 树生成 ES5 代码。

## 如何编写一个Babel插件

### 插件格式

先从一个接收了当前 Babel 对象作为参数的 Function 开始。

```js
export default function(babel) {
  // plugin contents
}
```

我们经常会这样写

```js
export default function({ types: t }) {
    //
}
```

接着返回一个对象，其 visitor 属性是这个插件的主要访问者。


```js
export default function({ types: t }) {
  return {
    visitor: {
      // visitor contents
    }
  };
};
```

visitor 中的每个函数接收 2 个参数：path 和 state

```js
export default function({ types: t }) {
  return {
    visitor: {
      CallExpression(path, state) {}
    }
  };
};

```

### 写一个简单的插件

我们先写一个简单的插件，把所有定义变量名为 a 的换成 b ，先看下 var a = 1 的 AST

```json
{
  "type": "Program",
  "start": 0,
  "end": 10,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 9,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "a"
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "value": 1,
            "raw": "1"
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```

从这里看，要找的节点类型就是 VariableDeclarator ，下面开始撸代码

```js
export default function({ types: t }) {
  return {
    visitor: {
      VariableDeclarator(path, state) {
        if (path.node.id.name == 'a') {
          path.node.id = t.identifier('b')
        }
      }
    }
  }
}
```

我们要把 id 属性是 a 的替换成 b 就好了。但是这里不能直接 path.node.id.name = 'b' 。如果操作的是Object，就没问题，但是这里是 AST 语法树，所以想改变某个值，就是用对应的 AST 来替换，现在我们用新的标识符来替换这个属性。

最后测试一下

```js
import * as babel from '@babel/core';
const c = `var a = 1`;

const { code } = babel.transform(c, {
  plugins: [
    function({ types: t }) {
      return {
        visitor: {
          VariableDeclarator(path, state) {
            if (path.node.id.name == 'a') {
              path.node.id = t.identifier('b')
            }
          }
        }
      }
    }
  ]
})

console.log(code); // var b = 1
```

### 实现一个简单的按需打包功能

例如我们要实现把 import { Button } from 'antd' 转成 import Button from 'antd/lib/button'
通过对比 AST 发现，specifiers  里的 type 和 source 不同。

```js
// import { Button } from 'antd'
"specifiers": [
    {
        "type": "ImportSpecifier",
        ...
    }
]
// import Button from 'antd/lib/button'
"specifiers": [
    {
        "type": "ImportDefaultSpecifier",
        ...
    }
]
import * as babel from '@babel/core';
const c = `import { Button } from 'antd'`;

const { code } = babel.transform(c, {
  plugins: [
    function({ types: t }) {
      return {
        visitor: {
          ImportDeclaration(path) {
            const { node: { specifiers, source } } = path;
            if (!t.isImportDefaultSpecifier(specifiers[0])) { // 对 specifiers 进行判断，是否默认倒入
              const newImport = specifiers.map(specifier => (
                t.importDeclaration(
                  [t.ImportDefaultSpecifier(specifier.local)],
                  t.stringLiteral(`${source.value}/lib/${specifier.local.name}`)
                )
              ))
              path.replaceWithMultiple(newImport)
            }
          }
        }
      }
    }
  ]
})

console.log(code); // import Button from "antd/lib/Button";
```

当然 babel-plugin-import 这个插件是有配置项的，我们可以对代码做以下更改。

```js
export default function({ types: t }) {
  return {
    visitor: {
      ImportDeclaration(path, { opts }) {
        const { node: { specifiers, source } } = path;
        if (source.value === opts.libraryName) {
          // ...
        }
      }
    }
  }
}
```

至此，这个插件我们就编写完成了。

## Babel常用API

### @babel/core

Babel 的编译器，核心 API 都在这里面，比如常见的 transform、parse。

### @babel/cli

cli 是命令行工具,  安装了 @babel/cli 就能够在命令行中使用 babel  命令来编译文件。当然我们一般不会用到，打包工具已经帮我们做好了。

### @babel/node

直接在 node 环境中，运行 ES6 的代码。

### babylon

Babel 的解析器。

### babel-traverse

用于对 AST 的遍历，维护了整棵树的状态，并且负责替换、移除和添加节点。

### babel-types

用于 AST 节点的 Lodash 式工具库, 它包含了构造、验证以及变换 AST 节点的方法，对编写处理 AST 逻辑非常有用。

### babel-generator

Babel 的代码生成器，它读取 AST 并将其转换为代码和源码映射（sourcemaps）。