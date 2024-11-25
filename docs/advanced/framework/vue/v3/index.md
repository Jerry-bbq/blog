
# Vue3

- Vue3支持vue2的大多数特性
- 更好的支持Typescript

- 性能提升
  - 打包大小减少41%
  - 初次渲染快55%, 更新渲染快133%
  - 内存减少54%
  - 使用Proxy代替defineProperty实现数据响应式
  - 重写虚拟DOM的实现和Tree-Shaking
- 新增特性
  - Composition (组合) API
  - setup
  - 新组件
  - 其它API更新

## 组合式api
### setup

```vue
<template>
    <div>{{ msg }}</div>
    <div @click="handleClick"></div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, onMounted, onUnmounted  } from 'vue'

export default defineComponent({
    props: {},
    components: {},
    setup(props, { emit }) {
        let msg = ref('')
        const obj = {
            name: '',
            age: '',
            class: {
                name: '',
                count: 0
            }
        }
        const stu = reactive(obj)

        onMounted(()=> {

        })

        onUnmounted(() => {
            
        })

        const handleClick = () => {
            msg.value += '-'
            emit('handleClick', msg.value)
        }

        const computed = computed(()=> {
            return stu.name + stu.age
        })

        const computed2 =  computed({
            get() {
                return stu.name + stu.age
            },
            set(val) {
                stu.age = val
            }
        })

        watch(stu, () => {
           // .... 
        }, { immediate: true, deep: true})

        watch([() => stu.name, () => stu.age, stu], (values)=> {
            console.log(values)
        })


        return {
            msg,
            stu
        }
    }
})
</script>
```

## ref和reactive

ref定义一个数据的响应式

reactive定义多个数据的响应式



## 生命周期的变化

Vue2.x | Vue3
---|---
beforeCreate | 使用 setup()
created | 使用 setup()
beforeMount | onBeforeMount
mounted | onMounted
beforeUpdate | onBeforeUpdate
updated | onUpdated
beforeDestroy | onBeforeUnmount
destroyed | onUnmounted
errorCaptured | onErrorCaptured

使用`setup()`代替`beforeCreate`和`created`

## 使用proxy代替defineProperty

```js
Object.defineProperty( Obj, 'name', {
    enumerable: true, //可枚举
    configurable: true, //可配置
    // writable:true, //跟可配置不能同时存在
    // value:'name',  //可写死直
    get: function () {
        return def
    },
    set: function ( val ) {
        def = val
    }
} )

```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Proxy 与 Reflect</title>
</head>
<body>
  <script>
    
    const user = {
      name: "John",
      age: 12
    };

    /* 
    proxyUser是代理对象, user是被代理对象
    后面所有的操作都是通过代理对象来操作被代理对象内部属性
    */
    const proxyUser = new Proxy(user, {

      get(target, prop) {
        console.log('劫持get()', prop)
        return Reflect.get(target, prop)
      },

      set(target, prop, val) {
        console.log('劫持set()', prop, val)
        return Reflect.set(target, prop, val); // (2)
      },

      deleteProperty (target, prop) {
        console.log('劫持delete属性', prop)
        return Reflect.deleteProperty(target, prop)
      }
    });
    // 读取属性值
    console.log(proxyUser===user)
    console.log(proxyUser.name, proxyUser.age)
    // 设置属性值
    proxyUser.name = 'bob'
    proxyUser.age = 13
    console.log(user)
    // 添加属性
    proxyUser.sex = '男'
    console.log(user)
    // 删除属性
    delete proxyUser.sex
    console.log(user)
  </script>
</body>
</html>
```

1. defineProperty只能绑定首次渲染时候的属性，Proxy需要的是整体，不需要关心里面有什么属性，而且Proxy的配置项有13种，可以做更细致的事情，这是之前的defineProperty无法达到的
2. vue2.x之所以只能兼容到IE8就是因为defineProperty无法兼容IE8,其他浏览器也会存在轻微兼容问题 2.proxy的话除了IE，其他浏览器都兼容
  
## Diff算法的提升

### Vue2.x

1. vue2.x提供类似于HTML的模板语法，但是，它是将模板编译成渲染函数来返回虚拟DOM树。Vue框架通过递归遍历两个虚拟DOM树，并比较每个节点上的每个属性，来确定实际DOM的哪些部分需要更新。
2. 由于现代JavaScript引擎执行的高级优化，这种有点暴力的算法通常非常快速，但是DOM的更新仍然涉及许多不必要的CPU工作，那么如何解决呢？

### Vue3

1. 首先，在DOM树级别。我们注意到，在没有动态改变节点结构的模板指令（例如v-if和v-for）的情况下，节点结构保持完全静态。如果我们将一个模板分成由这些结构指令分隔的嵌套“块”，则每个块中的节点结构将再次完全静态。当我们更新块中的节点时，我们不再需要递归遍历DOM树 - 该块内的动态绑定可以在一个平面数组中跟踪。这种优化通过将需要执行的树遍历量减少一个数量级来规避虚拟DOM的大部分开销。
2. 其次，编译器积极地检测模板中的静态节点、子树甚至数据对象，并在生成的代码中将它们提升到渲染函数之外。这样可以避免在每次渲染时重新创建这些对象，从而大大提高内存使用率并减少垃圾回收的频率。
3. 第三，在元素级别。编译器还根据需要执行的更新类型，为每个具有动态绑定的元素生成一个优化标志。例如，具有动态类绑定和许多静态属性的元素将收到一个标志，提示只需要进行类检查。运行时将获取这些提示并采用专用的快速路径

## typeScript的支持

1. vue2.x中使用的都是js，并没有类型系统这个概念，现如今typescript异常火爆，它的崛起是有原因的，因为对于规模很大的项目，没有类型声明，后期维护和代码的阅读都是头疼的事情，所以广大码农迫切的需要vue能完美支持ts。
2. 最终vue3 借鉴了react hook实现了更自由的编程方式，提出了Composition API，Composition API不需要通过指定一长串选项来定义组件，而是允许用户像编写函数一样自由地表达、组合和重用有状态的组件逻辑，同时提供出色的TypeScript支持。

## 打包体积变化

1. vue2官方说的运行时打包师23k，但这只是没安装依赖的时候，随着依赖包和框架特性的增多，有时候不必要的，未使用的代码文件都被打包了进去，所以后期项目大了，打包文件会特别多还很大。
2. 在Vue 3中，我们通过将大多数全局API和内部帮助程序移动到Javascript的module.exports属性上实现这一点。这允许现代模式下的module bundler能够静态地分析模块依赖关系，并删除与未使用的module.exports属性相关的代码。模板编译器还生成了对树抖动友好的代码，只有在模板中实际使用某个特性时，该代码才导入该特性的帮助程序。
3. 尽管增加了许多新特性，但Vue 3被压缩后的基线大小约为10 KB，不到Vue 2的一半。

## vite

