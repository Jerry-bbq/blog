---
sidebar: auto
---

# 水平垂直居中的方式

## flex

```css
// 父容器
display: flex;
justify-content: center;
align-items: center;
```

## position

```css
// 父容器
position: relative;

// 子容器
position: absolute;
margin: auto;
top: 0;
bottom: 0;
left: 0;
right: 0;
```

## position + transform

```css
// 父容器
position: relative;

// 子容器
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
```

> transform还有其他的属性:
>
> 1. 转换: translate(x,y), translateX(x), translateY(y), translateZ(z), translate3d(x,y,z)
> 2. 缩放: scale((x,y), scaleX(x), scaleY(y), scaleZ(z), scale3d((x,y,z)
> 3. 旋转: rotate(angle), rotateX(angle), rotateY(angle), rotateZ(angle), rotate3d(x,y,z,angle)
> 4. 倾斜: skew(x-angle,y-angle),skewX(angle), skewY(angle)
> 5. 透视: perspective(n)

## table-cell

```html
<div class="box">
    <div class="content">
        <div class="inner"></div>
    </div>
</div>
```

```css
html, body {
    height: 100%;
    width: 100%;
    margin: 0;
}
.box {
    display: table;
    height: 100%;
    width: 100%;
}
.content {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
.inner {
    background-color: #000;
    display: inline-block;
    width: 200px;
    height: 200px;
}
```