---
sidebar: auto
---

# 二叉堆和堆排序

**堆**数据结构，也叫作**二叉堆**，是一种特殊的二叉树

二叉堆是计算机科学中一种非常著名的数据结构，由于它能高效、快速地找出最大值和最小值，常被应用于**优先队列**。它也被用于著名的**堆排序算法**中

## 二叉堆数据结构

特性：

- 完全具备二叉树的特点，并且最后一层的叶节点尽可能都是左侧子节点，这叫作**结构特性**
- 二叉堆不是最小堆就是最大堆，所有的节点都大于等于（最大堆）或小于等于（最小堆）每个它的子节点。这叫作**堆特性**

尽管二叉堆是二叉树，但并不一定是二叉搜索树（ BST）。在二叉堆中，每个子节点都要大于等于父节点（最小堆）或小于等于父节点（最大堆）。然而在二叉搜索树中，左侧子节点总是
比父节点小，右侧子节点也总是更大。

## 创建最小堆类

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
}
function defaultCompare(a, b) {
  if (a === b) {
    return 0
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}
class MinHeap {
  constructor(compareFn = defaultCompare) {
    // 要比较储存在数据结构中的值
    this.compareFn = compareFn
    this.heap = []
  }
}
```

## 方法

方法 | 说明 | 是否返回
---|---|---
insert(value) | 这个方法向堆中插入一个新的值。如果插入成功，它返回 true，否则返回 false。 | true
extract() | 这个方法移除最小值（最小堆）或最大值（最大堆），并返回这个值 | true
findMinimum() | 这个方法返回最小值（最小堆）或最大值（最大堆）且不会移除这个值 | true

### 插入元素

```js
insert(value) {
  if (value != null) {
    this.heap.push(value)
    this.siftUp(this.heap.length - 1)
    return true
  }
  return false
}
// 上移操作
siftUp(index) {
  let parent = this.getParentIndex(index)
  while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) > Compare.BIGGER_THAN) {
    swap(this.heap, parent, index)
    index = parent
    parent = this.getParentIndex(index)
  }
}
// 交换函数
function swap(array, a, b) {
  const temp = array[a]
  array[a] = array[b]
  array[b] = temp
}
```

测试

```js
const heap = new MinHeap()
heap.insert(2)
heap.insert(3)
heap.insert(4)
heap.insert(5)
heap.insert(1)

console.log(heap)
```

### 从堆中找到最小值或最大值

最小堆中，最小值总是位于数组的第一个位置（堆的根节点）

```js
size() {
  return this.heap.length
}
isEmpty() {
  return this.size() === 0
}
findMinimum() {
  return this.isEmpty() ? undefined : this.heap[0]
}
```

测试

```js
console.log('Heap size: ', heap.size()); // 5
console.log('Heap is empty: ', heap.isEmpty()); // false
console.log('Heap min value: ', heap.findMinimum()); // 1
```

### 导出堆中的最小值或最大值

```js
extract() {
  if (this.isEmpty()) {
    return undefined
  }
  if (this.size() === 1) {
    return this.heap.shift()
  }
  const removedValue = this.heap.shift()
  this.siftDown(0)
  return removedValue
}

siftDown(index) {
  let element = index
  const left = this.getLeftIndex(index)
  const right = this.getRightIndex(index)
  const size = this.size()
  if (left < size && this.compareFn(this.heap[element], this.heap[left]) > Compare.BIGGER_THAN) {
    element = left
  }
  if (right < size && this.compareFn(this.heap[element], this.heap[right]) > Compare.BIGGER_THAN) {
    element = right
  }
  if (index !== element) {
    swap(this.heap, index, element)
    this.siftDown(element)
  }
}
```

### 最终实现

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
}
function defaultCompare(a, b) {
  if (a === b) {
    return 0
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}
// 交换函数
function swap(array, a, b) {
  const temp = array[a]
  array[a] = array[b]
  array[b] = temp
}
// // 或者
// const swap = (array, a, b) => ([array[a], array[b]] = [array[b], array[a]])
class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.heap = []
  }
  // 左侧子节点的位置
  getLeftIndex(index) {
    return 2 * index + 1
  }
  // 右侧子节点的位置
  getRightIndex(index) {
    return 2 * index + 2
  }
  // 父节点位置
  getParentIndex(index) {
    if (index === 0) {
      return undefined
    }
    return Math.floor((index - 1) / 2)
  }

  insert(value) {
    if (value != null) {
      this.heap.push(value)
      this.siftUp(this.heap.length - 1)
      return true
    }
    return false
  }
  // 上移操作
  siftUp(index) {
    let parent = this.getParentIndex(index)
    while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) > Compare.BIGGER_THAN) {
      swap(this.heap, parent, index)
      index = parent
      parent = this.getParentIndex(index)
    }
  }

  size() {
    return this.heap.length
  }
  isEmpty() {
    return this.size() === 0
  }
  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0]
  }

  extract() {
    if (this.isEmpty()) {
      return undefined
    }
    if (this.size() === 1) {
      return this.heap.shift()
    }
    const removedValue = this.heap.shift()
    this.siftDown(0)
    return removedValue
  }

  siftDown(index) {
    let element = index
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)
    const size = this.size()
    if (left < size && this.compareFn(this.heap[element], this.heap[left]) > Compare.BIGGER_THAN) {
      element = left
    }
    if (right < size && this.compareFn(this.heap[element], this.heap[right]) > Compare.BIGGER_THAN) {
      element = right
    }
    if (index !== element) {
      swap(this.heap, index, element)
      this.siftDown(element)
    }
  }
}
```

## 创建最大堆类

```js
function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a)
}
class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = reverseCompare(compareFn)
  }
}
```

测试

```js
const maxHeap = new MaxHeap();
maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);
maxHeap.insert(1);
console.log('Heap size: ', maxHeap.size()); // 5
console.log('Heap min value: ', maxHeap.findMinimum()); // 5
```

## 堆排序算法

步骤：

1. 用数组创建一个最大堆用作源数据。
2. 在创建最大堆后，最大的值会被存储在堆的第一个位置。我们要将它替换为堆的最后一个值，将堆的大小减 1。
3. 最后，我们将堆的根节点下移并重复步骤 2 直到堆的大小为 1。

```js
function heapSort(array, compareFn = defaultCompare) {
  let heapSize = array.length
  buildMaxHeap(array, compareFn) // 步骤 1
  while (heapSize > 1) {
    swap(array, 0, --heapSize) // 步骤 2
    heapify(array, 0, heapSize, compareFn) // 步骤 3
  }
  return array
}

function buildMaxHeap(array, compareFn) {
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length, compareFn)
  }
  return array
}
```