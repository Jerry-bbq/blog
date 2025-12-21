# 前端通信机制
 
## 一、同源策略（Same-Origin Policy, SOP）

### 1.1 什么是同源？

**同源 = 协议 + 域名 + 端口 完全一致**

| URL A | URL B | 是否同源 | 原因 |
|-------|--------|--------|------|
| `https://a.com:80` | `http://a.com:80` | ❌ | 协议不同 |
| `https://a.com` | `https://b.a.com` | ❌ | 主机不同 |
| `https://a.com:80` | `https://a.com:443` | ❌ | 端口不同 |
| `https://a.com/path1` | `https://a.com/path2` | ✅ | 路径不影响 |

> 📌 注意：`file://` 和 `data:` 协议有特殊隔离规则。
 
### 1.2 同源策略的限制范围

| 资源类型 | 是否受 SOP 限制 | 说明 |
|--------|----------------|------|
| Cookie / localStorage / sessionStorage | ✅ | 无法读取跨源数据 |
| DOM 访问 | ✅ | `iframe.contentDocument` 报错 |
| AJAX / Fetch | ✅ | 浏览器拦截响应（即使服务器返回 200） |
| `<img>` / `<script>` / `<link>` | ❌ | 允许跨域加载（但无法读取内容） |
| WebSocket | ❌ | 协议层无 SOP（但可被服务端拒绝） |

> 💡 **关键理解**：SOP 是**浏览器的安全策略**，服务器始终能收到请求；限制的是**前端 JS 的响应访问权**。
 
## 二、跨域通信方案（6 种）

> ⚠️ 所有方案均需**服务端配合**（除 JSONP 外），前端无法单独突破 SOP。

### 方案 1：JSONP（仅 GET）

#### 原理
利用 `<script>` 标签不受 SOP 限制，动态插入带回调函数的 URL：

```js
function jsonp(url, callbackName) {
  const script = document.createElement('script');
  window[callbackName] = (data) => {
    document.head.removeChild(script);
    // 处理数据
  };
  script.src = `${url}?callback=${callbackName}`;
  document.head.appendChild(script);
}

// 使用
jsonp('http://api.example.com/data', 'handleData');
```

#### 缺陷
- 仅支持 GET
- 无错误处理（script 加载失败不触发 onerror）
- 安全风险（执行任意 JS）

> ✅ 适用场景：遗留系统兼容、简单数据获取。
 
### 方案 2：CORS（主流方案）

#### 基本流程
1. 浏览器自动添加 `Origin` 请求头；
2. 服务端返回 `Access-Control-Allow-Origin` 响应头；
3. 若匹配，则允许前端读取响应。

```http
// 请求
GET /data HTTP/1.1
Origin: https://a.com

// 响应
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://a.com
```

#### 高级特性
| 场景 | 服务端响应头 | 说明 |
|------|-------------|------|
| 允许凭据（Cookie） | `Access-Control-Allow-Credentials: true` | 前端需设置 `credentials: 'include'` |
| 自定义请求头 | `Access-Control-Allow-Headers: X-Token` | 需预检 |
| 非简单请求 | 触发 OPTIONS 预检 | 如 PUT、application/json |

#### 前端代码（Fetch）
```js
fetch('https://api.example.com/data', {
  method: 'POST',
  credentials: 'include', // 携带 Cookie
  headers: { 'Content-Type': 'application/json' }
})
.then(res => res.json())
```

> ✅ **最佳实践**：生产环境避免 `Allow-Origin: *` + `Credentials: true` 组合（冲突）。
 
### 方案 3：postMessage（窗口间通信）

#### 适用场景
- `window.open()` 打开的窗口
- `<iframe>` 嵌入的跨域页面

#### 实现
```js
// 父窗口 (https://a.com)
const iframe = document.getElementById('frame');
iframe.contentWindow.postMessage('Hello', 'https://b.com');

// 子窗口 (https://b.com)
window.addEventListener('message', (e) => {
  if (e.origin !== 'https://a.com') return; // 安全校验！
  console.log(e.data); // "Hello"
});
```

> 🔒 **安全要点**：必须校验 `event.origin`，防止恶意站点注入。
 
### 方案 4：Hash（URL 片段标识）

#### 原理
通过修改 `iframe` 的 `src` 中 `#` 后内容传递数据（父→子）；子窗口通过 `onhashchange` 监听。

```js
// 父窗口
iframe.src = `https://b.com#data=${encodeURIComponent(JSON.stringify(data))}`;

// 子窗口
window.onhashchange = () => {
  const data = JSON.parse(decodeURIComponent(location.hash.slice(1).split('=')[1]));
};
```

> ⚠️ 缺陷：只能单向通信、URL 长度限制、无安全校验。
 
### 方案 5：WebSocket（全双工）

#### 特点
- 基于 TCP，建立后无视 SOP
- 协议：`ws://`（非加密）、`wss://`（加密）

```js
const ws = new WebSocket('wss://echo.websocket.org');

ws.onopen = () => ws.send('Hello');
ws.onmessage = (e) => console.log(e.data);
ws.onclose = () => console.log('Disconnected');
```

> ✅ 适用：实时聊天、游戏、金融行情。
 
### 方案 6：代理服务器（开发/部署）

- **开发阶段**：Webpack DevServer / Vite proxy
  ```js
  // vite.config.js
  export default {
    server: {
      proxy: {
        '/api': 'http://localhost:3000'
      }
    }
  }
  ```
- **生产阶段**：Nginx 反向代理
  ```nginx
  location /api {
    proxy_pass http://backend-server;
  }
  ```

> 💡 本质：将跨域转为同源（前端 → 同源代理 → 服务端）。
 
## 三、持久化存储对比

| 特性 | Cookie | localStorage | sessionStorage |
|------|--------|--------------|----------------|
| **容量** | ~4KB | ~5–10MB | ~5–10MB |
| **生命周期** | 可设过期时间 | 永久（除非手动清除） | 页面会话（标签关闭即失效） |
| **作用域** | 可设 domain/path | 同源 | 同源 + 同标签页 |
| **是否随请求发送** | ✅（自动） | ❌ | ❌ |
| **JS 可访问** | ✅（除非 HttpOnly） | ✅ | ✅ |
| **事件通知** | ❌ | ✅（storage 事件） | ✅（仅跨标签） |

### 关键细节补充

#### 1. Cookie 安全属性
| 属性 | 作用 |
|------|------|
| `HttpOnly` | 禁止 JS 读取（防 XSS） |
| `Secure` | 仅 HTTPS 传输 |
| `SameSite=Strict/Lax` | 防 CSRF（默认 Lax） |

#### 2. Storage 事件（跨标签同步）
```js
// 标签页 A 修改 localStorage
localStorage.setItem('msg', 'Hello');

// 标签页 B 监听
window.addEventListener('storage', (e) => {
  console.log(e.key, e.newValue); // 'msg', 'Hello'
});
```

> ⚠️ 注意：**当前标签页的修改不会触发自身 storage 事件**。
 
## 四、高频面试题（专业级）

### Q1：CORS 预检请求（Preflight）在什么情况下会被触发？如何避免？

**回答**：  
当请求满足以下任一条件时，浏览器会先发送 `OPTIONS` 预检：
- 方法不是 `GET`/`POST`/`HEAD`
- `Content-Type` 不是 `application/x-www-form-urlencoded`、`multipart/form-data`、`text/plain`
- 包含自定义请求头（如 `Authorization`）

**避免方案**：
- 使用简单请求（如 POST + `application/x-www-form-urlencoded`）
- 服务端缓存预检结果：`Access-Control-Max-Age: 86400`

> 💡 面试加分：提到“预检是浏览器行为，服务端必须正确响应 OPTIONS”。
 
### Q2：为什么 `document.cookie` 无法读取设置了 `HttpOnly` 的 Cookie？这对安全有何意义？

**回答**：  
- `HttpOnly` 是 Cookie 的安全属性，由服务端设置；
- 浏览器禁止 JavaScript 通过 `document.cookie` 读取此类 Cookie；
- **意义**：即使页面存在 XSS 漏洞，攻击者也无法窃取敏感 Cookie（如 Session ID），有效缓解 Cookie 劫持。

> ✅ 最佳实践：身份认证 Cookie 必须设置 `HttpOnly + Secure + SameSite=Strict`。
 
### Q3：`localStorage` 和 `sessionStorage` 的事件机制有何区别？

**回答**：  
- 两者都支持 `storage` 事件，但：
  - `localStorage`：**所有同源标签页**都能监听到变更；
  - `sessionStorage`：**仅其他同源标签页**能监听（当前标签页的修改不触发自身事件）。
- 事件对象包含 `key`、`oldValue`、`newValue`、`url` 等字段。

> ⚠️ 注意：Safari 在无痕模式下可能禁用 Storage 事件。
 
### Q4：WebSocket 和 HTTP 长轮询（Long Polling）的本质区别是什么？

**回答**：  
| 特性 | WebSocket | HTTP 长轮询 |
|------|----------|------------|
| **连接模型** | 持久 TCP 连接 | 每次请求新建 HTTP 连接 |
| **通信方向** | 全双工（服务端可主动推送） | 半双工（客户端先请求） |
| **协议开销** | 极低（帧头 2–14 字节） | 高（每次带完整 HTTP 头） |
| **延迟** | 毫秒级 | 受限于请求间隔 |

> 💡 结论：WebSocket 是真正的实时通信，长轮询是“伪实时”。
 
### Q5：在 iframe 跨域通信中，为什么必须校验 `event.origin`？

**回答**：  
- 若不校验，任何网站嵌入你的 iframe 都能向其发送消息；
- 攻击者可伪造 `postMessage` 注入恶意指令（如窃取数据、跳转钓鱼页）；
- **正确做法**：
  ```js
  window.addEventListener('message', (e) => {
    if (e.origin !== 'https://trusted.com') return; // 白名单校验
    // 处理消息
  });
  ```

> 🔒 安全原则：永远不要信任来自 `postMessage` 的数据。
 
## 五、总结：通信方案选型指南

| 需求 | 推荐方案 |
|------|--------|
| API 跨域调用 | **CORS**（现代标准） |
| 实时双向通信 | **WebSocket** |
| 父子窗口通信 | **postMessage** |
| 兼容老系统 | **JSONP**（仅 GET） |
| 开发调试 | **代理服务器** |
| 存储用户偏好 | **localStorage** |
| 临时会话数据 | **sessionStorage** |
| 身份认证 | **HttpOnly Cookie** |

> ✅ **黄金法则**：优先使用标准方案（CORS/WebSocket），避免 hack 式跨域（如 Hash）。
 