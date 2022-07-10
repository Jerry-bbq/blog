# 箭头函数与普通函数的区别

## 语法上更简洁

```js
// 普通函数
function add(a, b) {
    return a + b
}
// 箭头函数
const add = (a, b) => a + b
```

## 不能作为构造函数使用

箭头函数是匿名函数，不能作为构造函数，不能使用new操作符

```js
let arrowFn = () => {}
function commonFn() {}

let newFn = new arrowFn() // Uncaught TypeError: fn is not a constructor
let newCommonFn = new commonFn() // commonFn {}
```

## 没有原型对象

箭头函数没有原型对象`prototype`

```js
let arrowFn = () => {}
function commonFn() {}

console.log(arrowFn.prototype) // undefined
console.log(commonFn.prototype) // {constructor: ƒ}
```

## 没有自己的this

- 箭头函数没`this`，它里面的`this`**继承函数所处的上下文中的this**（通过查找作用域链来确定`this`的值）
- 使用`call/apply/bind` 也**无法改变**箭头函数的`this`指向
- 普通函数中的`this`指向的是调用它的对象，箭头函数体内的this对象，就是定义该函数时所在的作用域指向的对象，而不是使用时所在的作用域指向的对象

```js
let obj = {
    stuName: 'jack',
    printName: () => {
        // 指向window对象
        // 使用call无法改变this指向，仍然指向window对象
        console.log(this, 'printName') 
        console.log(this.stuName) // undefined
    },
    printName2: function() {
        // 指向当前对象obj
        // 使用call可以改变this指向对象 {stuName: 'luck'}
        console.log(this, 'printName2')
        console.log(this.stuName) // jack
    },
    printName3: function() {
        return () => {
            console.log(this, 'printName3') // 作用域链查找 指向当前对象obj
        }
    },
}

obj.printName()
obj.printName2()
obj.printName3()()
obj.printName2.call({stuName: 'luck'})
obj.printName.call({stuName: 'luck'})
```

## 没有arguments

箭头函数中没有arguments（类数组），取而代之使用rest参数解决

```js
let arrowFn = (params) => { console.log(arguments) }
function commonFn(params) { console.log(arguments) }

arrowFn(1,2,3) // Uncaught ReferenceError: arguments is not defined
commonFn(1,2,3) // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// 解决
let arrowFn = (...params) => { console.log(params) }
arrowFn(1,2,3) // [1, 2, 3]
```