
# 作用域和闭包

## 作用域

### 什么是作用域

作用域（Scope）是在运行时代码中的某些特定部分中变量、函数和对象的可访问性。换句话说，作用域决定了代码区块中变量和其他资源的可见性

- 作用域是一个变量和函数的作用范围
- JS中函数内声明的所有变量在函数体内始终是可见的
- 在ES6前有**全局作用域**和**局部作用域**，但是没有块级作用域（catch只在其内部生效）
- 局部变量的优先级高于全局变量

::: tip

- 函数提升优先于变量提升，函数提升会把整个函数挪到作用域顶部，变量提升只会把声明挪到作用域顶部
- var 存在提升，我们能在声明之前使用。let、const 因为暂时性死区的原因，不能在声明前使用
- var 在全局作用域下声明变量会导致变量挂载在 window 上，其他两者不会
- let 和 const 作用基本一致，但是后者声明的变量不能再次赋值

:::

### 全局作用域和函数作用域

函数作用域中定义的变量，只能在函数中调用，外界无法访问

```js
function func(){
  var n = 999;
}
console.log(n)

// n is not defined
```

### 块级作用域

let和const命令来进行块级作用域的声明

## 作用域链ScopeChain

当访问一个变量时，解释器会首先在当前作用域查找标示符，如果没有找到，就去父作用域找，直到找到该变量的标示符或者不在父作用域中，这就是作用域链。

作用域链和原型继承查找时的区别：如果去查找一个普通对象的属性，但是在当前对象和其原型中都找不到时，会返回undefined；但查找的属性在作用域链中不存在的话就会抛出ReferenceError。

### 什么是自由变量

### 什么是作用域链

## 执行上下文

作用域并不是执行上下文

JavaScript属于解释型语言，JavaScript的执行分为：解释和执行两个阶段,这两个阶段所做的事并不一样：

### 解释阶段

- 词法解释
- 语法解释
- 作用域规则确定

### 执行阶段

- 创建执行上下文
- 执行函数代码
- 垃圾回收

作用域和执行上下文之间最大的区别是： 执行上下文在运行时确定，随时可能改变；作用域在定义时就确定，并且不会改变。

同一个作用域下，不同的调用会产生不同的执行上下文环境，继而产生不同的变量的值。

## 闭包

闭包简单来说就是函数嵌套函数，内部函数引用来外部函数的变量，从而导致垃圾回收机制没有把当前变量回收掉，这样的操作带来了内存泄漏的影响，当内存泄漏到一定程度会影响你的项目运行变得卡顿等等问题。因此在项目中我们要尽量避免内存泄漏。

### 定义

函数执行后返回结果是一个内部函数，并被外部变量所引用，如果内部函数持有被执行函数作用域的变量，即形成了闭包（closure）。

可以在内部函数访问到外部函数作用域。使用闭包，一可以读取函数中的变量，二可以将函数中的变量存储在内存中，保护变量不被污染。而正因闭包会把函数中的变量值存储在内存中，会对内存有消耗，所以不能滥用闭包，否则会影响网页性能，造成内存泄漏。当不需要使用闭包时，要及时释放内存，可将内层函数对象的变量赋值为null。

### 原理

函数执行分成两个阶段：

- 在预编译阶段，如果发现内部函数使用了外部函数的变量，则会在内存中创建一个“闭包”对象并保存对应变量值，如果已存在“闭包”，则只需要增加对应属性值即可。
- 执行完后，函数执行上下文会被销毁，函数对“闭包”对象的引用也会被销毁，但其内部函数还持用该“闭包”的引用，所以内部函数可以继续使用“外部函数”中的变量
  
利用了函数作用域链的特性，一个函数内部定义的函数会将包含外部函数的活动对象添加到它的作用域链中，函数执行完毕，其执行作用域链销毁，但因内部函数的作用域链仍然在引用这个活动对象，所以其活动对象不会被销毁，直到内部函数被烧毁后才被销毁。

### 优点

- 可以从内部函数访问外部函数的作用域中的变量，且访问到的变量长期驻扎在内存中，可供之后使用
- 避免污染全局变量
- 把变量存到独立的作用域，作为私有成员存在

### 缺点

- 对内存消耗有负面影响。因内部函数保存了对外部变量的引用，导致无法被垃圾回收，增大内存使用量，所以使用不当会导致**内存泄漏**
- 对处理速度具有负面影响。闭包的层级决定了引用的外部变量在查找时经过的作用域链长度
- 可能获取到意外的值(captured value)

### 应用

闭包的定义其实很简单:函数 A 内部有一个函数 B，函数 B 可以访 问到函数 A 中的变量，那么函数 B 就是闭包。

#### 应用一：模块封装

```js
var Driver = (function () {
    // 这样声明为模块私有变量，外界无法直接访问
    var foo = 0;

    function Driver() {}
    Driver.prototype.car = function car() {
        return foo;
    };
    return Driver;
}());
```

#### 应用二：在循环中创建闭包，防止取到意外的值

```js
// 问题
for (var i = 1; i <= 5; i++) { 
    setTimeout(function() {
        console.log(i)
    }, i * 1000)
}
// 打印5次 6
```

方案一：使用闭包

```js
for (var i = 1; i <= 5; i++) { 
    (function(j) {
        setTimeout(function() { console.log(j)}, j *1000)
    })(i)
}
// 打印 1 2 3 4 5
```

方案二：setTimeout多穿一个参数

```js
for (var i = 1; i <= 5; i++) { 
    setTimeout(function(j) {
         console.log(j)
    },i * 1000, i) 
}
// 打印 1 2 3 4 5
```

方案三：使用let

```js
for (let i = 1; i <= 5; i++) { 
setTimeout(function() {
    console.log(i)
  }, i * 1000)
}
// 打印 1 2 3 4 5
```