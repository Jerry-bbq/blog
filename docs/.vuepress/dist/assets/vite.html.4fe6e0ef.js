import{_ as n,o as s,c as a,e as p}from"./app.5a30b92a.js";const t={},e=p(`<h1 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> vite</h1><p>\u524D\u7AEF\u9879\u76EE\u6784\u5EFA\u5DE5\u5177\uFF0C\u663E\u8457\u7684\u63D0\u5347\u5F00\u53D1\u4F53\u9A8C</p><p>\u6709\u4E24\u90E8\u5206\u7EC4\u6210\uFF1A</p><ul><li>\u4E00\u4E2A\u662F\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u670D\u52A1\u4E8E\u5F00\u53D1\u73AF\u5883\uFF0CESM+HMR</li><li>\u4E00\u5957\u6784\u5EFA\u6307\u4EE4\uFF0C\u670D\u52A1\u4E8E\u751F\u4EA7\u73AF\u5883\uFF0C\u7528rollup\u6253\u5305</li></ul><p>\u89E3\u51B3\u7684\u95EE\u9898\uFF1A</p><ul><li>\u7F13\u6162\u7684\u670D\u52A1\u542F\u52A8</li><li>\u7F13\u6162\u7684\u66F4\u65B0</li></ul><h2 id="\u521B\u5EFAvite\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAvite\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFAvite\u9879\u76EE</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> create vite
</code></pre></div><p>\u53EF\u4EE5\u521B\u5EFAvue\u3001react\u7B49\u6846\u67B6\u7684\u9879\u76EE\uFF0C\u4E5F\u53EF\u4EE5\u521B\u5EFA\u7EAF\u7EAF\u7684\u7EAFJS\u9879\u76EE\u3002\u4F1A\u751F\u6210<code>vite.config.js</code>\u914D\u7F6E\u6587\u4EF6</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// \u5F00\u53D1\u670D\u52A1\u5668\u9009\u9879</span>
    <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">5173</span><span class="token punctuation">,</span>
        <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://jsonplaceholder.typicode.com&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u63D2\u4EF6\u914D\u7F6E</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6784\u5EFA\u9009\u9879</span>
    <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">outDir</span><span class="token operator">:</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">assetsDir</span><span class="token operator">:</span> <span class="token string">&#39;assets&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">cssCodeSplit</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// https://rollupjs.org/guide/en/#big-list-of-options</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u9884\u89C8\u9009\u9879</span>
    <span class="token literal-property property">preview</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4\u6307\u5411 server.host</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">4173</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,11),o=[e];function r(c,l){return s(),a("div",null,o)}var u=n(t,[["render",r],["__file","vite.html.vue"]]);export{u as default};
