---
sidebar: auto
---

# 声明文档类型DOCTYPE

`DOCTYPE`（全称`Document Type`，又叫文档类型），告诉浏览器的解析器使用哪种**文档类型定义**（DTD规范）来解析页面（简单来说，就是声明文档类型）

::: tip 说明

DTD（Document Type Defination，文档类型定义）是一系列的语法规则，用来定义XML或(X)HTML的文件类型。浏览器会使用它来判断文档类型，决定使用何种协议来解析，以及切换浏览器模式。（告诉浏览器当前文档是什么文档类型，浏览器使用相应的引擎来解析和渲染）

:::

## 常用声明方式

### HTML5

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

### HTML4.01 Strict（严格模式）

该DTD包含所有HTML元素和属性，但是**不包含展示类的和弃用类的元素**（比如`font`）

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

### HTML4.01 Transitional（传统模式）

该DTD包含所有HTML元素和属性，包含展示类的和弃用类的元素（比如font）

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```