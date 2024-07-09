# 算法题

## 两数之和

::: tip 题目
// 题目描述：

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回它们的数组下标。
:::

```js
// 方法一：双循环暴力枚举，类似冒泡排序的思想，很容易想到，不建议

// 方法二：hash 表存值，一个for循环搞定
var twoSum = function (nums, target) {
	if (!nums) return []
	// 创建 Map 对象
	const m = new Map()
	for (let i = 0; i < nums.length; i++) {
		let key = nums[i] // 遍历数组项
		let val = target - nums[i] // 计算数组项匹配的值
		// 如果 Map 对象里有匹配的值，返回对应的“两个”下标
		if (m.has(val)) return [m.get(val), i]
		m.set(key, i) // 否则存入该值
	}
}
```

## 返回字符串中出现次数最多的元素

::: tip 题目
// 输入输出

"aaabbbb" => ["b", 4]
:::

```js
function getMaxLengthChar( str ) {
	let map = new Map(), max = 0, index = ''
    for (let i = 0; i < str.length; i++) {
    	if (!map.has(str[i])) {
      		map.set(str[i], 1)
    	} else {
      		map.set(str[i], map.get(str[i]) + 1)
    	}
  	}
  	for (let j = 0; j < str.length; j++) {
    	if (map.get(str[j]) > max) {
      		index = str[j]
      		max = map.get(str[j])
    	}
  	}
  	return [index, max]
}
```

## 版本号排序

::: tip 题目
// 输入输出

["1.45.1", "1.5.0"] => ["1.5.0", "1.45.1"]

["9.99.9", "10.1.0", "0.0.1"] => ["0.0.1", "9.99.9", "10.1.0"]
:::

```js
function sortVersions( versions ) {
    return versions.sort((a, b) => {
        let v1 = a.split("."), v2 = b.split("."), k = 0
        for (let i in v1) {
            let a1 = v1[i], a2 = v2[i]
            if (typeof a2 === undefined) {	
                k = 1
                break
            } else {
                if (a1 === a2) {
                    continue
                }
                k = Number(a1) - Number(a2)
                break
            }
        }
        return k
    })
}
```

## 字符串内部排序

::: tip 题目
// 题目描述：

字符串排序，str = "aa a bee dd ee" => str = "a aa bee ee dd"
:::

```js
return str.split(" ").sort().join(" ")
```

## 搜索字符串里只出现一次的数字

## 搜索树里的叶子结点个数

## 搜索数组里只出现一次的数字

## 快速排序

## 列表转成树

::: tip 题目
输入一组列表如下，转化成树形结构
:::

```js
[
  { id: 1, title: "child1", parentId: 0 },
  { id: 2, title: "child2", parentId: 0 },
  { id: 3, title: "child1_1", parentId: 1 },
  { id: 4, title: "child1_2", parentId: 1 },
  { id: 5, title: "child2_1", parentId: 2 }
]

tree=[
  {
    "id": 1,
    "title": "child1",
    "parentId": 0,
    "children": [
      {
        "id": 3,
        "title": "child1_1",
        "parentId": 1
      },
      {
        "id": 4,
        "title": "child1_2",
        "parentId": 1
      }
    ]
  },
  {
    "id": 2,
    "title": "child2",
    "parentId": 0,
    "children": [
      {
        "id": 5,
        "title": "child2_1",
        "parentId": 2
      }
    ]
  }
]
```

```js
function listToTree(data) {
  // 使用对象重新存储数据, 空间换时间
  let map = {};
  // treeData存储最后结果
  let treeData = [];
  // 遍历原始数据data，存到map中，id为key，值为数据
  for (let i = 0; i < data.length; i++) {
    map[data[i].id] = data[i];
  }
  // 遍历对象
  for (let i in map) {
    // 根据 parentId 找到的是父节点
    if (map[i].parentId) {
      if (!map[map[i].parentId].children) {
        map[map[i].parentId].children = [];
      }
      // 将子节点放到父节点的 children中
      map[map[i].parentId].children.push(map[i]);
    } else {
      // parentId 找不到对应值，说明是根结点，直接插到根数组中
      treeData.push(map[i]);
    }
  }
  return treeData;
}
```

## 深度优先遍历

::: tip 题目
对树进行遍历，从第一个节点开始，遍历其子节点，直到它的所有子节点都被遍历完毕，然后再遍历它的兄弟节点。

上文第11题生成的tree，输出[1, 3, 4, 2, 5]
:::

```js
// 递归版本
function deepTree(tree, arr = []) {
  if (!tree || !tree.length) return arr;
  tree.forEach(data => {
    arr.push(data.id);
    // 遍历子树
    data.children && deepTree(data.children, arr);
  });
  return arr;
}

// 非递归版本
function deepTree(tree) {
  if (!tree || !tree.length) return;
  let arr = [];
  let stack = [];
  //先将第一层节点放入栈
  for (let i = 0, len = tree.length; i < len; i++) {
    stack.push(tree[i]);
  }
  let node;
  while (stack.length) {
    // 获取当前第一个节点
    node = stack.shift();
    arr.push(node.id);
    //如果该节点有子节点，继续添加进入栈顶
    if (node.children && node.children.length) {
      stack = node.children.concat(stack);
    }
  }
  return arr;
}
```

## 广度优先遍历

::: tip 题目
以横向的维度对树进行遍历，从第一个节点开始，依次遍历其所有的兄弟节点，再遍历第一个节点的子节点，一层层向下遍历

上文第11题生成的tree，输出 [1, 2, 3, 4, 5]
:::

```js
function rangeTree(tree) {
  var list = []; // 创建一个空数组来存储列表
  var queue = tree; // 创建一个队列，并将根节点添加到队列中

  while (queue.length > 0) { // 当队列不为空时循环执行
    var node = queue.shift(); // 从队列中取出一个节点并移除它
    list.push(node); // 将节点添加到列表中

    if (node.children && node.children.length > 0) { // 如果节点有子节点
      for (var i = 0; i < node.children.length; i++) {
        queue.push(node.children[i]); // 将子节点加入队列的末尾
      }
    }
  }

  return list; // 返回生成的列表
}
```

## 树形结构查找节点

::: tip 题目
查找树形结构中符合要求的节点
输入：tree： 上文第11题生成的tree；func： `data => data.title === "child2_1"`
输出：`{ id: 5, parentId: 2, title: "child2_1" }`
:::

```js
/**
* 查找节点
* @param {array} tree - 树
* @param {function} func - 查找条件
* */
function findTreeNode(tree, func) {
  if (!tree.length) return null;
  for (let i = 0; i < tree.length; i++) {
    // 条件成立 直接返回
    if (func(tree[i])) return tree[i];
    if (tree[i].children) {
      const res = findTreeNode(tree[i].children, func);
      // 结果存在再返回
      if (res) {
        return res;
      }
    }
  }
  return null;
}

// 测试
findTreeNode(tree, data => data.title === "child2_1")
```

## 二叉树

::: tip 题目

判断一个数组，是否为某二叉查找树的前序遍历结果，二叉查找树特点是所有的左节点比父节点的值小，所有的右节点比父节点的值大

[5, 3, 2, 1, 4, 6, 7, 8, 9] => true
:::

```js
function preOrderOfBST(list) {
  if (list && list.length > 0) {
    // 前序遍历，第一个值为根节点
    var root = list[0];
    // 找到数组中，第一个比根节点大的节点，即为右子树的节点
    for (var i = 0; i < list.length; i++) {
      if (list[i] > root) {
        break;
      }
    }
    // 遍历右子树的节点，要求所有右子树的节点都比根节点大
    for (let j = i; j < list.length; j++) {
      if (list[j] < root) {
        return false;
      }
    }
    var left = true;
    // 同理，递归判断左子树是否符合二叉查找树的规则
    if (i > 1) {
      left = preOrderOfBST(list.slice(1, i + 1));
    }
    var right = true;
    // 递归判断右子树是否符合二叉查找树的规则
    if (i < list.length) {
      right = preOrderOfBST(list.slice(i, list.length));
    }
    // 左、右子树都符合要求，则是一个二叉查找树
    return left && right;
  }
}
```