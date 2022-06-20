import{_ as c,r as e,o as l,c as u,d as a,w as t,a as i,b as n,e as s}from"./app.01bb55c3.js";const r={},k=i(`<h1 id="\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D\u7684\u65B9\u5F0F" aria-hidden="true">#</a> \u6C34\u5E73\u5782\u76F4\u5C45\u4E2D\u7684\u65B9\u5F0F</h1><h2 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="position" tabindex="-1"><a class="header-anchor" href="#position" aria-hidden="true">#</a> position</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="position-transform" tabindex="-1"><a class="header-anchor" href="#position-transform" aria-hidden="true">#</a> position + transform</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>transform\u8FD8\u6709\u5176\u4ED6\u7684\u5C5E\u6027:</p><ol><li>\u8F6C\u6362: translate(x,y)\u3001translateX(x)\u3001translateY(y)\u3001translateZ(z)\u3001translate3d(x,y,z)</li><li>\u7F29\u653E: scale((x,y)\u3001scaleX(x)\u3001scaleY(y)\u3001scaleZ(z)\u3001scale3d((x,y,z)</li><li>\u65CB\u8F6C: rotate(angle)\u3001rotateX(angle)\u3001rotateY(angle)\u3001rotateZ(angle)\u3001rotate3d(x,y,z,angle)</li><li>\u503E\u659C: skew(x-angle,y-angle)\u3001skewX(angle)\u3001skewY(angle)</li><li>\u900F\u89C6: perspective(n)</li></ol></div><h2 id="table-cell" tabindex="-1"><a class="header-anchor" href="#table-cell" aria-hidden="true">#</a> table-cell</h2>`,9),d=n("div",{class:"language-html ext-html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("inner"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),h=n("div",{class:"language-css ext-css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"html, body"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".box"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".content"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table-cell"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),s(" middle"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".inner"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" #000"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" inline-block"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1);function g(y,m){const p=e("CodeGroupItem"),o=e("CodeGroup");return l(),u("div",null,[k,a(o,null,{default:t(()=>[a(p,{title:"html"},{default:t(()=>[d]),_:1}),a(p,{title:"css"},{default:t(()=>[h]),_:1})]),_:1})])}var f=c(r,[["render",g],["__file","center.html.vue"]]);export{f as default};
