# 浏览器的回流与重绘

## 回流（Reflow）

当渲染树`Render Tree`中**部分或全部元素的尺寸、结构、或某些属性发生改变**时，浏览器重新渲染部分或全部文档的过程称为回流

## 重绘（Repaint）

当页面中**元素样式的改变并不影响它在文档流中的位置**时（例如：`color`、`background-color`、`visibility`等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。

::: danger :fire:
**回流必将引起重绘**，重绘不一定会引起回流
:::

## 可能导致回流的操作

- 页面首次渲染
- 浏览器窗口大小发生改变
- 元素尺寸或位置发生改变
- 元素内容变化（文字数量或图片大小等等）
- 元素字体大小变化
- DOM元素的增加、删除
- 激活CSS伪类（例如：:hover）
- 查询某些属性或调用某些方法

一些常用且会导致回流的属性和方法：

- clientWidth、clientHeight、clientTop、clientLeft
- offsetWidth、offsetHeight、offsetTop、offsetLeft
- scrollWidth、scrollHeight、scrollTop、scrollLeft
- scrollIntoView()、scrollIntoViewIfNeeded()
- getComputedStyle()
- getBoundingClientRect()
- scrollTo()

## 如何避免浏览器的回流

### 1. CSS层面

- 避免使用`table布局`
- 尽可能在DOM树的最末端改变class
- 避免设置多层内联样式
- 将动画效果应用到`position`属性为`absolute`或`fixed`的元素上
- 避免使用CSS表达式（例如：`calc()`）

### 2. JS层面

- 避免频繁操作样式，最好一次性重写`style`属性，或者将样式列表定义为class并一次性更改class属性
- 避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中
- 也可以先为元素设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘
- 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来
- 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流