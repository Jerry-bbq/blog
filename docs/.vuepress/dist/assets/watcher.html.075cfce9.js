import{_ as n,o as s,c as a,e as p}from"./app.94858b64.js";const t={},o=p(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">/* @flow */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  warn<span class="token punctuation">,</span>
  remove<span class="token punctuation">,</span>
  isObject<span class="token punctuation">,</span>
  parsePath<span class="token punctuation">,</span>
  _Set <span class="token keyword">as</span> Set<span class="token punctuation">,</span>
  handleError<span class="token punctuation">,</span>
  noop
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../util/index&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> traverse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./traverse&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> queueWatcher <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./scheduler&#39;</span>
<span class="token keyword">import</span> Dep<span class="token punctuation">,</span> <span class="token punctuation">{</span> pushTarget<span class="token punctuation">,</span> popTarget <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./dep&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> SimpleSet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../util/index&#39;</span>

<span class="token keyword">let</span> uid <span class="token operator">=</span> <span class="token number">0</span>

<span class="token doc-comment comment">/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">vm</span><span class="token operator">:</span> Component<span class="token punctuation">;</span>
  <span class="token literal-property property">expression</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">cb</span><span class="token operator">:</span> Function<span class="token punctuation">;</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">deep</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">lazy</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">sync</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">dirty</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">active</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">deps</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>Dep<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token literal-property property">newDeps</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>Dep<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token literal-property property">depIds</span><span class="token operator">:</span> SimpleSet<span class="token punctuation">;</span>
  <span class="token literal-property property">newDepIds</span><span class="token operator">:</span> SimpleSet<span class="token punctuation">;</span>
  <span class="token literal-property property">before</span><span class="token operator">:</span> <span class="token operator">?</span>Function<span class="token punctuation">;</span>
  <span class="token literal-property property">getter</span><span class="token operator">:</span> Function<span class="token punctuation">;</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> any<span class="token punctuation">;</span>

  <span class="token function">constructor</span> <span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">vm</span><span class="token operator">:</span> Component<span class="token punctuation">,</span>
    <span class="token literal-property property">expOrFn</span><span class="token operator">:</span> string <span class="token operator">|</span> Function<span class="token punctuation">,</span>
    <span class="token literal-property property">cb</span><span class="token operator">:</span> Function<span class="token punctuation">,</span>
    options<span class="token operator">?</span><span class="token operator">:</span> <span class="token operator">?</span>Object<span class="token punctuation">,</span>
    isRenderWatcher<span class="token operator">?</span><span class="token operator">:</span> boolean</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>vm <span class="token operator">=</span> vm
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isRenderWatcher<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      vm<span class="token punctuation">.</span>_watcher <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span>
    vm<span class="token punctuation">.</span>_watchers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token comment">// options</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>deep <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>deep
      <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>user
      <span class="token keyword">this</span><span class="token punctuation">.</span>lazy <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>lazy
      <span class="token keyword">this</span><span class="token punctuation">.</span>sync <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>sync
      <span class="token keyword">this</span><span class="token punctuation">.</span>before <span class="token operator">=</span> options<span class="token punctuation">.</span>before
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>deep <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lazy <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sync <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cb <span class="token operator">=</span> cb
    <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token operator">++</span>uid <span class="token comment">// uid for batching</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dirty <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lazy <span class="token comment">// for lazy watchers</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>deps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>newDeps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>depIds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Set\u5B9E\u4F8B\uFF0C\u4E0D\u4F1A\u6DFB\u52A0\u91CD\u590D\u7684\u503C</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>newDepIds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Set\u5B9E\u4F8B</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>expression <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span>
      <span class="token operator">?</span> expOrFn<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token comment">// parse expression for getter</span>
    <span class="token comment">// expOrFn\u662F\u5B57\u7B26\u4E32\u8FD8\u662F\u51FD\u6570</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> expOrFn <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>getter <span class="token operator">=</span> expOrFn
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>getter <span class="token operator">=</span> <span class="token function">parsePath</span><span class="token punctuation">(</span>expOrFn<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>getter <span class="token operator">=</span> noop
        process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Failed watching path: &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>expOrFn<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
          <span class="token string">&#39;Watcher only accepts simple dot-delimited paths. &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;For full control, use a function instead.&#39;</span><span class="token punctuation">,</span>
          vm
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lazy
      <span class="token operator">?</span> <span class="token keyword">undefined</span>
      <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * \u4F9D\u8D56\u6536\u96C6\u76F8\u5173\u7684\u65B9\u6CD5,\u83B7\u53D6\u65B0\u7684\u5C5E\u6027\u503C
   * Evaluate the getter, and re-collect dependencies.
   */</span>
  <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5C06watcher\u5B9E\u4F8B\u8D4B\u503C\u7ED9 Dep\u7684target\u5C5E\u6027\uFF0C\u5E76\u5C06 Dep.target \u5165\u6808 \uFF0C\u5B58\u5165 targetStack \u6570\u7EC4\u4E2D</span>
    <span class="token function">pushTarget</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> value
    <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vm
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u83B7\u53D6\u5C5E\u6027\u521D\u59CB\u503C</span>
      value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">getter for watcher &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>expression<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> e
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      <span class="token comment">// &quot;touch&quot; every property so they are all tracked as</span>
      <span class="token comment">// dependencies for deep watching</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>deep<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u51FA\u6808</span>
      <span class="token function">popTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cleanupDeps</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u8FD4\u56DE\u5C5E\u6027\u7684\u503C</span>
    <span class="token keyword">return</span> value
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * \u4F9D\u8D56\u6536\u96C6\u76F8\u5173\u7684\u65B9\u6CD5\uFF0C
   * dep.depend()\u4E2D\u8C03\u7528 watcher.addDep(dep),
   * watcher.addDep(dep)\u4E2D\u8C03\u7528 dep.addSub(watcher)
   *
   * Add a dependency to this directive.
   */</span>
  <span class="token function">addDep</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">dep</span><span class="token operator">:</span> Dep</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u53C2\u6570\u4E3A Dep</span>
    <span class="token keyword">const</span> id <span class="token operator">=</span> dep<span class="token punctuation">.</span>id
    <span class="token comment">// \u5982\u679C\u5728 newDepIds \u5B9E\u4F8B\u4E2D\u4E0D\u5B58\u5728 id</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>newDepIds<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>newDepIds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token comment">// newDepIds\u6DFB\u52A0 id</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>newDeps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span> <span class="token comment">// newDeps\u6570\u7EC4\u4E2D\u5165\u6808dep</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>depIds<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5982\u679CdepIds\u5B9E\u4F8B\u4E2D\u4E0D\u5B58\u5728 id</span>
        <span class="token comment">// \u5C06\u5F53\u524D watcher \u5B9E\u4F8B\u6DFB\u52A0\u5230 dep \u7684 subs \u6570\u7EC4\u4E2D</span>
        dep<span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * \u4F9D\u8D56\u6536\u96C6\u76F8\u5173\u7684\u65B9\u6CD5
   * Clean up for dependency collection.
   */</span>
  <span class="token function">cleanupDeps</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">.</span>length
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> dep <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>newDepIds<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>dep<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dep<span class="token punctuation">.</span><span class="token function">removeSub</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> tmp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>depIds
    <span class="token keyword">this</span><span class="token punctuation">.</span>depIds <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>newDepIds
    <span class="token keyword">this</span><span class="token punctuation">.</span>newDepIds <span class="token operator">=</span> tmp
    <span class="token keyword">this</span><span class="token punctuation">.</span>newDepIds<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    tmp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>deps
    <span class="token keyword">this</span><span class="token punctuation">.</span>deps <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>newDeps
    <span class="token keyword">this</span><span class="token punctuation">.</span>newDeps <span class="token operator">=</span> tmp
    <span class="token keyword">this</span><span class="token punctuation">.</span>newDeps<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * \u6D3E\u53D1\u66F4\u65B0
   * Subscriber interface.
   * Will be called when a dependency changes.
   */</span>
  <span class="token function">update</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* istanbul ignore else */</span>
    <span class="token comment">// \u5982\u679C\u7528\u6237\u5B9A\u4E49\u4E86 lazy \uFF0Cthis.lazy \u662F\u63CF\u8FF0\u7B26</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>lazy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>dirty <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>sync<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// this.sync \u8868\u793A\u662F\u5426\u6539\u53D8\u4E86\u503C\u4E4B\u540E\u7ACB\u5373\u89E6\u53D1\u56DE\u8C03\u3002\u5982\u679C\u7528\u6237\u5B9A\u4E49\u4E3Atrue\uFF0C\u5219\u7ACB\u5373\u6267\u884C this.run</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// queueWatcher \u5185\u90E8\u4E5F\u662F\u6267\u884C\u7684 watcher\u5B9E\u4F8B\u7684 run \u65B9\u6CD5\uFF0C\u53EA\u4E0D\u8FC7\u5185\u90E8\u8C03\u7528\u4E86 nextTick \u505A\u6027\u80FD\u4F18\u5316\u3002</span>
      <span class="token comment">// \u5B83\u4F1A\u5C06\u5F53\u524D watcher \u5B9E\u4F8B\u653E\u5165\u4E00\u4E2A\u961F\u5217\uFF0C\u5728\u4E0B\u4E00\u6B21\u4E8B\u4EF6\u5FAA\u73AF\u65F6\uFF0C\u904D\u5386\u961F\u5217\u5E76\u6267\u884C\u6BCF\u4E2A watcher\u5B9E\u4F8B\u7684run() \u65B9\u6CD5</span>
      <span class="token function">queueWatcher</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */</span>
  <span class="token function">run</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>active<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u83B7\u53D6\u65B0\u7684\u5C5E\u6027\u503C</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        <span class="token comment">// \u5982\u679C\u65B0\u503C\u4E0D\u7B49\u4E8E\u65E7\u503C</span>
        value <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">||</span>
        <span class="token comment">// Deep watchers and watchers on Object/Arrays should fire even</span>
        <span class="token comment">// when the value is the same, because the value may</span>
        <span class="token comment">// have mutated.</span>
        <span class="token comment">// \u6216\u8005\u5982\u679C\u65B0\u503C\u662F\u4E00\u4E2A\u5F15\u7528\u7C7B\u578B\u7684\u503C</span>
        <span class="token function">isObject</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">||</span>
        <span class="token comment">// \u6216\u8005\u662F\u6DF1\u5EA6\u76D1\u542C</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>deep
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// set new value</span>
        <span class="token keyword">const</span> oldValue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
        <span class="token comment">// this.user \u662F\u4E00\u4E2A\u6807\u5FD7\u7B26\uFF0C\u5982\u679C\u5F00\u53D1\u8005\u6DFB\u52A0\u7684 watch \u9009\u9879\uFF0C\u8FD9\u4E2A\u503C\u9ED8\u8BA4\u4E3A true</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u5982\u679C\u662F\u7528\u6237\u81EA\u5DF1\u6DFB\u52A0\u7684 watch \uFF0C\u5C31\u52A0\u4E00\u4E2A try catch\u3002\u65B9\u4FBF\u7528\u6237\u8C03\u8BD5\u3002\u5426\u5219\u76F4\u63A5\u6267\u884C\u56DE\u8C03</span>
          <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u89E6\u53D1\u56DE\u8C03\uFF0C\u5E76\u5C06 \u65B0\u503C\u548C\u65E7\u503C \u4F5C\u4E3A\u53C2\u6570</span>
            <span class="token comment">// \u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u6211\u4EEC\u5199 watch \u65F6\uFF0C\u53EF\u4EE5\u8FD9\u6837\u5199\uFF1A function (newVal, oldVal) { // do }</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
          <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">callback for watcher &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>expression<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */</span>
  <span class="token function">evaluate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dirty <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Depend on all deps collected by this watcher.
   */</span>
  <span class="token function">depend</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">.</span>length
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Remove self from all dependencies&#39; subscriber list.
   */</span>
  <span class="token function">teardown</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>active<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// remove self from vm&#39;s watcher list</span>
      <span class="token comment">// this is a somewhat expensive operation so we skip it</span>
      <span class="token comment">// if the vm is being destroyed.</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">.</span>_isBeingDestroyed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">.</span>_watchers<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">.</span>length
      <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">removeSub</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,1),e=[o];function c(l,k){return s(),a("div",null,e)}var i=n(t,[["render",c],["__file","watcher.html.vue"]]);export{i as default};
