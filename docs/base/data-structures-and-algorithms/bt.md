---
sidebar: auto
---

# 自平衡树

BST 存在一个问题：取决于你添加的节点数，树的一条边可能会非常深；也就是说，树的一条分支会有很多层，而其他的分支却只有几层。这会在需要在某条边上添加、移除和搜索某个节点时引起一些性能问题。为了解决这个问题，有一种树叫作 Adelson-Velskii-Landi 树（ AVL 树）。 AVL 树是一种自平衡二叉搜索树，意思是**任何一个节点左右两侧子树的高度之差最多为 1**

## AVL树

AVL树是一种自平衡树。添加或移除节点时， AVL树会尝试保持自平衡。任意一个节点（不论深度）的左子树和右子树高度最多相差 1。添加或移除节点时， AVL树会尽可能尝试转换为完全树

### 创建AVL类

```js
class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = compareFn
    this.root = null
  }
}
```

在 `AVL` 树中插入或移除节点和 `BST` 完全相同。然而， AVL 树的不同之处在于我们需要检验它的**平衡因子**，如果有需要，会将其逻辑应用于树的自平衡

### 节点的高度

### 平衡因子

在 AVL 树中，需要对每个节点计算右子树高度（hr）和左子树高度（hl）之间的差值，该值（ hr－ hl）应为 0、 1 或-1。如果结果不是这三个值之一，则需要平衡该 AVL 树。这就是平衡因子的概念



## 红黑树

和 AVL 树一样， 红黑树也是一个自平衡二叉搜索树。我们学习了对 AVL 书插入和移除节点可能会造成旋转，所以我们需要一个包含多次插入和删除的自平衡树，红黑树是比较好的。如果插入和删除频率较低（我们更需要多次进行搜索操作），那么 AVL 树比红黑树更好。

在红黑树中，每个节点都遵循以下规则：

- 顾名思义，每个节点不是红的就是黑的；
- 树的根节点是黑的；
- 所有叶节点都是黑的（用 NULL 引用表示的节点）；
- 如果一个节点是红的，那么它的两个子节点都是黑的；
- 不能有两个相邻的红节点，一个红节点不能有红的父节点或子节点；
- 从给定的节点到它的后代节点（ NULL 叶节点）的所有路径包含相同数量的黑色节点。

```js
class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = compareFn
    this.root = null
  }
}
```