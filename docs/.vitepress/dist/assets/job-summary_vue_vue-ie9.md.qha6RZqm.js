import{_ as e,c as s,o as a,V as t}from"./chunks/framework.jq6gLv6S.js";const m=JSON.parse('{"title":"vue2.0兼容IE9及以上","description":"","frontmatter":{},"headers":[],"relativePath":"job-summary/vue/vue-ie9.md","filePath":"job-summary/vue/vue-ie9.md","lastUpdated":1707813350000}'),i={name:"job-summary/vue/vue-ie9.md"},o=t(`<h1 id="vue2-0兼容ie9及以上" tabindex="-1">vue2.0兼容IE9及以上 <a class="header-anchor" href="#vue2-0兼容ie9及以上" aria-label="Permalink to &quot;vue2.0兼容IE9及以上&quot;">​</a></h1><p>方案一：配置<code>babelpolyfill</code></p><p>方案二：<code>core-js@3</code>弃用了<code>babelpolyfill</code>，只需要在<code>main.js</code>中引用如下文件即可：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;core-js/stable&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;regenerator-runtime/runtime&#39;</span></span></code></pre></div>`,4),n=[o];function l(r,c,p,d,h,u){return a(),s("div",null,n)}const v=e(i,[["render",l]]);export{m as __pageData,v as default};