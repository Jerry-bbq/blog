---
sidebar: auto
---

# 弹窗关闭初始化数据

## 业务场景

当使用`弹窗`或者`抽屉`提交`form`表单的之后，手动关闭弹窗不会清空数据

## 技术实现

```js
Object.assign(this.$data, this.$options.data())
```
