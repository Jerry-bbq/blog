
# JavaScript中的this

this 是执行上下文中的一个属性，它指向最后一次调用这个方法的对象。在实际开发中，this 的指向可以通过四种调用模式来判断。

## 四种调用模式

### 1. 函数调用模式（Function Invocation）

当函数不是作为对象的方法被调用时，this指向全局对象（浏览器中是window，Node.js中是global）。

```js
function greet() {
  console.log(this); // 浏览器中: Window
}

greet(); // 函数调用模式
```

> ⚠️ 注意：在严格模式下（`"use strict"`），this为 `undefined`。

### 2. 方法调用模式（Method Invocation）

当函数作为对象的属性被调用时，this指向调用该方法的对象。

```js
const person = {
  name: 'Alice',
  greet: function() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

person.greet(); // this -> person
```

### 3. 构造器调用模式（Constructor Invocation）

当函数使用 `new` 操作符调用时，this指向新创建的实例对象。

```js
function Person(name) {
  this.name = name;
  console.log(this); // Person { name: 'Alice' }
}

const alice = new Person('Alice');
```

### 4. apply/call/bind调用模式

这三个方法可以显式指定函数执行时的this指向。

```js
const person = { name: 'Alice' };

function greet(greeting) {
  console.log(`${greeting}, I'm ${this.name}`);
}

// apply/call: 立即执行
greet.call(person, 'Hello'); // Hello, I'm Alice
greet.apply(person, ['Hi']); // Hi, I'm Alice

// bind: 返回新函数，需要显式调用
const boundGreet = greet.bind(person);
boundGreet('Hey'); // Hey, I'm Alice
```

```js
// demo
function fn(a, b) {
    this.xxx = 3
    console.log(a, b, this)
    return a + b
}

fn(1, 2)                     // 1, 2, this -> Window
console.log(xxx)

const obj = { m: 0 }

// 改变this指向
// call参数平铺
fn.call(obj, 1, 2)            // 1, 2, this -> obj
fn.call(undefined, 1, 2)      // 1, 2, this -> Window
fn.call(null, 1, 2)            // 1, 2, this -> Window

// apply参数为数组
fn.apply(obj, [1, 2])         // 1, 2, this -> obj

// bind返回一个新的函数，为了看到结果，我们去执行下函数
fn.bind(obj)(3, 4)            // 3, 4, this -> obj
fn.bind(obj, 5)(3, 4)         // 5, 3, this -> obj
fn.bind(obj, 5, 6)(3, 4)      // 5, 6, this -> obj
```

## call/apply/bind区别

| api | 函数是否执行 | this指向 | 参数 | 支持柯里化 | 使用场景 |
|---|---|---|---|---|---|
| call | ✅ | 指向第一个参数 | call(obj, param1,param1...) <br> 参数列表 | ❌ | 简单的this绑定 |
| apply | ✅ | 指向第一个参数 | apply(obj, [param1,param1...]) <br> 参数是数组 | ❌ | 需要传递数组参数 |
| bind | ❌（返回新函数）<br> 返回绑定this之后的新的函数（新函数内部会调用原来的函数） | 指向第一个参数 | bind(obj, param1,param1...) <br> 参数可以分为多次传入 | ✅ | 需要预绑定this

::: tip 提示

如果 obj 为 `undefined` 或 `null`，`this` 指向 `Window`对象

bind()会返回一个新的函数，如果这个返回的新的函数作为构造函数创建一个新的对象，那么此时 this 不再指向传入给 bind 的第一个参数，而是指向用 new 创建的实例

:::

## 实际应用场景

### 1. 借用方法（Method Borrowing）

```js
// 从数组借用方法
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
Array.prototype.join.call(arrayLike, ','); // 'a,b'

// 从对象借用方法
const person = { name: 'Alice' };
const greet = function(greeting) {
  console.log(`${greeting}, I'm ${this.name}`);
};

greet.call(person, 'Hello'); // Hello, I'm Alice
```

### 2. 函数柯里化（Function Currying）

```js
function multiply(a, b) {
  return a * b;
}

const multiplyByTwo = multiply.bind(null, 2);
console.log(multiplyByTwo(5)); // 10

const multiplyByThree = multiply.bind(null, 3);
console.log(multiplyByThree(5)); // 15
```

### 3. 事件处理中的this绑定

```js
class Button {
  constructor() {
    this.text = 'Click me';
    this.element = document.createElement('button');
    this.element.textContent = this.text;
    
    // 使用bind绑定this
    this.element.addEventListener('click', this.handleClick.bind(this));
  }
  
  handleClick() {
    console.log(`Button clicked: ${this.text}`);
  }
}
```

## 自定义实现

### call和apply

实现思路：

1. 给obj添加一个临时方法，方法名任意，值为当前函数
2. 通过obj调用这个临时方法，并将接收的参数传入
3. 删除obj上的这个临时方法属性
4. 返回方法的执行结果

call():

<<< ./code-snippet/call.js

apply():

<<< ./code-snippet/apply.js

### bind

实现思路：

1. 返回一个新函数
2. 在新函数内部通过原函数对象的`call`方法来执行原函数，指定`this`为`obj`，指定参数为bind调用的参数和后面新函数调用的参数

<<< ./code-snippet/bind.js

## 常见误区与陷阱

### 1. 箭头函数中的this

箭头函数没有自己的this，它会继承外层作用域的this。

```js
const person = {
  name: 'Alice',
  greet: () => {
    console.log(this.name); // this指向window，不是person
  }
};

person.greet(); // undefined
```

### 2. 事件处理中的this

```js
const button = document.createElement('button');
button.textContent = 'Click me';

// 问题：this指向button，但事件处理函数中this指向window
button.addEventListener('click', function() {
  console.log(this); // button
});

// 修复：使用bind或箭头函数
button.addEventListener('click', () => {
  console.log(this); // window
});
```

### 3. 闭包与this

```js
const person = {
  name: 'Alice',
  greet: function() {
    const self = this; // 保存this
    setTimeout(function() {
      console.log(`Hello, I'm ${self.name}`); // 使用self
    }, 1000);
  }
};

person.greet();
```

## 总结

| 概念 | 关键点 |
| --- | --- |
| this指向 | 由函数调用方式决定，而非定义位置 |
| 四种调用模式 | 函数调用、方法调用、构造器调用、apply/call/bind |
| call/apply/bind | 用于显式控制函数的this指向 |
| 箭头函数 | 没有自己的this，继承外层作用域的this |
| 最佳实践 | 1. 用bind处理事件处理函数<br>2. 用箭头函数避免this丢失<br>3. 用Symbol避免属性冲突 |


在ES6+中，使用箭头函数可以大大减少this指向问题，但理解this的工作原理仍然是掌握JavaScript的关键。