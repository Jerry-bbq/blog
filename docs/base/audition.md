---
sidebar: auto
---

# 面试题

## 有赞一面

- 2021.11.16
- 自我介绍
- 最近项目中遇到的问题
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
- Vue项目的优化有哪些，webpack优化，cdn是什么
- 事件循环，setTimeout是怎么执行的
- 讲讲原型链，实现一个最简单继承
- 小程序中遇到的兼容性问题

## 得物

一面（2021.11.09）

vue

- 响应式原理
- object.defineProperty的缺点
- v-if v-show区别
- keep-alive的api以及作用
- computed与watcher的区别
- vue3与vue2的区别
- 子组件向父组件传参的方式有哪些
- Vue中的data为什么是一个函数
- for循环为什么使用key

js

- const定义的变量能不能改变
- new操作符的实现原理
- 判断是否是数组的方法有哪些
- 数组遍历的方法有哪些
- 垃圾回收机制是怎么样的，闭包是怎么清除的
- undefined和null的区别

webpack

- 热更新原理
- 打包文件使用什么loader


二面（2021.11.09）

- 讲讲你在项目中遇到的问题以及解决方案
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