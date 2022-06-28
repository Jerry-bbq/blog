/**
 * 模拟call
 * 语法：function.call(thisArg, arg1, arg2, ...)
 * 1. 改变this指向第一个参数，如果为undefined或null，this指向window对象
 * 2. 执行函数
 * 
 */
Function.prototype._call = function(obj, ...args) {
  // 处理obj是undefined或者null的情况
  obj = obj || window

  // 给obj添加一个方法fn,赋值this
  obj.fn = this
  // 执行fn方法, 传入args参数, 拿到返回值res
  const res = obj.fn(...args)
  // 删除fn
  delete obj.fn
  // 返回res
  return res
}