import{_ as o,r as e,o as c,c as l,a as n,b as p,d as s,e as a}from"./app.1fc11eba.js";const u={},i=s(`<h1 id="\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u901A\u4FE1" aria-hidden="true">#</a> \u901A\u4FE1</h1><h2 id="\u4EC0\u4E48\u662F\u540C\u6E90\u7B56\u7565\u53CA\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u540C\u6E90\u7B56\u7565\u53CA\u9650\u5236" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u540C\u6E90\u7B56\u7565\u53CA\u9650\u5236</h2><p>\u540C\u6E90\u7B56\u7565\u9650\u5236\u4ECE\u4E00\u4E2A\u6E90\u52A0\u8F7D\u7684\u6587\u4EF6\u6216\u8005\u811A\u672C\u5982\u4F55\u4E0E\u6765\u81EA\u53E6\u4E00\u4E2A\u6E90\u7684\u8D44\u6E90\u8FDB\u884C\u4EA4\u4E92\u3002\u8FD9\u662F\u4E00\u4E2A\u7528\u4E8E\u9694\u79BB\u6F5C\u5728\u6076\u610F\u6587\u4EF6\u7684\u5173\u952E\u7684\u5B89\u5168\u673A\u5236\u3002\uFF08\u6E90\u5305\u542B\uFF1A<strong>\u534F\u8BAE+\u57DF\u540D+\u7AEF\u53E3</strong>\uFF09</p><p>\u540C\u6E90\u7B56\u7565\u6709\u54EA\u4E9B\u9650\u5236\uFF1A</p><ul><li>Cookie,LocalStrorage\u548CIndexDB\u65E0\u6CD5\u8BFB\u53D6</li><li>DOM\u65E0\u6CD5\u83B7\u53D6</li><li>AJAX\u8BF7\u6C42\u4E0D\u80FD\u53D1\u9001</li></ul><h2 id="\u5982\u4F55\u521B\u5EFAajax-\u539F\u751F" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u521B\u5EFAajax-\u539F\u751F" aria-hidden="true">#</a> \u5982\u4F55\u521B\u5EFAAjax\uFF08\u539F\u751F\uFF09</h2><ul><li>XMLHttpRequst\u5BF9\u8C61\u7684\u5DE5\u4F5C\u6D41\u7A0B</li><li>\u517C\u5BB9\u6027\u5904\u7406\uFF08IE\u4E0D\u652F\u6301\uFF09</li><li>\u4E8B\u4EF6\u7684\u89E6\u53D1\u6761\u4EF6</li><li>\u4E8B\u4EF6\u7684\u89E6\u53D1\u987A\u5E8F</li></ul><p>\u5B9E\u73B0\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> xhr <span class="token operator">=</span> window<span class="token punctuation">.</span>XMLHttpRequest 
              <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
              <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">&quot;Microsoft.XMLHTTP&quot;</span><span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readystate <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">var</span> data <span class="token operator">=</span> xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">;</span>
                <span class="token keyword">return</span> data<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u8DE8\u57DF\u901A\u4FE1\u7684\u51E0\u79CD\u65B9\u5F0F-5\u79CD" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u57DF\u901A\u4FE1\u7684\u51E0\u79CD\u65B9\u5F0F-5\u79CD" aria-hidden="true">#</a> \u8DE8\u57DF\u901A\u4FE1\u7684\u51E0\u79CD\u65B9\u5F0F\uFF085\u79CD\uFF09</h2><ul><li>JSONP</li><li>Hash\uFF08url\u540E\u9762\u7684#\uFF09</li><li>postMessage\uFF08h5\u4E2D\u65B0\u589E\uFF09</li><li>WebSocket</li><li>CORS\uFF08\u7406\u89E3\u4E3AAjax\u7684\u4E00\u79CD\u65B9\u5F0F\uFF09</li></ul><h3 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> JSONP</h3><p>JSON with Padding</p><p>\u539F\u7406\uFF1A\u4E3B\u8981\u5C31\u662F\u5229\u7528\u4E86<code>script</code>\u6807\u7B7E\u7684<code>src</code>\u6CA1\u6709\u8DE8\u57DF\u9650\u5236\u6765\u5B8C\u6210\u7684</p><p>\u7F3A\u70B9\uFF1A\u53EA\u80FD\u8FDB\u884C<code>GET</code>\u8BF7\u6C42</p><h3 id="hash" tabindex="-1"><a class="header-anchor" href="#hash" aria-hidden="true">#</a> Hash</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5229\u7528hash\uFF0C\u573A\u666F\u662F\u5F53\u524D\u9875\u9762 A \u901A\u8FC7iframe\u6216frame\u5D4C\u5165\u4E86\u8DE8\u57DF\u7684\u9875\u9762 B</span>
<span class="token comment">// \u5728A\u4E2D\u4F2A\u4EE3\u7801\u5982\u4E0B\uFF1A</span>
<span class="token keyword">var</span> <span class="token constant">B</span> <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;iframe&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">B</span><span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token constant">B</span><span class="token punctuation">.</span>src <span class="token operator">+</span> <span class="token string">&#39;#&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5728B\u4E2D\u7684\u4F2A\u4EE3\u7801\u5982\u4E0B</span>
window<span class="token punctuation">.</span><span class="token function-variable function">onhashchange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="postmessage" tabindex="-1"><a class="header-anchor" href="#postmessage" aria-hidden="true">#</a> postMessage</h3><p>\u5B9E\u73B0\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u7A97\u53E3A(http:A.com)\u5411\u8DE8\u57DF\u7684\u7A97\u53E3B(http:B.com)\u53D1\u9001\u4FE1\u606F</span>
Bwindow<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;http://B.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5728\u7A97\u53E3B\u4E2D\u76D1\u542C</span>
Awindow<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>origin<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> WebSocket</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// Websocket\u3010\u53C2\u8003\u8D44\u6599\u3011http://www.ruanyifeng.com/blog/2017/05/websocket.html</span>

<span class="token keyword">var</span> ws <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">&#39;wss://echo.websocket.org&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u53D1\u9001\u6D88\u606F</span>
ws<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Connection open ...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ws<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Hello WebSockets!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u63A5\u53D7\u6D88\u606F</span>
ws<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Received Message: &#39;</span><span class="token punctuation">,</span> evt<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  ws<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u8FDE\u63A5\u4E2D\u65AD</span>
ws<span class="token punctuation">.</span><span class="token function-variable function">onclose</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Connection closed.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h3><p>CORS\u662F\u4E00\u4E2AW3C\u6807\u51C6\uFF0C\u5168\u79F0\u662F\u201D\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\u201D\uFF08Cross-origin resource sharing\uFF09s</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// CORS\u3010\u53C2\u8003\u8D44\u6599\u3011http://www.ruanyifeng.com/blog/2016/04/cors.html</span>
<span class="token comment">// url\uFF08\u5FC5\u9009\uFF09\uFF0Coptions\uFF08\u53EF\u9009\uFF09</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;/some/url/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8DE8\u57DF\u7684\uFF0C\u8FD9\u91CC\u9700\u8981\u52A0\u914D\u7F6E</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// \u51FA\u9519\u4E86\uFF0C\u7B49\u4EF7\u4E8E then \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u4F46\u8FD9\u6837\u66F4\u597D\u7528\u66F4\u76F4\u89C2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u600E\u4E48\u4E0E\u670D\u52A1\u7AEF\u4FDD\u6301\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u600E\u4E48\u4E0E\u670D\u52A1\u7AEF\u4FDD\u6301\u8FDE\u63A5" aria-hidden="true">#</a> \u600E\u4E48\u4E0E\u670D\u52A1\u7AEF\u4FDD\u6301\u8FDE\u63A5</h2><ul><li>HTTP\u8BF7\u6C42\u5934\u9700\u8981\u589E\u52A0<code>Connection:keep-alive</code>\u5B57\u6BB5</li><li>websocket</li></ul><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h2><h3 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h3>`,29),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie",target:"_blank",rel:"noopener noreferrer"},r=a("cookie"),d=s('<table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><div style="width:130px;">name(\u5FC5\u8981)</div></td><td>\u8981\u521B\u5EFA\u6216\u8986\u76D6\u7684cookie\u7684\u540D\u5B57(string)</td></tr><tr><td>value(\u5FC5\u8981)</td><td>cookie\u7684\u503C(string)</td></tr><tr><td>domain</td><td>\u53EF\u4EE5\u8BBF\u95EE\u6B64cookie\u7684\u57DF\u540D</td></tr><tr><td>path</td><td>\u53EF\u4EE5\u8BBF\u95EE\u6B64cookie\u7684\u9875\u9762\u8DEF\u5F84(\u5982\u679C\u6CA1\u6709\u5B9A\u4E49\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D\u6587\u6863\u4F4D\u7F6E\u7684\u8DEF\u5F84)</td></tr><tr><td>expires/max-age</td><td>\u8BBE\u7F6Ecookie\u8D85\u65F6\u65F6\u95F4\u3002\u5982\u679C\u8BBE\u7F6E\u7684\u503C\u4E3A\u4E00\u4E2A\u65F6\u95F4\uFF0C\u5219\u5F53\u5230\u8FBE\u8BE5\u65F6\u95F4\u65F6\u6B64cookie\u5931\u6548\u3002\u4E0D\u8BBE\u7F6E\u7684\u8BDD\u9ED8\u8BA4\u662Fsession\uFF0C\u610F\u601D\u662Fcookie\u4F1A\u548Csession\u4E00\u8D77\u5931\u6548\uFF0C\u5F53\u6D4F\u89C8\u5668\u5173\u95ED\uFF08\u5E76\u4E0D\u662F\u6D4F\u89C8\u5668\u6807\u7B7E\u5173\u95ED\uFF0C\u800C\u662F\u6574\u4E2A\u6D4F\u89C8\u5668\u5173\u95ED\uFF09\u540E\uFF0Ccookie\u5931\u6548\u3002</td></tr><tr><td>http</td><td>cookie\u7684HttpOnly\u5C5E\u6027\uFF0C\u82E5\u6B64\u5C5E\u6027\u4E3ATrue\uFF0C\u5219\u53EA\u6709\u5728http\u8BF7\u6C42\u5934\u4E2D\u4F1A\u6709\u6B64cookie\u4FE1\u606F\uFF0C\u800C\u4E0D\u80FD\u901A\u8FC7document.cookie\u6765\u8BBF\u95EE\u6B64cookie\u3002</td></tr><tr><td>secure</td><td>cookie\u53EA\u4F1A\u88ABhttps\u4F20\u8F93 (boolean\u6216null)</td></tr></tbody></table><h3 id="\u521B\u5EFA\u8BFB\u53D6\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u8BFB\u53D6\u5220\u9664" aria-hidden="true">#</a> \u521B\u5EFA\u8BFB\u53D6\u5220\u9664</h3>',2),h=a("\u53EF\u53C2\u8003 "),g={href:"https://github.com/js-cookie/js-cookie",target:"_blank",rel:"noopener noreferrer"},m=a("js-cookie"),f=s(`<p>\u521B\u5EFA\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&#39;username=Jack&#39;</span>
</code></pre></div><p>\u8BFB\u53D6\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> cookie <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie
</code></pre></div><p>\u4FEE\u6539\uFF08\u7C7B\u4F3C\u4E8E\u521B\u5EFA\uFF0C\u65B0\u503C\u8986\u76D6\u65E7\u503C\uFF09\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie<span class="token operator">=</span><span class="token string">&quot;username=John Smith; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5220\u9664\uFF1A</p><ul><li>\u4E0D\u6307\u5B9Acookie\u7684\u503C</li><li>\u8BBE\u7F6E<code>expires</code>\u53C2\u6570\u4E3A\u8FC7\u53BB\u7684\u65E5\u671F</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&quot;username=; expires=Thu, 01 Jan 1970 00:00:00 GMT&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>\u603B\u7ED3\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getCookie</span> <span class="token operator">=</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;;&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> tempArr <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>tempArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>tempArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">setCookie</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> days</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  date<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> days<span class="token punctuation">)</span>
  document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> name <span class="token operator">+</span> <span class="token string">&#39;=&#39;</span> <span class="token operator">+</span> value <span class="token operator">+</span> <span class="token string">&#39;;expires=&#39;</span> <span class="token operator">+</span> date
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">removeCookie</span> <span class="token operator">=</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8BBE\u7F6E\u5DF2\u8FC7\u671F\uFF0C\u7CFB\u7EDF\u4F1A\u7ACB\u523B\u5220\u9664cookie</span>
  <span class="token function">setCookie</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u7981\u6B62js\u8BBF\u95EEcookie" tabindex="-1"><a class="header-anchor" href="#\u7981\u6B62js\u8BBF\u95EEcookie" aria-hidden="true">#</a> \u7981\u6B62js\u8BBF\u95EEcookie</h3><p>\u5982\u679C\u60A8\u5728cookie\u4E2D\u8BBE\u7F6E\u4E86<code>HttpOnly</code>\u5C5E\u6027\uFF0C\u90A3\u4E48\u901A\u8FC7js\u811A\u672C\u5C06\u65E0\u6CD5\u8BFB\u53D6\u5230cookie\u4FE1\u606F\uFF0C\u8FD9\u6837\u80FD\u6709\u6548\u7684\u9632\u6B62XSS\u653B\u51FB</p><h2 id="localstorage\u548Csessionstorage" tabindex="-1"><a class="header-anchor" href="#localstorage\u548Csessionstorage" aria-hidden="true">#</a> localStorage\u548CsessionStorage</h2><h3 id="localstorage" tabindex="-1"><a class="header-anchor" href="#localstorage" aria-hidden="true">#</a> localStorage</h3>`,15),v={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage",target:"_blank",rel:"noopener noreferrer"},w=a("localStorage"),x=s(`<p>\u53EA\u8981\u5728\u76F8\u540C\u7684<strong>\u534F\u8BAE+\u57DF\u540D+\u7AEF\u53E3</strong>\u4E0B\uFF0C\u5C31\u80FD\u8BFB\u53D6/\u4FEE\u6539\u5230\u540C\u4E00\u4EFDlocalStorage\u6570\u636E</p><p>localStorage\u7406\u8BBA\u4E0A\u6765\u8BF4\u662F\u6C38\u4E45\u6709\u6548\u7684\uFF0C\u5373\u4E0D\u4E3B\u52A8\u6E05\u7A7A\u7684\u8BDD\u5C31\u4E0D\u4F1A\u6D88\u5931</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="sessionstorage" tabindex="-1"><a class="header-anchor" href="#sessionstorage" aria-hidden="true">#</a> sessionStorage</h3>`,4),b={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage",target:"_blank",rel:"noopener noreferrer"},y=a("sessionStorage"),j=s(`<p>\u9664\u4E86<strong>\u534F\u8BAE+\u57DF\u540D+\u7AEF\u53E3</strong>\u5916\uFF0C\u8FD8\u8981\u6C42\u5728\u540C\u4E00\u7A97\u53E3\uFF08\u4E5F\u5C31\u662F\u6D4F\u89C8\u5668\u7684\u6807\u7B7E\u9875\uFF09\u4E0B</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

sessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,2);function _(S,C){const t=e("ExternalLinkIcon");return c(),l("div",null,[i,n("p",null,[n("a",k,[r,p(t)])]),d,n("p",null,[h,n("a",g,[m,p(t)])]),f,n("p",null,[n("a",v,[w,p(t)])]),x,n("p",null,[n("a",b,[y,p(t)])]),j])}var B=o(u,[["render",_],["__file","communications.html.vue"]]);export{B as default};