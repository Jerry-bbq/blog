# 前端安全：CSRF 与 XSS 防御体系

## 一、CSRF（跨站请求伪造）

### 🔍 攻击本质
> **冒用身份，非窃取数据**。攻击者无法获取 Cookie，但可利用浏览器自动携带 Cookie 的特性，**诱导用户在已登录状态下发起恶意请求**。

### ⚠️ 典型场景
```html
<!-- 攻击者页面 b.com -->
<img src="https://bank.com/transfer?to=hacker&amount=10000" />
<!-- 或自动提交表单 -->
<form action="https://shop.com/delete-account" method="POST">
  <input type="hidden" name="confirm" value="true" />
</form>
<script>document.forms[0].submit();</script>
```

> 💡 浏览器会自动携带 `bank.com` 的 Cookie，导致转账成功！
 
### ✅ 现代防御方案（按优先级排序）

#### 1. **SameSite Cookie（首选）**
在 Set-Cookie 时设置 `SameSite=Strict` 或 `Lax`：
```http
Set-Cookie: sessionid=abc123; Path=/; Secure; HttpOnly; SameSite=Lax
```
- `Strict`：任何跨站请求都不带 Cookie（包括链接跳转）
- `Lax`（推荐）：允许 GET 跳转携带 Cookie，阻止 POST/iframe 跨站请求

> 🌐 **兼容性**：Chrome/Firefox/Safari 全支持（iOS 12+）

#### 2. **CSRF Token（最通用）**
- 服务端生成随机 Token，存入 Session
- 前端在 **所有状态变更请求**（POST/PUT/DELETE）中携带 Token
- 后端校验 Token 有效性

**前端实现（Axios 拦截器）**：
```js
// 从 meta 标签或 DOM 获取 token
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

axios.interceptors.request.use(config => {
  if (['post', 'put', 'delete'].includes(config.method)) {
    config.headers['X-CSRF-Token'] = csrfToken;
  }
  return config;
});
```

**后端校验（Node.js 示例）**：
```js
app.post('/transfer', (req, res) => {
  if (req.headers['x-csrf-token'] !== req.session.csrfToken) {
    return res.status(403).json({ error: 'Invalid CSRF token' });
  }
  // 执行业务逻辑
});
```

> ⚠️ **注意**：Token 必须绑定用户 Session，不可全局共享！

#### 3. **双重 Cookie 验证（简化版 Token）**
- 服务端设置 Cookie：`csrf-token=random123`
- 前端读取 Cookie 并放入请求头：`X-CSRF-Token: random123`
- 后端比对 Cookie 与 Header 是否一致

> ❌ **缺陷**：若存在 XSS 漏洞，攻击者可读取 Cookie 并伪造请求 → **不推荐单独使用**

#### 4. **Referer/Origin 验证（辅助手段）**
```js
const origin = req.get('Origin') || req.get('Referer');
if (!origin || !origin.includes('yourdomain.com')) {
  return res.status(403).end();
}
```

> ⚠️ **局限性**：
> - Referer 可被浏览器禁用或伪造（如 HTTPS → HTTP 跳转会丢失）
> - 无法防御**同域攻击**（如评论区 XSS + CSRF）
 
## 二、XSS（跨站脚本攻击）

### 三种类型对比

| 类型 | 存储位置 | 触发方式 | 防御重点 |
|------|--------|--------|--------|
| **存储型** | 数据库 | 用户访问页面 | 后端输出转义 |
| **反射型** | URL 参数 | 诱导点击恶意链接 | 后端输入过滤 + 输出转义 |
| **DOM 型** | 前端 JS | JS 操作 DOM | 前端安全编码 |

> 💡 **关键区别**：DOM 型 XSS **完全发生在浏览器**，与服务端无关！
 
### ✅ 防御体系（纵深防御）

#### 1. **输出编码（核心！）**
根据上下文使用不同转义规则：
<!-- 
| 插入点 | 转义方法 | 示例 |
|-------|--------|------|
| HTML 文本 | `escapeHTML()` | `<div>{{ escapeHTML(userInput) }}</div>` |
| HTML 属性 | `escapeHTML()` + 引号包裹 | `<input value="{{ escapeHTML(attr) }}">` |
| JavaScript 字符串 | `JSON.stringify()` | `var msg = {{ JSON.stringify(userInput) }};` |
| URL 参数 | `encodeURIComponent()` | `?q={{ encodeURIComponent(query) }}` | -->

> 🛠️ **推荐库**：
> - Java: `OWASP Java Encoder`
> - Node.js: `escape-html`, `serialize-javascript`
> - Vue/React: 默认转义（避免 `v-html` / `dangerouslySetInnerHTML`）

#### 2. **内容安全策略（CSP）**
通过 HTTP 头限制资源加载：
```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.trusted.com;
```
- 禁止内联脚本（移除 `'unsafe-inline'`）
- 仅允许可信域名加载 JS
- 上报违规行为：`report-uri /csp-report`

> 💡 **现代替代方案**：使用 Nonce 或 Hash 白名单内联脚本

#### 3. **Cookie 安全**
```http
Set-Cookie: sessionId=abc123; Secure; HttpOnly; SameSite=Lax
```
- `HttpOnly`：阻止 JS 读取 Cookie（防 XSS 窃取）
- `Secure`：仅 HTTPS 传输
- `SameSite=Lax`：防 CSRF

> ⚠️ **注意**：HttpOnly **不能防止 XSS 执行**，只能保护 Cookie！

#### 4. **输入过滤（辅助）**
- 对 URL、富文本等特殊场景做白名单过滤
- 例如：只允许 `<b><i><a href="...">` 等标签

> ❌ **不要依赖输入过滤作为主要防御**！输出编码才是根本。
 
## 三、常见误区澄清

| 误区 | 正确理解 |
|------|--------|
| “POST 能防 CSRF” | ❌ 攻击者可用 `<form>` 自动提交 POST |
| “Referer 验证足够安全” | ❌ 可被绕过，且同域攻击无效 |
| “HttpOnly 能防 XSS” | ❌ 只能防 Cookie 窃取，XSS 仍可操作 DOM |
| “转义所有 `< > &` 就安全” | ❌ 需按上下文转义（如 JS、URL 中规则不同） |
 
## 四、安全 Checklist（可直接执行）

✅ **CSRF 防护**  
- [ ] 所有状态变更接口（POST/PUT/DELETE）要求 CSRF Token  
- [ ] Cookie 设置 `SameSite=Lax; Secure; HttpOnly`  
- [ ] 敏感操作（如转账）增加二次验证（短信/密码）  

✅ **XSS 防护**  
- [ ] 禁用 `v-html` / `dangerouslySetInnerHTML`（除非必要 + 严格过滤）  
- [ ] 配置 CSP 头，禁止内联脚本  
- [ ] 使用模板引擎自动转义（如 EJS `<%= data %>`）  
- [ ] 富文本使用 `DOMPurify` 清理  

✅ **通用措施**  
- [ ] 定期用 [OWASP ZAP](https://www.zaproxy.org/) 扫描漏洞  
- [ ] 敏感操作记录审计日志  
- [ ] 前端错误监控排除敏感信息（如密码、Token）
 
## 五、扩展：现代安全趋势

- **Trusted Types**（Chrome）：防止 DOM XSS，强制安全 API 使用  
  ```js
  // 要求 innerHTML 必须是 TrustedHTML 类型
  const policy = trustedTypes.createPolicy('myPolicy', {
    createHTML: (s) => s.replace(/\</g, '&lt;')
  });
  element.innerHTML = policy.createHTML(userInput);
  ```
- **Subresource Integrity (SRI)**：确保 CDN 资源未被篡改  
  ```html
  <script src="https://cdn.example.com/lib.js"
          integrity="sha384-xxx"></script>
  ```