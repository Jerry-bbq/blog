# 安全-CSRF/XSS

## CSRF-跨站请求伪造

- [如何防止CSRF攻击](https://tech.meituan.com/2018/10/11/fe-security-csrf.html)

`CSRF`（Cross-site request forgery）**跨站请求伪造**：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。

一个典型的CSRF攻击有着如下的流程：

- 受害者登录a.com，并保留了登录凭证（Cookie）。
- 攻击者引诱受害者访问了b.com。
- b.com 向 a.com 发送了一个请求：a.com/act=xx。浏览器会默认携带a.com的Cookie。
- a.com接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者自己发送的请求。
- a.com以受害者的名义执行了act=xx。
- 攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让a.com执行了自己定义的操作。

### 防御措施

- Token验证
- Referer验证：只接受本站的请求，服务器才做响应；如果不是，就拦截
- 隐藏令牌：把 token 隐藏在 http 的 head头中

## XSS-跨域脚本攻击

- [如何防止XSS攻击](https://tech.meituan.com/2018/09/27/fe-security.html)

Cross-site Scripting，中文`跨域脚本攻击`

向页面中注入js脚本，篡改网页内容

### 攻击类型
  - 存储型
  - 反射型
  - DOM型

### 防御措施

- HttpOnly 防止劫取 Cookie
- 输入检查
- 输出检查