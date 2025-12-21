# DOM 事件机制

## 一、DOM 事件级别演进

| 级别 | 语法 | 特点 | 缺陷 |
|------|------|------|------|
| **DOM0** | `el.onclick = fn` | 简单直接 | 只能绑定一个处理函数；无法控制捕获/冒泡 |
| **DOM2** | `el.addEventListener('click', fn, false)` | 支持多监听器、可选阶段 | IE8 及以下不支持（需用 `attachEvent`） |
| **DOM3** | `el.addEventListener('keyup', fn, false)` | 新增更多事件类型（如 `textInput`） | **无新 API**，只是事件类型的扩展 |

> 📌 **关键澄清**：DOM3 并未引入新方法，只是在 DOM2 基础上**扩充了事件类型列表**。
 
## 二、DOM 事件模型与事件流

### 2.1 事件三阶段

```text
[ 捕获阶段 ] → [ 目标阶段 ] → [ 冒泡阶段 ]
```

#### 捕获流程（从外到内）：
```
window → document → html → body → ... → 目标元素
```

#### 冒泡流程（从内到外）：
```
目标元素 → ... → body → html → document → window
```

> 💡 **注意**：`window` 是事件流的起点和终点，但通常不在其上监听。
 
### 2.2 addEventListener 的第三个参数

```js
element.addEventListener(type, listener, options);
```

`options` 可为布尔值或对象：

| 形式 | 含义 |
|------|------|
| `false`（默认） | 在**冒泡阶段**触发 |
| `true` | 在**捕获阶段**触发 |
| `{ capture: true, once: true, passive: true }` | 对象形式（现代写法） |

> ✅ **最佳实践**：优先使用对象形式，语义更清晰。
 
## 三、事件代理（事件委托）

### 3.1 原理

利用**事件冒泡**，将子元素的事件监听器**委托给父元素**统一处理。

```html
<ul id="list">
  <li data-id="1">Item 1</li>
  <li data-id="2">Item 2</li>
</ul>
```

```js
document.getElementById('list').addEventListener('click', (e) => {
  if (e.target.matches('li')) {
    console.log('Clicked item:', e.target.dataset.id);
  }
});
```

### 3.2 优势

| 优势 | 说明 |
|------|------|
| **性能优化** | 减少事件监听器数量，降低内存占用 |
| **动态绑定** | 新增/删除子元素无需重新绑定事件 |
| **维护性高** | 逻辑集中，便于统一管理 |

> ⚠️ 注意：不适用于**不冒泡的事件**（如 `focus`、`blur`），需改用 `focusin`/`focusout`。
 
## 四、Event 对象核心方法与属性

| 方法/属性 | 作用 | 注意事项 |
|----------|------|--------|
| `event.preventDefault()` | 阻止默认行为（如 `<a>` 跳转） | 若 `cancelable=false` 则无效 |
| `event.stopPropagation()` | 阻止事件继续传播（停止冒泡/捕获） | 不影响当前阶段其他监听器 |
| `event.stopImmediatePropagation()` | **立即停止**所有后续监听器执行 | 包括同阶段的其他监听器 |
| `event.target` | **实际触发事件的元素** | 可能是子元素 |
| `event.currentTarget` | **当前绑定监听器的元素** | 始终等于 `this`（非箭头函数） |

> 🔍 示例：`stopImmediatePropagation` vs `stopPropagation`
```js
div.addEventListener('click', () => console.log(1));
div.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  console.log(2);
});
div.addEventListener('click', () => console.log(3)); // ❌ 不会执行
// 输出：1, 2
```
 
## 五、自定义事件（Custom Events）

### 5.1 Event vs CustomEvent

| 类型 | 是否可传数据 | 典型用途 |
|------|------------|--------|
| `new Event()` | ❌ 仅事件名 | 简单通知（如 `connected`） |
| `new CustomEvent()` | ✅ 通过 `detail` 传任意数据 | 业务通信（如组件间传参） |

```js
// 自定义带数据的事件
const event = new CustomEvent('user-login', {
  detail: { id: 123, name: 'Alice' },
  bubbles: true,
  cancelable: true
});

element.dispatchEvent(event);

// 监听
element.addEventListener('user-login', (e) => {
  console.log(e.detail.name); // "Alice"
});
```

### 5.2 关键选项说明

| 选项 | 默认值 | 作用 |
|------|-------|------|
| `bubbles` | `false` | 是否冒泡 |
| `cancelable` | `false` | 是否可被 `preventDefault()` 阻止 |
| `composed` | `false` | 是否穿越 Shadow DOM 边界（Web Components） |

> 💡 **Shadow DOM 场景**：若需在 Shadow Root 外监听事件，必须设置 `composed: true`。
 
## 六、DOMContentLoaded 与 load

| 事件 | 触发时机 | 适用场景 |
|------|--------|--------|
| `DOMContentLoaded` | HTML 解析完成，**不等待**样式表、图片、iframe | 初始化 DOM 操作 |
| `load` | 所有资源（图片、CSS、JS 等）加载完成 | 图片懒加载、性能统计 |

```js
// 现代浏览器兼容写法（无需 jQuery）
document.addEventListener('DOMContentLoaded', () => {
  // DOM ready
});

window.addEventListener('load', () => {
  // All resources loaded
});
```

> ✅ **替代 jQuery**：`$(document).ready(fn)` ≈ `DOMContentLoaded`；`$(window).load(fn)` ≈ `load`。
 
## 七、高频面试题

### Q1：`stopPropagation()` 和 `stopImmediatePropagation()` 有何区别？

**回答**：  
- `stopPropagation()`：仅阻止事件向**父/子元素**传播，但**当前元素上剩余的监听器仍会执行**；
- `stopImmediatePropagation()`：**立即停止所有后续监听器**（包括当前元素上的其他监听器）。

> 💡 示例：若一个元素绑定了 3 个 click 监听器，第 2 个调用 `stopImmediatePropagation()`，则第 3 个不会执行。
 
### Q2：事件委托有哪些局限性？如何解决？

**回答**：  
**局限性**：
1. 不适用于**不冒泡的事件**（如 `focus`、`blur`、`mouseenter`）；
2. 若中间节点调用 `stopPropagation()`，委托失效；
3. 需要额外判断 `event.target`，增加逻辑复杂度。

**解决方案**：
- 使用可冒泡的替代事件：`focusin`/`focusout` 代替 `focus`/`blur`；
- 避免在委托路径上随意阻止传播；
- 封装通用委托工具函数。
 
### Q3：`event.target` 和 `event.currentTarget` 在什么情况下相等？

**回答**：  
当**事件监听器直接绑定在目标元素上**，且**未发生冒泡/捕获**时，两者相等。

```js
button.addEventListener('click', (e) => {
  console.log(e.target === e.currentTarget); // true
});
```

若通过事件委托绑定在父元素上，则：
```js
parent.addEventListener('click', (e) => {
  console.log(e.target === e.currentTarget); // false（target 是子元素）
});
```
 
### Q4：如何实现一个支持 Shadow DOM 的自定义事件？

**回答**：  
需设置 `composed: true`，使事件能穿越 Shadow Root 边界：

```js
// 在 Shadow DOM 内部
const event = new CustomEvent('my-event', {
  detail: 'data',
  bubbles: true,
  composed: true // 关键！
});
this.dispatchEvent(event);

// 在 Light DOM 中可监听
document.addEventListener('my-event', (e) => {
  console.log(e.detail); // "data"
});
```

> 🔒 若 `composed: false`（默认），Light DOM 无法捕获该事件。
 
### Q5：为什么 `DOMContentLoaded` 比 `load` 更适合初始化 JS？

**回答**：  
- `DOMContentLoaded` 在 HTML 解析完成后立即触发，**不等待图片/CSS/iframe**，用户可更快交互；
- `load` 需等待所有资源加载，可能延迟数秒（尤其在弱网下）；
- **最佳实践**：DOM 操作放 `DOMContentLoaded`，资源相关操作（如图片尺寸计算）放 `load`。

> 💡 数据：在典型页面中，`DOMContentLoaded` 比 `load` 快 1–5 秒。
 
## 八、总结：事件使用最佳实践

| 场景 | 推荐方案 |
|------|--------|
| 绑定事件 | 优先使用 `addEventListener`（DOM2） |
| 性能敏感列表 | 使用**事件委托** |
| 阻止默认行为 | `preventDefault()`（而非 `return false`） |
| 自定义通信 | `CustomEvent` + `detail` |
| 初始化时机 | DOM 操作 → `DOMContentLoaded`；资源操作 → `load` |
| Shadow DOM 通信 | 设置 `composed: true` |

> ✅ **黄金法则**：**不要滥用 `stopPropagation()`**，它会破坏事件系统的可组合性。