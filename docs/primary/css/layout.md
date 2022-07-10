---
sidebar: auto
---

# 页面布局

## 三栏布局

假设高度已知，请写出三栏布局，其中左栏，右栏宽度各300px，中间自适应

5种方案：

- flex布局
- 绝对定位布局absolute
- 浮动布局float
- 表格布局table
- 网格布局grid

### flex布局

```css
.content{
    display: flex;
}
.left {
    width: 300px;
}
.right {
    width: 300px;
}
.center {
    flex: 1;
}
```

### 绝对定位布局absolute

```css
.left,.right,.center {
    position: absolute;
}
.left {
    left: 0;
    width: 300px
}
.right {
    right: 0;
    width: 300px;
}
.center {
    left: 300px；
    right: 300px;
}
```

### 浮动布局float

```css
.left {
    float: left;
    width: 300px;
}
.right {
    float: right;
    width: 300px;
}
```

### 表格布局table

```css
.content {
    width: 100%;
    display: table;
    height: 100px;
}
.left,.right,.center {
    display: table-cell;
}
.left {
    width: 300px;
}
.right {
    width: 300px;
}
```

### 网格布局grid

```css
.content {
    display: grid;
    width: 100%;
    grid-template-rows: 100px;
    grid-template-columns: 300px auto 300px;
}
```

延伸：

1. 五种方案的优缺点：

- float: 需要清除浮动，因为浮动脱落文档流，优点是兼容性好
- 绝对定位：快捷，缺点：
- flex: 解决上述两个布局方式的问题
- 表格布局：兼容性好，缺点：
- 网格布局：css3新出的布局方式

2. 高度未知情况，哪个不再适用：

    float，绝对定位，网格布局不行，只有表格布局和flex布局通用

3.  兼容性如何，哪个最实用 ：

4. 页面布局的变通：

- 三栏布局：
    - 左右宽度固定，中间自适应
    - 上下高度固定，中间自适应（h5布局常用）
- 两栏布局
    - 左宽度固定，右自适应
    - 右宽度固定，左自适应
    - 上高度固定，下自适应
    - 下高度固定，上自适应

## 九宫格

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        li {
            list-style: none;
            text-align: center;
            background: orange;
        }
    </style>
</head>

<body>
    <div class="box">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
        </ul>
    </div>
</body>

</html>
```

### flex

```css
ul {
    display: flex;
    flex-wrap: wrap;
}

li {
    width: 30%;
    height: 30%;
    margin-right: 5%;
    margin-bottom: 5%;
}

/* 第3,6,9个格子右边距为0 */
li:nth-of-type(3n) {
    margin-right: 0;
}
/* 第7,8,9个格子下边距为0 ，n从0开始*/
li:nth-of-type(n+7) {
    margin-bottom: 0;
}
```

### grid

```css
ul {
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: 30% 30% 30%;
    grid-gap: 5%;
}
```

### float

```css
ul {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

li {
  float: left;
  width: 30%;
  height: 30%;
  margin-right: 5%;
  margin-bottom: 5%;
}

li:nth-of-type(3n){ 
  margin-right: 0;
}

li:nth-of-type(n+7){ 
  margin-bottom: 0;
}
```

###  inline-block

```css
ul {
  width: 100%;
  height: 100%;
  letter-spacing: -10px;
}

li {
  width: 30%;
  height: 30%;
  display: inline-block;
  margin-right: 5%;
  margin-bottom: 5%;
}

li:nth-of-type(3n){ 
  margin-right: 0;
}

li:nth-of-type(n+7){ 
  margin-bottom: 0;
}
```

### table

```html
<ul class="table">
  <li>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </li>
  <li>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </li>
  <li>
    <div>7</div>
    <div>8</div>
    <div>9</div>
  </li>
</ul>
```

```css
.table {
  width: 100%;
  height: 100%;
  display: table;
  border-spacing: 10px;
}

li {
  display: table-row; 
}

div {
  width: 30%;
  height: 30%;
  display: table-cell;
  text-align: center;
  border-radius: 5px;
  background: skyblue;
}
```

- flex布局平时用的比较多的布局方式
- grid布局实现起来非常方便，但是它的规范并未成熟，主流的浏览器使用较少，不推荐使用在企业项目中；
- 使用float可以使元素脱离文档流，形成BFC，在重新渲染时不会影响其他的元素。需要注意使用float的元素其父元素会塌陷，需要清除浮动。
- 使用inline-block来实现九宫格布局时，定义了inline-block的元素之间会出现间隙，需要清除；
table布局现在感觉用的比较少了，几乎很少在项目中使用table布局。
