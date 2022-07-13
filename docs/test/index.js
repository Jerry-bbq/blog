Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let results = []
        let count = 0
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(res => {
                results[i] = res
                count++
                if (count === promises.length) {
                    resolve(results)
                }
            }, rej => {
                reject(rej)
            })
        }
    })
}

Promise.race = function(promises) {
    return new Promise((resolve, reject)=> {
        for (let i=0;i<promises.length;i++) {
            promises[i].then(res => {
                resolve(res)
            }, rej => {
                reject(rej)
            })
        }
    })
}