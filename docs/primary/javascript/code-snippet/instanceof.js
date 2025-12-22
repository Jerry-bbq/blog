/**
 * 模拟instanceof操作符
 * __proto__ is deprecated. Use Object.getPrototypeOf() instead.
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
function _instanceof(left, right) {
  // 1. 处理左侧为 null 或 undefined
  if (left == null) {
    return false;
  }

  // 2. 右侧必须有 prototype 属性（通常是构造函数）
  if (typeof right !== 'function') {
    throw new TypeError('Right-hand side of instanceof is not callable');
  }

  // 3. 获取左侧对象的实际原型
  let proto = Object.getPrototypeOf(left);
  const prototype = right.prototype;

  // 4. 沿原型链向上查找
  while (proto !== null) {
    if (proto === prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }

  return false;
}

/**
 * 验证
 */

// 常规测试
console.log(_instanceof([], Array));        // true
console.log(_instanceof([], Object));       // true
console.log(_instanceof(new Date(), Date)); // true

// 边界测试
console.log(_instanceof(null, Object));     // false
console.log(_instanceof(undefined, Object)); // false

// 继承测试
function Parent() {}
function Child() {}
Child.prototype = Object.create(Parent.prototype);
const child = new Child();
console.log(_instanceof(child, Child));   // true
console.log(_instanceof(child, Parent));  // true

// 错误输入
try {
  _instanceof([], {}); // 抛出 TypeError
} catch (e) {
  console.log(e.message); // "Right-hand side of instanceof is not callable"
}