// 模拟apply
Function.prototype._apply = function(obj, argsArr) {
  // 处理obj是undefined或者null的情况
  if (obj === undefined || obj === null) {
    obj = window
  }

  // 给obj添加一个方法: tempFn: this
  obj.fn = this
  // 调用obj的tempFn方法, 传入参数, 得到返回值
  const result = obj.fn(...argsArr)
  // 删除obj上的temFn
  delete obj.fn
  // 返回方法的返回值
  return result
}

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
    // 存储链表中的 元素数量
    this.count = 0
    // 将第一个元素的引用保存下来
    this.head = undefined
    // 比较链表中的元素是否相等
    this.equalsFn = equalsFn
  }
  // 向链表尾部添加元素
  push(element) {
    // 传入element，创建 Node 项
    const node = new Node(element)
    let current
    if (this.head == null) {
      // 场景一：链表为空，添加一个元素
      // head 元素指向 node 元素
      this.head = node // 链表最后一个节点的下一个元素始终是 undefined 或 null
    } else {
      // 场景二：链表不为空，向其追加元素
      // 找到最后一个元素
      current = this.head
      // 循环访问列表，直到找到最后一项
      while (current.next != null) {
        current = current.next
      }
      // 让当前(也就是最后一个)元素的 next 指针指向想要添加到链表的节点
      current.next = node
    }
    // 递增链表的长度
    this.count++
  }
  // 移除元素
  removeAt(index) {
    // 检查越界值
    if (index >= 0 && index < this.count) {
      // 当前元素的引用
      let current = this.head
      // 移除第一项
      if (index === 0) {
        // head 指向链表的第二个元素
        this.head = current.next
      } else {
        let previous
        // 迭代链表的节点
        for (let i = 0; i < index; i++) {
          // 当前元素的前一个元素的引用
          previous = current
          // 总是循环列表的当前元素的引用
          current = current.next
        }
        // 将previous与current的下一项链接起来:跳过current，从而移除它
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    // 如果需要移除的元素的 index不是有效的位置，就返回 undefined
    return undefined
  }
}
