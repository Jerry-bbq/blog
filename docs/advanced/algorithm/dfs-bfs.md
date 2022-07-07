---
sidebar: auto
---

# 深度优先搜索和广度优先搜索

## 深度优先搜索

`深度优先搜索`（Depth-first search），从图中也可以看出来，是从根节点开始，沿树的深度进行搜索，尽可能深的搜索分支。当节点所在的边都已经搜多过，则回溯到上一个节点，再搜索其余的边。

深度优先搜索采用`栈结构`，`后进先出`。

![dfs](./images/dfs.gif)

## 广度优先搜索

`广度优先搜索`（Breadth-first search），从图中也可以看出来，是从根节点开始，沿树的宽度进行搜索，如果所有节点都被访问，则算法中止。

广度优先搜索采用`队列的形式`，`先进先出`。

![bfs](./images/bfs.gif)

## 应用

```js
var tree = {
  name: '中国',
  children: [
    {
      name: '北京',
      children: [
        {
          name: '朝阳群众',
          children: [
            {
              name: '西宁市',
              code: '0521',
            },
          ],
        },
        {
          name: '海淀区',
        },
        {
          name: '昌平区',
        },
      ],
    },
    {
      name: '浙江省',
      children: [
        {
          name: '杭州市',
          code: '0571',
        },
        {
          name: '嘉兴市',
        },
        {
          name: '绍兴市',
        },
        {
          name: '宁波市',
        },
      ],
    },
  ],
}
var node = dfs / bfs(tree, '西宁市')
console.log(node) // 输出： { name: '西宁市', code: '0521' }
```

### 递归

```js
// 递归
function search(tree, name) {
  if (tree.name === name) {
    return tree
  }
  if (!tree.name && !tree.children) {
    return null
  }
  for (let i = 0; i < tree.children.length; i++) {
    var result = search(tree.children[i], name)
    if (result) {
      return result
    }
  }
  return null
}
```

### 深度优先遍历

```js
// 栈
function dfs(tree, name) {
  let stack = []
  let result = {}
  stack.push(tree)
  while (stack.length != 0) {
    var item = stack.pop()
    if (item.name == name) {
      result = item
      break
    }
    let children = item.children
    if (children) {
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i])
      }
    }
  }
  return result
}
```

### 广度优先遍历

```js
// 队列
function bfs(tree, name) {
  let queue = []
  let result = {}
  queue.unshift(tree)
  while (queue.length != 0) {
    var item = queue.shift()
    if (item.name == name) {
      result = item
      break
    }
    var children = item.children
    if (children) {
      for (let i = 0; i < children.length; i++) {
        queue.push(children[i])
      }
    }
  }
  return result
}
```

### 总结

#### 深搜优缺点

- 能找出所有解决方案
- 优先搜索一棵子树，然后是另一棵，所以和广搜对比，有着内存需要相对较少的优点
- 要多次遍历，搜索所有可能路径，标识做了之后还要取消。
- 在深度很大的情况下效率不高

#### 广搜优缺点

- 对于解决最短或最少问题特别有效，而且寻找深度小
- 每个结点只访问一遍，结点总是以最短路径被访问，所以第二次路径确定不会比第一次短
- 内存耗费量大（需要开大量的数组单元用来存储状态）
