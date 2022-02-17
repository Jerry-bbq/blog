---
sidebar: auto
---

# 浏览器

浏览器的引擎主要分为渲染引擎（布局引擎）和JavaScript引擎

## 浏览器的高层组件

![layers](./images/layers.png)

- User interface：用户界面，包括地址栏、前进后退按钮、书签等
- Browser engine：浏览器引擎，在用户界面和渲染引擎之间传送指令
- Rendering engine：渲染引擎，负责显示请求的内容，如解析HTML、CSS内容，并将解析后的内容显示在屏幕上
- Networking：网络，用于网络调用，比如HTTP请求
- UI backend：用户界面后端，用于绘制基础的窗口小部件，比如组合框和窗口
- JavaScript interpreter：javascript解释器，用于解析和执行javascript代码
- Data storage：数据存储，如cookie

和大多数浏览器不同，chrome浏览器的每一个标签都分别对应一个渲染引擎，每个标签都是一个独立的进程

## 渲染引擎

市面上浏览器的渲染引擎大概有如下四类：

- Trident内核: IE
- Gecko内核: FireFox
- Presto内核: Opera7
- WebKit内核: Chrome、Safari

打开浏览器的控制台，通过`navigator.userAgent`查看不同浏览器内核：

```js
// chrome
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'

// firefox
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.0; rv:57.0) Gecko/20100101 Firefox/57.0"

// safari
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Safari/605.1.15"
```

### 渲染引擎的主流程

![flow](./images/flow.png)

- 解析HTML文档为DOM节点，同时也会解析CSS文件，创建一个渲染树
- 渲染树中包含多个视觉属性（如颜色和尺寸）的矩形，这些矩形的排列顺序就是它们将在屏幕上显示的顺序
- 渲染树构建完成之后，进入「布局」处理阶段，也就是每个节点分配一个应出现在屏幕上的确切坐标
- 最后是「绘制」阶段，渲染引擎遍历渲染树，由用户界面后端层将每个节点绘制出来

渲染引擎不必等到整个HTML文档解析完毕之后，就会开始构建渲染树和设置布局，在不断接受和处理来自网络的其余内容的同时，渲染引擎会将部分内容解析并显示出来

### 渲染引擎的主流程示例

Webkit主流程:

![webkitflow](./images/webkitflow.png)

Gecko渲染引擎主流程：

![image008](./images/image008.jpeg)

虽然 WebKit 和 Gecko 使用的术语略有不同，但整体流程是基本相同的。

Gecko 将视觉格式化元素组成的树称为“框架树”。每个元素都是一个框架。WebKit 使用的术语是“渲染树”，它由“渲染对象”组成。对于元素的放置，WebKit 使用的术语是“布局”，而 Gecko 称之为“重排”。对于连接 DOM 节点和可视化信息从而创建渲染树的过程，WebKit 使用的术语是“附加”。有一个细微的非语义差别，就是 Gecko 在 HTML 与 DOM 树之间还有一个称为“内容槽”的层，用于生成 DOM 元素

### 解析Parsing

解析文档是指将文档转为有意义的的结构，也就是可以让代码理解和使用的结构，解析得到的结果通常代表了文档结构的节点树，它也可称为解析树或者语法树。

解析是以文档遵循的的语法规则为基础。所有可以解析的格式都必须对应确定的语法。

解析的过程分为两个子过程：词法分析和语法分析

HTML 解析器的任务是将 HTML 标记解析成解析树。

HTML 语法定义，HTML 的词汇和语法在 W3C 组织创建的规范中进行了定义

HTML 的定义采用了 DTD 格式，DTD 存在一些变体。严格模式完全遵守 HTML 规范，而其他模式可支持以前的浏览器所使用的标记

解析器的输出“解析树”是由 DOM 元素和属性节点构成的树结构。DOM 是文档对象模型 (Document Object Model) 的缩写。它是 HTML 文档的对象表示，同时也是外部内容（例如 JavaScript）与 HTML 元素之间的接口。
解析树的根节点是“Document”对象。


## JavaScript引擎

JavaScript引擎是执行JavaScript代码的软件组织。JavaScript引擎通常由浏览器供应商开发，也就是每个浏览器的JavaScript引擎多多少少都有一些区别。JavaScript引擎不仅局限于浏览器，例如V8引擎和Deno运行时系统

JavaScript引擎的作用就是用来运行JavaScript代码

## 参考

- [浏览器的工作原理：新式网络浏览器幕后揭秘](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/#The_rendering_engine)
- [StatCounter 浏览器统计数据](https://gs.statcounter.com/)
  - [中国桌面端浏览器市场份额](https://gs.statcounter.com/browser-market-share/desktop/china)