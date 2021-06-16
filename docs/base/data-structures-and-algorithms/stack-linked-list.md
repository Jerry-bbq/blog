---
sidebar: auto
---

# 使用链表模拟栈

可以使用 LinkedList 类及其变种作为内部的数据结构来创建其他数据结构，例如栈、 队列和双向队列,下面学习怎样创建栈数据结构

## 链表类

```js
class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList()
  }
  push(element) {
    this.items.push(element)
  }
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items.removeAt(this.size() - 1)
  }
}
```

也可以对 LinkedList 类进行优化，保存一个指向尾部元素的引用，并使用这个优化版本来代替 DoublyLinkedList

用相同的逻辑用 DoublyLinkedList 来创建 Queue 和 Deque 类，甚至使用 LinkedList 类也是可以的！
