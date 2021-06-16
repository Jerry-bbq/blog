---
sidebar: auto
---

# 算法复杂度

## 大O表示法

它用于描述算法的性能和复杂程度。大O表示法将算法按照消耗的时间进行分类，依据随输入增大所需要的空间/内存

符号 | 名称
---|---
O(1) | 常数的
O(㏒(n)) | 对数的
O((㏒(n))c) | 对数多项式的
O(n) | 线性的
O(n²) | 二次的
O(n^ｃ) | 多项式的
O(c^ｎ) | 指数的

如何衡量算法的效率？通常是用资源，例如 CPU（时间）占用、内存占用、硬盘占用和网络占用。当讨论大 O 表示法时，一般考虑的是 CPU（时间）占用

### O(1)

```js
function increment(num) {
  return ++num
}
```

### O(n)

```js
function sequentialSearch(array, value, equalsFn = defaultEquals) {
  for (let i = 0; i < array.length; i++) {
    if (equalsFn(value, array[i])) {
      return i
    }
  }
  return -1
}
```

### O(n²)

```js
function bubbleSort(array, compareFn = defaultCompare) {
  const { length } = array
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1)
      }
    }
  }
  return array
}
```

### 时间复杂度比较