---
sidebar: auto
---

杭州目前招聘情况要求：

- 技术栈： vue、react、react-native、ts、小程序开发（uniapp，taro）、webpack
- 端：2B，2C
- 业务：数据可视化（echart，g2，地图、webgl，threejs），低代码平台
- 大厂都要求算法题（阿里，网易...），微前端

# 面经

大厂基本上都是从自我介绍开始，询问项目的情况，比如你在项目中是一个什么角色，在项目之中有没有遇到什么问题，是怎么解决的，项目中使用的第三方包是怎么一个原理，你有没有去研究过等，基本上是你说到哪就会问到哪，这其实是对面试者知识体系的一个考察，所以说准备大厂可以参考这个思路来准备

## 自我介绍

面试官你好，我叫xx，今天来面试贵公司的前端开发工程师岗位。我是16年开始从事前端开发，已有五年多的时间，有三年多的vue项目开发经验。在上家公司的「MDV云管家」产品线担任敏捷开发迭代负责人，根据不同迭代版本进行相应的需求评审、UI 评审、反讲、工作量评估 以及项目排期等工作。平常喜欢逛一些技术社区来丰富自己的技术，也有自己的开源项目，比如常用函数工具库、自定义仪表盘，以此来做一些技术沉淀。以上是我的个人介绍，谢谢

- 2022-07-07 15:00： 杭州巨峰科技 
  - 视频面试
- 2022-07-08 11:00：光子玩具
  - 现场面试
- 2022-07-08 15:00：上海鼎茂信息技术有限公司
  - 腾讯会议：https://meeting.tencent.com/dm/YfeaDoQYbWsI
- 2022-07-08 ：科大讯飞
  - 智慧城市BG
- 2022-07-09 08:00：浙江综合交通大数据中心有限公司
  - 现场面试

## 网易农业事业部

- 获取字符串中重复次数最多的字符

```js
var testStr = 'abcdaabbsssss'

var testStrArr = testStr.split("").sort();
let startIndex = 0;
let endIndex = 1;
let maxNum = 0;
let validWords = [];

// 使用指针法，获取最大重复次数及最大次数对应的字符数组
while (startIndex < testStrArr.length) {
    // startIndex 和 endIndex 位置的字符不同
    if (testStrArr[startIndex] !== testStrArr[endIndex]) {
        // 计算 startIndex 和 endIndex 之间的字符个数
        const rangeNum = endIndex - startIndex;
        if (rangeNum > maxNum) {
            maxNum = rangeNum;
            // 如果出现了新的最大次数，则给存放符合条件字符的数组重新赋值
            validWords = [testStrArr[startIndex]];
        } else if (rangeNum === maxNum) {
            // 如果新的次数和最大次数相等，则将该字符 push 进字符数组
            validWords.push(testStrArr[startIndex]);
        }
        startIndex = endIndex;
    }
    endIndex++;
}
console.log(validWords)
// 打印结果
for (let index = 0; index < validWords.length; index++) {
    const word = validWords[index];
    console.log(`重复次数最多的是：${ word }，重复次数为：${ maxNum }`)
}
```

- 获取字符串中重复次数最多的字符



## 六量科技

任意输入一个数组，比如【5，9，3,6, 8, 10，1, 4】，找到数组中“加和”最大的“逆序对”。数组中任意两个元素，凡是满足左边数字大于右边的，就构—个逆序对，且两个元素可以不相邻，比如：
- 举例的数组中【3，8】构成一个正序对，因为 3<8。
- 再比如举例的数组中【10,11】构成一个逆序对，因为 10>1，且其加和为 10+1=11。
- 再比如，举例的数组中【9，6】也构成一个逆序对，因为 9>6，且其加和为 9+6=15。

请你用熟悉的语言，写一段标准的函数代码：输入任意一个数组，返回数组中满足“加和”最大的那个“逆序对”(备注：原数组中的元素顺序不可改变）

```js
function test(arr) {
  let num = 0
  let maxArr = []
  const length = arr.length
  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      let sum = arr[i] + arr[j]
      if (arr[i] > arr[j] && sum > num) {
        num = sum
        maxArr = [arr[i], arr[j]]
      }
    }
  }
  return maxArr
}
```

## 美的

### 一面

- 2022.2.23
- 讲讲vue的双向数据绑定原理
- vue的兄弟组件传参
- vue的v-model，改变value的名称
- vue是如何实现公共代码
- vuex的五个属性以及辅助属性
- vue中如何监听vuex的数据
- mixins的缺点，生命周期是否会都执行
- 事件循环，宏任务微任务，Vue.$nextTick使用的宏任务还是微任务
- 原型链以及如何实现一个继承
- typeof和instanceof的区别
- 如何判断一个变量是对象还是数组
- 讲讲你用到的es6方法，Set和Map的区别
- flex: auto wrap
- 实现垂直居中的方法
- 实现一个正方形，并可以适配不同屏幕
- 实现一个三角形
- 做过哪些性能优化
- 跨标签传参
- 做过哪些webpack配置
- 对两个缓存的认识，命中协商缓存返回的状态码是304

## 深大智能

### 一面

- 2021.12.13
- new vue() init初始化了哪些配置
- init中配置的执行顺序
- vue data为什么是函数
- vue在data中定义一个变量，在不同生命周期中给这个变量赋值，哪些生命周期会触发数据的变化
- vue router中路由几种形式，以及区别
- vue router是如何工作的
- js的基础数据类型有哪些，你知道的哪些判断数据类型的方法，toString判断时返回的数据格式是怎么样的
- 深浅拷贝原理
- 防抖节流，以及应用场景
- 做过哪些项目优化
- 了解哪些前沿技术

### 二面

- 2021.12.14
- 闭包以及应用，手写一个
- vue的响应式原理，依赖收集在哪个环节
- 讲讲vue3，proxy的优点
- 讲讲事件循环
- t1,t2执行之后执行t3，你有几种实现方式
- 浏览器缓存，两个tab对应同一个缓存资源，其中一个tab页缓存时间超时更新了资源，另一个tab页会怎么样
- 做过哪些项目优化

## 邦盛科技

### 一面

- 2021.12.01
- 自我介绍
- nextTick原理
- vue中数据量比较多大的话，怎么处理(Object.freeze()冻结)
- webpack优化
- 用过哪些es6语法，const、let、箭头函数、数组遍历的方法（map,filter,find,every,some,reduce）、对象操作的方法（扩展运算法（浅拷贝），keys,values,assign,freeze,set,map）
- 箭头函数与普通函数的区别
- 深拷贝实现

### 二面

- 2021.12.03
- 自我介绍
- 项目经历
- 你在项目中遇到问题会怎么解决
- 面试官提了两个当前项目中存在的问题问怎么解决
  - 多个项目打包成一个项目，但是打包比较慢，改动一个需求，整个项目就需要重新打开，比较麻烦，怎么解决
  - 项目中有一个tab页比价卡，怎么解决

### 三面

- 人事面

## 每日互动

### 一面

- 2021.11.29
- 自我介绍,了解到公司的技术栈是vue，目前是vue2.0版本
- 说说之前的项目经历，项目介绍，你在项目中扮演什么角色
- code review你是怎么做的
- 代码校验eslint你在什么阶段做，怎么配置
- 有没有做过ui组件，你们的elementui是怎么使用
- 你在项目中遇到的问题
- webpack优化你是怎么做的
- loader怎么玩，node-sass，scss-loader的作用
- 有没有做过技术分享，分享了什么
- nextTick原理和使用场景，vue3中是怎么实现的
- 浏览器缓存，强缓存和协商缓存的区别，各自的api有哪些，api之间的作用和区别
- 网络安全，XSS和CSRF
- 讲讲HTTP1，HTTP2,HTTPS各自的发展史，以及区别
- 面试体感很好，有些内容忘接了，面试官也会提醒；重点提示，hr小姐姐效率贼高，面了大概一个小时，半个小时后，就给出了面试结果，准备二面

### 二面

- 2021.11.30
- 自我介绍
- vue3的新特性
- vite了解过嘛，跟webpack的区别
- keep-alive的生命周期，什么时候执行，为什么有了mounted还走activated
- es6的新特性你用过哪些
- 箭头函数和普通函数的区别
- promise的三个状态，给了一道题判断状态
- 你做过哪些webpack的优化
- code review是怎么做的
- node用过嘛
- commonjs和es module的区别

## 奇点云

- 2021.11.23

- svg和canvas的区别，svg和canvas的性能
- display:none,visible：区别
- 您做过哪些css优化
- position:absolute和transform的区别
- setTimeout(()=>{}, 0)的执行过程
- axios是基于什么实现的
- XMLHTTP和fetch的区别
- http，http2，http3的区别
- 项目中跨域怎么解决的，还有什么跨域的方案，Nginx反相代理
- 浏览器缓存：强缓存和协商缓存
- vue中watch的deep实现原理
- webpack你做过哪些配置
- 项目中图片是怎么能压缩的
- png和jpg的区别
- 箭头函数与普通函数的区别
- 项目中一个页面加载太慢，你怎么排查
- 一个项目打包之后包太大，怎么优化
- 深拷贝你是怎么实现的，JSON.parse(JSON.stringify())的缺点
- for...in和for...of的区别

## 来未来笔试题

- 2021.11.20

- 从url中获取参数，getParamsUrl(url, param)

```js
const getParamsUrl = (url, param) {}
```

- promise并发请求两次

```js
```

- 使用给出的校验规则，校验一个json对象的每个属性是否匹配，不匹配打印出对象的key，输出格式如下：['name','parent.age', 'joms.name']

```js
function validate(rules, fileds) {}
```

## 阿里乌鸫科技

### 一面

- 2021.11.19
- 自我介绍，项目介绍，你在项目中担任的角色，了解到使用React技术栈
- 盒模型，如何获取dom的宽度，两个元素margin重叠如何解决
- 讲讲作用域链
- 讲讲原型链
- 讲讲事件循环
- vue响应式原理
- 讲讲vue的生命周期
- 讲讲vue的通信方式
- computed watcher和watcher的区别
- 项目介绍，讲讲你在项目中遇到的问题
- 讲讲你知道的设计模式
- promise的三个状态，它的rejected和catch的区别

### 二面

- 2021.11.25
- 自我介绍
- 了解数据结构嘛
- 讲讲你的项目经历以及在项目中扮演的角色
- 讲讲你在项目中遇到的问题以及解决方案
- vue响应式原理
- promise.all的实现原理

### 三面

- 2021.11.29
- 说说你在项目中的自我沉淀的一些东西
- 让你设计一个自动保存表单，你会怎么设计
- 说说单点登录，你会怎么做
- 卒


## 同花顺一面

- 2021.11.16
- 自我介绍
- 面试官问一些问题，你在上一家公司有没有做过leader，都做了哪些东西，有没有自己的开源项目，一些组件等等
- 笔试题
  - 一个包含四个数字元素的数组，从里面随便取出一个数，其他元素按照顺序成一个数，求最大的数
  - concat可以深拷贝
- computed和watch的区别，底层实现原理
- 父子组件生命周期执行顺序（全部生命周期）
- Vue.set的底层实现

## 有赞一面

- 2021.11.16
- 自我介绍
- 最近项目中遇到的问题
  - Vuerouter路由跳转path不能与params同时使用
  - Node版本升级太高，老项目跑不起来
  - 随着项目越来越庞大，热更新变慢
  - node-sass下载不下来，改用淘宝镜像下载
  - 有很多的环境，开发，测试，预发，线上环境项目分环境打包
- 两道笔试题

```js
/**
 * 题目一
 *
 * 请将一个key值是驼峰形式的json数据转换为key值为蛇形的
 *
 * const obj = { aBc: 1, aBcDe: 'aaa' }
 *
 * toSnakeCase(obj) ==>  { a_bc: 1, a_bc_de: 'aaa' }
 *
 */

/**
 * 题目二
 *
 * 实现一个flattenDeep方法，可以将一个多层嵌套的数组打平成一级。数组可以直接通过".flattenDeep()"的方式调用它
 *
 * const arr = [[1], [2, 3, [4]], 5, { foo: function() {} }]
 *
 * arr.flattenDeep() ==> [1, 2, 3, 4, 5, { foo: function() {} }]
 *
 */
```
- Vue的响应式原理，是如何对数组进行监听的
- Vue组件通信有哪些
- 对称加密和非对称加密
- 讲讲diff算法，key的作用
- Vue的生命周期，每个生命周期是做什么的
- v-model的原理
- Vue项目的优化有哪些，webpack优化，cdn是什么
  - 路由懒加载
  - 静态资源放到cdn上面，比如图片，icon图标，ui组件库
  - 在组件销毁时，addEventListener绑定的事件要remove掉，定时器要清空
  - 第三方库按需引入，比如lodash
  - CommonsChunkPlugin分离第三方库和自定义公共模块，不然每个引入第三方库的模块，都是重复打包这些文件
- 事件循环，setTimeout是怎么执行的
- 讲讲原型链，实现一个最简单继承
- 小程序中遇到的兼容性问题

## 得物

### 一面

- 2021.11.09

vue

- 响应式原理
  - 采用数据劫持结合发布订阅模式来实现响应式的，使用`Object.defineProperty`来劫持数据的`getter`和`setter`,在数据变动的时候，发布消息给订阅者，触发相应的监听回调
- Object.defineProperty的缺点
  - 无法检测到对象属性的新增和删除，解决方案是`Vue.set(obj, property, value)`
  - 可以检测到数据索引的变化，但是性能影响，因此Vue重写了数组操作的方法，如`push，pop，shift，unshift，splice，sort，reverse`
- v-if与v-show区别
  - v-if是组件真的渲染和销毁，而不是显示和隐藏；v-show通过CSS display来控制显示和隐藏
- keep-alive的api以及作用
  - 实现组件的缓存，当切换组件的时候，不会对当前组件进行销毁
  - 两个常用属性`include`、`exclude`，允许组件有条件的进行缓存
  - 两个生命周期`activated`、`deactivated`，用来得知当前组件是否处于活跃状态
- computed与watcher的区别
  - computed本质是一个具备缓存的watcher，依赖的属性发生变化就会更新视图，并且计算属性默认只有getter，计算比较消耗性能的计算场景或者表达式过于复杂
  - watch没有缓存性，更多的是观察的作用，可以监听某些数据执行回调
- vue3与vue2的区别
  - vue3性能比vue2强
  - vue3使用`proxy`替换了`Object.defineProperty`
  - 新增了Composition API（组合API）
  - 新增了Fragment, Teleport, Suspense
  - 新增了vite构建工具
  - 支持ts
- 子组件向父组件传参的方式有哪些
  - $emit
  - $refs
  - vuex
- Vue中的data为什么是一个函数不是直接是一个对象
  - 一个组件被复用多次的话，也就会创建多个实例。本质上，这些实例用的都是同一个构造函数。如果data是对象的话，对象属于引用类型，会影响到所有的实例。所以为了保证组件不同的实例之间data不冲突，data必须是一个函数
- for循环为什么使用key
  - 标识组件的唯一性，虚拟DOM的diff算法在同层级比较的时候效率会提升
  - 尽量不要使用数组的的索引值index做key值，因为如果数组中的内容增加或者减少的话，会造成不必要的DOM更新

js

- const定义的变量能不能改变
  - 定义的基本类型不能改变
  - 定义的引用类型可以改变，改变的是引用类型的值，而不是引用类型的指向地址
- new操作符的实现原理
  - 创建一个空对象实例
  - 将实例的__proto__指向构造函数的原型constructor.prototype（继承构造函数的原型对象）
  - 执行构造函数，绑定this指向实例，实例作为this的上下文）
  - 如果构造函数的执行结果是一个对象，则返回这个对象，否则，返回实例对象
- 判断是否是数组的方法有哪些
  - instanceof，如 arr instanceof Array
  - Object.prototype.toString.call(arr) === '[object, Array]'
  - Array.isArray(arr)
- 数组遍历的方法有哪些
  - for、forEach、map、filter、find、findIndex、every、reduce、some
- 垃圾回收机制是怎么样的，闭包是怎么清除的
  - js引擎会对程序不使用的内存或者使用过的内存不会再使用的内存空间进行内存释放，闭包是通过使用完之后将闭包函数赋值为空来清除的
- undefined和null的区别
  - undefined 表示一个变量没有被声明，或者被声明了但没有被赋值（未初始化），一个没有传入实参的形参变量的值为undefined，如果一个函数什么都不返回，则该函数默认返回undefined
  - null则表示“什么都没有”，即“空值”
  - null和undefined之间的主要区别在于它们被转换为原始类型的方式
    ```js
    var v1= 5+ null;
    console.log(v1)   // 5

    var v2= 5+ undefined;
    console.log(v2)   // NaN
    ```

webpack

- 热更新原理
  - webpack --watch启动监听模式之后，webpack第一次编译项目，并将结果存储在内存文件系统，相比较磁盘文件读写方式内存文件管理速度更快，内存webpack服务器通知浏览器加载资源，浏览器获取的静态资源除了JS code内容之外，还有一部分通过webpack-dev-server注入的的 HMR runtime代码，作为浏览器和webpack服务器通信的客户端（webpack-hot-middleware 提供类似的功能）
  - 文件系统中一个文件（或者模块）发生变化，webpack监听到文件变化对文件重新编译打包，每次编译生成唯一的hash值，根据变化的内容生成两个补丁文件：说明变化内容的manifest（文件格式是hash.hot-update.json，包含了hash和chundId用来说明变化的内容）和chunk js（hash.hot-update.js）模块
  - hrm-server通过websocket将manifest推送给浏览器浏览器接受到最新的hotCurrentHash，触发 hotDownloadManifest函数，获取manifest json 文件
  - 浏览器端hmr runtime根据manifest的hash和chunkId使用ajax拉取最新的更新模块chunk 
- 打包文件使用什么loader
  - file-loader

### 二面

- 2021.11.11
- 讲讲你在项目中遇到的问题以及解决方案
  - 
- 比如开发了一个页面，使用越来越卡顿，你会怎么去排查问题
- 讲讲defineReative的流程
- 使用const定义一个对象，可以更改嘛，为什么可以
- 用flex实现一个九宫格
- 讲讲浅拷贝和深拷贝的原理
- 对象的引用是存在堆还是栈
- Es6的扩展运算符，操作一个对象是浅拷贝还是深拷贝
- 讲讲实现深拷贝的过程
- 客户端和服务端使用http交互的过程
- 讲讲setTimeout的原理

## 盒马

两道笔试题

- 写diff代码
- 计算流程中审批节点的最大深度