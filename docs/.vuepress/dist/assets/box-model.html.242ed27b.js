import{_ as e,r as t,o,c,a,b as i,d as n,e as p}from"./app.43be7e94.js";var l="/blog/assets/boxmodel.f78a8fbc.png";const d={},r=a("h1",{id:"\u76D2\u6A21\u578B",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u76D2\u6A21\u578B","aria-hidden":"true"},"#"),n(" \u76D2\u6A21\u578B")],-1),u=a("h2",{id:"\u6982\u5FF5",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u6982\u5FF5","aria-hidden":"true"},"#"),n(" \u6982\u5FF5")],-1),h={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model",target:"_blank",rel:"noopener noreferrer"},g=n("\u6982\u5FF5"),v=p('<p><img src="'+l+`" alt="\u76D2\u6A21\u578B"></p><ol start="2"><li>\u8BF4\u660E\uFF1A\uFF08\u56DB\u4E2A\u90E8\u5206\uFF09</li></ol><ul><li>\u5185\u5BB9\u8FB9\u754C<code>content</code>\uFF08<code>width</code>\u3001<code>min-width\`\`max-width</code>\u3001<code>height</code>\u3001<code>min-height</code>\u3001<code>max-height</code>\uFF09</li><li>\u5185\u8FB9\u8DDD\u8FB9\u754C<code>padding</code>\uFF08<code>padding-top</code>\u3001<code>padding-right</code>\u3001<code>padding-bottom</code>\u3001<code>padding-left</code>\u3001<code>padding</code>\uFF09</li><li>\u8FB9\u6846\u8FB9\u754C<code>border</code>\uFF08<code>border-width</code>\u3001<code>border</code>\uFF09</li><li>\u5916\u8FB9\u6846\u8FB9\u754C<code>margin</code>\uFF08<code>margin-top</code>\u3001<code>margin-right</code>\u3001<code>margin-bottom</code>\u3001<code>margin-left</code>\u3001<code>margin</code>\uFF09</li></ul><h2 id="\u6807\u51C6\u76D2\u6A21\u578B\u4E0Eie\u6A21\u76D2\u578B" tabindex="-1"><a class="header-anchor" href="#\u6807\u51C6\u76D2\u6A21\u578B\u4E0Eie\u6A21\u76D2\u578B" aria-hidden="true">#</a> \u6807\u51C6\u76D2\u6A21\u578B\u4E0EIE\u6A21\u76D2\u578B</h2><table><thead><tr><th>\u6982\u5FF5</th><th>\u8BBE\u7F6E\u6A21\u578B</th><th>\u8BF4\u660E</th></tr></thead></table><div style="width:80px;">\u6807\u51C6\u76D2\u6A21\u578B</div> | <div style="width:350px;">\`box-sizing: content-box;\`\uFF08\u9ED8\u8BA4\u503C\uFF09</div> <br> width\u548Cheight\u662F\u5BF9**content**\u8BBE\u7F6E | ![\u76D2\u6A21\u578B](./images/content-box.png) IE\u6A21\u578B | \`box-sizing: border-box;\` \u602A\u5F02\u76D2\u6A21\u578B <br> width\u548Cheight\u662F\u5BF9**content+padding+border**\u8BBE\u7F6E | ![\u76D2\u6A21\u578B](./images/border-box.png) <div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>\u5982\u679C\u4E0D\u60F3\u56E0\u4E3A\u6539\u53D8padding\u7684\u65F6\u5019\u76D2\u5B50\u7684\u5927\u5C0F\u4E5F\u4F1A\u8DDF\u7740\u53D8\u5316\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528\u602A\u5F02\u76D2\u6A21\u578B</li><li>\u5982\u679C\u60F3\u8BA9\u76D2\u5B50\u7684\u5927\u5C0F\u88ABpadding\u6491\u5F00\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6807\u51C6\u76D2\u6A21\u578B</li></ol></div><h2 id="js\u5982\u4F55\u8BBE\u7F6E\u83B7\u53D6\u76D2\u6A21\u578B\u5BF9\u5E94\u7684\u5BBD\u548C\u9AD8" tabindex="-1"><a class="header-anchor" href="#js\u5982\u4F55\u8BBE\u7F6E\u83B7\u53D6\u76D2\u6A21\u578B\u5BF9\u5E94\u7684\u5BBD\u548C\u9AD8" aria-hidden="true">#</a> JS\u5982\u4F55\u8BBE\u7F6E\u83B7\u53D6\u76D2\u6A21\u578B\u5BF9\u5E94\u7684\u5BBD\u548C\u9AD8</h2><h3 id="css\u7684\u4E09\u79CD\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#css\u7684\u4E09\u79CD\u5199\u6CD5" aria-hidden="true">#</a> css\u7684\u4E09\u79CD\u5199\u6CD5</h3><p>\u5185\u8054\u6837\u5F0F</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5185\u90E8\u6837\u5F0F</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.content</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5916\u90E8\u6837\u5F0F\u8868</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./css/index.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u76D2\u6A21\u578B\u5BBD\u9AD8\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#\u76D2\u6A21\u578B\u5BBD\u9AD8\u83B7\u53D6" aria-hidden="true">#</a> \u76D2\u6A21\u578B\u5BBD\u9AD8\u83B7\u53D6</h3><p>\u7B2C\u4E00\u79CD\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>dom<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width<span class="token operator">/</span>height 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>\u53EA\u80FD\u83B7\u53D6\u5185\u8054\u6837\u5F0F\u7684\u5BBD\u9AD8\uFF0C\u5185\u90E8\u6837\u5F0F\u548C\u5916\u90E8css\u6837\u5F0F\u8868\u4E2D\u7684\u9AD8\u5BBD\u65E0\u6CD5\u83B7\u53D6</p></div><p>\u7B2C\u4E8C\u79CD\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>dom<span class="token punctuation">.</span>currentStyle<span class="token punctuation">.</span>width<span class="token operator">/</span>height 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>\u9875\u9762\u6E32\u67D3\u5B8C\u6210\u540E\u7684\u7ED3\u679C\uFF0C\u83B7\u53D6\u5373\u65F6\u7684\u8BA1\u7B97\u7684\u6837\u5F0F\uFF0C\u4F46\u662F\u53EA\u6709IE\u652F\u6301</p></div><p>\u7B2C\u4E09\u79CD\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>dom<span class="token punctuation">)</span><span class="token punctuation">.</span>width<span class="token operator">/</span>height
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>\u9875\u9762\u6E32\u67D3\u5B8C\u6210\u540E\u7684\u7ED3\u679C\uFF0C\u83B7\u53D6\u5373\u65F6\u8BA1\u7B97\u7684\u6837\u5F0F\uFF0C\u652F\u6301\u5176\u4ED6\u6D4F\u89C8\u5668\uFF0C\u517C\u5BB9\u6027\u66F4\u597D</p></div><p>\u7B2C\u56DB\u79CD\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>dom<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>width<span class="token operator">/</span>height
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>\u83B7\u5F97\u8FD0\u884C\u540E\u7684\u5C5E\u6027\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u77E9\u5F62\u5BF9\u8C61\uFF0Cleft,top,right,buttom</p></div><p>\u7B2C\u4E94\u79CD\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>dom<span class="token punctuation">.</span>offsetWidth<span class="token operator">/</span>offsetHeight
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>\u8FD4\u56DE\u5143\u7D20\u5B9E\u9645\u5927\u5C0F\uFF0C\u5305\u542B\u8FB9\u6846\uFF0C\u5185\u8FB9\u8DDD\u548C\u6EDA\u52A8\u6761,\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\u4EFB\u4F55CSS\u5BBD\u5EA6\u548C\u9AD8\u5EA6\uFF0C\u4E5F\u4F1A\u5728\u8BA1\u7B97\u540E\u5F97\u5230\u5BBD\u5EA6\u548C\u9AD8\u5EA6</p></div>`,38);function m(k,b){const s=t("ExternalLinkIcon");return o(),c("div",null,[r,u,a("ol",null,[a("li",null,[a("a",h,[g,i(s)])])]),v])}var _=e(d,[["render",m],["__file","box-model.html.vue"]]);export{_ as default};