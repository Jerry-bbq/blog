// 模拟new操作符
const new2 = function(fn, ...arg) {
    // 第一步：创建一个新对象，继承构造函数的原型对象
    // 即创建对象o，继承构造函数的原型对象：o.__proto__ === func.prototype
    const o = Object.create(fn.prototype)
    // 第二步：执行构造函数，改变this指向`o`对象上
    const res = fn.call(o, arg)
    // 判断构造函数执行的结果是不是对象类型
    if (typeof res === 'object'){
        return res
    } else {
        return o
    }
}
// 验证
function C(age) {
    this.age = age
}
var o = new2(C)
o instanceof C // 判断实例o是不是M构造函数的实例,返回true
o instanceof Object 
o.__proto__.constructor === C // 实例o的原型对象是否等于构造函数C
C.prototype.walk = function() { console.log('walk') } // 在构造含税C的原型上增加一个方法walk
o.walk()