class MyPromise {
  constructor(executor) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    this.onFullfilledCallbacks = []
    this.onRejectedCallbacks = []

    let resolve = value => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        this.onFullfilledCallbacks.forEach(fn => fn(value))
      }
    }
    let reject = reason => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn(reason))
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      throw new Error(error)
    }
  }
  then(onFullfilled, onRejected) {
    if (this.state === 'pending') {
      this.onFullfilledCallbacks.push(onFullfilled)
      this.onRejectedCallbacks.push(onRejected)
    }
    if (this.state === 'fullfilled') {
      onFullfilled(this.value)
    }
    if (this.state === 'rejected') {
      onRejected(this.reason)
    }
  }
}