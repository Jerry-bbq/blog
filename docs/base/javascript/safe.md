---
sidebar: auto
---

# 安全

## CSRF

Cross-site request forgery，中文`跨站请求伪造`

劫持受信任用户向服务器发送非预期请求的攻击方式

### 防御措施

- Token验证
- Referer验证：只接受本站的请求，服务器才做响应；如果不是，就拦截
- 隐藏令牌：把 token 隐藏在 http 的 head头中

## XSS

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