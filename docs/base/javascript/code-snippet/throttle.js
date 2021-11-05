/**
 * 节流
 * 规定时间内，多次触发只会执行第一次触发的函数
 * 标志位+定时器+闭包
 * 应用场景：
 *          1）窗口调整（resize）
 *          2）页面滚动（scroll）
 *          3）DOM 元素的拖拽
 *          4）多次点击click
 */
function throttle(callback, delay = 200) {
  let flag = true
  return (...args) => {
    if (!flag) return
    flag = false
    setTimeout(() => {
      callback.apply(this, args)
      flag = true
    }, delay)
  }
}