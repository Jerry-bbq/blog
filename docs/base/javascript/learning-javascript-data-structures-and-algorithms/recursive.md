---
sidebar: auto
---

# 递归

## 定义

函数自己调用自己

- 每个递归函数都必须有基线条件，即一个不再递归调用的条件（ 停止点），以防止无限递归

## 计算一个数的阶乘

数 n 的阶乘，定义为 n!，表示从 1 到 n 的整数的乘积。

5 的阶乘表示为 5!，和 5 × 4 × 3 × 2 × 1 相等，结果是 120

### 迭代阶乘

```js
function factorialIterative(number) {
  if (number < 0) return undefined
  let total = 1
  for (let n = number; n > 1; n--) {
    total = total * n
  }
  return total
}

console.log(factorialIterative(5)) // 120
```

### 递归阶乘

```js
function factorial(n) {
  if (n === 1 || n === 0) {
    // 基线条件
    return 1
  }
  return n * factorial(n - 1) // 递归调用
}

console.log(factorial(5)) // 120
```

## 斐波那契数列

由 0、 1、 1、 2、 3、 5、 8、 13、 21、34 等数组成的序列。数 2 由 1 + 1 得到，数 3 由 1 + 2 得到，数 5 由 2 + 3 得到，以此类推

斐波那契数列的定义如下：

- 位置 0 的斐波那契数是零。
- 1 和 2 的斐波那契数是 1。
- n（此处 n > 2）的斐波那契数是（ n  1）的斐波那契数加上（ n  2）的斐波那契数。

### 迭代求斐波那契数

```js
function fibonacciIterative(n) {
  if (n < 1) return 0
  if (n <= 2) return 1
  let fibNMinus2 = 0
  let fibNMinus1 = 1
  let fibN = n
  for (let i = 2; i <= n; i++) {
    // n >= 2
    fibN = fibNMinus1 + fibNMinus2 // f(n-1) + f(n-2)
    fibNMinus2 = fibNMinus1
    fibNMinus1 = fibN
  }
  return fibN
}
```

### 递归求斐波那契数

```js
function fibonacci(n) {
  if (n < 1) return 0
  if (n <= 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}
```

### 记忆化斐波那契数

```js
function fibonacciMemoization(n) {
  const memo = [0, 1]
  const fibonacci = n => {
    if (memo[n] != null) return memo[n]
    return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo))
  }
  return fibonacci
}
```

迭代的版本比递归的版本快很多，所以这表示递归更慢。