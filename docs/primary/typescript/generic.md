# 泛型 Generic

可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据，类型变量，它是一种特殊的变量，只用于表示类型而不是值

```ts
function identity(arg: any): any {
    return arg;
}
```

使用any类型会导致这个函数可以接收任何类型的arg参数，这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。

因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了**类型变量**，它是一种特殊的变量，**只用于表示类型而不是值**。

```ts
function identity<T>(arg: T): T {
    return arg;
}
```

使用泛型函数：

```ts
// 第一种：这里我们明确的指定了T是string类型，并做为一个参数传给函数，使用了<>括起来而不是()。
let output = identity<string>("myString");  // type of output will be 'string'

// 第二种：利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型
let output = identity("myString");  // type of output will be 'string'
```

注意我们没必要使用尖括号（<>）来明确地传入类型；编译器可以查看myString的值，然后把T设置为它的类型。 类型推论帮助我们保持代码精简和高可读性。

### 泛型类型

泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样

```ts
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;
// 使用不同的泛型参数名
let myIdentity: <U>(arg: U) => U = identity;
// 使用带有调用签名的对象字面量来定义泛型函数
let myIdentity: {<T>(arg: T): T} = identity;
```

### 泛型接口

```ts
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

### 泛型类

泛型类看上去与泛型接口差不多。 泛型类使用（ <>）括起泛型类型，跟在类名后面。

```ts
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
```