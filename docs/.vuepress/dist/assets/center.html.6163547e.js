import{_ as n,o as s,c as a,a as t}from"./app.ec8717cf.js";const e={},p=t(`<h1 id="\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D\u7684\u65B9\u5F0F" aria-hidden="true">#</a> \u6C34\u5E73\u5782\u76F4\u5C45\u4E2D\u7684\u65B9\u5F0F</h1><h2 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="position" tabindex="-1"><a class="header-anchor" href="#position" aria-hidden="true">#</a> position</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="position-transform" tabindex="-1"><a class="header-anchor" href="#position-transform" aria-hidden="true">#</a> position + transform</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>transform\u8FD8\u6709\u5176\u4ED6\u7684\u5C5E\u6027:</p><ol><li>\u8F6C\u6362: translate(x,y)\u3001translateX(x)\u3001translateY(y)\u3001translateZ(z)\u3001translate3d(x,y,z)</li><li>\u7F29\u653E: scale((x,y)\u3001scaleX(x)\u3001scaleY(y)\u3001scaleZ(z)\u3001scale3d((x,y,z)</li><li>\u65CB\u8F6C: rotate(angle)\u3001rotateX(angle)\u3001rotateY(angle)\u3001rotateZ(angle)\u3001rotate3d(x,y,z,angle)</li><li>\u503E\u659C: skew(x-angle,y-angle)\u3001skewX(angle)\u3001skewY(angle)</li><li>\u900F\u89C6: perspective(n)</li></ol></div><h2 id="table-cell" tabindex="-1"><a class="header-anchor" href="#table-cell" aria-hidden="true">#</a> table-cell</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">html, body</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.inner</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[p];function l(i,o){return s(),a("div",null,c)}var r=n(e,[["render",l],["__file","center.html.vue"]]);export{r as default};
