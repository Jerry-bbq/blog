/**
 * 模拟bind
 * 语法：function.bind(thisArg[, arg1[, arg2[, ...]]])
 * 1. 改变this指向，函数不执行
 */
Function.prototype._bind = function(obj, ...args) {
  // 返回一个新函数
  return (...args2) => {
    // 调用原来函数, 指定this为obj, 参数列表由args和args2依次组成
    return this.call(obj, ...args, ...args2)
  }
}