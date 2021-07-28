---
sidebar: auto
---

# 树形结构操作

## 平铺树

```js
export function treeToList(tree) {
  var queen = []
  var out = []
  queen = queen.concat(tree)
  while (queen.length) {
    var first = queen.shift()
    if (first.children) {
      queen = queen.concat(first.children)
      delete first['children']
    }

    out.push(first)
  }
  return out
}
```

## 设置层级

```js
export const arrayTreeSetLevel = (array, levelName = 'level', childrenName = 'children') => {
  if (!Array.isArray(array)) return []
  const recursive = (array, level = 0) => {
    level++
    return array.map(v => {
      v[levelName] = level
      const child = v[childrenName]
      if (child && child.length) recursive(child, level)
      return v
    })
  }
  return recursive(array)
}
```
