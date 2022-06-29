import{_ as n,o as s,c as a,a as p}from"./app.9fbd2eaa.js";var t="/blog/assets/doubly-linked-list.90b35595.png",o="/blog/assets/doubly-insert-first.fbdc3469.png",e="/blog/assets/doubly-insert-last.e25bf503.png",c="/blog/assets/doubly-insert-any.4b91aa6b.png",l="/blog/assets/doubly-remove-first.8b3c43a5.png",u="/blog/assets/doubly-remove-last.a6d44510.png",k="/blog/assets/doubly-remove-any.678f32db.png";const r={},i=p('<h1 id="\u53CC\u5411\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u53CC\u5411\u94FE\u8868" aria-hidden="true">#</a> \u53CC\u5411\u94FE\u8868</h1><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p>\u53CC\u5411\u94FE\u8868\u548C\u666E\u901A\u94FE\u8868\u7684\u533A\u522B\u5728\u4E8E\uFF1A</p><ul><li>\u5728\u94FE\u8868\u4E2D\uFF0C\u4E00\u4E2A\u8282\u70B9\u53EA\u6709\u94FE\u5411\u4E0B\u4E00\u4E2A\u8282\u70B9\u7684\u94FE\u63A5\uFF1B</li><li>\u800C\u5728\u53CC\u5411\u94FE\u8868\u4E2D\uFF0C\u94FE\u63A5\u662F\u53CC\u5411\u7684\uFF1A\u4E00\u4E2A\u94FE\u5411\u4E0B\u4E00\u4E2A\u5143\u7D20\uFF0C\u53E6\u4E00\u4E2A\u94FE\u5411\u524D\u4E00\u4E2A\u5143\u7D20</li></ul><p><img src="'+t+'" alt="doubly-linked-list"></p><h2 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h2><h3 id="\u94FE\u8868\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868\u5143\u7D20" aria-hidden="true">#</a> \u94FE\u8868\u5143\u7D20</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u7EE7\u627F`Node`\u7C7B\u7684\u6240\u6709\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u5E76\u6269\u5C55</span>\n<span class="token keyword">class</span> <span class="token class-name">DoublyNode</span> <span class="token keyword">extends</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> next<span class="token punctuation">,</span> prev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// \u8C03\u7528\u6784\u9020\u51FD\u6570`Node`,\u521D\u59CB\u5316`element`\uFF0C`next`</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> next<span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> prev\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="\u94FE\u8868\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868\u7C7B" aria-hidden="true">#</a> \u94FE\u8868\u7C7B</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u7EE7\u627F`LinkedList`\u7C7B\u7684\u6240\u6709\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u5E76\u6269\u5C55</span>\n<span class="token keyword">class</span> <span class="token class-name">DoublyLinkedList</span> <span class="token keyword">extends</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">equalsFn <span class="token operator">=</span> defaultEquals</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// \u8C03\u7528\u6784\u9020\u51FD\u6570`LinkedList`\uFF0C\u521D\u59CB\u5316 `equalsFn`\u3001 `count` \u548C `head` \u5C5E\u6027</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>equalsFn<span class="token punctuation">)</span> \n    <span class="token comment">// \u4FDD\u5B58\u94FE\u8868\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u7684\u6307\u9488</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">undefined</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>\u5728\u5355\u5411\u94FE\u8868\u4E2D\uFF0C\u5982\u679C\u8FED\u4EE3\u65F6\u9519\u8FC7\u4E86\u8981\u627E\u7684\u5143\u7D20\uFF0C\u5C31\u9700\u8981\u56DE\u5230\u8D77\u70B9\uFF0C\u91CD\u65B0\u5F00\u59CB\u8FED\u4EE3\u3002\u8FD9\u662F\u53CC\u5411\u94FE\u8868\u7684\u4E00\u4E2A\u4F18\u52BF</p><h3 id="\u63D2\u5165\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u5143\u7D20" aria-hidden="true">#</a> \u63D2\u5165\u5143\u7D20</h3><p>\u4E24\u4E2A\u573A\u666F\uFF1A</p><ul><li>\u94FE\u8868\u4E3A\u7A7A\uFF0C\u6DFB\u52A0\u7684\u662F\u7B2C\u4E00\u4E2A\u5143\u7D20</li><li>\u94FE\u8868\u4E0D\u4E3A\u7A7A\uFF0C\u5411\u5176\u8FFD\u52A0\u5143\u7D20</li><li>\u94FE\u8868\u4E0D\u4E3A\u7A7A\uFF0C\u5411\u4EFB\u610F\u4F4D\u7F6E\u63D2\u5165\u5143\u7D20</li></ul><p>\u94FE\u8868\u4E3A\u7A7A\uFF0C\u6DFB\u52A0\u7684\u662F\u7B2C\u4E00\u4E2A\u5143\u7D20</p><p><img src="'+o+'" alt="doubly-insert-first"></p><p>\u94FE\u8868\u4E0D\u4E3A\u7A7A\uFF0C\u5411\u5176\u8FFD\u52A0\u5143\u7D20</p><p><img src="'+e+'" alt="doubly-insert-last"></p><p>\u94FE\u8868\u4E0D\u4E3A\u7A7A\uFF0C\u5411\u4EFB\u610F\u4F4D\u7F6E\u63D2\u5165\u5143\u7D20</p><p><img src="'+c+`" alt="doubly-insert-any"></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublyNode</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> node
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
        current<span class="token punctuation">.</span>prev <span class="token operator">=</span> node
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> NodeFilter
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
      current<span class="token punctuation">.</span>next <span class="token operator">=</span> node
      node<span class="token punctuation">.</span>prev <span class="token operator">=</span> current
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> node
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> previous <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
      current <span class="token operator">=</span> previous<span class="token punctuation">.</span>next
      node<span class="token punctuation">.</span>next <span class="token operator">=</span> current
      previous<span class="token punctuation">.</span>next <span class="token operator">=</span> node
      current<span class="token punctuation">.</span>prev <span class="token operator">=</span> node
      node<span class="token punctuation">.</span>prev <span class="token operator">=</span> previous
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u79FB\u9664\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u79FB\u9664\u5143\u7D20" aria-hidden="true">#</a> \u79FB\u9664\u5143\u7D20</h3><p>\u53CC\u5411\u94FE\u8868\u4E2D\u79FB\u9664\u5143\u7D20\u8DDF\u94FE\u8868\u975E\u5E38\u7C7B\u4F3C\u3002\u552F\u4E00\u7684\u533A\u522B\u5C31\u662F\uFF0C\u8FD8\u9700\u8981\u8BBE\u7F6E\u524D\u4E00\u4E2A\u4F4D\u7F6E\u7684\u6307\u9488</p><p>\u4E09\u4E2A\u573A\u666F\uFF1A\u4ECE\u5934\u90E8\u3001\u4ECE\u4E2D\u95F4\u548C\u4ECE\u5C3E\u90E8\u79FB\u9664\u4E00\u4E2A\u5143\u7D20</p><p><img src="`+l+'" alt="doubly-remove-first"><img src="'+u+'" alt="doubly-remove-last"><img src="'+k+`" alt="doubly-remove-any"></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> current<span class="token punctuation">.</span>next
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">undefined</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">undefined</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> current<span class="token punctuation">.</span>prev
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
      <span class="token keyword">const</span> previous <span class="token operator">=</span> current<span class="token punctuation">.</span>prev
      previous<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">.</span>next
      current<span class="token punctuation">.</span>next<span class="token punctuation">.</span>prev <span class="token operator">=</span> previous
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">--</span>
    <span class="token keyword">return</span> current<span class="token punctuation">.</span>element
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">undefined</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6700\u7EC8\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6700\u7EC8\u5B9E\u73B0" aria-hidden="true">#</a> \u6700\u7EC8\u5B9E\u73B0</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">defaultEquals</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">===</span> b
<span class="token punctuation">}</span>
<span class="token comment">// \u94FE\u8868\u5143\u7D20</span>
<span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>element <span class="token operator">=</span> element
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u94FE\u8868\u7C7B</span>
<span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">equalsFn <span class="token operator">=</span> defaultEquals</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>equalsFn <span class="token operator">=</span> equalsFn
  <span class="token punctuation">}</span>
  <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
      <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        current <span class="token operator">=</span> current<span class="token punctuation">.</span>next
      <span class="token punctuation">}</span>
      current<span class="token punctuation">.</span>next <span class="token operator">=</span> node
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> current<span class="token punctuation">.</span>next
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> previous <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        current <span class="token operator">=</span> previous<span class="token punctuation">.</span>next
        previous<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">.</span>next
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">--</span>
      <span class="token keyword">return</span> current<span class="token punctuation">.</span>element
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>
  <span class="token function">getElementAt</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index <span class="token operator">&amp;&amp;</span> node <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>next
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> node
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> current
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> previous <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> current <span class="token operator">=</span> previous<span class="token punctuation">.</span>next
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> current
        previous<span class="token punctuation">.</span>next <span class="token operator">=</span> node
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">&amp;&amp;</span> current <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">equalsFn</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> current<span class="token punctuation">.</span>element<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> i
      <span class="token punctuation">}</span>
      current <span class="token operator">=</span> current<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count
  <span class="token punctuation">}</span>
  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  <span class="token function">getHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
  <span class="token punctuation">}</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> objString <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>element<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> current <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      objString <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>objString<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>current<span class="token punctuation">.</span>element<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
      current <span class="token operator">=</span> current<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> objString
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">DoublyNode</span> <span class="token keyword">extends</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> next<span class="token punctuation">,</span> prev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> next<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> prev
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">DoublyLinkedList</span> <span class="token keyword">extends</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">equalsFn <span class="token operator">=</span> defaultEquals</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>equalsFn<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublyNode</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
          <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> node
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          node<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
          current<span class="token punctuation">.</span>prev <span class="token operator">=</span> node
          <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> NodeFilter
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
        current<span class="token punctuation">.</span>next <span class="token operator">=</span> node
        node<span class="token punctuation">.</span>prev <span class="token operator">=</span> current
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> node
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> previous <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        current <span class="token operator">=</span> previous<span class="token punctuation">.</span>next
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> current
        previous<span class="token punctuation">.</span>next <span class="token operator">=</span> node
        current<span class="token punctuation">.</span>prev <span class="token operator">=</span> node
        node<span class="token punctuation">.</span>prev <span class="token operator">=</span> previous
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> current<span class="token punctuation">.</span>next
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">undefined</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">undefined</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> current<span class="token punctuation">.</span>prev
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">undefined</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
        <span class="token keyword">const</span> previous <span class="token operator">=</span> current<span class="token punctuation">.</span>prev
        previous<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">.</span>next
        current<span class="token punctuation">.</span>next<span class="token punctuation">.</span>prev <span class="token operator">=</span> previous
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">--</span>
      <span class="token keyword">return</span> current<span class="token punctuation">.</span>element
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6D4B\u8BD5</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> doublyLinkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublyLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
doublyLinkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
doublyLinkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
doublyLinkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
doublyLinkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doublyLinkedList<span class="token punctuation">)</span>
</code></pre></div>`,30),d=[i];function y(w,m){return s(),a("div",null,d)}var f=n(r,[["render",y],["__file","doubly-linked-list.html.vue"]]);export{f as default};
