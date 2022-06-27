# 安全-CSRF/XSS

## CSRF-跨站请求伪造

- [如何防止CSRF攻击](https://tech.meituan.com/2018/10/11/fe-security-csrf.html)

Cross-site request forgery，中文`跨站请求伪造`

劫持受信任用户向服务器发送非预期请求的攻击方式

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