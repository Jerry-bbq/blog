
# vue-router通过携带query和params携带参数路由跳转

## 业务场景

1. 从`A页面`跳转到`B页面`，将`A页面`的查询条件携带到`B页面`；
2. 在`B页面`修改查询条件时，不影响到`A页面`的查询条件，并且`B页面`刷新时，查询条件初始化

## 技术实现

将查询条件放到**params**中

```js
this.$router.push({
  name: 'user',
  query: {
    id: 1
  },
  params: searchParamsObj,
})
```

::: warning 提示

路由跳转传参，如果提供了`path`，`params`会被忽略，因此需要提供路由的`name`

[官方说明](https://router.vuejs.org/zh/guide/essentials/navigation.html)

:::
