# 接口 Interface

```ts
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```

## 属性

```ts
interface Person {
  readonly name: string;
  age?: string;
  (source: string, subString: string): boolean;
}
```

### 可选属性 ?

- 接口里的属性不全都是必需的

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black"});
```

### 只读属性 readonly

- 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性:

```ts
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
```

`ReadonlyArray<T>`类型，它与`Array<T>`相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：

```ts
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
```

### 函数类型

接口除了能够描述`对象`，也可以描述`函数类型`

为了使用接口表示函数类型，我们需要给接口定义一个`调用签名`。 它就像是一个`只有参数列表和返回值类型`的函数定义。参数列表里的每个参数都需要名字和类型。

```ts
// 调用签名
interface SearchFunc {
  (source: string, subString: string): boolean;
}

// 使用
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}
```

### 可索引的类型

- 可索引类型具有一个`索引签名`，它描述了对象索引的类型，还有相应的索引返回值类型

```ts
// 索引签名
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
```

## 类类型-implements

```ts
// 接口
interface ClockInterface {
    currentTime: Date;
}
// 类
class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
```

在接口中描述方法，在类里面实现，如下面的setTime方法：

```ts
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
```

## 继承接口-extends

和类一样，接口也可以相互继承

```ts
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
```

一个接口可以继承多个接口，创建出多个接口的合成接口。

```ts
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```

## 混合类型

一个对象可以同时做为函数和对象使用，并带有额外的属性。

```ts
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

## 接口继承类

- 当接口继承了一个类类型时，它会继承类的成员但不包括其实现
- 接口同样会继承到类的private和protected成员

```ts
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
    select() { }
}

class Location {

}

```

## 类型别名-type

```ts
type UserName = string || undefined;

interface User {
    name: userName;
}

const userName: UserName = 'Gene';
```

::: tip
`interface` 和 `type` 的区别

在typescript中，type和interface都是用来定义类型的关键字，但是它们有一些关键区别和适用场景。

1. 基本功能
- interface
  - 专用于定义对象的结构
  - 可以被继承和扩展（通过 `extends` ）
  - 支持实现类的契约（通过 `implements` ）
  - 更倾向于定义明确的数据结构
- type
  - 更通用，除了定义对象结构，还可以用于创建联合类型、交叉类型、基本类型别名等
  - 不支持直接扩展，但是可以用通过交叉类型（`&`）来实现类似扩展的功能
  - 用于更灵活或者复杂的类型定义

2. 语法差异
-  interface
   
   ```ts
   interface User {
     name: string;
     age: number;
   }
   ```
-  type
  
   ```ts
   type User {
     name: string;
     age: number;
   }
   ```
   从语法上看，定义对象结构的方式几乎相同
3. 扩展方式
   - interface 支持继承

   ```ts
   interface User {
     name: string;
   }
   interface Admin extends User {
     role: string;
   }
   ```
   - type 使用交叉类型来扩展

   ```ts
   type User {
     name: string;
   }
   type Admin = User & {
     role: string;
   }
   ```
4. 实现类的契约
   - interface 可以用于类的 implements
   - type 不能直接用于类的 implements
5. 可用场景的差异
   - type 更灵活
     - 可以定义基本类型的别名
     ```ts
     type Name = string | number;
     ```
     - 可以结合泛型使用
     ```ts
     type Container<T> = T[];
     ```
   - interface 专注于对象的形状
     - 定于接口更明确，有利于工具提示和自动补全
     - 更贴合面向对象编程中的接口概念
6. 合并声明
- interface 支持声明合并
  ```ts
   interface User = {
    name: string;
    }

    interface User = {
    age: number;
    }
  ```

- type 不支持声明合并
 
 ```ts
 type User = {
   name: string;
 }

type User = {
   age: number;
 }
 ```

1. 推荐使用场景
- 使用 interface
  - 当需要定义对象的结构或者类的契约时
  - 当需要利用继承和声明合并功能时
  - 在团队中倾向于面向对象编程风格时
-  使用 type
   -  当需要定义复杂类型（联合类型、交叉类型、类型别名）等
   -  当需要灵活性和更复杂的泛型场景时

总结：

- 功能上： `type` 比 `interface` 更强大，但也更灵活，适合更复杂的场景
- 结构定义： `interface` 更加直观和语义化，适合定义对象的结构
- 风格建议：如果是定义简单的对象类型或者接口，优先考虑 `interface` ；如果需要更复杂的类型定义，使用 `type`
:::