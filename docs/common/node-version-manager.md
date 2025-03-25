
# NODE版本管理

## nvm

`nvm`(**Node Version Manager**)：`Node`版本管理工具

### 安装教程

[nvm mac安装教程](https://github.com/nvm-sh/nvm#troubleshooting-on-macos)

### 下载

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash
```

#### 设置`.bash_profile`

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

#### 保存

```sh
source ~/.bashrc
```

#### 验证

```sh
nvm --version
```

### 列出所有安装的版本

```sh
nvm ls
```

### 安装指定版本

```sh
nvm install <version>
# 或者安装稳定版本
nvm install node
```

### 临时使用某个版本

```sh
nvm use stable
# 或者
nvm use v14.14.0
```

::: warning

开启新的`Terminal`窗口的时候就失效了

:::

### 设置默认版本

```sh
nvm alias default v15.11.0 
```

### 卸载某个版本

```sh
nvm uninstall <version>
```

### 更多使用方法

更多使用方法可通过`nvm -v`来查看


### 锁定 Node.js 版本 & 自动切换

1. 在项目根目录创建 `.nvmrc`,写入 Node.js 版本
   ```sh
   14.14.0
   ```
2. 自动切换（Shell 钩子），在 `~/.zshrc` 或 `~/.bashrc` 中添加
   ```sh
    autoload -U add-zsh-hook
    load-nvmrc() {
    if [[ -f .nvmrc && -r .nvmrc ]]; then
        nvm use
    fi
    }
    add-zsh-hook chpwd load-nvmrc
   ```

## Volta

[Volta](https://volta.sh/)

```sh
# 安装 Volta
curl https://get.volta.sh | bash
source ~/.bash_profile

# check
volta --version

# 安装 Node
volta install node

# start using Node
node
```

## fnm

[fnm](https://github.com/Schniz/fnm)


```sh
# 安装 fnm
curl -fsSL https://fnm.vercel.app/install | bash
```