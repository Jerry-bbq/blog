
# vue2.0兼容IE9及以上

方案一：配置`babelpolyfill`

方案二：`core-js@3`弃用了`babelpolyfill`，只需要在`main.js`中引用如下文件即可：

```js
import 'core-js/stable'
import 'regenerator-runtime/runtime'
```