let tree = [
    {
        id: 1,
        name: '部门A',
        parentId: 0,
        children: [
            {
                id: 3,
                name: '部门C',
                parentId: 1,
                children: [{ id: 6, name: '部门F', parentId: 3, children: [] }]
            },
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

// 根据id获取树形结构节点信息
function getTreeNodeById(tree, id) {
    var stark = []
    stark = stark.concat(tree)
    // console.log(stark)
    while (stark.length) {
        let temp = stark.shift()
        console.log(temp)
        if (temp.id === id) {
            return temp
        }
        if (temp.children) {
            stark = stark.concat(temp.children)
        }
    }
}

console.log(getTreeNodeById(tree, 1))
// console.log(getTreeNodeById(tree, 2))
// console.log(getTreeNodeById(tree, 4))
// console.log(getTreeNodeById(tree, 8))
// console.log(getTreeNodeById(tree, 5))