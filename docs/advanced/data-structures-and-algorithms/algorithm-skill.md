
# 算法设计与技巧

- 分而治之算法
- 动态规划
- 贪心算法
- 回溯算法
- 著名算法问题

## 分而治之算法

分而治之算法可以分成三个部分:

- **分解**原问题为多个子问题（原问题的多个小实例）。
- **解决**子问题，用返回解决子问题的方式的递归算法。递归算法的基本情形可以用来解决子问题。
- **组合**这些子问题的解决方式，得到原问题的解。

### 二分搜索

将二分搜索用分而治之的方式实现

- 分解：计算 mid 并搜索数组较小或较大的一半。
- 解决：在较小或较大的一半中搜索值。
- 合并：这步不需要，因为我们直接返回了索引值

实现：

```js
function binarySearchRecursive(array, value, low, high, compareFn = defaultCompare) {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const element = array[mid]
    if (compareFn(element, value) === Compare.LESS_THAN) {
      return binarySearchRecursive(array, value, mid + 1, high, compareFn)
    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
      return binarySearchRecursive(array, value, low, mid - 1, compareFn)
    } else {
      return mid 
    }
  }
  return DOES_NOT_EXIST
}
function binarySearch(array, value, compareFn = defaultCompare) {
  const sortedArray = quickSort(array)
  const low = 0
  const high = sortedArray.length - 1
  return binarySearchRecursive(array, value, low, high, compareFn)
}
```

## 动态规划

动态规划（ dynamic programming， DP）是一种将复杂问题分解成更小的子问题来解决的优化技术

::: tip

注意，动态规划和分而治之是不同的方法。分而治之方法是把问题分解成相互独立的子问题，然后组合它们的答案，而动态规划则是将问题分解成相互依赖的子问题

:::

用动态规划解决问题时，要遵循三个重要步骤：

- 定义子问题；
- 实现要反复执行来解决子问题的部分（这一步要参考前一节讨论的递归的步骤）；
- 识别并求解出基线条件。

斐波那契数列就是使用动态规划完成的

## 贪心算法



## 回溯算法
