
# 原型和原型链

JavaScript是面向对象编程（Object-oriented programming ，OOP）的语言，OOP的基本思想是在程序里，我们通过使用对象去构建现实世界的模型，把原本很难（或不可）能被使用的功能，简单化并提供出来，以供访问。

## 创建对象的五种方式

### 1. 对象字面量（Object Literal）（最常用）

最简单直接的方式，适用于单例对象。

```js
const person = {
  name: 'Alice',
  age: 30,
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};
```

### 2. 构造函数（Constructor Function）

通过 `new` 调用函数创建多个相似对象。

```js
function Person(name, age) {
  // 每个实例都会创建独立的属性和方法
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person = new Person('Alice', 30);
```

::: warning ⚠️ 缺点

每个实例都会重复创建方法，浪费内存。

:::

### 3. 原型模式（Prototype）（推荐）

将方法定义在构造函数的 `prototype` 上，实现方法共享。

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 方法定义在原型上，所有实例共享
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}.`);
};

Person.prototype.grow = function() {
  this.age++;
};

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1.sayHello === person2.sayHello); // true，共享方法

```

### 4. ES6 Class（语法糖）

`class` 是对原型模式的语法封装，底层仍是原型机制。

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // 自动添加到原型上
  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }
  
  // 静态方法
  static createDefault() {
    return new Person('Default', 0);
  }
}

const person = new Person('Alice', 30);
console.log(person.sayHello()); // Hello, I'm Alice
console.log(Person.createDefault()); // Person { name: 'Default', age: 0 }

```

::: tip 💡 注意

`typeof Person` 仍是 `"function"`，`Person.prototype.constructor === Person`。

:::

### 5. Object.create()

显式指定新对象的原型，适合实现 **无构造函数的继承**。

```js
const personProto = {
  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

// 创建以personProto为原型的对象
const person = Object.create(personProto, {
  name: { 
    value: 'Alice', 
    writable: true, 
    enumerable: true 
  },
  age: { 
    value: 30, 
    writable: true, 
    enumerable: true 
  }
});

// 创建纯净对象（无原型）
const pureObject = Object.create(null); // 没有toString、hasOwnProperty等方法
```

Object.create() 的特点：

- 继承指定对象的属性/方法
- 不会调用构造函数
- 可通过第二参数定义属性描述符

```js
const student = Object.create(personProto, {
  grade: { value: 1, writable: true, enumerable: true }
});
```


## 构造函数（Constructor）

构造函数是用于创建对象的普通函数，约定首字母大写，并配合 `new` 使用。

构造函数的定义方式如下：

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var person1 = new Person("Alice", 30);
var person2 = new Person("Bob", 25);
```

ES6 中等价写法：

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);
```

### 构造函数的本质

```js
function Person(name) {
  this.name = name;
}

// 当使用new调用时
const p = new Person('Alice');

// 等价于
const p = {};
p.__proto__ = Person.prototype;  // 设置原型
Person.call(p, 'Alice');         // 绑定this并执行
```

### 构造函数的特点

```js
function Animal(type) {
  this.type = type;
  this.created = Date.now();
  
  // 🚨 不要返回对象类型！
  // 如果返回对象，会覆盖new创建的实例
  // return { custom: 'object' }; // ❌ 不要这样做
}

const cat = new Animal('cat');
console.log(cat instanceof Animal); // true
console.log(cat.created); // 时间戳
```

- 首字母大写（约定）
- 内部使用 `this` 绑定新对象
- 必须用 `new` 调用（否则 `this` 指向全局对象或 `undefined` ）

### 箭头函数不能作为构造函数

```js
const ArrowFunc = () => {
  this.name = 'test'; // ❌ 箭头函数没有this绑定
};

// TypeError: ArrowFunc is not a constructor
// const instance = new ArrowFunc();

// 验证
console.log(ArrowFunc.prototype); // undefined
```

::: danger 
❗箭头函数不能作为构造函数，因其没有 `[[Construct]]` 内部方法。
:::

## 原型对象（Prototype）

每个函数（除箭头函数）都有一个 `prototype` 属性，指向一个对象。该对象的用途是：**为所有实例共享属性和方法**。

每个对象内部都有一个隐藏的 `[[Prototype]]` 链接（在浏览器中可通过非标准属性` __proto__` 访问），指向其构造函数的 `prototype`。

下面是一个示例，展示了原型对象的基本用法：

```js
function Foo() {}
const f1 = new Foo();

console.log(f1.__proto__ === Foo.prototype); // true
console.log(Object.getPrototypeOf(f1) === Foo.prototype); // 推荐写法
```

> 💡 学习建议：用 `Object.getPrototypeOf(obj)` 替代 `obj.__proto__`，用 `Reflect.construct()` 替代 `new`，这些现代 API 更安全可靠。

### 原型查找机制

当访问对象属性时，JS 引擎按以下顺序查找：

- 自身属性
- `[[Prototype]]`（即 `__proto__`）
- `[[Prototype]]` 的 `[[Prototype]]`
- … 直到 `Object.prototype`
- 若仍未找到，返回 `undefined`

## 原型链（Prototype Chain）

原型链是多个对象通过 `[[Prototype]]` 链接形成的层级结构。

**在JavaScript中，每个对象都拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链**。它解释了为何一个对象会拥有定义在其他对象中的属性和方法

### 原型链的查找过程（机制）

当访问一个对象的某个属性时，会先在这个对象本身属性上查找，如果没有找到，才会去 `__proto__`（即`[[Prototype]]`）上查找，依此类推，直到 `Object.prototype`，如果仍未找到，返回 `undefined`。

> 🚨 重要：原型链查找是 **深度优先** 的，一旦找到同名属性就会停止查找！

### 图解

![constructor](./images/constructor.png)

这张图是 JavaScript 原型链（Prototype Chain） 的经典示意图，展示了函数、对象、原型和 `__proto__` 之间的关系


| 左边 | 右边 |
| -- | -- |
| **函数（Functions）**：构造函数（如 `Foo`, `Object`, `Function`）|	**原型（Prototypes）**：每个函数都有一个 `.prototype`，每个对象都有一个 `__proto__`

✅ 函数（Functions）
- Foo()：自定义构造函数
- Object()：所有对象的祖宗构造函数
- Function()：所有函数的祖宗构造函数
> 所有函数都是 Function 的实例！

✅ 原型（Prototypes）
- 每个函数都有一个 `.prototype` 属性（指向一个对象）
- 每个对象都有一个 `__proto__`（内部属性，指向它的原型）
> `__proto__` 是对象的“父类”，用来查找方法和属性。

✅ 最终结论：这张图告诉我们什么？
- 所有函数都继承自 `Function.prototype`
- 所有对象都继承自 `Object.prototype`
- `__proto__` 是对象的“父亲”
- `.prototype` 是函数的“家族手册”
- 原型链是 JS 实现继承的核心机制

## instanceof运算符

用于检测构造函数的 `prototype` 是否出现在对象的原型链上。

<<< ./code-snippet/instanceof.js

## new运算符

创建一个对象的实例：`new [Constructor]`

1. 无 return

```js
function Foo(age) {
  this.age = age;
}

var o = new Foo(111);
console.log(o);         // { age: 111 }
```

2. return 对象类型数据

```js
function Foo(age) {
  this.age = age;

  return { type: "return 对象" };
}

var o = new Foo(222);
console.log(o);         // { type: "return 对象" }
```

3. return 基本类型数据

```js
function Foo(age) {
  this.age = age;

  return 1;
}

var o = new Foo(333);
console.log(o);         // { age: 333 }
```

总结：

- 如果构造函数显式返回对象类型，则直接返回这个对象
- 如果构造函数没有显式返回对象类型（返回基本数据类型或者直接不返回），则返回最开始创建的对象

::: tip 提示
如果构造函数是箭头函数，因为箭头函数中没有`[[Constructor]]`方法，所以不能使用`new`调用，会报错。
:::

### 原理

1. 创建一个空对象实例
2. 将实例的`__proto__`指向构造函数的原型`constructor.prototype`（继承构造函数的原型对象）
3. 执行构造函数，绑定`this`指向实例，实例作为`this`的上下文）
4. 如果构造函数的执行结果是一个对象，则返回这个对象，否则，返回实例对象

> 注意：如果构造函数返回一个基本类型（如字符串、数字），new操作符会忽略返回值，返回新创建的对象。

### 实现

<<< ./code-snippet/new.js

## 继承的六种实现方式（演进过程）

原型链是 JS 实现继承的核心机制

### 1. 原型链继承（Prototype Chain Inheritance）

#### 实现思路：

**子类的原型** 指向 **父类的实例**，从而继承父类的属性和方法。

#### 示例代码：

```js:line-numbers{13}
function Parent() {
  this.name = 'parent';
  this.colors = ['red', 'blue'];
}

Parent.prototype.getName = function () {
  return this.name;
};

function Child() {}

// 继承
Child.prototype = new Parent();

const child1 = new Child();
console.log(child1.getName()); // 'parent'
child1.colors.push('green');
console.log(child1.colors); // ['red', 'blue', 'green']

const child2 = new Child();
console.log(child2.colors); // ['red', 'blue', 'green'] ← 共享引用！
```

缺点：

- 所有子实例共享父类实例的引用属性（如数组、对象），容易造成数据污染。
- 无法向父类构造函数传参。

❌ 问题暴露：引用属性共享 + 无法传参

### 2. 构造函数继承（Constructor Stealing / Classical Inheritance）

#### 实现思路：

- 在 **子类构造函数** 中使用 `call` 或 `apply` 调用 **父类构造函数**，实现属性继承。
- 解决了属性共享和无法传参的问题！

#### 示例代码：

```js:line-numbers{11}
function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue'];
}

Parent.prototype.getName = function () {
  return this.name;
};

function Child(name, age) {
  Parent.call(this, name); // 继承属性
  this.age = age;
}

const child1 = new Child('Tom', 10);
child1.colors.push('green');
console.log(child1.colors); // ['red', 'blue', 'green']

const child2 = new Child('Jerry', 8);
console.log(child2.colors); // ['red', 'blue'] ← 不共享

console.log(child1.getName()); // ❌ TypeError: child1.getName is not a function
```
缺点：

- 无法继承父类原型上的方法（如 `getName`）。方法无法复用，去了原型方法的复用能力，违背 OOP 复用原则。
- 每个子实例都会创建一份父类方法的副本（如果方法定义在构造函数内）。

📌 适用场景：只需继承实例属性，不需要复用父类方法。

### 3. 组合继承（Combination Inheritance）

#### 实现思路：

结合原型链继承和构造函数继承：

用原型链继承父类原型上的方法；
用构造函数继承实例属性。

#### 示例代码：

```js:line-numbers{11,15,16}
function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue'];
}

Parent.prototype.getName = function () {
  return this.name;
};

function Child(name, age) {
  Parent.call(this, name); // 第一次调用 Parent
  this.age = age;
}

Child.prototype = new Parent(); // 第二次调用 Parent
Child.prototype.constructor = Child;

Child.prototype.getAge = function () {
  return this.age;
};

const child1 = new Child('Tom', 10);
child1.colors.push('green');
console.log(child1.getName(), child1.getAge()); // 'Tom', 10

const child2 = new Child('Jerry', 8);
console.log(child2.colors); // ['red', 'blue'] ← 独立

```

缺点：

- 父类构造函数被调用了两次（一次在 `new Parent()`，一次在` Parent.call`），效率不高。
  
### 4. 原型式继承（Prototypal Inheritance）

#### 实现思路：

借助 Object.create()（或手动模拟）直接基于一个对象创建新对象。

#### 示例代码：

```js:line-numbers{9,13}
const parent = {
  name: 'parent',
  colors: ['red', 'blue'],
  getName() {
    return this.name;
  }
};

const child1 = Object.create(parent);
child1.name = 'child1';
child1.colors.push('green');

const child2 = Object.create(parent);
child2.name = 'child2';

console.log(child1.getName()); // 'child1'
console.log(child2.colors); // ['red', 'blue', 'green'] ← 共享引用！

```
这是道格拉斯·克罗克福德（Douglas Crockford）提出的模式。

缺点：

- 同样存在引用类型共享问题。
- 不适合创建多个具有相同结构但独立状态的对象。

### 5. 寄生式继承（Parasitic Inheritance）

#### 实现思路：

创建一个仅用于封装继承过程的函数，在该函数内部增强对象，然后返回。

#### 示例代码：
```js:line-numbers{2}
function createAnother(original) {
  const clone = Object.create(original); // 通过原型式继承创建对象
  clone.sayHi = function () {
    console.log('Hi');
  };
  return clone;
}

const parent = {
  name: 'parent',
  colors: ['red', 'blue']
};

const child = createAnother(parent);
child.sayHi(); // 'Hi'
```

缺点：
- 无法复用方法（每次都要重新定义）。
- 仍存在引用共享问题。

### 6. ✅ 寄生组合式继承（Parasitic Combination Inheritance）

#### 实现思路：

解决组合继承中父类构造函数被调用两次的问题。

只调用一次父类构造函数，并通过 `Object.create(Parent.prototype)` 设置子类原型。

#### 示例代码：

```js:line-numbers{2,3,4}
function inheritPrototype(Child, Parent) {
  const prototype = Object.create(Parent.prototype); // 创建父类原型的副本
  prototype.constructor = Child;
  Child.prototype = prototype;
}

function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue'];
}

Parent.prototype.getName = function () {
  return this.name;
};

function Child(name, age) {
  Parent.call(this, name); // 只调用一次
  this.age = age;
}

inheritPrototype(Child, Parent);

Child.prototype.getAge = function () {
  return this.age;
};

const child1 = new Child('Tom', 10);
const child2 = new Child('Jerry', 8);

child1.colors.push('green');
console.log(child1.colors); // ['red', 'blue', 'green']
console.log(child2.colors); // ['red', 'blue'] ← 独立

console.log(child1.getName(), child1.getAge()); // 'Tom', 10

```

优点：
- 只调用一次父类构造函数。
- 避免了引用属性共享。
 是引用类型继承的最佳模式（ES5 时代推荐）。

### 7. ✅ ES6 Class 继承（语法糖）

#### 实现思路：

`class` 和 `extends` 本质上就是寄生组合继承的语法糖，Babel转译后就是寄生组合式继承代码。

#### 示例代码：

```js:line-numbers{12,14}
class Parent {
  constructor(name) {
    this.name = name;
    this.colors = ['red', 'blue'];
  }

  getName() {
    return this.name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // 调用父类构造函数
    this.age = age;
  }

  getAge() {
    return this.age;
  }
}

const child1 = new Child('Tom', 10);
const child2 = new Child('Jerry', 8);

child1.colors.push('green');
console.log(child1.colors); // ['red', 'blue', 'green']
console.log(child2.colors); // ['red', 'blue'] ← 独立

console.log(child1.getName(), child1.getAge()); // 'Tom', 10
```

优点：

- 语法简洁、清晰，接近传统面向对象语言。
- 自动处理原型链和构造函数调用。
- 支持静态方法、getter/setter 等高级特性。

注意：

- 本质仍是基于原型的继承，只是语法糖。
- 必须在子类 constructor 中调用 super() 才能使用 this。

## 对比总结

| 继承方式 | 是否支持传参	| 是否共享引用属性	| 是否继承原型方法	| 调用父构造次数| 是否支持静态方法 | 推荐度 |
| -- | -- | -- | -- | -- | -- | -- |
| 原型链继承	| ❌	| ✅（问题）| 	✅	| 1（通过`new Parent()`）	| ❌ | ⭐ | 
| 构造函数继承 | ✅	| ❌	| ❌	| 1	| ✅	|  ⭐⭐ |
| 组合继承	| ✅	| ❌	| ✅	| 2（一次`Parent.call`，一次`new Parent()`）	| ✅	| ⭐⭐⭐ |
| 原型式继承	| ❌	| ✅（问题）	| ✅（来自对象）	| 0	| ❌ | ⭐ |
| 寄生式继承	| ❌	| ✅（问题）	| ✅（增强）	| 0	| ✅	| ⭐ |
| 寄生组合式继承	| ✅	| ❌	| ✅	| 1（仅`Parent.call`）	| ✅	| ⭐⭐⭐⭐⭐ |
| ES6 Class 继承	| ✅	| ❌	| ✅	| 1	| ✅	| ⭐⭐⭐⭐⭐ |

> ✅ 表示“是”或“无问题”，❌ 表示“否”或“有问题”。

## 请说说 JavaScript 中实现继承的几种方式？你推荐哪一种？为什么？

JavaScript 的继承本质是基于原型的委托机制。常见的实现方式有：

- 原型链继承：子类原型指向父类实例。
  
  → 缺点：引用属性共享、无法传参。
  
- 借用构造函数：在子类中用 `Parent.call(this)`。
  
  → 缺点：无法复用父类原型方法。

- 组合继承：结合上述两者。

  → 缺点：父类构造函数被调用两次，原型上有冗余属性。

- 寄生组合继承：用 `Object.create(Parent.prototype)` 设置子类原型。

  → ✅ 推荐：只调用一次父类构造函数，原型干净，支持所有 `OOP` 特性。

- ES6 `class`` extends`：语法糖，底层就是寄生组合继承。

  → 现代开发首选，简洁安全。

> 所以我推荐：现代项目用 `class` `extends`，兼容环境用寄生组合继承。

## 组合继承和寄生组合继承有什么区别？为什么寄生组合更好？

两者都结合了“借用构造函数”和“原型链”的优点，但关键区别在于如何设置子类的原型：

| 对比项	| 组合继承	| 寄生组合继承 |
| -- | -- | -- |
| 原型设置方式	| Child.prototype = new Parent()	| Child.prototype = Object.create(Parent.prototype) |
| 父类构造函数调用次数	| 2 次（设原型时 + 实例化时）	| 1 次（仅实例化时） |
| 子类原型上是否有父类实例属性？	| ✅ 有（如 name, friends）	| ❌ 无（只有方法） |
| 内存效率	| 较低（冗余属性）	| 更高 |

举例说明问题：

```js
function Parent(name) {
  this.name = name;
  this.friends = [];
}
function Child(name, age) {
  Parent.call(this, name);
}
// 组合继承
Child.prototype = new Parent(); // ← 这里会创建一个无意义的 { name: undefined, friends: [] }

// 寄生组合继承
Child.prototype = Object.create(Parent.prototype); // ← 只继承方法，不创建实例属性
```

> 因此，寄生组合继承避免了不必要的属性初始化，是 ES5 中最高效的继承方式。使用Child.prototype = new Parent()时，如果Parent构造函数有副作用（如初始化DOM、发送网络请求），会导致每次继承时都执行这些副作用。

## ES6 的 class 是不是真正的“类”？它和构造函数有什么关系？

不是。ES6 的 class 只是语法糖，底层仍然是基于构造函数 + 原型链的机制。

验证：

```js
class A {}
console.log(typeof A); // "function"
console.log(A === A.prototype.constructor); // true

// class 中的方法都定义在 prototype 上
A.prototype.say = function() {};
// 等价于
class A {
  say() {}
}
```

extends 的本质就是寄生组合继承：

- super() → 相当于 `Parent.call(this, ...)`
- 自动设置 `Child.prototype = Object.create(Parent.prototype)`
- 自动修复 `constructor`

> 所以，class 让代码更清晰，但没有改变 JavaScript 基于原型的本质。

## instanceof 的原理是什么？它是如何判断对象类型的？

`obj instanceof Constructor` 的原理是：

检查 `Constructor.prototype` 是否出现在 `obj` 的原型链上。

```js
function myInstanceof(obj, Ctor) {
  if (typeof obj !== 'object' || obj === null) return false;
  let proto = Object.getPrototypeOf(obj);
  while (proto) {
    if (proto === Ctor.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
```

注意：

- `instanceof` 不可靠，因为原型链可以被修改（如 `Object.setPrototypeOf`）
- 跨 `iframe` 或不同全局环境时可能失效
- 判断基本类型应使用 `typeof`，判断数组用` Array.isArray`

## Object.create(null) 创建的对象有什么特点？用在什么场景？

`Object.create(null)` 创建的是一个没有任何原型的对象：

- 没有 `__proto__`
- 没有 `toString、hasOwnProperty` 等继承自 `Object.prototype` 的方法
- `Object.getPrototypeOf(obj)` 返回 `null`

适用场景：

- 实现纯净的哈希表/字典，避免原型方法干扰

```js
const dict = Object.create(null);
dict.toString = 'user data'; // 不会覆盖原生 toString
console.log(dict.toString); // 'user data'（安全！）
```

- 需要完全控制属性枚举（如 `for...i`n 不会遍历到原型属性）

> 相比之下，`{}` 或 `new Object()` 都会继承 `Object.prototype`。


## 为什么箭头函数不能作为构造函数？new 一个箭头函数会怎样？

因为箭头函数：

- 没有 `[[Construct]]` 内部方法（ECMAScript 规范规定）
- 没有自己的 `this、arguments、super、new.target`
- 没有 `prototype` 属性

所以：

```js
const Arrow = () => {};
new Arrow(); // ❌ TypeError: Arrow is not a constructor
```

> 构造函数必须是普通函数或 `class`（class 本质也是函数）。

## 如何手动实现 new 操作符？

```js
function myNew(Constructor, ...args) {
  // 1. 创建空对象，链接到构造函数原型
  const obj = Object.create(Constructor.prototype);
  
  // 2. 绑定 this 并执行构造函数
  const result = Constructor.apply(obj, args);
  
  // 3. 判断构造函数返回值
  if (result !== null && typeof result === 'object') {
    return result; // 返回对象
  }
  return obj; // 否则返回新对象
}

// 测试
function Person(name) { this.name = name; }
const p = myNew(Person, 'Alice');
console.log(p.name); // 'Alice'
```

总结：继承相关面试核心要点

| 概念 | 关键点 |
| -- | -- |
| 继承本质 | 原型链委托，非类复制 |
| 最优继承 | 寄生组合继承（ES5）、class extends（ES6+） |
| class | 本质	语法糖，底层仍是原型 |
| instanceof | 检查原型链是否包含 `Constructor.prototype` |
| Object | `create(null)`	无原型对象，适合做哈希表 |
| new | 原理	创建对象 → 链接原型 → 绑定 this → 处理返回值 |