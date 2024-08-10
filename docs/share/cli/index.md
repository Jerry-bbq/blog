# CLI脚手架

## 脚手架是什么

脚手架（Scaffold）是一种用于快速搭建项目结构的工具，尤其在Web前端开发中得到广泛应用。它提供了一种标准的项目结构和开发的规范，可以帮助团队在短时间内搭建起一个良好的基础框架，从而加快开发效率，提升前端开发质量。市面上的脚手架vue-cli,create-react-app，
- 提高开发效率：我们不需要从零开始搭建项目，只需要几条命令就可以生成一个完整的项目模板，包括代码规范、测试框架、构建工具等。
- 保证代码质量：我们可以使用脚手架提供的最佳实践和标准化的代码风格，避免一些常见的错误和坏习惯，提高代码的可读性和可维护性。
- 促进团队协作：我们可以使用相同的脚手架来创建和管理项目，保证团队成员之间的代码一致性和沟通效率，减少冲突和重复工作。

## 如何写一个友好的命令行工具

https://clig.dev/

## 初始化项目

```bash
mkdir cli && cd cli
npm init -y
```

更改`package.json`文件，指定入口文件

```json
{
  "name": "@buck/cli",
  "version": "1.0.0",
  "description": "",
  "bin": {
    "buck": "bin/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```
::: tip

`bin` 字段为脚手架的入口文件，控制台运行 `buck` 时，会执行 `bin/index.js` 文件的内容

:::

## 本地测试

```bash
# 在项目的根目录下执行
npm link

# 检查是否link成功
npm list --global

# 执行测试
buck

# 取消link
npm unlink buck
# 如果取消不了可以
npm uninstall packageName -g 
```


## 安装依赖

```bash
npm i commander chalk ora inquirer download-git-repo fs-extra open shelljs
```

## 创建入口文件

```bash
mkdir bin && touch bin/index.js
```

`bin/index.js` 写入如下内容：

```js
#! /usr/bin/env node

import cli from '../lib/cli.js'

cli()
```

::: tip

如果使用 `require` 引入是不需要执行 `cli()` 函数的，因为 `require` 会执行一次引入

:::

## 创建主文件cli

```bash
mkdir lib && touch lib/cli.js
```

`lib/cli.js` 写入如下内容：

```js
import { program } from 'commander';
import { versionRegister } from './version/index.js'
import { createRegister } from './create/index.js'
import { templateRegister } from './template/index.js'
import { openRegister } from './open-url/index.js'

const cli = () => {
    versionRegister();
    createRegister();
    templateRegister();
    openRegister();
    program.parse(process.argv);
}

export default cli
```

## 工具函数

```bash
mkdir -p lib/utils 
touch lib/utils/{file,pkg,text}.js
```

`lib/utils/file.js` 写入如下内容：

```js
import path from 'node:path';
import { existsSync } from 'fs'
import { logWarn } from './text.js'

export const getPath = (projectName) => {
    return path.resolve(process.cwd(), projectName)
}

export const isFileExist = (filename) => {
    const file = getPath(filename)
    if (existsSync(file)) {
        logWarn(`${filename} file is existed`)
        process.exit(1)
    }
}
```

`lib/utils/pkg.js` 写入如下内容：

```js
import { createRequire } from 'node:module';

export const pkg = createRequire(import.meta.url)('../../package.json')
```

`lib/utils/text.js` 写入如下内容：

```js
import chalk from 'chalk';

const log = console.log

export const warnText = (text) => {
    return chalk.yellow(text)
}

export const successText = (text) => {
    return chalk.green(text)
}

export const errorText = (text) => {
    return chalk.red(text)
}

export const infoText = (text) => {
    return chalk.cyan(text)
}

export const logWarn = (text) => {
    log(warnText(text))
}

export const logSuccess = (text) => {
    log(successText(text))
}

export const logError = (text) => {
    log(errorText(text))
}

export const logInfo = (text) => {
    log(infoText(text))
}
```

## 创建 version 注册命令

```bash
mkdir -p lib/version 
touch lib/version/index.js
```

`lib/version/index.js`写入如下内容：

```js
import { program } from 'commander';
import { pkg } from '../utils/pkg.js'

// support `-v`、`--version`
export const versionRegister = () => {

    const name = Object.keys(pkg.bin)[0]

    program
        .name(`${name}`)
        .description(`${pkg.description}`)
        .usage('<command> [option]')
        .version(`${pkg.name} ${pkg.version}`, '-v, --version', 'output the current version')
}
```

### 支持命令

```bash
buck -v
#
buck --version
```

## 创建 template注册命令

```bash
mkdir -p lib/template && touch lib/template/index.js
```

`lib/template/index.js`

```js
import { program } from 'commander';
import inquirer from 'inquirer';
import downloadRepo from 'download-git-repo';
import ora from 'ora';
import { successText, errorText, infoText, logInfo } from '../utils/text.js'
import { isFileExist } from '../utils/file.js'

// 模版列表（私有化部署的gitlab）
export const templateList = {
    'admin-template': {
        description: 'Web template',
        gitlabUrl: 'http://**.com/ai_bigdata/front-end/admin-template',
        downloadUrl: 'http://**.com/ai_bigdata/front-end/admin-template.git#main'
    },
    'h5-template': {
        description: 'H5 template',
        gitlabUrl: 'http://**.com/ai_bigdata/front-end/mobile-template',
        downloadUrl: 'http://**.com/ai_bigdata/front-end/mobile-template.git#main'
    },
}


// 下载模版
export const downloadTemplate = (projectName) => {
    const spinner = ora(infoText('Loading template...')).start();
    const { downloadUrl } = templateList[projectName]

    if (downloadUrl) {
        downloadRepo(
            `direct:${downloadUrl}`,
            projectName,
            { clone: true },
            (err) => {
                if (err) {
                    spinner.text = errorText(`Template retrieval failed, please try again. Failure detail:[ ${err}] `)
                    spinner.fail()
                    return
                }
                spinner.text = successText('Completed loading template');
                spinner.succeed()
            })
    } else {
        spinner.text = errorText('DownloadUrl retrieval failed, please retrieve again')
    }
}

// choose template to download
export const chooseTemplate = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'templateName',
            message: 'Select a project template:',
            choices: Object.keys(templateList)
        }
    ]).then(answers => {
        isFileExist(answers.templateName)
        downloadTemplate(answers.templateName)
    })
}

// register command
export const templateRegister = () => {
    // template list
    program.command('list')
        .description('all template list')
        .action(() => {
            logInfo('Template List:')
            for (let key in templateList) {
                logInfo(`${key}  ${templateList[key].description}`)
            }
        })

    // create a project by template
    program.command('use')
        .description('create a project by template')
        .action(() => {
            chooseTemplate()
        })
}
```

### 支持命令

```bash
buck use
```

## 创建create注册命令

```bash
mkdir -p lib/create && touch lib/create/index.js
```

```js
import { program } from 'commander';
import shell from 'shelljs'
import inquirer from 'inquirer';
import { isFileExist } from '../utils/file.js'
import { installTypeScript } from './typescript/install.js'
import { installESLint } from './eslint/install.js'
import { installPrettier } from './prettier/install.js'
import { installCommitLint } from './commitlint/install.js'
import { logSuccess } from '../utils/text.js'

const initProject = (projectName) => {
    shell.exec(`mkdir ${projectName}`)
    shell.cd(projectName)
    shell.exec('npm init -y')
    shell.exec('mkdir src && touch src/index.js')
}

const getFeatureList = async () => {
    const { featureList } = await inquirer.prompt([
        {
            name: 'featureList',
            type: 'checkbox',
            message: 'Select features for project',
            choices: [
                { name: 'TypeScript', value: 'TypeScript' },
                { name: 'ESLint', value: 'ESLint' },
                { name: 'Prettier', value: 'Prettier' },
                { name: 'CommitLint', value: 'CommitLint' },
            ]
        }
    ])
    return featureList
}

const installFeature = (featureList) => {

    featureList.forEach(item => {
        switch (item) {
            case 'ESLint':
                installESLint()
                break;
            case 'Prettier':
                installPrettier()
                break;
            case 'TypeScript':
                installTypeScript()
                break;
            case 'CommitLint':
                installCommitLint()
                break;
            default: break
        }
    })
}

export const create = async (name, options) => {
    logSuccess('Start to use buck')

    // check file
    isFileExist(name)
    // init project
    initProject(name)
    // choose feature
    const featureList = await getFeatureList()
    // install  feature
    installFeature(featureList)

    logSuccess('Finished!')
}

export const createRegister = () => {
    program
        .command('create')
        .argument('<app-name>', 'app name')
        .description('create a new project')
        // .option('-f, --force', 'If the target directory exists, overwrite it directly')
        .action((name, options) => {
            create(name, options)
        })
}
```

### 创建 commitlint

```bash
mkdir -p lib/create/commitlint
touch lib/create/commitlint/install.js
```

`lib/create/commitlint/install.js`

```js
import shell from 'shelljs'

export const installCommitLint = () => {
    shell.exec('npm install -D @commitlint/cli @commitlint/config-conventional')

}
```

### 创建 eslint

```bash
mkdir -p lib/create/eslint
touch lib/create/eslint/{install.js, config.json}
```

`install.js`

```js
import shell from 'shelljs'
import { createRequire } from 'node:module';
import { writeFileSync } from 'fs'

export const config = createRequire(import.meta.url)('./config.json')

export const installESLint = () => {
    shell.exec('npm install -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser')
    shell.exec('npm pkg set scripts.lint="eslint . --ext .ts"')
    writeFileSync('./.eslintrc', JSON.stringify(config, null, 2), {
        encoding: 'utf-8'
    })
}
```

`config.json`

```js
{
    "env": {
        "es2021": true,
        "node": true,
        "browser": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ]
}
```

### 创建 prettier

```bash
mkdir -p lib/create/prettier
touch lib/create/prettier/{install.js, config.json}
```

`install.js`

```js
import shell from 'shelljs'
import { createRequire } from 'node:module';
import { writeFileSync } from 'fs'

export const config = createRequire(import.meta.url)('./config.json')

export const installPrettier = () => {
    shell.exec('npm install -D prettier eslint-plugin-prettier eslint-config-prettier')
    shell.exec('npm pkg set scripts.format="prettier . --write"')
    writeFileSync('./.prettierrc', JSON.stringify(config, null, 2), {
        encoding: 'utf-8'
    })
}
```

`config.json`

```json
{
    "printWidth": 100,
    "semi": true,
    "singleQuote": true,
    "trailingComma": "all",
    "proseWrap": "never",
    "htmlWhitespaceSensitivity": "strict",
    "endOfLine": "auto"
}
```
### 创建 typescript

```bash
mkdir -p lib/create/typescript
touch lib/create/typescript/{install.js, config.json}
```

`install.js`

```js
import shell from 'shelljs'
import { createRequire } from 'node:module';
import { writeFileSync } from 'fs'

export const config = createRequire(import.meta.url)('./config.json')

export const installTypeScript = () => {
    shell.exec('npm install -D typescript')
    shell.exec('npx tsc --init')
    writeFileSync('./tsconfig.json', JSON.stringify(config, null, 2))
}
```

`config.json`

```js
{
    "compilerOptions": {
        "target": "ES5",
        "module": "ESNext",
        "declaration": true,
        "esModuleInterop": true,
        "strict": true,
        "outDir": "./dist/types",
        "skipLibCheck": true,
        "removeComments": true
    },
    "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules"
    ]
}
```

### 支持命令

```bash
buck create test-app
```

## 创建 open 注册命令

```bash
mkdir -p lib/open-url && touch lib/open-url/index.js
```

`lib/open-url/index.js`

```js
import { program } from 'commander';
import open from 'open'
import { logError } from '../utils/text.js'

const website = {
    'npm': 'https://www.npmjs.com/',
    'github': 'https://github.com/'
}

// register command
export const openRegister = () => {

    const supportWebsite = Object.keys(website).join('、')

    program.command('open <url>')
        .description(`open ${supportWebsite} website url`)
        .action((name) => {
            const url = website[name]
            if (url) {
                open(url)
            } else {
                logError(`only support open ${supportWebsite}`)
            }

        })
}
```

### 支持命令

```bash
buck open url
```

## 参考

- [cli 工具](https://juejin.cn/post/7256702654579310652#heading-1)
- [w6s-cli](https://open.workplus.io/dev/start/#%E5%AE%89%E8%A3%85-cli)
- [掌握 Node CLI 工具开发，为团队研发提效！](https://juejin.cn/post/7178666619135066170#heading-34)
- https://github.com/gaojizu/wlm-cli/blob/main/index.mjs
- https://cloud.tencent.com/developer/article/1943050
- https://tonghuiwu.top/posts/917402534.html#toc-heading-12
- https://homework.imooc-lego.com/pages/%E5%85%AD%E4%B8%AA%E5%91%A8/02.%E8%84%9A%E6%89%8B%E6%9E%B6%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1%E5%92%8C%E6%A1%86%E6%9E%B6%E6%90%AD%E5%BB%BA.html
- https://www.npmjs.com/package/npm-home?activeTab=code