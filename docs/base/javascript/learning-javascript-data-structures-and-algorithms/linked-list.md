---
sidebar: auto
---

# 链表

## 定义

数组的缺点:(在大多数语言中)数组的大小是固定的，从数组的起点或中间插入或移 除项的成本很高，因为需要移动元素。

链表存储`有序的元素集合`，但不同于数组，链表中的元素在内存中并`不是连续放置`的。每个元素由一个存储元素本身的`节点`和一个指向下一个元素的`引用`(也称指针或链接)组成。下图展 示了一个链表的结构。

![linked-list](./images/linked-list.png)

- 相对于传统的数组，链表的一个好处在于，添加或移除元素的时候不需要移动其他元素。
- 然而，链表需要使用`指针`（head），因此实现链表时需要额外注意
- 在数组中，我们可以直接访问任何位置 的任何元素，而要想访问链表中间的一个元素，则需要从起点(表头)开始迭代链表直到找到所 需的元素。

链表中的元素组成表示：

```js
class Node {
  constructor(element) {
    this.element = element
    this.next = undefined
  }
}
```

- 链表元素的值`element`
- 指向链表中下一个元素的指针`next`
- 当一个 Node 实例被创建时，它的 `next` 指针总是 `undefined`

## 方法

- push(element):向链表尾部添加一个新元素。
- insert(element, position):向链表的特定位置插入一个新元素。
- getElementAt(index):返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回 undefined。
- remove(element):从链表中移除一个元素。
- indexOf(element):返回元素在链表中的索引。如果链表中没有该元素则返回-1。
- removeAt(position):从链表的特定位置移除一个元素。
- isEmpty():如果链表中不包含任何元素，返回 true，如果链表长度大于 0 则返回 false。
- size():返回链表包含的元素个数，与数组的 length 属性类似。
- toString():返回表示整个链表的字符串。由于列表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。

## 实现

```js
function defaultEquals(a, b) {
  return a === b
}
class LinkedList {
  constructor(equalsFn = defaultEquals) {
    // 元素数量
    this.count = 0
    // 将第一个元素的引用保存下来
    this.head = undefined
    // 比较链表中的元素是否相等
    this.equalsFn = equalsFn
  }
}
```

### 向链表尾部添加一个新元素

```js
push(element) {
  const node = new Node(element)
  let current
  if (this.head == null) {
    this.head = node
  } else {
    current = this.head
    while (current.next != null) {
      current = current.next
    }
    current.next = node
  }
  this.count++
}
```

说明：

- 向链表尾部添加元素有两个场景，一是空链表，添加第一个元素；二是链表不为空，追加元素
- `this.head == null` 和 `(this.head === undefined || head === null)`等价
- `current.next != null` 和 `(current.next !== undefined && current.next !== null)`等价

步骤：

1. 传入`element`，创建元素`node`
2. 如果是空链表，也就是添加第一个元素，让`head` 元素指向 `node` 元素。
3. 否则，循环链表找到最后一个元素，利用当前元素的不为`null`的条件查找到最后一个元素，将当前元素的指针`next`指向下一个链表节点
4. 最后，递增链表的长度

测试：

```js
const list = new LinkedList();
list.push(15);
list.push(10);
```

向空链表中添加第一个元素过程的图解：

![null-push](./images/null-push.png)

向非空链表中追加元素过程的图解：

![not-null-push](./images/not-null-push.png)

结果：

![push-result](./images/push-result.png)

### 从链表中移除元素

- 从特定位置移除一个元素（ removeAt ）
- 根据元素的值移除元素( remove )

两种场景：

- 第一种是移除第一个元素
- 第二种是移除第一个元素之外的其他元素

```js
removeAt(index) {
  if (index >= 0 && index < this.count) {
    let current = this.head

    if (index === 0) {
      this.head = current.next
    } else {
      let previous
      for (let i = 0; i < index; i++) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.count--
    return current.element
  }
  return undefined
}
```

说明：

- index:移除的元素的位置，应该是从0开始,且小于链表元素个数的

步骤：

1. 校验`index`是否有效，无效返回`undefined`
2. 移除第一个元素，就是让指针`head`指向第二个元素
3. 移除第一个元素之外的其他元素，迭代链表的节点，直到找到当前元素的位置，拿到当前元素的引用`current`,和前一个元素的引用`previous`
4. 将 `previous.next` 和 `current.next` 链接起来
5. 最后，递减链表的长度

删除第一个元素的图解：

![remove-first](./images/remove-first.png)

删除任意位置元素的图解：

![remove-any](./images/remove-any.png)

### 循环迭代链表直到目标位置

```js
getElementAt(index) {
  if (index >= 0 && index <= this.count) {
    let node = this.head
    for (let i = 0; i < index && node != null; i++) {
      node = node.next
    }
    return node
  }
  return undefined
}
```

说明

- 校验`index`是否合法,如果不合法返回`undefined`
- 结束循环时， node 元素 将是 index 位置元素的引用

重构remove方法

```js
removeAt(index) {
  if (index >= 0 && index < this.count) {
    let current = this.head
    if (index === 0) {
      this.head = current.next
    } else {
      const previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = current.next
    }
    this.count--
    return current.element
  }
  return undefined
}
```

### 在任意位置插入元素

两种场景：

- 第一种在链表的起点添加一个元素
- 第二种在链表中间或尾部添加一个元素

在链表的起点添加一个元素图解:

![insert-first](./images/insert-first.png)

在链表中间或尾部添加一个元素图解:

![insert-last](./images/insert-last.png)

![insert-any](./images/insert-any.png)

```js
insert(element, index) {
  if (index >= 0 && index <= this.count) {
    const node = new Node(element)
    if (index === 0) {
      const current = this.head
      node.next = current
      this.head = node
    } else {
      const previous = this.getElementAt(index - 1)
      const current = previous.next
      node.next = current
      previous.next = node
    }
    this.count++
    return true
  }
  return false
}
```

说明

- 校验`index`是否合法,如果不合法返回`false`
- 在链表的起点添加一个元素：
  - 把 `node.next` 的值设为 `current`
  - 把 `head` 的引用改为 `node`
- 在链表中间或尾部添加一个元素：
  - 迭代链表，找到目标位置
  - 把新元素和当前元素链接起来
  - 改变 previous 和 current 之间的链接
  - 让 previous.next 指向 node，取代 current

### 返回一个元素的位置

indexOf 方法接收一个元素的值，如果在链表中找到了它，就返回元素的位置，否则返回-1。

```js
indexOf(element) {
  let current = this.head
  for (let i = 0; i < this.count && current != null; i++) {
    if (this.equalsFn(element, current.element)) {
      return i
    }
    current = current.next
  }
  return -1
}
```

说明：

- 使用一个变量`current`来帮助我们循环访问链表
- 然后迭代元素，直到链表长度为止，为了确保不会发生运行时错误，可以验证一下 current 变量是否为 null 或 undefined
- 每次迭代时，将验证 current 节点的元素和目标元素是否相等

### 移除元素

```js
remove(element) {
  const index = this.indexOf(element)
  return this.removeAt(index)
}
```

### size,isEmpty,getHead

```js
size() {
  return this.count
}
isEmpty() {
  return this.size() === 0
}
getHead() {
  return this.head
  }
```

### toString

```js
toString() {
  if (this.head == null) {
    return ''
  }
  let objString = `${this.head.element}`
  let current = this.head.next
  for (let i = 1; i < this.size() && current != null; i++) {
    objString = `${objString},${current.element}`
    current = current.next
  }
  return objString
}
```

### 最终代码

```js
// 相等
function defaultEquals(a, b) {
  return a === b
}
// 要添加到链表中的项
class Node {
  constructor(element) {
    this.element = element
    this.next = undefined
  }
}
class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }
  push(element) {
    const node = new Node(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        node.next = current
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }
  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  size() {
    return this.count
  }
  isEmpty() {
    return this.size() === 0
  }
  getHead() {
    return this.head
  }
  toString() {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString
  }
}
```

## 双向链表
