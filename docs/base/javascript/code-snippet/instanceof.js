// 模拟instanceof操作符
const instanceOf = (left, right) => {
  let proto = left.__proto__
  let prototype = right.prototype
  while (true) {
    // 实例的`__proto__`等于null，没有找到
    if (proto === null) {
      return false
    }
    // 实例的`__proto__`等于构造函数的`prototype`，找到了
    if (proto === prototype) {
      return true
    }
    // 如果上述条件都不满足
    // 通过原型链查找，继续对比
    proto = proto.__proto__
  }
}

// 测试
instanceOf([], Array) // true
instanceOf([], Object) // true
