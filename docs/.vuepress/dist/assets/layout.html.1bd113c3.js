import{_ as n,o as s,c as a,e as t}from"./app.26d05e8b.js";const p={},o=t(`<h1 id="\u9875\u9762\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u5E03\u5C40" aria-hidden="true">#</a> \u9875\u9762\u5E03\u5C40</h1><h2 id="\u4E09\u680F\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u4E09\u680F\u5E03\u5C40" aria-hidden="true">#</a> \u4E09\u680F\u5E03\u5C40</h2><p>\u5047\u8BBE\u9AD8\u5EA6\u5DF2\u77E5\uFF0C\u8BF7\u5199\u51FA\u4E09\u680F\u5E03\u5C40\uFF0C\u5176\u4E2D\u5DE6\u680F\uFF0C\u53F3\u680F\u5BBD\u5EA6\u5404300px\uFF0C\u4E2D\u95F4\u81EA\u9002\u5E94</p><p>5\u79CD\u65B9\u6848\uFF1A</p><ul><li>flex\u5E03\u5C40</li><li>\u7EDD\u5BF9\u5B9A\u4F4D\u5E03\u5C40absolute</li><li>\u6D6E\u52A8\u5E03\u5C40float</li><li>\u8868\u683C\u5E03\u5C40table</li><li>\u7F51\u683C\u5E03\u5C40grid</li></ul><h3 id="flex\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#flex\u5E03\u5C40" aria-hidden="true">#</a> flex\u5E03\u5C40</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.content</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.center</span> <span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u7EDD\u5BF9\u5B9A\u4F4D\u5E03\u5C40absolute" tabindex="-1"><a class="header-anchor" href="#\u7EDD\u5BF9\u5B9A\u4F4D\u5E03\u5C40absolute" aria-hidden="true">#</a> \u7EDD\u5BF9\u5B9A\u4F4D\u5E03\u5C40absolute</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.left,.right,.center</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px
<span class="token punctuation">}</span>
<span class="token selector">.right</span> <span class="token punctuation">{</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.center</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 300px\uFF1B
    <span class="token property">right</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6D6E\u52A8\u5E03\u5C40float" tabindex="-1"><a class="header-anchor" href="#\u6D6E\u52A8\u5E03\u5C40float" aria-hidden="true">#</a> \u6D6E\u52A8\u5E03\u5C40float</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.left</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u8868\u683C\u5E03\u5C40table" tabindex="-1"><a class="header-anchor" href="#\u8868\u683C\u5E03\u5C40table" aria-hidden="true">#</a> \u8868\u683C\u5E03\u5C40table</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left,.right,.center</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u7F51\u683C\u5E03\u5C40grid" tabindex="-1"><a class="header-anchor" href="#\u7F51\u683C\u5E03\u5C40grid" aria-hidden="true">#</a> \u7F51\u683C\u5E03\u5C40grid</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 300px auto 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5EF6\u4F38\uFF1A</p><ol><li>\u4E94\u79CD\u65B9\u6848\u7684\u4F18\u7F3A\u70B9\uFF1A</li></ol><ul><li>float: \u9700\u8981\u6E05\u9664\u6D6E\u52A8\uFF0C\u56E0\u4E3A\u6D6E\u52A8\u8131\u843D\u6587\u6863\u6D41\uFF0C\u4F18\u70B9\u662F\u517C\u5BB9\u6027\u597D</li><li>\u7EDD\u5BF9\u5B9A\u4F4D\uFF1A\u5FEB\u6377\uFF0C\u7F3A\u70B9\uFF1A</li><li>flex: \u89E3\u51B3\u4E0A\u8FF0\u4E24\u4E2A\u5E03\u5C40\u65B9\u5F0F\u7684\u95EE\u9898</li><li>\u8868\u683C\u5E03\u5C40\uFF1A\u517C\u5BB9\u6027\u597D\uFF0C\u7F3A\u70B9\uFF1A</li><li>\u7F51\u683C\u5E03\u5C40\uFF1Acss3\u65B0\u51FA\u7684\u5E03\u5C40\u65B9\u5F0F</li></ul><ol start="2"><li><p>\u9AD8\u5EA6\u672A\u77E5\u60C5\u51B5\uFF0C\u54EA\u4E2A\u4E0D\u518D\u9002\u7528\uFF1A</p><p>float\uFF0C\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u7F51\u683C\u5E03\u5C40\u4E0D\u884C\uFF0C\u53EA\u6709\u8868\u683C\u5E03\u5C40\u548Cflex\u5E03\u5C40\u901A\u7528</p></li><li><p>\u517C\u5BB9\u6027\u5982\u4F55\uFF0C\u54EA\u4E2A\u6700\u5B9E\u7528 \uFF1A</p></li><li><p>\u9875\u9762\u5E03\u5C40\u7684\u53D8\u901A\uFF1A</p></li></ol><ul><li>\u4E09\u680F\u5E03\u5C40\uFF1A <ul><li>\u5DE6\u53F3\u5BBD\u5EA6\u56FA\u5B9A\uFF0C\u4E2D\u95F4\u81EA\u9002\u5E94</li><li>\u4E0A\u4E0B\u9AD8\u5EA6\u56FA\u5B9A\uFF0C\u4E2D\u95F4\u81EA\u9002\u5E94\uFF08h5\u5E03\u5C40\u5E38\u7528\uFF09</li></ul></li><li>\u4E24\u680F\u5E03\u5C40 <ul><li>\u5DE6\u5BBD\u5EA6\u56FA\u5B9A\uFF0C\u53F3\u81EA\u9002\u5E94</li><li>\u53F3\u5BBD\u5EA6\u56FA\u5B9A\uFF0C\u5DE6\u81EA\u9002\u5E94</li><li>\u4E0A\u9AD8\u5EA6\u56FA\u5B9A\uFF0C\u4E0B\u81EA\u9002\u5E94</li><li>\u4E0B\u9AD8\u5EA6\u56FA\u5B9A\uFF0C\u4E0A\u81EA\u9002\u5E94</li></ul></li></ul><h2 id="\u4E5D\u5BAB\u683C" tabindex="-1"><a class="header-anchor" href="#\u4E5D\u5BAB\u683C" aria-hidden="true">#</a> \u4E5D\u5BAB\u683C</h2><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span> <span class="token punctuation">{</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li</span> <span class="token punctuation">{</span>
            <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">ul</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">li</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 5%<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 5%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u7B2C3,6,9\u4E2A\u683C\u5B50\u53F3\u8FB9\u8DDD\u4E3A0 */</span>
<span class="token selector">li:nth-of-type(3n)</span> <span class="token punctuation">{</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u7B2C7,8,9\u4E2A\u683C\u5B50\u4E0B\u8FB9\u8DDD\u4E3A0 \uFF0Cn\u4ECE0\u5F00\u59CB*/</span>
<span class="token selector">li:nth-of-type(n+7)</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="grid" tabindex="-1"><a class="header-anchor" href="#grid" aria-hidden="true">#</a> grid</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">ul</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 30% 30% 30%<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 30% 30% 30%<span class="token punctuation">;</span>
    <span class="token property">grid-gap</span><span class="token punctuation">:</span> 5%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="float" tabindex="-1"><a class="header-anchor" href="#float" aria-hidden="true">#</a> float</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">ul</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">li</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 5%<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 5%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">li:nth-of-type(3n)</span><span class="token punctuation">{</span> 
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">li:nth-of-type(n+7)</span><span class="token punctuation">{</span> 
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="inline-block" tabindex="-1"><a class="header-anchor" href="#inline-block" aria-hidden="true">#</a> inline-block</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">ul</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">li</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 5%<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 5%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">li:nth-of-type(3n)</span><span class="token punctuation">{</span> 
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">li:nth-of-type(n+7)</span><span class="token punctuation">{</span> 
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> table</h3><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>table<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.table</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
  <span class="token property">border-spacing</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">li</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-row<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>flex\u5E03\u5C40\u5E73\u65F6\u7528\u7684\u6BD4\u8F83\u591A\u7684\u5E03\u5C40\u65B9\u5F0F</li><li>grid\u5E03\u5C40\u5B9E\u73B0\u8D77\u6765\u975E\u5E38\u65B9\u4FBF\uFF0C\u4F46\u662F\u5B83\u7684\u89C4\u8303\u5E76\u672A\u6210\u719F\uFF0C\u4E3B\u6D41\u7684\u6D4F\u89C8\u5668\u4F7F\u7528\u8F83\u5C11\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528\u5728\u4F01\u4E1A\u9879\u76EE\u4E2D\uFF1B</li><li>\u4F7F\u7528float\u53EF\u4EE5\u4F7F\u5143\u7D20\u8131\u79BB\u6587\u6863\u6D41\uFF0C\u5F62\u6210BFC\uFF0C\u5728\u91CD\u65B0\u6E32\u67D3\u65F6\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u7684\u5143\u7D20\u3002\u9700\u8981\u6CE8\u610F\u4F7F\u7528float\u7684\u5143\u7D20\u5176\u7236\u5143\u7D20\u4F1A\u584C\u9677\uFF0C\u9700\u8981\u6E05\u9664\u6D6E\u52A8\u3002</li><li>\u4F7F\u7528inline-block\u6765\u5B9E\u73B0\u4E5D\u5BAB\u683C\u5E03\u5C40\u65F6\uFF0C\u5B9A\u4E49\u4E86inline-block\u7684\u5143\u7D20\u4E4B\u95F4\u4F1A\u51FA\u73B0\u95F4\u9699\uFF0C\u9700\u8981\u6E05\u9664\uFF1B table\u5E03\u5C40\u73B0\u5728\u611F\u89C9\u7528\u7684\u6BD4\u8F83\u5C11\u4E86\uFF0C\u51E0\u4E4E\u5F88\u5C11\u5728\u9879\u76EE\u4E2D\u4F7F\u7528table\u5E03\u5C40\u3002</li></ul>`,34),c=[o];function e(l,u){return s(),a("div",null,c)}var k=n(p,[["render",e],["__file","layout.html.vue"]]);export{k as default};
