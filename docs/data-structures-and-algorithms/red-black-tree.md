
# 红黑树

红黑树也是一个自平衡二叉搜索树。AVL树插入和移除节点可能会造成旋转，所以我们需要一个包含多次插入和删除的自平衡树，红黑树是比较好的。

如果插入和删除频率较低（我们更需要多次进行搜索操作），那么 AVL 树比红黑树更好。

在红黑树中，每个节点都遵循以下规则：

- 每个节点不是红的就是黑的；
- 树的根节点是黑的；
- 所有叶节点都是黑的（用 NULL 引用表示的节点）；
- 如果一个节点是红的，那么它的两个子节点都是黑的；
- 不能有两个相邻的红节点，一个红节点不能有红的父节点或子节点；
- 从给定的节点到它的后代节点（ NULL 叶节点）的所有路径包含相同数量的黑色节点。

## 创建RedBlackTree类

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
}
function defaultCompare(a, b) {
  if (a === b) {
    return 0
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}
class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = compareFn
    this.root = null
  }
}
```

## 向红黑树中插入节点

