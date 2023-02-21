---
sidebar: auto
---

# 递归

## 阶乘factorial

求n!

```js
// 分析：n! = n * (n-1) * (n-2) * (n-3) * ... * 1
const factorial = n => {
  if (n === 1) {
    return 1
  }
  return factorial(n - 1) * n
}

// 测试
factorial(5)    // 120
```

## 累加求和

求 1、2、3、4、...n 的和

```js
const sum = n => {
  if (n === 1) {
    return 1
  }
  return sum(n - 1) + n
}

// 测试
sum(100)  // 5050
```

## 波菲那契数列Fibonacci sequence

前两项是 1， 从第三项开始，每一项都等于前两项之和：1,1,2,3,5,8,13,21,34,55,89...求第 n 项

```js
const fib = n => {
  if (n <= 2) {
    return 1
  }
  // 前两项和
  return fib(n - 1) + fib(n - 2)
}

// 测试
fib(7)    // 13
```

## 爬楼梯

假如楼梯有 n 个台阶，每次可以走 1 个或 2 个台阶，请问走完这 n 个台阶有几种走法

```js
const climbStairs = (n) => {
  if (n == 1) return 1
  if (n == 2) return 2
  return climbStairs(n - 1) + climbStairs(n - 2)
}
```

## 深拷贝

```js
function clone(o) {
  var temp = {}
  for (var key in o) {
    if (typeof o[key] == 'object') {
      temp[key] = clone(o[key])
    } else {
      temp[key] = o[key]
    }
  }
  return temp
}
```

## 递归组件

## 树形结构

### 将数组转化为树形结构

以下数据结构中

- id 代表部门编号，
- name 是部门名称，
- parentId 是父部门编号，为 0 代表一级部门

现在要求实现一个 `convert` 方法
把原始 `list` 转换成树形结构，`parentId` 为多少就挂载在该 `id` 的属性 `children` 数组下，结构如下：

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

期望转换后的结果如下：

```js
let result = [
    {
        id: 1,
        name: '部门A',
        parentId: 0,
        children: [
            { 
                id: 3, name: '部门C', 
                parentId: 1, 
                children: [{ id: 6, name: '部门F', parentId: 3, children: [] }] },
            { 
                id: 4, 
                name: '部门D', 
                parentId: 1, 
                children: [{ id: 8, name: '部门H', parentId: 4, children: [] }] 
            },
        ],
    },
    {
        id: 2,
        name: '部门B',
        parentId: 0,
        children: [
            { id: 5, name: '部门E', parentId: 2, children: [] },
            { id: 7, name: '部门G', parentId: 2, children: [] },
        ],
    },
]
```

实现：

```js
// 以下实现方式存在效率问题
function convert(list, pid = 0) {
    let tree = []
    list.forEach(item => {
        if (item.parentId === pid) {
            tree.push({
                ...item,
                children: convert(list, item.id)
            })
        }
    })
    return tree
}
```

使用map优化

```js
// 对象是引用类型，map中的对象改变，原数组中的对象也会改变
function convert(list) {
    let tree = []
    let map = new Map()
    list.forEach(item => {
        item.children = []
        map.set(item.id, item)
    })
    list.forEach(item => {
        let parent = map.get(item.parentId)
        if (parent) {
            parent.children.push(item)
        } else {
            tree.push(item)
        }
    })
    return tree
}
```

### 添加属性并设置层级关系

```js
// 树形结构添加checked
function addChecked(tree) {
    tree.forEach(item => {
        item.checked = false
        if (item.children) {
            addChecked(item.children)
        }
    })
}
// 设置层级
function setLevel(list, level = 0) {
    list.forEach(item => {
        item.level = level
        if (item.children) {
            setLevel(item.children, level + 1)
        }
    })
}
```

### 根据id查询节点信息

深度遍历，从顶点开始，当前节点有子节点则遍历当前节点的子节点（递归）

```js
function getTreeNodeById(tree, id) {
    let result = null
    const deepSearch = (tree, id) => {
        for (let i = 0; i < tree.length; i++) {
            let node = tree[i]
            if (node.id === id) {
                result = node
                break
            }
            if (node.children) {
                deepSearch(node.children, id)
            }
        }
    }
    deepSearch(tree, id)
    return result
}
```

广度遍历，遍历根节点的所有子节点，再从第一个子节点开始依次遍历

```js
```