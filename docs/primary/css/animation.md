# CSS动画

关键帧`@keyframes`

- [CSS animations ](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [在线调试工具keyframes.app](https://keyframes.app/)
  
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

::: code-group

```css [css]
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
```html  [html]
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

## animate.css库分析

::: code-group
```css [入口文件_animations.css]
@import '_vars.css';
@import '_base.css';

/* Attention seekers  */
@import 'attention_seekers/bounce.css';
@import 'attention_seekers/flash.css';
@import 'attention_seekers/pulse.css';
@import 'attention_seekers/rubberBand.css';
@import 'attention_seekers/shakeX.css';
@import 'attention_seekers/shakeY.css';
@import 'attention_seekers/headShake.css';
@import 'attention_seekers/swing.css';
@import 'attention_seekers/tada.css';
@import 'attention_seekers/wobble.css';
@import 'attention_seekers/jello.css';
@import 'attention_seekers/heartBeat.css';

/* Back entrances */
@import 'back_entrances/backInDown.css';
@import 'back_entrances/backInLeft.css';
@import 'back_entrances/backInRight.css';
@import 'back_entrances/backInUp.css';

/* Back exits */
@import 'back_exits/backOutDown.css';
@import 'back_exits/backOutLeft.css';
@import 'back_exits/backOutRight.css';
@import 'back_exits/backOutUp.css';

/* Bouncing entrances  */
@import 'bouncing_entrances/bounceIn.css';
@import 'bouncing_entrances/bounceInDown.css';
@import 'bouncing_entrances/bounceInLeft.css';
@import 'bouncing_entrances/bounceInRight.css';
@import 'bouncing_entrances/bounceInUp.css';

/* Bouncing exits  */
@import 'bouncing_exits/bounceOut.css';
@import 'bouncing_exits/bounceOutDown.css';
@import 'bouncing_exits/bounceOutLeft.css';
@import 'bouncing_exits/bounceOutRight.css';
@import 'bouncing_exits/bounceOutUp.css';

/* Fading entrances  */
@import 'fading_entrances/fadeIn.css';
@import 'fading_entrances/fadeInDown.css';
@import 'fading_entrances/fadeInDownBig.css';
@import 'fading_entrances/fadeInLeft.css';
@import 'fading_entrances/fadeInLeftBig.css';
@import 'fading_entrances/fadeInRight.css';
@import 'fading_entrances/fadeInRightBig.css';
@import 'fading_entrances/fadeInUp.css';
@import 'fading_entrances/fadeInUpBig.css';
@import 'fading_entrances/fadeInTopLeft.css';
@import 'fading_entrances/fadeInTopRight.css';
@import 'fading_entrances/fadeInBottomLeft.css';
@import 'fading_entrances/fadeInBottomRight.css';

/* Fading exits */
@import 'fading_exits/fadeOut.css';
@import 'fading_exits/fadeOutDown.css';
@import 'fading_exits/fadeOutDownBig.css';
@import 'fading_exits/fadeOutLeft.css';
@import 'fading_exits/fadeOutLeftBig.css';
@import 'fading_exits/fadeOutRight.css';
@import 'fading_exits/fadeOutRightBig.css';
@import 'fading_exits/fadeOutUp.css';
@import 'fading_exits/fadeOutUpBig.css';
@import 'fading_exits/fadeOutTopLeft.css';
@import 'fading_exits/fadeOutTopRight.css';
@import 'fading_exits/fadeOutBottomRight.css';
@import 'fading_exits/fadeOutBottomLeft.css';

/* Flippers */
@import 'flippers/flip.css';
@import 'flippers/flipInX.css';
@import 'flippers/flipInY.css';
@import 'flippers/flipOutX.css';
@import 'flippers/flipOutY.css';

/* Lightspeed */
@import 'lightspeed/lightSpeedInRight.css';
@import 'lightspeed/lightSpeedInLeft.css';
@import 'lightspeed/lightSpeedOutRight.css';
@import 'lightspeed/lightSpeedOutLeft.css';

/* Rotating entrances */
@import 'rotating_entrances/rotateIn.css';
@import 'rotating_entrances/rotateInDownLeft.css';
@import 'rotating_entrances/rotateInDownRight.css';
@import 'rotating_entrances/rotateInUpLeft.css';
@import 'rotating_entrances/rotateInUpRight.css';

/* Rotating exits */
@import 'rotating_exits/rotateOut.css';
@import 'rotating_exits/rotateOutDownLeft.css';
@import 'rotating_exits/rotateOutDownRight.css';
@import 'rotating_exits/rotateOutUpLeft.css';
@import 'rotating_exits/rotateOutUpRight.css';

/* Specials */
@import 'specials/hinge.css';
@import 'specials/jackInTheBox.css';
@import 'specials/rollIn.css';
@import 'specials/rollOut.css';

/* Zooming entrances */
@import 'zooming_entrances/zoomIn.css';
@import 'zooming_entrances/zoomInDown.css';
@import 'zooming_entrances/zoomInLeft.css';
@import 'zooming_entrances/zoomInRight.css';
@import 'zooming_entrances/zoomInUp.css';

/* Zooming exits */
@import 'zooming_exits/zoomOut.css';
@import 'zooming_exits/zoomOutDown.css';
@import 'zooming_exits/zoomOutLeft.css';
@import 'zooming_exits/zoomOutRight.css';
@import 'zooming_exits/zoomOutUp.css';

/* Sliding entrances */
@import 'sliding_entrances/slideInDown.css';
@import 'sliding_entrances/slideInLeft.css';
@import 'sliding_entrances/slideInRight.css';
@import 'sliding_entrances/slideInUp.css';

/* Sliding exits */
@import 'sliding_exits/slideOutDown.css';
@import 'sliding_exits/slideOutLeft.css';
@import 'sliding_exits/slideOutRight.css';
@import 'sliding_exits/slideOutUp.css';
```
```css [变量文件_vars.css]
:root {
  --animate-duration: 1s;
  --animate-delay: 1s;
  --animate-repeat: 1;
}
```
```css [基础文件_base.css]
.animated {
  animation-duration: var(--animate-duration);
  animation-fill-mode: both;
}

.animated.infinite {
  animation-iteration-count: infinite;
}

.animated.repeat-1 {
  animation-iteration-count: var(--animate-repeat);
}

.animated.repeat-2 {
  animation-iteration-count: calc(var(--animate-repeat) * 2);
}

.animated.repeat-3 {
  animation-iteration-count: calc(var(--animate-repeat) * 3);
}

.animated.delay-1s {
  animation-delay: var(--animate-delay);
}

.animated.delay-2s {
  animation-delay: calc(var(--animate-delay) * 2);
}

.animated.delay-3s {
  animation-delay: calc(var(--animate-delay) * 3);
}

.animated.delay-4s {
  animation-delay: calc(var(--animate-delay) * 4);
}

.animated.delay-5s {
  animation-delay: calc(var(--animate-delay) * 5);
}

.animated.faster {
  animation-duration: calc(var(--animate-duration) / 2);
}

.animated.fast {
  animation-duration: calc(var(--animate-duration) * 0.8);
}

.animated.slow {
  animation-duration: calc(var(--animate-duration) * 2);
}

.animated.slower {
  animation-duration: calc(var(--animate-duration) * 3);
}

@media print, (prefers-reduced-motion: reduce) {
  .animated {
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
    animation-iteration-count: 1 !important;
  }

  .animated[class*='Out'] {
    opacity: 0;
  }
}
```
:::