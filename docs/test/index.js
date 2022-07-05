let map = new Map()
map.set('name', 'John')
map.set('name', 'John1')


map.set('age', 10)
map.set('class', '一年级二班')

console.log(map)

console.log(map.size)
// map.delete('class')
console.log(map.get('class'))
console.log(map.keys())
console.log(map.values())
console.log(map.entries())

// 迭代

for (const key of map) {
    console.log(key)
}

for (const key of map.keys()) {
    console.log(key)
}

for (const key of map.values()) {
    console.log(key)
}

for (const key of map.entries()) {
    console.log(key)
}

map.forEach((value, key) => {
    console.log(value, key)
})

const kvArray = [["key1", "value1"], ["key2", "value2"]];
const myMap = new Map(kvArray);
console.log(myMap)
console.log(Array.from(myMap));
console.log([...myMap]);
console.log(Array.from(myMap.keys()));


console.log('-----------------------')

let set = new Set()
set.add(1)
set.add(2)
set.add(3)
set.add(3)
set.add('string')
set.add({ a: 1, b: 2 })

console.log(set)
console.log(set.has(6))
console.log(set.size)

console.log(set.keys())
console.log(set.values())
console.log(set.entries())

// 迭代
for (const key of set) {
    console.log(key)
}

for (const key of set.keys()) {
    console.log(key)
}

for (const key of set.values()) {
    console.log(key)
}
for (const key of set.entries()) {
    console.log(key)
}
set.forEach(value => {
    console.log(value)
})

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}