# ESLint

ESLint 是一个静态的 JavaScript 代码检查工具

- [ESLint中文官网](https://eslint.bootcss.com/docs/user-guide/getting-started)



## 使用

```bash
# 安装 npm i eslint -D
yarn add -D eslint
# 创建eslint配置文件
npx eslint --init
# 运行
npx eslint file.js
# 集成到webpack，（eslint-loader已经被弃用）
yarn add -D eslint-webpack-plugin
```

```js
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // ...
  plugins: [new ESLintPlugin(options)],
  // ...
};
```

ESLint 支持几种格式的配置文件：

- JavaScript - 使用 `.eslintrc.js` 然后输出一个配置对象。
- YAML - 使用 `.eslintrc.yaml` 或 `.eslintrc.yml` 去定义配置的结构。
- JSON - 使用 `.eslintrc.json` 去定义配置的结构，ESLint 的 JSON 文件允许 JavaScript 风格的注释。
- (弃用) - 使用 `.eslintrc`，可以使 JSON 也可以是 YAML。
- package.json - 在 package.json 里创建一个 `eslintConfig` 属性，在那里定义你的配置。

## 规则

- "off" 或 0 - 关闭规则
- "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
- "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)


```js
// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'], // "@vue/prettier"
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
```