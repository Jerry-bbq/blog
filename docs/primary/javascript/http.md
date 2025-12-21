# HTTP 协议
 
## 一、HTTP 协议演进

| 版本 | 核心特性 | 局限性 |
|------|--------|--------|
| **HTTP/1.0** | 无连接（每次请求新建 TCP）<br>支持 `GET`/`POST`/`HEAD` | 连接开销大<br>无 Host 头（无法虚拟主机） |
| **HTTP/1.1** | 持久连接（Keep-Alive）<br>Host 头<br>管线化（Pipelining）<br>分块传输（Chunked）<br>增强缓存（ETag、Cache-Control） | 队头阻塞（Head-of-Line Blocking）<br>文本协议解析慢 |
| **HTTP/2** | 二进制分帧<br>多路复用（Multiplexing）<br>头部压缩（HPACK）<br>服务器推送（Server Push） | 必须基于 TLS（主流浏览器要求） |
| **HTTP/3** | 基于 QUIC（UDP）<br>0-RTT 连接建立<br>连接迁移 | 兼容性仍在推进 |

> 📌 **关键事实**：HTTP/1.1 的**管线化**（Pipelining）因实现复杂、中间代理兼容差，**已被现代浏览器弃用**。
 
## 二、HTTP 报文结构

### 2.1 请求报文
```
GET /index.html HTTP/1.1\r\n
Host: www.example.com\r\n
User-Agent: Mozilla/5.0\r\n
Accept: text/html\r\n
\r\n
[请求体（可选）]
```

### 2.2 响应报文
```
HTTP/1.1 200 OK\r\n
Content-Type: text/html\r\n
Content-Length: 1234\r\n
Cache-Control: max-age=3600\r\n
\r\n
[响应体]
```

> 💡 **注意**：空行 `\r\n` 是头部与主体的分界符，不可省略。
 
## 三、HTTP 方法语义（幂等性 & 安全性）

| 方法 | 幂等 | 安全 | 说明 |
|------|------|------|------|
| GET | ✅ | ✅ | 获取资源，不应有副作用 |
| HEAD | ✅ | ✅ | 同 GET，但不返回 body |
| POST | ❌ | ❌ | 提交数据，可能创建资源 |
| PUT | ✅ | ❌ | **全量**更新资源（若不存在则创建） |
| PATCH | ❌ | ❌ | **局部**更新资源 |
| DELETE | ✅ | ❌ | 删除资源 |
| OPTIONS | ✅ | ✅ | 查询支持的方法 |
| TRACE | ✅ | ✅ | 回显请求（**已禁用**，安全风险） |

> 🔒 **安全方法** = 不应产生副作用；**幂等** = 多次执行结果一致。
 
## 四、GET vs POST —— 深度澄清

| 维度 | GET | POST |
|------|-----|------|
| **参数位置** | URL Query String | Request Body |
| **长度限制** | 受浏览器/服务器限制（通常 2KB–8KB） | 无硬性限制（受 `Content-Length` 或分块限制） |
| **缓存** | 可被浏览器/CDN 缓存 | 默认不缓存（除非显式设置 `Cache-Control`） |
| **历史记录** | 参数可见 | 不可见 |
| **编码类型** | 仅 `application/x-www-form-urlencoded` | 支持 `multipart/form-data`、`application/json` 等 |
| **安全性** | ❌（参数暴露） | ✅（相对，仍需 HTTPS） |
| **幂等性** | ✅ | ❌ |

> ✅ **最佳实践**：敏感操作（如支付）必须用 POST + HTTPS + CSRF Token。
 
## 五、HTTP 缓存机制（决策流程）

```
开始
 │
 ↓
是否存在强缓存？（Cache-Control / Expires）
 ├─ 是 → 是否未过期？
 │        ├─ 是 → 直接返回 200 (from cache)
 │        └─ 否 → 进入协商缓存判断
 └─ 否 → 进入协商缓存判断
          │
          ↓
是否存在 ETag 或 Last-Modified？
 ├─ 是 → 发送带 If-None-Match / If-Modified-Since 的请求
 │        │
 │        ↓
 │       服务器返回 304？
 │        ├─ 是 → 返回 304，使用本地缓存
 │        └─ 否 → 返回 200 + 新资源，更新缓存
 └─ 否 → 发送完整请求 → 返回 200 + 新资源，更新缓存
```

### 5.1 强缓存（无需请求）
- `Cache-Control: max-age=3600`（HTTP/1.1，优先级高）
- `Expires: Wed, 21 Dec 2025 22:00:00 GMT`（HTTP/1.0）

> ⚠️ 若两者共存，**`Cache-Control` 覆盖 `Expires`**

### 5.2 协商缓存（需请求）
| 机制 | 字段 | 精度 | 优先级 |
|------|------|------|--------|
| 时间戳 | `Last-Modified` / `If-Modified-Since` | 秒级 | 低 |
| 内容指纹 | `ETag` / `If-None-Match` | 字节级（文件修改即变） | **高** |

> 💡 **ETag 生成策略**：Apache 默认用 `(inode, size, mtime)` 哈希；Nginx 可配置为 `md5(content)`
 
## 六、HTTPS 与 TLS

### 6.1 HTTPS = HTTP + TLS
- **端口**：HTTP/80 → HTTPS/443
- **加密层**：TLS 位于 TCP 之上、HTTP 之下
- **证书**：由 CA（证书颁发机构）签发，验证服务器身份

### 6.2 TLS 握手关键步骤（简化）
1. ClientHello（含支持的加密套件、ALPN）
2. ServerHello（选定套件 + 证书）
3. 密钥交换（ECDHE 等）
4. 加密通信开始

> 🔐 **现代优化**：
- **HSTS**（HTTP Strict Transport Security）：强制浏览器用 HTTPS
- **OCSP Stapling**：服务器主动提供证书状态，避免客户端查询 CA
 
## 七、持久连接与队头阻塞

### 7.1 持久连接（Keep-Alive）
- HTTP/1.1 默认开启：`Connection: keep-alive`
- 允许单个 TCP 连接处理多个请求/响应

### 7.2 队头阻塞（Head-of-Line Blocking）
- **问题**：HTTP/1.1 中，若第一个响应慢，后续响应即使已准备好也需等待
- **解决方案**：
  - HTTP/2：多路复用（同一连接并发多个流）
  - HTTP/3：QUIC 协议（基于 UDP，独立流无阻塞）
 
## 八、高频面试题

### Q1：为什么 HTTP/1.1 仍然存在性能瓶颈？HTTP/2 如何解决？

**回答**：  
HTTP/1.1 的主要瓶颈是**队头阻塞**：即使使用持久连接，请求/响应仍需**串行处理**。  
HTTP/2 通过：
- **二进制分帧**：将消息拆分为 HEADERS/DATA 帧；
- **多路复用**：多个请求/响应可**乱序交错**在同一连接上传输；
- **头部压缩**（HPACK）：减少重复头部开销。

> 💡 补充：HTTP/2 要求 TLS（浏览器强制），且不支持明文。
 
### Q2：`Cache-Control: no-cache` 和 `no-store` 有何区别？

**回答**：  
- `no-cache`：**允许缓存**，但每次使用前必须向服务器**验证有效性**（返回 304 或 200）；
- `no-store`：**禁止缓存**，浏览器和代理都不得存储任何副本。

> ✅ 示例：银行页面用 `no-store`；API 响应用 `no-cache` 实现条件请求。
 
### Q3：ETag 和 Last-Modified 同时存在时，浏览器如何选择？

**回答**：  
**ETag 优先级更高**。  
当两者都存在时，浏览器会同时发送 `If-None-Match` 和 `If-Modified-Since`，但服务器**优先校验 ETag**。  
只有 ETag 匹配失败时，才回退到时间戳比较。

> 📌 原因：ETag 能检测到**秒内多次修改**或**内容不变但时间戳变**的情况。
 
### Q4：HTTPS 中的证书是如何防止中间人攻击的？

**回答**：  
1. 服务器证书包含**公钥 + 域名 + CA 签名**；
2. 浏览器内置**可信 CA 列表**，可验证签名链；
3. 若攻击者伪造证书，其签名无法通过 CA 公钥验证；
4. 若域名不匹配（如访问 a.com 却收到 b.com 证书），浏览器会告警。

> 🔒 **关键**：信任链依赖于 CA 的私钥不泄露 + 浏览器预置根证书。
 
### Q5：HTTP/2 的服务器推送（Server Push）有什么风险？为何被部分弃用？

**回答**：  
**风险**：
- 推送未被请求的资源，可能浪费带宽；
- 客户端无法控制推送内容，易导致缓存污染；
- 与 Service Worker 缓存策略冲突。

**现状**：  
Chrome 于 2020 年**移除对 Server Push 的支持**，建议改用：
- `<link rel="preload">` 主动预加载
- 资源内联（Critical CSS/JS）

> 💡 结论：**Server Push 已不推荐使用**，优先考虑其他优化手段。
 
## 九、总结：HTTP 最佳实践

| 场景 | 推荐方案 |
|------|--------|
| API 设计 | 用 RESTful 语义 + HTTPS |
| 静态资源 | 设置 `Cache-Control: max-age=31536000` + 文件哈希 |
| 敏感操作 | POST + CSRF Token + HTTPS |
| 性能优化 | 升级 HTTP/2 + 启用 Brotli 压缩 |
| 安全加固 | 启用 HSTS + CSP + TLS 1.3 |

> ✅ **黄金法则**：**永远不要在 HTTP 上传输敏感信息**；缓存策略需结合构建工具（如 Webpack 文件指纹）。
