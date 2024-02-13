
# 设计模式

## 设计模式原则

- 单一职责原则
- 开放/封闭原则
- 里式替换原则
- 接口隔离原则
- 依赖倒转原则

## 设计模式

## 创建型

### 简单工厂模式
### 工厂方法模式
### 抽象工厂模式
### 单例模式

保证一个类仅有一个实例，并提供一个访问它的全局访问点

### 生成器模式
### 原型模式

## 结构型

### 外观模式
### 适配器模式
### 桥接模式
### 代理模式
### 装饰者模式
### 享元模式外观模式
### 适配器模式
### 桥接模式
### 代理模式
### 装饰者模式
### 享元模式

## 行为型

### 职责链模式
### 命令模式
### 解释器模式
### 迭代器模式
### 中介者模式
### 备忘录模式
### 发布订阅模式又叫观察者模式

它定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知。在JavaScript 开发中，我们一般用事件模型来替代传统的发布—订阅模式。

事件：

```js
document.body.addEventListener( 'click', function(){ 
    alert(2); 
}, false ); 

document.body.click(); // 模拟用户点击
```

通用模型：

```js
var events = {
    clientList: [],
    listen: function (key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn); // 订阅的消息添加进缓存列表
    },
    trigger: function () {
        var key = Array.prototype.shift.call(arguments), // (1); 
            fns = this.clientList[key];
        if (!fns || fns.length === 0) { // 如果没有绑定对应的消息
            return false;
        }
        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments); // (2) // arguments 是 trigger 时带上的参数
        }
    }
};

var installEvent = function (obj) {
    for (var i in events) {
        obj[i] = events[i];
    }
};

// 测试

var salesOffices = {};
installEvent(salesOffices);
salesOffices.listen('squareMeter88', function (price) { // 小明订阅消息
    console.log('价格= ' + price);
});
salesOffices.listen('squareMeter100', function (price) { // 小红订阅消息
    console.log('价格= ' + price);
});
salesOffices.trigger('squareMeter88', 2000000); // 输出：2000000 
salesOffices.trigger('squareMeter100', 3000000); // 输出：3000000
```

### 状态模式
### 策略模式

```js
var calculateBonus = function( performanceLevel, salary ){ 
    if ( performanceLevel === 'S' ){ 
        return salary * 4; 
    } 
    if ( performanceLevel === 'A' ){ 
        return salary * 3; 
    } 
    if ( performanceLevel === 'B' ){ 
        return salary * 2; 
    } 
}; 

calculateBonus( 'B', 20000 ); // 输出：40000 
calculateBonus( 'S', 6000 ); // 输出：24000
```

策略模式：

```js
var strategies = { 
    "S": function( salary ){ 
        return salary * 4; 
    }, 
    "A": function( salary ){ 
        return salary * 3; 
    }, 
    "B": function( salary ){ 
        return salary * 2;
    } 
}; 

var calculateBonus = function( level, salary ){ 
    return strategies[ level ]( salary ); 
}; 
console.log( calculateBonus( 'S', 20000 ) ); // 输出：80000 
console.log( calculateBonus( 'A', 10000 ) ); // 输出：30000
```

应用场景：

- 简化ifelse
- 表单校验

### 模板方法模式
### 访问者模式

## 参考

- [design patterns](https://refactoringguru.cn/design-patterns/factory-method)
- [参考](https://juejin.cn/post/6844903795017646094)