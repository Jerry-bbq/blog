# BFC

## 定义

`BFC`（Block Formatting Context）：**块级格式化上下文**，页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用

## BFC的规则

- BFC内部的Box盒子会在垂直方向，一个接一个地放置
- Box垂直方向的距离由margin决定，**属于同一个BFC的两个相邻Box的垂直margin会发生重叠**
- 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此
- BFC的区域不会与浮动盒子float box重叠
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此
- 计算BFC的高度时，浮动元素也参与计算

## 如何生成BFC

属性| 值
---|---
根元素html | `html`标签就是一个`BFC`
float | `left`、`right`(不为none)
position | `absolute`、`fixed`、`sticky`等（不为static或relative）
display | 值为`inline-block`, `table-cell`, `table-caption`, `flex`, `inline-flex`
overflow | `hidden`、`auto`、`scroll`等（不为visible）

## BFC的作用

- 分属于不同的`BFC`时可以 **阻止margin重叠**
- 避免浮动元素和其他元素重叠
- 清除内部浮动

参考[深入理解BFC](https://www.cnblogs.com/xiaohuochai/p/5248536.html)，可以演示效果
