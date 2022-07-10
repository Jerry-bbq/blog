/**
 * 模拟instanceof操作符
 * 
 * 检测构造函数的`prototype`属性是否出现在某个实例对象的原型链上，是则返回true，否则返回false
 * 1. 获取实例的原型`proto`
 * 2. 获取构造函数的原型`prototype`
 * 3. 使用while循环
 *    1）如果实例的原型proto为null，说明没有找到，返回 false
 *    2）如果实例的原型proto等于构造函数的原型prototype，说明找到了，返回 true
 *    3）循环条件是：通过原型链，依次比较构造函数的原型是否与实例的原型相等
 * 
 */
const _instanceof = (left, right) => {
  let proto = left.__proto__
  let prototype = right.prototype
  while (true) {
    if (proto === null) {
      return false
    }
    if (proto === prototype) {
      return true
    }
    proto = proto.__proto__
  }
}

// 测试
_instanceof([], Array) // true
_instanceof([], Object) // true