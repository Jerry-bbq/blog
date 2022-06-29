import{_ as u}from"./render.5fe6474f.js";import{_ as l,r as c,o as k,c as i,b as n,d as a,w as p,e as s,a as o}from"./app.9fbd2eaa.js";const r={},d=n("h1",{id:"vue2-0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue2-0","aria-hidden":"true"},"#"),s(" Vue2.0")],-1),m={href:"https://jonny-wei.github.io/blog/vue/vue/vue-observer.html#%E5%A6%82%E4%BD%95%E4%BE%A6%E6%B5%8B%E6%95%B0%E6%8D%AE%E7%9A%84%E5%8F%98%E5%8C%96",target:"_blank",rel:"noopener noreferrer"},f=s("\u53EF\u53C2\u8003"),h=o('<p>Vue\u662F\u7528\u4E8E\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684\u6E10\u8FDB\u5F0F\u6846\u67B6</p><h2 id="\u539F\u7406\u56FE" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406\u56FE" aria-hidden="true">#</a> \u539F\u7406\u56FE</h2><p><img src="'+u+'" alt="render"></p><h2 id="\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a> \u539F\u7406</h2><h3 id="\u54CD\u5E94\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u5F0F" aria-hidden="true">#</a> \u54CD\u5E94\u5F0F</h3>',5),y=s("\u54CD\u5E94\u5F0F"),w=n("h3",{id:"\u6A21\u677F\u7F16\u8BD1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6A21\u677F\u7F16\u8BD1","aria-hidden":"true"},"#"),s(" \u6A21\u677F\u7F16\u8BD1")],-1),b=s("\u6A21\u677F\u7F16\u8BD1"),g=n("h3",{id:"\u95EE\u9898",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u95EE\u9898","aria-hidden":"true"},"#"),s(" \u95EE\u9898")],-1),x=s("\u95EE\u9898"),v=o(`<h3 id="nexttick\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#nexttick\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> nextTick\u5B9E\u73B0\u539F\u7406</h3><p>\u6E90\u7801</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// v2.6</span>
<span class="token comment">// \u6E90\u7801\u8DEF\u5F84\uFF1A/src/core/util/next-tick.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> noop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;shared/util&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> handleError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./error&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isIE<span class="token punctuation">,</span> isIOS<span class="token punctuation">,</span> isNative <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./env&#39;</span>

<span class="token comment">// \u5B58\u653E\u8C03\u7528 nextTick \u65B9\u6CD5\u4F20\u5165\u7684\u56DE\u8C03\u51FD\u6570</span>
<span class="token keyword">const</span> callbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> pending <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">function</span> <span class="token function">flushCallbacks</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  pending <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">const</span> copies <span class="token operator">=</span> callbacks<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  callbacks<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> copies<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    copies<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> timerFunc

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> Promise <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isNative</span><span class="token punctuation">(</span>Promise<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function-variable function">timerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isIOS<span class="token punctuation">)</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>noop<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isIE <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> MutationObserver <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
  <span class="token function">isNative</span><span class="token punctuation">(</span>MutationObserver<span class="token punctuation">)</span> <span class="token operator">||</span>
  <span class="token comment">// PhantomJS and iOS 7.x</span>
  MutationObserver<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object MutationObserverConstructor]&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>
  <span class="token keyword">const</span> textNode <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">)</span>
  observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>textNode<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">characterData</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token function-variable function">timerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    counter <span class="token operator">=</span> <span class="token punctuation">(</span>counter <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span>
    textNode<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> setImmediate <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isNative</span><span class="token punctuation">(</span>setImmediate<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">timerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setImmediate</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">timerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">nextTick</span> <span class="token punctuation">(</span><span class="token parameter">cb<span class="token operator">?</span><span class="token operator">:</span> Function<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> _resolve
  callbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> ctx<span class="token punctuation">,</span> <span class="token string">&#39;nextTick&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>_resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">_resolve</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pending<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pending <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token function">timerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cb <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> Promise <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      _resolve <span class="token operator">=</span> resolve
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),_={href:"https://github.com/Cosen95/fe_interview/issues/69",target:"_blank",rel:"noopener noreferrer"},S=s("\u53EF\u53C2\u8003"),C=o(`<h3 id="vue-use-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#vue-use-\u539F\u7406" aria-hidden="true">#</a> Vue.use()\u539F\u7406</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// v2.6</span>
<span class="token comment">// \u6E90\u7801\u8DEF\u5F84\uFF1Asrc/core/global-api/use.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> toArray <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../util/index&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initUse</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">Vue</span><span class="token operator">:</span> GlobalAPI</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Vue<span class="token punctuation">.</span><span class="token function-variable function">use</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">plugin</span><span class="token operator">:</span> Function <span class="token operator">|</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> installedPlugins <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_installedPlugins <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_installedPlugins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>installedPlugins<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// additional parameters</span>
    <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token function">toArray</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    args<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> plugin<span class="token punctuation">.</span>install <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      plugin<span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>plugin<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> plugin <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">plugin</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    installedPlugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="vue-extend-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#vue-extend-\u539F\u7406" aria-hidden="true">#</a> Vue.extend()\u539F\u7406</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// v2.6</span>
<span class="token comment">// \u6E90\u7801\u8DEF\u5F84\uFF1Asrc/core/global-api/extend.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ASSET_TYPES</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;shared/constants&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComputed<span class="token punctuation">,</span> proxy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../instance/state&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> extend<span class="token punctuation">,</span> mergeOptions<span class="token punctuation">,</span> validateComponentName <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../util/index&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initExtend</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">Vue</span><span class="token operator">:</span> GlobalAPI</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped &quot;child
   * constructors&quot; for prototypal inheritance and cache them.
   */</span>
  Vue<span class="token punctuation">.</span>cid <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> cid <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token doc-comment comment">/**
   * Class inheritance
   */</span>
  Vue<span class="token punctuation">.</span><span class="token function-variable function">extend</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">extendOptions</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token punctuation">{</span>
    extendOptions <span class="token operator">=</span> extendOptions <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">const</span> Super <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">const</span> SuperId <span class="token operator">=</span> Super<span class="token punctuation">.</span>cid
    <span class="token keyword">const</span> cachedCtors <span class="token operator">=</span> extendOptions<span class="token punctuation">.</span>_Ctor <span class="token operator">||</span> <span class="token punctuation">(</span>extendOptions<span class="token punctuation">.</span>_Ctor <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedCtors<span class="token punctuation">[</span>SuperId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> cachedCtors<span class="token punctuation">[</span>SuperId<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> name <span class="token operator">=</span> extendOptions<span class="token punctuation">.</span>name <span class="token operator">||</span> Super<span class="token punctuation">.</span>options<span class="token punctuation">.</span>name
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">validateComponentName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">Sub</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">VueComponent</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Sub</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Super</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
    <span class="token class-name">Sub</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Sub
    Sub<span class="token punctuation">.</span>cid <span class="token operator">=</span> cid<span class="token operator">++</span>
    Sub<span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
      Super<span class="token punctuation">.</span>options<span class="token punctuation">,</span>
      extendOptions
    <span class="token punctuation">)</span>
    Sub<span class="token punctuation">[</span><span class="token string">&#39;super&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> Super

    <span class="token comment">// For props and computed properties, we define the proxy getters on</span>
    <span class="token comment">// the Vue instances at extension time, on the extended prototype. This</span>
    <span class="token comment">// avoids Object.defineProperty calls for each instance created.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Sub<span class="token punctuation">.</span>options<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">initProps</span><span class="token punctuation">(</span>Sub<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Sub<span class="token punctuation">.</span>options<span class="token punctuation">.</span>computed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">initComputed</span><span class="token punctuation">(</span>Sub<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// allow further extension/mixin/plugin usage</span>
    Sub<span class="token punctuation">.</span>extend <span class="token operator">=</span> Super<span class="token punctuation">.</span>extend
    Sub<span class="token punctuation">.</span>mixin <span class="token operator">=</span> Super<span class="token punctuation">.</span>mixin
    Sub<span class="token punctuation">.</span>use <span class="token operator">=</span> Super<span class="token punctuation">.</span>use

    <span class="token comment">// create asset registers, so extended classes</span>
    <span class="token comment">// can have their private assets too.</span>
    <span class="token constant">ASSET_TYPES</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Sub<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> Super<span class="token punctuation">[</span>type<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// enable recursive self-lookup</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Sub<span class="token punctuation">.</span>options<span class="token punctuation">.</span>components<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> Sub
    <span class="token punctuation">}</span>

    <span class="token comment">// keep a reference to the super options at extension time.</span>
    <span class="token comment">// later at instantiation we can check if Super&#39;s options have</span>
    <span class="token comment">// been updated.</span>
    Sub<span class="token punctuation">.</span>superOptions <span class="token operator">=</span> Super<span class="token punctuation">.</span>options
    Sub<span class="token punctuation">.</span>extendOptions <span class="token operator">=</span> extendOptions
    Sub<span class="token punctuation">.</span>sealedOptions <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Sub<span class="token punctuation">.</span>options<span class="token punctuation">)</span>

    <span class="token comment">// cache constructor</span>
    cachedCtors<span class="token punctuation">[</span>SuperId<span class="token punctuation">]</span> <span class="token operator">=</span> Sub
    <span class="token keyword">return</span> Sub
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">initProps</span> <span class="token punctuation">(</span><span class="token parameter">Comp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> props <span class="token operator">=</span> Comp<span class="token punctuation">.</span>options<span class="token punctuation">.</span>props
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token class-name">Comp</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">_props</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">initComputed</span> <span class="token punctuation">(</span><span class="token parameter">Comp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> computed <span class="token operator">=</span> Comp<span class="token punctuation">.</span>options<span class="token punctuation">.</span>computed
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> computed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">defineComputed</span><span class="token punctuation">(</span><span class="token class-name">Comp</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> key<span class="token punctuation">,</span> computed<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u624B\u5199\u54CD\u5E94\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199\u54CD\u5E94\u5F0F" aria-hidden="true">#</a> \u624B\u5199\u54CD\u5E94\u5F0F</h3><h3 id="\u624B\u5199\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" aria-hidden="true">#</a> \u624B\u5199\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F</h3><h3 id="\u624B\u5199diff\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199diff\u7B97\u6CD5" aria-hidden="true">#</a> \u624B\u5199diff\u7B97\u6CD5</h3>`,7);function O(E,j){const e=c("ExternalLinkIcon"),t=c("RouterLink");return k(),i("div",null,[d,n("p",null,[n("a",m,[f,a(e)])]),h,n("ul",null,[n("li",null,[a(t,{to:"/framework/vue/v2/reactive.html"},{default:p(()=>[y]),_:1})])]),w,n("ul",null,[n("li",null,[a(t,{to:"/framework/vue/v2/render.html"},{default:p(()=>[b]),_:1})])]),g,n("ul",null,[n("li",null,[a(t,{to:"/framework/vue/v2/questions.html"},{default:p(()=>[x]),_:1})])]),v,n("p",null,[n("a",_,[S,a(e)])]),C])}var N=l(r,[["render",O],["__file","index.html.vue"]]);export{N as default};
