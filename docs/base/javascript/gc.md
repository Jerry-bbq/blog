---
sidebar: auto
---

# 垃圾回收机制与内存泄漏

## 垃圾回收GC

垃圾回收机制(Garbage collection)，引擎对程序不用的内存，或者之前使用过的以后不会再使用的内存空间进行内存释放（自动执行的）

### 为什么要进行垃圾回收

程序的运行需要内存，只要程序提出要求，操作系统或者运行时就必须提供内存，那么对于持续运行的服务进程，必须要及时释放内存，否则，内存占用越来越高，轻则影响系统性能，重则就会导致进程崩溃

### 垃圾回收策略

- 标记清除算法
- 引用计数算法

## 内存泄漏

内存泄漏（Memory leak），引擎中有垃圾回收机制，它主要针对一些程序中不再使用的对象，对其清理回收释放掉内存，但是垃圾回收机制不会将所有的不再使用的对象（垃圾）全都回收掉，因此就有出现了内存泄漏

[参考](https://juejin.cn/post/6984188410659340324#heading-2)

### 哪些情况会引起内存泄漏

#### 不正当的闭包

什么是闭包：

- JavaScript高级程序设计：闭包是指有权访问另一个函数作用域中的变量的函数
- JavaScript权威指南：从技术的角度讲，所有的JavaScript函数都是闭包：它们都是对象，它们都关联到作用域链
- 你不知道的JavaScript：当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行

```js
// 不会存在内存泄漏的闭包
function fn1(){
  let test = new Array(1000).fill('isboyjc')
  return function(){
    console.log('hahaha')
  }
}
let fn1Child = fn1()
fn1Child()


// 存在内存泄漏的闭包
function fn2(){
  let test = new Array(1000).fill('isboyjc')
  return function(){
    console.log(test)
    return test
  }
}
let fn2Child = fn2()
fn2Child()

// 解决方案
function fn2(){
  let test = new Array(1000).fill('isboyjc')
  return function(){
    console.log(test)
    return test
  }
}
let fn2Child = fn2()
fn2Child()
fn2Child = null
```

#### 使用未定义的全局变量

函数中的局部变量在函数执行结束后这些变量已经不再被需要，所以垃圾回收器会识别并释放它们。但是对于全局变量，垃圾回收器很难判断这些变量什么时候才不被需要，所以全局变量通常不会被回收，我们使用全局变量是 OK 的，但同时我们要避免一些额外的全局变量产生

```js
function fn(){
  // 没有声明从而制造了隐式全局变量test1
  test1 = new Array(1000).fill('isboyjc1')
  
  // 函数内部this指向window，制造了隐式全局变量test2
  this.test2 = new Array(1000).fill('isboyjc2')
}
fn()
```

在使用全局变量做持续存储大量数据的缓存时，我们一定要记得设置存储上限并及时清理，不然的话数据量越来越大，内存压力也会随之增高

```js
var test = new Array(10000)

// do something

test = null
```

#### dom引用

```html
<div id="root">
  <ul id="ul">
    <li></li>
    <li></li>
    <li id="li3"></li>
    <li></li>
  </ul>
</div>
<script>
  let root = document.querySelector('#root')
  let ul = document.querySelector('#ul')
  let li3 = document.querySelector('#li3')
  
  // 由于ul变量存在，整个ul及其子元素都不能GC
  root.removeChild(ul)
  
  // 虽置空了ul变量，但由于li3变量引用ul的子节点，所以ul元素依然不能被GC
  ul = null

  // 已无变量引用，此时可以GC
  li3 = null
</script>
```

#### 定时器

- 使用计时器`setTimeout`和`setInterval`，可调用`clearInterval`或者`clearTimeout`来清除
- `requestAnimationFrame` 也存在这个问题，可调用`cancelAnimationFrame` 来取消使用

#### 事件监听

```vue
<template>
  <div></div>
</template>

<script>
export default {
  created() {
    window.addEventListener("resize", this.doSomething)
  },
  beforeDestroy(){
    window.removeEventListener("resize", this.doSomething)
  },
  methods: {
    doSomething() {
      // do something
    }
  }
}
</script>

```

#### 监听者模式

比如`EventBus`

```vue
<template>
  <div></div>
</template>

<script>
export default {
  created() {
    eventBus.on("test", this.doSomething)
  },
  beforeDestroy(){
    eventBus.off("test", this.doSomething)
  },
  methods: {
    doSomething() {
      // do something
    }
  }
}
</script>
```

#### 未清理的Console输出

开发环境下我们可以使用控制台输出来便于我们调试，但是在生产环境下，一定要及时清理掉输出。

### 内存泄漏的排查定位

通过chrome浏览器的performance来定位问题
