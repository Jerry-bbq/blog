---
sidebar: auto
---

# 浅拷贝和深拷贝

1. 基本类型--名值存储在栈内存中
2. 引用数据类型--名存在栈内存中，值存在于堆内存中，但是栈内存会提供一个引用的地址指向堆内存中的值
3. 浅拷贝复制的数组对象在栈内存中的引用地址

## 浅拷贝

### Oject.assign

```js
// 对象
const clone = obj => Object.assign({}, obj)
```

### 扩展运算符...

```js
// 对象
const clone = obj => {...obj}
// 数组
```

## 深拷贝

### JSON.parse + JSON.stringify

```js
// 对象或数组
const deepClone = obj => typeof obj ==='undefined' ? JSON.parse(JSON.stringify(obj)) : null;
```

::: warning 问题

1. 会忽略 `undefined`
2. 会忽略 `symbol`
3. 不能序列化函数
4. 不能解决循环引用的对象

:::

### for...in + 递归

```js
const deepClone = obj => {
    var target = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (typeof obj[key] === "object") {
            target[key] = deepClone(obj[key]);
            } else {
            target[key] = obj[key];
            }
        }
    }
    return target;
};
```

### Object.create

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