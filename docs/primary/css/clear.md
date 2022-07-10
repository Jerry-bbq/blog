---
sidebar: auto
---

# 清除浮动

## 额外标签法

给谁清除浮动，就在其后面额外增加一个个空白标签，并设置样式为设置`clear: both`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .content {
            border: 1px solid black;
        }

        .item {
            width: 30px;
            height: 20px;
            float: left;
        }
        .clear {
            clear: both
        }
    </style>
</head>
<body>
    <div class="content">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="clear"></div>
    </div>
</body>
</html>
```

## 创建BFC

父级添加样式`overflow: hidden`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .content {
            border: 1px solid black;
            overflow: hidden;
        }

        .item {
            width: 30px;
            height: 20px;
            float: left;
        }
    </style>
</head>
<body>
    <div class="content">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>
</body>
</html>
```

## 浮动元素的容器使用after伪元素

```css
.clearfix:after{
    content: "";
    display: block;
    clear: both;
    height: 0;
    visibility: hidden;
}
.clearfix{
    *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .content {
            border: 1px solid black;
            zoom: 1;
        }

        .content:after {
            content: "";
            display: block;
            clear: both;
            height: 0;
            visibility: hidden;
        }

        .item {
            width: 30px;
            height: 20px;
            float: left;
        }
    </style>
</head>

<body>
    <div class="content">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>
</body>

</html>
```

## 浮动元素的容器使用before和after双伪元素清除浮动

```css
.clearfix:after,.clearfix:before{
    content: "";
    display: table;
}
.clearfix:after{
    clear: both;
}
.clearfix{
    *zoom: 1;
}
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .content {
            border: 1px solid black;
            zoom: 1;
        }

        .content:after,
        .content:before {
            content: "";
            display: table;
        }

        .content:after {
            clear: both;
        }

        .item {
            width: 30px;
            height: 20px;
            float: left;
        }
    </style>
</head>

<body>
    <div class="content">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>
</body>

</html>
```