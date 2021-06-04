---
sidebar: auto
---

# coding

[参考](https://juejin.cn/post/6844903809206976520#heading-16)

## 实现一个new操作符

```js
var new2 = function(func) { // 参数构造函数
    // 第一步：创建一个新对象，继承构造函数的原型对象
    // 即创建对象o，继承构造函数的原型对象：o.__proto__ === func.prototype
    var o = Object.create(func.prototype)
    // 第二步：执行构造函数，转移this到o对象上
    var k = func.call(o)
    // 判断构造函数执行的结果是不是对象类型
    if (typeof k === 'object'){
        return k
    } else {
        return o
    }
}
```

## 实现一个JSON.parse

## 实现一个JSON.stringify

## 实现一个call或apply

### call

```js
Function.prototype.call = function(obj, ...args) {
  // console.log('call()')
  // 执行函数
  // this(...args)

  // 处理obj是undefined或者null的情况
  if (obj===undefined || obj===null) {
    obj = window
  }

  // 给obj添加一个方法: tempFn: this
  obj.tempFn = this
  // 调用obj的tempFn方法, 传入rags参数, 得到返回值
  const result = obj.tempFn(...args)
  // 删除obj上的temFn
  delete obj.tempFn
  // 返回方法的返回值
  return result
}
```

### apply

```js
Function.prototype.apply = function(obj, args) {
  // 处理obj是undefined或者null的情况
  if (obj===undefined || obj===null) {
    obj = window
  }

  // 给obj添加一个方法: tempFn: this
  obj.tempFn = this
  // 调用obj的tempFn方法, 传入rags参数, 得到返回值
  const result = obj.tempFn(...args)
  // 删除obj上的temFn
  delete obj.tempFn
  // 返回方法的返回值
  return result
}
```

## 实现一个Function.bind

```js
Function.prototype._bind = function(context) {
    // 保存原有函数
    const _this = this
    // 获取参数
    const args = [...arguments].slice(1)
    // 返回一个函数
    return function F() {
        if (this instanceof F){
        // new方式调用
            return new _this(...args, ...arguments)
        }
        // 直接调用
        return _this.apply(context, args.concat(...arguments))
    }
}
```

## 实现一个继承

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

## 手写Promise

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

## 手写防抖和节流

### 防抖

```js
// 防抖动函数
function debounce(fn,wait=50,immediate) {
    let timer;
    return function() {
        if(immediate) {
            fn.apply(this,arguments)
        }
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=> {
            fn.apply(this,arguments)
        },wait)
    }
}

```

### 节流

```js
function throttle(fn, wait) {
	let prev = new Date();
	return function() { 
	    const args = arguments;
		const now = new Date();
		if (now - prev > wait) {
			fn.apply(this, args);
			prev = new Date();
	}
}
```

## 手写JS深拷贝

### 乞丐版

```js
 var newObj = JSON.parse( JSON.stringify( someObj ) );
```

### 够用版

```js
function deepCopy(obj){
    //判断是否是简单数据类型，
    if(typeof obj == "object"){
        //复杂数据类型
        var result = obj.constructor == Array ? [] : {};
        for(let i in obj){
            result[i] = typeof obj[i] == "object" ? deepCopy(obj[i]) : obj[i];
        }
    }else {
        //简单数据类型 直接 == 赋值
        var result = obj;
    }
    return result;
}
```

## 实现一个instanceOf

```js
const instanceOf = (left, right) => {
    let proto = left.__proto__
    let prototype = right.prototype
    while (true) {
        if (proto === null) {
            return false
        }
        if (proto === prototype) {
            return true
        }
        proto = proto.__proto__
    }
}

// 测试
instanceOf([], Array)   // true
instanceOf([], Object)  // true
```

## 数组去重

[unique](https://www.cnblogs.com/cool-wan/p/12792893.html)

### set

```js
const unique = arr => [...new Set(arr)]
// 或者
const unique = arr => Array.form(...new Set(arr))
```

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
```

### map

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

### reduce

```js
onst unique = arr => {
    return arr.reduce((prev, next)=> {
        return prev.includes(next) ? prev : [...prev,next]
    }, [])
}
```

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
```

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
