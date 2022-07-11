import{_ as n,o as s,c as a,d as t}from"./app.b03efe37.js";const p={},o=t(`<h1 id="antdesignvue\u81EA\u5B9A\u4E49\u56FE\u7247\u6587\u4EF6\u4E0A\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#antdesignvue\u81EA\u5B9A\u4E49\u56FE\u7247\u6587\u4EF6\u4E0A\u7EC4\u4EF6" aria-hidden="true">#</a> AntDesignVue\u81EA\u5B9A\u4E49\u56FE\u7247\u6587\u4EF6\u4E0A\u7EC4\u4EF6</h1><h2 id="\u6280\u672F\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u5B9E\u73B0" aria-hidden="true">#</a> \u6280\u672F\u5B9E\u73B0</h2><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>upload-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-upload</span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>upload<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">list-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>picture-card<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>acceptStr<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:file-list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileList<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@preview</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handlePreview<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:before-upload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>beforeUpload<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:remove</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleRemove<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:customRequest</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>customRequest<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:multiple</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>disabled<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isCanAdd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>plus<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ant-upload-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          \u4E0A\u4F20
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-upload</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> upload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api/common&#39;</span>
<span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">&#39;lodash&#39;</span>

<span class="token keyword">function</span> <span class="token function">getBase64</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
    reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span>reader<span class="token punctuation">.</span>result<span class="token punctuation">)</span>
    reader<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">fileObjList</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token punctuation">[</span>Boolean<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">fileObjList</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> arr <span class="token operator">=</span> val <span class="token operator">?</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> sessionId <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;sessionId&#39;</span><span class="token punctuation">)</span>
          arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            item<span class="token punctuation">.</span>url <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">?sessionId=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>sessionId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>fileList <span class="token operator">=</span> arr
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">fileListLength</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
      <span class="token literal-property property">previewVisible</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">previewImage</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fileList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">newFileList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">acceptStr</span><span class="token operator">:</span> <span class="token string">&#39;image/png,image/jpg,image/jpeg,\\n&#39;</span> <span class="token operator">+</span>
                 <span class="token string">&#39;application/vnd.openxmlformats-officedocument.presentationml.presentation,\\n&#39;</span> <span class="token operator">+</span>
                 <span class="token string">&#39;application/vnd.ms-powerpoint,\\n&#39;</span> <span class="token operator">+</span>
                 <span class="token string">&#39;application/vnd.ms-excel,\\n&#39;</span> <span class="token operator">+</span>
                 <span class="token string">&#39;application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,\\n&#39;</span> <span class="token operator">+</span>
                 <span class="token string">&#39;application/msword,\\n&#39;</span> <span class="token operator">+</span>
                 <span class="token string">&#39;application/vnd.openxmlformats-officedocument.wordprocessingml.document,\\n&#39;</span> <span class="token operator">+</span>
                 <span class="token string">&#39;application/pdf,\\n&#39;</span> <span class="token operator">+</span>
                 <span class="token string">&#39;ext/plain&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">isCanAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>disabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fileList<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fileListLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">clearUpload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>fileList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u81EA\u5B9A\u4E49\u4E0A\u4F20</span>
    <span class="token function">customRequest</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u53D6\u6D88\u9884\u89C8</span>
    <span class="token function">handleCancelPreview</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>previewVisible <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u9884\u89C8</span>
    <span class="token keyword">async</span> <span class="token function">handlePreview</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>file<span class="token punctuation">.</span>url <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>file<span class="token punctuation">.</span>preview<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        file<span class="token punctuation">.</span>preview <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getBase64</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>originFileObj<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>previewImage <span class="token operator">=</span> file<span class="token punctuation">.</span>url <span class="token operator">||</span> file<span class="token punctuation">.</span>preview
      <span class="token keyword">this</span><span class="token punctuation">.</span>previewVisible <span class="token operator">=</span> <span class="token boolean">true</span>
      window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">beforeUpload</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> isLt2M <span class="token operator">=</span> file<span class="token punctuation">.</span>size <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">&lt;</span> <span class="token number">5</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isLt2M<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u4E0D\u53EF\u8D85\u8FC75M!&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// console.log(info,&#39;info&#39;)</span>
      <span class="token comment">// console.log(file, &quot;file&quot;);</span>
      <span class="token comment">// this.fileList = fileList;</span>
      <span class="token comment">// console.log(fileList, &#39;fileList&#39;)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5220\u9664</span>
    <span class="token function">handleRemove</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token string">&#39;file&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>fileList <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fileList<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>uid <span class="token operator">!==</span> file<span class="token punctuation">.</span>uid<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>newFileList <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>newFileList<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>uid <span class="token operator">!==</span> file<span class="token punctuation">.</span>uid<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;uploadSuccess&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>newFileList<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E0A\u4F20</span>
    <span class="token keyword">async</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>file<span class="token punctuation">)</span>
      data<span class="token punctuation">.</span><span class="token function">onProgress</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

      <span class="token keyword">const</span> <span class="token punctuation">{</span> code<span class="token punctuation">,</span> rs <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">upload</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        data<span class="token punctuation">.</span><span class="token function">onSuccess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u4E0A\u4F20\u6210\u529F</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>newFileList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> fileFormate <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fileFormatter</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span>name<span class="token punctuation">,</span> rs<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>fileList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fileFormate<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>fileList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> <span class="token punctuation">{</span> uid<span class="token punctuation">,</span> name<span class="token punctuation">,</span> url <span class="token punctuation">}</span> <span class="token operator">=</span> item
          <span class="token keyword">this</span><span class="token punctuation">.</span>newFileList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> uid<span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> url<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;uploadSuccess&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>newFileList<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        data<span class="token punctuation">.</span><span class="token function">onError</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u4E0A\u4F20\u5931\u8D25</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// \u56FE\u7247\u683C\u5F0F\u5316</span>
    <span class="token function">fileFormatter</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> sessionId <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;sessionId&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">uid</span><span class="token operator">:</span> _<span class="token punctuation">.</span><span class="token function">uniqueId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> name<span class="token punctuation">,</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> url <span class="token operator">+</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">?sessionId=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>sessionId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> file
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre></div>`,3),e=[o];function c(l,u){return s(),a("div",null,e)}var i=n(p,[["render",c],["__file","antd-vue-upload.html.vue"]]);export{i as default};
