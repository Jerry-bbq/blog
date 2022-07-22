# 总结

大厂基本上都是从自我介绍开始，询问项目的情况，比如你在项目中是一个什么角色，在项目之中有没有遇到什么问题，是怎么解决的，项目中使用的第三方包是怎么一个原理，你有没有去研究过等，基本上是你说到哪就会问到哪，这其实是对面试者知识体系的一个考察，所以说准备大厂可以参考这个思路来准备

## 自我介绍

面试官你好，我叫xx，今天来面试贵公司的前端开发工程师岗位。我是16年开始从事前端开发，目前已有五年多的时间，有三年多的vue项目开发经验。在上家公司的「MDV云管家」产品线担任敏捷开发迭代负责人，根据不同迭代版本进行相应的需求评审和项目排期和开发等工作。然后也输出了uniapp开发app的踩坑文档以及自定义仪表盘组件。平常喜欢逛一些技术社区来丰富自己的技术，也有自己的开源项目，比如常用函数工具库，以此来做一些技术沉淀。以上是我的个人介绍，谢谢

离职原因：

- 技术栈落后，个人技术提升受限，没有晋升的空间
- 换行业，公司所在的行业发展前景出现问题
- 前端团队管理不够理想和专业，感到失望
  - 持续化部署jekins项目不加lock文件
  - 文档管理混乱，直接在群公告里通知，不做团队技术沉淀
  - 一个项目在另一个项目的分支下开发

## js

### 你用过哪些es6语法

let const、变量的解构赋值、箭头函数、Set和Map数据结构、Promise对象、async函数、遍历器、Generator函数、Class

### var、let、const的区别 

| 关键字 | 是否可以重新声明 | 是否可以修改 | 变量提升 |
| ------ | ------- | ---- | ------- |
| var | 是 | 是 | 全局作用域或函数作用域，并赋值undefined |
| let | 是 | 是 | 声明也被提升到顶部，但是没有初始化 |
| const | 否 | 否  | 声明也被提升到顶部，但是没有初始化 |

const定义的基本类型是不可以重新声明和修改的，但是定义的引用类型，数据是可以修改的。

为什么const定义的引用类型的数据是可以修改的？

const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了


### 箭头函数和普通函数的区别

- 语法上更简洁
- 箭头函数是匿名函数，不能作为构造函数，不能使用new操作符
- 箭头函数没有原型对象prototype
- 箭头函数没this，它里面的this继承函数所处的上下文中的this（通过查找作用域链来确定this的值）使用call/apply/bind 也无法改变箭头函数的this指向。普通函数中的this指向的是**调用**它的对象，箭头函数体内的this对象，就是**定义**该函数时所在的作用域指向的对象，而不是使用时所在的作用域指向的对象

### for...in和for...of的区别

主要区别在于它们的迭代方式不同：

- for...in语句以任意顺序迭代对象的可枚举属性（包括它的原型链上的可枚举属性）
- for...of 语句遍历可迭代对象定义要迭代的数据（Array，Map，Set，String，TypedArray，arguments 对象）
- for in 一般用来遍历对象的key、for of 一般用来遍历数组的value

### 说说你Promise对象的理解

- Promise 概括来说是对异步的执行结果的描述对象
- Promise 的状态只有3种：pending、fulfilled、rejected；Promise 的状态一旦改变则不会再改变

### Promise的三个状态，给了一道题判断状态

### Promise.all的实现原理

- 接收一个 Promise 实例的数组或具有 Iterator 接口的对象作为参数
- 这个方法返回一个新的 promise 对象，
- 遍历传入的参数，用Promise.resolve()将参数"包一层"，使其变成一个promise对象
- 参数所有回调成功才是成功，返回值数组与参数顺序一致
- 参数数组其中一个失败，则触发失败状态，第一个触发失败的 Promise 错误信息作为 Promise.all 的错误信息。

接受一组 Promise（或者一个可迭代的对象），并返回一个Promise

```js
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let result = []
        let count = 0
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(v => {
                result[i] = v
                count++
                // 每个对象都成功
                if (count === promises.length) {
                    resolve(result)
                }
            }, r => {
                reject(r)
            })
        }
    })
}
```

### Promise.race的实现原理

哪个promise先被处理完，就返回哪个的结果，可以是reject也可以是resolve

```js
Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(v => {
                resolve(v)
            }, r => {
                reject(r)
            })
        }
    })
}
```

### 说说你对async/await的理解

- async/await 就是 Generator 的语法糖，使得异步操作变得更加方便
- async 函数就是将 Generator 函数的星号（*）替换成 async，将 yield 替换成await
- 返回值是Promise，async函数的返回值是 Promise 对象，Generator的返回值是 Iterator，Promise 对象使用起来更加方便

### async/await与promise的区别

### Set和Map的区别

`Set`是一种叫做 **集合** 的数据结构，`Map`是一种叫做 **字典** 的数据结构

- 集合：是由一堆无序的、相关联的，且不重复的内存结构【数学中称为元素】组成的组合
- 字典：是一些元素的集合。每个元素有一个称作key 的域，不同元素的key 各不相同
- 共同点：集合、字典都可以存储不重复的值
- 不同点：集合是以 **[value, value]** 的形式存储元素，字典是以 **[key, value]** 的形式存储

### 讲讲原型链

- 当访问一个对象的某个属性时，会先在这个对象本身属性上查找
- 如果没有找到，则会去该对象的`__proto__`上查找
- 如果还没有找到就会再在`__proto__`的`__proto__`中查找,最终会查到`Object.prototype`上
- 如果没有找到会返回`undefined`

### 讲讲作用域链

- 当查找变量的时候，会先从当前上下文的变量对象中查找
- 如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找
- 一直找到全局上下文的变量对象，也就是全局对象
- 这样由多个执行上下文的变量对象构成的链表就叫做作用域链。

### new操作符的实现原理

1. 创建一个空对象实例
2. 将实例的`__proto__`指向构造函数的原型`constructor.prototype`（继承构造函数的原型对象）
3. 执行构造函数，绑定`this`指向实例，实例作为`this`的上下文）
4. 如果构造函数的执行结果是一个对象，则返回这个对象，否则，返回实例对象

```js
const _new = function(fn, ...arg) {
    const obj = Object.create(fn.prototype)
    const res = fn.call(obj, arg)
    if (typeof res === 'object'){
        return res
    } else {
        return obj
    }
}
```

### typeof和instanceof的区别

- typeof是通过检测变量值的 类型标签（type tag） 来检测数据类型，返回数据类型字符串
- instanceof检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上，返回Boolean值。

### 讲讲事件循环

### 宏任务与微任务

常见的宏任务：

- script (可以理解为外层同步代码)
- setTimeout、setInterval
- UI rendering/UI事件
- postMessage、MessageChannel
- setImmediate、I/O（Node.js）

常见的微任务：

- Promise.then
- MutaionObserver
- Object.observe（已废弃；Proxy 对象替代）
- process.nextTick（Node.js）

### 防抖节流的理解以及应用场景

- 防抖debounce：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
  - 场景：按钮提交场景、搜索框联想场景
- 节流throttle：规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
  - 场景：拖拽场景、缩放场景（监控浏览器resize）
```js
function debounce(callback, delay = 200) {
  let timer = null
  return (...arg) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback.apply(this, arg)
    }, delay)
  }
}

function throttle(callback, delay = 200) {
  let flag = true
  return (...args) => {
    if (!flag) return
    flag = false
    setTimeout(() => {
      callback.apply(this, args)
      flag = true
    }, delay)
  }
}
```

### call、apply、bind的区别

| api | 函数是否执行 | this指向 | 参数 |
|---|---|---|---|
| call | 执行 | 指向第一个参数 | call(obj, param1,param1...)，参数列表 |
| apply | 执行 | 指向第一个参数 | apply(obj, [param1,param1...])，参数是数组 |
| bind | 返回绑定this之后的新的函数 <br>（新函数内部会调用原来的函数） | 指向第一个参数 | bind(obj, param1,param1...)，参数可以分为多次传入|

::: warning 提示

如果 obj 为 `undefined` 或 `null`，`this` 指向 `Window`对象

bind()会返回一个新的函数，如果这个返回的新的函数作为构造函数创建一个新的对象，那么此时 this 不再指向传入给 bind 的第一个参数，而是指向用 new 创建的实例

:::

### 讲讲闭包

[参考](https://juejin.cn/post/6937469222251560990#heading-5)

闭包的定义是：指有权访问另一个函数作用域中变量的函数

应用场景：

- setTimeout/setInterval
- 防抖节流的实现

容易导致内存泄漏。闭包会携带包含其它的函数作用域，因此会比其他函数占用更多的内存。过度使用闭包会导致内存占用过多，所以要谨慎使用闭包。

### cookie与localstorage的区别，cookie为什么存用户的信息


### 单点登录，共享cookie

什么是单点登录？

单点登录（Single Sign On），简称为 SSO，SSO的定义是在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统

SSO 一般都需要一个独立的认证中心（passport），子系统的登录均得通过passport，子系统本身将不参与登录操作

比如四个系统，分别是Application1、Application2、Application3、和SSO，当Application1、Application2、Application3需要登录时，将跳到SSO系统，SSO系统完成登录，其他的应用系统也就随之登录了

同域名下的单点登录

ookie的domin属性设置为当前域的父域，并且父域的cookie会被子域所共享。path属性默认为web应用的上下文路径

利用 Cookie 的这个特点，没错，我们只需要将Cookie的 domain属性设置为父域的域名（主域名），同时将 Cookie 的path属性设置为根路径，将 Session ID（或 Token）保存到父域中。这样所有的子域应用就都可以访问到这个Cookie

不过这要求应用系统的域名需建立在一个共同的主域名之下，如 tieba.baidu.com 和 map.baidu.com，它们都建立在 baidu.com 这个主域名之下，那么它们就可以通过这种方式来实现单点登录

不同域名下的单点登录（-）

如果是不同域的情况下，Cookie是不共享的，这里我们可以部署一个认证中心，用于专门处理登录请求的独立的 Web 服务

用户统一在认证中心进行登录，登录成功后，认证中心记录用户的登录状态，并将 token 写入 Cookie（注意这个 Cookie 是认证中心的，应用系统是访问不到的）

应用系统检查当前请求有没有 Token，如果没有，说明用户在当前系统中尚未登录，那么就将页面跳转至认证中心

由于这个操作会将认证中心的 Cookie 自动带过去，因此，认证中心能够根据 Cookie 知道用户是否已经登录过了

如果认证中心发现用户尚未登录，则返回登录页面，等待用户登录

如果发现用户已经登录过了，就不会让用户再次登录了，而是会跳转回目标 URL ，并在跳转前生成一个 Token，拼接在目标 URL 的后面，回传给目标应用系统

应用系统拿到 Token 之后，还需要向认证中心确认下 Token 的合法性，防止用户伪造。确认无误后，应用系统记录用户的登录状态，并将 Token 写入 Cookie，然后给本次访问放行。（注意这个 Cookie 是当前应用系统的）当用户再次访问当前应用系统时，就会自动带上这个 Token，应用系统验证 Token 发现用户已登录，于是就不会有认证中心什么事了

此种实现方式相对复杂，支持跨域，扩展性好，是单点登录的标准做法

不同域名下的单点登录(二)

可以选择将 Session ID （或 Token ）保存到浏览器的 LocalStorage 中，让前端在每次向后端发送请求时，主动将LocalStorage的数据传递给服务端

这些都是由前端来控制的，后端需要做的仅仅是在用户登录成功后，将 Session ID （或 Token ）放在响应体中传递给前端

单点登录完全可以在前端实现。前端拿到 Session ID （或 Token ）后，除了将它写入自己的 LocalStorage 中之外，还可以通过特殊手段将它写入多个其他域下的 LocalStorage 中



### 深浅拷贝原理

浅拷贝是拷贝引用类型的引用地址

深拷贝是引用地址和值都一起拷贝一份

### ES6的扩展运算符，操作一个对象是浅拷贝还是深拷贝

如果只是一层数组或是对象，其元素只是简单类型的元素，那么属于深拷贝

```js
let obj = {
    name: '',
    age: 20
}
```

如果数组或对象中的元素是引用类型的元素，那么就是浅拷贝

```js
let obj = {
    name: '',
    age: 20,
    classInfo: {
        name: '',
    }
}
```

### Object.assign是浅拷贝还是深拷贝

Object.assign 为浅拷贝

### 浏览器跨tab标签通信

1. 两个需要交互的tab页面具有依赖关系使用 postMessage

如：

- A页面中通过JavaScript的window.open打开B页面
- 或者B页面通过iframe嵌入至A页面

2. 两个打开的页面属于同源范畴

localstorage+storage事件监听

3. 两个互不相关的tab页面通信

### 网络安全，XSS和CSRF

### 讲讲HTTP1，HTTP2,HTTPS各自的发展史，以及区别

### commonjs和es module的区别

1. commonjs是运行时加载（因为可以动态引入，所以在运行时加载），es6是编译时输出（静态引入）
2. commonjs输出的是一个值的浅拷贝，es6输出的是一个值的引用
3. commonjs是单个值导出，es6可以导出多个


### 项目中跨域怎么解决的

- CORS
- postMessage
- jsonp
- nginx反向代理

```js
// proxy服务器
server {
    listen 80;
    server_name  www.domain1.com;
    location / {
        proxy_pass   http://www.domain2.com:8080;  # 反向代理
        proxy_cookie_domain www.domain2.com www.domain1.com; # 修改cookie里域名
        index  index.html index.htm;

        # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用
        add_header Access-Control-Allow-Origin http://www.domain1.com;  # 当前端只跨域不带cookie时，可为*
        add_header Access-Control-Allow-Credentials true;
    }
}
```

### 浏览器缓存：强缓存和协商缓存

### 讲讲你知道的设计模式

- 工厂模式
- 单例模式
- 策略模式
- 发布订阅模式

## vue

### 讲讲vue的双向数据绑定原理

Vue 则采用的是数据劫持与发布订阅相结合的方式实现双向绑定，数据劫持主要通过 Object.defineProperty 来实现
### vue是如何对数组进行监听的

重写了数组中的那些方法，首先获取到这个数组的__ob__,也就是它的Observer对象，如果有新的值，就调用observeArray继续对新的值观察变化，然后手动调用notify，通知渲染watcher，执行update。（  'push',
'pop','shift','unshift','splice','sort','reverse'）

### Vue组件中的data为什么是个函数

同一个组件被复用多次，会创建多个实例。这些实例用的是同一个构造函数，如果 data 是一个对象的话。那么所有组件都共享了同一个对象。为了保证组件的数据独立性要求每个组件必须通过 data 函数返回一个对象作为组件的状态

### 说说你对Vue生命周期的理解

  - beforeCreate
  - created
  - beforeMount
  - mounted
  - beforeUpdate
  - updated
  - beforeDestroy
  - destroyed
  - activated
  - deactivated
  - errorCaptured

### computed watcher和watcher的区别
### vue2.0与3.0的区别（vue3的新特性）
### vite了解过嘛，跟webpack的区别
### keep-alive的生命周期，什么时候执行，为什么有了mounted还走activated
### v-for为什么加key
### nextTick
### vue项目的性能优化

  - 代码层面的优化
    - keep-alive缓存
    - 路由懒加载
    - 防抖节流
    - 图片资源懒加载
    - 第三方插件的按需引入
    - 事件的销毁
    - v-if 和 v-show 区分使用场景
    - computed 和 watch 区分使用场景
    - v-for 遍历必须为 item 添加 key，且避免同时使用 v-if
    - 长列表性能优化Object.freeze()
    - 服务端渲染 SSR 
  - Webpack 层面的优化
    - Webpack 对图片进行压缩
    - 减少 ES6 转为 ES5 的冗余代码
    - 提取公共代码
    - 优化 SourceMap
### 组件传参的方式有些

  - props
  - $on/$emit
  - provide/inject
  - vuex
  - event bus

### vuex的五个属性以及辅助属性

  - state
  - getters
  - mutations
  - actions
  - module
  - 辅助属性：mapState、mapGetters、mapMutations、mapActions

### mixins的缺点，生命周期是否会都执行
### vue中数据量比较多大的话，怎么处理
### vue中如何监听vuex的数据
### vue权限设计

- 接口权限
- 按钮权限
  - 通过自定义指令进行按钮权限的判断
  ```js
  import Vue from 'vue'
  /**权限指令**/
  const has = Vue.directive('has', {
      bind: function (el, binding, vnode) {
          // 获取页面按钮权限
          let btnPermissionsArr = [];
          if(binding.value){
              // 如果指令传值，获取指令参数，根据指令参数和当前登录人按钮权限做比较。
              btnPermissionsArr = Array.of(binding.value);
          }else{
              // 否则获取路由中的参数，根据路由的btnPermissionsArr和当前登录人按钮权限做比较。
              btnPermissionsArr = vnode.context.$route.meta.btnPermissions;
          }
          if (!Vue.prototype.$_has(btnPermissionsArr)) {
              el.parentNode.removeChild(el);
          }
      }
  });
  export { has }
  ```
- 菜单权限
- 路由权限
  - 白名单+动态路由

### vue router中路由几种形式，以及区别
  - hash: 使用变更hash不会刷新页面的特性, 来变更路由, 做到单页面无刷新
  - history: 使用html5的history方法, 不支持老旧浏览器, 但是如果要部署到服务器的化, 需要在ng上进行相应的正向代理跳转, 否则拷贝的链接会打不开
### vue router是如何工作的
### 让你去实现一个vue，你怎么去实现
### vue和react的区别

### 如何取消一个请求

```js
xhr.abort();
```

- 方案一 借助Promise.reject
- 方案二 借助Promise.race
- axios.CancelToken;

### 并发请求

### 串行

```js
const Task = (url) => {
    return () => new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/todos/${url}`).then(res => {
                resolve(res)
            }, rej => {
                reject(rej)
            })

        }, 1000);
    });
}

// reduce
function execute(tasks) {
    return tasks.reduce(
        (previousPromise, currentPromise) => previousPromise.then((resultList) => {
            return new Promise(resolve => {
                currentPromise().then(result => {
                    resolve(resultList.concat(result))
                }).catch(() => {
                    resolve(resultList.concat(null))
                })
            })
        }),
        Promise.resolve([])
    )
}

// aysnc/await版本
const execute = async (tasks = []) => {
    const resultList = [];
    for (task of tasks) {
        try {
            resultList.push(await task());
        } catch (e) {
            resultList.push(null);
        }
    }
    return resultList;
}

execute([Task(111111), Task(2), Task(3)])
```

## webpack

- 做过哪些webpack配置

## CSS

- 水平垂直居中的实现
- 实现一个正方形，并可以适配不同屏幕
- 实现一个三角形
- 动画
  - @keyframes

## 项目管理

- code review你是怎么做的
- 代码校验eslint你在什么阶段做，怎么配置
- 工作流程

## 性能优化

- 雅虎军规

## 开放性问题

### 讲讲你在项目中遇到的问题以及解决方案

比如最近开发一个仪表盘，由于社区提供的仪表盘与ui设计的插件较大，于是就查阅资料，自定义了一个更贴合业务的组件，可以根据空调的模式显示不同的背景色等，然后也是开源了，可以自己定制，这样就可以让用户自己定制了。

### 了解哪些前沿技术

- 低代码平台
- 微前端
- 3D渲染

### 你做过最有挑战的事情是什么

使用从来没有使用过的uniapp独立开发去开发app，遇到到了很多的问题，比如ios开发需要账号申请证书描述文件，找PM沟通去做相关的申请，也踩遇到了很多的坑

### 你的职业规划

希望在技术领域方面深耕，有更多的业务层面的思考，用技术帮助业务成长，提高业务的效率

### 你觉得你的优势是什么

- 岗位的核心需求 + 针对性找出自己的优势 + 给出案例
- 反问：其实我想和您探讨一下，您认为做好这份工作，候选人应该具备怎样的条件？

结合自身的经验给出如下的思考：

- 工作时间久，大型项目都经历过，能够独立开发，经验方面也足够
- 与产品以及服务端交流合作无障碍，也比较善于沟通；可以帮助业务人员更好的完成任务，梳理需求文档，提高业务效率
- 有带团队的经验，4-5个人，做过迭代的负责人，有项目管理方面的经验

### 让你设计一个自动保存表单，你会怎么设计

- 定时调接口保存

### 让你带团队，你会怎么做

- 业务能力
  - 明确业务的目标
  - 梳理业务流程
  - 有效的参与业务评审
- 协作沟通能力
  - 需求评审
  - 后端联调
  - 交付测试验收
  - 任务分配
  - 任务风险
  - 任务进度把控
- 团队沉淀
  - 公共组件
  - 搭建知识库
  - 踩坑分享
- 学习的能力
  - 关注前沿技术
  - 解决现有业务问题

### 你有什么问题想问的

- 团队情况，包括团队规模，团队发展的规划，以及业务沉淀
- 业务发展的情况，是否用户量
- 你觉得目前项目开发的难点是什么，有没有解决方案
- 你对目前业务的发展有什么看法
- 你觉得目前的项目开发中遇到的最大挑战是什么