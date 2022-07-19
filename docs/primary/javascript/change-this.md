
# 改变this指向

```js
// demo
function fn(a, b) {
    this.xxx = 3
    console.log(a, b, this)
    return a + b
}

fn(1, 2)                     // 1,2,Window
console.log(xxx)

const obj = { m: 0 }

// 改变this指向
// call参数平铺
fn.call(obj, 1, 2)            // 1,2, obj
fn.call(undefined, 1, 2)      // 1,2, Window
fn.call(null, 1, 2)            // 1,2, Window
// apply参数为数组
fn.apply(obj, [1, 2])         // 1,2, obj

// bind返回一个新的函数，为了看到结果，我们去执行下函数
fn.bind(obj)(3, 4)            // 3,4, obj
fn.bind(obj, 5)(3, 4)         // 5,3, obj
fn.bind(obj, 5, 6)(3, 4)      // 5,6, obj
```

## call/apply/bind区别

| api | 函数是否执行 | this指向 | 参数 |
|---|---|---|---|
| call | 执行 | 指向第一个参数 | call(obj, param1,param1...)，参数列表 |
| apply | 执行 | 指向第一个参数 | apply(obj, [param1,param1...])，参数是数组 |
| bind | 返回绑定this之后的新的函数 <br>（新函数内部会调用原来的函数） | 指向第一个参数 | bind(obj, param1,param1...)，参数可以分为多次传入 |

::: tip 提示

如果 obj 为 `undefined` 或 `null`，`this` 指向 `Window`对象

bind()会返回一个新的函数，如果这个返回的新的函数作为构造函数创建一个新的对象，那么此时 this 不再指向传入给 bind 的第一个参数，而是指向用 new 创建的实例

:::

## 自定义call和apply

实现思路：

1. 给obj添加一个临时方法，方法名任意，值为当前函数
2. 通过obj调用这个临时方法，并将接收的参数传入
3. 删除obj上的这个临时方法属性
4. 返回方法的执行结果

call():

@[code](@code-snippet/call.js)

apply():

@[code](@code-snippet/apply.js)

## 自定义bind

实现思路：

1. 返回一个新函数
2. 在新函数内部通过原函数对象的`call`方法来执行原函数，指定`this`为`obj`，指定参数为bind调用的参数和后面新函数调用的参数

@[code](@code-snippet/bind.js)