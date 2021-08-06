---
sidebar: auto
---

# Node版本管理

`nvm`(**Node Version Manager**)：`Node`版本管理工具

## 安装教程

[nvm mac安装教程](https://github.com/nvm-sh/nvm#troubleshooting-on-macos)

## 下载

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash
```

### 设置`.bash_profile`

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

### 保存

```sh
source ~/.bashrc
```

### 验证

```sh
nvm --version
```

## 列出所有安装的版本

```sh
nvm ls
```

## 安装指定版本

```sh
nvm install <version>
# 或者安装稳定版本
nvm install node
```

## 临时使用某个版本

```sh
nvm use stable
# 或者
nvm use v14.14.0
```

::: warning

开启新的`Terminal`窗口的时候就失效了

:::

## 设置默认版本

```sh
nvm alias default v15.11.0 
```

## 卸载某个版本

```sh
nvm uninstall <version>
```

## 更多使用方法

更多使用方法可通过`nvm -v`来查看
