# 工具类型

TypeScript 提供了多种实用程序类型来促进常见的 **类型转换**

## Awaited<Type\>

- 获取 Promise 类型的返回值类型

## Partial<Type\>

- 将类型的**所有属性**转换为**可选属性**

```ts
// 定义一个用户类型接口
interface User {
    name: string;
    age: number;
}

// 会报错，因为没有age属性
const user:User = {
    name: "Alice",
}

// 使用Partial将类型的所有属性转换为可选属性
const user: Partial<User> = {
    name: "Alice",
}
```


## Required<Type\>

- 将类型的**所有属性**变成**必选属性**

```ts
// 定义一个用户类型接口，属性都是可选的
interface User {
    name?: string;
    age?: number;
    gender?: "male" | "female";
}

const user: Required<User> = {
    name: "Alice",
    age: 30,
    gender: "female"
}
```

## Readonly<Type\>

- 将类型的**所有属性**变成**只读属性**

```ts
// 定义一个用户类型接口
interface User {
    name: string;
    age: number;
    gender?: "male" | "female";
}

let user: Readonly<User> = {
    name: "Alice",
    age: 30,
    gender: "female"
}
// 不能修改属性值
user.name = "Bob"; // error: Cannot assign to 'name' because it is a read-only property.
```

## Record<Keys, Type\>

- 将对象 **所有属性的值** 转化为 T 类型（需要的类型），用` Record<K extends keyof any, T>`

```ts

type Property = 'user1' | 'user2'
// 将Property的所有属性的值转化为string类型
type User = Record<Property, string>

const user: User = {
    user1: "Alice",
    user2: "Bob"
}
```

## Pick<Type, Keys\>

- 从类型中挑出一些属性，并返回一个新的类型

```ts
// 定义一个用户类型接口
interface User {
    name: string;
    age: number;
    gender: "male" | "female";
}

// 从User类型中挑出name和age属性    
type UserInfo = Pick<User, "name" | "age">; // { name: string; age: number; }
// 即可进行赋值使用
const user: UserInfo = {
    name: "Alice",
    age: 30
}
```

## Omit<Type, Keys\>

- 从类型中移除一些属性，，并返回一个新的类型，用 `Omit<T, K>`，表示从T中取出去除K的其他所有属性

```ts
// 定义一个用户类型接口
interface User {
    name: string;
    age: number;
    gender: "male" | "female";
}

// 从User类型中移除age、gender属性
type UserInfo = Omit<User, "age" | "gender">; // { name: string; }
// 即可进行赋值使用
const user: UserInfo = {
    name: "Alice"
}
```


## Exclude<UnionType, ExcludedMembers\>

- 移除联合类型中某些类型，用 `Exclude<T,U>`，表示从T中移除U，，并返回一个新的类型

```ts
// 移除字符串类型
type U = Exclude<"string" | "number" | "boolean", "string">; // "number" | "boolean"
```

## Extract<Type, Union\>

- 提取联合类型某些类型，用 `Extract<T,U>`，表示从T中提取U，并返回一个新的类型

```ts
// 提取函数类型
type U = Extract<string | number | (() => void), Function>; // () => void
```


## NonNullable<Type\>

- 去除类型中的null和undefined类型，并返回一个新的类型

```ts
// 去除null和undefined
type U = NonNullable<string[] | null | undefined>; // string[]
```

## Parameters<Type\>

- 获取函数类型的参数类型，已元组类型返回

```ts
// 获取函数的参数类型所组成的元组类型
type U = Parameters<(a: number, b: string) => void>; // [number, string]
```

## ConstructorParameters<Type\>


## ReturnType<Type\>

- 获取函数类型的返回值类型

```ts
type Func = (value: string) => string;

// 获取函数的返回值类型并赋值
type U = ReturnType<Func> = "1"; // string
```

## InstanceType<Type\>


## ThisParameterType<Type\>


## OmitThisParameter<Type\>


## ThisType<Type\>

