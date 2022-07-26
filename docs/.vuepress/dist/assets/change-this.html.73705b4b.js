import{_ as n,o as s,c as a,e as p}from"./app.26d05e8b.js";const t={},o=p(`<h1 id="\u6539\u53D8this\u6307\u5411" tabindex="-1"><a class="header-anchor" href="#\u6539\u53D8this\u6307\u5411" aria-hidden="true">#</a> \u6539\u53D8this\u6307\u5411</h1><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// demo</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>xxx <span class="token operator">=</span> <span class="token number">3</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>                     <span class="token comment">// 1,2,Window</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xxx<span class="token punctuation">)</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">m</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>

<span class="token comment">// \u6539\u53D8this\u6307\u5411</span>
<span class="token comment">// call\u53C2\u6570\u5E73\u94FA</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>            <span class="token comment">// 1,2, obj</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>      <span class="token comment">// 1,2, Window</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>            <span class="token comment">// 1,2, Window</span>
<span class="token comment">// apply\u53C2\u6570\u4E3A\u6570\u7EC4</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>         <span class="token comment">// 1,2, obj</span>

<span class="token comment">// bind\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u51FD\u6570\uFF0C\u4E3A\u4E86\u770B\u5230\u7ED3\u679C\uFF0C\u6211\u4EEC\u53BB\u6267\u884C\u4E0B\u51FD\u6570</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>            <span class="token comment">// 3,4, obj</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>         <span class="token comment">// 5,3, obj</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>      <span class="token comment">// 5,6, obj</span>
</code></pre></div><h2 id="call-apply-bind\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#call-apply-bind\u533A\u522B" aria-hidden="true">#</a> call/apply/bind\u533A\u522B</h2><table><thead><tr><th>api</th><th>\u51FD\u6570\u662F\u5426\u6267\u884C</th><th>this\u6307\u5411</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>call</td><td>\u6267\u884C</td><td>\u6307\u5411\u7B2C\u4E00\u4E2A\u53C2\u6570</td><td>call(obj, param1,param1...)\uFF0C\u53C2\u6570\u5217\u8868</td></tr><tr><td>apply</td><td>\u6267\u884C</td><td>\u6307\u5411\u7B2C\u4E00\u4E2A\u53C2\u6570</td><td>apply(obj, [param1,param1...])\uFF0C\u53C2\u6570\u662F\u6570\u7EC4</td></tr><tr><td>bind</td><td>\u8FD4\u56DE\u7ED1\u5B9Athis\u4E4B\u540E\u7684\u65B0\u7684\u51FD\u6570 <br>\uFF08\u65B0\u51FD\u6570\u5185\u90E8\u4F1A\u8C03\u7528\u539F\u6765\u7684\u51FD\u6570\uFF09</td><td>\u6307\u5411\u7B2C\u4E00\u4E2A\u53C2\u6570</td><td>bind(obj, param1,param1...)\uFF0C\u53C2\u6570\u53EF\u4EE5\u5206\u4E3A\u591A\u6B21\u4F20\u5165</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C obj \u4E3A <code>undefined</code> \u6216 <code>null</code>\uFF0C<code>this</code> \u6307\u5411 <code>Window</code>\u5BF9\u8C61</p><p>bind()\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u51FD\u6570\uFF0C\u5982\u679C\u8FD9\u4E2A\u8FD4\u56DE\u7684\u65B0\u7684\u51FD\u6570\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u90A3\u4E48\u6B64\u65F6 this \u4E0D\u518D\u6307\u5411\u4F20\u5165\u7ED9 bind \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u800C\u662F\u6307\u5411\u7528 new \u521B\u5EFA\u7684\u5B9E\u4F8B</p></div><h2 id="\u81EA\u5B9A\u4E49call\u548Capply" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49call\u548Capply" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49call\u548Capply</h2><p>\u5B9E\u73B0\u601D\u8DEF\uFF1A</p><ol><li>\u7ED9obj\u6DFB\u52A0\u4E00\u4E2A\u4E34\u65F6\u65B9\u6CD5\uFF0C\u65B9\u6CD5\u540D\u4EFB\u610F\uFF0C\u503C\u4E3A\u5F53\u524D\u51FD\u6570</li><li>\u901A\u8FC7obj\u8C03\u7528\u8FD9\u4E2A\u4E34\u65F6\u65B9\u6CD5\uFF0C\u5E76\u5C06\u63A5\u6536\u7684\u53C2\u6570\u4F20\u5165</li><li>\u5220\u9664obj\u4E0A\u7684\u8FD9\u4E2A\u4E34\u65F6\u65B9\u6CD5\u5C5E\u6027</li><li>\u8FD4\u56DE\u65B9\u6CD5\u7684\u6267\u884C\u7ED3\u679C</li></ol><p>call():</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \u6A21\u62DFcall
 * \u8BED\u6CD5\uFF1Afunction.call(thisArg, arg1, arg2, ...)
 * 1. \u6539\u53D8this\u6307\u5411\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5982\u679C\u4E3Aundefined\u6216null\uFF0Cthis\u6307\u5411window\u5BF9\u8C61
 * 2. \u6267\u884C\u51FD\u6570
 * 
 */</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_call</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5904\u7406obj\u662Fundefined\u6216\u8005null\u7684\u60C5\u51B5</span>
  obj <span class="token operator">=</span> obj <span class="token operator">||</span> window

  <span class="token comment">// \u7ED9obj\u6DFB\u52A0\u4E00\u4E2A\u65B9\u6CD5fn,\u8D4B\u503Cthis</span>
  obj<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token comment">// \u6267\u884Cfn\u65B9\u6CD5, \u4F20\u5165args\u53C2\u6570, \u62FF\u5230\u8FD4\u56DE\u503Cres</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
  <span class="token comment">// \u5220\u9664fn</span>
  <span class="token keyword">delete</span> obj<span class="token punctuation">.</span>fn
  <span class="token comment">// \u8FD4\u56DEres</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre></div><p>apply():</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \u6A21\u62DFapply
 * \u8BED\u6CD5\uFF1Afunc.apply(thisArg, [argsArray])
 * 1. \u6539\u53D8this\u6307\u5411\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5982\u679C\u4E3Aundefined\u6216null\uFF0Cthis\u6307\u5411window\u5BF9\u8C61
 * 2. \u6267\u884C\u51FD\u6570
 */</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_apply</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> argsArr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5904\u7406obj\u662Fundefined\u6216\u8005null\u7684\u60C5\u51B5</span>
  obj <span class="token operator">=</span> obj <span class="token operator">||</span> window

  <span class="token comment">// \u7ED9obj\u6DFB\u52A0\u4E00\u4E2A\u65B9\u6CD5fn\uFF0C\u8D4B\u503Cthis</span>
  obj<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token comment">// \u6267\u884Cfn, \u4F20\u5165\u53C2\u6570, \u5F97\u5230\u8FD4\u56DE\u503Cres</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>argsArr<span class="token punctuation">)</span>
  <span class="token comment">// \u5220\u9664fn</span>
  <span class="token keyword">delete</span> obj<span class="token punctuation">.</span>fn
  <span class="token comment">// \u8FD4\u56DEres</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u81EA\u5B9A\u4E49bind" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49bind" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49bind</h2><p>\u5B9E\u73B0\u601D\u8DEF\uFF1A</p><ol><li>\u8FD4\u56DE\u4E00\u4E2A\u65B0\u51FD\u6570</li><li>\u5728\u65B0\u51FD\u6570\u5185\u90E8\u901A\u8FC7\u539F\u51FD\u6570\u5BF9\u8C61\u7684<code>call</code>\u65B9\u6CD5\u6765\u6267\u884C\u539F\u51FD\u6570\uFF0C\u6307\u5B9A<code>this</code>\u4E3A<code>obj</code>\uFF0C\u6307\u5B9A\u53C2\u6570\u4E3Abind\u8C03\u7528\u7684\u53C2\u6570\u548C\u540E\u9762\u65B0\u51FD\u6570\u8C03\u7528\u7684\u53C2\u6570</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \u6A21\u62DFbind
 * \u8BED\u6CD5\uFF1Afunction.bind(thisArg[, arg1[, arg2[, ...]]])
 * 1. \u6539\u53D8this\u6307\u5411\uFF0C\u51FD\u6570\u4E0D\u6267\u884C
 */</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_bind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD4\u56DE\u4E00\u4E2A\u65B0\u51FD\u6570</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8C03\u7528\u539F\u6765\u51FD\u6570, \u6307\u5B9Athis\u4E3Aobj, \u53C2\u6570\u5217\u8868\u7531args\u548Cargs2\u4F9D\u6B21\u7EC4\u6210</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>args2<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,16),c=[o];function e(l,u){return s(),a("div",null,c)}var k=n(t,[["render",e],["__file","change-this.html.vue"]]);export{k as default};
