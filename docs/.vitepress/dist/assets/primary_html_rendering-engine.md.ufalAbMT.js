import{_ as a,c as e,o as i,V as t}from"./chunks/framework.jq6gLv6S.js";const s="/blog/assets/layers.51AWuFcm.png",r="/blog/assets/flow.ZbAc0Dhl.png",n="/blog/assets/webkitflow.mbFibXPy.png",l="/blog/assets/image008.6J-t7MVB.jpeg",f=JSON.parse('{"title":"浏览器","description":"","frontmatter":{},"headers":[],"relativePath":"primary/html/rendering-engine.md","filePath":"primary/html/rendering-engine.md","lastUpdated":1707813350000}'),o={name:"primary/html/rendering-engine.md"},p=t('<h1 id="浏览器" tabindex="-1">浏览器 <a class="header-anchor" href="#浏览器" aria-label="Permalink to &quot;浏览器&quot;">​</a></h1><p>浏览器的引擎主要分为<strong>渲染引擎（布局引擎）<strong>和</strong>JavaScript引擎</strong></p><h2 id="浏览器的高层组件" tabindex="-1">浏览器的高层组件 <a class="header-anchor" href="#浏览器的高层组件" aria-label="Permalink to &quot;浏览器的高层组件&quot;">​</a></h2><p><img src="'+s+`" alt="layers"></p><ul><li>User interface：<strong>用户界面</strong>，包括地址栏、前进后退按钮、书签等</li><li>Browser engine：<strong>浏览器引擎</strong>，在用户界面和渲染引擎之间传送指令</li><li>Rendering engine：<strong>渲染引擎</strong>，负责显示请求的内容，如解析HTML、CSS内容，并将解析后的内容显示在屏幕上</li><li>Networking：<strong>网络</strong>，用于网络调用，比如HTTP请求</li><li>UI backend：<strong>用户界面后端</strong>，用于绘制基础的窗口小部件，比如组合框和窗口</li><li>JavaScript interpreter：<strong>Javascript解释器</strong>，用于解析和执行Javascript代码</li><li>Data storage：<strong>数据存储</strong>，如cookie</li></ul><p>和大多数浏览器不同，chrome浏览器的每一个tab标签都分别对应一个渲染引擎，每个tab标签都是一个独立的进程</p><h2 id="渲染引擎" tabindex="-1">渲染引擎 <a class="header-anchor" href="#渲染引擎" aria-label="Permalink to &quot;渲染引擎&quot;">​</a></h2><p>市面上浏览器的渲染引擎大概有如下四类：</p><ul><li>Trident内核: IE</li><li>Gecko内核: FireFox</li><li>Presto内核: Opera7</li><li>WebKit内核: Chrome、Safari</li></ul><p>打开浏览器的控制台，通过<code>navigator.userAgent</code>查看不同浏览器内核：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">navigator.userAgent</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// chrome</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// firefox</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10.0; rv:57.0) Gecko/20100101 Firefox/57.0&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// safari</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Safari/605.1.15&quot;</span></span></code></pre></div><h3 id="渲染引擎的主流程" tabindex="-1">渲染引擎的主流程 <a class="header-anchor" href="#渲染引擎的主流程" aria-label="Permalink to &quot;渲染引擎的主流程&quot;">​</a></h3><p><img src="`+r+'" alt="flow"></p><ul><li>解析HTML文档为DOM节点，同时也会解析CSS文件，创建一个渲染树</li><li>渲染树中包含多个视觉属性（如颜色和尺寸）的矩形，这些矩形的排列顺序就是它们将在屏幕上显示的顺序</li><li>渲染树构建完成之后，进入「布局」处理阶段，也就是每个节点分配一个应出现在屏幕上的确切坐标</li><li>最后是「绘制」阶段，渲染引擎遍历渲染树，由用户界面后端层将每个节点绘制出来</li></ul><p>渲染引擎不必等到整个HTML文档解析完毕之后，就会开始构建渲染树和设置布局，在不断接受和处理来自网络的其余内容的同时，渲染引擎会将部分内容解析并显示出来</p><h3 id="渲染引擎的主流程示例" tabindex="-1">渲染引擎的主流程示例 <a class="header-anchor" href="#渲染引擎的主流程示例" aria-label="Permalink to &quot;渲染引擎的主流程示例&quot;">​</a></h3><p>Webkit主流程:</p><p><img src="'+n+'" alt="webkitflow"></p><p>Gecko渲染引擎主流程：</p><p><img src="'+l+'" alt="image008"></p><p>虽然 WebKit 和 Gecko 使用的术语略有不同，但整体流程是基本相同的。</p><p>Gecko 将视觉格式化元素组成的树称为“框架树”。每个元素都是一个框架。WebKit 使用的术语是“渲染树”，它由“渲染对象”组成。对于元素的放置，WebKit 使用的术语是“布局”，而 Gecko 称之为“重排”。对于连接 DOM 节点和可视化信息从而创建渲染树的过程，WebKit 使用的术语是“附加”。有一个细微的非语义差别，就是 Gecko 在 HTML 与 DOM 树之间还有一个称为“内容槽”的层，用于生成 DOM 元素</p><h3 id="解析parsing" tabindex="-1">解析Parsing <a class="header-anchor" href="#解析parsing" aria-label="Permalink to &quot;解析Parsing&quot;">​</a></h3><p>解析文档是指将文档转为有意义的的结构，也就是可以让代码理解和使用的结构，解析得到的结果通常代表了文档结构的节点树，它也可称为解析树或者语法树。</p><p>解析是以文档遵循的的语法规则为基础。所有可以解析的格式都必须对应确定的语法。</p><p>解析的过程分为两个子过程：<strong>词法分析</strong>和<strong>语法分析</strong></p><p>HTML 解析器的任务是将 HTML 标记解析成解析树。</p><p>HTML 语法定义，HTML 的词汇和语法在 W3C 组织创建的规范中进行了定义</p><p>HTML 的定义采用了 DTD 格式，DTD 存在一些变体。严格模式完全遵守 HTML 规范，而其他模式可支持以前的浏览器所使用的标记</p><p>解析器的输出“解析树”是由 DOM 元素和属性节点构成的树结构。DOM 是文档对象模型 (Document Object Model) 的缩写。它是 HTML 文档的对象表示，同时也是外部内容（例如 JavaScript）与 HTML 元素之间的接口。 解析树的根节点是“Document”对象。</p><h2 id="javascript引擎" tabindex="-1">JavaScript引擎 <a class="header-anchor" href="#javascript引擎" aria-label="Permalink to &quot;JavaScript引擎&quot;">​</a></h2><p>JavaScript引擎是执行JavaScript代码的软件组织。JavaScript引擎通常由浏览器供应商开发，也就是每个浏览器的JavaScript引擎多多少少都有一些区别。JavaScript引擎不仅局限于浏览器，例如V8引擎和Deno运行时系统</p><p>JavaScript引擎的作用就是用来运行JavaScript代码</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/#The_rendering_engine" target="_blank" rel="noreferrer">浏览器的工作原理：新式网络浏览器幕后揭秘</a></li><li><a href="https://gs.statcounter.com/" target="_blank" rel="noreferrer">StatCounter 浏览器统计数据</a><ul><li><a href="https://gs.statcounter.com/browser-market-share/desktop/china" target="_blank" rel="noreferrer">中国桌面端浏览器市场份额</a></li></ul></li><li><a href="https://king-hcj.github.io/2020/10/05/google-v8/#%E4%B8%80%E7%AD%89%E5%85%AC%E6%B0%91%E4%B8%8E%E9%97%AD%E5%8C%85" target="_blank" rel="noreferrer">浏览器是如何工作的：Chrome V8 让你更懂JavaScript</a></li></ul>',35),c=[p];function h(g,d,k,u,m,b){return i(),e("div",null,c)}const M=a(o,[["render",h]]);export{f as __pageData,M as default};