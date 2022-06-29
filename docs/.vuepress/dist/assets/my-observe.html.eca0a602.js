import{_ as n,o as s,c as a,a as p}from"./app.9fbd2eaa.js";const t={},o=p(`<h1 id="observe\u7C7B\u7684\u7B80\u5355\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#observe\u7C7B\u7684\u7B80\u5355\u5B9E\u73B0" aria-hidden="true">#</a> Observe\u7C7B\u7684\u7B80\u5355\u5B9E\u73B0</h1><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> myVue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyVue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">school</span><span class="token operator">:</span> <span class="token string">&#39;\u5B89\u5E86\u5E08\u8303\u5927\u5B66&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">12</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">MyVue</span><span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$options <span class="token operator">=</span> options<span class="token punctuation">;</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">observe</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u6570\u636E\u4EE3\u7406\uFF0C\u7528this\u4EE3\u7406 this._data\uFF0C\u53EF\u4EE5\u4F7F\u7528this\u76F4\u63A5\u8BBF\u95EEdata\u4E2D\u7684\u5C5E\u6027</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u4F1A\u8D70\u5230Observe\u65B9\u6CD5\u4E2D\u7684get</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newValue<span class="token punctuation">;</span> <span class="token comment">// \u4F1A\u8D70\u5230Observe\u65B9\u6CD5\u4E2D\u7684set</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u89C2\u5BDF\u5BF9\u8C61</span>
<span class="token keyword">function</span> <span class="token function">observe</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> data <span class="token operator">!==</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Observe</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Observe</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> val <span class="token operator">=</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">observe</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9012\u5F52\u89C2\u5BDF\u5BF9\u8C61</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> val<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        val <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
        <span class="token function">observe</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6DF1\u5EA6\u54CD\u5E94\u5F0F\uFF0C\u66F4\u6539\u6570\u636E\u540E\uFF0C\u65B0\u6570\u636E\u6CA1\u6709get set</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,2),e=[o];function c(u,l){return s(),a("div",null,e)}var i=n(t,[["render",c],["__file","my-observe.html.vue"]]);export{i as default};
