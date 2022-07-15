import{_ as n,o as s,c as a,d as p}from"./app.e7c60155.js";var t="/blog/assets/dfs.86f05c62.gif",o="/blog/assets/bfs.389e5b2c.gif";const e={},c=p('<h1 id="\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22\u548C\u5E7F\u5EA6\u4F18\u5148\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22\u548C\u5E7F\u5EA6\u4F18\u5148\u641C\u7D22" aria-hidden="true">#</a> \u6DF1\u5EA6\u4F18\u5148\u641C\u7D22\u548C\u5E7F\u5EA6\u4F18\u5148\u641C\u7D22</h1><h2 id="\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22" aria-hidden="true">#</a> \u6DF1\u5EA6\u4F18\u5148\u641C\u7D22</h2><p><code>\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22</code>\uFF08Depth-first search\uFF09\uFF0C\u4ECE\u56FE\u4E2D\u4E5F\u53EF\u4EE5\u770B\u51FA\u6765\uFF0C\u662F\u4ECE\u6839\u8282\u70B9\u5F00\u59CB\uFF0C\u6CBF\u6811\u7684\u6DF1\u5EA6\u8FDB\u884C\u641C\u7D22\uFF0C\u5C3D\u53EF\u80FD\u6DF1\u7684\u641C\u7D22\u5206\u652F\u3002\u5F53\u8282\u70B9\u6240\u5728\u7684\u8FB9\u90FD\u5DF2\u7ECF\u641C\u591A\u8FC7\uFF0C\u5219\u56DE\u6EAF\u5230\u4E0A\u4E00\u4E2A\u8282\u70B9\uFF0C\u518D\u641C\u7D22\u5176\u4F59\u7684\u8FB9\u3002</p><p>\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22\u91C7\u7528<code>\u6808\u7ED3\u6784</code>\uFF0C<code>\u540E\u8FDB\u5148\u51FA</code>\u3002</p><p><img src="'+t+'" alt="dfs"></p><h2 id="\u5E7F\u5EA6\u4F18\u5148\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u5E7F\u5EA6\u4F18\u5148\u641C\u7D22" aria-hidden="true">#</a> \u5E7F\u5EA6\u4F18\u5148\u641C\u7D22</h2><p><code>\u5E7F\u5EA6\u4F18\u5148\u641C\u7D22</code>\uFF08Breadth-first search\uFF09\uFF0C\u4ECE\u56FE\u4E2D\u4E5F\u53EF\u4EE5\u770B\u51FA\u6765\uFF0C\u662F\u4ECE\u6839\u8282\u70B9\u5F00\u59CB\uFF0C\u6CBF\u6811\u7684\u5BBD\u5EA6\u8FDB\u884C\u641C\u7D22\uFF0C\u5982\u679C\u6240\u6709\u8282\u70B9\u90FD\u88AB\u8BBF\u95EE\uFF0C\u5219\u7B97\u6CD5\u4E2D\u6B62\u3002</p><p>\u5E7F\u5EA6\u4F18\u5148\u641C\u7D22\u91C7\u7528<code>\u961F\u5217\u7684\u5F62\u5F0F</code>\uFF0C<code>\u5148\u8FDB\u5148\u51FA</code>\u3002</p><p><img src="'+o+`" alt="bfs"></p><h2 id="\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528" aria-hidden="true">#</a> \u5E94\u7528</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> tree <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u4E2D\u56FD&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5317\u4EAC&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u671D\u9633\u7FA4\u4F17&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u897F\u5B81\u5E02&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;0521&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u6D77\u6DC0\u533A&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u660C\u5E73\u533A&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u6D59\u6C5F\u7701&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u676D\u5DDE\u5E02&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;0571&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5609\u5174\u5E02&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u7ECD\u5174\u5E02&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5B81\u6CE2\u5E02&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> node <span class="token operator">=</span> dfs <span class="token operator">/</span> <span class="token function">bfs</span><span class="token punctuation">(</span>tree<span class="token punctuation">,</span> <span class="token string">&#39;\u897F\u5B81\u5E02&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA\uFF1A { name: &#39;\u897F\u5B81\u5E02&#39;, code: &#39;0521&#39; }</span>
</code></pre></div><h3 id="\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52" aria-hidden="true">#</a> \u9012\u5F52</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u9012\u5F52</span>
<span class="token keyword">function</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token parameter">tree<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>tree<span class="token punctuation">.</span>name <span class="token operator">===</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tree
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tree<span class="token punctuation">.</span>name <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>tree<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> tree<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">search</span><span class="token punctuation">(</span>tree<span class="token punctuation">.</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> result
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6DF1\u5EA6\u4F18\u5148\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5EA6\u4F18\u5148\u904D\u5386" aria-hidden="true">#</a> \u6DF1\u5EA6\u4F18\u5148\u904D\u5386</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u6808</span>
<span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">tree<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> item <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>name <span class="token operator">==</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">=</span> item
      <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> children <span class="token operator">=</span> item<span class="token punctuation">.</span>children
    <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> children<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5E7F\u5EA6\u4F18\u5148\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u5E7F\u5EA6\u4F18\u5148\u904D\u5386" aria-hidden="true">#</a> \u5E7F\u5EA6\u4F18\u5148\u904D\u5386</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u961F\u5217</span>
<span class="token keyword">function</span> <span class="token function">bfs</span><span class="token punctuation">(</span><span class="token parameter">tree<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  queue<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> item <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>name <span class="token operator">==</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">=</span> item
      <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> children <span class="token operator">=</span> item<span class="token punctuation">.</span>children
    <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h3><h4 id="\u6DF1\u641C\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u641C\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> \u6DF1\u641C\u4F18\u7F3A\u70B9</h4><ul><li>\u80FD\u627E\u51FA\u6240\u6709\u89E3\u51B3\u65B9\u6848</li><li>\u4F18\u5148\u641C\u7D22\u4E00\u68F5\u5B50\u6811\uFF0C\u7136\u540E\u662F\u53E6\u4E00\u68F5\uFF0C\u6240\u4EE5\u548C\u5E7F\u641C\u5BF9\u6BD4\uFF0C\u6709\u7740\u5185\u5B58\u9700\u8981\u76F8\u5BF9\u8F83\u5C11\u7684\u4F18\u70B9</li><li>\u8981\u591A\u6B21\u904D\u5386\uFF0C\u641C\u7D22\u6240\u6709\u53EF\u80FD\u8DEF\u5F84\uFF0C\u6807\u8BC6\u505A\u4E86\u4E4B\u540E\u8FD8\u8981\u53D6\u6D88\u3002</li><li>\u5728\u6DF1\u5EA6\u5F88\u5927\u7684\u60C5\u51B5\u4E0B\u6548\u7387\u4E0D\u9AD8</li></ul><h4 id="\u5E7F\u641C\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5E7F\u641C\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> \u5E7F\u641C\u4F18\u7F3A\u70B9</h4><ul><li>\u5BF9\u4E8E\u89E3\u51B3\u6700\u77ED\u6216\u6700\u5C11\u95EE\u9898\u7279\u522B\u6709\u6548\uFF0C\u800C\u4E14\u5BFB\u627E\u6DF1\u5EA6\u5C0F</li><li>\u6BCF\u4E2A\u7ED3\u70B9\u53EA\u8BBF\u95EE\u4E00\u904D\uFF0C\u7ED3\u70B9\u603B\u662F\u4EE5\u6700\u77ED\u8DEF\u5F84\u88AB\u8BBF\u95EE\uFF0C\u6240\u4EE5\u7B2C\u4E8C\u6B21\u8DEF\u5F84\u786E\u5B9A\u4E0D\u4F1A\u6BD4\u7B2C\u4E00\u6B21\u77ED</li><li>\u5185\u5B58\u8017\u8D39\u91CF\u5927\uFF08\u9700\u8981\u5F00\u5927\u91CF\u7684\u6570\u7EC4\u5355\u5143\u7528\u6765\u5B58\u50A8\u72B6\u6001\uFF09</li></ul>`,22),l=[c];function u(r,k){return s(),a("div",null,l)}var d=n(e,[["render",u],["__file","dfs-bfs.html.vue"]]);export{d as default};
