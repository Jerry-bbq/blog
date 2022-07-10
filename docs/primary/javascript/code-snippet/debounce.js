/**
 * 防抖
 * 规定时间内，触发事件多次，让最后一次触发事件生效（不断刷新计时器）
 * 用setTimeout+闭包实现
 * 应用：
 *      1）输入框实时搜索联想（keyup/input）
 */
function debounce(callback, delay = 200) {
  let timer = null
  return (...arg) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback.apply(this, arg)
    }, delay)
  }
}
