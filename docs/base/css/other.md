---
sidebar: auto
---

# css3相关

## display:none、visibile:hidden、opacity:0的区别

类型|是否隐藏 | 是否在文档中占用空间 | 是否会触发事件
---|---|---|---
display:none | 是 | 否 | 否
visibile:hidden | 是 | 是 | 否
opacity:0 | 是 | 是 | 是

## 文本超出部分显示省略号

单行

```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

多行

```css
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3; // 最多显示几行
overflow: hidden;
```

