---
sidebar: auto
---

# 递归

## 应用

### 阶乘

求n!

```js
const factorial = n => {
  if (n <= 1) {
    return 1
  }
  return factorial(n - 1) * n
}

// 测试
factorial(5)    // 120
```

### 求和

求 1-100 的和

```js
const sum = n => {
  if (n === 1) {
    return 1
  }
  return sum(n - 1) + n
}

// 测试
sum(100)  // 5050
```

### 波菲那契数列

前两项是 1， 从第三项开始，每一项都等于前两项之和：1,1,2,3,5,8,13,21,34,55,89...求第 n 项

```js
const fib = n => {
  if (n <= 2) {
    return 1
  }
  return fib(n - 1) + fib(n - 2)
}

// 测试
fib(7)    // 13
```

### 爬楼梯

假如楼梯有 n 个台阶，每次可以走 1 个或 2 个台阶，请问走完这 n 个台阶有几种走法

```js
const climbStairs = (n) => {
  if (n == 1) return 1
  if (n == 2) return 2
  return climbStairs(n - 1) + climbStairs(n - 2)
}
```

### 深拷贝

```js
function clone(o) {
  var temp = {}
  for (var key in o) {
    if (typeof o[key] == 'object') {
      temp[key] = clone(o[key])
    } else {
      temp[key] = o[key]
    }
  }
  return temp
}
```

### 递归组件

### 将数组转化为树形结构

以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，
现在要求实现一个 convert 方法
把原始 list 转换成树形结构，parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：

```js
let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];
const result = convert(list, ...);
```

期望转换后的结果如下：

```js
let result = [
    {
      id: 1,
      name: '部门A',
      parentId: 0,
      children: [
        {
          id: 3,
          name: '部门C',
          parentId: 1,
          children: [
            {
              id: 6,
              name: '部门F',
              parentId: 3
            }, {
              id: 16,
              name: '部门L',
              parentId: 3
            }
          ]
        },
        {
          id: 4,
          name: '部门D',
          parentId: 1,
          children: [
            {
              id: 8,
              name: '部门H',
              parentId: 4
            }
          ]
        }
      ]
    },
  ···
];
```

实现：

```js
function convert(list, parentId = 0) {
  var itemArr = []
  for (var i = 0; i < list.length; i++) {
    var node = list[i]
    if (node.parentId === parentId) {
      var newNode = {
        ...node,
        name: node.name,
        id: node.id,
        children: convert(list, node.id),
      }
      itemArr.push(newNode)
    }
  }
  return itemArr
}
```
