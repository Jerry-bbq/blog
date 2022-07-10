---
sidebar: auto
---

# rem

rem是CSS3新增的一个相对单位（font size of the root element，根em），是指相对于**根元素的**字体大小的单位

rem是**只相对于根元素html的font-size**，即只需要设置根元素的font-size，其它元素使用rem单位设置成相应的百分比即可

## 使用

使用`postcss-pxtorem`插件，自动将`px`转换为`rem`

```bash
npm i postcss-pxtorem --save
```

postcss.config.js

```js
module.exports = {
  plugins: {
    'postcss-pxtorem': {
       // 根元素字体大小
       rootValue: 16,
       // 匹配CSS中的属性，* 代表启用所有属性
       propList: ['*'],
       // 转换成rem后保留的小数点位数
       unitPrecision: 5，
       // 小于12px的样式不被替换成rem
       minPixelValue: 12,
       // 忽略一些文件，不进行转换，比如我想忽略 依赖的UI框架
       exclude: ['node_modules']
     }
  }
}

```


## 作用

主要用来做响应式布局



## em

em（font size of the element）是指相对于**父元素**的字体大小的单位


## vh/vw

- [视区相关单位vw, vh..简介以及可实际应用场景
](https://www.zhangxinxu.com/wordpress/2012/09/new-viewport-relative-units-vw-vh-vm-vmin/)