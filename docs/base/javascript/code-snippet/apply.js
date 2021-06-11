// 模拟apply
Function.prototype._apply = function(obj, argsArr) {
  // 处理obj是undefined或者null的情况
  if (obj === undefined || obj === null) {
    obj = window
  }

  // 给obj添加一个方法: tempFn: this
  obj.fn = this
  // 调用obj的tempFn方法, 传入参数, 得到返回值
  const result = obj.fn(...argsArr)
  // 删除obj上的temFn
  delete obj.fn
  // 返回方法的返回值
  return result
}

