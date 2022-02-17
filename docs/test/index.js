// const str  = 'aaffffcc'

// let getRepeatStr = str => str.split(',').reduce((prev,next)=> {

// }, 0)

// console.log(str)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   let len = nums.length
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// }

// console.log(twoSum([2, 7, 11, 15], 9))

const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
const resolvePromise = (promise, x, resolve, reject) => {
  if (promise === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  if (typeof x === 'object' && x !== null && typeof x === 'function') {
    let called
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(
          x,
          y => {
            if (called) {
              return
            }
            resolvePromise(promise, y, resolve, reject)
          },
          r => {
            if (called) {
              return
            }
            called = true
            reject(r)
          }
        )
      } else {
        resolve(x)
      }
    } catch (error) {
      if (called) {
        return
      }
      called = true
      reject(error)
    }
  } else {
    resolve(x)
  }
}

class Promise2 {
  constructor(executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    // 成功回调数组
    this.onFulfilledCallbacks = []
    // 失败回调数组
    this.onRejectedCallbacks = []
    let resolve = value => {
      if (this.status === PENDING) {
        this.value = value
        this.status = FULFILLED
        // 发布
        this.onFulfilledCallbacks.forEach(cb => cb())
      }
    }
    let reject = reason => {
      if (this.status === PENDING) {
        this.reason = reason
        this.status = REJECTED
        // 发布
        this.onRejectedCallbacks.forEach(cb => cb())
      }
    }
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : err => {
            throw new Error(err)
          }

    let promise = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      }
      if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
      }
    })
    return promise
  }
  catch(errCallback) {
    return this.then(null, errCallback)
  }
  finally(cb) {
    return this.then(
      value => {
        return Promise.resolve(cb()).then(() => value)
      },
      reason => {
        return Promise.resolve(cb()).then(() => {
          throw reason
        })
      }
    )
  }

  // 传值返回新的promise，如果值是promise类型直接返回
  static resolve(value) {
    if (value instanceof Promise) return value
    return new Promise((resolve, reject) => resolve(value))
  }
  static reject(reason) {
    if (value instanceof Promise) return value
    return new Promise((resolve, reject) => reject(reason))
  }
  static all(values) {
    if (!Array.isArray(values)) {
      const type = typeof values
      return new TypeError(`TypeError: ${type} ${values} is not iterable`)
    }
    return new Promise((resolve, reject) => {
      let arr = []
      let count = 0
      const processResultByKey = (val, index) => {
        arr[index] = val
        if (++count === values.length) {
          resolve(arr)
        }
      }
      for (let i = 0; i < values.length; i++) {
        let value = values[i]
        if (value && typeof value.then === 'function') {
          value.then(val => {
            processResultByKey(val, i)
          }, reject)
        } else {
          processResultByKey(value, i)
        }
      }
    })
  }
  static race(values) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < values.length; i++) {
        let val = values[i]
        if (val && typeof val.then === 'function') {
          val.then(resolve, reject)
        } else {
          resolve(val)
        }
      }
    })
  }
  static allSettled() {}
  static any() {}
}

// new Promise((resolve, reject) => {
//   console.log(11)
//   resolve(22)
//   reject(33)
// }).then((resolve, reject) => {
//   console.log(resolve)
//   // console.log(reject)
// })

// const p = new Promise((resolve, reject) => {
//   console.log('执行函数')
//   resolve(11)
//   // reject(11)
// })
// p.then(
//   value => {
//     console.log(value, 'onFulfilled')
//   },
//   reason => {
//     console.log(reason, 'onRejected')
//   }
// )

const promise = new Promise((resolve, reject) => {
  reject('失败')
})
  .then()
  .then()
  .then(
    data => {
      console.log(data)
    },
    err => {
      console.log('err', err)
    }
  )
