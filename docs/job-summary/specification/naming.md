# 命名规范

## 常见命名方式

1. 驼峰命名法（ `Camel Case` ）：
   - :fire:小驼峰命名法（ `lowerCamelCase` ）：第一个单词的首字母小写，后续单词的首字母大写。例如： `myVariableName` 。
   - :fire:大驼峰命名法（`UpperCamelCase`）：每个单词的首字母都大写。通常用于类名。例如：`MyClassName` 。
2. 蛇形命名法（ `Snake Case` ）：
   - 单词之间用下划线（_）分隔。通常用于文件名、常量和全局变量。例如： `my_variable_name`。
3. :fire:短横线命名法（ `Kebab Case` ）：
   - 单词之间用短横线（-）分隔。通常用于 `HTML` 和 `CSS` 中的类名和 `ID` 。例如： `my-css-class`。
4. 匈牙利命名法（ `Hungarian Notation` ）：
   - 在变量名前添加表示数据类型或用途的前缀。例如：`strName` 表示字符串类型的变量，`nCount` 表示整数类型的计数器。
5. 帕斯卡命名法（ `Pascal` ）：
   - 所有字母都大写，单词之间没有分隔符。通常用于缩写词或首字母缩略词。例如： `XMLHttpRequest`。
6. 小写命名法：
   - 所有字母都小写，没有分隔符。通常用于URL、文件路径和文件扩展名。例如：`example.com`、`index.html`。
7. 帕斯卡蛇形命名法（ `Pascal Snake Case` ）：
   - 类似于大驼峰命名法，但单词之间用下划线（_）分隔。例如： `My_Variable_Name`。
8. 骆驼蛇形命名法（ `Camel Snake Case` ）：
   - 结合了小驼峰和蛇形命名法，通常用于数据库表和列名。例如： `employee_id`。

## 目录命名

推荐使用 `短横线命名法`，例如：`big-data-platform`

## 文件夹命名

推荐使用 `短横线命名法`，例如：`config-manage`

## 文件命名

- 非组件类文件推荐使用 `短横线命名法`，例如：`product-list.vue`
- 组件类推荐使用 `大驼峰命名法`，例如：`EditTenantModal.vue`

##  JS、CSS、SCSS、Less、HTML、PNG 等文件命名

- 推荐使用 `短横线命名法`，例如：`no-permission.svg`

## 变量、函数命名

- 推荐使用 `小驼峰命名法`，例如：`tokenInfo`、`getTableList`

## 类命名、构造函数命名

- 必须使用 `大驼峰命名法`

::: danger 提示

代码中的命名 **严禁** 使用拼音与英文混合的方式，更 **不允许** 直接使用中文的方式。 

说明：正确的 英文拼写和语法 可以让阅读者易于理解，避免歧义。注意，即使纯拼音命名方式也要避免采用

:::

## 其他

`VSCode`推荐使用代码拼写检查器插件[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)，避免有拼写错误