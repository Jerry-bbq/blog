# 事件循环

## 一、事件循环的本质：解决单线程的困境

**核心问题**：JavaScript 是单线程语言，如何实现异步操作？

**类比理解**：  
想象你（主线程）正在做饭（执行代码），但只有一个锅（单线程）。如果煮面需要10分钟，你不能放下锅去做其他事。为了解决这个问题，厨房引入了：
- **异步助手**（setTimeout、Promise）
- **任务调度员**（事件循环）

## 二、事件循环的核心模型（图解）

[事件循环模型](https://i.imgur.com/6lQjD0g.png)

### 1. 执行栈（Call Stack）
- 存储当前正在执行的函数
- 同步代码按顺序压入栈，执行完毕后弹出

### 2. 任务队列（Task Queue）
- **宏任务队列**（Macrotask Queue）：存储异步回调（setTimeout、setInterval、I/O）
- **微任务队列**（Microtask Queue）：存储 Promise、async/await 等回调

### 3. 事件循环（Event Loop）
- 不断检查执行栈是否为空
- 如果为空，则从任务队列取出任务执行

## 三、宏任务 vs 微任务：优先级与执行顺序

| 类型       | 示例                          | 优先级 | 执行时机                     |
|------------|-------------------------------|--------|------------------------------|
| **宏任务** | `setTimeout`、`setInterval`   | 低     | 每次事件循环只执行一个       |
| **微任务** | `Promise.then`、`async/await` | 高     | 当前任务结束后立即全部执行   |

### 重要规则：
1. **同步代码 → 微任务 → 宏任务**
2. **微任务队列会被清空**，直到队列为空
3. **宏任务队列每次只执行队首任务**

## 四、事件循环的执行流程（代码驱动）

```js
console.log('Start'); // 同步代码

setTimeout(() => {
  console.log('Timeout'); // 宏任务
}, 0);

Promise.resolve().then(() => {
  console.log('Promise'); // 微任务
});

console.log('End'); // 同步代码
```

**执行顺序**：
1. `Start`（执行栈）
2. `End`（执行栈）
3. `Promise`（微任务）
4. `Timeout`（宏任务）

**输出结果**：  
```
Start
End
Promise
Timeout
```

## 五、浏览器与 Node.js 的差异

### 1. 浏览器环境
- **UI 渲染**是宏任务的一部分
- **微任务优先级高于渲染**

### 2. Node.js 环境
- 事件循环分为 **6 个阶段**：
  1. timers（setTimeout、setInterval）
  2. I/O callbacks（文件读写、网络请求）
  3. idle, prepare（内部使用）
  4. poll（获取新 I/O 事件）
  5. check（setImmediate）
  6. close callbacks（socket 关闭等）

### 关键区别：
- `setImmediate` 与 `setTimeout(..., 0)` 的执行顺序取决于 **poll 阶段**的状态
- `process.nextTick()` 在 **当前阶段直接执行**，优先于微任务

## 六、经典案例分析（含代码与执行流程）

### 案例1：嵌套异步
```js
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(() => {
  console.log('timeout');
}, 0);

async1();

new Promise(resolve => {
  console.log('promise1');
  resolve();
}).then(() => {
  console.log('promise2');
});

console.log('script end');
```

**执行流程**：
1. 同步代码：`script start` → `async1 start` → `async2` → `promise1` → `script end`
2. 微任务：`async1 end` → `promise2`
3. 宏任务：`timeout`

**输出结果**：  
```
script start
async1 start
async2
promise1
script end
async1 end
promise2
timeout
```

### 案例2：微任务嵌套
```js
Promise.resolve().then(() => {
  console.log('microtask1');
  Promise.resolve().then(() => {
    console.log('microtask2');
  });
});
console.log('synchronous');
```

**执行流程**：
1. 同步代码：`synchronous`
2. 微任务：`microtask1` → `microtask2`

**输出结果**：  
```
synchronous
microtask1
microtask2
```

## 七、事件循环的极端场景（防坑指南）

### 1. **微任务阻塞主线程**
```js
Promise.resolve().then(() => {
  while (true) {} // 无限循环
});
console.log('This will never be printed');
```
- 微任务队列无法清空，导致后续任务永远无法执行

### 2. **setTimeout 的最小延迟**
```js
setTimeout(() => {
  console.log('Min delay');
}, 1);
```
- 实际延迟可能大于 1ms（浏览器限制最低 4ms，Node.js 最低 1ms）

### 3. **async/await 的隐藏宏任务**
```js
async function test() {
  console.log('Start');
  await new Promise(resolve => setTimeout(resolve, 0));
  console.log('End');
}
test();
console.log('Outside');
```
**输出结果**：  
```
Start
Outside
End
```

## 八、自定义事件循环（模拟实现）

### 实现一个简易事件循环
```js
class EventLoop {
  constructor() {
    this.macrotaskQueue = [];
    this.microtaskQueue = [];
  }

  enqueueMacro(task) {
    this.macrotaskQueue.push(task);
  }

  enqueueMicro(task) {
    this.microtaskQueue.push(task);
  }

  run() {
    while (this.macrotaskQueue.length > 0 || this.microtaskQueue.length > 0) {
      // 执行宏任务
      if (this.macrotaskQueue.length > 0) {
        const task = this.macrotaskQueue.shift();
        task();
      }

      // 执行微任务
      while (this.microtaskQueue.length > 0) {
        const task = this.microtaskQueue.shift();
        task();
      }
    }
  }
}

// 使用示例
const loop = new EventLoop();

loop.enqueueMacro(() => console.log('Macro1'));
loop.enqueueMicro(() => console.log('Micro1'));
loop.enqueueMicro(() => console.log('Micro2'));
loop.enqueueMacro(() => console.log('Macro2'));

loop.run();
```

**输出结果**：  
```
Macro1
Micro1
Micro2
Macro2
```

## 九、实际应用场景与优化建议

### 1. **前端性能优化**
- **避免在微任务中执行耗时操作**（如大数据量处理）
- **合并多个微任务**（使用 `queueMicrotask`）

### 2. **Node.js 中的事件循环控制**
- **使用 `setImmediate` 替代 `setTimeout(..., 0)`**：确保在 poll 阶段结束后立即执行
- **使用 `process.nextTick` 处理紧急任务**：但需注意可能导致递归调用

### 3. **异步错误处理**
- **微任务中的错误需用 `try/catch` 捕获**
- **宏任务中的错误需用 `window.onerror` 或 `domain` 模块处理**

## 十、总结：事件循环的核心法则

| 法则 | 说明 |
|------|------|
| **单线程执行** | JavaScript 一次只能做一件事 |
| **同步优先** | 先执行完所有同步代码 |
| **微任务优先** | 所有微任务在宏任务前执行 |
| **队列清空原则** | 微任务队列必须完全清空 |
| **浏览器与 Node.js 差异** | UI 渲染阶段与事件循环阶段划分不同 |

## 十一、扩展学习资源

1. **可视化工具**：
   - [JS Visualizer 9000](https://www.jsv9000.app/)
   - [Loupe](http://latentflip.com/loupe/)

2. **深度文章**：
   - [Node.js 官方文档 - Event Loop](https://nodejs.org/en/docs/guides/event-loop/)
   - [MDN - Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

3. **视频讲解**：
   - [Philip Roberts - What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)