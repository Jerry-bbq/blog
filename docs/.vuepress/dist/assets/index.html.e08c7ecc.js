import{_ as s,o as n,c as a,e as t}from"./app.d10a1e38.js";const o={},p=t(`<h1 id="vscode\u5E38\u7528\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#vscode\u5E38\u7528\u63D2\u4EF6" aria-hidden="true">#</a> vscode\u5E38\u7528\u63D2\u4EF6</h1><h2 id="prettier\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#prettier\u914D\u7F6E" aria-hidden="true">#</a> Prettier\u914D\u7F6E</h2><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
    <span class="token property">&quot;files.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;*.cjson&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsonc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;*.wxss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;*.wxs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;emmet.includeLanguages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;wxml&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minapp-vscode.disableAutoConfig&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[html]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.html-language-features&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[vue]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[jsonc]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.json-language-features&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[typescript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">/** -------- prettier\u7684\u914D\u7F6E start -------- **/</span>
    <span class="token property">&quot;prettier.printWidth&quot;</span><span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token comment">// \u8D85\u8FC7\u6700\u5927\u503C\u6362\u884C</span>
    <span class="token property">&quot;prettier.tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// \u7F29\u8FDB\u5B57\u8282\u6570</span>
    <span class="token property">&quot;prettier.semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u53E5\u5C3E\u6DFB\u52A0\u5206\u53F7</span>
    <span class="token property">&quot;prettier.singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u4F7F\u7528\u5355\u5F15\u53F7\u4EE3\u66FF\u53CC\u5F15\u53F7</span>
    <span class="token property">&quot;prettier.arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avoid&quot;</span><span class="token punctuation">,</span> <span class="token comment">//  (x) =&gt; {} \u7BAD\u5934\u51FD\u6570\u53C2\u6570\u53EA\u6709\u4E00\u4E2A\u65F6\u662F\u5426\u8981\u6709\u5C0F\u62EC\u53F7\u3002avoid\uFF1A\u7701\u7565\u62EC\u53F7</span>

    <span class="token property">&quot;prettier.jsxSingleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;javascript.updateImportsOnFileMove.enabled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;prettier.resolveGlobalModules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[json]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.json-language-features&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[scss]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u5728jsx\u4E2D\u4F7F\u7528\u5355\u5F15\u53F7\u4EE3\u66FF\u53CC\u5F15\u53F7</span>
    <span class="token comment">/** -------- prettier\u7684\u914D\u7F6E end --------**/</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5E38\u7528\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u63D2\u4EF6" aria-hidden="true">#</a> \u5E38\u7528\u63D2\u4EF6</h2><ul><li><code>Svg Preview</code> svg\u9884\u89C8</li><li>prettier \u4EE3\u7801\u683C\u5F0F\u5316</li><li>GitLens \u2014 Git supercharged</li><li>Chinese (Simplified) (\u7B80\u4F53\u4E2D\u6587) Language Pack for Visual Studio Code</li><li>JS JSX Snippets</li><li>React-Native/React/Redux snippets for es6/es7</li><li><code>vscode-pigments</code>\uFF1A\u5B9E\u65F6\u9884\u89C8\u8BBE\u7F6E\u7684\u989C\u8272</li><li><code>Template String Converte</code>\uFF1A \u5728\u5B57\u7B26\u4E32\u4E2D\u8F93\u5165$\u89E6\u53D1\uFF0C\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u6A21\u677F\u5B57\u7B26\u4E32</li><li><code>View In Browser</code>\uFF1A \u53F3\u952E\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u6587\u4EF6</li><li><code>Vetur</code>\uFF1A\u5F00\u53D1vue\u5FC5\u5907</li><li><code>Vue 3 Snippets</code></li><li><code>\u522B\u540D\u8DEF\u5F84\u8DF3\u8F6C</code>\uFF1A\u522B\u540D\u8DEF\u5F84\u8DF3\u8F6C\u63D2\u4EF6\uFF0C\u652F\u6301\u4EFB\u4F55\u9879\u76EE\uFF0C</li></ul>`,5),e=[p];function r(c,u){return n(),a("div",null,e)}var i=s(o,[["render",r],["__file","index.html.vue"]]);export{i as default};
