# Rollup

[Rollup](https://rollupjs.org/) 是一个用于 **JavaScript 的模块打包工具**，它将小的代码片段编译成更大、更复杂的代码，例如库或应用程序。它使用 JavaScript 的 ES6 版本中包含的新标准化代码模块格式，而不是以前的 CommonJS 和 AMD 等特殊解决方案。ES 模块允许你自由无缝地组合你最喜欢的库中最有用的个别函数。这在未来将在所有场景原生支持，但 Rollup 让你今天就可以开始这样做。

## 特点

- 支持许多输出格式：ES模块、CommonJS、UMD、SystemJS等
- 除屑优化（Tree-shaking）：基于深度执行路径分析的冗余代码消除
- 无额外开销的代码分割
- 强大的插件机制
- 应需而变，量身定制
- Vite依赖的打包器

以`v4.12.0`版本为例：

## 安装

```bash
yarn add rollup -D
```

## 配置文件

```bash
# 根目录下
touch rollup.config.mjs
```

```ts
import { defineConfig } from 'rollup';

export default defineConfig({
    input: 'src/main.ts',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    },
});
```

在package.json文件中添加脚本：

```bash
npm pkg set scripts.dev="rollup -c -w"
npm pkg set scripts.build="rollup -c"
```

- [配置选项api](https://cn.rollupjs.org/configuration-options/)

## 插件

- [官方推荐插件集合](https://github.com/rollup/awesome)

常用插件如下：

### @rollup/plugin-eslint

```ts
import { defineConfig } from 'rollup';
import eslint from '@rollup/plugin-eslint';

export default defineConfig({
  plugins: [
    eslint()
  ],
})
```

### @rollup/plugin-node-resolve

```ts
import { defineConfig } from 'rollup';
import nodeResolve from '@rollup/plugin-node-resolve';

export default defineConfig({
  plugins: [
    nodeResolve(),
  ],
})
```

### @rollup/plugin-commonjs

```ts
import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  plugins: [
    commonjs(),
  ],
})
```

### @rollup/plugin-json

```ts
import { defineConfig } from 'rollup';
import json from '@rollup/plugin-json';
import pkg from './package.json';

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: `dist/${pkg.name}.js`,
      format: 'umd',
      name: 'funLib',
    }
  ],
  plugins: [
    json()
  ],
})

```

### @rollup/plugin-terser

```ts
import { defineConfig } from 'rollup';
import terser from '@rollup/plugin-terser';
import pkg from './package.json';

export default defineConfig({
  output: [
    {
      file: `dist/${pkg.name}.min.js`,
      format: 'umd',
      name: 'funLib',
      plugins: [terser()],
    },
  ],
})

```

### rollup-plugin-esbuild

能够替换rollup-plugin-typescript2, @rollup/plugin-typescript and rollup-plugin-terser

### @rollup/plugin-alias

用于提供模块名称的别名和解析功能

## 搭建Typescript环境

```bash
yarn add -D typescript tslib @rollup/plugin-typescript
```

## 安装eslint

```bash
# 安装相关插件，或者通过eslint --init来创建.eslintrc文件
# typescript-eslint也依赖typescript，因为已经安装了，所以这里省略安装的步骤
yarn add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser

# 创建文件
touch .eslintrc.js .eslintigore
```

## 安装prettier

```bash
# 安装
yarn add -D eslint-plugin-prettier eslint-config-prettier
yarn add prettier --save-dev --save-exact 
```

## 安装commitlint

```bash
yarn add -D @commitlint/cli @commitlint/config-conventional
# 或者
yarn add --D @commitlint/{cli,config-conventional}

# 创建配置文件并写入内容
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

npm pkg set scripts.commitlint="commitlint --edit"
```

## 安装ls-lint

```bash
yarn add -D @ls-lint/ls-lint

touch .ls-lint.yml

npm pkg set scripts.ls-lint="ls-lint"
```

## 添加lint-staged

```bash
yarn add -D lint-staged

touch .lintstagedrc
```

### 添加githooks

```bash
npx husky-init && yarn install
npx husky add .husky/commit-msg 'yarn commitlint'
```

## 安装Jest

```bash
yarn add -D jest ts-jest @types/jest

# 创建jest.config.js文件
touch jest.config.js

npm pkg set scripts.test="jest"
npm pkg set scripts.test:watch="jest --watchAll"
```