// 模拟new操作符
const new2 = function(fn,...arg) {
    // 第一步：创建一个新对象，继承构造函数的原型对象
    // 即创建对象o，继承构造函数的原型对象：o.__proto__ === func.prototype
    const o = Object.create(fn.prototype)
    // 第二步：执行构造函数，转移this到o对象上
    const res = fn.call(o,arg)
    // 判断构造函数执行的结果是不是对象类型
    if (typeof res === 'object'){
        return res
    } else {
        return o
    }
}
// 验证
var o6 = new2(M)
o6 instanceof M // 判断o6是不是M构造函数的实例
o6 instanceof Object 
o6.__proto__.construtor === M // o6的原型对象是否等于M
M.prototype.walk = function(console.log('walk')) // 在M的原型上增加一个方法walk
o6.walk()