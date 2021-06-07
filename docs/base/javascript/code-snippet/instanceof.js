// 模拟instanceof操作符
const instanceOf = (left, right) => {
  let proto = left.__proto__
  let prototype = right.prototype
  while (true) {
    if (proto === null) {
      return false
    }
    if (proto === prototype) {
      return true
    }
    // 原型链
    proto = proto.__proto__
  }
}

// 测试
instanceOf([], Array) // true
instanceOf([], Object) // true
