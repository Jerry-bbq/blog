import{_ as n,o as s,c as a,e as t}from"./app.43be7e94.js";const p={},o=t(`<h1 id="\u6839\u636E\u56FE\u7247url-\u4E0B\u8F7D\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u56FE\u7247url-\u4E0B\u8F7D\u56FE\u7247" aria-hidden="true">#</a> \u6839\u636E\u56FE\u7247url\uFF0C\u4E0B\u8F7D\u56FE\u7247</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">urlDownloadIamge</span><span class="token punctuation">(</span><span class="token parameter">imgsrc<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u8981\u4E0B\u8F7D\u56FE\u7247\u5730\u5740\u548C\u56FE\u7247\u540D</span>
    <span class="token keyword">let</span> image <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u89E3\u51B3\u8DE8\u57DF Canvas \u6C61\u67D3\u95EE\u9898</span>
    image<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;crossOrigin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;anonymous&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    image<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;canvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> image<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
      canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> image<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
      <span class="token keyword">let</span> context <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      context<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> image<span class="token punctuation">.</span>width<span class="token punctuation">,</span> image<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> url <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">&quot;image/png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5F97\u5230\u56FE\u7247\u7684base64\u7F16\u7801\u6570\u636E</span>
      <span class="token keyword">let</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u751F\u6210\u4E00\u4E2Aa\u5143\u7D20</span>
      <span class="token keyword">let</span> event <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MouseEvent</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u5355\u51FB\u4E8B\u4EF6</span>
      a<span class="token punctuation">.</span>download <span class="token operator">=</span> name <span class="token operator">||</span> <span class="token string">&quot;photo&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u8BBE\u7F6E\u56FE\u7247\u540D\u79F0</span>
      a<span class="token punctuation">.</span>href <span class="token operator">=</span> url<span class="token punctuation">;</span> <span class="token comment">// \u5C06\u751F\u6210\u7684URL\u8BBE\u7F6E\u4E3Aa.href\u5C5E\u6027</span>
      a<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u89E6\u53D1a\u7684\u5355\u51FB\u4E8B\u4EF6</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    image<span class="token punctuation">.</span>src <span class="token operator">=</span> imgsrc<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(u,l){return s(),a("div",null,e)}var k=n(p,[["render",c],["__file","download-by-url.html.vue"]]);export{k as default};