---
sidebar: auto
---

# 原型和原型链

JavaScript是面向对象编程（Object-oriented programming ，OOP）的语言，OOP的基本思想是在程序里，我们通过使用对象去构建现实世界的模型，把原本很难（或不可）能被使用的功能，简单化并提供出来，以供访问。

## 创建对象的几种方法

### 字面量方法

```js
// {}
var o1 = { name: 'o1' }
```

### 构造函数

```js
var M = function(name){ this.name = name }
var o3 = new M('o3')

// new Object()
var o2 = new Object({ name: 'o2' })
```

### Object.create()

```js
// Object.create(),创建一个对象并继承原型对象
var p = {name: 'p'}
var o4 = Object.create(p)
// o4.__proto__ === p
```

::: tip 提示

Object.create(null) 创建的对象是一个空对象，在该对象上没有继承 `Object.prototype` 原型链上的属性或者方法

:::

## 构造函数constructor

### 定义

构造函数（constructor）也称之为构造器，功能类似对象模板，一个构造器可以生成任意多个实例，实例对象具有相同的属性和方法，但是不相等

在 JavaScript 中，构造器其实就是一个普通的函数。当使用 new 操作符 来作用这个函数时，它就可以被称为构造函数

### 特点

- 首字母大写
- 函数体内部使用`this`关键字,代表所要生成的对象实例
- 生成对象时，必须使用`new`命令

## 原型prototype

JavaScript每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。

每个函数都有一个特殊的属性叫作原型（prototype）,案例如下：

```js
function doSomething(){}
console.log( doSomething.prototype );
```

可以看到`doSomething` 函数有一个默认的原型属性：

```bash
{
    constructor: ƒ doSomething(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
```

现在，添加一些属性到 `doSomething` 的原型上面

```js
function doSomething(){}
doSomething.prototype.foo = "bar";
console.log( doSomething.prototype );
```

结果如下：

```bash
{
    foo: "bar",
    constructor: ƒ doSomething(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
```

使用`new`关键字创建一个`doSomething`的实例：

```js
function doSomething(){}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log( doSomeInstancing );
```

结果如下：

```bash
{
    prop: "some value",
    __proto__: {
        foo: "bar",
        constructor: ƒ doSomething(),
        __proto__: {
            constructor: ƒ Object(),
            hasOwnProperty: ƒ hasOwnProperty(),
            isPrototypeOf: ƒ isPrototypeOf(),
            propertyIsEnumerable: ƒ propertyIsEnumerable(),
            toLocaleString: ƒ toLocaleString(),
            toString: ƒ toString(),
            valueOf: ƒ valueOf()
        }
    }
}
```

可以看到，doSomeInstancing 的 `__proto__` 属性就是`doSomething.prototype`,即`doSomeInstancing.__proto__ === doSomething.prototype`

原型对象 | 说明 | 值
---|---|---
显式原型对象`prototype` | 所有**函数**都有一个`prototype`属性 | 对象
隐式原型对象`__proto__` | 所有**引用类型**都有一个私有属性`__proto__` | 对象

::: tip

- 所有**引用类型**的`__proto__`属性指向它**构造函数**的原型对象（`prototype`）
- 根据定义，`null` 没有原型，并作为这个原型链中的最后一个环节
- `__proto__`是一个内部属性，不建议对其进行直接操作
:::

## 原型对象

原型对象是一个内部对象，应当使用 `__proto__`访问,`prototype` 属性包含（指向）一个对象，你在这个对象中定义需要被继承的成员

constructor 属性
每个实例对象都从原型中继承了一个constructor属性，该属性指向了用于构造此实例对象的构造函数

## 原型链

### 定义

在JavaScript中，每个对象拥有一个**原型对象**，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链。它解释了为何一个对象会拥有定义在其他对象中的属性和方法

### 查找过程

- 当访问一个对象的某个属性时，会先在这个对象本身属性上查找
- 如果没有找到，则会去该对象的`__proto__`（隐式原型）上查找，即它的构造函数的`prototype`
- 如果还没有找到就会再在`__proto__`的`__proto__`中查找,最终会查到`Object.prototype`上
- 如果没有找到会返回`undefined`

### 图解

![constructor](./images/constructor.png)

## instanceof运算符

原理：检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);
// auto.__proto__ === Car.prototype
console.log(auto instanceof Car);
// auto.__proto__.__proto__ === Object.prototype
console.log(auto instanceof Object);
```

图解：

![auto](./images/instanceof-auto.png)
![car](./images/instanceof-car.png)
![object](./images/instanceof-object.png)

### 实现一个instanceof

```js
const instanceOf = (left, right) => {
    let proto = left.__proto__
    let prototype = right.prototype
    while (true) {
        if (proto === null) {
            return false
        }
        if (proto === prototype) {
            return true
        }
        proto = proto.__proto__
    }
}

// 测试
instanceOf([], Array)   // true
instanceOf([], Object)  // true
```

## new运算符

原理：

1. 创建一个新对象（空对象），继承构造函数的原型对象（foo.prototype）
2. 构造函数foo被执行。执行的时候，相应的传参会被传入，同时上下文（this）会指定为这个新的实例。new foo等同于new foo()，只能用于在不传任何参数的情况
3. 如果构造函数返回一个“对象”，那么这个对象会取代整个new出来的结果。如果构造函数没有返回对象，那么new出来的结果为步骤1创建的对象

问题：如何模拟new运算符？

```js
var new2 = function(func) { // 参数构造函数
    // 第一步：创建一个新对象，继承构造函数的原型对象
    // 即创建对象o，继承构造函数的原型对象：o.__proto__ === func.prototype
    var o = Object.create(func.prototype)
    // 第二步：执行构造函数，转移this到o对象上
    var k = func.call(o)
    // 判断构造函数执行的结果是不是对象类型
    if (typeof k === 'object'){
        return k
    } else {
        return o
    }
}
// 验证
var o6 = new2(M)
o6 instanceof M // 判断o6是不是M构造函数的实例
o6 instanceof Object 
o6.__proto__.construtor === M // o6的原型对象是否等于M
M.prototype.walk = function(console.log('walk')) // 在M的原型上增加一个方法walk
o6.walk()
```

## 继承

### 1. 借助构造函数实现继承

子类构造函数中执行父类构造函数（` Parent.call(this) `）

```js
function Parent() {
    this.name = 'Parent'
}
Parent.prototype.say = function() {}

function Child() {
    Parent.call(this) // 或者使用apply，this 指向 Child
    this.type = 'Child'
}

var child = new Child()

// 测试
console.log(child)
```

::: danger 缺点

继承不了父类构造函数原型对象`Parent.prototype`上的属性和方法

:::

### 2. 借助原型链实现继承

方法：将父类构造函数的实例赋值给子类构造函数的原型对象（`Child.prototype = new Parent()`）

原因：子类Child.prototype赋值父类的实例new Parent()，当子类实例化时，`子类实例的__proto__`就等于`子类构造函数的prototype`，`子类实例的__proto__`等于`父类的实例`，因此实现了继承

作用：弥补通过构造函数继承的缺点（继承不了父类构造函数原型对象`（Parent.prototype）`上的属性和方法）

```js
function Parent() {
    this.name = 'Parent'
    this.play = [1,2,3]
}
function Child() {
    this.type = 'Child'
}

Child.prototype = new Parent()

// 测试
console.log(new Child())
// 缺点：改变s1原型对象上的属性和方法会影响到s2对象，
// 原因是s1和s2的__proto__的指向相同（s1.__proto__ === s2.__proto__）
var s1 = new Child()
var s2 = new Child()
console.log(s1.play,s2.play)
s1.play.push(4)
console.log(s1.play,s2.play)
```

::: danger 缺点

如果实例化两个子类构造函数，其中一个子类构造函数的原型上的方法和属性改变，另一个实例也会相应改变

:::

### 3. 组合方式,组合构造函数和原型链两种方式

方法：

- 在子类构造函数中执行父类构造函数，
- 然后将父类的构造函数的实例 赋值给 子类的原型对象

```js
function Parent() {
    this.name = 'Parent'
    this.play = [1,2,3]
}
function Child() {
    Parent.call(this)
    this.type = 'Child'
}

Child.prototype = new Parent()

// 测试
var s1 = new Child()
var s2 = new Child()
s1.play.push(4)
console.log(s1.play,s2.play)
```

::: danger 缺点

父类构造函数执行了两次

:::

### 4. 优化方式1: 通过父类的prototype

方法：

- 子类构造函数中执行父类构造函数，
- 然后将父类构造函数的原型对象赋值给子类构造函数的原型对对象

```js
function Parent() {
    this.name = 'Parent'
    this.play = [1,2,3]
}
function Child() {
    Parent.call(this)
    this.type = 'Child'
}

Child.prototype = Parent.prototype

// 测试
var s1 = new Child()
var s2 = new Child()
console.log(s1, s2)
console.log(s1 instanceof Child) // true
console.log(s2 instanceof Parent) // true
```

::: danger 缺点

区分不了一个对象是子类的实例化还是父类的实例化

:::

### 5. 优化方式2：通过Object.create()

方法：

- 在子类构造函数中执行父类构造函数
- 然后创建父类构造函数的实例继承赋值给子类构造函数的原型对象
- 最后将子类构造函数赋值给子类构造函数的原型对象的constructor

```js
function Parent()
    this.name = 'Parent'
    this.play = [1,2,3]
}
function Child() {
    Parent.call(this)
    this.type = 'Child'
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

// 测试
var s = new Child()
console.log(s instanceof Child, s instanceof Parent)
console.log(s.constructor)
```

### 6. 使用es6的extends

```js
class Parent {
    constructor(value) {
        this.val = value
    }
    getValue() {
        console.log(this.val)
    }
}
class Child extends Parent {
    constructor(value) {
        super(value) // Parent.call(this, value)
        this.val = value
    }
}

let child = new Child(1)
child.getValue() // 1
child instanceof Parent // true
```

## 改变函数对象中的this指向

### 箭头函数与普通函数的区别

- 箭头函数语法上更简洁
- 箭头函数没有自己的this，它里面的this继承函数所处的上下文中的this（使用call，apply,bind并不会改变箭头函数的this指向）
- 箭头函数中没有`arguments`（类数组），只能基于`...arg`获取传的参数集合(数组)
- 箭头函数不能被new执行，因为箭头函数没有`this`，也没有`prototype`

### call/apply/bind

使用案例：

```js
// 定义函数
function fn(a,b) {
    this.xxx = 3
    console.log(a, b, this)
    return a + b
}

fn(1,2)                     // 1,2,Window
console.log(xxx)  

const obj = {m: 0}

// 改变this指向
// call参数平铺
fn.call(obj, 1,2)            // 1,2, obj
fn.call(undefined, 1,2)      // 1,2, Window
fn.call(null,1,2)            // 1,2, Window
// apply参数为数组
fn.apply(obj, [1,2])         // 1,2, obj

// bind返回一个新的函数，为了看到结果，我们去执行下函数
fn.bind(obj)(3,4)            // 3,4, obj
fn.bind(obj, 5)(3,4)         // 5,3, obj
fn.bind(obj, 5, 6)(3,4)      // 5,6, obj

```

### 区别

api | 函数是否执行 | this指向 | 参数
---|---|---|---
call | 执行 | 指向第一个参数 | call(obj, param1,param1...)
apply | 执行 | 指向第一个参数 | apply(obj, [param1,param1...])
bind | 返回一个新的函数 <br>（新函数内部会调用原来的函数） | 指向第一个参数 | bind(obj, param1,param1...)

::: warning 提示

如果 obj 为 `undefined` 或 `null`，`this` 指向 `Window`对象

:::

### 应用

- call/bind：根据伪数组生成真数组
- bind：react中组件的自定义方法 / vue中的事件回调函数内部

### 自定义call、apply

1. 给obj添加一个临时方法，方法名任意，值为当前函数
2. 通过obj调用这个临时方法，并将接收的参数传入
3. 删除obj上的这个临时方法属性

call():

```js
Function.prototype.call = function(obj, ...args) {
  // console.log('call()')
  // 执行函数
  // this(...args)

  // 处理obj是undefined或者null的情况
  if (obj===undefined || obj===null) {
    obj = window
  }

  // 给obj添加一个方法: tempFn: this
  obj.tempFn = this
  // 调用obj的tempFn方法, 传入rags参数, 得到返回值
  const result = obj.tempFn(...args)
  // 删除obj上的temFn
  delete obj.tempFn
  // 返回方法的返回值
  return result
}
```

apply():

```js
Function.prototype.apply = function(obj, args) {
  // 处理obj是undefined或者null的情况
  if (obj===undefined || obj===null) {
    obj = window
  }

  // 给obj添加一个方法: tempFn: this
  obj.tempFn = this
  // 调用obj的tempFn方法, 传入rags参数, 得到返回值
  const result = obj.tempFn(...args)
  // 删除obj上的temFn
  delete obj.tempFn
  // 返回方法的返回值
  return result
}
```

### 自定义bind

1. 返回一个新函数
2. 在新函数内部通过原函数对象的call方法来执行原函数，指定this为obj，指定参数为bind调用的参数和后面新函数调用的参数

```js
Function.prototype.bind = function(obj, ...args) {
  // 返回一个新函数
  return (...args2) => {
    // 调用原来函数, 指定this为obj, 参数列表由args和args2依次组成
    return this.call(obj, ...args, ...args2)
  }
}
```

### 其他自定义实现方式

#### call

调用方法：

```js
func.call(thisArg, arg1, arg2, ...)
```

手写实现：

```js
Function.prototype._call = function(context) {
    // 赋值作用域参数,如果没有则默认为window对象
    context = context || window
    // 绑定当前调用函数
    context.fn = this
    // 获取传入的参数，args是一个数组
    const args = [...arguments].slice(1)
    // 执行当前调用函数，并传入参数（数组解构）
    const result = context.fn(...args)
    // 删除函数
    delete context.fn 
    // 返回执行函数
    return result
}
```

#### apply

调用方法：

```js
func.apply(thisArg, [argsArray])
```

手写实现：

```js
Function.prototype._apply = function (context) {
    // 赋值作用域参数,如果没有则默认为window对象
    context = context || window
    // 绑定当前调用函数
    context.fn = this
    let result
    // 如果有参数，则传入参数
    if (arguments[1]){
        // 数组解构
        result = context.fn(...arguments[1])
    }else {
    // 如果没有参数，则直接执行当前的调用函数
        result = context.fn()
    }
    // 删除函数
    delete context.fn
    // 返回执行函数
    return result
}
```

#### bind

调用方法：

```js
func.bind(thisArg[, arg1[, arg2[, ...]]])
```

手写实现：

```js
Function.prototype._bind = function(context) {
    // 保存原有函数
    const _this = this
    // 获取参数
    const args = [...arguments].slice(1)
    // 返回一个函数
    return function F() {
        if (this instanceof F){
        // new方式调用
            return new _this(...args, ...arguments)
        }
        // 直接调用
        return _this.apply(context, args.concat(...arguments))
    }
}
```