# es6

[w3c](https://www.w3cschool.cn/escript6/escript6-pm6z37es.html)

## let与const

`let`声明的变量只在它所在的`代码块`有效

```js
{
  let a = 10;
  var b = 1;
}
a // ReferenceError: a is not defined.
b // 1
```

## 解构赋值

## 字符串的扩展

## 字符串的新增方法



## Symbol

1. 什么是Symbol

- ES6 引入的一种新的原始数据类型Symbol，表示独一无二的值
- 通过`Symbol()`函数生成实例，不能使用new创建

```js
let sym = Symbol() // 创建Symbol实例，不可以使用new来创建

let sym1 = Symbol('a')
let sym2 = Symbol('b')

typeof sym // symbol
sym1 === sym2 // false
```

2. 它的使用场景是什么

- 作为对象的属性名

```js
let symObj = {
    name: '小王'
}

const Age = Symbol()
const ClassName = Symbol()
symObj[Age] = 12
symObj[ClassName] = '一年级'

symObj[Age] // 12
symObj[ClassName] // "一年级"
```

::: tip
1. 使用`for...in`, `Object.keys()`枚举对象时，是获取不到Symbol类型的key的
2. 使用`JSON.stringify()`将对象转换成JSON字符串也是会忽略Symbol属性的
3. 获取以Symbol方式定义的对象属性：`Object.getOwnPropertySymbols(obj)`或者`Reflect.ownKeys(obj)`
:::


- 代替常量

```js
const COURSE_TYPE = Symbol()
const SKU_TYPE = Symbol()
const LIVE_TYPE = Symbol()
```

- 定义私有属性/方法

a.js
```js
const PASSWORD = Symbol()

class Login {
  constructor(username, password) {
    this.username = username
    this[PASSWORD] = password
  }

  checkPassword(pwd) {
      return this[PASSWORD] === pwd
  }
}

export default Login
```
b.js
```js
import Login from './a'

const login = new Login('admin', '123456')

login.checkPassword('123456')  // true

login.PASSWORD  // oh!no!
login[PASSWORD] // oh!no!
login["PASSWORD"] // oh!no
```

- 注册和获取全局Symbol
```js
let gs1 = Symbol.for('global_symbol_1')  //注册一个全局Symbol
let gs2 = Symbol.for('global_symbol_1')  //获取全局Symbol

gs1 === gs2  // true
```

## Map和Weakmap的区别

### 1. Map

字符串作为key， 和JS对象类似
```js
var map = new Map()
// set
map.set('name', 'John')
map.set('age', 29)
// get
map.get('name') // John
map.get('age')  // 29
```

key可以是任意类型
```js
// 对象作为key演示
var xy = {x: 10, y: 20}   // 坐标
var wh = {w: 100, h: 200} // 宽高
var map = new Map()
// set
map.set(xy, '坐标')
map.set(wh, '宽高')
// get
map.get(xy) // '坐标'
map.get(wh) // '宽高'
```

传数组方式

```js
var map = new Map([["name", "John"], ["age", "29"]])
 
// 遍历key
for (var key of map.keys()) {
    console.log(key) // name, age
}
```

迭代器 for...of

```js
var map = new Map()
// set
map.set('name', 'John')
map.set('age', 29)
// get
map.get('name') // 'John'
map.get('age')  // 29

// 遍历key
for (var key of map.keys()) {
    console.log(key)
}
 
// 遍历value
for (var val of map.values()) {
    console.log(val)
}
 
// 遍历实体
for (var arr of map.entries()) {
    console.log('key: ' + arr[0] + ', value: ' + arr[1])
}
 
// 遍历实体的简写
for (var [key, val] of map.entries()) {
    console.log('key: ' + key + ', value: ' + val)
}
```

方法和属性：
- clear
- delete
- entries
- forEach
- get
- set
- has
- keys
- size
- values

### 2. WeakMap

与Map的区别

- 不接受基本类型的值作为键名
- 没有keys、values、entries和size

属性和方法：

- clear
- delete
- get
- set
- has

## Set和Map的区别

Set 是一种叫做集合的数据结构，Map 是一种叫做字典的数据结构。

集合 与 字典 的区别：

- 共同点：集合、字典 可以储存不重复的值
- 不同点：集合 是以 [value, value]的形式储存元素，字典 是以 [key, value] 的形式储存

ES6 新增的一种新的数据结构，类似于数组，成员唯一（内部元素没有重复的值）。且使用键对数据排序即顺序存储（经评论区大佬提醒）。

Set 本身是一种构造函数，用来生成 Set 数据结构。

Set 对象允许你储存任何类型的唯一值，无论是原始值或者是对象引用。

操作方法：

- add(value)：新增，相当于 array里的push。
- delete(value)：存在即删除集合中value。
- has(value)：判断集合中是否存在 value。
- clear()：清空集合。

便利方法：遍历方法（遍历顺序为插入顺序）

- keys()：返回一个包含集合中所有键的迭代器。
- values()：返回一个包含集合中所有值得迭代器。
- entries()：返回一个包含Set对象中所有元素得键值对迭代器。
- forEach(callbackFn, thisArg)：用于对集合成员执行callbackFn操作，如果提供了 thisArg 参数，回调中的this会是这个参数，没有返回值。

## WeakSet与Set的区别

WeakSet 对象允许你将弱引用对象储存在一个集合中。

WeakSet 与 Set 的区别：

- WeakSet 只能储存对象引用，不能存放值，而 Set 对象都可以。
- WeakSet 对象中储存的对象值都是被弱引用的，即垃圾回收机制不考虑 WeakSet 对该对象的应用，如果没有其他的变量或属性引用这个对象值，则这个对象将会被垃圾回收掉（不考虑该对象还存在于 WeakSet 中），所以，WeakSet 对象里有多少个成员元素，取决于垃圾回收机制有没有运行，运行前后成员个数可能不一致，遍历结束之后，有的成员可能取不到了（被垃圾回收了），WeakSet 对象是无法被遍历的（ES6 规定 WeakSet 不可遍历），也没有办法拿到它包含的所有元素。

方法：

- add(value)：在WeakSet 对象中添加一个元素value。
- has(value)：判断 WeakSet 对象中是否包含value。
- delete(value)：删除元素 value

## Proxy

## Relect

## for...of

只能在存在**可迭代对象**的时候使用，如果不存在迭代对象，则报错。

- String
- Array
- Map
- WeakMap
- Set
- WeakSet
- TypedArray
- argument

由 break, throw 或 return 终止

`for...in`语句以任意顺序迭代一个对象的除Symbol以外的可枚举属性，包括继承的可枚举属性。for ... in是为遍历对象属性而构建的，不建议与数组一起使用

[参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)

## Generator函数的语法

## Class

## Module

## fetch与axios的区别

- 从浏览器中创建 XMLHttpRequest
- 从 node.js 发出 http 请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求
- 自动转换JSON数据
- 客户端支持防止CSRF/XSRF
- axios既提供了并发的封装，也没有fetch的各种问题，而且体积也较小，当之无愧现在最应该选用的请求的方式。

- fetch号称是AJAX的替代品，是在ES6出现的，使用了ES6中的promise对象。Fetch是基于promise设计的。Fetch的代码结构比起ajax简单多了，参数有点像jQuery ajax。但是，一定记住fetch不是ajax的进一步封装，而是原生js，没有使用XMLHttpRequest对象。
