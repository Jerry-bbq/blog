---
sidebar: auto
---

# amfe-flexible源码阅读

移动端适配解决方案

## 安装

```bash
npm install amfe-flexible -S
npm install postcss-pxtorem -D
```

## 使用

在 index.html 的 head标签 中添加如下代码：

```html
<meta name="viewport" 
      content="width=device-width, 
          initial-scale=1, 
          maximum-scale=1, 
          minimum-scale=1, 
          user-scalable=no">
```

在 main.js中 引用

```js
import 'amfe-flexible'
```

在 postcss.config 中配置

```js
module.exports = {
  plugins: {
    autoprefixer: {}, // 自动添加前缀，vue脚手架自带
    "postcss-pxtorem": {
      rootValue: 37.5, //结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
      propList: ["*"], //是一个存储哪些将被转换的属性列表，这里设置为['*']全部，假设需要仅对边框进行设置，可以写['*', '!border*']
      unitPrecision: 5, //保留rem小数点多少位
      mediaQuery: false, //媒体查询( @media screen 之类的)中不生效
      minPixelValue: 12, //px小于12的不会被转换
    }
  }
};

// 或者 package.json 中配置
  "postcss": {
    "plugins": {
      "autoprefixer": {},
      "postcss-pxtorem": {
        "rootValue": 37.5,
        "propList": ["*"],
        "unitPrecision": 5,
        "mediaQuery": false,
        "minPixelValue": 12
      }
    }
  },
```

- autoprefixer：css浏览器兼容，即添加前缀
- postcss-pxtorem：将px转化为rem来适配，写在内联样式中的无法转化，`6.0`版本的会提示无法使用，建议降级到`5.1.1`版本

## 说明

### 什么是rem

rem（font size of the root element）是指相对于根元素的字体大小的单位

## amfe-flexible源码

```js
// 立即执行函数 ( function(){}() ) 或者 ( function(){} )(),传入window，document主要是为了压缩优化
(function flexible (window, document) {
    // 获取文档对象的根元素: html
    var docEl = document.documentElement
    // 获取dpr
    var dpr = window.devicePixelRatio || 1
    // adjust body font size
    function setBodyFontSize () {
      if (document.body) {
        document.body.style.fontSize = (12 * dpr) + 'px'
      }
      else {
        document.addEventListener('DOMContentLoaded', setBodyFontSize)
      }
    }
    
    // TODO 1. 设置 body 的 fontSize = 12 * dpr (px)
    // body上设置12 * dpr的font-size值，为了重置页面中的字体默认值，不然没有设置font-size的元素会继承html上的font-size，变得很大。
    setBodyFontSize();
    // set 1rem = viewWidth / 10
    function setRemUnit () {
      var rem = docEl.clientWidth / 10
      docEl.style.fontSize = rem + 'px'
    }
    // TODO 2.设置 根元素: html 的 fontSize = clientWidth / 10 (px)
    setRemUnit()
    // reset rem unit on page resize
    // TODO 3. 窗口大小变化的时候，重新设置 html的fontSize
    window.addEventListener('resize', setRemUnit)
    // TODO 4. 每次加载页面时触发
    window.addEventListener('pageshow', function (e) {
      //  如果页面从浏览器的缓存中读取
      if (e.persisted) {
        setRemUnit()
      }
    })
    // 检测0.5px的支持，支持则root元素的class中有hairlines
    if (dpr >= 2) {
      var fakeBody = document.createElement('body')
      var testElement = document.createElement('div')
      testElement.style.border = '.5px solid transparent'
      fakeBody.appendChild(testElement)
      docEl.appendChild(fakeBody)
      if (testElement.offsetHeight === 1) {
        docEl.classList.add('hairlines')
      }
      docEl.removeChild(fakeBody)
    }
  }(window, document))
```
