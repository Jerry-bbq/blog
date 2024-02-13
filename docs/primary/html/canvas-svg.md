
# Canvas与SVG

SVG是一种使用XML描述2D图形的语言，canvas需要在js中绘制，而SVG只需要在html里面通过标签绘制即可

## SVG

- `SVG` 指可伸缩矢量图形 (Scalable Vector Graphics)
- 适合做google地图，因为是矢量图，缩放不影响显示
- 用svg标签，里面可以是circle标签

```xml
<svg width="100%" height="100%"  >
  <circle cx="300" cy="60" r="50" stroke="#ff0" stroke-width="3" fill="red" />
</svg>
```

- `SVG` 是一种使用 `XML` 描述 2D 图形的语言
- `SVG` 基于 `XML`，这意味着 `SVG DOM` 中的每个元素都是可用的。您可以为某个元素附加 `JavaScript` 事件处理器
- 在 `SVG` 中，每个被绘制的图形均被视为对象。如果 `SVG` 对象的属性发生变化，那么浏览器能够自动重现图形

特点：

- 不依赖分辨率
- 支持事件处理器
- 最适合带有大型渲染区域的应用程序（比如谷歌地图）
- 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
- 不适合游戏应用

## Canvas

- `Canvas` 通过 `JavaScript` 来绘制 2D 图形
- `Canvas` 是逐像素进行渲染的
- 在 `Canvas` 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象

特点：

- 依赖分辨率
- 不支持事件处理器
- 弱的文本渲染能力
- 能够以 .png 或 .jpg 格式保存结果图像
- 最适合图像密集型的游戏，其中的许多对象会被频繁重绘

## 对比简述

都是2D做图，svg是矢量图，canvas是位图。Canvas 是逐像素进行渲染的，适合游戏

## canvas绘图

默认坐标系：

![Canvas_default_grid](./images/Canvas_default_grid.png)

canvas元素只有两个属性`width`、`height`

```html
<canvas id="canvas" width="200" height="200"></canvas>
```

```js
// 获取HTML元素的引用
const canvas = document.getElementById('canvas');
// 获取元素的context
const ctx = canvas.getContext('2d');
```

### 绘制矩形Rect

- ctx.fillRect(x, y, width, height)：填充矩形（默认颜色时黑色）
- ctx.strokeRect(x, y, width, height)：矩形边框
- ctx.clearRect(x, y, width, height)：清除指定矩形区域，让清除部分完全透明
- ctx.fillStyle = 'red'：设置填充色（需要先设置填充色，在创建填充矩形，或者填充色失效）

说明：
- x与y指定矩形的左上角（相对于原点）的坐标
- width和height设置矩形的尺寸

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <canvas id="canvas" width="200" height="200" style="border: 1px solid #999;"></canvas>
    <button id="btn">清除</button>
    <script>
        document.getElementById('btn').addEventListener('click', ()=> {
            ctx.clearRect(0, 0, 50, 50)
        })
        // 获取HTML元素的引用
        const canvas = document.getElementById('canvas');
        // 获取元素的context
        const ctx = canvas.getContext('2d');

        // 绘制矩形
        ctx.fillStyle = 'red'
        ctx.fillRect(0, 0, 100, 100)
        ctx.strokeRect(0, 0, 150,150)
    </script>
</body>

</html>
```

### 绘制路径Path

- 创建路径起始点
- 使用画图命令
- 将路径封闭
- 路径生成后，可以描边或填充

- ctx.beginPath()：创建一条路径
- ctx.moveTo(x, y)：起始点
- ctx.lineTo(x, y)：绘制一条从当前位置到指定x以及y位置的直线
- ctx.closePath()：闭合路径（闭合当前点到起始点），非必须的
- ctx.stroke()：通过线条来绘制图形轮廓
- ctx.fill()：填充路径内容

### 绘制圆弧

- ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)：画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。