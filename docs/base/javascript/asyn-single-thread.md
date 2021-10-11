---
sidebar: auto
---

# 异步和单线程

- 什么是单线程，和异步有什么关系
- 什么是event-loop
- 是否用过jQuery的deferred
- promise的基本使用和原理
- 介绍async/await（和promise的区别，联系）
- 总结当前js解决异步的方案

## 单线程

- 只有一个线程，同一时间只能做一件事
- 单线程的原因，避免dom渲染的冲突
- 单线程的解决方案：异步

### 单线程代码演示：

循环运行期间，js执行和dom渲染暂时卡顿

```js
var i,sum = 0
for (i = 0; i < 100000000;i++) {
  sum+=i
}
console.log(sum)
```

alert不处理，js执行和dom渲染暂时卡顿

```js
console.log(1)
alert('hello')
console.log(2)
```

### 单线程是为了避免dom渲染的冲突

为什么要避免DOM渲染的冲突？

- 浏览器需要渲染DOM
- JS可以修改DOM结构
- JS执行的时候，浏览器DOM渲染会暂停
- 两段JS也不能同时执行（都修改DOM就冲突了）
- webworker支持多线程，但是不能访问DOM

### 解决方案-异步

场景一：

```js
console.log(100)
setTimeout(function() {
  console.log(200)
},1000)
console.log(300)
console.log(400)
// 100,300,400,200
```

场景二：

```js
console.log(100)
$.ajax({
  url: 'xxx',
  success: function(result) {
    console.log(result)
  }
})
console.log(300)
console.log(400)
```

异步的问题：

- 没有按照书写方式执行，代码可读性差
- callback中不容易模块化

## 事件循环event-loop

- 事件轮询，JS实现异步的具体解决方案
- 同步代码，直接执行
- 异步函数先放在异步队列中
- 待同步函数执行完毕，轮询执行 异步队列 的函数

案例一：

```js
setTimeout(function() {
  console.log(100)
})
console.log(200)
// 200 -> 100
```

案例二：

```js
setTimeout(function() {
  console.log(1)
},1000)
setTimeout(function() {
  console.log(2)
})
console.log(3)
// 3 -> 2 -> 1
```

案例三：

```js
$.ajax({
  url: 'xxx',
  success: function(result) {
    console.log('a')
  }
})
setTimeout(function() {
  console.log('b')
},1000)
setTimeout(function() {
  console.log('c')
})
console.log('d')
// d -> c -> a -> b
// ajax可能很快
```

## 是否用过jQuery的Deferred

jQuery1.5之前

```js
var ajax = $.ajax({
  url: 'data.json',
  success: function() {
    console.log('success1')
    console.log('success2')
    console.log('success3')
  },
  error: function() {
    console.log('error')
  }
})
console.log(ajax) // 返回一个 XHR 对象
```

jQuery1.5之后

```js
var ajax = $.ajax('data.json')
ajax.done(function() {
  console.log('success1')
})
.fail(function() {
  console.log('error1')
})
.done(function() {
  console.log('success2')
})
.fail(function() {
  console.log('error2')
})
console.log(ajax) // 返回一个 deferred 对象
```

或者使用then

```js
var ajax = $.ajax('data.json')
ajax.then(function() {
  console.log('success1')
}, function() {
  console.log('error1')
}).then(function() {
  console.log('success2')
}, function() {
  console.log('error2')
})
```

jQuery1.5的变化

- 无法改变JS异步和单线程的本质
- 只能从写法上杜绝callback这种形式
- 它是一种语法糖形式，但是解耦了代码
- 很好的体现：开放封闭原则



























































## 单线程

[浏览器是多进程的](https://www.infoq.cn/article/CS9-WZQlNR5h05HHDo1b)，每个tab页都相当于是一个浏览器的进程（进程（process）是cpu资源分配的最小单位，线程（thread）是cpu调度的最小单位，线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程）

浏览器有哪些进程：

- Browser Process
- GPU Process
- Plugin Process
- Renderer Process
- Device Process
- Storage Process
- Network Process
- UI Process

JavaScript是**单线程**执行的，所谓的单线程就是指一次只能完成一个任务，如果是多个任务就必须要排队执行，前面一个任务执行完毕之后，再执行后面一个任务。（因为js引擎的主线程负责代码的运行，有且只有一个主线程）

缺点：如果一个任务耗时较长，后面的任务就必须排队等着，容易造成浏览器无响应（假死）

解决方案：JavaScript将执行模式分为两种：同步任务（Synchronous）和异步任务（Asynchronous）

## 异步

同步任务：后一个任务等待前一个任务执行结束在执行。在主线程(这里的主线程就是JS引擎线程)上执行，会形成一个执行栈

异步任务：每个异步任务都有一个或多个回调函数（callback），前一个任务结束后，不是执行后一个任务，而是执行后一个任务的回到函数。异步任务相关的回调函数会被放入任务队列（callback queue），当主线程中的执行栈被清空时，去任务队列中取任务到执行栈中执行

- javascript是单线程语言，一个线程里只有一个调用栈（`call stack`）
- 单线程：一次只能做一件事
- js执行，任务进入调用栈，同步任务进入主线程，异步任务进入事件队列，待主线程中的同步任务执行完毕之后，清空调用栈，事件循环检测主线程是否清空，如果清空，依次从执行任务队列中取任务到调用栈中执行，执行完毕，清空调用栈

异步任务：宏任务（`macrotask`，也被成为task）和微任务（`microtask`，也被成为jobs）

### 宏任务

- 主代码块
- setTimeout
- setInterval
- setImmediate ()-Node
- requestAnimationFrame ()-浏览器

### 微任务

- process.nextTick ()-Node
- Promise.then()
- catch
- finally
- Object.observe
- MutationObserver

### 问题

同步任务和异步任务的执行顺序

```js
console.log(1)
setTimeout(function() {console.log(3)},0)
console.log(2)

// 1 2 3
```

::: tip

同步任务执行完成之后，执行异步任务

:::

```js
console.log('A')
while(true){}
console.log('B')
// A
```

```js
console.log('A')
setTimeout(function() {console.log('B')},0)
while(true){}
// A
```

```js
for(var i=0;i<4;i++){
  setTimeout(function() {console.log(i)},1000)
}

// 或者
for(var i=0;i<4;i++){
  setTimeout(function() {console.log(i)},0)
}
// 4 4 4 4
```

::: tip

队列插入时间，for循环执行到setTimeout时，并没有将setTimeout放置到异步队列中去，只有当定时器的时间到了，才会将setTimeout放置到异步队列，等待事件循环，执行setTimeout，此时i已经变为4

:::

```js
console.log('script start')

async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
}
async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })

console.log('script end')

// script start => async2 end => Promise => script end => promise1 => promise2 => async1 end => setTimeout

// 新版本浏览器的执行顺序如下：因为 await 变快了
// script start => async2 end => Promise => script end => async1 end => promise1 => promise2 =>setTimeout
```

## 事件循环机制


