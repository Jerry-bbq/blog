# 枚举 Enum

### 数字枚举

```ts
enum Direction {
    Up = 1,
    Down, // 自动增长 1
    Left, // 2
    Right // 3
}

enum Direction {
    Up,
    Down,
    Left,
    Right,
}
```

使用枚举很简单：通过枚举的属性来访问枚举成员，和枚举的名字来访问枚举类型：

```ts
enum Response {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Response): void {
    // ...
}

respond("Princess Caroline", Response.Yes)
```

### 字符串枚举

```ts
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
```

### 异构枚举

```ts
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}
```

从技术的角度来说，枚举可以混合字符串和数字成员,除非你真的想要利用JavaScript运行时的行为，否则我们不建议这样做。