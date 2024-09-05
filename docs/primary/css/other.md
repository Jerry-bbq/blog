# 其他

## display:none、visibile:hidden、opacity:0的区别

类型|是否隐藏 | 是否在文档中占用空间 | 是否会触发事件
---|---|---|---
display:none | 是 | 否 | 否
visibile:hidden | 是 | 是 | 否
opacity:0 | 是 | 是 | 是

## 文本超出部分显示省略号

单行

```css
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```

::: tip 复杂情况

如果后面跟icon，可以添加`padding-right`配合`position: absolute`来使用

注意：`overflow`会遮盖`position: absolute`

:::

多行

```css
.ellipsis-line {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; // 最多显示几行
    overflow: hidden;
}
```

## 实现一个等腰三角形 

- 盒子宽高设置为0
- 边框设置宽度和明度
- 边框设置宽度和颜色

```css
.triangle {
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-left: 50px solid black;
}
```

## box-show

在线调试工具：

- [Box Shadow](https://box-shadow.art/)
- [lingdaima](https://lingdaima.com/shadow/)

## CSS玻璃风格工具

- [Glass Morphism](https://glassgenerator.netlify.app/)

## 在线SVG 背景

- [BGJar](https://bgjar.com/)