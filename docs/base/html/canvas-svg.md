---
sidebar: auto
---

# Canvas与SVG

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