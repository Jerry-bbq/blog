---
sidebar: auto
---

# 异步和单线程

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
console.log('script start') // 同步

async function async1() {
  await async2() // 同步
  console.log('async1 end') // 异步
}
async function async2() {
  console.log('async2 end')
}

async1()

setTimeout(function() {
  console.log('setTimeout') // 异步，宏任务
}, 0)

new Promise(resolve => {
  console.log('Promise') // 同步
  resolve()
})
  .then(function() {
    console.log('promise1') // 异步，微任务
  })
  .then(function() {
    console.log('promise2') // 异步，微任务
  })

console.log('script end') // 同步

// script start => async2 end => Promise => script end => promise1 => promise2 => async1 end => setTimeout

// 新版本浏览器的执行顺序如下：因为 await 变快了
// script start => async2 end => Promise => script end => async1 end => promise1 => promise2 =>setTimeout
```

微任务比宏任务速度快

[参考](https://juejin.cn/post/7016298598883131423)

```js
setTimeout(function () {
  console.log("1"); 
}, 0);

async function async1() {
  console.log("2"); 
  const data = await async2(); 
  console.log("3");
  return data;
}

async function async2() {
  return new Promise((resolve) => {
    console.log("4"); 
    resolve("async2的结果"); 
  }).then((data) => {
    console.log("5");
    return data;
  });
}

async1().then((data) => {
  console.log("6"); 
  console.log(data); 
});

new Promise(function (resolve) {
  console.log("7"); 
  //   resolve()
}).then(function () {
  console.log("8"); 
});

// 结果为：2 4 7 5 3 6 async2的结果 1
// 如果resolve打开，2 4 7 5 8 3 6 async2的结果 1
```

## 事件循环机制


## 问题及分析

浏览器是多线程的，但是js是单线程的

- GUI渲染线程（给浏览器画画用的 DOM/BOM）
- JS引擎线程（web worker）
- 浏览器事件线程（onclick）
- 定时器触发线程
- http异步线程
- EventLoop（事件线程）处理线程

### 案例一

```js
let setTimeoutCallBack = function() {
  console.log('定时器回调')
}
let httpCallback = function() {
  console.log('http回调')
}

console.log('同步任务1')

// 定时 1s
setTimeout(setTimeoutCallBack, 1000)

// 请求了 2s
ajax.get('/info', httpCallback)

console.log('同步任务2')

// 执行结果
// 同步任务1 => 同步任务2 => 定时器回调 => http回调
```

分析：

- call back（调用栈）中同步任务先执行
- 异步任务，定时器进入定时器触发线程中，http请求进入http异步线程中（并不是马上放到任务队列中去）
- 调用栈中，同步任务执行结束之后，到task queue任务队列中轮询
- 当1s的之后，拿到定时器任务，放在调用栈中执行
- 当2s的时候，拿到http请求，放到调用栈中执行

### 案例二

```js
// `宏任务1`
setTimeout(()=> {
  console.log(1)
}, 20)

console.log(2)

// `宏任务2`
setTimeout(()=> {
  console.log(3)
}, 10)

console.log(4)

// 大概执行33ms
console.time('AA')
for(let i=0;i<9000000;i++){
  // do somethingg
}
console.timeEnd('AA')

console.log(5)

// `宏任务3`
setTimeout(()=> {
  console.log(6)
}, 20)

console.log(7)

// `宏任务4`
setTimeout(()=> {
  console.log(8)
}, 10)

// 执行结果
// 2 => 4 => 5 => 7 => 3 => 1 => 8 => 6
```

分析：

- 调用栈执行同步代码，输出：2 => 4 => 5 => 7
- 在33ms时，同步任务执行完毕
- 在异步队列中
  - 在10ms时放入`宏任务2`,输出 3
  - 在20ms时放入`宏任务1`,输出 1
  - 在43ms时放入`宏任务4`,输出 8
  - 在53ms时放入`宏任务3`,输出 6

### 案例三

```js
async function async1() {
  console.log('A')
  await async2()
  console.log('B')
}

async function async2() {
  console.log('C')
} 

console.log('D')

setTimeout(function() {
  console.log('E')
}, 0)

async1()

new Promise(function(resolve) {
  console.log('F')
  resolve()
}).then(function() {
  console.log('G')  
})
console.log('H')  

// 执行结果
// D => A => C => F => H => B => G => E

/*
将async/await转化为promise

function async1() {
  console.log('A')
  new Promise(resolve => {
    console.log('C')
    resolve()
  }).then(res => {
    console.log('B')
  })  
}
*/
```

### 案例四

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<button id="button">button</button>

<script>

const button = document.getElementById('button')
button.addEventListener('click', () => {
  Promise.resolve().then(()=> console.log('Microtask 1'))
  console.log('Listener 1')  
})
button.addEventListener('click', () => {
  Promise.resolve().then(()=> console.log('Microtask 2'))
  console.log('Listener 2')  
})

</script>

</body>
</html>
<!-- 输出结果：Listener 1 =>  => Microtask 1 => Listener 2 => Microtask 2  -->
```

分析：

- 