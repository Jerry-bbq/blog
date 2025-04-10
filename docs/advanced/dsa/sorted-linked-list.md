
# 有序链表

## 定义

**有序链表**是指保持元素有序的链表结构。除了使用排序算法之外，我们还可以将元素插入到正确的位置来保证链表的有序性。

## 实现

### 工具函数

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
```

- 如果元素有相同的引用，它就返回 0
- 如果第一个元素小于第二个元素，它就返回-1，反之则返回 1

### 链表类

```js
class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn)
    this.compareFn = compareFn
  }
}
```

### 插入元素

```js
insert(element, index = 0) {
  if (this.isEmpty()) {
    return super.insert(element, 0)
  }
  const pos = this.getIndexNextSortedElement(element)
  return super.insert(element, pos)
}
getIndexNextSortedElement(element) {
  let current = this.head
  let i = 0
  for (; i < this.size() && current; i++) {
    const comp = this.compareFn(element, current.element)
    if (comp === Compare.LESS_THAN) {
      return i
    }
    current = current.next
  }
  return i
}
```
