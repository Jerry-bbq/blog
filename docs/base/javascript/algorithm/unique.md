---
sidebar: auto
---

# 数组去重

数组如下：

```js
const arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}]
```

## Set

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

## indexOf

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

## Map

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

## includes

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

## reduce+includes

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

## 作为对象处理

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

## 排序对比

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

## 双层for循环+splice

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

## hasOwnProperty

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

## filter

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