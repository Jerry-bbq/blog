# 数组

- 数据呈线性排列的一种数据结构
- 在数组中，访问数据十分简单，而添加和删除数据比较耗工夫

```js
let arr = []
arr.push(1)
arr.push(2)
arr.push(3)
arr.pop(1)
arr.unshift(0)
arr.shift(0)
```

## 方法

数组的一些核心方法：

| 方法 | 描述 |
|---|---|
| concat | 连接 2 个或更多数组，并返回结果 |
| every | 对数组中的每个元素运行给定函数，如果该函数对每个元素都返回 true，则返回 true |
| filter | 对数组中的每个元素运行给定函数，返回该函数会返回 true 的元素组成的数组 |
| forEach | 对数组中的每个元素运行给定函数。这个方法没有返回值 |
| join | 将所有的数组元素连接成一个字符串 |
| indexOf | 返回第一个与给定参数相等的数组元素的索引，没有找到则返回-1 |
| map | 对数组中的每个元素运行给定函数，返回每次函数调用的结果组成的数组 |
| reverse | 颠倒数组中元素的顺序，原先第一个元素现在变成最后一个，同样原先的最后一个元素变成了现在的第一个 |
| slice | 传入索引值，将数组里对应索引范围内的元素作为新数组返回 |
| splice |  |
| some | 对数组中的每个元素运行给定函数，如果任一元素返回 true，则返回 true |
| sort | 按照字母顺序对数组排序，支持传入指定排序方法的函数作为参数 |
| toString | 将数组作为字符串返回 |

### concat

- 不改变原数组
- 返回一个新数组

```js
var arr = [1, 2, 3, 4, 5, 6]
var newArr = arr.concat([7,8])
console.log(newArr) // [1, 2, 3, 4, 5, 6, 7, 8]
```

### every

- 试一个数组内的所有元素是否都能通过某个指定函数的测试
- 不改变原数组
- 返回一个布尔值

```js
var arr = [1, 2, 3, 4, 5, 6]
var isBelowThreshold = val =>  val > 3;
console.log(arr.every(isBelowThreshold)) // false
```

### some

- 测试数组中是不是至少有 1 个元素通过了被提供的函数测试
- 不改变原数组
- 返回一个布尔值

```js
var arr = [1, 2, 3, 4, 5, 6]
var even = (item) => item % 2 === 0
console.log(arr.some(even)) // true
```

### filter

- 不改变原数组
- 返回一个通过所提供函数实现的测试的所有元素的新数组

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6)
console.log(result); // ["exuberant", "destruction", "present"]
```

### forEach

- 对数组的每个元素执行一次给定的函数
- 没有返回值

```js
var arr = [1, 2, 3, 4, 5, 6]
arr.forEach(item => {
    item += 1
})
console.log(arr) //  [1, 2, 3, 4, 5, 6]
```

### join

-  方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串
-  不改变原数组
-  返回字符串

```js
var arr = [1, 2, 3, 4, 5, 6]
var joinResult = arr.join()
console.log(joinResult) // 1,2,3,4,5,6

var joinResult = arr.join('')
console.log(joinResult) // 123456

var joinResult = arr.join('-')
console.log(joinResult) // 1-2-3-4-5-6

// 如果数组只有一个项目，那么将返回该项目而不使用分隔符
var arr = [1]
var joinResult = arr.join('-')
console.log(joinResult) // 1
```

### indexOf

- 返回在数组中可以找到一个给定元素的第一个索引
- 不改变原数组
- 返回数组下标，不存在则返回-1

```js
var arr = [1, 2, 3, 4, 5, 6]
var res = arr.indexOf(2)
console.log(res) // 1

var res = arr.indexOf(8)
console.log(res) // -1
```

### map

- 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成
- 不改变原数组

```js
var arr = [1, 2, 3, 4, 5, 6]
var res = arr.map(item => item  * 2)
console.log(res) // [2, 4, 6, 8, 10, 12]

var arr = [1, 2, 3, 4, 5, 6]
var res = arr.map(item => item > 3)
console.log(res) // [false, false, false, true, true, true]
```

### reverse

- 将数组中元素的位置颠倒，并返回该数组
- 改变原数组

```js
var arr = [1, 2, 3, 4, 5, 6]
arr.reverse()
console.log(arr) // [6, 5, 4, 3, 2, 1]
``` 

### slice

- 不改变原数组
- 数组的浅拷贝

```js
// arr.slice([begin[, end]])
var arr = [1, 2, 3, 4, 5, 6]

// 从数组下标开始且包含该下标
var res = arr.slice(2)
console.log(res) // [3, 4, 5, 6]

var res = arr.slice(0, 2)
console.log(res) // [1, 2]

// 从数组下标开始且包含该下标，不包含end
let res = arr.slice(1, 3)
console.log(res) // [2, 3]

// 负数表示倒数
let res = arr.slice(1, -1)
console.log(res) // [2, 3, 4, 5]
``` 

### splice

- 改变原数组
- 返回被修改的内容

```js
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
var arr = [1, 2, 3, 4, 5, 6]
// 从数组下标0开始（包含0），删除两个元素
var res = arr.splice(0, 2)
console.log(arr) // [3, 4, 5, 6]
console.log(res) // [1, 2]

var arr = [1, 2, 3, 4, 5, 6]
// 从数组下标1开始（包含1），删除两个元素
var res = arr.splice(1, 2)
console.log(arr)  // [1, 4, 5, 6]
console.log(res) // [2, 3]

var arr = [1, 2, 3, 4, 5, 6]
// 从数组下标3开始（包含3），删除后面所有的元素
var res = arr.splice(3)
console.log(arr)  // [1, 2, 3]
console.log(res)  // [4, 5, 6]

var arr = [1, 2, 3, 4, 5, 6]
// 从数组下标3开始（包含3），删除0个元素，并添加元素7
var res = arr.splice(3, 0, 7)
console.log(arr)  //  [1, 2, 3, 7, 4, 5, 6]
console.log(res)  //  []
```

### toString

```js
var arr = [1, 2, 3, 4, 5, 6]
var res = arr.toString()
console.log(res) // 1,2,3,4,5,6
```

### reduce

- 对数组中的每个元素按序执行一个由您提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值
- 不改变原数组

```js
var arr = [1, 2, 3, 4, 5, 6]
var res = arr.reduce((prev, next) => prev + next, 0)
console.log(res) // 21
```


ES2015 和 ES2016 新增的数组方法：

| 方法 | 描述 |
|---|---|
| @@iterator | 返回一个包含数组键值对的迭代器对象，可以通过同步调用得到数组元素的键值对 |
| copyWithin | 复制数组中一系列元素到同一数组指定的起始位置 |
| entries | 返回包含数组所有键值对的@@iterator |
| includes | 如果数组中存在某个元素则返回 true，否则返回 false。 E2016 新增 |
| find | 根据回调函数给定的条件从数组中查找元素，如果找到则返回该元素 |
| findIndex | 根据回调函数给定的条件从数组中查找元素，如果找到则返回该元素在数组中的索引 |
| fill | 用静态值填充数组 |
| from | 根据已有数组创建一个新数组 |
| keys | 返回包含数组所有索引的@@iterator |
| of | 根据传入的参数创建一个新数组 |
| values | 返回包含数组中所有值的@@iterator |