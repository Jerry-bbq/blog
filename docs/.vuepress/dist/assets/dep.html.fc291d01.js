import{_ as n,o as s,c as a,e as t}from"./app.b698a7af.js";const p={},o=t(`<h2 id="dep\u7C7B" tabindex="-1"><a class="header-anchor" href="#dep\u7C7B" aria-hidden="true">#</a> Dep\u7C7B</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">/* @flow */</span>

<span class="token keyword">import</span> type Watcher <span class="token keyword">from</span> <span class="token string">&#39;./watcher&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> remove <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../util/index&#39;</span>
<span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">&#39;../config&#39;</span>

<span class="token keyword">let</span> uid <span class="token operator">=</span> <span class="token number">0</span>

<span class="token doc-comment comment">/**
 * getter \u4F9D\u8D56\u6536\u96C6\u7684\u6838\u5FC3\uFF0C\u662F\u5BF9 Watcher \u7684\u4E00\u79CD\u7BA1\u7406
 *
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 *
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token operator">?</span>Watcher<span class="token punctuation">;</span> <span class="token comment">// target\u662F\u5168\u5C40\u7684 Watcher</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">subs</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>Watcher<span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// Watcher\u6570\u7EC4</span>

  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> uid<span class="token operator">++</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u6DFB\u52A0watcher\uFF0C\u5C06watcher\u538B\u5165\u6570\u7EC4\u4E2D</span>
  <span class="token function">addSub</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">sub</span><span class="token operator">:</span> Watcher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u79FB\u51FAwatcher</span>
  <span class="token doc-comment comment">/** remove\u7684\u5B9E\u73B0,\u4ECE\u5F53\u524D\u6570\u7EC4\u4E2D\u79FB\u51FA\u5BF9\u5E94\u7684item
  export function remove (arr: Array&lt;any&gt;, item: any): Array&lt;any&gt; | void <span class="token punctuation">{</span>
    if (arr.length) <span class="token punctuation">{</span>
      const index = arr.indexOf(item)
      if (index &gt; -1) <span class="token punctuation">{</span>
        return arr.splice(index, 1)
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  */</span>
  <span class="token function">removeSub</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">sub</span><span class="token operator">:</span> Watcher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">,</span> sub<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u6DFB\u52A0\u4F9D\u8D56</span>
  <span class="token function">depend</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8C03\u7528 watcher\u5BF9\u8C61\u7684 addDep()\u65B9\u6CD5</span>
      Dep<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">addDep</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u901A\u77E5\u8BA2\u9605\u8005</span>
  <span class="token function">notify</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// stabilize the subscriber list first</span>
    <span class="token comment">// \u590D\u5236subs\u6570\u7EC4\uFF0C\u800C\u4E0D\u6539\u53D8\u539F\u6570\u7EC4</span>
    <span class="token keyword">const</span> subs <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>config<span class="token punctuation">.</span>async<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// subs aren&#39;t sorted in scheduler if not running async</span>
      <span class="token comment">// we need to sort them now to make sure they fire in correct</span>
      <span class="token comment">// order</span>
      subs<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>id <span class="token operator">-</span> b<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token comment">// \u6839\u636Eid\u4ECE\u5C0F\u5230\u5927\u987A\u5E8F\u6392\u5E8F</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u904D\u5386subs\uFF0C\u7136\u540E\u8C03\u7528\u6BCF\u4E00\u4E2Awatcher\u7684update\u65B9\u6CD5</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> subs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8C03\u7528watcher\u5BF9\u8C61\u7684update\u65B9\u6CD5</span>
      subs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// The current target watcher being evaluated.</span>
<span class="token comment">// This is globally unique because only one watcher</span>
<span class="token comment">// can be evaluated at a time.</span>
Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">const</span> targetStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u5B9A\u4E49\u6570\u7EC4\u7528\u6765\u5B58\u5728\u6BCF\u4E2Awatcher\u5BF9\u8C61</span>

<span class="token comment">// \u5C06watcher push\u8FDBtargetStack\uFF0C\u7136\u540E\u5C06target\u5728\u8D4B\u503C\u7ED9 Dep.target</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">pushTarget</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token operator">?</span>Watcher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  targetStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> target
<span class="token punctuation">}</span>
<span class="token comment">// \u5C06watcher pop()\u51FA\u6808targetStack\uFF0C\u7136\u540E\uFF0C\u5C06targetStack\u7684\u6700\u540E\u4E00\u4E2Awatcher\u8D4B\u503C\u7ED9 Dep.target</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">popTarget</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  targetStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> targetStack<span class="token punctuation">[</span>targetStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre></div>`,2),e=[o];function c(u,l){return s(),a("div",null,e)}var r=n(p,[["render",c],["__file","dep.html.vue"]]);export{r as default};
