# 前端性能优化体系

## 一、网络层优化

### 1.1 减少请求次数 & 体积
| 手段 | 原理 | 工具/配置 |
|------|------|----------|
| **资源合并** | 减少 HTTP 请求 | Webpack `splitChunks` |
| **Tree Shaking** | 移除未引用代码 | ES Module + `sideEffects: false` |
| **按需加载** | 路由/组件懒加载 | `React.lazy` / `import()` |
| **Base64 内联** | 小图转 Data URL | `url-loader` limit=8192 |
| **雪碧图** | 多图标合成一张图 | [SpriteSmith](https://github.com/twolfson/spritesmith) |

> ✅ **最佳实践**：  
> - Base64 仅用于 `<2KB` 的静态图标  
> - 雪碧图适用于高频小图（如按钮状态）  
> - 动态内容（如用户头像）**不要**用 Base64
 
### 1.2 加速传输
| 技术 | 说明 |
|------|------|
| **CDN** | 静态资源就近分发，降低延迟 |
| **Gzip/Brotli** | 文本压缩率 70%+（Nginx 开启 `gzip on`） |
| **HTTP/2** | 多路复用 + 头部压缩，减少队头阻塞 |
| **DNS Prefetch** | 提前解析域名 |
```html
<link rel="dns-prefetch" href="//cdn.example.com">
```

> 🔧 **Brotli 配置（Nginx）**：
```nginx
brotli on;
brotli_comp_level 6;
brotli_types text/css application/javascript;
```
 
## 二、构建层优化（Webpack）

### 2.1 核心策略
| 问题 | 解决方案 |
|------|--------|
| 构建慢 | `cacheDirectory` + `DllPlugin` |
| Bundle 大 | `splitChunks` + `externals` |
| 冗余代码 | Tree Shaking + Scope Hoisting |

### 2.2 关键配置示例

#### ✅ SplitChunks（推荐配置）
```js
optimization: {
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      vendor: {
        name: 'chunk-vendors',
        test: /[\\/]node_modules[\\/]/,
        priority: 10,
        chunks: 'initial'
      },
      common: {
        name: 'chunk-common',
        minChunks: 2,
        priority: 5,
        reuseExistingChunk: true
      }
    }
  }
}
```

#### ✅ Externals（CDN 替代）
```js
// webpack.config.js
externals: {
  react: 'React',
  'react-dom': 'ReactDOM'
}

// index.html
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
```

#### ✅ 可视化分析
```bash
npx webpack-bundle-analyzer dist/stats.json
```
> 💡 生成 stats.json：`webpack --profile --json > stats.json`
 
## 三、缓存策略（强 + 协商）

### 3.1 缓存决策流程（修正版）

```mermaid
graph TD
    A[发起请求] --> B{强缓存有效?}
    B -- 是 --> C[200 (from cache)]
    B -- 否 --> D{有 ETag / Last-Modified?}
    D -- 是 --> E[发送 If-None-Match / If-Modified-Since]
    E --> F{服务器返回 304?}
    F -- 是 --> G[304 (Not Modified)]
    F -- 否 --> H[200 + 新资源]
    D -- 否 --> I[完整请求 → 200]
```

### 3.2 生产级 Nginx 配置
```nginx
# HTML 不缓存
location ~* \.html$ {
  add_header Cache-Control "no-cache, no-store";
}

# 静态资源长期缓存 + immutable
location ~* \.(js|css|png|jpg|woff2)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}
```

> ⚠️ **immutable 必须配合文件指纹**（如 `app.a1b2c3.js`）
 
## 四、渲染性能优化

### 4.1 大列表渲染（10万条数据）
| 方案 | 优点 | 缺点 |
|------|------|------|
| `setTimeout` 分片 | 简单 | 不精准，可能掉帧 |
| `requestAnimationFrame` | 流畅 | 仍可能阻塞主线程 |
| **虚拟滚动**（推荐） | 只渲染可视区域 | 实现复杂 |

> ✅ **终极方案**：使用 [react-window](https://github.com/bvaughn/react-window) 或 [vue-virtual-scroll-list](https://github.com/tangbc/vue-virtual-scroll-list)

### 4.2 其他技巧
- **冻结数据**：`Object.freeze(data)` 阻止 Vue/React 响应式追踪
- **文档碎片**：`DocumentFragment` 减少重排
- **防抖节流**：搜索/滚动事件优化
- **CSS 优化**：避免 `*` 选择器，减少层级嵌套
 
## 五、性能监控体系

### 5.1 核心指标（Web Vitals）
| 指标 | 说明 | 目标 |
|------|------|------|
| **LCP** | 最大内容绘制 | < 2.5s |
| **FID/INP** | 交互响应速度 | < 100ms |
| **CLS** | 累积布局偏移 | < 0.1 |

> 📊 使用 [web-vitals](https://github.com/GoogleChrome/web-vitals) 上报：
```js
import {onLCP, onINP, onCLS} from 'web-vitals';
onLCP(sendToAnalytics);
onINP(sendToAnalytics);
onCLS(sendToAnalytics);
```

### 5.2 Navigation Timing（关键时间计算）
```js
const t = performance.timing;

// 白屏时间
const whiteScreen = t.domLoading - t.fetchStart;

// DOM Ready
const domReady = t.domContentLoadedEventEnd - t.fetchStart;

// 首屏加载
const loadTime = t.loadEventEnd - t.fetchStart;
```

> 📌 **注意**：`performance.timing` 在 Chrome 128+ 已废弃，改用 `PerformanceNavigationTiming`。
 
## 六、高频面试题（附答案）

### Q1：Webpack 构建慢，如何优化？
**答**：
1. **缓存**：`babel-loader?cacheDirectory`
2. **多进程**：`thread-loader` / `HappyPack`
3. **预编译**：`DllPlugin` 提取 vendor
4. **缩小范围**：`include/exclude`
5. **升级工具链**：Webpack 5 + SWC 替代 Babel
 
### Q2：Base64 和雪碧图如何选型？
**答**：
- **Base64**：适合极小（<2KB）、低频更新、无法合并的图标
- **雪碧图**：适合多个小图（如 icon set），减少请求
- **优先级**：雪碧图 > Base64 > 单独请求

> 💡 现代方案：使用 **SVG Symbol** 或 **Icon Font**
 
### Q3：如何监控真实用户性能？
**答**：
1. 使用 `web-vitals` 采集 LCP/INP/CLS
2. 通过 `navigator.sendBeacon()` 上报（保证页面关闭前发送）
3. 结合 RUM（Real User Monitoring）平台（如 Sentry、Datadog）

```js
function sendToAnalytics(metric) {
  navigator.sendBeacon('/analytics', JSON.stringify(metric));
}
```
 
## 七、总结：性能优化 Checklist

✅ **网络**  
- [ ] 启用 HTTP/2 + Brotli  
- [ ] 静态资源上 CDN  
- [ ] DNS Prefetch 关键域名  

✅ **构建**  
- [ ] SplitChunks 分离 vendor  
- [ ] Tree Shaking + Scope Hoisting  
- [ ] Bundle Analyzer 定期审查  

✅ **缓存**  
- [ ] HTML 不缓存，静态资源 immutable  
- [ ] ETag + Last-Modified 双保险  

✅ **渲染**  
- [ ] 虚拟滚动处理大数据  
- [ ] 防抖节流优化交互  
- [ ] CSS 选择器扁平化  

✅ **监控**  
- [ ] 接入 Web Vitals  
- [ ] 上报核心指标到后端  
- [ ] 设置性能告警阈值 