import{_ as n,o as s,c as a,e as p}from"./app.515d390f.js";const t={},e=p(`<h1 id="webpack5" tabindex="-1"><a class="header-anchor" href="#webpack5" aria-hidden="true">#</a> Webpack5</h1><div class="language-javascript ext-js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// const { CleanWebpackPlugin } = require(&#39;clean-webpack-plugin&#39;)</span>
<span class="token comment">// const CopyWebpackPlugin = require(&#39;copy-webpack-plugin&#39;)</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// entry: &#39;./src/main.js&#39;, // \u9ED8\u8BA4\u662Findex.js</span>

    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u591A\u9875\u5E94\u7528\u7684\u8DEF\u53E3\u914D\u7F6E</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">other</span><span class="token operator">:</span> <span class="token string">&#39;./src/other.js&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// path.resolve():\u628A\u5F53\u524D\u76F8\u5BF9\u8DEF\u5F84\u89E3\u6790\u6210\u7EDD\u5BF9\u8DEF\u5F84</span>
        <span class="token comment">// path.join(__dirname, &#39;./dist/&#39;):\u62FC\u63A5\u8DEF\u5F84</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;./dist/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// filename: &#39;bundle.js&#39;</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span> <span class="token comment">// \u914D\u5408\u591A\u9875\u5E94\u7528\u6253\u5305\uFF0C\u8F93\u51FA\u6587\u4EF6\u4E5F\u9700\u8981\u5BF9\u5E94\u591A\u4E2A\uFF0C\u6240\u4EE5\u8981\u7528\u53D8\u91CF\u52A8\u6001\u751F\u6210</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// watch: true, // \u5F00\u542F\u76D1\u89C6\u6A21\u5F0F</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span> <span class="token comment">// production\u4F1A\u662F\u9ED8\u8BA4\u503C\uFF0C\u4F1A\u8FDB\u884C\u538B\u7F29</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// contentBase: &#39;./src&#39;,</span>
        <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// chunks\u6570\u7EC4\u91CC\u9762\u7684\u540D\u5B57\u5BF9\u5E94\u7684\u662Fentry\u4E2D\u7684\u540D\u5B57</span>
            <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;other&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;other.html&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/other.html&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;other&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// new CleanWebpackPlugin(),</span>
        <span class="token comment">// new CopyWebpackPlugin([</span>
        <span class="token comment">//   {</span>
        <span class="token comment">//     from: path.join(__dirname, &#39;assets&#39;),</span>
        <span class="token comment">//     to: &#39;assets&#39;</span>
        <span class="token comment">//   }</span>
        <span class="token comment">// ]),</span>
        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>BannerPlugin</span><span class="token punctuation">(</span><span class="token string">&#39;\u6B27\u9633\u6CFD\u5B87&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ProvidePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">$</span><span class="token operator">:</span> <span class="token string">&#39;jquery&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">jquery</span><span class="token operator">:</span> <span class="token string">&#39;jquery&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token comment">// webpack\u8BFB\u53D6loader\u65F6\u662F\u4ECE\u53F3\u5230\u5DE6\uFF0C\u6216\u8005\u662F\u4ECE\u4E0B\u5F80\u4E0A</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s(a|c)ss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// url-loader\u662F\u4F9D\u8D56file-loader\u7684\uFF0C\u56E0\u4E3A\u4ED6\u5BF9file-loader\u8FDB\u884C\u4E86\u5C01\u88C5\uFF0C\u53EF\u4EE5\u8FDB\u884C\u66F4\u7EC6\u81F4\u7684\u914D\u7F6E\u4F18\u5316</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(jpg|png|bmp|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token comment">// \u56FE\u7247\u5C0F\u4E8E5kb\u5C31\u4E13\u6210base64\u683C\u5F0F\u7684\uFF0C\u5927\u4E8E5kb\u5C31\u4EE5\u8DEF\u5F84\u7684\u5F62\u5F0F\u5C55\u793A</span>
                        <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
                        <span class="token comment">// \u6307\u5B9A\u56FE\u7247\u7684\u8F93\u51FA\u76EE\u5F55</span>
                        <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;images&#39;</span><span class="token punctuation">,</span>
                        <span class="token comment">// \u81EA\u5B9A\u4E49\u56FE\u7247\u7684\u540D\u5B57</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[name]-[hash:4].[ext]&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(woff|woff2|eot|svg|ttf)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
                    <span class="token comment">// \u4E0B\u9762\u7684\u914D\u7F6E\u90FD\u53EF\u4EE5\u72EC\u7ACB\u62BD\u79BB\u5230.babelrc\u6587\u4EF6\u4E2D\uFF0C\u5B98\u65B9\u4E5F\u63A8\u8350\u8FD9\u4E48\u505A</span>
                    <span class="token comment">// options: {</span>
                    <span class="token comment">//   presets: [&#39;@babel/env&#39;],</span>
                    <span class="token comment">//   plugins: [</span>
                    <span class="token comment">//     &#39;@babel/plugin-transform-runtime&#39;</span>
                    <span class="token comment">//   ]</span>
                    <span class="token comment">// }</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// {</span>
            <span class="token comment">//   test: /\\.(htm|html)$/i,</span>
            <span class="token comment">//   loader: &#39;html-withimg-loader&#39;</span>
            <span class="token comment">// }</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// \u89E3\u6790jqeury\u7684\u7EDD\u5BF9\u8DEF\u5F84</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;jquery&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;expose-loader&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token string">&#39;$&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// source map</span>
    <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&#39;cheap-module-eval-source-map&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,2),o=[e];function c(l,r){return s(),a("div",null,o)}var u=n(t,[["render",c],["__file","v5.html.vue"]]);export{u as default};
