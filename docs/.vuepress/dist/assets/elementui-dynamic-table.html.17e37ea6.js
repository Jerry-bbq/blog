import{_ as n,o as s,c as a,e as t}from"./app.26d05e8b.js";var p="/blog/assets/dynamic-table.c1438272.png";const o={},e=t('<h1 id="\u52A8\u6001\u8868\u683C" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u8868\u683C" aria-hidden="true">#</a> \u52A8\u6001\u8868\u683C</h1><h2 id="\u4E1A\u52A1\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E1A\u52A1\u573A\u666F" aria-hidden="true">#</a> \u4E1A\u52A1\u573A\u666F</h2><ul><li>\u8868\u683C\u4E2D\u7684\u5217\u7531\u540E\u53F0\u914D\u7F6E\u751F\u6210</li><li>\u5217\u7684\u6392\u5E8F\u4E5F\u6709\u540E\u53F0\u5B9A\u4E49\uFF0C\u4E14\u7531\u540E\u53F0\u6765\u6392\u5E8F</li><li>\u5408\u8BA1\u4E5F\u7531\u540E\u53F0\u6765\u8BA1\u7B97</li></ul><h2 id="\u6548\u679C\u56FE" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C\u56FE" aria-hidden="true">#</a> \u6548\u679C\u56FE</h2><p><img src="'+p+`" alt="dynamic-table"></p><h2 id="\u6280\u672F\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u5B9E\u73B0" aria-hidden="true">#</a> \u6280\u672F\u5B9E\u73B0</h2><ul><li>\u4F7F\u7528ElementUI \u7684 table</li><li>\u901A\u8FC7\u63A5\u53E3\u8FD4\u56DE\u7684\u5217\u5B57\u6BB5\u904D\u5386\u5339\u914D\u5230\u6BCF\u4E2Aprop</li></ul><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-table<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">border</span>
      <span class="token attr-name">:header-cell-class-name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>() =&gt; <span class="token punctuation">&#39;</span>my-table__header-th<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:summary-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getSummary<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@sort-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sortChange<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">show-summary</span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col in cols<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col.prop<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col.prop<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col.label<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:sortable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col.sortable ? <span class="token punctuation">&#39;</span>custom<span class="token punctuation">&#39;</span> : false<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">class-name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-table__td<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!col.sortable ? <span class="token punctuation">&#39;</span>left<span class="token punctuation">&#39;</span> : <span class="token punctuation">&#39;</span>center<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">show-overflow-tooltip</span>
        <span class="token attr-name">:min-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> <span class="token constant">SORT</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">ascending</span><span class="token operator">:</span> <span class="token string">&#39;asc&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">descending</span><span class="token operator">:</span> <span class="token string">&#39;desc&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;app&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token constant">DIM_004400</span><span class="token operator">:</span> <span class="token string">&#39;\u63A8\u8350\u6D3B\u52A8&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">DIM_004500</span><span class="token operator">:</span> <span class="token string">&#39;IN \u7C7B&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">DIM_004700</span><span class="token operator">:</span> <span class="token string">&#39;\u57CE\u897F\u94F6\u6CF0\u57CE&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">DIM_007400</span><span class="token operator">:</span> <span class="token string">&#39;\u745E\u601D-\u897F\u6E56\u56FD\u9645\u6821\u533A&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">DIM_011500</span><span class="token operator">:</span> <span class="token string">&#39;\u4F55\u5B81\u71D5&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">OBJ_ODI_000109</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">OBJ_ODI_000110</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token constant">DIM_004400</span><span class="token operator">:</span> <span class="token string">&#39;\u63A8\u8350\u6D3B\u52A8&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">DIM_004500</span><span class="token operator">:</span> <span class="token string">&#39;IN \u7C7B&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">DIM_004700</span><span class="token operator">:</span> <span class="token string">&#39;\u57CE\u897F\u94F6\u6CF0\u57CE&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">DIM_007400</span><span class="token operator">:</span> <span class="token string">&#39;\u745E\u601D-\u897F\u6E56\u56FD\u9645\u6821\u533A&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">DIM_011500</span><span class="token operator">:</span> <span class="token string">&#39;\u9646\u7FE0&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">OBJ_ODI_000109</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">OBJ_ODI_000110</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token constant">DIM_004400</span><span class="token operator">:</span> <span class="token string">&#39;\u63A8\u8350\u6D3B\u52A8&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">DIM_004500</span><span class="token operator">:</span> <span class="token string">&#39;IN \u7C7B&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">DIM_004700</span><span class="token operator">:</span> <span class="token string">&#39;\u57CE\u897F\u94F6\u6CF0\u57CE&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">DIM_007400</span><span class="token operator">:</span> <span class="token string">&#39;\u745E\u601D-\u57CE\u897F\u94F6\u6CF0\u6821\u533A&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">DIM_011500</span><span class="token operator">:</span> <span class="token string">&#39;\u4F55\u5B81\u71D5&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">OBJ_ODI_000109</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">OBJ_ODI_000110</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token constant">DIM_004400</span><span class="token operator">:</span> <span class="token string">&#39;\u63A8\u8350\u6D3B\u52A8&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">DIM_004500</span><span class="token operator">:</span> <span class="token string">&#39;IN \u7C7B&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">DIM_004700</span><span class="token operator">:</span> <span class="token string">&#39;\u57CE\u897F\u94F6\u6CF0\u57CE&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">DIM_007400</span><span class="token operator">:</span> <span class="token string">&#39;\u745E\u601D-\u57CE\u897F\u94F6\u6CF0\u6821\u533A&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">DIM_011500</span><span class="token operator">:</span> <span class="token string">&#39;\u9646\u7FE0&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">OBJ_ODI_000109</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">OBJ_ODI_000110</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token constant">DIM_004400</span><span class="token operator">:</span> <span class="token string">&#39;\u63A8\u8350\u6D3B\u52A8&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">DIM_004500</span><span class="token operator">:</span> <span class="token string">&#39;IN \u7C7B&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">DIM_004700</span><span class="token operator">:</span> <span class="token string">&#39;\u5927\u60A6\u57CE&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">DIM_007400</span><span class="token operator">:</span> <span class="token string">&#39;\u745E\u601D-\u897F\u6E56\u56FD\u9645\u6821\u533A&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">DIM_011500</span><span class="token operator">:</span> <span class="token string">&#39;\u4F55\u5B81\u71D5&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">OBJ_ODI_000109</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">OBJ_ODI_000110</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">cols</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u4E8C\u7EA7\u6E20\u9053&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;DIM_004400&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u4E00\u7EA7\u6E20\u9053&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;DIM_004500&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u4E09\u7EA7\u6E20\u9053&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;DIM_004700&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u4F8B\u5B50\u6821\u533A&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;DIM_007400&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u91C7\u5355\u5458&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;DIM_011500&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u65B0\u4F8B\u5B50\u5173\u5355\u91CF&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;OBJ_ODI_000109&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u8001\u4F8B\u5B50\u5173\u5355\u91CF&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;OBJ_ODI_000110&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;\u5408\u8BA1&#39;</span><span class="token punctuation">,</span> <span class="token constant">OBJ_ODI_000109</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token constant">OBJ_ODI_000110</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6392\u5E8F</span>
    <span class="token function">sortChange</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> column<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> order <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">SORT</span><span class="token punctuation">[</span>order<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5408\u8BA1</span>
    <span class="token function">getSummary</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> <span class="token punctuation">{</span> columns <span class="token punctuation">}</span> <span class="token operator">=</span> params
      <span class="token keyword">let</span> sums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      columns<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">column<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          sums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>total<span class="token punctuation">.</span>value
          <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>total<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>column<span class="token punctuation">.</span>property<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          sums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>total<span class="token punctuation">[</span>column<span class="token punctuation">.</span>property<span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          sums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> sums
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* \u5168\u5C40\u6837\u5F0F */</span>
<span class="token selector">.my-table</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #262626<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* td\u6837\u5F0F */</span>
<span class="token selector">.my-table /deep/ .my-table__td</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 36px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* th\u6837\u5F0F */</span>
<span class="token selector">.my-table /deep/ .my-table__header-th</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fafafb<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.65<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><div class="custom-container warning"><p class="custom-container-title">\u95EE\u9898</p><p>\u5408\u8BA1\u5982\u679C\u653E\u7F6E\u5230\u9876\u90E8\u4F1A\u4E0Efixed\u5B9A\u4F4D\u51B2\u7A81</p></div>`,9),c=[e];function l(u,k){return s(),a("div",null,c)}var i=n(o,[["render",l],["__file","elementui-dynamic-table.html.vue"]]);export{i as default};