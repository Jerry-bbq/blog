---
sidebar: auto
---

# 手写代码

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
