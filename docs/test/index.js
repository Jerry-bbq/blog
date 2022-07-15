// Promise.all(tasks).then(res => {
//     console.log(res, 'resolve')
// }, rej => {
//     console.log(rej, 'reject')
// })


// Promise.race(tasks).then(res => {
//     console.log(ress, 'resolve')
// }, rej => {
//     console.log(rej, 'reject')
// })

// 一个异步请求的示例
const fetchDemo = fetch("https://jsonplaceholder.typicode.com/todos/1")

// 总共需要请求的次数
const lens = 23;
// 每次最大的请求数量
const max = 5;

// 假设有这么多次的请求
const fetchDemoArr = new Array(lens).fill(fetchDemo);

function chunk(list, size) {
    const l = [];
    for (let i = 0; i < list.length; i++) {
        const index = Math.floor(i / size);
        l[index] ??= [];
        l[index].push(list[i]);
    }
    return l;
}

chunk(lens, max)