# CSS动画

关键帧`@keyframes`

- [CSS animations ](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

## 基本格式

```css
@keyframes animation-name {
    0% {}
    68%, 72% {}
    100% {}
}

.className {
    animation-name: animation-name;
    animation-duration: 1s;
}
```

- `0%/from`
- `100%/to`

## 配置动画

| 属性 | 说明 | 默认值 |
|---|---|---|
| animation-name | 关键帧名称 | none |
| animation-duration | 动画一个周期的时长 | 0s |
| animation-delay | 设置延时，即从元素加载完成之后到动画序列开始执行的这段时间 | 0s |
| animation-direction | 设置动画在每次运行完后是反向运行还是重新回到开始位置重复运行 | normal |
| animation-iteration-count | 设置动画重复次数，可以指定 infinite 无限次重复动画 | 1 |
| animation-play-state | 允许暂停和恢复动画 | running |
| animation-timing-function | 设置动画速度，即通过建立加速度曲线，设置动画在关键帧之间是如何变化 | ease |
| animation-fill-mode | 指定动画执行前后如何为目标元素应用样式 | none |

简写方式

```css
.className {
    animation: animation-name duration delay direction iteration-count play-state timing-function fill-mode;
}
```

## 实现

- 参考[animate.css](https://github.com/animate-css/animate.css)

### fadeIn

:::: code-group
::: code-group-item css
```css
.box {
    width: 300px;
    height: 300px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
}
.item {
    width: 100px;
    height: 100px;
    border: 1px solid #000;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.fadeIn {
    animation-name: fade-in;
    animation-duration: 10s;
}
```
:::
::: code-group-item html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./animation.css">
</head>
<body>
    <div class="box">
        <div class="fadeIn item"></div>
    </div>
</body>

</html>
```
:::
::::

### fadeInLeft

```css
@keyframes fade-in-left {
    from {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

.fadeInLeft {
    animation-name: fade-in-left;
    animation-duration: 1s;
}
```

### slideInLeft

```css
@keyframes slideInLeft {
    from {
        transform: translate3d(-100%, 0, 0);
        visibility: visible;
    }

    to {
        transform: translate3d(0, 0, 0);
    }
}

.slideInLeft {
    /* animation-name: slideInLeft;
    animation-duration: 1s; */
    animation: slideInLeft 1s;
}
```

### rotateIn

```css
@keyframes rotateIn {
    from {
        transform: rotate3d(0, 0, 1, -200deg);
        opacity: 0;
    }

    to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
}

.rotateIn {
    animation-name: rotateIn;
    animation-duration: 1s;
    transform-origin: center;
    animation-iteration-count: infinite;
}
```