import{_ as n,o as s,c as a,e as p}from"./app.b57d44e7.js";var t="/blog/assets/circular-linked-list.46e3713e.png",o="/blog/assets/doubly-circular-linked-list.2dad055b.png",e="/blog/assets/circular-linked-list-insert1.226c47ad.png",c="/blog/assets/circular-linked-list-insert2.48598380.png",l="/blog/assets/circular-linked-list-removeAt.75e453d7.png";const u={},k=p('<h1 id="\u5FAA\u73AF\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u94FE\u8868" aria-hidden="true">#</a> \u5FAA\u73AF\u94FE\u8868</h1><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><ul><li><strong>\u5FAA\u73AF\u94FE\u8868</strong>\u53EF\u4EE5\u50CF\u94FE\u8868\u4E00\u6837\u53EA\u6709\u5355\u5411\u5F15\u7528\uFF0C\u4E5F\u53EF\u4EE5\u50CF\u53CC\u5411\u94FE\u8868\u4E00\u6837\u6709\u53CC\u5411\u5F15\u7528\u3002</li><li>\u5FAA\u73AF\u94FE\u8868\u548C\u94FE\u8868\u4E4B\u95F4\u552F\u4E00\u7684\u533A\u522B\u5728\u4E8E\uFF0C\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u6307\u5411\u4E0B\u4E00\u4E2A\u5143\u7D20\u7684\u6307\u9488\uFF08<code>tail.next</code>\uFF09\u4E0D\u662F\u5F15\u7528<code>undefined</code>\uFF0C\u800C\u662F\u6307\u5411\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF08<code>head</code>\uFF09</li></ul><p><img src="'+t+'" alt="circular-linked-list"></p><p><strong>\u53CC\u5411\u5FAA\u73AF\u94FE\u8868</strong>\u6709\u6307\u5411<code>head</code>\u5143\u7D20\u7684<code>tail.next</code>\u548C\u6307\u5411<code>tail</code>\u5143\u7D20\u7684<code>head.prev</code></p><p><img src="'+o+`" alt="doubly-circular-linked-list.png"></p><h2 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h2><h3 id="\u94FE\u8868\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868\u7C7B" aria-hidden="true">#</a> \u94FE\u8868\u7C7B</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CircularLinkedList</span> <span class="token keyword">extends</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">equalsFn <span class="token operator">=</span> defaultEquals</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>equalsFn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5FAA\u73AF\u94FE\u8868\u4E0D\u9700\u8981\u4EFB\u4F55\u989D\u5916\u7684\u5C5E\u6027</p></div><h3 id="\u63D2\u5165\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u5143\u7D20" aria-hidden="true">#</a> \u63D2\u5165\u5143\u7D20</h3><p><img src="`+e+'" alt="circular-linked-list-insert1"></p><p><img src="'+c+`" alt="circular-linked-list-insert2"></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> current
        current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
        current<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> previous <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
      node<span class="token punctuation">.</span>next <span class="token operator">=</span> previous<span class="token punctuation">.</span>next
      previous<span class="token punctuation">.</span>next <span class="token operator">=</span> node
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>\u5FAA\u73AF\u94FE\u8868\u4E2D\u63D2\u5165\u5143\u7D20\u7684\u903B\u8F91\u548C\u5411\u666E\u901A\u94FE\u8868\u4E2D\u63D2\u5165\u5143\u7D20\u7684\u903B\u8F91\u662F\u4E00\u6837\u7684</li><li>\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E\u5C06\u5FAA\u73AF\u94FE\u8868\u5C3E\u90E8\u8282\u70B9\u7684<code>next</code>\u5F15\u7528\u6307\u5411<code>\u5934\u90E8\u8282\u70B9</code></li></ul></div><h3 id="\u79FB\u9664\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u79FB\u9664\u5143\u7D20" aria-hidden="true">#</a> \u79FB\u9664\u5143\u7D20</h3><p><img src="`+l+`" alt="circular-linked-list-removeAt"></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">undefined</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> removed <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
        current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next
        current<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
        current <span class="token operator">=</span> removed
      <span class="token punctuation">}</span>
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

<span class="token keyword">class</span> <span class="token class-name">CircularLinkedList</span> <span class="token keyword">extends</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">equalsFn <span class="token operator">=</span> defaultEquals</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>equalsFn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
          node<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          node<span class="token punctuation">.</span>next <span class="token operator">=</span> current
          current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
          current<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> previous <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> previous<span class="token punctuation">.</span>next
        previous<span class="token punctuation">.</span>next <span class="token operator">=</span> node
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
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">undefined</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> removed <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
          current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next
          current<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
          current <span class="token operator">=</span> removed
        <span class="token punctuation">}</span>
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
<span class="token punctuation">}</span>

</code></pre></div>`,20),r=[k];function i(d,w){return s(),a("div",null,r)}var h=n(u,[["render",i],["__file","circular-linked-list.html.vue"]]);export{h as default};
