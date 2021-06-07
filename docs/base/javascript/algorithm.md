---
sidebar: auto
---

# 算法

## 将数组转化为树形结构

- 以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，
现在要求实现一个 convert 方法
把原始 list 转换成树形结构，parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：

```js
let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];
const result = convert(list, ...);
```

转换后的结果如下：

```js
let result = [
    {
      id: 1,
      name: '部门A',
      parentId: 0,
      children: [
        {
          id: 3,
          name: '部门C',
          parentId: 1,
          children: [
            {
              id: 6,
              name: '部门F',
              parentId: 3
            }, {
              id: 16,
              name: '部门L',
              parentId: 3
            }
          ]
        },
        {
          id: 4,
          name: '部门D',
          parentId: 1,
          children: [
            {
              id: 8,
              name: '部门H',
              parentId: 4
            }
          ]
        }
      ]
    },
  ···
];
```

实现：

```js
function convert(list, parentId = 0) {
  var itemArr = []
  for (var i = 0; i < list.length; i++) {
    var node = list[i]
    if (node.parentId === parentId) {
      var newNode = {
        ...node,
        name: node.name,
        id: node.id,
        children: convert(list, node.id),
      }
      itemArr.push(newNode)
    }
  }
  return itemArr
}
```

## 排序

### 选择排序

原理：

![selection](./images/selection.gif)

- 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
- 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
- 重复第二步，直到所有元素均排序完毕。

实现：

```js
const selectionSort = array => {
  const len = array.length
  let minIndex, temp
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[minIndex]) {
        // 寻找最小的数
        minIndex = j // 将最小数的索引保存
      }
    }
    temp = array[i]
    array[i] = array[minIndex]
    array[minIndex] = temp
    console.log('array: ', array)
  }
  return array
}
```

### 冒泡排序

![bubble](./images/bubble.gif)

原理：

- 冒泡排序只会操作相邻的两个数据
- 每次冒泡操作都会对相邻的两个元素进行比较，看是否满足大小关系要求。如果不满足就让它俩互换
- 一次冒泡会让至少一个元素移动到它应该在的位置，重复 n 次，就完成了 n 个数据的排序工作

特点：

- 优点：排序算法的基础，简单实用易于理解
- 缺点：比较次数多，效率较低

实现：

```js
const bubbleSort = arr => {
  const length = arr.length
  if (length <= 1) return
  // i < length - 1 是因为外层只需要 length-1 次就排好了，第 length 次比较是多余的。
  for (let i = 0; i < length - 1; i++) {
    let hasChange = false // 提前退出冒泡循环的标志位
    // j < length - i - 1 是因为内层的 length-i-1 到 length-1 的位置已经排好了，不需要再比较一次。
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        hasChange = true // 表示有数据交换
      }
    }
    // 如果 false 说明所有元素已经到位，没有数据交换，提前退出
    if (!hasChange) break
  }
}
```

### 快速排序

快速排序的特点就是快，而且效率高！它是处理大数据最快的排序算法之一。

原理：

![quick](./images/quick.gif)

- 先找到一个基准点（一般指数组的中部），然后数组被该基准点分为两部分，依次与该基准点数据比较，如果比它小，放左边；反之，放右边。
- 左右分别用一个空数组去存储比较后的数据。
- 最后递归执行上述操作，直到数组长度 <= 1;

特点：

- 特点：快速，常用
- 缺点：需要另外声明两个数组，浪费了内存空间资源

实现：

```js
const quickSort = arr => {
  if (arr.length <= 1) {
    return arr
  }
  //取基准点
  const midIndex = Math.floor(arr.length / 2)
  //取基准点的值，splice(index,1) 则返回的是含有被删除的元素的数组。
  const valArr = arr.splice(midIndex, 1)
  const midIndexVal = valArr[0]
  const left = [] //存放比基准点小的数组
  const right = [] //存放比基准点大的数组
  //遍历数组，进行判断分配
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < midIndexVal) {
      left.push(arr[i]) //比基准点小的放在左边数组
    } else {
      right.push(arr[i]) //比基准点大的放在右边数组
    }
  }
  //递归执行以上操作，对左右两个数组进行操作，直到数组长度为 <= 1
  return quickSort(left).concat(midIndexVal, quickSort(right))
}
```

### 插入排序

原理：

![insertion](./images/insertion.gif)

通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入

- 从第一个元素开始，该元素可以认为已经被排序；
- 取出下一个元素，在已经排序的元素序列中从后向前扫描；
- 如果该元素（已排序）大于新元素，将该元素移到下一位置；
- 重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置；
- 将新元素插入到该位置后；
- 重复步骤 2~5。

实现：

```js
const insertionSort = array => {
  const len = array.length
  if (len <= 1) return

  let preIndex, current
  for (let i = 1; i < len; i++) {
    preIndex = i - 1 //待比较元素的下标
    current = array[i] //当前元素
    while (preIndex >= 0 && array[preIndex] > current) {
      //前置条件之一: 待比较元素比当前元素大
      array[preIndex + 1] = array[preIndex] //将待比较元素后移一位
      preIndex-- //游标前移一位
    }
    if (preIndex + 1 != i) {
      //避免同一个元素赋值给自身
      array[preIndex + 1] = current //将当前元素插入预留空位
      console.log('array :', array)
    }
  }
  return array
}
```

### 希尔排序

![shell](./images/shell.gif)

原理：

- 先将整个待排序的记录序列分割成为若干子序列。
- 分别进行直接插入排序。
- 待整个序列中的记录基本有序时，再对全体记录进行依次直接插入排序。

实现：

```js
const shellSort = arr => {
  let len = arr.length,
    temp,
    gap = 1
  while (gap < len / 3) {
    //动态定义间隔序列
    gap = gap * 3 + 1
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; i++) {
      temp = arr[i]
      let j = i - gap
      for (; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
  return arr
}
```

## 堆栈、队列、链表

- 堆栈
- 队列
- 链表
    
## 递归

- 递归：https://segmentfault.com/a/1190000009857470

- 波兰式和逆波兰类

- 波兰式和逆波兰式

## 浅拷贝和深拷贝

1. 基本类型--名值存储在栈内存中
2. 引用数据类型--名存在栈内存中，值存在于堆内存中，但是栈内存会提供一个引用的地址指向堆内存中的值
3. 浅拷贝复制的数组对象在栈内存中的引用地址

### 浅拷贝

1. Oject.assign

```js
// 对象
const clone = obj => Object.assign({}, obj)
```

2. 扩展运算符...

```js
// 对象
const clone = obj => {...obj}
// 数组
```

### 深拷贝

1. JSON.parse + JSON.stringify

```js
// 对象或数组
const deepClone = obj => typeof obj ==='undefined' ? JSON.parse(JSON.stringify(obj)) : null;
```

::: warning 问题

1. 会忽略 `undefined`
2. 会忽略 `symbol`
3. 不能序列化函数
4. 不能解决循环引用的对象

:::

2. for...in + 递归

```js
const deepClone = obj => {
    var target = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (typeof obj[key] === "object") {
            target[key] = deepClone(obj[key]);
            } else {
            target[key] = obj[key];
            }
        }
    }
    return target;
};
```

3. Object.create

```js
const deepClone = obj => {
    var copy = Object.create(Object.getPrototypeOf(obj));
    var propNames = Object.getOwnPropertyNames(obj);

    propNames.forEach(name => {
    var desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
    });

    return copy;
};
```

## 数组去重

数组如下：

```js
const arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}]
```

### Set

```js
const unique = arr => [...new Set(arr)]
// 或者
const unique = arr => Array.from(new Set(arr))

// 测试
unique(arr)
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
```

::: warning 问题

{}无法去重

:::

### indexOf

```js
const unique = arr => {
    let res = []
    for (let i=0;i<arr.length;i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
        }
    }
    return res
}

// 测试
unique(arr)
// [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {}, {}]
```

::: warning 问题

1. NaN无法去重
2. {}无法去重

:::

### Map

```js
const unique = arr => {
    let res = []
    let map = new Map()
    for (let i=0;i<arr.length;i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], true)
            res.push(arr[i])
        }
    }
    return res
}
```

::: warning 问题

{} 无法去重

:::

### includes

```js
const unique = arr => {
    let res = []
    for (let i=0;i<arr.length;i++) {
        if (res.includes(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}

unique(arr)
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]
```

::: warning 问题

{}无法去重
:::

### reduce+includes

```js
const unique = arr => {
    return arr.reduce((prev, next)=> {
        return prev.includes(next) ? prev : [...prev,next]
    }, [])
}

unique(arr)
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
```

::: warning 问题

{}无法去重

:::

### 作为对象处理

将数组中的值设为对象属性，遇到重复的则删除当前重复的，并将下标减一

```js
const unique = arr => {
    let res = []
    let obj = {}
    for (let i=0;i<arr.length;i++) {
        if (obj[arr[i]]) {
            arr.splice(i,1);
            i--;
            continue;
        }
        obj[arr[i]] = arr[i]
        res.push(arr[i])
    }
    return res
}
```

::: warning 问题

{}无法去重

:::

### 排序对比

排序后对比相邻数，若相等，则删除其中一个

```js
const unique = arr => {
    let res = arr.sort((a,b) => a-b)
    for (let i=0;i<res.length;i++) {
        if (res[i] === res[i+1]) {
            res.splice(i+1,1)
        }
    }
    return res
}
```

::: warning 问题

1. NaN无法去重
2. {}无法去重

:::

### 双层for循环+splice

```js
const unique = (arr) => {
      for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
          if (arr[i] == arr[j]) {
            //第一个等同于第二个，splice方法删除第二个
            arr.splice(j, 1);
            j--;
          }
        }
      }
      return arr;
};
unique(arr)
// [1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {}, {}]
```

::: warning 问题

1. null会都去掉
2. NaN无法去重
3. 0都会去掉
4. {}无法去重

:::

### hasOwnProperty

```js
const unique = (arr) => {
    var obj = {};
    return arr.filter((item) =>
    obj.hasOwnProperty(typeof item + item)
        ? false
        : (obj[typeof item + item] = true)
    );
};
unique(arr)
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}]
```

::: tip 成功
全部去重

:::

### filter

```js
const unique = (arr) => {
    return arr.filter(function(item, index, arr) {
      //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
      return arr.indexOf(item, 0) === index;
    });
};
unique(arr)
// [1, "true", true, 15, false, undefined, null, "NaN", 0, "a", {}, {}]
```

::: warning 问题

1. NaN会全部删除掉
2. {}无法去重

:::

## 实现36进制转换

- number转string：numberObject.toString( [ radix ] )，可选/Number类型指定的基数([2, 36])，默认为10。
- string转number：parseInt( numString [, radix ] )，参数radix可以是一个介于 [2, 36] 之间的数值, 如果没有提供radix参数，则parseInt()函数将会根据参数numString的前缀来决定转换的进制基数

## 数组展评

### 二维数组展开

```js
// [1,2,[3,4]]
function flattenOnce(arr){
    return [].concat(...arr)
}
```

### 多维数组展开(递归)

```js
// [[1,2],3,[[[4],5]]]
function flatten(arr) {
    return [].concat(
        ...arr.map(x => Array.isArray(x) ? flatten(x) : x)
    )
}
```

## 函数柯里化

把接受多个参数的函数变为接受单一参数的函数，并且返回接收余下的参数 且 返回的结果的 新函数

使用场景：

- 参数复用
- 提前确认，避免每次都重复判断
- 延迟计算/运行

```js
const curry = func => {
    const g = (...allArgs) => allArgs.length >= func.length ? func(...allArgs)
    : (...args) => g(...allArgs, ...args)
    return g
}
```
