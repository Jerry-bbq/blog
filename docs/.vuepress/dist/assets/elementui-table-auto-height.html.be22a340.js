import{_ as n,o as s,c as a,e}from"./app.43be7e94.js";var t="/blog/assets/adaptive.58fc8e0a.gif";const p={},o=e('<h1 id="elementui\u8868\u683C\u9AD8\u5EA6\u81EA\u9002\u5E94" tabindex="-1"><a class="header-anchor" href="#elementui\u8868\u683C\u9AD8\u5EA6\u81EA\u9002\u5E94" aria-hidden="true">#</a> ElementUI\u8868\u683C\u9AD8\u5EA6\u81EA\u9002\u5E94</h1><h2 id="\u6548\u679C\u56FE" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C\u56FE" aria-hidden="true">#</a> \u6548\u679C\u56FE</h2><p><img src="'+t+`" alt="adaptive"></p><h2 id="\u6280\u672F\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u5B9E\u73B0" aria-hidden="true">#</a> \u6280\u672F\u5B9E\u73B0</h2><p>adaptive.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u81EA\u9002\u5E94\u6307\u4EE4\u5B9E\u73B0</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> addResizeListener<span class="token punctuation">,</span> removeResizeListener <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui/src/utils/resize-event&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">doResize</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">componentInstance</span><span class="token operator">:</span> $table <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> vnode
  <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> binding
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>$table<span class="token punctuation">.</span>height<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">el-$table must set the height. Such as height=&#39;100px&#39;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> bottomOffset <span class="token operator">=</span> <span class="token punctuation">(</span>value <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span>bottomOffset<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">30</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>$table<span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">const</span> height <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight <span class="token operator">-</span> el<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>top <span class="token operator">-</span> bottomOffset
  $table<span class="token punctuation">.</span>layout<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span>height<span class="token punctuation">)</span>
  $table<span class="token punctuation">.</span><span class="token function">doLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span><span class="token function-variable function">resizeListener</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">doResize</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">addResizeListener</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> el<span class="token punctuation">.</span>resizeListener<span class="token punctuation">)</span>
    <span class="token function">addResizeListener</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>document<span class="token punctuation">.</span>body<span class="token punctuation">,</span> el<span class="token punctuation">.</span>resizeListener<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">inserted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">doResize</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">unbind</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">removeResizeListener</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> el<span class="token punctuation">.</span>resizeListener<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6307\u4EE4\u6CE8\u518C\u6587\u4EF6</span>
<span class="token keyword">import</span> adaptive <span class="token keyword">from</span> <span class="token string">&#39;./adaptive&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;adaptive&#39;</span><span class="token punctuation">,</span> adaptive<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>Vue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">[</span><span class="token string">&#39;adaptive&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> adaptive
  <span class="token comment">// eslint-disable-next-line no-undef</span>
  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>install<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

adaptive<span class="token punctuation">.</span>install <span class="token operator">=</span> install
<span class="token keyword">export</span> <span class="token keyword">default</span> adaptive

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5168\u5C40\u5F15\u7528\uFF1A</p><p>main.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> adaptive <span class="token keyword">from</span> <span class="token string">&#39;@/directive/index&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>adaptive<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5355\u9875\u9762\u4F7F\u7528\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> adaptive <span class="token keyword">from</span> <span class="token string">&#39;@/directive/index&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span> adaptive <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5176\u4ED6...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),i=[o];function c(l,u){return s(),a("div",null,i)}var d=n(p,[["render",c],["__file","elementui-table-auto-height.html.vue"]]);export{d as default};