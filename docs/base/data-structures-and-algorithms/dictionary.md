---
sidebar: auto
---

# 字典和散列表

使用字典和散列表，存储唯一值（不重复的值）的数据结构。用`[键，值]对`的形式来存储数据

## 字典

在字典中，存储的是`[键，值]对`，其中键名是用来查询特定元素的。字典和集合很相似，集合以`[值，值]`的形式存储元素，字典则是以`[键，值]`的形式来存储元素。字典也称作**映射**、 **符号表**或**关联数组**。

### 创建字典类

```js
function defaultToString(item) {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}
class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
}
```

- 理想情况下，将字符串作为`键名`
- 将`[键，值]`对保存为`table[key] = {key, value}`

方法：

- set(key,value)：向字典中添加新元素。如果 key 已经存在，那么已存在的 value 会
被新的值覆盖。
- remove(key)：通过使用键值作为参数来从字典中移除键值对应的数据值。
- hasKey(key)：如果某个键值存在于该字典中，返回 true，否则返回 false。
- get(key)：通过以键值作为参数查找特定的数值并返回。
- clear()：删除该字典中的所有值。
- size()：返回字典所包含值的数量。与数组的 length 属性类似。
- isEmpty()：在 size 等于零的时候返回 true，否则返回 false。
- keys()：将字典所包含的所有键名以数组形式返回。
- values()：将字典所包含的所有数值以数组形式返回。
- keyValues()：将字典中所有[键，值]对返回。
- forEach(callbackFn)：迭代字典中所有的键值对。 callbackFn 有两个参数： key 和value。该方法可以在回调函数返回 false 时被中止（和 Array 类中的 every 方法相似）。

### 检测一个键是否存在于字典中

```js
hasKey(key) {
  return this.table[this.toStrFn(key)] != null
}
```

### 在字典和 ValuePair 类中设置键和值

```js
class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
  toString() {
    return `[#${this.key}: ${this.value}]`
  }
}
// 添加新的值，或是更新已有的值
set(key, value) {
  if (key != null && value != null) {
    const tableKey = this.toStrFn(key)
    this.table[tableKey] = new ValuePair(key, value)
    return true
  }
  return false
}
```

### 从字典中移除一个值

```js
remove(key) {
  if (this.hasKey(key)) {
    delete this.table[this.toStrFn(key)]
    return true
  }
  return false
}
```

### 从字典中检索一个值

查找一个特定的 key，并检索它的 value

```js
get(key) {
  const valuePair = this.table[this.toStrFn(key)]
  return valuePair == null ? undefined : valuePair.value
}
```

### keys、 values 和 valuePairs 方法

```js
// 数组形式返回字典中的所有 valuePair 对象
keyValues() {
  return Object.values(this.table)
}
// 或者
keyValues2() {
  const valuePairs = []
  for (const k in this.table) {
    if (this.hasKey(k)) {
      valuePairs.push(this.table[k])
    }
  }
  return valuePairs
}

// 用于识别值的所有（原始）键名
keys() {
  return this.keyValues().map(valuePair => valuePair.key)
}
// 或者
keys2() {
  const keys = []
  const valuePairs = this.keyValues()
  for (let i = 0; i < valuePairs.length; i++) {
    keys.push(valuePairs[i].key)
  }
  return keys
}

values() {
  return this.keyValues().map(valuePair => valuePair.value)
}
```

### 用 forEach 迭代字典中的每个键值对

```js
forEach(callbackFn) {
  const valuePairs = this.keyValues()
  for (let i = 0; i < valuePairs.length; i++) {
    const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
    if (result === false) {
      break
    }
  }
}
```

### clear、 size、 isEmpty 和 toString 方法

```js
size() {
  return Object.keys(this.table).length
}
isEmpty() {
  return this.size() === 0
}
clear() {
  this.table = {}
}
toString() {
  if (this.isEmpty()) {
    return ''
  }
  const valuePairs = this.keyValues()
  let objString = `${valuePairs[0].toString()}`
  for (let i = 1; i < valuePairs.length; i++) {
    objString = `${objString},${valuePairs[i].toString()}`
  }
  return objString
}
```

### 使用

```js
function defaultToString(item) {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}
class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
  toString() {
    return `[#${this.key}: ${this.value}]`
  }
}
class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null
  }
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key)
      this.table[tableKey] = new ValuePair(key, value)
      return true
    }
    return false
  }
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      return true
    }
    return false
  }
  get(key) {
    const valuePair = this.table[this.toStrFn(key)]
    return valuePair == null ? undefined : valuePair.value
  }
  keyValues() {
    return Object.values(this.table)
  }
  keyValues2() {
    const valuePairs = []
    for (const k in this.table) {
      if (this.hasKey(k)) {
        valuePairs.push(this.table[k])
      }
    }
    return valuePairs
  }
  keys() {
    return this.keyValues().map(valuePair => valuePair.key)
  }
  keys2() {
    const keys = []
    const valuePairs = this.keyValues()
    for (let i = 0; i < valuePairs.length; i++) {
      keys.push(valuePairs[i].key)
    }
    return keys
  }
  values() {
    return this.keyValues().map(valuePair => valuePair.value)
  }
  forEach(callbackFn) {
    const valuePairs = this.keyValues()
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
      if (result === false) {
        break
      }
    }
  }
  size() {
    return Object.keys(this.table).length
  }
  isEmpty() {
    return this.size() === 0
  }
  clear() {
    this.table = {}
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const valuePairs = this.keyValues()
    let objString = `${valuePairs[0].toString()}`
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`
    }
    return objString
  }
}
```

测试

```js
const dictionary = new Dictionary()
dictionary.set('Gandalf', 'gandalf@email.com')
dictionary.set('John', 'johnsnow@email.com')
dictionary.set('Tyrion', 'tyrion@email.com')

console.log(dictionary.hasKey('Gandalf'))  // true
console.log(dictionary.size())             // 3
console.log(dictionary.keys())             // ["Gandalf", "John", "Tyrion"]
console.log(dictionary.values())           // ["gandalf@email.com", "johnsnow@email.com", "tyrion@email.com"]
console.log(dictionary.get('Tyrion'))      // tyrion@email.com

dictionary.remove('John')
console.log(dictionary.keys())
console.log(dictionary.values())
console.log(dictionary.keyValues())

dictionary.forEach((k, v) => {
  console.log('forEach: ', `key: ${k}, value: ${v}`)
})
```

## 散列表

`HashTable` 类，也叫 `HashMap` 类，它是 Dictionary 类的一种散列表实现方式

- 散列算法的作用是尽可能快地在数据结构中找到一个值
- 如果要在数据结构中获得一个值（使用 get 方法），需要迭代整个数据结构来找到它。如果使用散列函数，就知道值的具体位置，因此能够快速检索到该值
- 列函数的作用是给定一个键值，然后返回值在表中的地址

### 创建散列表

```js
function defaultToString(item) {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}

class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
  toString() {
    return `[#${this.key}: ${this.value}]`
  }
}

class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
}
```

方法：

- put(key,value)：向散列表增加一个新的项（也能更新散列表）。
- remove(key)：根据键值从散列表中移除值。
- get(key)：返回根据键值检索到的特定的值

### 创建散列函数

```js
loseloseHashCode(key) {
  if (typeof key === 'number') {
    return key
  }
  const tableKey = this.toStrFn(key)
  let hash = 0
  for (let i = 0; i < tableKey.length; i++) {
    hash += tableKey.charCodeAt(i)
  }
  return hash % 37
}
hashCode(key) {
  return this.loseloseHashCode(key)
}
```

### 将键和值加入散列表

```js
put(key, value) {
  if (key != null && value != null) {
    const position = this.hashCode(key)
    this.table[position] = new ValuePair(key, value)
    return true
  }
  return false
}
```

### 从散列表中获取一个值

```js
get(key) {
  const valuePair = this.table[this.hashCode(key)]
  return valuePair == null ? undefined : valuePair.value
}
```

### 从散列表中移除一个值

```js
remove(key) {
  const hash = this.hashCode(key)
  const valuePair = this.table[hash]
  if (valuePair != null) {
    delete this.table[hash]
    return true
  }
  return false
}
```

### 使用

```js
function defaultToString(item) {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}
class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
  toString() {
    return `[#${this.key}: ${this.value}]`
  }
}
class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key
    }
    const tableKey = this.toStrFn(key)
    let hash = 0
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }
    return hash % 37
  }
  hashCode(key) {
    return this.loseloseHashCode(key)
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      this.table[position] = new ValuePair(key, value)
      return true
    }
    return false
  }
  get(key) {
    const valuePair = this.table[this.hashCode(key)]
    return valuePair == null ? undefined : valuePair.value
  }
  remove(key) {
    const hash = this.hashCode(key)
    const valuePair = this.table[hash]
    if (valuePair != null) {
      delete this.table[hash]
      return true
    }
    return false
  }
}
```

测试

```js
const hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
console.log(hash.hashCode('Gandalf') + ' - Gandalf');   // 19 - Gandalf
console.log(hash.hashCode('John') + ' - John');         // 29 - John
console.log(hash.hashCode('Tyrion') + ' - Tyrion');     // 16 - Tyrion

console.log(hash.get('Gandalf'));                       // gandalf@email.com
console.log(hash.get('Loiane'));                        // undefined
hash.remove('Gandalf');
console.log(hash.get('Gandalf'));
```

## 原生Map类

```js
const map = new Map();
map.set('Gandalf', 'gandalf@email.com');
map.set('John', 'johnsnow@email.com');
map.set('Tyrion', 'tyrion@email.com');
console.log(map.has('Gandalf')); // true
console.log(map.size); // 3
console.log(map.keys()); // 输出{"Gandalf", "John", "Tyrion"}
console.log(map.values()); // 输出{"gandalf@email.com", "johnsnow@email.com","tyrion@email.com"}
console.log(map.get('Tyrion')); // tyrion@email.com
map.delete('John')
```

- Map 类的 values 方法和 keys 方法都返回Iterator，而不是值或键构成的数组。
- 另一个区别是，我们实现的 size 方法返回字典中存储的值的个数，而 ES2015 的 Map 类则有一个 size 属性
- delete 方法
- clear 方法

## WeakMap 类和 WeakSet 类

除了 Set 和 Map 这两种新的数据结构， ES2015还增加了它们的弱化版本， WeakSet 和 WeakMap。
基本上， Map 和 Set 与其弱化版本之间仅有的区别是：

- WeakSet 或 WeakMap 类没有 entries、 keys 和 values 等方法；
- 只能用对象作为键。
