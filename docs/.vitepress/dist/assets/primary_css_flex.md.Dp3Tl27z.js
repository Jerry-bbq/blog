import{_ as a,c as i,o as s,a5 as e}from"./chunks/framework.FI019Rde.js";const l="/blog/assets/flex-box.DT7Cgb-K.png",g=JSON.parse('{"title":"flex","description":"","frontmatter":{},"headers":[],"relativePath":"primary/css/flex.md","filePath":"primary/css/flex.md","lastUpdated":1707813350000}'),t={name:"primary/css/flex.md"},n=e('<h1 id="flex" tabindex="-1">flex <a class="header-anchor" href="#flex" aria-label="Permalink to &quot;flex&quot;">​</a></h1><p>flex是<code>flexible box</code>的缩写，又叫弹性布局；任何一个容器都可以指定为 Flex 布局，比如块级元素div、行内元素span等。</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>设为flex布局以后，子元素的<code>float</code>、<code>clear</code>和<code>vertical-align</code>属性将失效。</p></div><p>采用flex布局的元素，称为容器flex container，他所有的子元素称为容器成员flex item。</p><p>默认有两根轴：</p><ul><li>水平的主轴 <strong>main axis</strong></li><li>垂直的交叉轴 <strong>cross axis</strong></li></ul><p><img src="'+l+`" alt=""></p><h2 id="容器属性" tabindex="-1">容器属性 <a class="header-anchor" href="#容器属性" aria-label="Permalink to &quot;容器属性&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex-direction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">row</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex-wrap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nowrap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* flex-flow: row nowrap; */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  align-items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  justify-content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="flex-direction" tabindex="-1">flex-direction <a class="header-anchor" href="#flex-direction" aria-label="Permalink to &quot;flex-direction&quot;">​</a></h3><p>决定主轴的方向</p><ul><li>row(默认值)</li><li>row-reverse</li><li>column</li><li>column-reverse</li></ul><h3 id="flex-wrap" tabindex="-1">flex-wrap <a class="header-anchor" href="#flex-wrap" aria-label="Permalink to &quot;flex-wrap&quot;">​</a></h3><p>默认项目是排列在一条轴线上的，如果一条轴线排不下，如何换行</p><ul><li>nowrap(默认值)</li><li>wrap</li><li>wrap-reverse</li></ul><h3 id="flex-flow" tabindex="-1">flex-flow <a class="header-anchor" href="#flex-flow" aria-label="Permalink to &quot;flex-flow&quot;">​</a></h3><p>是<code>flex-direction</code>属性和<code>flex-wrap</code>属性的简写形式，默认值为<code>row nowrap</code></p><h3 id="justify-content" tabindex="-1">justify-content <a class="header-anchor" href="#justify-content" aria-label="Permalink to &quot;justify-content&quot;">​</a></h3><p>定义了项目在主轴上项目的对齐方式</p><ul><li>flex-start(默认值)</li><li>flex-end</li><li>center</li><li>space-between</li><li>space-around</li></ul><h3 id="align-items" tabindex="-1">align-items <a class="header-anchor" href="#align-items" aria-label="Permalink to &quot;align-items&quot;">​</a></h3><p>定义项目在交叉轴上如何对齐</p><ul><li>flex-start</li><li>flex-end</li><li>center</li><li>baseline</li><li>stretch</li></ul><h3 id="align-content" tabindex="-1">align-content <a class="header-anchor" href="#align-content" aria-label="Permalink to &quot;align-content&quot;">​</a></h3><p>定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用</p><ul><li>flex-start</li><li>flex-end</li><li>center</li><li>space-between</li><li>space-around</li><li>stretch</li></ul><h2 id="项目属性" tabindex="-1">项目属性 <a class="header-anchor" href="#项目属性" aria-label="Permalink to &quot;项目属性&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="order" tabindex="-1">order <a class="header-anchor" href="#order" aria-label="Permalink to &quot;order&quot;">​</a></h3><p>定义项目的排列顺序。数值越小，排列越靠前，默认为0</p><h3 id="flex-grow" tabindex="-1">flex-grow <a class="header-anchor" href="#flex-grow" aria-label="Permalink to &quot;flex-grow&quot;">​</a></h3><p>定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大</p><h3 id="flex-shrink" tabindex="-1">flex-shrink <a class="header-anchor" href="#flex-shrink" aria-label="Permalink to &quot;flex-shrink&quot;">​</a></h3><p>定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小</p><h3 id="flex-basis" tabindex="-1">flex-basis <a class="header-anchor" href="#flex-basis" aria-label="Permalink to &quot;flex-basis&quot;">​</a></h3><p>定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小</p><h3 id="flex-1" tabindex="-1">flex <a class="header-anchor" href="#flex-1" aria-label="Permalink to &quot;flex&quot;">​</a></h3><p>flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选</p><h3 id="align-self" tabindex="-1">align-self <a class="header-anchor" href="#align-self" aria-label="Permalink to &quot;align-self&quot;">​</a></h3><p>align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch</p><p><a href="https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html" target="_blank" rel="noreferrer">参考</a></p>`,41),r=[n];function h(o,p,d,c,k,f){return s(),i("div",null,r)}const u=a(t,[["render",h]]);export{g as __pageData,u as default};