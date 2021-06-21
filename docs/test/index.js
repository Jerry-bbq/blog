class Queue {
  constructor() {
    this.count = 0 // 记录队列的大小
    this.lowestCount = 0 // 记录队列的前端
    this.items = {}
  }
  // 从`队列末尾`添加元素
  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }
  // 从`队列头部`移除元素
  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    // 删除队列前端
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
  isEmpty() {
    return this.count - this.lowestCount === 0
  }
  size() {
    return this.count - this.lowestCount
  }
  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}

class Deque {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
  // 向双端队列的前端添加元素
  addFront(element) {
    if (this.isEmpty()) {
      // 场景一：双端队列是空的
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      // 场景二：一个元素已经被从双端队列的前端移除
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      // 场景三：lowestCount 为 0 的情况
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.lowestCount = 0
      this.items[0] = element
    }
  }

  // 以下方法都是Stack和Queue中已实现的
  // 双端队列后端添加新的元素
  addBack(element) {
    this.items[this.count] = element
    this.count++
  }

  // 双端队列前端移除第一个元素
  removeFront() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  // 双端队列后端移除第一个元素
  removeBack() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
  // 双端队列前端的第一个元素
  peekFront() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
  // 双端队列后端的第一个元素
  peekBack() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  // 以下方法同普通队列相同
  isEmpty() {
    return this.count - this.lowestCount === 0
  }
  size() {
    return this.count - this.lowestCount
  }
  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}

const deque = new Deque();
console.log(deque.isEmpty());                   // 输出true
deque.addBack('John'); 
deque.addBack('Jack');
console.log(deque.toString());                  // John, Jack
deque.addBack('Camila');
console.log(deque.toString());                  // John, Jack, Camila
console.log(deque.size());                      // 输出3
console.log(deque.isEmpty());                   // 输出false
deque.removeFront();                            // 移除John
console.log(deque.toString());                  // Jack, Camila
deque.removeBack();                             // Camila 决定离开
console.log(deque.toString());                  // Jack
deque.addFront('John');                         // John 回来询问一些信息
console.log(deque.toString());                  // John, Jack

