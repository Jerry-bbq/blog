---
sidebar: auto
---

# axios

[github地址](https://github.com/axios/axios)

- axios是一个基于promise的Http库，在浏览器环境使用XHR，在node环境中使用http模块发送请求
- 拦截器的原理就是通过chain的Promise链，在请求之前加入请求拦截器，请求结束之后加入响应拦截器，循环遍历chain，从而达到链式调用的作用。在dispatchRequest的前后，传递的参数由request变成response。
- 取消请求的是一个异步分离的设计方案，利用promise的异步效果，通过切换promise的状态，从而达到异步取消请求的实现。

[参考](https://juejin.cn/post/6905189135796371469)

