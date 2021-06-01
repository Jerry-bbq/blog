---
sidebar: auto
---

# 清除浮动

## 额外标签法

给谁清除浮动，就在其后面额外增加一个个空白标签，并设置样式为设置`clear: both`

## 创建BFC

父级添加样式`overflow: hidden`

## 浮动元素使用after伪元素

```css
.clearfix:after{
    content: "";
    display: block;
    clear: both;
    height: 0;
    visibility: hidden;
}
.clearfix{
    *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}

```

## 使用before和after双伪元素清除浮动

```css
.clearfix:after,.clearfix:before{
    content: "";
    display: table;
}
.clearfix:after{
    clear: both;
}
.clearfix{
    *zoom: 1;
}
```