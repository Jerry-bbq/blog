/**
 * 模拟apply
 * 语法：func.apply(thisArg, [argsArray])
 * 1. 改变this指向第一个参数，如果为undefined或null，this指向window对象
 * 2. 执行函数
 */
Function.prototype._apply = function(obj, argsArr) {
  // 处理obj是undefined或者null的情况
  if (obj === undefined || obj === null) {
    obj = window
  }
  // obj = obj || window

  // 给obj添加一个方法fn，赋值this
  obj.fn = this
  // 执行fn, 传入参数, 得到返回值res
  const res = obj.fn(...argsArr)
  // 删除fn
  delete obj.fn
  // 返回res
  return res
}

