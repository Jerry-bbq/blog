

# 浏览器渲染性能优化：深入理解回流与重绘

> **一句话概括**：  
> **回流是“重新计算布局”，重绘是“重新上色”。回流成本远高于重绘，应尽量避免。**

## 一、核心概念

### 1. 渲染流程回顾
浏览器从 HTML 到像素的完整流程：
```
HTML → DOM Tree  
CSS → CSSOM Tree  
DOM + CSSOM → Render Tree（渲染树）  
Render Tree → Layout（布局/回流）  
Layout → Paint（绘制/重绘）  
Paint → Composite（合成）
```

### 2. 回流（Reflow / Layout）
- **定义**：当元素的**几何属性**（尺寸、位置、显示状态等）发生变化，浏览器需**重新计算整个或部分渲染树的布局**。
- **影响范围**：可能波及**父元素、兄弟元素、子元素**，甚至整页。
- **性能开销**：高（涉及大量计算）

### 3. 重绘（Repaint / Redraw）
- **定义**：当元素的**外观样式**（颜色、背景、阴影等）改变，但**不影响布局**时，浏览器只需**重新绘制该元素**。
- **影响范围**：通常仅限当前元素。
- **性能开销**：中低

> 🔥 **关键结论**：  
> **回流必定触发重绘，但重绘不一定触发回流。**

## 二、常见触发场景

### ✅ 导致**回流**的操作（高危！）
| 类别 | 示例 |
|------|------|
| **DOM 结构变更** | `appendChild`, `removeChild`, `innerHTML = ...` |
| **几何属性修改** | `width`, `height`, `padding`, `margin`, `top`, `left` |
| **内容变化** | 文本长度变化、图片未设宽高导致加载后撑开 |
| **窗口 resize** | `window.onresize` |
| **强制同步布局**（最易忽视！） | 读取 `offsetWidth`、`getComputedStyle()` 等后立即写样式 |

### ✅ 仅导致**重绘**的操作（相对安全）
- `color`, `background-color`, `box-shadow`, `opacity`（注意：`opacity` 可能触发合成层）
- `visibility: hidden`（元素仍占位，不触发回流）

> ⚠️ 注意：`transform` 和 `opacity` 是**高性能动画属性**，它们**既不触发回流也不触发重绘**，而是由 **Compositor Thread** 在合成阶段处理！

## 三、高频陷阱：强制同步布局（Forced Synchronous Layout）

这是**最容易被忽略的性能杀手**！

```js
// ❌ 危险代码：读写交替，触发多次回流
const box = document.getElementById('box');
box.style.width = '100px';
console.log(box.offsetWidth); // 强制回流！
box.style.height = '100px';
console.log(box.offsetHeight); // 再次强制回流！
```

> 💡 **原理**：  
> 浏览器为优化性能，会将多个 DOM 修改**批量延迟执行**。但一旦你在写操作后**立即读取布局属性**，浏览器不得不**立刻执行回流**以返回最新值，破坏批处理。

### ✅ 正确做法：**先读后写** 或 **缓存读取值**
```js
// ✅ 方案1：先集中读，再集中写
const width = box.offsetWidth;
const height = box.offsetHeight;
box.style.width = (width + 10) + 'px';
box.style.height = (height + 10) + 'px';

// ✅ 方案2：使用 requestAnimationFrame 批处理
requestAnimationFrame(() => {
  box.style.width = '200px';
  box.style.height = '200px';
});
```

## 四、优化策略（实战版）

### 🎨 CSS 层面
| 策略 | 原理 |
|------|------|
| **避免 table 布局** | 表格单元格相互依赖，一个单元格变化可能引发整表回流 |
| **使用 transform 替代 top/left** | `transform` 不影响文档流，仅触发合成 |
| **动画元素脱离文档流** | `position: absolute/fixed`，避免带动其他元素 |
| **避免 CSS 表达式** | 如旧 IE 的 `width: expression(...)`（现代已淘汰） |
| **预设图片宽高** | 防止加载后撑开布局 |

### ⚙️ JavaScript 层面
| 策略 | 示例 |
|------|------|
| **批量 DOM 操作** | 使用 `DocumentFragment` 或 `cloneNode` |
| **离屏操作** | 先 `display: none`，操作完再显示 |
| **缓存布局属性** | 避免循环中反复读取 `offsetWidth` |
| **使用 class 切换样式** | 而非逐条修改 `style` |
| **利用 GPU 加速** | 对动画元素加 `will-change: transform` 或 `transform: translateZ(0)` |

#### ✅ DocumentFragment 示例
```js
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const li = document.createElement('li');
  li.textContent = 'Item ' + i;
  fragment.appendChild(li);
}
document.getElementById('list').appendChild(fragment); // 仅 1 次回流
```

## 五、现代浏览器优化：合成（Composite）

> 🚀 **终极性能方案**：让动画**完全绕过回流与重绘**！

### 合成层（Composite Layer）触发条件
- `transform` 或 `opacity` 动画
- `will-change: transform`
- `<video>`, `<canvas>`, `position: fixed`
- `z-index` 形成层叠上下文

### 优势
- 由 **GPU 处理**，不阻塞主线程
- 不触发 Layout / Paint，只做位图合成

> ✅ **最佳实践**：  
> **所有动画优先使用 `transform` 和 `opacity`！**

```css
/* ✅ 高性能动画 */
.animate {
  transition: transform 0.3s, opacity 0.3s;
}
.animate:hover {
  transform: translateX(10px);
  opacity: 0.8;
}
```

## 六、调试工具推荐

1. **Chrome DevTools → Performance 面板**
   - 录制操作，查看 **Layout（紫色）**、**Paint（绿色）**、**Composite（黄色）** 耗时
2. **Rendering 面板**
   - 勾选 “Paint flashing”：高亮重绘区域
   - 勾选 “Layout Shift Regions”：高亮回流区域

## 七、总结：性能优化 Checklist

- [ ] 避免在循环中读取布局属性（`offsetWidth` 等）
- [ ] 动画使用 `transform` / `opacity`
- [ ] 批量 DOM 操作用 `DocumentFragment`
- [ ] 复杂动画元素设为 `absolute` 脱离文档流
- [ ] 图片/媒体资源预设宽高
- [ ] 使用 `requestAnimationFrame` 批处理样式修改
- [ ] 利用 `will-change` 提示浏览器创建合成层

> 💡 **面试金句**：  
> “**回流是布局的重新计算，重绘是样式的重新上色，而合成是 GPU 的魔法。**  
> 优秀的前端工程师，懂得让浏览器少干活，让 GPU 多出力。”