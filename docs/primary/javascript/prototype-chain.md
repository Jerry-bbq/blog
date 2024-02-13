
# 原型和原型链

JavaScript是面向对象编程（Object-oriented programming ，OOP）的语言，OOP的基本思想是在程序里，我们通过使用对象去构建现实世界的模型，把原本很难（或不可）能被使用的功能，简单化并提供出来，以供访问。

## 创建对象的五种方式

1. 对象字面量

使用对象字面量的方式可以直接创建一个对象，该对象可以包含属性和方法。

```js
const person = {
  name: 'Alice',
  age: 30,
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};
```

2. 构造函数

使用构造函数可以创建一个对象实例。构造函数可以通过 this 关键字给新对象设置属性和方法。

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person = new Person('Alice', 30);
```

3. 原型

使用原型可以共享属性和方法。通过将属性和方法添加到原型对象中，所有使用该构造函数创建的对象都可以共享这些属性和方法。

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}.`);
};

const person = new Person('Alice', 30);

```

4. class

使用 class 关键字可以创建一个类，该类可以包含属性和方法。

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person = new Person('Alice', 30);

```

5. Object.create()

用于创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）

```js
var p = { name: 'p' }
// 创建一个对象并继承原型对象
var o = Object.create(p)
// o.__proto__ === p
```

::: tip 提示

Object.create(null) 创建的对象是一个空对象，在该对象上没有继承原型链上的属性或者方法

Object.create() 是 JavaScript 中的一个方法，用于创建一个新对象，并将新对象的原型设置为指定的对象。Object.create() 的语法如下：

```js
Object.create(proto[, propertiesObject])
```
其中，proto 是新对象的原型，可以为 null 或任何一个对象，propertiesObject 是一个可选的参数，用于定义新对象的属性。

Object.create() 的特点包括：

1. 继承指定对象的属性
使用 Object.create() 创建的新对象，其原型链指向指定的对象，因此它可以继承指定对象的属性。例如：

```js
const person = {
  name: 'Alice',
  age: 30,
  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

const student = Object.create(person);
student.name = 'Bob';
student.sayHello(); // 输出 "Hello, my name is Bob."
```
在上面的例子中，使用 Object.create() 方法创建了一个新的对象 student，并将 person 对象作为 student 对象的原型。由于 student 对象继承了 person 对象的属性和方法，因此在 student 对象上调用 sayHello() 方法时，可以输出 Hello, my name is Bob.。

2. 不会调用构造函数
使用 Object.create() 创建的新对象，不会调用构造函数。因此，不需要使用 new 关键字来调用构造函数。例如：

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const student = Object.create(Person.prototype);
student.name = 'Bob';
console.log(student instanceof Person); // 输出 "true"
```
在上面的例子中，使用 Object.create() 方法创建了一个新的对象 student，并将 Person.prototype 对象作为 student 对象的原型。由于 student 对象的原型为 Person.prototype，因此可以通过 instanceof 运算符判断 student 对象是否为 Person 类型的实例。

3. 可以设置新对象的属性
使用 Object.create() 创建的新对象，可以通过第二个参数 propertiesObject 来设置新对象的属性。例如：

```js
const person = {
  name: 'Alice',
  age: 30,
  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

const student = Object.create(person, {
  grade: { value: 1, writable: true, configurable: true }
});

console.log(student.grade); // 输出 "1"
```
在上面的例子中，使用 Object.create() 方法创建了一个新的对象 student，并将 person 对象作为 student 对象的原型。同时，通过第二个参数传入了一个对象，该对象定义了 grade 属性。

:::

## 构造函数constructor

在 JavaScript 中，构造函数（constructor）是用来创建对象的函数。它通常用来创建一组相似的对象，这些对象共享相同的属性和方法。通过使用构造函数，可以方便地创建多个相似的对象。

构造函数的定义方式如下：

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var person1 = new Person("Alice", 30);
var person2 = new Person("Bob", 25);
```
在上面的代码中，Person 就是一个构造函数，它接受两个参数 name 和 age，并用它们初始化了对象的属性。通过使用 new 运算符来调用 Person 构造函数，可以创建多个 Person 对象。

在构造函数中，使用 this 关键字来指代当前创建的对象。在 Person 构造函数中，通过 this.name = name 和 this.age = age 语句来为当前对象添加 name 和 age 属性。

需要注意的是，在使用构造函数创建对象时，一般约定构造函数的名称以大写字母开头，以便与普通函数区分开来。

除了上面的方式，ES6 中还提供了更简便的方式来定义构造函数，使用 class 关键字来定义类。例如：

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
使用 class 关键字来定义类，可以更直观地表达出类的概念。在类中，通过 constructor 方法来定义类的构造函数。在 Person 类的构造函数中，使用 this 关键字来指代当前创建的对象，并设置对象的属性。

特点：

- 首字母大写
- 函数体内部使用`this`关键字,代表所要生成的对象实例
- 生成对象时，必须使用`new`操作符

## 原型对象

在 JavaScript 中，每个对象都有一个原型对象（prototype object）。原型对象是一种特殊的对象，它充当了对象与其他对象之间的桥梁。如果一个对象需要访问另一个对象的属性或方法，它可以在自己的原型对象中查找相应的属性或方法。

JavaScript 中的每个对象都有一个 `__proto__` 属性，这个属性指向了该对象的原型对象。原型对象也是一个对象，它也有自己的原型对象，这样就形成了一条原型链。在原型链的顶端是 `Object.prototype`，这是所有对象的原型对象。

下面是一个示例，展示了原型对象的基本用法：

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

var person = new Person("Alice", 30);
person.sayHello();  // 输出 "Hello, my name is Alice"
```
在上面的代码中，`Person` 是一个构造函数，通过 `Person.prototype` 可以为它的实例对象添加方法。在 `person` 对象中调用 `sayHello()` 方法时，实际上是在 `Person.prototype` 中查找该方法并调用。如果 `Person.prototype` 中不存在该方法，那么它会在 `Person.prototype` 的原型对象中继续查找，直到找到顶层的 `Object.prototype`，如果还没有找到就返回 `undefined。`

原型对象的使用可以提高代码的复用性，也使得继承变得更加容易。例如，在子类中可以使用原型继承父类的属性和方法。在使用原型继承时，需要注意一些细节，例如要避免修改原型对象上的属性和方法。

## 原型链

**在JavaScript中，每个对象都拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链**。它解释了为何一个对象会拥有定义在其他对象中的属性和方法

### 原型链的查找过程

- 当访问一个对象的某个属性时，会先在这个对象本身属性上查找
- 如果没有找到，则会去该对象的`__proto__`上查找
- 如果还没有找到就会再在`__proto__`的`__proto__`中查找,最终会查到`Object.prototype`上
- 如果没有找到会返回`undefined`

### 图解

![constructor](./images/constructor.png)

构造函数：
- function Foo()
- function Object()
- function Function()

总结：

1. 所有的实例化对象的`__proto__`指向 其构造函数的`prototype`
2. 所有普通的对象和构造函数的`prototype`的`__proto__`都指向`Object.prototype`
3. 所有函数（包括构造函数）都是`Function`的实例，所以`__proto__`都指向`Function.prototype`

过程：
- 定义一个构造函数Foo，并实例化为f1，从实例f1上查找某个属性或方法，会该实例本身上查找属性或方法，
- 如果没有找到，则从实例的__proto__上查找，也就是实例f1的构造函数Foo的原型对象上（即Foo.prototype）查找
- 如果没有找到，则继续从实例f1的__proto__的__proto__上查找，也就是实例f1的构造函数的原型的原型上查找，即Foo.prototype.__proro__上查找，
- 如果没有找到，则继续从实例f1的__proto__的__proto__的__proto__上查找，即实例f1的构造函数的原型的原型的原型上查找，即Foo.prototype.__proro__.__proro__上，最后找到Object.prototype上，
- 如果还是没有，则找到null
- 对象以此类推

## instanceof运算符

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

### 实现

<<< ./code-snippet/new.js

## 继承

复制父类的方法和属性来重写子类的原型对象

### 1. 构造函数：子类构造函数中执行父类构造函数

子类构造函数中执行父类构造函数（` Parent.call(this) `）

```js:line-numbers{10}
// 父类
function Parent() {
    this.name = 'Parent'
}
Parent.prototype.say = function() {}

// 子类
function Child() {
    // 调用父类，父类函数执行，绑定this
    Parent.call(this) // 或者使用apply，this 指向 Child
    this.type = 'Child'
}

var child = new Child()

// 测试
console.log(child)
```

结果：

```json
{
    name: "Parent"
    type: "Child"
    [[Prototype]]: {
        constructor: ƒ Child()
        [[Prototype]]: Object
    }
}
```

::: danger 缺点

1. 只能继承父类构造函数通过`this`声明的属性/方法。不能继承父类构造函数原型`prototype`上的属性/方法
2. 父类方法无法复用。每次实例化子类，都要执行父类函数。重新声明父类所定义的方法，无法复用

:::

### 2. 原型链：将父类构造函数的实例赋值给子类构造函数的原型

方法：将父类构造函数的实例赋值给子类构造函数的原型对象（`Child.prototype = new Parent()`）

原因：子类Child.prototype赋值父类的实例new Parent()，当子类实例化时，`子类实例的__proto__`就等于`子类构造函数的prototype`，`子类实例的__proto__`等于`父类的实例`，因此实现了继承

作用：弥补通过构造函数继承的缺点（继承不了父类构造函数原型对象`（Parent.prototype）`上的属性和方法）

```js:line-numbers{12}
// 父类
function Parent() {
    this.name = 'Parent'
    this.play = [1,2,3]
}

// 子类
function Child() {
    this.type = 'Child'
}
// 子类函数原型指向构造函数的实例
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

结果：

```json
Child
    type: "Child"
    [[Prototype]]: Parent
        name: "Parent"
        play: (3) [1, 2, 3]
        [[Prototype]]: Object
            constructor: ƒ Parent()
```

::: danger 缺点

1. 如果实例化两个子类构造函数，其中一个子类构造函数的原型上的方法和属性改变，另一个实例也会相应改变
2. 创建子类实例时，无法向父类构造函数传参

:::

### 3. 组合方式：构造函数+原型链

通过原型链继承来将this、prototype上的属性和方法继承到子类的原型对象上。借用构造函数来继承父类通过this声明的属性和方法在之子类的实例属性上

方法：

- 在子类构造函数中执行父类构造函数
- 然后将父类的构造函数的实例 赋值给 子类的原型对象

```js:line-numbers{8,12}
// 父类
function Parent() {
    this.name = 'Parent'
    this.play = [1,2,3]
}
// 子类
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

1. 父类构造函数执行了两次,造成一定的性能问题
2. 因调用两次父类，导致父类通过`this`声明的属性和方法被生成两份的问题
3. 原型链上下文丢失，子类和父类通过`prototype`声明的属性和方法都存在与子类`prototype`上

:::

### 4. 优化组合方式1: 将父类构造函数的原型赋值给子类构造函数的原型

方法：

- 子类构造函数中执行父类构造函数
- 然后将父类构造函数的原型对象赋值给子类构造函数的原型对象

```js:line-numbers{8,12}
// 父类
function Parent() {
    this.name = 'Parent'
    this.play = [1,2,3]
}
// 子类
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
console.log(s1.constructor) // 子类实例的构造函数是`Parent`，而不是`Child`
```

::: danger 缺点

区分不了一个对象是子类的实例化还是父类的实例化

:::

### 5. 优化组合方式2：通过Object.create()

方法：

- 在子类构造函数中执行父类构造函数
- 然后创建父类构造函数的实例继承赋值给子类构造函数的原型对象
- 最后将子类构造函数赋值给子类构造函数的原型对象的constructor

```js:line-numbers{8,11,12}
// 父类
function Parent() {
    this.name = 'Parent'
    this.play = [1,2,3]
}
// 子类
function Child() {
    Parent.call(this)
    this.type = 'Child'
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

// 测试
var s = new Child()
console.log(s instanceof Child, s instanceof Parent)
console.log(s.constructor) // 子类实例的构造函数是`Child`
```

### 6. 使用es6的extends

```js:line-numbers{11}
// 父类
class Parent {
    constructor(value) {
        this.val = value
    }
    getValue() {
        console.log(this.val)
    }
}
// 子类
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
