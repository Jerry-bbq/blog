---
sidebar: auto
---

# leetcode刷题

## 两数之和

案例一：

- 输入：nums = [2,7,11,15], target = 9
- 输出：[0,1]
- 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

案例二：

- 输入：nums = [3,3], target = 6
- 输出：[0,1]

### 暴力枚举

```js
var twoSum = function (nums, target) {
  const len = nums.length
  let index = []
  for (let i = 0; i < lenlen; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        index = [i, j]
      }
    }
  }
  return index
}
```

复杂度分析

- 时间复杂度：O(N^2)，其中 N 是数组中的元素数量。最坏情况下数组中任意两个数都要被匹配一次。
- 空间复杂度：O(1)O(1)。

### hash表

不可以使用set，因为set会对数组去重