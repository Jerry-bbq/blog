# 规范工具

## ESLint

ESLint 是一个静态的 JavaScript 代码检查工具

- [ESLint中文官网](https://eslint.bootcss.com/docs/user-guide/getting-started)
- [专为团队设计的 lint 工具](https://github.com/x-orpheus/elint)
- [阿里巴巴前端规约及配套工具](https://github.com/alibaba/f2e-spec)


### 使用

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

### 规则

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

## prettier

- [prettier](https://prettier.io/)

## commitlint

[commitlint](https://commitlint.js.org) 校验 git提交消息 的规范

```bash
npm install --save-dev @commitlint/{cli,config-conventional}
```

## ls-lint

- [ls-lint](https://www.npmjs.com/package/ls-lint)，校验 目录文件命名 的规范

## CSpell

- [CSpell](https://cspell.org/docs/installation/)

## husky

[husky](https://typicode.github.io/husky/)在提交或推送时，`自动化` 检查提交信息、检查代码 和 运行测试。与 `lint-stage` 配合

```bash
npm install --save-dev husky

npx husky init
```

## lint-stage

[lint-staged](https://github.com/lint-staged/lint-staged)对暂存的 git 文件运行 linters，不要让💩进入你的代码库！在提交代码之前运行 Linting 更有意义。通过这样做，您可以确保没有错误进入存储库并强制执行代码样式。但是在整个项目上运行 Lint 过程很慢，并且 Linting 结果可能无关紧要。最终，您只想对将要提交的文件进行 Lint。

```bash
npm install --save-dev lint-staged
```