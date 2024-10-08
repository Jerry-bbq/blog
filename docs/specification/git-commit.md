# Git提交规范

## 约定式提交

[约定式提交(Conventional Commits)](https://www.conventionalcommits.org/)，约定式提交规范是一种基于提交信息的轻量级约定。 它提供了一组简单规则来创建清晰的提交历史； 这更有利于编写自动化工具。 通过在提交信息中描述功能、修复和破坏性变更

提交说明的结构如下：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

```
<类型>[可选 范围]: <描述>

[可选 正文]

[可选 脚注]
```

## 常用类型字段

- `fix`: 表示在代码库中修复了一个 `bug`
- `feat`: 表示在代码库中新增了一个功能
- `build`: 用于修改项目构建系统，例如修改依赖库、外部接口或者升级 `Node` 版本等；
- `chore`: 用于对非业务性代码进行修改，例如修改构建流程或者工具配置等；
- `ci`: 用于修改持续集成流程，例如修改 `Travis`、`Jenkins` 等工作流配置；
- `docs`: 用于修改文档，例如修改 `README` 文件、 `API` 文档等；
- `style`: 用于修改代码的样式，例如调整缩进、空格、空行等；
- `refactor`: 用于重构代码，例如修改代码结构、变量名、函数名等但不修改功能逻辑；
- `perf`: 用于优化性能，例如提升代码的性能、减少内存占用等；
- `test`: 用于修改测试用例，例如添加、删除、修改代码的测试用例等。

::: tip

可以自定义类型字段，如 `release` 、 `revert` 、 `workflow` 等

:::

## 规范

1. 每个提交都 **必须** 使用类型字段前缀，它由一个名词构成，诸如 `feat` 或 `fix` ， 其后接**可选的**范围字段，可选的 `!`，以及**必要的**冒号（英文半角）和空格。
   
2. 当一个提交为应用或类库实现了新功能时， **必须** 使用 `feat` 类型。
   
3. 当一个提交为应用修复了 bug 时， **必须** 使用 `fix` 类型。
   
4. 范围字段可以跟随在类型字段后面。范围 **必须** 是一个描述某部分代码的名词，并用圆括号包围，例如： `fix(parser):`
   
5. 描述字段 **必须** 直接跟在 **<类型>(范围) 前缀的冒号和空格** 之后。 描述指的是对代码变更的简短总结，例如： `fix: array parsing issue when multiple spaces were contained in string` 。
   
6. 在简短描述之后，可以编写较长的提交正文，为代码变更提供额外的上下文信息。正文 **必须** 起始于描述字段结束的一个空行后。
   
7. 提交的正文内容自由编写，并可以使用空行分隔不同段落。
   
8. 在正文结束的一个空行之后，可以编写一行或多行脚注。每行脚注都 **必须** 包含 一个令牌（token），后面紧跟 `:<space>` 或 `<space>#` 作为分隔符，后面再紧跟令牌的值（受 [git trailer convention](https://git-scm.com/docs/git-interpret-trailers) 启发）。
   
9.  脚注的令牌 **必须** 使用 `-` 作为连字符，比如 `Acked-by` (这样有助于 区分脚注和多行正文)。有一种例外情况就是 `BREAKING CHANGE`，它可以被认为是一个令牌。
    
10. 脚注的值可以包含空格和换行，值的解析过程 **必须** 直到下一个脚注的令牌/分隔符出现为止
    
11. 破坏性变更 **必须** 在提交信息中标记出来，要么在 <类型>(范围) 前缀中标记，要么作为脚注的一项。
    
12. 包含在脚注中时，破坏性变更 **必须** 包含大写的文本 `BREAKING CHANGE`，后面紧跟着冒号空格，然后是描述，例如： B`REAKING CHANGE: environment variables now take precedence over config files` 。
    
13. 包含在 <类型>(范围) 前缀时，破坏性变更 **必须** 通过把 `!` 直接放在 `:` 前面标记出来。 如果使用了 `!`，那么脚注中可以不写 `BREAKING CHANGE:`， 同时提交信息的描述中 **应该** 用来描述破坏性变更。
    
14. 在提交说明中，可以使用 `feat` 和 `fix` 之外的类型，比如：`docs: updated ref docs.` 。
    
15. 工具的实现 **必须** **不区分**大小写地解析构成约定式提交的信息单元，只有 `BREAKING CHANGE`  **必须** 是大写的。
    
16. `BREAKING-CHANGE` 作为脚注的令牌时 **必须** 是 `BREAKING CHANGE` 的同义词。

## 为什么使用约定式提交

- 自动化生成 `CHANGELOG` 。 

- 基于提交的类型，自动决定语义化的版本变更。

- 向同事、公众与其他利益关系者传达变化的性质。

- 触发构建和部署流程。

- 让人们探索一个更加结构化的提交历史，以便降低对你的项目做出贡献的难度。

## 自动化

通过 `husky` + `commitlint` 实现自动化校验提交是否符合规范

## 其他

- 安装 [Git](https://git-scm.com/)
- `VSCode`推荐使用插件 [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)