---
sidebar: auto
---

# 算法

- [排序](./algorithm/sort.md)
- [将数组转化为树形结构](./algorithm/array-to-tree.md)
- [浅拷贝与深拷贝](./algorithm/clone.md)
- [数组去重](./algorithm/unique.md)
- [链表](./algorithm/linked-list.md)
- [二叉树](./algorithm/binary-tree.md)

## 堆栈、队列、链表
[JavaScript 数据结构与算法之美 - 线性表（数组、栈、队列、链表）](https://juejin.cn/post/6844903877427347469)

- 堆栈
- 队列
- 链表
    
## 递归

- 递归：https://segmentfault.com/a/1190000009857470
- 波兰式和逆波兰类
- 波兰式和逆波兰式

## 实现36进制转换

- number转string：numberObject.toString( [ radix ] )，可选/Number类型指定的基数([2, 36])，默认为10。
- string转number：parseInt( numString [, radix ] )，参数radix可以是一个介于 [2, 36] 之间的数值, 如果没有提供radix参数，则parseInt()函数将会根据参数numString的前缀来决定转换的进制基数

## 数组展评

### 二维数组展开

```js
// [1,2,[3,4]]
function flattenOnce(arr){
    return [].concat(...arr)
}
```

### 多维数组展开(递归)

```js
// [[1,2],3,[[[4],5]]]
function flatten(arr) {
    return [].concat(
        ...arr.map(x => Array.isArray(x) ? flatten(x) : x)
    )
}
```

## 函数柯里化

把接受多个参数的函数变为接受单一参数的函数，并且返回接收余下的参数 且 返回的结果的 新函数

使用场景：

- 参数复用
- 提前确认，避免每次都重复判断
- 延迟计算/运行

```js
const curry = func => {
    const g = (...allArgs) => allArgs.length >= func.length ? func(...allArgs)
    : (...args) => g(...allArgs, ...args)
    return g
}
```
