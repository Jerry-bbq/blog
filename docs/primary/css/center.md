# 元素水平垂直居中

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style></style>
</head>
<body>
    <div class="content">
        <div class="item">text</div>
    </div>
</body>
</html>
```

## flex

```css:line-numbers{6-8}
.content {
    border: 1px solid black;
    width: 200px;
    height: 200px;

    display: flex;
    justify-content: center;
    align-items: center;
}
```

## position

```css:line-numbers{5,12-17}
.content {
    border: 1px solid black;
    width: 200px;
    height: 200px;
    position: relative;
}

.item {
    width: 50px;
    height: 50px;
    background: green;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
```

## position + transform

```css:line-numbers{5,9-12}
.content {
    border: 1px solid black;
    width: 200px;
    height: 200px;
    position: relative;
}

.item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

transform的属性：

| 属性 | 具体 |
|---|---|
| 转换 | translate(x,y)、translateX(x)、translateY(y)、translateZ(z)、translate3d(x,y,z) |
| 缩放 | scale((x,y)、scaleX(x)、scaleY(y)、scaleZ(z)、scale3d((x,y,z) |
| 旋转 | rotate(angle)、rotateX(angle)、rotateY(angle)、rotateZ(angle)、rotate3d(x,y,z,angle) |
| 倾斜 | skew(x-angle,y-angle)、skewX(angle)、skewY(angle) |
| 透视 | perspective(n) |

## table-cell

```css:line-numbers{6-8}
.content {
    border: 1px solid black;
    width: 200px;
    height: 200px;

    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
