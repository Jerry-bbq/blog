# 基础类型

## 1.string

```ts
// 字符串
let message: string = "Hello, TypeScript!";

// 字符串模版
let name: string = "Alice";
let greeting: string = `Hello, ${name}! Welcome to TypeScript.`;
```

## 2.boolean

```ts
let isDone: boolean = false;
```

## 3.number

- 支持`十进制`、`十六进制`、`二进制`和`八进制`

```ts
// 十进制
let decLiteral: number = 6;
let temperature: number = 36.5;
// 十六进制
let hexLiteral: number = 0xf00d;
// 二进制
let binaryLiteral: number = 0b1010;
// 八进制
let octalLiteral: number = 0o744;
```

## 4.array

- 两种方式表示：`type[]`、`Array<type>`

```ts
// 第一种定义方式：
let list: number[] = [1, 2, 3];
let list: any[] = [1, '2', {}, true];
// 第二种定义方式：数组泛型，Array<元素类型>
let list: Array<number> = [1, 2, 3];

```

## 5.tuple

- **元组** 表示已知数量和类型的`数组`，适合表示固定结构的数据

```ts
let person: [string, number] = ["Alice", 25];
```

## 6.enum

- **枚举** 用来定义一组命名常量。默认情况下枚举的值从 `0` 开始递增。

```ts
enum Color {
    Red, 
    Green, 
    Blue
}
let c: Color = Color.Green;

enum Color {
    Red = 1, 
    Green, 
    Blue
}
let c: Color = Color.Green;

enum Color {
    Red = 1, 
    Green = 2, 
    Blue = 4
}
let c: Color = Color.Green;

enum Color {
    Red = 1, 
    Green, 
    Blue
}
let colorName: string = Color[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2
```

## 7.any

- `any` 表示任何类型。
- 适合不确定数据类型的情况，但使用时需谨慎，因为 `any` 会绕过类型检查

```ts
let notSure: any = 4;
notSure = "maybe a string instead";
```

##  8.void

- 用于没有返回值的函数
- 声明变量时，类型 `void` 意味着只能赋值 `null` 或 `undefined`

```ts
function warnUser(): void {
    console.log("This is my warning message");
}
```

- 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：

```ts
let unusable: void = undefined;
```


## 9.null

- 表示"空值"
- 在默认情况下，它是所有类型的子类型，但可以通过设置 `strictNullChecks` 严格检查

```ts
let empty: null = null;
```

## 10.undefined

- 表示"未定义"
- 在默认情况下，它是所有类型的子类型，但可以通过设置 `strictNullChecks` 严格检查

```ts
let notAssigned: undefined = undefined;
```

##  11.never

- never类型表示的是那些永不存在的值的类型
- never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
- 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
- never类型是任何类型的子类型，也可以赋值给任何类型
- 没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

```ts
// 返回never的函数必须存在无法达到的终点
function throwError(message: string): never {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

## 12.object

object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。

使用object类型，就可以更好的表示像Object.create这样的API。例如：

```ts
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

## 13.union

- 示一个变量可以是多种类型之一。通过 | 符号实现。

```ts
let id: string | number;
id = "123";
id = 456;
```

## 14.unknown

- 与 any 类似，但更严格。必须经过类型检查后才能赋值给其他类型变量。

```ts
let value: unknown = "Hello";
if (typeof value === "string") {
  let message: string = value;
}
```

## 15.类型断言

- 类型断言可以让开发者明确告诉编译器变量的类型，常用于无法推断的情况。可以使用 as 或尖括号语法。

```ts
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

##  16.字面量类型

- 字面量类型可以让变量只能拥有特定的值，用于结合联合类型定义变量的特定状态。

```ts
let direction: "up" | "down" | "left" | "right";
direction = "up";
```