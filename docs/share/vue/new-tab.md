
# 编程式导航实现新窗口打开

## 业务场景

vue项目，新开tab窗口，并携带参数

## 技术实现

```js
let routeData = this.$router.resolve({
    path: '/erp/contract/info',
    query: {
        name: 'luguanrui',
        age: 6
    },
})
window.open(routeData.href, '_blank');
```
