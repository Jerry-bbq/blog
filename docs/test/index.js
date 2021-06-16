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

const heap = new MinHeap()
heap.insert(2)
heap.insert(3)
heap.insert(4)
heap.insert(5)
heap.insert(1)

console.log(heap)

console.log('Heap size: ', heap.size()) // 5
console.log('Heap is empty: ', heap.isEmpty()) // false
console.log('Heap min value: ', heap.findMinimum()) // 1

function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a)
}
class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = reverseCompare(compareFn)
  }
}

const maxHeap = new MaxHeap()
maxHeap.insert(2)
maxHeap.insert(3)
maxHeap.insert(4)
maxHeap.insert(5)
maxHeap.insert(1)
console.log('Heap size: ', maxHeap.size()) // 5
console.log('Heap min value: ', maxHeap.findMinimum()) // 5
