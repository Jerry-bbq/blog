---
sidebar: auto
---

# 通信

## 什么是同源策略及限制

同源策略限制从一个源加载的文件或者脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的关键的安全机制。（源包含：**协议+域名+端口**）

同源策略有哪些限制：
- Cookie,LocalStrorage和IndexDB无法读取
- DOM无法获取
- AJAX请求不能发送

## 如何创建Ajax（原生）

- XMLHttpRequst对象的工作流程
- 兼容性处理（IE不支持）
- 事件的触发条件
- 事件的触发顺序

实现：
```js
function ajax(url){
    var xhr = window.XMLHttpRequest 
              ? new XMLHttpRequest() 
              : new ActiveXObject("Microsoft.XMLHTTP")
    xhr.open("get", url, true);
    xhr.send();
    xhr.onreadystatechange = () =>{
        if(xhr.readystate == 4){
            if(xhr.status == 200){
                var data = xhr.responseText;
                return data;
            }
        }
    }
}
```
    
## 跨域通信的几种方式（5种）

- JSONP
- Hash（url后面的#）
- postMessage（h5中新增）
- WebSocket
- CORS（理解为Ajax的一种方式）

### JSONP

JSON with Padding

原理：主要就是利用了`script`标签的`src`没有跨域限制来完成的

缺点：只能进行`GET`请求

### Hash

```js
// 利用hash，场景是当前页面 A 通过iframe或frame嵌入了跨域的页面 B
// 在A中伪代码如下：
var B = document.getElementsByTagName('iframe');
B.src = B.src + '#' + 'data';
// 在B中的伪代码如下
window.onhashchange = function () {
  var data = window.location.hash;
};
```

### postMessage

实现：

```js
// 窗口A(http:A.com)向跨域的窗口B(http:B.com)发送信息
Bwindow.postMessage('data', 'http://B.com');
// 在窗口B中监听
Awindow.addEventListener('message', function (event) {
  console.log(event.origin);
  console.log(event.source);
  console.log(event.data);
}, false);
```

### WebSocket

```js
// Websocket【参考资料】http://www.ruanyifeng.com/blog/2017/05/websocket.html

var ws = new WebSocket('wss://echo.websocket.org');
// 发送消息
ws.onopen = function (evt) {
  console.log('Connection open ...');
  ws.send('Hello WebSockets!');
};
// 接受消息
ws.onmessage = function (evt) {
  console.log('Received Message: ', evt.data);
  ws.close();
};
// 连接中断
ws.onclose = function (evt) {
  console.log('Connection closed.');
};
```

### CORS

CORS是一个W3C标准，全称是”跨域资源共享”（Cross-origin resource sharing）s

```js
// CORS【参考资料】http://www.ruanyifeng.com/blog/2016/04/cors.html
// url（必选），options（可选）
fetch('/some/url/', {
  method: 'get',
  // 跨域的，这里需要加配置
}).then(function (response) {

}).catch(function (err) {
// 出错了，等价于 then 的第二个参数，但这样更好用更直观
});
```

## 怎么与服务端保持连接

- HTTP请求头需要增加`Connection:keep-alive`字段
- websocket

## cookie

### 属性

[cookie](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie)

| 属性 | 说明 |
|---|---|
|<div style="width: 130px">name(必要)</div> | 要创建或覆盖的cookie的名字(string) |
|value(必要) | cookie的值(string) |
|domain | 可以访问此cookie的域名 |
|path | 可以访问此cookie的页面路径(如果没有定义，默认为当前文档位置的路径) |
|expires/max-age | 设置cookie超时时间。如果设置的值为一个时间，则当到达该时间时此cookie失效。不设置的话默认是session，意思是cookie会和session一起失效，当浏览器关闭（并不是浏览器标签关闭，而是整个浏览器关闭）后，cookie失效。 |
|http | cookie的HttpOnly属性，若此属性为True，则只有在http请求头中会有此cookie信息，而不能通过document.cookie来访问此cookie。 |
|secure | cookie只会被https传输 (boolean或null) |

### 创建读取删除

可参考 [js-cookie](https://github.com/js-cookie/js-cookie)

创建：

```js
document.cookie = 'username=Jack'
```

读取：

```js
const cookie = document.cookie
```

修改（类似于创建，新值覆盖旧值）：

```js
document.cookie="username=John Smith; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
```

删除：

- 不指定cookie的值
- 设置`expires`参数为过去的日期

```js
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
```

总结：

```js
const getCookie = name => {
  const arr = document.cookie.replace(/\s/g, '').split(';')
  for (let i = 0; i < arr.length; i++) {
    const tempArr = arr[i].split('=')
    if (tempArr[0] == name) {
      return decodeURIComponent(tempArr[1])
    }
  }
  return ''
}

const setCookie = (name, value, days) => {
  let date = new Date()
  date.setDate(date.getDate() + days)
  document.cookie = name + '=' + value + ';expires=' + date
}

const removeCookie = name => {
  // 设置已过期，系统会立刻删除cookie
  setCookie(name, '1', -1)
}
```


### 禁止js访问cookie

如果您在cookie中设置了`HttpOnly`属性，那么通过js脚本将无法读取到cookie信息，这样能有效的防止XSS攻击

## localStorage和sessionStorage

### localStorage

[localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)

只要在相同的**协议+域名+端口**下，就能读取/修改到同一份localStorage数据

localStorage理论上来说是永久有效的，即不主动清空的话就不会消失

```js
localStorage.setItem('key', 'value');
let data = localStorage.getItem('key');

localStorage.removeItem('key');
localStorage.clear();
```

### sessionStorage

[sessionStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)

除了**协议+域名+端口**外，还要求在同一窗口（也就是浏览器的标签页）下


```js
sessionStorage.setItem('key', 'value');
let data = sessionStorage.getItem('key');

sessionStorage.removeItem('key');
sessionStorage.clear();
```