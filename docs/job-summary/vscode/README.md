---
sidebar: auto
---

# vscode常用插件

## Prettier配置

```json
{
    "editor.fontSize": 16,
    "files.associations": {
        "*.cjson": "jsonc",
        "*.wxss": "css",
        "*.wxs": "javascript"
    },
    "emmet.includeLanguages": {
        "wxml": "html"
    },
    "minapp-vscode.disableAutoConfig": true,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    /** -------- prettier的配置 start -------- **/
    "prettier.printWidth": 180, // 超过最大值换行
    "prettier.tabWidth": 2, // 缩进字节数
    "prettier.semi": false, // 句尾添加分号
    "prettier.singleQuote": true, // 使用单引号代替双引号
    "prettier.arrowParens": "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号

    "prettier.jsxSingleQuote": true,
    "javascript.updateImportsOnFileMove.enabled": "never",
    "prettier.resolveGlobalModules": true,
    "[json]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "[scss]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }, // 在jsx中使用单引号代替双引号
    /** -------- prettier的配置 end --------**/
}
```

## 常用插件

- `Svg Preview` svg预览
- prettier 代码格式化
- GitLens — Git supercharged
- Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code
- JS JSX Snippets
- React-Native/React/Redux snippets for es6/es7
- `vscode-pigments`：实时预览设置的颜色
- `Template String Converte`： 在字符串中输入$触发，将字符串转换为模板字符串
- `View In Browser`： 右键在浏览器中打开文件
- `Vetur`：开发vue必备
- `Vue 3 Snippets`
- `别名路径跳转`：别名路径跳转插件，支持任何项目，