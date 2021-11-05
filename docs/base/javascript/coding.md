---
sidebar: auto
---

# coding

[参考](https://juejin.cn/post/6844903809206976520#heading-16)

## 实现new操作符

<<< @/docs/base/javascript/code-snippet/new.js

## 实现instanceOf

<<< @/docs/base/javascript/code-snippet/instanceof.js

## 实现call/apply/bind

### call

<<< @/docs/base/javascript/code-snippet/call.js

### apply

<<< @/docs/base/javascript/code-snippet/apply.js

### bind

<<< @/docs/base/javascript/code-snippet/bind.js

## 手写防抖和节流

### 防抖

<<< @/docs/base/javascript/code-snippet/debounce.js

### 节流

<<< @/docs/base/javascript/code-snippet/throttle.js

## 实现一个寄生组合继承

```js
function Parent()
    this.name = 'Parent'
    this.play = [1,2,3]
}
function Child() {
    Parent.call(this)
    this.type = 'Child'
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child
```

## 实现一个JS函数柯里化

## 实现Promise

### 简单版

```js
function myPromise(constructor){
    let self=this;
    self.status="pending" //定义状态改变前的初始状态
    self.value=undefined;//定义状态为resolved的时候的状态
    self.reason=undefined;//定义状态为rejected的时候的状态
    function resolve(value){
        //两个==="pending"，保证了状态的改变是不可逆的
       if(self.status==="pending"){
          self.value=value;
          self.status="resolved";
       }
    }
    function reject(reason){
        //两个==="pending"，保证了状态的改变是不可逆的
       if(self.status==="pending"){
          self.reason=reason;
          self.status="rejected";
       }
    }
    //捕获构造异常
    try{
       constructor(resolve,reject);
    }catch(e){
       reject(e);
    }
}
```

同时，需要在myPromise的原型上定义链式调用的then方法：

```js
myPromise.prototype.then=function(onFullfilled,onRejected){
   let self=this;
   switch(self.status){
      case "resolved":
        onFullfilled(self.value);
        break;
      case "rejected":
        onRejected(self.reason);
        break;
      default:       
   }
}
```

```js
// 测试
var p=new myPromise(function(resolve,reject){resolve(1)});
p.then(function(x){console.log(x)})
//输出1
```

### 复杂版

```js
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function Promise(excutor) {
    let that = this; // 缓存当前promise实例对象
    that.status = PENDING; // 初始状态
    that.value = undefined; // fulfilled状态时 返回的信息
    that.reason = undefined; // rejected状态时 拒绝的原因
    that.onFulfilledCallbacks = []; // 存储fulfilled状态对应的onFulfilled函数
    that.onRejectedCallbacks = []; // 存储rejected状态对应的onRejected函数

    function resolve(value) { // value成功态时接收的终值
        if(value instanceof Promise) {
            return value.then(resolve, reject);
        }
        // 实践中要确保 onFulfilled 和 onRejected 方法异步执行，且应该在 then 方法被调用的那一轮事件循环之后的新执行栈中执行。
        setTimeout(() => {
            // 调用resolve 回调对应onFulfilled函数
            if (that.status === PENDING) {
                // 只能由pending状态 => fulfilled状态 (避免调用多次resolve reject)
                that.status = FULFILLED;
                that.value = value;
                that.onFulfilledCallbacks.forEach(cb => cb(that.value));
            }
        });
    }
    function reject(reason) { // reason失败态时接收的拒因
        setTimeout(() => {
            // 调用reject 回调对应onRejected函数
            if (that.status === PENDING) {
                // 只能由pending状态 => rejected状态 (避免调用多次resolve reject)
                that.status = REJECTED;
                that.reason = reason;
                that.onRejectedCallbacks.forEach(cb => cb(that.reason));
            }
        });
    }

    // 捕获在excutor执行器中抛出的异常
    // new Promise((resolve, reject) => {
    //     throw new Error('error in excutor')
    // })
    try {
        excutor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
    const that = this;
    let newPromise;
    // 处理参数默认值 保证参数后续能够继续执行
    onFulfilled =
        typeof onFulfilled === "function" ? onFulfilled : value => value;
    onRejected =
        typeof onRejected === "function" ? onRejected : reason => {
            throw reason;
        };
    if (that.status === FULFILLED) { // 成功态
        return newPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try{
                    let x = onFulfilled(that.value);
                    resolvePromise(newPromise, x, resolve, reject); // 新的promise resolve 上一个onFulfilled的返回值
                } catch(e) {
                    reject(e); // 捕获前面onFulfilled中抛出的异常 then(onFulfilled, onRejected);
                }
            });
        })
    }

    if (that.status === REJECTED) { // 失败态
        return newPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onRejected(that.reason);
                    resolvePromise(newPromise, x, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            });
        });
    }

    if (that.status === PENDING) { // 等待态
        // 当异步调用resolve/rejected时 将onFulfilled/onRejected收集暂存到集合中
        return newPromise = new Promise((resolve, reject) => {
            that.onFulfilledCallbacks.push((value) => {
                try {
                    let x = onFulfilled(value);
                    resolvePromise(newPromise, x, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            });
            that.onRejectedCallbacks.push((reason) => {
                try {
                    let x = onRejected(reason);
                    resolvePromise(newPromise, x, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            });
        });
    }
};

```

## 实现浅拷贝和深拷贝

1. 基本类型--名值存储在栈内存中
2. 引用数据类型--名存在栈内存中，值存在于堆内存中，但是栈内存会提供一个引用的地址指向堆内存中的值
3. 浅拷贝复制的数组对象在栈内存中的引用地址

### 浅拷贝

#### 1.Oject.assign

```js
// 对象
const clone = obj => Object.assign({}, obj)
```

#### 2.扩展运算符...

```js
// 对象
const clone = obj => {...obj}
// 数组
```

### 深拷贝

#### 1.JSON.parse + JSON.stringify

```js
// 对象或数组
const deepClone = obj => JSON.parse(JSON.stringify(obj))
```

::: warning 问题

1. 会忽略 `undefined`
2. 会忽略 `symbol`
3. 不能序列化函数
4. 不能解决循环引用的对象

:::

#### 2.for...in + 递归

```js
const deepClone = obj => {
    // 定义一个对象来保存拷贝的对象
    var target = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // 如果值是对象，则递归
            if (typeof obj[key] === "object") {
                target[key] = deepClone(obj[key])
            } else {
                target[key] = obj[key]
            }
        }
    }
    return target
}
```

#### 3.Object.create

```js
const deepClone = obj => {
    var copy = Object.create(Object.getPrototypeOf(obj));
    var propNames = Object.getOwnPropertyNames(obj);

    propNames.forEach(name => {
    var desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
    });
    return copy;
};
```

## 数组去重

数组如下：

```js
const arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}]
```

### Set

```js
const unique = arr => [...new Set(arr)]
// 或者
const unique = arr => Array.from(new Set(arr))

// 测试
unique(arr)
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
```

::: warning 问题

{}无法去重

:::

### indexOf

```js
const unique = arr => {
    let res = []
    for (let i=0;i<arr.length;i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
        }
    }
    return res
}

// 测试
unique(arr)
// [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {}, {}]
```

::: warning 问题

1. NaN无法去重
2. {}无法去重

:::

### Map

```js
const unique = arr => {
    let res = []
    let map = new Map()
    for (let i=0;i<arr.length;i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], true)
            res.push(arr[i])
        }
    }
    return res
}
```

::: warning 问题

{} 无法去重

:::

### includes

```js
const unique = arr => {
    let res = []
    for (let i=0;i<arr.length;i++) {
        if (res.includes(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}

unique(arr)
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]
```

::: warning 问题

{}无法去重
:::

### reduce+includes

```js
const unique = arr => {
    return arr.reduce((prev, next)=> {
        return prev.includes(next) ? prev : [...prev,next]
    }, [])
}

unique(arr)
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
```

::: warning 问题

{}无法去重

:::

### 作为对象处理

将数组中的值设为对象属性，遇到重复的则删除当前重复的，并将下标减一

```js
const unique = arr => {
    let res = []
    let obj = {}
    for (let i=0;i<arr.length;i++) {
        if (obj[arr[i]]) {
            arr.splice(i,1);
            i--;
            continue;
        }
        obj[arr[i]] = arr[i]
        res.push(arr[i])
    }
    return res
}
```

::: warning 问题

{}无法去重

:::

### 排序对比

排序后对比相邻数，若相等，则删除其中一个

```js
const unique = arr => {
    let res = arr.sort((a,b) => a-b)
    for (let i=0;i<res.length;i++) {
        if (res[i] === res[i+1]) {
            res.splice(i+1,1)
        }
    }
    return res
}
```

::: warning 问题

1. NaN无法去重
2. {}无法去重

:::

### 双层for循环+splice

```js
const unique = (arr) => {
      for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
          if (arr[i] == arr[j]) {
            //第一个等同于第二个，splice方法删除第二个
            arr.splice(j, 1);
            j--;
          }
        }
      }
      return arr;
};
unique(arr)
// [1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {}, {}]
```

::: warning 问题

1. null会都去掉
2. NaN无法去重
3. 0都会去掉
4. {}无法去重

:::

### hasOwnProperty

```js
const unique = (arr) => {
    var obj = {};
    return arr.filter((item) =>
    obj.hasOwnProperty(typeof item + item)
        ? false
        : (obj[typeof item + item] = true)
    );
};
unique(arr)
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}]
```

::: tip 成功
全部去重

:::

### filter

```js
const unique = (arr) => {
    return arr.filter(function(item, index, arr) {
      //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
      return arr.indexOf(item, 0) === index;
    });
};
unique(arr)
// [1, "true", true, 15, false, undefined, null, "NaN", 0, "a", {}, {}]
```

::: warning 问题

1. NaN会全部删除掉
2. {}无法去重

:::
