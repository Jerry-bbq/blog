
# 树形结构操作

## 平铺树

将树形结构平铺为数组，并删除`children`字段

```js
export function treeToList(tree, children = 'children') {
  let queen = []
  let out = []
  queen = queen.concat(tree)
  while (queen.length) {
    let first = queen.shift()
    if (first[children]) {
      queen = queen.concat(first[children])
      delete first[children]
    }
    out.push(first)
  }
  return out
}
```

## 将数组转化为树形结构

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

## 设置层级

递归遍历树形结构，设置层级`level`

```js
export const arrayTreeSetLevel = (tree, levelName = 'level', childrenName = 'children') => {
  if (!Array.isArray(tree)) return []
  const recursive = (tree, level = 0) => {
    level++
    return tree.map(v => {
      v[levelName] = level
      const child = v[childrenName]
      if (child && child.length) recursive(child, level)
      return v
    })
  }
  return recursive(tree)
}
```

## 参考

- [JS树结构操作:查找、遍历、筛选、树和列表相互转换](https://wintc.top/article/20)