---
sidebar: auto
---

# 从零实现一个工具函数库

## 功能点

- [x] rollup打包
- [x] 单元测试
- [x] 规范代码提交
- [x] 更新日志

## Rollup

`Rollup` 是一个 `JavaScript` 模块打包器，可以将小块代码编译成大块复杂的代码，例如 library 或应用程序。具有`Tree-shaking`的功能,[Tree-shaking的问题](https://zhuanlan.zhihu.com/p/32554436)

### 命令行接口和可选配置文件

命令行接口(`command line interface`) + 可选配置文件(`optional configuration file`)来调用

全局安装

```bash
npm install --global rollup
# 查看版本
rollup -v                  
# rollup v2.47.0
```

打包如下的示例代码：

```js
let a = 2
const add = (a, b) => a + b
const result = add(1, 2)

console.log(a, result)
```

#### 命令行

需要指定`入口文件`,`打包输出的文件名`,`格式`：

```bash
rollup index.js --file bundle.js --format cjs
```

#### 命令行+配置文件的形式

第一步：默认使用`rollup.config.js`,因此需要在项目的根目录下创建该文件：

```js
// rollup.config.js
export default {
    input: 'index.js', // 必须
    output: {
        file: 'bundle.js',// 必须
        format: 'cjs'// 必须
    }
}
```

第二步：打包

```bash
rollup --config
# 或者简写
rollup -c 
```

执行指定的配置文件`my.config.js`：

```bash
rollup --config my.config.js
# 或者 
rollup -c my.config.js
```

以上方式每次都需要重新进行打包，比较繁琐，因此采用 监听文件变化`-w`或者`--watch`执行命令:

```bash
rollup -w -c
# 或者 
rollup --watch --config
# 或者
rollup -w -c my.config.js
# 或者
rollup --watch --config my.config.js
```

> `-w` 必须在 `-c`前面使用

### JavaScript API

在项目中安装`rollup`:

```bash
yarn add rollup -D
```

创建`rollup.js`配置文件：

```js
const rollup = require('rollup')

const inputOptions = {
  input: 'index.js',
}
const outputOptions = {
  file: 'bundle.js',
  format: 'cjs',
}

async function build() {
  const bundle = await rollup.rollup(inputOptions)
  const { output } = await bundle.generate(outputOptions)
  await bundle.write(outputOptions);
  await bundle.close();
}

build()
```

执行

```bash
node rollup.js
```

## 插件(plugins)

[Rollup Plugins](https://github.com/rollup/plugins)

插件对象 `数组 Array` (或一个插件对象) ,要调用导入的插件函数

### buble

打包如上示例代码发现，使用ES6写法写的代码并没有被转为ES5，因此需要`babel`。

安装

```bash
yarn add @rollup/plugin-buble -D
```

配置

```js
const bubel = require('@rollup/plugin-buble')

export default {
  input: 'index.js', // * 打包的入口文件
  output: {
    file: 'bundle.js', // * 打包的出口文件
    format: 'esm', // * 打包的类型
  },
  plugins: [bubel()],
}

```

转化后的效果：

```js
// format:"esm"
var a = 2;
var add = function (a, b) { return a + b; };
var result = add(1, 2);

console.log(a, result);

// format:"amd"
define(function () { 'use strict';

	var a = 2;
	var add = function (a, b) { return a + b; };
	var result = add(1, 2);

	console.log(a, result);

});

// format:"cjs"
'use strict';

var a = 2;
var add = function (a, b) { return a + b; };
var result = add(1, 2);

console.log(a, result);

// format:"iife"
(function () {
	'use strict';

	var a = 2;
	var add = function (a, b) { return a + b; };
	var result = add(1, 2);

	console.log(a, result);

}());

// format:"umd"
(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}(function () { 'use strict';

	var a = 2;
	var add = function (a, b) { return a + b; };
	var result = add(1, 2);

	console.log(a, result);

}));

// format:"system"
System.register([], function (exports, module) {
	'use strict';
	return {
		execute: function () {

			var a = 2;
			var add = function (a, b) { return a + b; };
			var result = add(1, 2);

			console.log(a, result);

		}
	};
});

```

> 为什么用`buble`不用`babel`?

### node-resolve和commonjs

当我们在项目中使用第三方的插件时，默认`rollup`是无法打包引入的第三方插件的。需要用到`@rollup/plugin-commonjs`,`@rollup/plugin-node-resolve`这两个插件

`@rollup/plugin-node-resolve`:允许加载`node_modules`中的第三方模块

`@rollup/plugin-commonjs`：将`CommonJS`模块转化为`ES6`模块

比如：

```js
// index.js
const _ = require('lodash')

_.add(3, 4)

let a = 2
const add = (a, b) => a + b
const result = add(1, 2)
console.log(a, result)
```



```js
// 配置文件
import bubel from '@rollup/plugin-buble'

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'myLibrary'
  },
  plugins: [bubel()],
}

```

打包结果如下：

```js
// bundle.js
(function () {
	'use strict';

	var _ = require('lodash');

	_.add(3, 4);

	var a = 2;
	var add = function (a, b) { return a + b; };
	var result = add(1, 2);
	console.log(a, result);

}());

```

可以看到`lodash`的相关代码并没有带打包到`bundle.js`文件中

安装

```bash
yarn add @rollup/plugin-commonjs @rollup/plugin-node-resolve -D
```

配置

```js
import bubel from '@rollup/plugin-buble'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'myLibrary',
  },
  plugins: [bubel(), resolve(), commonjs()]
}
```

> 多个插件使用注意先后顺序，先允许加载第三方模块，再将`CommonJS`模块转化为`ES6`模块

### rollup-plugin-node-polyfills

一些模块是属于`Node.js`的内置模块，比如 `events` or `util`，是需要使用该插件的

安装

```bash
yarn add rollup-plugin-node-polyfills -D
```

使用

```js
import bubel from '@rollup/plugin-buble'
import nodePolyfills from 'rollup-plugin-node-polyfills'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'myLibrary',
  },
  plugins: [bubel(), nodePolyfills(), resolve(), commonjs()],
}
```



## 其他参数配置

### banner

```js
const version = require('./package.json').version
const banner = `
/** 
 * myLibrary v${version}
 * (c) 2020-${new Date().getFullYear()} Auth
 * Released under the MIT License.
 */`

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'umd',
    banner,
  },
}
```

## 打包多种格式的文件

目前有三种主流的规范，`vue2.0`也是使用了这三种规范：

- `esm`：ESM 规范，摇树性能好，首推使用
- `cjs`：node 使用的 require 规范，无摇树
- `umd`：支持 `cjs` 和 `amd` 规范，自动挂载导出到 global ，一般用在浏览器中

在`package.json`中对应字段：

```json
{
  "main": "xx.common.js",
  "module": "xx.esm.js",
  "unpkg": "xx.js"
}
```

- main：browser 环境和 node 环境均可使用
- module：定义 npm 包的 ESM 规范的入口文件，browser 环境和 node 环境均可使用
- unpkg： cdn（umd格式）

```js
// rollup.config.js
import bubel from '@rollup/plugin-buble'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const pkg = require('./package.json')

const banner = `
/** 
 * ${pkg.name} v${pkg.version}
 * (c) 2020-${new Date().getFullYear()} ${pkg.author}
 * Released under the MIT License.
 */`

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'bundle/cjs.js',
      format: 'cjs',
      banner,
      name: pkg.name,
    },
    {
      file: 'bundle/esm.js',
      format: 'esm',
      banner,
      name: pkg.name,
    },
    {
      file: 'bundle/umd.js',
      format: 'umd',
      banner,
      name: pkg.name,
    },
  ],
  plugins: [
    resolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectories: ['node_modules'],
      },
    }),
    commonjs(),
    bubel(),
  ],
}
```

## 引入第三方包

```bash
yarn add dayjs -S
```

```js
// dayjs.js
import day from 'dayjs'

export const dayjs = day
```

## 单元测试

### jest

```bash
yarn add jest -D
```

`package.json`配置

```json
"scripts": {
  "test": "jest --coverage"
},
```

- `--coverage`生成代码覆盖率文件夹`coverage`

新增目录`__test__`来写单元测试，命名规则为`需要做单元测试的文件名.test.js`

因为项目是采用`es6`的写法写的，写单元测试时，直接使用`import`来引入文件是会报错的，需要因为`babel`:

```bash
yarn add babel-jest @babel/core @babel/preset-env -D
```

根目录下创建一个`babel.config.js`:

```js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

开始单元测试：

```bash
yarn test
```

## 规范代码提交

规范代码的提交

[git-guide](https://zj-git-guide.readthedocs.io/zh_CN/latest/?badge=latest)

### commitizen

```bash
yarn add commitizen -D
```

```json
{
  "scripts": {
    "commit": "git-cz",
  }
}
```

### 初始化适配器 cz-conventional-changelog

```bash
npx commitizen
```

会提示执行一条命令:

```bash
# 使用npm安装
npx commitizen init cz-conventional-changelog --save-dev --save-exact --force
# 或者 使用yarn来安装
npx commitizen init cz-conventional-changelog --yarn --dev --exact --force
```

自动安装`cz-conventional-changelog`,并在`package.json`中会生成：

```json
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
```

执行`git add .`之后，执行`yarn commit`或`npm run commit`

步骤：

1. 选择 type

```bash
? Select the type of change that you're committing: (Use arrow keys)
```

2. 输入这次提交的影响范围（可跳过）

```bash
? What is the scope of this change (e.g. component or file name): (press enter to skip) 
```

3. 提交的主题，一个简短的描述（不可跳过）

```bash
? Write a short, imperative tense description of the change (max 94 chars):
```

4. 输入这次提交的详细描述（可跳过）

```bash
? Provide a longer description of the change: (press enter to skip)
```

5. 这次提交是否有突破性变化（可跳过）

```bash
? Are there any breaking changes? (y/N) 
```

6. 这次提交是否有关联的 issues（可跳过）

```bash
Does this change affect any open issues? (y/N) 
```

以上操作完成之后即可执行`git push`

说明：

type | 说明
----|----
feat: | 新功能 A new feature
fix:  |  修改bug A bug fix
docs: | 只修改了文档   Documentation only changes
style: | 格式化变动，不影响代码的逻辑，比如清楚多余空格没删除分号等   Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
refactor:| 代码重构 A code change that neither fixes a bug nor adds a feature
perf:| 提升性能的修改     A code change that improves performance
test:|  添加或修改测试代码   Adding missing tests or correcting existing tests
build:| 构建工具或外部依赖包的修改，比如更新依赖包的版本等   Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
ci:| 持续集成的配置文件或脚本的修改       Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
chore:| 杂项，其他不修改源代码与测试代码的修改   Other changes that don't modify src or test files
revert:| 版本撤回  Reverts a previous commit

## 更新日志

### standard-version

自动生成`版本号`工具[standard-version](https://github.com/conventional-changelog/standard-version)

作用：

- 自动升级 `version`
- 自动生成`CHANGELOG.md`
- 自动打`tag`

```bash
yarn add standard-version -D
```

```json
"scripts": {
  "release": "standard-version -r minor --skip.tag"
}
```

在`git push`之前执行`yarn release`

#### 配置规范

[Configuration Spec 配置规范](https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.1.0/README.md)

查看`standard-version`相关参数

```bash
npx standard-version --help
```

默认`standard-version`中只会记录下`type`为`feat`和`fix`的日志,可以通过配置`.versionrc`来控制日志记录

因为默认配置如下：

```js
[
   {"type":"feat","section":"Features"},
   {"type":"fix","section":"Bug Fixes"},
   {"type":"chore","hidden":true},
   {"type":"docs","hidden":true},
   {"type":"style","hidden":true},
   {"type":"refactor","hidden":true},
   {"type":"perf","hidden":true},
   {"type":"test","hidden":true}
]
```

#### 命令行

```bash
# -r <major|minor|patch>  主版本，次版本，修改版
npx standard-version -r major
```

#### 生命周期

- `prerelease`: 发布之前
- `prebump / postbump`: 版本号更新之前 / 之后
- `prechangelog / postchangelog`: changelog 生成之前 / 之后
- `precommit / postcommit`: package.json 和 changelog 文件提交之前 / 提交之后
- `pretag / posttag`: 打 tag 之前 / 之后

可以在生命周期中做一些事情：

```json
"standard-version": {
  "scripts": {
    "prebump": "echo 版本号更新之前"
  }
}
```

也可以跳过某些生命周期(`bump`, `changelog`, `commit`, `tag`) ：

```json
"standard-version": {
  "skip": {
    "tag": true
  }
}
```

### conventional-changelog-cli

自动生成`CHANGELOG.md`文件

#### 安装

```bash
yarn add conventional-changelog-cli -D
```

```json
"scripts": {
  "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s"
}
```

说明：

- 参数`-p`指定提交信息的规范，有以下选择：`angular, atom, codemirror, ember, eslint, express, jquery, jscs or jshint`
- 参数`-i`指定读取`CHANGELOG`内容的文件
- 参数`-s`表示将新生成的`CHANGELOG`输出到`-i`指定的文件中

重新生成所有版本的完整的`CHANGELOG`：

```bash
npx conventional-changelog -p angular -i CHANGELOG.md -s -r 0
```

## 发布

登录[npmjs官网](https://www.npmjs.com/)注册账号

```bash
# 登录
npm login
# 发布
npm publish
# 撤回发布的某个版本
npm unpublish lgr-tools@2.0.1
# 撤销所发布的包
npm unpublish utils-library --force
```

> 注意：
> 1. 使用淘宝源`cnpm`是无法登录`npmjs`的
> 2. 发布的包名不可与`npmjs`上已经存在的包重名，否则会提示没有权限的问题

## 代码提交发布流程

```bash
git add .
yarn commit
yarn release
npm publish
```
