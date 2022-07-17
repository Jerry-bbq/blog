# 牛客网

## JS

### 直角三角形

请补全JavaScript代码，要求在页面上渲染出一个直角三角形，三角形换行要求使用"br"实现。三角形如下：

```js
*
**
***
```

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <div class='triangle'></div>

        <script>
            var triangle = document.querySelector('.triangle');
            // 补全代码
            triangle.innerHTML = `*<br>**<br>***<br>`
        </script>
    </body>
</html>
```

### 文件扩展名

请补全JavaScript代码，要求以字符串的形式返回文件名扩展名，文件名参数为"filename"。

```js
const _getExFilename = (filename) => {
    // 补全代码
    let index = filename.lastIndexOf('.')
    return filename.slice(index)
}
```

###  分隔符

请补全JavaScript代码，要求返回参数数字的千分位分隔符字符串。

- 输入：_comma(12300)
- 输出：'12,300'

```js
function _comma(number) {
    // 补全代码
    return number.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}
```

### 单向绑定

请补全JavaScript代码，要求每当id为"input"的输入框值发生改变时触发id为"span"的标签内容同步改变。
注意：
1. 必须使用DOM0级标准事件（onchange）

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
    </head>
    <body>
    	<input id="input" type="text"/>
        <span id="span"></span>

        <script type="text/javascript">
            // 补全代码
            document.getElementById('input').onchange = function() {
                document.getElementById('span').innerHTML = this.value
            }
        </script>
    </body>
</html>
```

### 创建数组

请补全JavaScript代码，要求返回一个长度为参数值并且每一项值都为参数值的数组。
注意：
1. 请勿直接使用for/while

```js
const _createArray = (number) => {
    return new Array(number).fill(number)
}
```

### 判断版本

请补全JavaScript代码，该函数接收两个参数分别为旧版本、新版本，当新版本高于旧版本时表明需要更新，返回true，否则返回false。
注意：
1. 版本号格式均为"X.X.X"
2. X∈[0,9]
3. 当两个版本号相同时，不需要更新

```js
const _shouldUpdate = (oldVersion, newVersion) => {
    let o = Number(oldVersion.replace(/\./g, ''))
    let n = Number(newVersion.replace(/\./g, ''))
    return n > o
}

_shouldUpdate('1.0.1', '1.0.0')
```

### 无重复数组

请补全JavaScript代码，实现一个函数，要求如下：
1. 根据输入的数字范围[start,end]和随机数个数"n"生成随机数
2. 生成的随机数存储到数组中，返回该数组
3. 返回的数组不能有相同元素
注意：
1. 不需要考虑"n"大于数字范围的情况

```js
```