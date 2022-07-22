import{_ as e,r as o,o as c,c as l,a as n,b as t,e as a,d as p}from"./app.41542100.js";const r={},u=n("h1",{id:"loader",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#loader","aria-hidden":"true"},"#"),a(" loader")],-1),i=n("p",null,"\u5E2E\u52A9webpack\u5C06\u4E0D\u540C\u7C7B\u578B\u7684\u6587\u4EF6\u8F6C\u6362\u4E3Awebpack\u53EF\u8BC6\u522B\u7684\u6A21\u5757",-1),k=n("h2",{id:"loader\u7684\u6267\u884C\u987A\u5E8F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#loader\u7684\u6267\u884C\u987A\u5E8F","aria-hidden":"true"},"#"),a(" loader\u7684\u6267\u884C\u987A\u5E8F")],-1),d={href:"https://webpack.docschina.org/concepts/loaders",target:"_blank",rel:"noopener noreferrer"},g=a("loaders"),m=p(`<ol><li>\u5206\u7C7B</li></ol><ul><li>pre\uFF1A\u524D\u7F6Eloader</li><li>normal\uFF1A\u666E\u901Aloader</li><li>inline\uFF1A\u5185\u8054loader</li><li>post\uFF1A\u540E\u7F6Eloader</li></ul><ol start="2"><li>\u6267\u884C\u987A\u5E8F</li></ol><ul><li>4\u7C7Bloader\u7684\u6267\u884C\u987A\u5E8F\uFF1Apre-&gt;normal-&gt;inline-&gt;post</li><li>\u76F8\u540C\u4F18\u5148\u7EA7\u7684loader\u6267\u884C\u987A\u5E8F\uFF1A\u4ECE\u53F3\u5230\u5DE6\uFF0C\u4ECE\u4E0B\u5230\u4E0A</li></ul><p>\u53EF\u4EE5\u901A\u8FC7<code>enforce</code>\u5B9A\u4E49\u987A\u5E8F</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;loader1&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;loader2&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;loader3&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="3"><li>\u4F7F\u7528loader\u7684\u65B9\u5F0F</li></ol><ul><li>\u914D\u7F6E\u65B9\u5F0F\uFF1A\u5728<code>webpack.config.js</code>\u6587\u4EF6\u4E2D\u6307\u5B9Aloader\uFF08pre\u3001normal\u3001post loader\uFF09</li><li>\u5185\u8054\u65B9\u5F0F\uFF1A\u5728\u6BCF\u4E2A<code>import</code>\u8BED\u53E5\u4E2D\u663E\u793A\u6307\u5B9Aloader\uFF08inline loader\uFF09</li></ul><ol start="4"><li>inline loader</li></ol><p>\u7528\u6CD5\uFF1A<code>import Styles from &#39;style-loader!css-loader?modules!./style.css&#39;</code></p><p>\u542B\u4E49\uFF1A</p><ul><li>\u4F7F\u7528<code>css-loader</code>\u548C<code>style-loader</code>\u5904\u7406<code>style.css</code></li><li>\u901A\u8FC7<code>!</code>\u5C06\u8D44\u6E90\u4E2D\u7684loader\u5206\u5F00</li></ul><p><code>inline loader</code>\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0\u4E0D\u540C\u7684\u524D\u7F00\uFF0C\u8DF3\u8FC7\u5176\u4ED6\u7C7B\u578B\u7684loader</p><ul><li><code>!</code>\u8DF3\u8FC7normal loader</li></ul><p><code>import Styles from &#39;!style-loader!css-loader?modules!./style.css&#39;</code></p><ul><li><code>!!</code>\u8DF3\u8FC7pre\u3001normal\u548Cpost loader</li></ul><p><code>import Styles from &#39;!!style-loader!css-loader?modules!./style.css&#39;</code></p><h2 id="\u5F00\u53D1\u4E00\u4E2Aloader" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u4E00\u4E2Aloader" aria-hidden="true">#</a> \u5F00\u53D1\u4E00\u4E2Aloader</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>
    <span class="token keyword">return</span> content
<span class="token punctuation">}</span>
</code></pre></div><h2 id="loader\u7684\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#loader\u7684\u5206\u7C7B" aria-hidden="true">#</a> loader\u7684\u5206\u7C7B</h2>`,20),y={href:"https://webpack.docschina.org/api/loaders/#synchronous-loaders",target:"_blank",rel:"noopener noreferrer"},h=a("\u5206\u7C7B"),f=p(`<h3 id="\u540C\u6B65loader" tabindex="-1"><a class="header-anchor" href="#\u540C\u6B65loader" aria-hidden="true">#</a> \u540C\u6B65loader</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> content
<span class="token punctuation">}</span>
</code></pre></div><p><code>this.callback</code>\u65B9\u6CD5\u66F4\u7075\u6D3B\uFF0C\u56E0\u4E3A\u5B83\u5141\u8BB8\u4F20\u9012\u7B49\u591A\u4E2A\u53C2\u6570\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F<code>content</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u7B2C\u4E00\u4E2A\u53C2\u6570\uFF1Aerr \u4EE3\u8868\u662F\u5426\u6709\u9519\u8BEF
     * \u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF1Acontent \u5904\u7406\u540E\u7684\u5185\u5BB9
     * \u7B2C\u4E09\u4E2A\u53C2\u6570\uFF1Asource-map \u7EE7\u7EED\u4F20\u9012source-map\uFF0C\u4E0D\u8BA9source-map\u4E2D\u65AD
     * \u7B2C\u56DB\u4E2A\u53C2\u6570\uFF1Ameta \u7ED9\u4E0B\u4E00\u4E2Aloader\u4F20\u9012\u53C2\u6570
     */</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> content<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token comment">// \u5F53\u8C03\u7528callback()\u51FD\u6570\u65F6\uFF0C\u603B\u662F\u8FD4\u56DE undefined</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5F02\u6B65loader" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65loader" aria-hidden="true">#</a> \u5F02\u6B65loader</h3><p>\u5BF9\u4E8E\u5F02\u6B65 loader\uFF0C\u4F7F\u7528 this.async \u6765\u83B7\u53D6 callback \u51FD\u6570</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">someAsyncOperation</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> result<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="raw-loader" tabindex="-1"><a class="header-anchor" href="#raw-loader" aria-hidden="true">#</a> Raw loader</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8D44\u6E90\u6587\u4EF6\u4F1A\u88AB\u8F6C\u5316\u4E3A UTF-8 \u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u4F20\u7ED9 loader\u3002\u901A\u8FC7\u8BBE\u7F6E raw \u4E3A true\uFF0Cloader \u53EF\u4EE5\u63A5\u6536\u539F\u59CB\u7684 Buffer\u3002\u6BCF\u4E00\u4E2A loader \u90FD\u53EF\u4EE5\u7528 String \u6216\u8005 Buffer \u7684\u5F62\u5F0F\u4F20\u9012\u5B83\u7684\u5904\u7406\u7ED3\u679C\u3002complier \u5C06\u4F1A\u628A\u5B83\u4EEC\u5728 loader \u4E4B\u95F4\u76F8\u4E92\u8F6C\u6362\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> content
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>raw <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre></div><h3 id="pitching-loader" tabindex="-1"><a class="header-anchor" href="#pitching-loader" aria-hidden="true">#</a> pitching loader</h3><p>loader \u603B\u662F \u4ECE\u53F3\u5230\u5DE6\u88AB\u8C03\u7528\u3002\u6709\u4E9B\u60C5\u51B5\u4E0B\uFF0Cloader \u53EA\u5173\u5FC3 request \u540E\u9762\u7684 \u5143\u6570\u636E(metadata)\uFF0C\u5E76\u4E14\u5FFD\u7565\u524D\u4E00\u4E2A loader \u7684\u7ED3\u679C\u3002\u5728\u5B9E\u9645\uFF08\u4ECE\u53F3\u5230\u5DE6\uFF09\u6267\u884C loader \u4E4B\u524D\uFF0C\u4F1A\u5148 \u4ECE\u5DE6\u5230\u53F3 \u8C03\u7528 loader \u4E0A\u7684 pitch \u65B9\u6CD5\u3002</p><h2 id="loader-api" tabindex="-1"><a class="header-anchor" href="#loader-api" aria-hidden="true">#</a> loader api</h2>`,13),x={href:"https://webpack.docschina.org/api/loaders/#the-loader-context",target:"_blank",rel:"noopener noreferrer"},v=a("context"),b=p(`<h2 id="\u81EA\u5B9A\u4E49clean-log-loader" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49clean-log-loader" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49clean-log-loader</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6E05\u9664\u6587\u4EF6\u5185\u5BB9\u4E2D\u7684console.log(xx)</span>
    <span class="token keyword">return</span> content<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">console\\.log\\(.*\\);?</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;./loaders/clean-log-loader.js&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u81EA\u5B9A\u4E49banner-loader" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49banner-loader" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49banner-loader</h2><p>schema.json</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;additionalProperties&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><code>&quot;additionalProperties&quot;: false</code>\uFF1A\u9664\u4E86\u5B9A\u4E49\u7684<code>author</code>\u5B57\u6BB5\uFF0C\u6DFB\u52A0\u4E86\u5176\u4ED6\u7684\u591A\u4F59\u5B57\u6BB5\u4F1A\u62A5\u9519</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// banner-loader.js</span>
<span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./schema.json&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6DFB\u52A0\u4F5C\u8005\u4FE1\u606F</span>
    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span>schema<span class="token punctuation">)</span>
    <span class="token keyword">const</span> prefix <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    /**
     * Author: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>options<span class="token punctuation">.</span>author<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
     */
    </span><span class="token template-punctuation string">\`</span></span>
    <span class="token keyword">return</span> prefix <span class="token operator">+</span> content
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;./loaders/banner-loader&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">&#39;Jerry&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u81EA\u5B9A\u4E49babel-loader" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49babel-loader" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49babel-loader</h2><p>schema.json</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;array&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;additionalProperties&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> babel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/core&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./schema.json&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5F02\u6B65loader</span>
    <span class="token keyword">const</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span>schema<span class="token punctuation">)</span>
    
    <span class="token comment">// \u4F7F\u7528babel\u5BF9\u4EE3\u7801\u8FDB\u884C\u7F16\u8BD1</span>
    babel<span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> options<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> result<span class="token punctuation">.</span>code<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;./loaders/babel-loader&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u81EA\u5B9A\u4E49file-loader" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49file-loader" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49file-loader</h2><ul><li>\u501F\u52A9<code>loader-utils</code></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> loaderUtils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;loader-utils&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. \u6839\u636E\u6587\u4EF6\u5185\u5BB9\u751F\u6210\u5E26hash\u503C\u6587\u4EF6\u540D</span>
    <span class="token keyword">const</span> interpolateName <span class="token operator">=</span> loaderUtils<span class="token punctuation">.</span><span class="token function">interpolateName</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&#39;[hash].[ext][query]&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        content
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>interpolateName<span class="token punctuation">)</span>
    <span class="token comment">// 2. \u5C06\u6587\u4EF6\u8FD4\u56DE</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emitFile</span><span class="token punctuation">(</span>interpolateName<span class="token punctuation">,</span> content<span class="token punctuation">)</span>
    <span class="token comment">// 3. \u8FD4\u56DE module.exports = &quot;\u6587\u4EF6\u8DEF\u5F84\uFF08\u6587\u4EF6\u540D\uFF09&quot;</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">module.exports = &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>interpolateName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

<span class="token comment">// \u9700\u8981\u5904\u7406\u56FE\u7247\u3001\u5B57\u4F53\u7B49\u6587\u4EF6\u3002\u5B83\u4EEC\u90FD\u662Fbuffer\u6570\u636E</span>
module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>raw <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpe?g|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;./loaders/file-loader&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;javascript/auto&#39;</span> <span class="token comment">// \u963B\u6B62webpack\u9ED8\u8BA4\u5904\u7406\u56FE\u7247\u8D44\u6E90\uFF0C\u53EA\u4F7F\u7528file-loader\u5904\u7406</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u81EA\u5B9A\u4E49style-loader" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49style-loader" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49style-loader</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function-variable function">pitch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">remainingRequest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// remainingRequest \u5269\u4E0B\u8FD8\u9700\u8981\u5904\u7406\u7684loader</span>
    <span class="token comment">// console.log(remainingRequest)</span>
    <span class="token comment">// 1. \u5C06 remainingRequest \u4E2D\u7684\u7EDD\u5BF9\u8DEF\u5F84\u6539\u6210\u76F8\u5BF9\u8DEF\u5F84\uFF08\u56E0\u4E3A\u540E\u9762\u53EA\u80FD\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\uFF09,</span>
    <span class="token comment">// \u7136\u540E\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u76F8\u5BF9\u8DEF\u5F84</span>
    <span class="token keyword">let</span> relativePath <span class="token operator">=</span> remainingRequest<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">absolutePath</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">contextify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">,</span> absolutePath<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;!&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">// console.log(relativePath)</span>

    <span class="token comment">// 2. \u5F15\u5165css-loader\u5904\u7406\u540E\u7684\u8D44\u6E90</span>
    <span class="token comment">// 3. \u521B\u5EFAstyle\uFF0C\u5C06\u5185\u5BB9\u63D2\u5165\u9875\u9762\u4E2D\u519C\u751F\u6548</span>
    <span class="token keyword">const</span> script <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    import style from &#39;!!</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>relativePath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;
    const styleEl = document.createElement(&#39;style&#39;)
    styleEl.innerHTML = style
    document.head.appendChild(styleEl)
    </span><span class="token template-punctuation string">\`</span></span>
    <span class="token comment">// \u7EC8\u6B62\u540E\u9762loader\u6267\u884C</span>
    <span class="token keyword">return</span> script

<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;./loaders/style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5B66\u4E60" tabindex="-1"><a class="header-anchor" href="#\u5B66\u4E60" aria-hidden="true">#</a> \u5B66\u4E60</h2><p>\u53EF\u4EE5\u591A\u5B66\u4E60loader\u7684\u6E90\u7801</p>`,23);function j(w,q){const s=o("ExternalLinkIcon");return c(),l("div",null,[u,i,k,n("ul",null,[n("li",null,[n("a",d,[g,t(s)])])]),m,n("ul",null,[n("li",null,[n("a",y,[h,t(s)])])]),f,n("ul",null,[n("li",null,[n("a",x,[v,t(s)])])]),b])}var N=e(r,[["render",j],["__file","loader.html.vue"]]);export{N as default};
