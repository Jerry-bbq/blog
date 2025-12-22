/**
 * 模拟new操作符
 * 依据：https://tc39.es/ecma262/#sec-new-operator
 */
function _new(fn, ...args) {
  // 1. 创建新对象，继承 fn.prototype
  const obj = Object.create(fn.prototype);
  
  // 2. 执行构造函数，this 指向 obj，并传入参数
  const res = fn.apply(obj, args); // ✅ 正确传参
  
  // 3. 判断返回值：
  //    - 如果 res 是对象（且非 null）或函数，则返回 res
  //    - 否则返回新创建的对象 obj
  if (
    (typeof res === 'object' && res !== null) ||
    typeof res === 'function'
  ) {
    return res;
  }
  return obj;
}

/**
 * 验证
 */
function C(age) {
  this.age = age;
}

// 测试1：正常构造
var o = _new(C, 25);
console.log(o.age); // 25
console.log(o instanceof C); // true
console.log(o instanceof Object); // true
console.log(o.__proto__.constructor === C); // true

// 测试2：构造函数返回对象
function D() {
  this.name = 'D';
  return { override: true }; // 显式返回对象
}
var d = _new(D);
console.log(d.override); // true（返回的是 {override: true}，不是 D 实例）

// 测试3：构造函数返回原始值（应忽略）
function E() {
  this.val = 100;
  return 42; // 返回 number，应被忽略
}
var e = _new(E);
console.log(e.val); // 100（正确返回新对象）
console.log(e instanceof E); // true

// 测试4：原型方法
C.prototype.walk = function() { console.log('walk'); };
o.walk(); // "walk"