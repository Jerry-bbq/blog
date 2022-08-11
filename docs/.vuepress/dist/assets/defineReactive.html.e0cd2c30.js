import{_ as n,o as s,c as a,e as p}from"./app.d10a1e38.js";const t={},o=p(`<p>\u4F5C\u7528\uFF1A</p><ol><li>\u5229\u7528 Object.defineProperty \u7ED9\u6570\u636E\u6DFB\u52A0\u4E86 getter \u548C setter</li><li>getter \u505A\u7684\u4E8B\u60C5\u662F\u4F9D\u8D56\u6536\u96C6 - <code>dep.depend()</code></li><li>setter \u505A\u7684\u4E8B\u60C5\u662F\u6D3E\u53D1\u66F4\u65B0 - <code>dep.notify()</code></li></ol><p>\u5173\u952E\u6B65\u9AA4\uFF1A</p><ol><li><p>\u5B9E\u4F8B\u5316Dep</p></li><li><p>\u83B7\u53D6 obj \u7684\u5C5E\u6027\u63CF\u8FF0\u7B26 property</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5E38\u89C4\u7684\u5BF9\u8C61</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
<span class="token comment">// vue data\u4E2D\u5B9A\u4E49\u7684\u6570\u636E</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">get</span><span class="token operator">:</span> f <span class="token function">proxyGetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">set</span><span class="token operator">:</span> f <span class="token function">proxySetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u5BF9\u5B50\u5BF9\u8C61\u9012\u5F52\u8C03\u7528 observe \u65B9\u6CD5</p></li><li><p>Object.defineProperty \u53BB\u7ED9 obj \u7684\u5C5E\u6027 key \u6DFB\u52A0 getter \u548C setter</p></li></ol><p>\u6E90\u7801\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">defineReactive</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">obj</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">val</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  customSetter<span class="token operator">?</span><span class="token operator">:</span> <span class="token operator">?</span>Function<span class="token punctuation">,</span>
  shallow<span class="token operator">?</span><span class="token operator">:</span> boolean</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521D\u59CB\u5316\u4F9D\u8D56</span>
  <span class="token keyword">const</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// \u83B7\u53D6 obj \u7684\u5C5E\u6027\u63CF\u8FF0\u7B26 property</span>
  <span class="token keyword">const</span> property <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>configurable <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// cater for pre-defined getter/setters</span>
  <span class="token comment">// \u83B7\u53D6\u5BF9\u8C61\u5C5E\u6027\u9884\u5B9A\u4E49\u7684get\uFF0Cset\u51FD\u6570</span>
  <span class="token keyword">const</span> getter <span class="token operator">=</span> property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>get
  <span class="token keyword">const</span> setter <span class="token operator">=</span> property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>set

  <span class="token comment">// \u5982\u679C\u5BF9\u8C61\u5C5E\u6027\u7684getter\u548Csetter\u53EA\u5B58\u5728\u4E00\u4E2A</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">!</span>getter <span class="token operator">||</span> setter<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> arguments<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    val <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7ED9\u975E VNode \u7684\u5BF9\u8C61\u7C7B\u578B\u6570\u636E val \u6DFB\u52A0\u4E00\u4E2A Observer</span>
  <span class="token keyword">let</span> childOb <span class="token operator">=</span> <span class="token operator">!</span>shallow <span class="token operator">&amp;&amp;</span> <span class="token function">observe</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>

  <span class="token comment">// \u7ED9\u5BF9\u8C61\u5C5E\u6027\u8BBE\u7F6E \u5C5E\u6027\u63CF\u8FF0\u7B26\u5BF9\u8C61</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveGetter</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679Cgetter\u5B58\u5728\uFF0C\u8C03\u7528obj\u7684getter\uFF1B\u5426\u5219\u4F7F\u7528val</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> getter <span class="token operator">?</span> <span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> val
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>childOb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u6536\u96C6\u4F9D\u8D56\uFF0C\u7531Vue.set\u901A\u77E5ob.dep.notify\u89E6\u53D1\u4F9D\u8D56\u901A\u77E5</span>
          childOb<span class="token punctuation">.</span>dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

          <span class="token comment">// \u5982\u679Cvalue\u662F\u4E2A\u6570\u7EC4\uFF0C\u5C31\u901A\u8FC7 dependArray \u628A\u6570\u7EC4\u6BCF\u4E2A\u5143\u7D20\u4E5F\u53BB\u505A\u4F9D\u8D56\u6536\u96C6</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">dependArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveSetter</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679Cgetter\u5B58\u5728\uFF0C\u5219\u8C03\u7528getter</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> getter <span class="token operator">?</span> <span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> val
      <span class="token comment">/* eslint-disable no-self-compare */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">===</span> value <span class="token operator">||</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> newVal <span class="token operator">&amp;&amp;</span> value <span class="token operator">!==</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token comment">/* eslint-enable no-self-compare */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> customSetter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">customSetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// #7981: for accessor properties without setter</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>getter <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>setter<span class="token punctuation">)</span> <span class="token keyword">return</span>
      <span class="token comment">// \u5982\u679C\u5BF9\u8C61\u5C5E\u6027\u7684set\u5B58\u5728\uFF0C\u5219\u76F4\u63A5\u8C03\u7528\u5BF9\u8C61\u5C5E\u6027\u7684set</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>setter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> newVal<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        val <span class="token operator">=</span> newVal
      <span class="token punctuation">}</span>
      childOb <span class="token operator">=</span> <span class="token operator">!</span>shallow <span class="token operator">&amp;&amp;</span> <span class="token function">observe</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token comment">// \u5982\u679Cshallow\u4E3Afalse\u7684\u60C5\u51B5\uFF0C\u4F1A\u5BF9\u65B0\u8BBE\u7F6E\u7684\u503C\u53D8\u6210\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61</span>
      dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u901A\u77E5\u6240\u6709\u7684\u8BA2\u9605\u8005</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),e=[o];function c(l,r){return s(),a("div",null,e)}var k=n(t,[["render",c],["__file","defineReactive.html.vue"]]);export{k as default};
