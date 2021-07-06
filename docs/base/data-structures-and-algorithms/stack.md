---
sidebar: auto
---

# 栈

- 数据呈线性排列的数据结构
- 只能访问最新添加的数据
- 栈就像是一摞书，拿到新书时我们会把它放在书堆的最上面，取书时也只能从最上面的新书开始取

## 定义

栈是一种遵从`后进先出(LIFO)`原则的有序集合。

新添加或待删除的元素都保存在栈的同一端，称作**栈顶**，另一端就叫**栈底**。在栈里，新元素都靠近栈顶，旧元素都接近栈底。

栈也被用在编程语言的编译器和内存中保存变量、方法调用等，也被用于浏览器历史记录 (浏览器的返回按钮)。

## 方法

方法 | 说明 | 有无返回
---|---|---
push(element(s)) | 添加一个(或几个)新元素到栈顶 | false
clear() | 移除栈里的所有元素 | false
pop() | 移除栈顶的元素，同时返回被移除的元素 | true
peek() | 返回栈顶的元素，不对栈做任何修改 | true
isEmpty() | 如果栈里没有任何元素就返回 true，否则返回 false | true
size() | 返回栈里的元素个数。该方法和数组的 length 属性很类似 | true

## 实现

### 方式一：数组

```js
class Stack {
  constructor() {
    this.items = []
  }
  push(element) {
    this.items.push(element)
  }
  pop() {
    return this.items.pop()
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
  clear() {
    this.items = []
  }
}
```

测试：

```js
var stack = new Stack()
console.log(stack.isEmpty()); // 输出为true
stack.push(5);
stack.push(8);
console.log(stack.peek()); // 输出8
stack.push(11);
console.log(stack.size()); // 输出3
console.log(stack.isEmpty()); // 输出false
stack.push(15);
console.log(stack.items); 
// [5,8,11,15]
```

下图描绘了对栈的操作和当前的状态：

![stack-push](./images/stack-push.png)

移除元素：

```js
stack.pop();
stack.pop(); 
console.log(stack.size()); // 输出2
console.log(stack.items); 
// [5,8]
```

下图描绘了对栈的操作和当前的状态：

![stack-pop](./images/stack-pop.png)

### 方式二：对象

```js
class Stack {
  constructor() {
    this.count = 0 // 记录栈的大小
    this.items = {}
  }
  push(element) {
    this.items[this.count] = element
    this.count++
  }
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    // 删除栈顶
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }
  isEmpty() {
    return this.count === 0
  }
  size() {
    return this.count
  }
  clear() {
    this.count = 0
    this.items = {}
  }
  // 创建toString方法
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}
```

## 问题

使用`class`定义类无法设置`私有属性`和`私有方法`，解决方案：

- 使用下划线命名约定
- Symbol
- WeakMap
- TypeScript 提供了一个给类属性和方法使用的`private`修饰符。然而，该修饰符只在编译时有用(包括我们在前几章讨论的 TypeScript 类型和错误检测)。在代码被转移完成后，属性同样是公开的。
- 在属性前添加井号(`#`)作为前缀来声明私有属性

## 应用

### 整数十进制转化为二进制

原理：将该十进制数**除以2**(二进制是满二进一)并**对商取整**， 直到**商是0为止**，最后，将余数做一个**逆序排列**

![stack-app](./images/stack-app.png)

```js
function decimalToBinary(decNumber) {
  const remStack = new Stack()
  let number = decNumber
  let rem
  let binaryString = ''
  
  // 入栈
  while (number > 0) {
    rem = number % 2                 // 余数
    remStack.push(rem)               // 以十进制10为例，分别将`0,1,0,1`存入栈中
    number = Math.floor(number / 2)   // 商（取商的整数（向下取整））
  }

  // 出栈（清空栈）
  while (!remStack.isEmpty()) {
    // 用 pop 方法把栈中的元素都移除，把出栈的元素连接成字符串
    binaryString += remStack.pop().toString()
  }
  return binaryString
}

// 测试
decimalToBinary(10)     // '1010'
decimalToBinary(233)    // '11101001'
```

使用数组实现：

```js
function decimalToBinary(decNumber) {
  const remArr = []
  let number = decNumber
  let rem

  while (number > 0) {
    rem = number % 2
    remArr.push(rem)
    number = Math.floor(number / 2)
  }
  return remArr
    .reverse()
    .toString()
    .replace(/,/g, '')
}
```

### 整数十进制转化为其他进制

把十进制转换成基数为 2~36 的任意进制

```js
function baseConverter(decNumber, base) {
  const remStack = new Stack()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let number = decNumber
  let rem
  let baseString = ''

  if (!(base >= 2 && base <= 36)) {
    return ''
  }

  while (number > 0) {
    rem = number % base
    remStack.push(rem)
    number = Math.floor(number / base)
  }

  while (!remStack.isEmpty()) {
    // 十进制转成十六进制时，余数是 0~9 加上 A、B、C、D、E 和 F
    baseString += digits[remStack.pop()]
  }
  return baseString
}

// 测试
baseConverter(10,2)           // '1010'
baseConverter(100345, 2)      // '11000011111111001'
baseConverter(100345, 8)      // '303771'
baseConverter(100345, 16)     // '187F9'
baseConverter(100345, 35)     // '2BW0'
```
