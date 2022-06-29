import{_ as t,r as p,o,c as e,b as n,d as c,e as s,a as u}from"./app.9fbd2eaa.js";var l="/blog/assets/vuex.804b3f17.png";const k={},i=n("h1",{id:"vuex",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuex","aria-hidden":"true"},"#"),s(" Vuex")],-1),r={href:"https://vuex.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},d=s("Vuex"),m=s(" \u662F\u4E00\u4E2A\u4E13\u4E3A Vue.js \u5E94\u7528\u7A0B\u5E8F\u5F00\u53D1\u7684\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F\u3002"),g=u('<p><img src="'+l+`" alt="vuex"></p><h2 id="\u6838\u5FC3api" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3api" aria-hidden="true">#</a> \u6838\u5FC3api</h2><table><thead><tr><th>api</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>state</td><td>state\u662F\u5B58\u50A8\u7684\u5355\u4E00\u72B6\u6001\uFF0C\u662F\u5B58\u50A8\u7684\u57FA\u672C\u6570\u636E</td></tr><tr><td>getters</td><td>getters\u662Fstore\u7684\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5BF9state\u7684\u52A0\u5DE5\uFF0C\u662F\u6D3E\u751F\u51FA\u6765\u7684\u6570\u636E\u3002\u5C31\u50CFcomputed\u8BA1\u7B97\u5C5E\u6027\u4E00\u6837\uFF0Cgetter\u8FD4\u56DE\u7684\u503C\u4F1A\u6839\u636E\u5B83\u7684\u4F9D\u8D56\u88AB\u7F13\u5B58\u8D77\u6765\uFF0C\u4E14\u53EA\u6709\u5F53\u5B83\u7684\u4F9D\u8D56\u503C\u53D1\u751F\u6539\u53D8\u624D\u4F1A\u88AB\u91CD\u65B0\u8BA1\u7B97</td></tr><tr><td>mutations</td><td>mutations\u63D0\u4EA4\u66F4\u6539\u6570\u636E\uFF0C\u4F7F\u7528store.commit\u65B9\u6CD5\u66F4\u6539state\u5B58\u50A8\u7684\u72B6\u6001\u3002\uFF08mutations\u540C\u6B65\u51FD\u6570\uFF09</td></tr><tr><td>actions</td><td>actions\u50CF\u4E00\u4E2A\u88C5\u9970\u5668\uFF0C\u63D0\u4EA4mutation\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u53D8\u66F4\u72B6\u6001\u3002\uFF08actions\u53EF\u4EE5\u5305\u542B\u4EFB\u4F55\u5F02\u6B65\u64CD\u4F5C\uFF09</td></tr><tr><td>module</td><td>Module\u662Fstore\u5206\u5272\u7684\u6A21\u5757\uFF0C\u6BCF\u4E2A\u6A21\u5757\u62E5\u6709\u81EA\u5DF1\u7684state\u3001getters\u3001mutations\u3001actions</td></tr><tr><td>\u8F85\u52A9\u51FD\u6570</td><td>Vuex\u63D0\u4F9B\u4E86mapState\u3001mapGetters\u3001mapActions\u3001mapMutations\u7B49\u8F85\u52A9\u51FD\u6570\u7ED9\u5F00\u53D1\u5728vm\u4E2D\u5904\u7406store</td></tr><tr><td>dispatch</td><td></td></tr><tr><td>commit</td><td></td></tr></tbody></table><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="\u57FA\u7840\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u5E94\u7528" aria-hidden="true">#</a> \u57FA\u7840\u5E94\u7528</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1. vue\u7684\u63D2\u4EF6\u673A\u5236\uFF0C\u5B89\u88C5vuex</span>
<span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">// 2.\u5B9E\u4F8B\u5316store\uFF0C\u8C03\u7528install\u65B9\u6CD5</span>
    state<span class="token punctuation">,</span>
    getters<span class="token punctuation">,</span>
    modules<span class="token punctuation">,</span>
    mutations<span class="token punctuation">,</span>
    actions<span class="token punctuation">,</span>
    plugins
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">// 3.\u6CE8\u5165store, \u6302\u8F7Dvue\u5B9E\u4F8B</span>
    store<span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span><span class="token operator">=&gt;</span><span class="token function">h</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u6309\u6A21\u5757\u533A\u5206" tabindex="-1"><a class="header-anchor" href="#\u6309\u6A21\u5757\u533A\u5206" aria-hidden="true">#</a> \u6309\u6A21\u5757\u533A\u5206</h3><p>user.js</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> login<span class="token punctuation">,</span> logout<span class="token punctuation">,</span> getInfo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api/user&#39;</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// token</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u7528\u6237\u540D</span>
  <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u7528\u6237\u5934\u50CF</span>
  <span class="token literal-property property">introduction</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u7528\u6237\u4E2A\u4EBA\u4ECB\u7ECD</span>
  <span class="token literal-property property">roles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u7528\u6237\u89D2\u8272\u5217\u8868</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">SET_TOKEN</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> token</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>token <span class="token operator">=</span> token
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">SET_INTRODUCTION</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> introduction</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>introduction <span class="token operator">=</span> introduction
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">SET_NAME</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">SET_AVATAR</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> avatar</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>avatar <span class="token operator">=</span> avatar
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">SET_ROLES</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> roles</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>roles <span class="token operator">=</span> roles
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u767B\u5F55</span>
  <span class="token keyword">async</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> userInfo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> userInfo
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">username</span><span class="token operator">:</span> username<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">password</span><span class="token operator">:</span> password <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">// \u8BBE\u7F6Evuex\u548Ccookie\u4E2D\u7684token</span>
      <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;SET_TOKEN&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>token<span class="token punctuation">)</span>
      <span class="token function">setToken</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>token<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u9000\u51FA</span>
  <span class="token keyword">async</span> <span class="token function">logout</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit<span class="token punctuation">,</span> state<span class="token punctuation">,</span> dispatch <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">logout</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>token<span class="token punctuation">)</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;resetToken&#39;</span><span class="token punctuation">)</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;tagsView/delAllViews&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  state<span class="token punctuation">,</span>
  mutations<span class="token punctuation">,</span>
  actions<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>settings.js</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> variables <span class="token keyword">from</span> <span class="token string">&#39;@/styles/element-variables.scss&#39;</span>
<span class="token keyword">import</span> defaultSettings <span class="token keyword">from</span> <span class="token string">&#39;@/settings&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> showSettings<span class="token punctuation">,</span> tagsView<span class="token punctuation">,</span> fixedHeader<span class="token punctuation">,</span> sidebarLogo <span class="token punctuation">}</span> <span class="token operator">=</span> defaultSettings

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> variables<span class="token punctuation">.</span>theme<span class="token punctuation">,</span> <span class="token comment">// \u4E3B\u9898\u8272</span>
  <span class="token literal-property property">showSettings</span><span class="token operator">:</span> showSettings<span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u663E\u793A\u8BBE\u7F6E\u9762\u677F</span>
  <span class="token literal-property property">tagsView</span><span class="token operator">:</span> tagsView<span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u663E\u793AtagsView</span>
  <span class="token literal-property property">fixedHeader</span><span class="token operator">:</span> fixedHeader<span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u56FA\u5B9A\u5934\u90E8</span>
  <span class="token literal-property property">sidebarLogo</span><span class="token operator">:</span> sidebarLogo<span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u663E\u793A\u4FA7\u8FB9\u680F\u7684logo</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">CHANGE_SETTING</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> <span class="token punctuation">{</span> key<span class="token punctuation">,</span> value <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">changeSetting</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;CHANGE_SETTING&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  state<span class="token punctuation">,</span>
  mutations<span class="token punctuation">,</span>
  actions<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>index.js</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">import</span> user <span class="token keyword">from</span> <span class="token string">&#39;./user&#39;</span>
<span class="token keyword">import</span> settings <span class="token keyword">from</span> <span class="token string">&#39;./settings&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span>user<span class="token punctuation">,</span> settings<span class="token punctuation">]</span><span class="token punctuation">,</span>
  getters
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre></div><p>main.js</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
<span class="token comment">// ...</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  store<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4F7F\u7528\uFF1A<code>this.$store.dispatch(&#39;user/login&#39;, \u53C2\u6570)</code></p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">handleLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>loginForm<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">valid</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>valid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">true</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>$store
            <span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;user/login&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>loginForm<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>redirect <span class="token operator">||</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>otherQuery <span class="token punctuation">}</span><span class="token punctuation">)</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;error submit!!&#39;</span><span class="token punctuation">)</span>
          <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u8F85\u52A9\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u8F85\u52A9\u51FD\u6570" aria-hidden="true">#</a> \u8F85\u52A9\u51FD\u6570</h2><p>\u8F85\u52A9\u51FD\u6570<code>mapState</code>,<code>mapGetters</code>,<code>mapActions</code>,<code>mapMutations</code>\u5206\u522B\u7528\u5728vue\u7684\u4EC0\u4E48\u5730\u65B9</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mapState<span class="token punctuation">,</span> mapMutations<span class="token punctuation">,</span> mapGetters<span class="token punctuation">,</span> mapActions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;sideBarList&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;getCardProgramInfo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">setCurrentScene</span><span class="token operator">:</span> <span class="token string">&quot;SET_CURRENT_SCENE&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;getIncrementList&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;handleIgnoreOne&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4E25\u683C\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E25\u683C\u6A21\u5F0F" aria-hidden="true">#</a> \u4E25\u683C\u6A21\u5F0F</h2><p>\u5982\u4F55\u5F00\u542FVuex\u7684\u4E25\u683C\u6A21\u5F0F\uFF1F\u5B83\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F</p><p>\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\uFF0C\u4EC5\u9700\u5728\u521B\u5EFA store \u7684\u65F6\u5019\u4F20\u5165strict: true</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   state<span class="token punctuation">,</span>
   <span class="token literal-property property">strict</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token comment">//\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\u540E\uFF0C\u53EA\u80FD\u901A\u8FC7mutation\u6765\u6539\u53D8\u72B6\u6001\uFF08\u4E0D\u652F\u6301\u5F02\u6B65\uFF09\u5426\u5219\u4F1A\u62A5\u9519</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="mutation\u548Caction\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#mutation\u548Caction\u7684\u533A\u522B" aria-hidden="true">#</a> Mutation\u548CAction\u7684\u533A\u522B</h2><ul><li>mutation\u662F\u4FEE\u6539store\u4E2Dstate\u7684\u552F\u4E00\u9014\u5F84</li><li>mutation\u5FC5\u987B\u662F\u540C\u6B65\u7684</li><li>action\u53EF\u4EE5\u662F\u5F02\u6B65\u7684\uFF0C\u4F46\u662F\u4E0D\u80FD\u76F4\u63A5\u64CD\u4F5Cstate\uFF0C\u9700\u8981\u901A\u8FC7\u63D0\u4EA4\uFF08commit\uFF09 mutation \u95F4\u63A5\u66F4\u53D8\u72B6\u6001</li><li>mutation\u53EA\u8981\u4E00\u4E2A\u64CD\u4F5C\uFF0C\u800Caction\u53EF\u4EE5\u6574\u5408\u591A\u4E2Amutation</li></ul><h2 id="\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a> \u95EE\u9898</h2><ul><li>\u8BF7\u8C08\u8C08\u4F60\u5BF9Vuex\u7684\u7406\u89E3\uFF1F</li></ul><p>Vuex \u662F\u4E00\u4E2A\u4E13\u4E3A Vue.js \u5E94\u7528\u7A0B\u5E8F\u5F00\u53D1\u7684\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F\u3002\u5B83\u91C7\u7528\u96C6\u4E2D\u5F0F\u5B58\u50A8\u7BA1\u7406\u5E94\u7528\u7684\u6240\u6709\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u5E76\u4EE5\u76F8\u5E94\u7684\u89C4\u5219\u4FDD\u8BC1\u72B6\u6001\u4EE5\u4E00\u79CD\u53EF\u9884\u6D4B\u7684\u65B9\u5F0F\u53D1\u751F\u53D8\u5316</p>`,29);function y(h,w){const a=p("ExternalLinkIcon");return o(),e("div",null,[i,n("p",null,[n("a",r,[d,c(a)]),m]),g])}var v=t(k,[["render",y],["__file","index.html.vue"]]);export{v as default};
