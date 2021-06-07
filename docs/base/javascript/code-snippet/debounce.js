// 防抖
function debounce(fn, delay = 200) {
  let timer = null
  return (...arg) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arg)
    }, delay)
  }
}
