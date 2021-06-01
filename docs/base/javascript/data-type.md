---
sidebar: auto
---

# 数据类型

JavaScript数据类型大体上有两种(细分有8种)

- 原始类型
- 引用类型

## 类型

类型 | 数据类型 | 存储
---|---|---
原始类型（又叫基本类型） | `string`、`number`、`boolean`、`null`、`undefined`、`bigint`、`symbol` (7种)| 栈(stack)
引用类型 | `object`，其中包含具体的引用类型`Array`、`Function`、`Date`、`RegExp`等 | 堆(heap)

## 存储

![数据类型存储图解](./images/buit-in-types.jpg)

::: tip

- 可以看出，数据类型指的是**变量值**的类型，不是变量的类型
- 对于JS这种"弱类型"语言来说， 无法给变量限定类型，因为变量的类型是可变的

:::

## 检测

### 第一种：typeof

```js
typeof 'hello world'    // 'string'
typeof true             // 'boolean'
typeof 10               // 'number'
typeof undefined         // 'undefined'
typeof Symbol()         // 'symbol'
typeof 123n       // 'bigint'
typeof null             // 'object' 无法判定是否为 null

typeof {}               // 'object'
typeof []               // 'object'
typeof (()=>{})         // 'function'
```

可以看出，使用`typeof`无法判断出所有的数据类型，还可以使用`instanceof`来判断：

### 第二种：instanceof

```js
[] instanceof Array             // true
({}) instanceof Object          // true
(()=>{}) instanceof Function    // true

// 但是
[] instanceof Object            // true
(()=>{}) instanceof Object      // true
```

可以看出，`instanceof`有的时候也无法精准的判断数据类型,因此可以使用`Object.prototype.toString()`来判断

### 第三种：Object.prototype.toString()

```js
Object.prototype.toString.call("hello world") === "[object String]"
Object.prototype.toString.call(10) === "[object Number]"
Object.prototype.toString.call(true) === "[object Boolean]"
Object.prototype.toString.call(undefined) === "[object Undefined]"
Object.prototype.toString.call(null) === "[object Null]"
Object.prototype.toString.call(Symbol()) === "[object Symbol]"
Object.prototype.toString.call(123n) === "[object BigInt]"

Object.prototype.toString.call({}) === "[object Object]"
Object.prototype.toString.call([]) === "[object Array]"
Object.prototype.toString.call(()=>{})  === "[object Function]"

Object.prototype.toString.call(new Date) === "[object Date]"
Object.prototype.toString.call(/\d/) === "[object RegExp]"

// 构造函数
function Person(){}
Object.prototype.toString.call(new Person) === "[object Object]"
```

### 终极解决方案

```js
const dataType =  data => typeof data !== 'object' ? typeof data : Object.prototype.toString.call(data).slice(8,-1).toLowerCase()
```

测试：

```js
dataType("hello world")       // "string"
dataType(10)                  // "number"
dataType(true)                // "boolean"
dataType(undefined)            // "undefined"
dataType(null)                // "null"
dataType(123n)                // "bigint"
dataType({})                  // "object"
dataType([])                  // "array"
dataType(()=>{})              // "function"
dataType(new Date)            // "date"
dataType(/\d/)                // "regexp"
```
