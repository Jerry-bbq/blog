import{_ as u,r as o,o as i,c as k,a as n,b as a,w as t,d as s,e as l}from"./app.b698a7af.js";const r={},d=n("h1",{id:"css\u52A8\u753B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#css\u52A8\u753B","aria-hidden":"true"},"#"),s(" CSS\u52A8\u753B")],-1),m=n("p",null,[s("\u5173\u952E\u5E27"),n("code",null,"@keyframes")],-1),g={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations",target:"_blank",rel:"noopener noreferrer"},f=s("CSS animations "),_=l(`<h2 id="\u57FA\u672C\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u683C\u5F0F" aria-hidden="true">#</a> \u57FA\u672C\u683C\u5F0F</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> animation-name</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token selector">68%, 72%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.className</span> <span class="token punctuation">{</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> animation-name<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><code>0%/from</code></li><li><code>100%/to</code></li></ul><h2 id="\u914D\u7F6E\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u52A8\u753B" aria-hidden="true">#</a> \u914D\u7F6E\u52A8\u753B</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>animation-name</td><td>\u5173\u952E\u5E27\u540D\u79F0</td><td>none</td></tr><tr><td>animation-duration</td><td>\u52A8\u753B\u4E00\u4E2A\u5468\u671F\u7684\u65F6\u957F</td><td>0s</td></tr><tr><td>animation-delay</td><td>\u8BBE\u7F6E\u5EF6\u65F6\uFF0C\u5373\u4ECE\u5143\u7D20\u52A0\u8F7D\u5B8C\u6210\u4E4B\u540E\u5230\u52A8\u753B\u5E8F\u5217\u5F00\u59CB\u6267\u884C\u7684\u8FD9\u6BB5\u65F6\u95F4</td><td>0s</td></tr><tr><td>animation-direction</td><td>\u8BBE\u7F6E\u52A8\u753B\u5728\u6BCF\u6B21\u8FD0\u884C\u5B8C\u540E\u662F\u53CD\u5411\u8FD0\u884C\u8FD8\u662F\u91CD\u65B0\u56DE\u5230\u5F00\u59CB\u4F4D\u7F6E\u91CD\u590D\u8FD0\u884C</td><td>normal</td></tr><tr><td>animation-iteration-count</td><td>\u8BBE\u7F6E\u52A8\u753B\u91CD\u590D\u6B21\u6570\uFF0C\u53EF\u4EE5\u6307\u5B9A infinite \u65E0\u9650\u6B21\u91CD\u590D\u52A8\u753B</td><td>1</td></tr><tr><td>animation-play-state</td><td>\u5141\u8BB8\u6682\u505C\u548C\u6062\u590D\u52A8\u753B</td><td>running</td></tr><tr><td>animation-timing-function</td><td>\u8BBE\u7F6E\u52A8\u753B\u901F\u5EA6\uFF0C\u5373\u901A\u8FC7\u5EFA\u7ACB\u52A0\u901F\u5EA6\u66F2\u7EBF\uFF0C\u8BBE\u7F6E\u52A8\u753B\u5728\u5173\u952E\u5E27\u4E4B\u95F4\u662F\u5982\u4F55\u53D8\u5316</td><td>ease</td></tr><tr><td>animation-fill-mode</td><td>\u6307\u5B9A\u52A8\u753B\u6267\u884C\u524D\u540E\u5982\u4F55\u4E3A\u76EE\u6807\u5143\u7D20\u5E94\u7528\u6837\u5F0F</td><td>none</td></tr></tbody></table><p>\u7B80\u5199\u65B9\u5F0F</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.className</span> <span class="token punctuation">{</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> animation-name duration delay direction iteration-count play-state timing-function fill-mode<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h2>`,8),h=s("\u53C2\u8003"),y={href:"https://github.com/animate-css/animate.css",target:"_blank",rel:"noopener noreferrer"},x=s("animate.css"),b=n("h3",{id:"fadein",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#fadein","aria-hidden":"true"},"#"),s(" fadeIn")],-1),I=n("div",{class:"language-css ext-css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".box"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 300px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 300px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid #000"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".item"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid #000"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@keyframes"),s(" fade-in")]),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token selector"},"from"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token selector"},"to"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),s(" 1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".fadeIn"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"animation-name"),n("span",{class:"token punctuation"},":"),s(" fade-in"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"animation-duration"),n("span",{class:"token punctuation"},":"),s(" 10s"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),v=n("div",{class:"language-html ext-html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token doctype"},[n("span",{class:"token punctuation"},"<!"),n("span",{class:"token doctype-tag"},"DOCTYPE"),s(),n("span",{class:"token name"},"html"),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("html")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("en"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("head")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("meta")]),s(),n("span",{class:"token attr-name"},"charset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("UTF-8"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("meta")]),s(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("viewport"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("width=device-width, initial-scale=1.0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("title")]),n("span",{class:"token punctuation"},">")]),s("Document"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("title")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("./animation.css"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("head")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("body")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fadeIn item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("body")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("html")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),O=l(`<h3 id="fadeinleft" tabindex="-1"><a class="header-anchor" href="#fadeinleft" aria-hidden="true">#</a> fadeInLeft</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> fade-in-left</span> <span class="token punctuation">{</span>
    <span class="token selector">from</span> <span class="token punctuation">{</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>-100%<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">to</span> <span class="token punctuation">{</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.fadeInLeft</span> <span class="token punctuation">{</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> fade-in-left<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="slideinleft" tabindex="-1"><a class="header-anchor" href="#slideinleft" aria-hidden="true">#</a> slideInLeft</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> slideInLeft</span> <span class="token punctuation">{</span>
    <span class="token selector">from</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>-100%<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">visibility</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">to</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.slideInLeft</span> <span class="token punctuation">{</span>
    <span class="token comment">/* animation-name: slideInLeft;
    animation-duration: 1s; */</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> slideInLeft 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="rotatein" tabindex="-1"><a class="header-anchor" href="#rotatein" aria-hidden="true">#</a> rotateIn</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> rotateIn</span> <span class="token punctuation">{</span>
    <span class="token selector">from</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate3d</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 1<span class="token punctuation">,</span> -200deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">to</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.rotateIn</span> <span class="token punctuation">{</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> rotateIn<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="animate-css\u5E93\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#animate-css\u5E93\u5206\u6790" aria-hidden="true">#</a> animate.css\u5E93\u5206\u6790</h2>`,7),L=n("div",{class:"language-css ext-css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'_vars.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'_base.css'"),n("span",{class:"token punctuation"},";")]),s(`

`),n("span",{class:"token comment"},"/* Attention seekers  */"),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'attention_seekers/bounce.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'attention_seekers/flash.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'attention_seekers/pulse.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'attention_seekers/rubberBand.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'attention_seekers/shakeX.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'attention_seekers/shakeY.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'attention_seekers/headShake.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'attention_seekers/swing.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'attention_seekers/tada.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'attention_seekers/wobble.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'attention_seekers/jello.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'attention_seekers/heartBeat.css'"),n("span",{class:"token punctuation"},";")]),s(`

`),n("span",{class:"token comment"},"/* Back entrances */"),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'back_entrances/backInDown.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'back_entrances/backInLeft.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'back_entrances/backInRight.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'back_entrances/backInUp.css'"),n("span",{class:"token punctuation"},";")]),s(`

`),n("span",{class:"token comment"},"/* Back exits */"),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'back_exits/backOutDown.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'back_exits/backOutLeft.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'back_exits/backOutRight.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'back_exits/backOutUp.css'"),n("span",{class:"token punctuation"},";")]),s(`

`),n("span",{class:"token comment"},"/* Bouncing entrances  */"),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'bouncing_entrances/bounceIn.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'bouncing_entrances/bounceInDown.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'bouncing_entrances/bounceInLeft.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'bouncing_entrances/bounceInRight.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'bouncing_entrances/bounceInUp.css'"),n("span",{class:"token punctuation"},";")]),s(`

`),n("span",{class:"token comment"},"/* Bouncing exits  */"),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'bouncing_exits/bounceOut.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'bouncing_exits/bounceOutDown.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'bouncing_exits/bounceOutLeft.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'bouncing_exits/bounceOutRight.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'bouncing_exits/bounceOutUp.css'"),n("span",{class:"token punctuation"},";")]),s(`

`),n("span",{class:"token comment"},"/* Fading entrances  */"),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_entrances/fadeIn.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_entrances/fadeInDown.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_entrances/fadeInDownBig.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_entrances/fadeInLeft.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_entrances/fadeInLeftBig.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_entrances/fadeInRight.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_entrances/fadeInRightBig.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_entrances/fadeInUp.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_entrances/fadeInUpBig.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_entrances/fadeInTopLeft.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_entrances/fadeInTopRight.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_entrances/fadeInBottomLeft.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_entrances/fadeInBottomRight.css'"),n("span",{class:"token punctuation"},";")]),s(`

`),n("span",{class:"token comment"},"/* Fading exits */"),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_exits/fadeOut.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_exits/fadeOutDown.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_exits/fadeOutDownBig.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_exits/fadeOutLeft.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_exits/fadeOutLeftBig.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_exits/fadeOutRight.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_exits/fadeOutRightBig.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_exits/fadeOutUp.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_exits/fadeOutUpBig.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_exits/fadeOutTopLeft.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_exits/fadeOutTopRight.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_exits/fadeOutBottomRight.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'fading_exits/fadeOutBottomLeft.css'"),n("span",{class:"token punctuation"},";")]),s(`

`),n("span",{class:"token comment"},"/* Flippers */"),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'flippers/flip.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'flippers/flipInX.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'flippers/flipInY.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'flippers/flipOutX.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'flippers/flipOutY.css'"),n("span",{class:"token punctuation"},";")]),s(`

`),n("span",{class:"token comment"},"/* Lightspeed */"),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'lightspeed/lightSpeedInRight.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'lightspeed/lightSpeedInLeft.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'lightspeed/lightSpeedOutRight.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'lightspeed/lightSpeedOutLeft.css'"),n("span",{class:"token punctuation"},";")]),s(`

`),n("span",{class:"token comment"},"/* Rotating entrances */"),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'rotating_entrances/rotateIn.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'rotating_entrances/rotateInDownLeft.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'rotating_entrances/rotateInDownRight.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'rotating_entrances/rotateInUpLeft.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'rotating_entrances/rotateInUpRight.css'"),n("span",{class:"token punctuation"},";")]),s(`

`),n("span",{class:"token comment"},"/* Rotating exits */"),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'rotating_exits/rotateOut.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'rotating_exits/rotateOutDownLeft.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'rotating_exits/rotateOutDownRight.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'rotating_exits/rotateOutUpLeft.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'rotating_exits/rotateOutUpRight.css'"),n("span",{class:"token punctuation"},";")]),s(`

`),n("span",{class:"token comment"},"/* Specials */"),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'specials/hinge.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'specials/jackInTheBox.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'specials/rollIn.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'specials/rollOut.css'"),n("span",{class:"token punctuation"},";")]),s(`

`),n("span",{class:"token comment"},"/* Zooming entrances */"),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'zooming_entrances/zoomIn.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'zooming_entrances/zoomInDown.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'zooming_entrances/zoomInLeft.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'zooming_entrances/zoomInRight.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'zooming_entrances/zoomInUp.css'"),n("span",{class:"token punctuation"},";")]),s(`

`),n("span",{class:"token comment"},"/* Zooming exits */"),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'zooming_exits/zoomOut.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'zooming_exits/zoomOutDown.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'zooming_exits/zoomOutLeft.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'zooming_exits/zoomOutRight.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'zooming_exits/zoomOutUp.css'"),n("span",{class:"token punctuation"},";")]),s(`

`),n("span",{class:"token comment"},"/* Sliding entrances */"),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'sliding_entrances/slideInDown.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'sliding_entrances/slideInLeft.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'sliding_entrances/slideInRight.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'sliding_entrances/slideInUp.css'"),n("span",{class:"token punctuation"},";")]),s(`

`),n("span",{class:"token comment"},"/* Sliding exits */"),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'sliding_exits/slideOutDown.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'sliding_exits/slideOutLeft.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'sliding_exits/slideOutRight.css'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@import"),s(),n("span",{class:"token string"},"'sliding_exits/slideOutUp.css'"),n("span",{class:"token punctuation"},";")]),s(`
`)])])],-1),w=n("div",{class:"language-css ext-css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},":root"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"--animate-duration"),n("span",{class:"token punctuation"},":"),s(" 1s"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--animate-delay"),n("span",{class:"token punctuation"},":"),s(" 1s"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--animate-repeat"),n("span",{class:"token punctuation"},":"),s(" 1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),R=n("div",{class:"language-css ext-css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".animated"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"animation-duration"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--animate-duration"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"animation-fill-mode"),n("span",{class:"token punctuation"},":"),s(" both"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".animated.infinite"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"animation-iteration-count"),n("span",{class:"token punctuation"},":"),s(" infinite"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".animated.repeat-1"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"animation-iteration-count"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--animate-repeat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".animated.repeat-2"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"animation-iteration-count"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"calc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--animate-repeat"),n("span",{class:"token punctuation"},")"),s(" * 2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".animated.repeat-3"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"animation-iteration-count"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"calc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--animate-repeat"),n("span",{class:"token punctuation"},")"),s(" * 3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".animated.delay-1s"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"animation-delay"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--animate-delay"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".animated.delay-2s"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"animation-delay"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"calc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--animate-delay"),n("span",{class:"token punctuation"},")"),s(" * 2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".animated.delay-3s"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"animation-delay"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"calc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--animate-delay"),n("span",{class:"token punctuation"},")"),s(" * 3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".animated.delay-4s"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"animation-delay"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"calc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--animate-delay"),n("span",{class:"token punctuation"},")"),s(" * 4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".animated.delay-5s"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"animation-delay"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"calc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--animate-delay"),n("span",{class:"token punctuation"},")"),s(" * 5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".animated.faster"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"animation-duration"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"calc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--animate-duration"),n("span",{class:"token punctuation"},")"),s(" / 2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".animated.fast"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"animation-duration"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"calc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--animate-duration"),n("span",{class:"token punctuation"},")"),s(" * 0.8"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".animated.slow"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"animation-duration"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"calc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--animate-duration"),n("span",{class:"token punctuation"},")"),s(" * 2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".animated.slower"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"animation-duration"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"calc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--animate-duration"),n("span",{class:"token punctuation"},")"),s(" * 3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@media"),s(" print"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token property"},"prefers-reduced-motion"),n("span",{class:"token punctuation"},":"),s(" reduce"),n("span",{class:"token punctuation"},")")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token selector"},".animated"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"animation-duration"),n("span",{class:"token punctuation"},":"),s(" 1ms "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"transition-duration"),n("span",{class:"token punctuation"},":"),s(" 1ms "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"animation-iteration-count"),n("span",{class:"token punctuation"},":"),s(" 1 "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token selector"},".animated[class*='Out']"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1);function z(B,S){const p=o("ExternalLinkIcon"),e=o("CodeGroupItem"),c=o("CodeGroup");return i(),k("div",null,[d,m,n("ul",null,[n("li",null,[n("a",g,[f,a(p)])])]),_,n("ul",null,[n("li",null,[h,n("a",y,[x,a(p)])])]),b,a(c,null,{default:t(()=>[a(e,{title:"css"},{default:t(()=>[I]),_:1}),a(e,{title:"html"},{default:t(()=>[v]),_:1})]),_:1}),O,a(c,null,{default:t(()=>[a(e,{title:"\u5165\u53E3\u6587\u4EF6_animations.css"},{default:t(()=>[L]),_:1}),a(e,{title:"\u53D8\u91CF\u6587\u4EF6_vars.css"},{default:t(()=>[w]),_:1}),a(e,{title:"\u57FA\u7840\u6587\u4EF6_base.css"},{default:t(()=>[R]),_:1})]),_:1})])}var U=u(r,[["render",z],["__file","animation.html.vue"]]);export{U as default};
