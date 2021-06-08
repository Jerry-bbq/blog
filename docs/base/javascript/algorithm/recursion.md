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

1,1,2,3,5,8,13,21,34,55,89...求第 n 项

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
