# 函数 Function

## 函数声明方式

```ts
// 命名函数  => 通过 关键词 function 实现 ，变量提升
function sum(x, y) { 
    return x + y 
}

// 匿名函数 => 表达式实现
let sum = (x, y) => x + y
let sum = function (x,  y) { 
    return x + y 
}
```

为函数参数添加类型：

```ts
// 命名函数
function sum(x: number, y: number) {
    return x + y;
}

// 匿名函数
let sum = (x: number, y: number) => x + y
let sum = function(x: number, y: number) { return x + y }
```

标注函数类型

```ts
type ISum = (x: any, y: any) => any
// 或者对象形式
type ISum = { (x: any, y: any): any }

const sum: ISum = (x: number, y: number) => x + y
```

## 函数的参数

```ts
// 可选参数
function buildName(firstName: string, lastName?: string) {
    return firstName + " " + lastName;
}

// 默认参数
function buildName(firstName: string, lastName: string = "Smith") {
    return firstName + " " + lastName;
}

// 剩余参数
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
```

## 函数的返回值

```ts
function greet():string { // 返回一个字符串
    return "Hello World" 
} 
```