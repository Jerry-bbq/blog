---
sidebar: auto
---

# git

git是一个分布式版本控制系统（distributed version control system）

::: tip 提示

术语：
- 版本控制系统（VCS）
- 源代码管理器（SCM）

:::

## 基础

### 下载安装

下载[git](https://git-scm.com)并安装

### 检测版本

```bash
git --version
# git version 2.15.0
```

### 克隆现有的仓库

```bash
git clone https://github.com/libgit2/libgit2
# 可以使用https://协议、git://协议、SSH传输协议（user@server:path/to/repo.git）
```

### 检测当前文件状态

```bash
# 输出十分详细
git status

# 缩短状态命令的输出
git status -s
# git status --short
```

### 跟踪新文件

```bash
git add .
# 将文件添加到暂存区
```

### 忽略文件

```bash
# 在根目录下创建文件.gitignore
cat .gitignore
```

文件 .gitignore 的格式规范如下：

- 所有空行或者以 # 开头的行都会被 Git 忽略。
- 可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中。
- 匹配模式可以以（/）开头防止递归。
- 匹配模式可以以（/）结尾指定目录。
- 要忽略指定模式以外的文件或目录，可以在模式前加上叹号（!）取反。

### 提交更新

```bash
# 将暂存区的文件提交
git commit -m 'upate'

# 跳过暂存区直接提交文件，就省了掉git add的步骤了
git commit -a -m 'update'
```

### 查看提交历史

```bash
# 按照时间先后顺序列出所有提交
git log

# 只显示hash和commit的信息
git log --pretty=oneline
# 显示7位的hash和commit的信息
git log --oneline
```

### 撤销操作

```bash
# 撤销commit提交
git commit --amend
```

## 规范代码提交格式

### commitizen

[commitizen](https://github.com/commitizen/cz-cli)是git代码提价规范工具，规范`commit message`格式

#### 安装

一般都安装在当前项目当中，而不是作为全局安装

```bash
npm install commitzen -D
# 或者
yarn add commitzen -D
```

#### 添加适配器cz-conventional-changelog

```bash
# npm
npx commitizen init cz-conventional-changelog --save-dev --save-exact
# yarn
npx commitizen init cz-conventional-changelog --yarn --dev --exact
```

::: warning

由于commitizen是安装在项目当中的，并不是全局的，所以需要加`npx`来使用命令`commitizen`

:::

这个时候，项目中会自动安装依赖`cz-conventional-changelog`，并在`package.json`中生成配置：

```json
{
    "config": {
        "commitizen": {
        "path": "./node_modules/cz-conventional-changelog"
        }
    }
}
```

到此，我们可以使用如下命令来提交代码：

```bash
git add .
npx cz
# 或 npx git-cz
git push
```

为了简化命令，我们可以将`npx cz`添加到`package.json`文件中：

```json
{
  "scripts": {
    "commit": "git-cz",
  }
}
```

### vscode插件git-commit-plugin

安装插件`git-commit-plugin`

### husky

[husky](https://github.com/typicode/husky)

[引用自gitee](https://gitee.com/all-about-git)