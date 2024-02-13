
# Coding

[参考](https://juejin.cn/post/6844903809206976520#heading-16)

## 实现new操作符

<<< ./code-snippet/new.js

## 实现instanceOf
<<< ./code-snippet/instanceof.js

## 实现call/apply/bind

### call

<<< ./code-snippet/call.js

### apply

<<< ./code-snippet/apply.js

### bind

<<< ./code-snippet/bind.js

## 手写防抖和节流

### 防抖

<<< ./code-snippet/debounce.js

### 节流

<<< ./code-snippet/throttle.js

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

## 手写Promise

Promise的过程：
- 初始化Promise状态，为pending
- 立即执行Promise传入的函数，将内部的resolve,reject函数作为参数传递
- 执行then注册回调处理数组
- Promise里的关键是要保证，then方法传入的参数onFullfilled和onRejected，必须在then方法被调用的那一轮事件循环之后的新执行栈中执行
- 链式调用

### 基础版

<<< ./code-snippet/promise.js

## 拷贝

1. 基本类型--名值存储在栈内存中
2. 引用数据类型--名存在栈内存中，值存在于堆内存中，但是栈内存会提供一个引用的地址指向堆内存中的值
3. 浅拷贝复制的数组对象在栈内存中的引用地址

### 数组的拷贝

#### 浅拷贝

如果数组中的元素都是原始类型的，都会是深拷贝，改变拷贝后的数组的值，原始数组不会改变

```js
const arr = [1,'1',true]
let copy_arr = []

// 数组结构
[...copy_arr] = arr
// 数组拼接
copy_arr = arr.concat()
// 数据截取
copy_arr = arr.slice()
// Array.from()
copy_arr = Array.from(arr)
// Array.of()
copy_arr = Array.of(arr)
// Object.assign
copy_arr = Object.assign([], arr)
// 循环
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  copy_arr.push(element)
}
```

如果数组中的元素是引用类型的，则是浅拷贝

##### 深拷贝

```js
const copy_arr = JSON.parse(JSON.stringify(arr))
```

```js

```


### 对象的拷贝

#### 浅拷贝

1. Oject.assign

```js
// 对象
const clone = obj => Object.assign({}, obj)
```

2. 扩展运算符...

```js
// 对象
const clone = obj => {...obj}
// 数组
```

#### 深拷贝

1. JSON.parse + JSON.stringify

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

2. for...in + 递归

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

3. Object.create

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

## 数组扁平化

### 二维数组

1. 数组原生的`flat()`方法

```js
const flat = arr => arr.flat()
```

2. reduce() + concat()：

```js
const flat = arr => arr.reduce((prev, next) => prev.concat(next), [])
```

```js
// 测试
const arr = [[1,2],[3,4],5]
flat(arr)
```

### 多维数组

1. 递归+forEach()+push()

```js
const flat = (arr, flatArr = []) => {
  arr.forEach(item => {
    if (Array.isArray(item)) {
      flat(item, flatArr)
    } else {
      flatArr.push(item)
    }
  })
  return flatArr
}
```

2. 递归+map()+concat()：

```js
const flat = arr => {
  var res = []
  arr.map(item => {
    if (Array.isArray(item)) {
      res = res.concat(flat(item))
    } else {
      res.push(item)
    }
  })
  return res
}
```

3. 递归+reduce()+concat():

```js
const flat = arr => {
  return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? flat(next) : next)
  }, [])
}
```

4. toString()+split()+map()+Number()

```js
const flat = arr => arr.toString().split(',').map(item => Number(item))
```

5. join()+split()+map()

```js
const flat = arr => arr.join().split(',').map(item => Number(item))
```

```js
// 测试
const arr = [
  1,
  [2, 3],
  [4, 5],
  [
    [6, 7],
    [8, 9],
  ],
]
flat(arr)
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
        if (!res.includes(arr[i])) {
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
