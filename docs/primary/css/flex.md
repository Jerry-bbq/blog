
# flex

flex是`flexible box`的缩写，又叫弹性布局；任何一个容器都可以指定为 Flex 布局，比如块级元素div、行内元素span等。

::: danger

设为flex布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。

:::

采用flex布局的元素，称为容器flex container，他所有的子元素称为容器成员flex item。

默认有两根轴：

- 水平的主轴 **main axis**
- 垂直的交叉轴 **cross axis**

![](./images/flex-box.png)

## 容器属性

```css
.box {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  /* flex-flow: row nowrap; */
  align-items: center;
  justify-content: center;
}
```

### flex-direction

决定主轴的方向

-  row(默认值) 
-  row-reverse 
-  column 
-  column-reverse

### flex-wrap

默认项目是排列在一条轴线上的，如果一条轴线排不下，如何换行

- nowrap(默认值) 
- wrap 
- wrap-reverse

### flex-flow

是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`

### justify-content

定义了项目在主轴上项目的对齐方式

- flex-start(默认值) 
- flex-end 
- center 
- space-between 
- space-around

### align-items

定义项目在交叉轴上如何对齐

- flex-start 
- flex-end 
- center 
- baseline 
- stretch

### align-content

定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用

- flex-start 
- flex-end 
- center 
- space-between 
- space-around 
- stretch

## 项目属性

```css
.item {
  flex: 1 auto;
}
```

### order

定义项目的排列顺序。数值越小，排列越靠前，默认为0

### flex-grow

定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大

### flex-shrink

定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小

### flex-basis

定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小

### flex

flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选

### align-self

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch

[参考](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)


## 其他

- [layout](https://layout.bradwoods.io/customize)：在线体验，包含 `grid` 布局