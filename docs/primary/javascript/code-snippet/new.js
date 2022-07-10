/**
 * 模拟new操作符
 * 1. 创建一个新对象obj
 * 2. 继承构造函数的原型对象fn.prototype
 * 3. 执行构造函数，并将this指向新创建的对象obj
 * 4. 判断执行构造函数返回的结果res，如果res是一个对象，则返回这个res，否则返回创建的对象obj
 */
const _new = function(fn, ...arg) {
    const obj = Object.create(fn.prototype)
    const res = fn.call(obj, arg)
    if (typeof res === 'object'){
        return res
    } else {
        return obj
    }
}

// 验证
function C(age) {
    this.age = age
}
var o = _new(C)
o instanceof C // 判断实例o是不是M构造函数的实例,返回true
o instanceof Object 
o.__proto__.constructor === C // 实例o的原型对象是否等于构造函数C
C.prototype.walk = function() { console.log('walk') } // 在构造函数C的原型上增加一个方法walk
o.walk()