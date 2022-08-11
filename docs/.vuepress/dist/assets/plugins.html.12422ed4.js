import{_ as n,o as s,c as a,d as t}from"./app.7cdcc8a6.js";const p={},o=t(`<h1 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin" aria-hidden="true">#</a> plugin</h1><h2 id="plugin\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#plugin\u7684\u4F5C\u7528" aria-hidden="true">#</a> plugin\u7684\u4F5C\u7528</h2><p>\u901A\u8FC7\u63D2\u4EF6\u6211\u4EEC\u53EF\u4EE5\u6269\u5C55webpack\uFF0C\u52A0\u5165\u81EA\u5B9A\u4E49\u7684\u6784\u5EFA\u884C\u4E3A\uFF0C\u4F7Fwebpack\u53EF\u4EE5\u6267\u884C\u66F4\u5E7F\u6CDB\u7684\u4EFB\u52A1\uFF0C\u62E5\u6709\u66F4\u5F3A\u7684\u989D\u6784\u5EFA\u80FD\u529B</p><h2 id="plugin\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#plugin\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> plugin\u5DE5\u4F5C\u539F\u7406</h2><p>webpack\u5728\u7F16\u8BD1\u4EE3\u7801\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u89E6\u53D1\u4E00\u7CFB\u5217<code>Tapable</code>\u7684\u94A9\u5B50\u4E8B\u4EF6\uFF0C\u63D2\u4EF6\u6240\u505A\u7684\uFF0C\u5C31\u662F\u627E\u5230\u5BF9\u5E94\u7684\u94A9\u5B50\uFF0C\u5728\u4E0A\u9762\u6302\u4E0A\u81EA\u5DF1\u7684\u4EFB\u52A1\uFF0C\u4E5F\u5C31\u662F\u6CE8\u518C\u4E8B\u4EF6\uFF0C\u8FD9\u6837\uFF0C\u5F53webpack\u6784\u5EFA\u7684\u65F6\u5019\uFF0C\u63D2\u4EF6\u6CE8\u518C\u7684\u4E8B\u4EF6\u5C31\u4F1A\u968F\u7740\u94A9\u5B50\u7684\u89E6\u53D1\u800C\u6267\u884C</p><h2 id="\u5982\u4F55\u6CE8\u518C\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u6CE8\u518C\u94A9\u5B50" aria-hidden="true">#</a> \u5982\u4F55\u6CE8\u518C\u94A9\u5B50</h2><ul><li>tap\uFF1A\u53EF\u4EE5\u6CE8\u518C\u540C\u6B65\u548C\u5F02\u6B65\u94A9\u5B50</li><li>tapAsync\uFF1A\u56DE\u8C03\u65B9\u5F0F\u6CE8\u518C\u5F02\u6B65\u94A9\u5B50</li><li>tapPromise\uFF1APromise\u65B9\u5F0F\u6CE8\u518C\u5F02\u6B65\u94A9\u5B50</li></ul><h2 id="\u7B2C\u4E00\u4E2Aplugin" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u4E2Aplugin" aria-hidden="true">#</a> \u7B2C\u4E00\u4E2Aplugin</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 1. webpack\u52A0\u8F7Dwebpack.config.js\u4E2D\u6240\u6709\u914D\u7F6E\uFF0C\u6B64\u65F6\u5C31\u4F1Anew TestPlugin()\uFF0C\u6267\u884C\u63D2\u4EF6\u7684constructor
 * 2. webpack\u521B\u5EFA compiler \u5BF9\u8C61
 * 3. \u904D\u5386\u6240\u6709 plugins \u4E2D\u63D2\u4EF6\uFF0C\u8C03\u7528\u63D2\u4EF6\u7684apply\u65B9\u6CD5
 * 4. \u6267\u884C\u5269\u4E0B\u7F16\u8BD1\u6D41\u7A0B\uFF08\u89E6\u53D1\u5404\u4E2Ahooks\u4E8B\u4EF6\uFF09
 */</span>
<span class="token keyword">class</span> <span class="token class-name">TestPlugin</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;TestPlugin constructor&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;TestPlugin apply&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> TestPlugin
</code></pre></div><h2 id="\u6CE8\u518Chooks\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518Chooks\u4E8B\u4EF6" aria-hidden="true">#</a> \u6CE8\u518Chooks\u4E8B\u4EF6</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 1. webpack\u52A0\u8F7Dwebpack.config.js\u4E2D\u6240\u6709\u914D\u7F6E\uFF0C\u6B64\u65F6\u5C31\u4F1Anew TestPlugin()\uFF0C\u6267\u884C\u63D2\u4EF6\u7684constructor
 * 2. webpack\u521B\u5EFA compiler \u5BF9\u8C61
 * 3. \u904D\u5386\u6240\u6709 plugins \u4E2D\u63D2\u4EF6\uFF0C\u8C03\u7528\u63D2\u4EF6\u7684apply\u65B9\u6CD5
 * 4. \u6267\u884C\u5269\u4E0B\u7F16\u8BD1\u6D41\u7A0B\uFF08\u89E6\u53D1\u5404\u4E2Ahooks\u4E8B\u4EF6\uFF09
 */</span>
<span class="token keyword">class</span> <span class="token class-name">TestPlugin</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;TestPlugin constructor&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;TestPlugin apply&#39;</span><span class="token punctuation">)</span>

        <span class="token comment">// \u7531\u6587\u6863\u53EF\u77E5\uFF0Cenvironment \u662F\u540C\u6B65\u94A9\u5B50\uFF0C\u6240\u4EE5\u9700\u8981\u4F7F\u7528tap\u6CE8\u518C</span>
        compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>environment<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;TestPlugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;TestPlugin environment&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment">// emit \u662F\u5F02\u6B65\u4E32\u884C\u94A9\u5B50</span>
        compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;TestPlugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;TestPlugin emit 111&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">&#39;TestPlugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;TestPlugin emit 222&#39;</span><span class="token punctuation">)</span>
                <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tapPromise</span><span class="token punctuation">(</span><span class="token string">&#39;TestPlugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;TestPlugin emit 333&#39;</span><span class="token punctuation">)</span>
                    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment">// make\u662F\u5F02\u6B65\u5E76\u884C\u94A9\u5B50</span>
        compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>make<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">&#39;TestPlugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;TestPlugin make 222&#39;</span><span class="token punctuation">)</span>
                <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> TestPlugin
</code></pre></div><h2 id="compiler\u548Ccompilation\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#compiler\u548Ccompilation\u5BF9\u8C61" aria-hidden="true">#</a> compiler\u548Ccompilation\u5BF9\u8C61</h2><p>\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u6765\u8C03\u8BD5\u67E5\u770B</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">node</span> --inspect-brc ./node_modules/webpack-cli/bin/cli.js
</code></pre></div><p>\u6587\u4EF6\u4E2D\u6253\u65AD\u70B9<code>debugger</code></p><h2 id="\u81EA\u5B9A\u4E49bannerwebpackplugin" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49bannerwebpackplugin" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49BannerWebpackPlugin</h2><p>\u601D\u8DEF\uFF1A</p><ul><li>\u9700\u8981\u5728\u6253\u5305\u8F93\u51FA\u524D\uFF0C\u6DFB\u52A0\u6CE8\u91CA\uFF0C\u9700\u8981\u4F7F\u7528<code>compiler.hooks.emit</code>\u94A9\u5B50\uFF0C\u5B83\u662F\u6253\u5305\u8F93\u51FA\u524D\u89E6\u53D1\u7684</li><li>\u5982\u4F55\u83B7\u53D6\u6253\u5305\u8F93\u51FA\u7684\u8D44\u6E90\uFF0C<code>compilation.assets</code>\u53EF\u4EE5\u83B7\u53D6\u6240\u6709\u5373\u5C06\u8F93\u51FA\u7684\u8D44\u6E90\u6587\u4EF6</li></ul><p>\u5B9E\u73B0\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">BannerWebpackPlugin</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options
    <span class="token punctuation">}</span>
    <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// debugger</span>
        <span class="token comment">// \u9700\u8981\u5904\u7406\u7684\u6587\u4EF6</span>
        <span class="token keyword">const</span> extensions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css&#39;</span><span class="token punctuation">]</span>
        <span class="token comment">// emit\u662F\u5F02\u6B65\u4E32\u884C\u94A9\u5B50</span>
        compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;BannerWebpackPlugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// 1. compilation.assets\u5305\u542B\u6240\u4EE5\u5373\u5C06\u8F93\u51FA\u7684\u8D44\u6E90</span>
            <span class="token comment">// 2. \u901A\u8FC7\u8FC7\u6EE4\u53EA\u4FDD\u7559\u9700\u8981\u5904\u7406\u7684js\u548Ccss\u8D44\u6E90</span>
            <span class="token keyword">const</span> assets <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>compilation<span class="token punctuation">.</span>assets<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">path</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> splitted <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> extensions<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>splitted<span class="token punctuation">[</span>splitted<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>

            <span class="token keyword">const</span> prefix <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/*
* Author </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>author<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
*/</span><span class="token template-punctuation string">\`</span></span>

            <span class="token comment">// 3. \u904D\u5386\u5269\u4E0B\u8D44\u6E90\u6DFB\u52A0\u6CE8\u91CA</span>
            assets<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">asset</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u83B7\u53D6\u539F\u6765\u5185\u5BB9</span>
                <span class="token keyword">const</span> source <span class="token operator">=</span> compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span>asset<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// \u62FC\u63A5\u4E0A\u6CE8\u91CA</span>
                <span class="token keyword">const</span> content<span class="token operator">=</span> prefix <span class="token operator">+</span> source
                <span class="token comment">// \u4FEE\u6539\u8D44\u6E90</span>
                compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span>asset<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
                    <span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> content
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> content<span class="token punctuation">.</span>length
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> BannerWebpackPlugin
</code></pre></div><h2 id="\u81EA\u5B9A\u4E49cleanwebpackplugin" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49cleanwebpackplugin" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49CleanWebpackPlugin</h2><p>\u601D\u8DEF\uFF1A</p><ul><li>\u5982\u4F55\u5728\u6253\u5305\u8F93\u51FA\u524D\u6267\u884C\uFF1F\u9700\u8981\u4F7F\u7528<code>compiler.hooks.emit</code>\u94A9\u5B50\uFF0C\u5B83\u662F\u6253\u5305\u8F93\u51FA\u524D\u89E6\u53D1\u7684</li><li>\u5982\u4F55\u6E05\u7A7A\u4E0A\u6B21\u6253\u5305\u5185\u5BB9\uFF1F <ul><li>\u83B7\u53D6\u6253\u5305\u8F93\u51FA\u76EE\u5F55\uFF0C\u901A\u8FC7<code>compiler</code>\u5BF9\u8C61</li><li>\u901A\u8FC7\u6587\u4EF6\u64CD\u4F5C\u6E05\u7A7A\u5185\u5BB9\uFF1A\u901A\u8FC7<code>compiler.outputFileSystem</code>\u64CD\u4F5C\u6587\u4EF6</li></ul></li></ul><p>\u5B9E\u73B0\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CleanWebpackPlugin</span> <span class="token punctuation">{</span>
    <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u83B7\u53D6\u64CD\u4F5C\u5BF9\u8C61</span>
        <span class="token keyword">const</span> fs <span class="token operator">=</span> compiler<span class="token punctuation">.</span>outputFileSystem
        <span class="token comment">// \u83B7\u53D6\u8F93\u51FA\u6587\u4EF6\u76EE\u5F55</span>
        <span class="token keyword">const</span> outputPath <span class="token operator">=</span> compiler<span class="token punctuation">.</span>options<span class="token punctuation">.</span>output<span class="token punctuation">.</span>path
        <span class="token comment">// emit\u662F\u5F02\u6B65\u4E32\u884C\u94A9\u5B50</span>
        compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;CleanWebpackPlugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5220\u9664\u76EE\u5F55\u6240\u6709\u6587\u4EF6</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeFiles</span><span class="token punctuation">(</span>fs<span class="token punctuation">,</span> outputPath<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">removeFiles</span><span class="token punctuation">(</span><span class="token parameter">fs<span class="token punctuation">,</span> filePath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8BFB\u53D6\u5F53\u524D\u76EE\u5F55\u4E0B\u6240\u6709\u6587\u4EF6</span>
        <span class="token keyword">const</span> files <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span>
        <span class="token comment">// \u904D\u5386\u6587\u4EF6\uFF0C\u5220\u9664</span>
        files<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">file</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5224\u65AD\u662F\u6587\u4EF6\u5939\u8FD8\u662F\u6587\u4EF6</span>
            <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>filePath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>file<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
            <span class="token keyword">const</span> fileStat <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">statSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>fileStat<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u6587\u4EF6\u5939</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeFiles</span><span class="token punctuation">(</span>fs<span class="token punctuation">,</span> path<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u6587\u4EF6</span>
                fs<span class="token punctuation">.</span><span class="token function">unlinkSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> CleanWebpackPlugin
</code></pre></div>`,25),c=[o];function e(u,l){return s(),a("div",null,c)}var k=n(p,[["render",e],["__file","plugins.html.vue"]]);export{k as default};
