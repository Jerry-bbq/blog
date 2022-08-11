import{_ as u,r as t,o as i,c as k,a as n,b as a,w as p,e,d as s}from"./app.d10a1e38.js";const d={},g=e(`<h1 id="webpack5" tabindex="-1"><a class="header-anchor" href="#webpack5" aria-hidden="true">#</a> Webpack5</h1><p>webpack \u662F\u4E00\u4E2A\u9759\u6001\u8D44\u6E90\u6253\u5305\u5DE5\u5177</p><p>\u5B83\u4F1A\u4EE5\u4E00\u4E2A\u6216\u591A\u4E2A\u6587\u4EF6\u6253\u5305\u4F5C\u4E3A\u6253\u5305\u7684\u5165\u53E3\uFF0C\u5C06\u6574\u4E2A\u9879\u76EE\u6240\u6709\u6587\u4EF6\u7F16\u8BD1\u7EC4\u5408\u6210\u4E00\u4E2A\u6216\u591A\u4E2A\u6587\u4EF6\u8F93\u51FA\u51FA\u53BB\uFF0C\u8F93\u51FA\u7684\u6587\u4EF6\u5C31\u662F\u7F16\u8BD1\u597D\u7684\u6587\u4EF6\uFF0C\u5C31\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u7AEF\u8FD0\u884C\u3002</p><p>webpack \u672C\u8EAB\u529F\u80FD\u6BD4\u8F83\u5C11\uFF0C\u53EA\u80FD\u5904\u7406 js \u8D44\u6E90\uFF0C\u6240\u4EE5\u9700\u8981\u4F9D\u8D56\u5176\u4ED6\u7684 loader\uFF08\u6BD4\u5982 css...\uFF09</p><p>\u4E94\u4E2A\u6838\u5FC3\u6982\u5FF5\uFF1A</p><ul><li>entry\uFF1A\u5165\u53E3\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u503C\u662F <code>./src/index.js</code></li><li>output\uFF1A\u8F93\u51FA,\u9ED8\u8BA4\u503C\u662F <code>./dist/main.js</code></li><li>loader\uFF1A\u52A0\u8F7D\u5668\uFF0C\u901A\u8FC7 <code>module.rules</code> \u6765\u6DFB\u52A0\u548C\u914D\u7F6Eloader</li><li>plugins\uFF1A\u63D2\u4EF6\uFF0C\u6269\u5C55 webpack \u7684\u529F\u80FD\uFF0C\u901A\u8FC7 <code>module.plugins</code>\u6765\u6DFB\u52A0\u548C\u914D\u7F6Eplugins</li><li>mode\uFF1A<code>development</code> \u548C <code>production</code></li></ul><h2 id="\u81EA\u5B9A\u4E49-webpack-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49-webpack-\u914D\u7F6E" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49 webpack \u914D\u7F6E</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5\u4F9D\u8D56</span>
<span class="token function">npm</span> i -D webpack webpack-cli
<span class="token comment"># \u6253\u5305</span>
npx webpack
</code></pre></div><h2 id="\u57FA\u7840\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u914D\u7F6E" aria-hidden="true">#</a> \u57FA\u7840\u914D\u7F6E</h2><ul><li><code>output.path</code> \u6307\u5B9A\u6253\u5305\u8F93\u51FA\u7684<strong>\u8DEF\u5F84\u53CA\u6587\u4EF6\u5939</strong>\u540D\u79F0</li><li><code>output.filename</code> \u6307\u5B9A\u6253\u5305\u8F93\u51FA\u7684<strong>\u6587\u4EF6\u540D</strong></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/main.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5904\u7406css\u6837\u5F0F\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406css\u6837\u5F0F\u8D44\u6E90" aria-hidden="true">#</a> \u5904\u7406css\u6837\u5F0F\u8D44\u6E90</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> i -D style-loader css-loader
</code></pre></div><ul><li>css-loader\uFF1A\u5C06css\u8D44\u6E90\u7F16\u8BD1\u6210commonjs\u7684\u6A21\u5757\u5230js\u4E2D\uFF0C\u53EA\u4F1A\u5BF9 <code>import</code> \u548C <code>url</code> \u5F15\u5165\u7684css\u8D44\u6E90\u8FDB\u884C\u5904\u7406\uFF0C\u4E0D\u4F1A\u5BF9 <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;./style/style.css&quot;&gt;</code> \u8FDB\u884C\u5904\u7406</li><li>style-loader\uFF1A\u5C06js\u4E2D\u7684css\uFF0C\u901A\u8FC7 \u521B\u5EFA<code>style</code>\u6807\u7B7E\u6DFB\u52A0\u5230html\u7684<code>head</code>\u6807\u7B7E\u4E2D</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token comment">// \u6267\u884C\u987A\u5E8F\uFF1A\u4ECE\u53F3\u5230\u5DE6\uFF08\u4ECE\u4E0B\u5230\u4E0A\uFF09</span>
                    <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;css-loader&#39;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u6CE8\u610Floader\u7684\u6267\u884C\u987A\u5E8F\u662F\uFF1A\u4ECE\u53F3\u5230\u5DE6\uFF08\u4ECE\u4E0B\u5230\u4E0A\uFF09</li></ul><h3 id="\u5904\u7406less" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406less" aria-hidden="true">#</a> \u5904\u7406less</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> less-loader <span class="token function">less</span> -D
</code></pre></div><ul><li>less-loader\uFF1A\u5C06less\u7F16\u8BD1\u4E3Acss</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;less-loader&#39;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5904\u7406sass" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406sass" aria-hidden="true">#</a> \u5904\u7406sass</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> sass-loader sass -D
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s[ac]ss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;sass-loader&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5904\u7406stylus" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406stylus" aria-hidden="true">#</a> \u5904\u7406stylus</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> stylus stylus-loader -D
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> 
                    <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> 
                    <span class="token string">&#39;stylus-loader&#39;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5904\u7406\u56FE\u7247\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u56FE\u7247\u8D44\u6E90" aria-hidden="true">#</a> \u5904\u7406\u56FE\u7247\u8D44\u6E90</h2><p>\u5728<code>webpack4</code>\u4E2D\u5904\u7406\u56FE\u7247\u8D44\u6E90\u4F1A\u901A\u8FC7<code>file-loader</code>\u548C<code>url-loader</code>\u8FDB\u884C\u5904\u7406\uFF0Cwebpack5\u5DF2\u7ECF\u5C06\u4E24\u4E2Aloader\u529F\u80FD\u5185\u7F6E\u5230webpack\u4E2D\uFF0C\u53EB\u505A<strong>\u8D44\u6E90\u6A21\u5757(asset module)</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpe?g|gif|webp|svg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">dataUrlCondition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token comment">// \u5C0F\u4E8E 10kb\u7684\u56FE\u7247\u4F1A\u8F6C\u5316\u4E3Abase64\uFF0C\u6253\u5305\u4E4B\u540E\u56FE\u7247\u88AB\u8F6C\u7801\u5230js\u6587\u4EF6\u4E2D</span>
                        <span class="token comment">// \u4F18\u70B9\u662F\u51CF\u5C11\u8BF7\u6C42\u6570\u91CF\uFF0C\u7F3A\u70B9\uFF0C\u4F53\u79EF\u66F4\u5927</span>
                        <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token comment">// 10kb</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">// \u8F93\u51FA\u56FE\u7247\u7684\u540D\u79F0\u53CA\u8DEF\u5F84</span>
                    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;static/images/[hash:10][ext][query]&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u81EA\u52A8\u6E05\u7A7A\u4E0A\u6B21\u6253\u5305\u7684\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u6E05\u7A7A\u4E0A\u6B21\u6253\u5305\u7684\u5185\u5BB9" aria-hidden="true">#</a> \u81EA\u52A8\u6E05\u7A7A\u4E0A\u6B21\u6253\u5305\u7684\u5185\u5BB9</h2><p>\u5728webpack4\u7684\u65F6\u5019\u9700\u8981\u989D\u5916\u5B89\u88C5\u63D2\u4EF6\u6765\u64CD\u4F5C\uFF0C\u4F46\u662F\u5728webpack5\uFF0C\u53EA\u9700\u8981\u6DFB\u52A0<code>output.clean</code>\u5373\u53EF</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u81EA\u52A8\u6E05\u7A7A\u4E0A\u6B21\u6253\u5305\u7684\u5185\u5BB9</span>
        <span class="token comment">// \u539F\u7406\uFF1A\u5728\u6253\u5305\u524D\uFF0C\u5C06path\u6574\u4E2A\u76EE\u5F55\u5185\u5BB9\u6E05\u7A7A\uFF0C\u518D\u8FDB\u884C\u6253\u5305</span>
        <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5904\u7406\u5B57\u4F53\u56FE\u6807\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u5B57\u4F53\u56FE\u6807\u8D44\u6E90" aria-hidden="true">#</a> \u5904\u7406\u5B57\u4F53\u56FE\u6807\u8D44\u6E90</h2><ul><li>asset/resource\uFF1A\u4E0D\u4F1A\u8F6C\u5316\u4E3Abase64\uFF0C\u800C\u662F\u5C06\u5B57\u4F53\u6587\u4EF6\u6253\u5305\u8F93\u51FA</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(ttf|woff2?|svg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset/resource&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;static/fonts/[hash:10][ext][query]&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5904\u7406\u5176\u4ED6\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u5176\u4ED6\u8D44\u6E90" aria-hidden="true">#</a> \u5904\u7406\u5176\u4ED6\u8D44\u6E90</h2><p>\u6BD4\u5982\u97F3\u9891\u3001\u89C6\u9891\u3001excel\u7B49\uFF0C\u4E5F\u4F7F\u7528<code>asset/resource</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(tff|woff2?|mp3|mp4|avi)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset/resource&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;static/media/[hash:10][ext][query]&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5904\u7406js\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406js\u8D44\u6E90" aria-hidden="true">#</a> \u5904\u7406js\u8D44\u6E90</h2><p>webpack\u5BF9\u4E8Ejs\u7684\u5904\u7406\u662F\u6709\u9650\u7684\uFF0C\u53EA\u80FD\u7F16\u8BD1js\u4E2D\u7684es\u6A21\u5757\u5316\u8BED\u6CD5\uFF0C\u4E0D\u80FD\u7F16\u8BD1\u5176\u4ED6\u8BED\u6CD5\uFF0C\u5BFC\u81F4js\u4E0D\u80FD\u5728IE\u7B49\u6D4F\u89C8\u5668\u8FD0\u884C\uFF0C\u6240\u4EE5\u8981\u505A\u4E00\u4E9B\u517C\u5BB9\u6027\u5904\u7406</p><ul><li>\u9488\u5BF9\u517C\u5BB9\u6027\uFF0C\u4F7F\u7528babel\u5904\u7406</li><li>\u9488\u5BF9\u4EE3\u7801\u683C\u5F0F\u5316\uFF0C\u4F7F\u7528eslint\u5904\u7406</li></ul><h3 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> eslint</h3>`,42),y=n("li",null,"\u53EF\u7EC4\u88C5\u7684JavaScript\u548CJSX\u68C0\u67E5\u5DE5\u5177",-1),m=n("li",null,"\u4F7F\u7528eslint\uFF0C\u5173\u952E\u662Feslint\u914D\u7F6E\u6587\u4EF6\uFF0C\u91CC\u9762\u5199\u5404\u79CDrules\u89C4\u5219",-1),x={href:"https://cn.eslint.org/docs/user-guide/configuring",target:"_blank",rel:"noopener noreferrer"},h=s("esling"),b=e(`<p>\u914D\u7F6E\u6587\u4EF6\u7684\u5199\u6CD5\uFF1A</p><ul><li>.eslintrc</li><li>.eslintrc.js</li><li>.eslintrc.json</li><li>\u8FD8\u5728\u53EF\u4EE5\u5728<code>package.json</code>\u4E2D<code>eslintconfig</code>\u914D\u7F6E</li></ul><p>\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// .eslintrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u89E3\u6790\u9009\u9879</span>
    <span class="token literal-property property">parseOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5177\u4F53\u68C0\u67E5\u89C4\u5219</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7EE7\u627F\u5176\u4ED6\u89C4\u5219</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5176\u4ED6\u89C4\u5219...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>parseOptions\u89E3\u91CA\u9009\u9879\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// .eslintrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u89E3\u6790\u9009\u9879</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token comment">// es\u8BED\u6CD5\u7248\u672C</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span> <span class="token comment">// es\u6A21\u5757</span>
    <span class="token literal-property property">ecmaFeatures</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// es\u5176\u4ED6\u7279\u6027</span>
      <span class="token literal-property property">jsx</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5982\u679C\u662Freact\u9879\u76EE\uFF0C\u5C31\u9700\u8981\u5F00\u542F jsx \u8BED\u6CD5</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p>rules\u89C4\u5219</p><ul><li>off\u62160\uFF0C\u5173\u95ED\u89C4\u5219</li><li>warn\u62161\uFF0C\u5F00\u542F\u89C4\u5219\uFF0C\u4F7F\u7528\u8B66\u544A\u7EA7\u7684\u9519\u8BEF\uFF0Cwarn\u4E0D\u4F1A\u5BFC\u81F4\u7A0B\u5E8F\u9000\u51FA</li><li>error\u62162\uFF0C\u5F00\u542F\u89C4\u5219\uFF0C\u4F7F\u7528\u9519\u8BEF\u7EA7\u522B\u7684\u9519\u8BEF\uFF0Cerror\u5F53\u88AB\u89E6\u53D1\u7684\u65F6\u5019\uFF0C\u7A0B\u5E8F\u9000\u51FA</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// .eslintrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5177\u4F53\u68C0\u67E5\u89C4\u5219</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u7981\u6B62\u4F7F\u7528\u5206\u53F7</span>
    <span class="token string-property property">&#39;array-callback-return&#39;</span><span class="token operator">:</span> <span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5F3A\u5236\u6570\u7EC4\u65B9\u6CD5\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u6709 return \u8BED\u53E5</span>
    <span class="token string-property property">&#39;default-case&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8981\u6C42 switch \u8BED\u53E5\u4E2D\u6709 default \u5206\u652F</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">commentPattern</span><span class="token operator">:</span> <span class="token string">&#39;^no default$&#39;</span> <span class="token punctuation">}</span> <span class="token comment">// \u5141\u8BB8\u5728\u6700\u540E\u6CE8\u91CA no default\uFF0C\u5C31\u4E0D\u4F1A\u62A5\u9519\u4E86</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
     
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>extends\u7EE7\u627F\uFF1A</p><p>\u5F00\u53D1\u4E2Drules\u89C4\u5219\u592A\u591A\uFF0C\u6240\u4EE5\u53EF\u4EE5\u7EE7\u627F\u73B0\u6709\u7684\u89C4\u5219\uFF1A</p><ul><li><a href="">eslint\u5B98\u65B9\u7684\u89C4\u5219</a>\uFF1Aeslint:recommended</li><li><a href="">vue cli\u5B98\u65B9\u7684\u89C4\u5219</a>\uFF1Aplugin:vue/essential</li><li><a href="">react cli\u5B98\u65B9\u7684\u89C4\u8FFD</a>\uFF1Areact-app</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// .eslintrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7EE7\u627F\u5176\u4ED6\u89C4\u5219</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;react-app&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// \u53EF\u4EE5\u91CD\u5199\u89C4\u5219</span>
<span class="token punctuation">}</span>

</code></pre></div><p>webpack\u4E2D\u914D\u7F6Eeslint\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> eslint eslint-webpack-plugin -D
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ESLintPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;eslint-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">ESLintPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// \u68C0\u6D4B\u54EA\u4E9B\u6587\u4EF6</span>
            <span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// .eslintrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7EE7\u627F\u5176\u4ED6\u89C4\u5219</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u52A8node\u4E2D\u5168\u5C40\u53D8\u91CF</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u542F\u52A8\u6D4F\u89C8\u5668\u4E2D\u5168\u5C40\u53D8\u91CF</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u89E3\u6790\u9009\u9879</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token comment">// es\u8BED\u6CD5\u7248\u672C</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span> <span class="token comment">// es\u6A21\u5757</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5177\u4F53\u68C0\u67E5\u89C4\u5219</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;no-var&quot;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token comment">// \u4E0D\u80FD\u4F7F\u7528 var \u5B9A\u4E49\u53D8\u91CF</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p>\u6CE8\u610F\uFF0C\u5F53\u6211\u4EEC\u4F7F\u7528vscode\u7684eslint\u63D2\u4EF6\u68C0\u67E5\u5DE5\u5177\u65F6\uFF0C\u53BB\u67E5\u770B\u6253\u5305\u4E4B\u540E\u7684dist\u76EE\u5F55\uFF0C\u4F1A\u53D1\u73B0\u4E5F\u4F1A\u505Aeslint\u68C0\u67E5\uFF0C\u53EF\u4EE5\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\u6DFB\u52A0<code>.eslintignore</code>\u6765\u5FFD\u7565\u68C0\u67E5\u7684\u76EE\u5F55</p><h3 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> babel</h3><p>javascript\u7F16\u8BD1\u5668\uFF0C\u4E3B\u8981\u662F\u5C06es6\u8BED\u6CD5\u7F16\u8BD1\u4E3A\u5411\u540E\u517C\u5BB9\u7684javascript\u8BED\u6CD5\uFF0C\u4EE5\u4FBF\u8FD0\u884C\u5728\u5F53\u524D\u548C\u65E7\u7248\u672C\u7684\u6D4F\u89C8\u5668\u6216\u5176\u4ED6\u73AF\u5883\u4E2D</p><p>\u914D\u7F6E\u6587\u4EF6\uFF1A</p><ul><li>babel.config.js</li><li>babel.config.json</li><li>.babelrc</li><li>.babelrc.js</li><li>.babelrc.json</li><li>\u5728package.json\u4E2Dbabel\u53BB\u914D\u7F6E</li></ul><p>\u5177\u4F53\u914D\u7F6E\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// babel.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9884\u8BBE\uFF0C\u4E3B\u8981\u662F\u901A\u8FC7\u4E00\u7EC4babel\u63D2\u4EF6\uFF0C\u6269\u5C55babel\u529F\u80FD</span>
    <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u9884\u8BBE\uFF1A</p><ul><li>@babel/preset-env\uFF1A\u4E00\u4E2A\u667A\u80FD\u9884\u8BBE\uFF0C\u5141\u8BB8\u60A8\u4F7F\u7528\u6700\u65B0\u7684javascript</li><li>@babel/preset-react\uFF1A\u4E00\u4E2A\u7528\u6765\u7F16\u8BD1react jsx\u8BED\u6CD5\u7684\u9884\u8BBE</li><li>@babel/preset-typescript\uFF1A\u4E00\u4E2A\u7528\u6765\u7F16\u8BD1ts\u8BED\u6CD5\u7684\u9884\u8BBE</li></ul><p>\u5728webpack\u4E2D\u662F\u4F7F\u7528</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> babel-loader @babel/core @babel/preset-env -D
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// \u6392\u9664node_modules\u4E2D\u7684js\u6587\u4EF6</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
                <span class="token comment">//   options: {</span>
                <span class="token comment">//     presets: [&#39;@babel/preset-env&#39;]</span>
                <span class="token comment">//   }</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// babel.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9884\u8BBE</span>
    <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5904\u7406html\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406html\u8D44\u6E90" aria-hidden="true">#</a> \u5904\u7406HTML\u8D44\u6E90</h2><ul><li>\u95EE\u9898\uFF1A\u4E4B\u524D\u5199\u7684index.html\u6CA1\u6709\u88AB\u6253\u5305</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -D html-webpack-plugin
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// \u6A21\u677F\uFF1A\u5DF2 public/index.html\u6587\u4EF6\u521B\u5EFA\u65B0\u7684html\u6587\u4EF6</span>
            <span class="token comment">// \u65B0\u7684html\u6587\u4EF6\u7279\u70B9\uFF1A\u7ED3\u6784\u4E0E\u539F\u6765\u7684\u4E00\u81F4\uFF1B\u81EA\u52A8\u5F15\u5165\u6253\u5305\u8F93\u51FA\u7684\u8D44\u6E90</span>
            <span class="token comment">// \u624B\u52A8\u5F15\u5165\u7684js\u6587\u4EF6\u5C31\u4E0D\u9700\u8981\u4E86</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;public/index.html&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u5F00\u53D1\u670D\u52A1\u5668-\u81EA\u52A8\u5316" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u670D\u52A1\u5668-\u81EA\u52A8\u5316" aria-hidden="true">#</a> \u5F00\u53D1\u670D\u52A1\u5668&amp;\u81EA\u52A8\u5316</h2><ul><li>\u95EE\u9898\uFF1A\u6BCF\u6B21\u4FEE\u6539\u6587\u4EF6\u90FD\u9700\u8981\u53BB\u91CD\u65B0\u6253\u5305</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> i -D webpack-dev-server
<span class="token comment"># \u542F\u52A8</span>
npx webpack serve
</code></pre></div><ul><li>\u5F00\u53D1\u670D\u52A1\u5668\u4E0D\u4F1A\u8F93\u51FA\u8D44\u6E90\uFF08dist\uFF09\uFF0C\u5728\u5185\u5B58\u4E2D\u7F16\u8BD1\u6253\u5305</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u751F\u4EA7\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u751F\u4EA7\u6A21\u5F0F" aria-hidden="true">#</a> \u751F\u4EA7\u6A21\u5F0F</h2><ul><li>webpack.dev.js \u5F00\u53D1\u6A21\u5F0F <ul><li><code>output.path</code>\u8D4B\u503Cundefined\uFF0C\u56E0\u4E3A\u5F00\u53D1\u6A21\u5F0F\u4E0B\u6CA1\u6709\u8F93\u51FA</li><li>\u4E0D\u9700\u8981<code>output.clean</code></li><li>\u76F8\u5BF9\u8DEF\u5F84\u505A\u66F4\u6539</li></ul></li><li>webpack.prod.js \u751F\u4EA7\u6A21\u5F0F <ul><li>\u76F8\u5BF9\u8DEF\u5F84\u505A\u66F4\u6539</li><li><code>mode: &#39;production&#39;</code></li><li>\u4E0D\u9700\u8981<code>devServer</code></li></ul></li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u8FD0\u884C\u5F00\u53D1\u6A21\u5F0F</span>
npx webpack serve --config ./config/webpack.dev.js 
<span class="token comment"># \u8FD0\u884C\u751F\u4EA7\u6A21\u5F0F</span>
npx webpack --config ./config/webpack.prod.js 
</code></pre></div><p>\u4EE5\u4E0A\u547D\u4EE4\u53EF\u4EE5\u5199\u5230<code>package.json</code>\u7684<code>scripts</code>\u4E2D\uFF1A</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run dev&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack serve --config ./config/webpack.dev.js &quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --config ./config/webpack.prod.js&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
<span class="token punctuation">}</span>
</code></pre></div>`,44),v=n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'path'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" ESLintPlugin "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'eslint-webpack-plugin'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" HtmlWebpackPlugin "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'html-webpack-plugin'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"devServer"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"host"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'localhost'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"port"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3000"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"open"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"entry"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'./src/main.js'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"output"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// path: path.resolve(__dirname, 'dist'),"),s(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// \u5F00\u53D1\u6A21\u5F0F\u6CA1\u6709\u8F93\u51FA"),s(`
        `),n("span",{class:"token literal-property property"},"filename"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'static/js/main.js'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u81EA\u52A8\u6E05\u7A7A\u4E0A\u6B21\u6253\u5305\u7684\u5185\u5BB9"),s(`
        `),n("span",{class:"token comment"},"// \u539F\u7406\uFF1A\u5728\u6253\u5305\u524D\uFF0C\u5C06path\u6574\u4E2A\u76EE\u5F55\u5185\u5BB9\u6E05\u7A7A\uFF0C\u518D\u8FDB\u884C\u6253\u5305"),s(`
        `),n("span",{class:"token comment"},"// clean: true"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"module"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.css$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"use"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token comment"},"// \u6267\u884C\u987A\u5E8F\uFF1A\u4ECE\u53F3\u5230\u5DE6\uFF08\u4ECE\u5C0F\u5230\u4E0A\uFF09"),s(`
                    `),n("span",{class:"token string"},"'style-loader'"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token string"},"'css-loader'"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.less$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"use"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'style-loader'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'css-loader'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'less-loader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.s[ac]ss$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"use"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'style-loader'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'css-loader'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'sass-loader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.styl$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"use"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'style-loader'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'css-loader'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'stylus-loader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.(png|jpe?g|gif|webp|svg)$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'asset'"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"parser"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token literal-property property"},"dataUrlCondition"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token comment"},"// \u5C0F\u4E8E 10kb\u7684\u56FE\u7247\u4F1A\u8F6C\u5316\u4E3Abase64\uFF0C\u6253\u5305\u4E4B\u540E\u56FE\u7247\u88AB\u8F6C\u7801\u5230js\u6587\u4EF6\u4E2D"),s(`
                        `),n("span",{class:"token comment"},"// \u4F18\u70B9\u662F\u51CF\u5C11\u8BF7\u6C42\u6570\u91CF\uFF0C\u7F3A\u70B9\uFF0C\u4F53\u79EF\u66F4\u5927"),s(`
                        `),n("span",{class:"token literal-property property"},"maxSize"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"1024"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 10kb"),s(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"generator"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token comment"},"// \u8F93\u51FA\u56FE\u7247\u7684\u540D\u79F0\u53CA\u8DEF\u5F84"),s(`
                    `),n("span",{class:"token literal-property property"},"filename"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'static/images/[hash:10][ext][query]'"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.(tff|woff2?)$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'asset/resource'"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"generator"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token literal-property property"},"filename"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'static/fonts/[hash:10][ext][query]'"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.js$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"exclude"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"node_modules"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// \u6392\u9664node_modules\u4E2D\u7684js\u6587\u4EF6"),s(`
                `),n("span",{class:"token literal-property property"},"use"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token literal-property property"},"loader"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'babel-loader'"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token comment"},"//   options: {"),s(`
                `),n("span",{class:"token comment"},"//     presets: ['@babel/preset-env']"),s(`
                `),n("span",{class:"token comment"},"//   }"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ESLintPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// \u68C0\u6D4B\u54EA\u4E9B\u6587\u4EF6"),s(`
            `),n("span",{class:"token literal-property property"},"context"),n("span",{class:"token operator"},":"),s(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'../src'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"HtmlWebpackPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// \u6A21\u677F\uFF1A\u5DF2 public/index.html\u6587\u4EF6\u521B\u5EFA\u65B0\u7684html\u6587\u4EF6"),s(`
            `),n("span",{class:"token comment"},"// \u65B0\u7684html\u6587\u4EF6\u7279\u70B9\uFF1A\u7ED3\u6784\u4E0E\u539F\u6765\u7684\u4E00\u81F4\uFF1B\u81EA\u52A8\u5F15\u5165\u6253\u5305\u8F93\u51FA\u7684\u8D44\u6E90"),s(`
            `),n("span",{class:"token comment"},"// \u624B\u52A8\u5F15\u5165\u7684js\u6587\u4EF6\u5C31\u4E0D\u9700\u8981\u4E86"),s(`
            `),n("span",{class:"token literal-property property"},"template"),n("span",{class:"token operator"},":"),s(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'../public/index.html'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"mode"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'development'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),f=n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'path'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" ESLintPlugin "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'eslint-webpack-plugin'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" HtmlWebpackPlugin "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'html-webpack-plugin'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"entry"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'./src/main.js'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"output"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'../dist'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"filename"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'static/js/main.js'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u81EA\u52A8\u6E05\u7A7A\u4E0A\u6B21\u6253\u5305\u7684\u5185\u5BB9"),s(`
        `),n("span",{class:"token comment"},"// \u539F\u7406\uFF1A\u5728\u6253\u5305\u524D\uFF0C\u5C06path\u6574\u4E2A\u76EE\u5F55\u5185\u5BB9\u6E05\u7A7A\uFF0C\u518D\u8FDB\u884C\u6253\u5305"),s(`
        `),n("span",{class:"token literal-property property"},"clean"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"module"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.css$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"use"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token comment"},"// \u6267\u884C\u987A\u5E8F\uFF1A\u4ECE\u53F3\u5230\u5DE6\uFF08\u4ECE\u5C0F\u5230\u4E0A\uFF09"),s(`
                    `),n("span",{class:"token string"},"'style-loader'"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token string"},"'css-loader'"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.less$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"use"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'style-loader'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'css-loader'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'less-loader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.s[ac]ss$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"use"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'style-loader'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'css-loader'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'sass-loader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.styl$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"use"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'style-loader'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'css-loader'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'stylus-loader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.(png|jpe?g|gif|webp|svg)$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'asset'"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"parser"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token literal-property property"},"dataUrlCondition"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token comment"},"// \u5C0F\u4E8E 10kb\u7684\u56FE\u7247\u4F1A\u8F6C\u5316\u4E3Abase64\uFF0C\u6253\u5305\u4E4B\u540E\u56FE\u7247\u88AB\u8F6C\u7801\u5230js\u6587\u4EF6\u4E2D"),s(`
                        `),n("span",{class:"token comment"},"// \u4F18\u70B9\u662F\u51CF\u5C11\u8BF7\u6C42\u6570\u91CF\uFF0C\u7F3A\u70B9\uFF0C\u4F53\u79EF\u66F4\u5927"),s(`
                        `),n("span",{class:"token literal-property property"},"maxSize"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"1024"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 10kb"),s(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"generator"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token comment"},"// \u8F93\u51FA\u56FE\u7247\u7684\u540D\u79F0\u53CA\u8DEF\u5F84"),s(`
                    `),n("span",{class:"token literal-property property"},"filename"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'static/images/[hash:10][ext][query]'"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.(tff|woff2?)$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'asset/resource'"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"generator"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token literal-property property"},"filename"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'static/fonts/[hash:10][ext][query]'"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.js$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"exclude"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"node_modules"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// \u6392\u9664node_modules\u4E2D\u7684js\u6587\u4EF6"),s(`
                `),n("span",{class:"token literal-property property"},"use"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token literal-property property"},"loader"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'babel-loader'"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token comment"},"//   options: {"),s(`
                `),n("span",{class:"token comment"},"//     presets: ['@babel/preset-env']"),s(`
                `),n("span",{class:"token comment"},"//   }"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ESLintPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// \u68C0\u6D4B\u54EA\u4E9B\u6587\u4EF6"),s(`
            `),n("span",{class:"token literal-property property"},"context"),n("span",{class:"token operator"},":"),s(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'../src'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"HtmlWebpackPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// \u6A21\u677F\uFF1A\u5DF2 public/index.html\u6587\u4EF6\u521B\u5EFA\u65B0\u7684html\u6587\u4EF6"),s(`
            `),n("span",{class:"token comment"},"// \u65B0\u7684html\u6587\u4EF6\u7279\u70B9\uFF1A\u7ED3\u6784\u4E0E\u539F\u6765\u7684\u4E00\u81F4\uFF1B\u81EA\u52A8\u5F15\u5165\u6253\u5305\u8F93\u51FA\u7684\u8D44\u6E90"),s(`
            `),n("span",{class:"token comment"},"// \u624B\u52A8\u5F15\u5165\u7684js\u6587\u4EF6\u5C31\u4E0D\u9700\u8981\u4E86"),s(`
            `),n("span",{class:"token literal-property property"},"template"),n("span",{class:"token operator"},":"),s(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'../public/index.html'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"mode"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'production'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),j=e(`<h2 id="\u751F\u4EA7\u73AF\u5883\u63D0\u53D6css\u6210\u5355\u72EC\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u751F\u4EA7\u73AF\u5883\u63D0\u53D6css\u6210\u5355\u72EC\u7684\u6587\u4EF6" aria-hidden="true">#</a> \u751F\u4EA7\u73AF\u5883\u63D0\u53D6css\u6210\u5355\u72EC\u7684\u6587\u4EF6</h2><p>css\u6587\u4EF6\u76EE\u524D\u4F1A\u88AB\u6253\u5305\u5230js\u6587\u4EF6\u4E2D\uFF0C\u5F53js\u6587\u4EF6\u52A0\u8F7D\u65F6\uFF0C\u4F1A\u521B\u5EFA\u4E00\u4E2Astyle\u6807\u7B7E\u6765\u751F\u6210\u6837\u5F0F\uFF0C\u8FD9\u6837\u5BF9\u4E8E\u7F51\u7AD9\u6765\u8BF4\uFF0C\u4F1A\u51FA\u73B0\u95EA\u5C4F\u73B0\u8C61\uFF0C\u7528\u6237\u4F53\u9A8C\u4E0D\u597D\uFF0C\u6240\u4EE5\uFF0C\u5E94\u8BE5\u662F\u5355\u72EC\u7684css\u6587\u4EF6\uFF0C\u901A\u8FC7link\u6807\u7B7E\u52A0\u8F7D\u6027\u80FD\u624D\u597D</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -D mini-css-extract-plugin
</code></pre></div><ul><li>style-loader\u66FF\u6362\u4E3A<code>MiniCssExtractPlugin.loader</code></li><li>\u5728\u63D2\u4EF6\u4E2D\u4F7F\u7528<code>new MiniCssExtractPlugin()</code></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// webpack.prod.js</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mini-css-extract-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span><span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s[ac]ss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;stylus-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;static/css/main.css&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u6837\u5F0F\u517C\u5BB9\u6027\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u6837\u5F0F\u517C\u5BB9\u6027\u5904\u7406" aria-hidden="true">#</a> \u6837\u5F0F\u517C\u5BB9\u6027\u5904\u7406</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -D postcss-loader postcss postcss-preset-env
</code></pre></div><ul><li>\u5728css-loader\u540E\u9762\uFF0Cless-loader\u524D\u9762\uFF0C\u5230\u6B64\u8FD8\u65E0\u6CD5\u4F53\u73B0\u6548\u679C</li><li>\u8FD8\u9700\u8981\u6307\u5B9A\u517C\u5BB9\u6027\uFF0C\u53EF\u4EE5\u5728package.json\u4E2D\u6DFB\u52A0<code>&quot;browserslist&quot;: [&quot;last 2 version&quot;, &quot;&gt;1%&quot;, &quot;not dead&quot;]</code></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// webpack.prod.js</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mini-css-extract-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token comment">// \u6267\u884C\u987A\u5E8F\uFF1A\u4ECE\u53F3\u5230\u5DE6\uFF08\u4ECE\u5C0F\u5230\u4E0A\uFF09</span>
                    MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
                    <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                                    <span class="token string">&quot;postcss-preset-env&quot;</span>
                                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
                    <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                                    <span class="token string">&quot;postcss-preset-env&quot;</span>
                                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;less-loader&#39;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s[ac]ss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
                    <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                                    <span class="token string">&quot;postcss-preset-env&quot;</span>
                                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;sass-loader&#39;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
                    <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                                    <span class="token string">&quot;postcss-preset-env&quot;</span>
                                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;stylus-loader&#39;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;static/css/main.css&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u5C01\u88C5\u6837\u5F0Floader\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u6837\u5F0Floader\u51FD\u6570" aria-hidden="true">#</a> \u5C01\u88C5\u6837\u5F0Floader\u51FD\u6570</h2><p>\u4EE5\u4E0Acss\u5904\u7406\u6709\u5F88\u591A\u7684\u91CD\u590D\u4EE3\u7801\uFF0C\u6240\u4EE5\u8FDB\u884C\u4E00\u4E2A\u5C01\u88C5</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// webpack.prod.js</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mini-css-extract-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5904\u7406\u6837\u5F0F\u7684loader</span>
<span class="token keyword">function</span> <span class="token function">getStyleLoader</span><span class="token punctuation">(</span><span class="token parameter">pre</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
        <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&quot;postcss-preset-env&quot;</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        pre
    <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span> <span class="token comment">// pre\u53EF\u80FD\u4E0D\u4F20\uFF0C\u4E5F\u5C31\u662Fundefined\uFF0C\u8FC7\u6EE4\u6389\u5373\u53EF</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token function">getStyleLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token function">getStyleLoader</span><span class="token punctuation">(</span><span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s[ac]ss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token function">getStyleLoader</span><span class="token punctuation">(</span><span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token function">getStyleLoader</span><span class="token punctuation">(</span><span class="token string">&#39;stylus-loader&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;static/css/main.css&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="css\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#css\u538B\u7F29" aria-hidden="true">#</a> css\u538B\u7F29</h2><p>webpack4\u4E4B\u524D\u662F\u4F7F\u7528<code>optimize-css-assets-webpack-plugin </code>\uFF0C\u73B0\u5728\u4F7F\u7528<code>css-minimizer-webpack-plugin</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> css-minimizer-webpack-plugin -D
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mini-css-extract-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> CssMinimizerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;css-minimizer-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5904\u7406\u6837\u5F0F\u7684loader</span>
<span class="token keyword">function</span> <span class="token function">getStyleLoader</span><span class="token punctuation">(</span><span class="token parameter">pre</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
        <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&quot;postcss-preset-env&quot;</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        pre
    <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token function">getStyleLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token function">getStyleLoader</span><span class="token punctuation">(</span><span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s[ac]ss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token function">getStyleLoader</span><span class="token punctuation">(</span><span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token function">getStyleLoader</span><span class="token punctuation">(</span><span class="token string">&#39;stylus-loader&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;static/css/main.css&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">CssMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u57FA\u7840html\u548Cjs\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840html\u548Cjs\u538B\u7F29" aria-hidden="true">#</a> \u57FA\u7840html\u548Cjs\u538B\u7F29</h2><p>\u9ED8\u8BA4\u751F\u4EA7\u6A21\u5F0F\u5DF2\u542F\u52A8html\u548Cjs\u7684\u538B\u7F29\uFF0C\u4E0D\u9700\u8981\u989D\u5916\u8FDB\u884C\u914D\u7F6E</p><h2 id="webpack\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#webpack\u4F18\u5316" aria-hidden="true">#</a> webpack\u4F18\u5316</h2><p>\u4ECE\u5982\u4E0B\u89D2\u5EA6\u8FDB\u884C\u4F18\u5316</p><ul><li>\u63D0\u5347\u5F00\u53D1\u4F53\u9A8C</li><li>\u63D0\u5347\u6253\u5305\u6784\u5EFA\u901F\u5EA6</li><li>\u51CF\u5C11\u4EE3\u7801\u4F53\u79EF</li><li>\u4F18\u5316\u4EE3\u7801\u8FD0\u884C\u6027\u80FD</li></ul><h3 id="\u63D0\u5347\u5F00\u53D1\u4F53\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u63D0\u5347\u5F00\u53D1\u4F53\u9A8C" aria-hidden="true">#</a> \u63D0\u5347\u5F00\u53D1\u4F53\u9A8C</h3><p>sourcemap</p><p>\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528sourcemap\uFF0C\u56E0\u4E3A\u5F00\u53D1\u65F6\uFF0C\u8FD0\u884C\u7684\u4EE3\u7801\u65F6\u7ECF\u8FC7webpack\u7F16\u8BD1\u540E\u7684\uFF0C\u6240\u6709css\u548Cjs\u5408\u5E76\u6210\u4E00\u4E2A\u6587\u4EF6\uFF0C\u5E76\u4E14\u591A\u4E86\u5F88\u591A\u7684\u4EE3\u7801\uFF0C\u5982\u679C\u6B64\u65F6\u4EE3\u7801\u8FD0\u884C\u62A5\u9519\uFF0C\u90A3\u4E48\u63D0\u793A\u7684\u4EE3\u7801\u62A5\u9519\u4F4D\u7F6E\u627E\u4E0D\u5230</p><p>sourcemap\uFF08\u6E90\u4EE3\u7801\u6620\u5C04\uFF09\u662F\u4E00\u4E2A\u7528\u6765\u751F\u6210\u6E90\u4EE3\u7801\u4E0E\u6784\u5EFA\u540E\u4EE3\u7801\u4E00\u4E00\u6620\u5C04\u7684\u6587\u4EF6\u7684\u65B9\u6848\uFF0C\u5B83\u4F1A\u751F\u6210xxx.map\u6587\u4EF6\uFF0C\u91CC\u9762\u5305\u542B\u4E86\u6E90\u4EE3\u7801\u548C\u6784\u5EFA\u540E\u4EE3\u7801\u6BCF\u4E00\u884C\u3001\uFF0C\u6BCF\u4E00\u5217\u7684\u6620\u5C04\u5173\u7CFB\uFF0C\u5F53\u6784\u5EFA\u540E\u4EE3\u7801\u51FA\u73B0\u9519\u8BEF\uFF0C\u4F1A\u901A\u8FC7xxx.map\u6587\u4EF6\uFF0C\u4ECE\u6784\u5EFA\u540E\u4EE3\u7801\u51FA\u9519\u4F4D\u7F6E\u627E\u5230\u6620\u5C04\u540E\u6E90\u4EE3\u7801\u51FA\u9519\u4F4D\u7F6E\uFF0C\u4ECE\u800C\u8BA9\u6D4F\u89C8\u5668\u63D0\u793A\u6E90\u4EE3\u7801\u6587\u4EF6\u51FA\u9519\u4F4D\u7F6E\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5B9A\u4F4D\u9519\u8BEF\u4F4D\u7F6E</p><p>\u600E\u4E48\u4F7F\u7528?</p>`,26),w={href:"https://webpack.docschina.org/configuration/devtool/#root",target:"_blank",rel:"noopener noreferrer"},q=s("Devtool"),_=e(`<p>\u5F00\u53D1\u6A21\u5F0F\uFF1A<code>cheap-module-source-map</code></p><ul><li>\u4F18\u70B9\uFF1A\u6253\u5305\u7F16\u8BD1\u901F\u5EA6\u5FEB\uFF0C\u53EA\u5305\u542B\u884C\u6620\u5C04</li><li>\u7F3A\u70B9\uFF1A\u6CA1\u6709\u5217\u6620\u5C04</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&#39;cheap-module-source-map&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u751F\u4EA7\u6A21\u5F0F\uFF1A<code>source-map</code></p><ul><li>\u4F18\u70B9\uFF1A\u5305\u542B\u884C/\u5217\u6620\u5C04</li><li>\u7F3A\u70B9\uFF1A\u6253\u5305\u7F16\u8BD1\u901F\u5EA6\u66F4\u6162</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&#39;source-map&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u63D0\u5347\u6253\u5305\u6784\u5EFA\u901F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u63D0\u5347\u6253\u5305\u6784\u5EFA\u901F\u5EA6" aria-hidden="true">#</a> \u63D0\u5347\u6253\u5305\u6784\u5EFA\u901F\u5EA6</h3><ul><li>HMR\uFF0C\u4E00\u822C\u90FD\u662F\u5904\u7406\u597D\u7684\u6BD4\u5982\uFF0Cvue-loader</li><li>oneOf\uFF0C\u547D\u4E2Dloader</li><li>include/exclude\uFF0C\u6BD4\u5982node_modules</li><li>cache\uFF0C\u6BD4\u5982babel\uFF0Ceslint\u7F13\u5B58</li><li>thead\uFF0C\u591A\u8FDB\u7A0B\u6253\u5305\u5904\u7406js\u6587\u4EF6\uFF0Cbabel\u3001eslint\u3001\u538B\u7F29\uFF1B\u5F00\u542F\u4E00\u4E2A\u8FDB\u7A0B\u4E5F\u6709600m\u5DE6\u53F3\u7684\u5EF6\u8FDF</li></ul><h3 id="\u51CF\u5C11\u4EE3\u7801\u4F53\u79EF" tabindex="-1"><a class="header-anchor" href="#\u51CF\u5C11\u4EE3\u7801\u4F53\u79EF" aria-hidden="true">#</a> \u51CF\u5C11\u4EE3\u7801\u4F53\u79EF</h3><ul><li>tree shaking\uFF0C\u79FB\u9664js\u4E2D\u6CA1\u6709\u4F7F\u7528\u7684\u4EE3\u7801\uFF0C\u4F9D\u8D56es module\uFF0Cwebpack\u9ED8\u8BA4\u5DF2\u7ECF\u5F00\u542F</li><li>\u51CF\u5C11babel\u4F53\u79EF\uFF0C <code>@babel/plugin-transform-runtime</code></li><li>\u56FE\u7247\u538B\u7F29\uFF0C<code>image-minimizer-webpack-plugin</code>\u3001<code>imagemin</code>\u5904\u7406\u672C\u5730\u56FE\u7247\uFF0C\u53C8\u5206\u4E3A\u6709\u635F\u548C\u65E0\u635F\u538B\u7F29\u7684\u5305</li></ul><h3 id="\u4F18\u5316\u4EE3\u7801\u8FD0\u884C\u6027\u80FD" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316\u4EE3\u7801\u8FD0\u884C\u6027\u80FD" aria-hidden="true">#</a> \u4F18\u5316\u4EE3\u7801\u8FD0\u884C\u6027\u80FD</h3><ul><li>code split \u4EE3\u7801\u5206\u5272</li><li>network cache</li><li>core-js</li><li>pwa</li></ul><h2 id="\u9AD8\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u7EA7" aria-hidden="true">#</a> \u9AD8\u7EA7</h2>`,13),$=s("loader"),P=s("plugins");function C(E,S){const o=t("ExternalLinkIcon"),c=t("CodeGroupItem"),r=t("CodeGroup"),l=t("RouterLink");return i(),k("div",null,[g,n("ul",null,[y,m,n("li",null,[n("a",x,[h,a(o)])])]),b,a(r,null,{default:p(()=>[a(c,{title:"webpack.dev.js"},{default:p(()=>[v]),_:1}),a(c,{title:"webpack.prod.js"},{default:p(()=>[f]),_:1})]),_:1}),j,n("ul",null,[n("li",null,[n("a",w,[q,a(o)])])]),_,n("ul",null,[n("li",null,[a(l,{to:"/bundler/webpack/loader.html"},{default:p(()=>[$]),_:1})]),n("li",null,[a(l,{to:"/bundler/webpack/plugins.html"},{default:p(()=>[P]),_:1})])])])}var L=u(d,[["render",C],["__file","v5.html.vue"]]);export{L as default};
