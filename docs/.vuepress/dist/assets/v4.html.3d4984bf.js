import{_ as e,o as a,c as l,e as d}from"./app.26d05e8b.js";const r={},i=d(`<h1 id="webpack4" tabindex="-1"><a class="header-anchor" href="#webpack4" aria-hidden="true">#</a> Webpack4</h1><h2 id="webpack\u4E0Egrunt\u3001gulp\u7684\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#webpack\u4E0Egrunt\u3001gulp\u7684\u4E0D\u540C" aria-hidden="true">#</a> webpack\u4E0Egrunt\u3001gulp\u7684\u4E0D\u540C</h2><ol><li>\u4E09\u8005\u90FD\u662F\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177\uFF0Cgrunt\u548Cgulp\u5728\u65E9\u671F\u6BD4\u8F83\u6D41\u884C\uFF0C\u73B0\u5728webpack\u76F8\u5BF9\u6765\u8BF4\u6BD4\u8F83\u4E3B\u6D41\uFF0C\u4E0D\u8FC7\u4E00\u4E9B\u8F7B\u91CF\u5316\u7684\u4EFB\u52A1\u8FD8\u662F\u4F1A\u7528gulp\u6765\u5904\u7406\uFF0C\u6BD4\u5982\u5355\u72EC\u6253\u5305CSS\u6587\u4EF6\u7B49\u3002</li><li>grunt\u548Cgulp\u662F\u57FA\u4E8E\u4EFB\u52A1\u548C\u6D41\uFF08Task\u3001Stream\uFF09\u7684\u3002\u7C7B\u4F3CjQuery\uFF0C\u627E\u5230\u4E00\u4E2A\uFF08\u6216\u4E00\u7C7B\uFF09\u6587\u4EF6\uFF0C\u5BF9\u5176\u505A\u4E00\u7CFB\u5217\u94FE\u5F0F\u64CD\u4F5C\uFF0C\u66F4\u65B0\u6D41\u4E0A\u7684\u6570\u636E\uFF0C \u6574\u6761\u94FE\u5F0F\u64CD\u4F5C\u6784\u6210\u4E86\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u591A\u4E2A\u4EFB\u52A1\u5C31\u6784\u6210\u4E86\u6574\u4E2Aweb\u7684\u6784\u5EFA\u6D41\u7A0B\u3002</li><li>webpack\u662F\u57FA\u4E8E\u5165\u53E3\u7684\u3002webpack\u4F1A\u81EA\u52A8\u5730\u9012\u5F52\u89E3\u6790\u5165\u53E3\u6240\u9700\u8981\u52A0\u8F7D\u7684\u6240\u6709\u8D44\u6E90\u6587\u4EF6\uFF0C\u7136\u540E\u7528\u4E0D\u540C\u7684Loader\u6765\u5904\u7406\u4E0D\u540C\u7684\u6587\u4EF6\uFF0C\u7528Plugin\u6765\u6269\u5C55webpack\u529F\u80FD\u3002</li><li>\u4ECE\u6784\u5EFA\u601D\u8DEF\u6765\u8BF4\uFF0Cgulp\u548Cgrunt\u9700\u8981\u5F00\u53D1\u8005\u5C06\u6574\u4E2A\u524D\u7AEF\u6784\u5EFA\u8FC7\u7A0B\u62C6\u5206\u6210\u591A\u4E2A<code>Task</code>\uFF0C\u5E76\u5408\u7406\u63A7\u5236\u6240\u6709<code>Task</code>\u7684\u8C03\u7528\u5173\u7CFB webpack\u9700\u8981\u5F00\u53D1\u8005\u627E\u5230\u5165\u53E3\uFF0C\u5E76\u9700\u8981\u6E05\u695A\u5BF9\u4E8E\u4E0D\u540C\u7684\u8D44\u6E90\u5E94\u8BE5\u4F7F\u7528\u4EC0\u4E48Loader\u505A\u4F55\u79CD\u89E3\u6790\u548C\u52A0\u5DE5</li></ol><h2 id="webpack\u600E\u4E48\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#webpack\u600E\u4E48\u4F18\u5316" aria-hidden="true">#</a> webpack\u600E\u4E48\u4F18\u5316</h2><ul><li>\u591A\u5165\u53E3\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528CommonsChunkPlugin\u6765\u63D0\u53D6\u516C\u5171\u4EE3\u7801</li><li>\u901A\u8FC7externals\u914D\u7F6E\u6765\u63D0\u53D6\u5E38\u7528\u5E93</li><li>\u5229\u7528DllPlugin\u548CDllReferencePlugin\u9884\u7F16\u8BD1\u8D44\u6E90\u6A21\u5757 \u901A\u8FC7DllPlugin\u6765\u5BF9\u90A3\u4E9B\u6211\u4EEC\u5F15\u7528\u4F46\u662F\u7EDD\u5BF9\u4E0D\u4F1A\u4FEE\u6539\u7684npm\u5305\u6765\u8FDB\u884C\u9884\u7F16\u8BD1\uFF0C\u518D\u901A\u8FC7DllReferencePlugin\u5C06\u9884\u7F16\u8BD1\u7684\u6A21\u5757\u52A0\u8F7D\u8FDB\u6765\u3002</li><li>\u4F7F\u7528Happypack \u5B9E\u73B0\u591A\u7EBF\u7A0B\u52A0\u901F\u7F16\u8BD1</li><li>\u4F7F\u7528webpack-uglify-parallel\u6765\u63D0\u5347uglifyPlugin\u7684\u538B\u7F29\u901F\u5EA6\u3002 \u539F\u7406\u4E0Awebpack-uglify-parallel\u91C7\u7528\u4E86\u591A\u6838\u5E76\u884C\u538B\u7F29\u6765\u63D0\u5347\u538B\u7F29\u901F\u5EA6</li><li>\u4F7F\u7528Tree-shaking\u548CScope Hoisting\u6765\u5254\u9664\u591A\u4F59\u4EE3\u7801</li></ul><h2 id="\u5E38\u89C1\u7684loader\u53CA\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u7684loader\u53CA\u4F5C\u7528" aria-hidden="true">#</a> \u5E38\u89C1\u7684Loader\u53CA\u4F5C\u7528</h2><table><thead><tr><th>loader</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>babel-loader</td><td>\u628A ES6 \u8F6C\u6362\u6210 ES5</td></tr><tr><td>css-loader</td><td>\u52A0\u8F7D CSS\uFF0C\u652F\u6301\u6A21\u5757\u5316\u3001\u538B\u7F29\u3001\u6587\u4EF6\u5BFC\u5165\u7B49\u7279\u6027</td></tr><tr><td>style-loader</td><td>\u628A CSS \u4EE3\u7801\u6CE8\u5165\u5230 JavaScript \u4E2D\uFF0C\u901A\u8FC7 DOM \u64CD\u4F5C\u53BB\u52A0\u8F7D CSS</td></tr><tr><td>file-loader</td><td>\u628A\u6587\u4EF6\u8F93\u51FA\u5230\u4E00\u4E2A\u6587\u4EF6\u5939\u4E2D\uFF0C\u5728\u4EE3\u7801\u4E2D\u901A\u8FC7\u76F8\u5BF9 URL \u53BB\u5F15\u7528\u8F93\u51FA\u7684\u6587\u4EF6</td></tr><tr><td>url-loader</td><td>\u548C file-loader \u7C7B\u4F3C\uFF0C\u4F46\u662F\u80FD\u5728\u6587\u4EF6\u5F88\u5C0F\u7684\u60C5\u51B5\u4E0B\u4EE5 base64 \u7684\u65B9\u5F0F\u628A\u6587\u4EF6\u5185\u5BB9\u6CE8\u5165\u5230\u4EE3\u7801\u4E2D\u53BB</td></tr><tr><td>source-map-loader</td><td>\u52A0\u8F7D\u989D\u5916\u7684 Source Map \u6587\u4EF6\uFF0C\u4EE5\u65B9\u4FBF\u65AD\u70B9\u8C03\u8BD5</td></tr><tr><td>image-loader</td><td>\u52A0\u8F7D\u5E76\u4E14\u538B\u7F29\u56FE\u7247\u6587\u4EF6</td></tr><tr><td>eslint-loader</td><td>\u901A\u8FC7 ESLint \u68C0\u67E5 JavaScript \u4EE3\u7801</td></tr></tbody></table><h2 id="\u5E38\u89C1\u7684plugin\u53CA\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u7684plugin\u53CA\u4F5C\u7528" aria-hidden="true">#</a> \u5E38\u89C1\u7684Plugin\u53CA\u4F5C\u7528</h2><h3 id="html-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#html-webpack-plugin" aria-hidden="true">#</a> html-webpack-plugin</h3><p>\u5728\u5185\u5B58\u4E2D\u751F\u6210html \u9875\u9762\u7684\u63D2\u4EF6;\u5E76\u52A0\u4E0A<code>&lt;script src=&quot;bundle.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</code></p><h3 id="webpack-defineplugin" tabindex="-1"><a class="header-anchor" href="#webpack-defineplugin" aria-hidden="true">#</a> webpack.DefinePlugin</h3><p>\u5728\u6253\u5305\u8FC7\u7A0B\u4E2D<code>\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF</code>(\u5B9A\u4E49\u73AF\u5883\u53D8\u91CF)\uFF0C\u4E3B\u8981\u7528\u4E8E\u544A\u8BC9\u4E1A\u52A1\u4EE3\u7801\u5F53\u524D\u73AF\u5883\uFF0C\u662F\u751F\u4EA7\u73AF\u5883\u8FD8\u5F97\u5F00\u53D1\u73AF\u5883\u3002\u4E4B\u540E\u5C31\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u73AF\u5883\u8FDB\u884C\u4E0D\u540C\u64CD\u4F5C\uFF0C\u6BD4\u5982\u751F\u4EA7\u73AF\u5883\u8981\u538B\u7F29\uFF0C\u5F00\u53D1\u73AF\u5883\u4E0D\u9700\u8981\u538B\u7F29</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">&#39;p<wbr>rocess.env&#39;</span><span class="token operator">:</span> env
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="uglifyjs-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#uglifyjs-webpack-plugin" aria-hidden="true">#</a> uglifyjs-webpack-plugin</h3><p>\u901A\u8FC7UglifyES\u538B\u7F29ES6\u4EE3\u7801</p><h3 id="commons-chunk-plugin" tabindex="-1"><a class="header-anchor" href="#commons-chunk-plugin" aria-hidden="true">#</a> commons-chunk-plugin</h3><p>\u63D0\u53D6\u516C\u5171\u4EE3\u7801</p><h2 id="loader\u548Cplugin\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#loader\u548Cplugin\u7684\u533A\u522B" aria-hidden="true">#</a> Loader\u548CPlugin\u7684\u533A\u522B</h2><p>\u7531\u4E8E webpack \u672C\u8EAB\u53EA\u80FD\u6253\u5305commonjs\u89C4\u8303\u7684js\u6587\u4EF6\uFF0C\u6240\u4EE5\uFF0C\u9488\u5BF9css\uFF0C\u56FE\u7247\u7B49\u683C\u5F0F\u7684\u6587\u4EF6\u6CA1\u6CD5\u6253\u5305\uFF0C\u5C31\u9700\u8981\u5F15\u5165\u7B2C\u4E09\u65B9\u7684\u6A21\u5757\u8FDB\u884C\u6253\u5305\u3002</p><h3 id="\u529F\u80FD\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u4E0D\u540C" aria-hidden="true">#</a> \u529F\u80FD\u4E0D\u540C</h3><p>Loader\uFF1A\u52A0\u8F7D\u5668\uFF0C\u4F5C\u7528\u662F\u4E3A\u4E86<strong>\u8F6C\u5316\u6587\u4EF6</strong>\uFF0C\u5B8C\u6210\u538B\u7F29\u6253\u5305\uFF0C\u6BD4\u5982</p><ul><li>css-loader\u548Cstyle-loader\u6A21\u5757\u662F\u4E3A\u4E86\u6253\u5305css\u7684</li><li>babel-loader\u548Cbabel-core\u6A21\u5757\u65F6\u4E3A\u4E86\u628AES6\u7684\u4EE3\u7801\u8F6C\u6210ES5</li><li>url-loader\u548Cfile-loader\u662F\u628A\u56FE\u7247\u8FDB\u884C\u6253\u5305\u7684</li></ul><p>Plugin: \u63D2\u4EF6\uFF0C\u4F5C\u7528\u4E8Ewebpack\u672C\u8EAB\u4E0A\u7684\u3002\u800C\u4E14plugin\u4E0D\u4EC5\u53EA\u5C40\u9650\u5728\u6253\u5305\uFF0C\u8D44\u6E90\u7684\u52A0\u8F7D\u4E0A\uFF0C\u5B83\u7684\u529F\u80FD\u8981\u66F4\u52A0\u4E30\u5BCC\u3002\u4ECE\u6253\u5305\u4F18\u5316\u548C\u538B\u7F29\uFF0C\u5230\u91CD\u65B0\u5B9A\u4E49\u73AF\u5883\u53D8\u91CF\uFF0C\u529F\u80FD\u5F3A\u5927\u5230\u53EF\u4EE5\u7528\u6765\u5904\u7406\u5404\u79CD\u5404\u6837\u7684\u4EFB\u52A1\u3002webpack\u63D0\u4F9B\u4E86\u5F88\u591A\u5F00\u7BB1\u5373\u7528\u7684\u63D2\u4EF6\uFF1ACommonChunkPlugin\u4E3B\u8981\u7528\u4E8E\u63D0\u53D6\u7B2C\u4E09\u65B9\u5E93\u548C\u516C\u5171\u6A21\u5757\uFF0C\u907F\u514D\u9996\u5C4F\u52A0\u8F7D\u7684bundle\u6587\u4EF6\uFF0C\u6216\u8005\u6309\u9700\u52A0\u8F7D\u7684bundle\u6587\u4EF6\u4F53\u79EF\u8FC7\u5927\uFF0C\u5BFC\u81F4\u52A0\u8F7D\u65F6\u95F4\u8FC7\u957F\uFF0C\u662F\u4E00\u628A\u4F18\u5316\u7684\u5229\u5668\u3002\u800C\u5728\u591A\u9875\u9762\u5E94\u7528\u4E2D\uFF0C\u66F4\u662F\u80FD\u591F\u4E3A\u6BCF\u4E2A\u9875\u9762\u95F4\u7684\u5E94\u7528\u7A0B\u5E8F\u5171\u4EAB\u4EE3\u7801\u521B\u5EFAbundle</p><h3 id="\u8FD0\u884C\u65F6\u673A\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u65F6\u673A\u4E0D\u540C" aria-hidden="true">#</a> \u8FD0\u884C\u65F6\u673A\u4E0D\u540C</h3><ol><li>loader\u8FD0\u884C\u5728\u6253\u5305\u6587\u4EF6\u4E4B\u524D\uFF08loader\u4E3A\u5728\u6A21\u5757\u52A0\u8F7D\u65F6\u7684\u9884\u5904\u7406\u6587\u4EF6\uFF09</li><li>plugins\u5728\u6574\u4E2A\u7F16\u8BD1\u5468\u671F\u90FD\u8D77\u4F5C\u7528</li></ol><h2 id="\u662F\u5426\u5199\u8FC7loader\u548Cplugin" tabindex="-1"><a class="header-anchor" href="#\u662F\u5426\u5199\u8FC7loader\u548Cplugin" aria-hidden="true">#</a> \u662F\u5426\u5199\u8FC7Loader\u548CPlugin</h2><h2 id="webpack\u7684\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#webpack\u7684\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> webpack\u7684\u751F\u547D\u5468\u671F</h2><p>webpack\u7684\u6784\u5EFA\u6D41\u7A0B\u662F\u4EC0\u4E48?\u4ECE\u8BFB\u53D6\u914D\u7F6E\u5230\u8F93\u51FA\u6587\u4EF6\u8FD9\u4E2A\u8FC7\u7A0B\u5C3D\u91CF\u8BF4\u5168\uFF1F</p><p>Webpack \u7684\u8FD0\u884C\u6D41\u7A0B\u662F\u4E00\u4E2A\u4E32\u884C\u7684\u8FC7\u7A0B\uFF0C\u4ECE\u542F\u52A8\u5230\u7ED3\u675F\u4F1A\u4F9D\u6B21\u6267\u884C\u4EE5\u4E0B\u6D41\u7A0B\uFF1A</p><ol><li><strong>\u521D\u59CB\u5316\u53C2\u6570</strong>\uFF1A\u4ECE\u914D\u7F6E\u6587\u4EF6\u548C <code>Shell</code> \u8BED\u53E5\u4E2D\u8BFB\u53D6\u4E0E\u5408\u5E76\u53C2\u6570\uFF0C\u5F97\u51FA\u6700\u7EC8\u7684\u53C2\u6570\uFF1B</li><li><strong>\u5F00\u59CB\u7F16\u8BD1</strong>\uFF1A\u7528\u4E0A\u4E00\u6B65\u5F97\u5230\u7684\u53C2\u6570\u521D\u59CB\u5316 <code>Compiler</code> \u5BF9\u8C61\uFF0C\u52A0\u8F7D\u6240\u6709\u914D\u7F6E\u7684\u63D2\u4EF6\uFF0C\u6267\u884C\u5BF9\u8C61\u7684 <code>run</code> \u65B9\u6CD5\u5F00\u59CB\u6267\u884C\u7F16\u8BD1\uFF1B</li><li><strong>\u786E\u5B9A\u5165\u53E3</strong>\uFF1A\u6839\u636E\u914D\u7F6E\u4E2D\u7684 <code>entry</code> \u627E\u51FA\u6240\u6709\u7684\u5165\u53E3\u6587\u4EF6\uFF1B</li><li><strong>\u7F16\u8BD1\u6A21\u5757</strong>\uFF1A\u4ECE\u5165\u53E3\u6587\u4EF6\u51FA\u53D1\uFF0C\u8C03\u7528\u6240\u6709\u914D\u7F6E\u7684 <code>Loader</code> \u5BF9\u6A21\u5757\u8FDB\u884C\u7FFB\u8BD1\uFF0C\u518D\u627E\u51FA\u8BE5\u6A21\u5757\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u518D\u9012\u5F52\u672C\u6B65\u9AA4\u76F4\u5230\u6240\u6709\u5165\u53E3\u4F9D\u8D56\u7684\u6587\u4EF6\u90FD\u7ECF\u8FC7\u4E86\u672C\u6B65\u9AA4\u7684\u5904\u7406\uFF1B</li><li><strong>\u5B8C\u6210\u6A21\u5757\u7F16\u8BD1</strong>\uFF1A\u5728\u7ECF\u8FC7\u7B2C4\u6B65\u4F7F\u7528 <code>Loader</code> \u7FFB\u8BD1\u5B8C\u6240\u6709\u6A21\u5757\u540E\uFF0C\u5F97\u5230\u4E86\u6BCF\u4E2A\u6A21\u5757\u88AB\u7FFB\u8BD1\u540E\u7684\u6700\u7EC8\u5185\u5BB9\u4EE5\u53CA\u5B83\u4EEC\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF1B</li><li><strong>\u8F93\u51FA\u8D44\u6E90</strong>\uFF1A\u6839\u636E\u5165\u53E3\u548C\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7EC4\u88C5\u6210\u4E00\u4E2A\u4E2A\u5305\u542B\u591A\u4E2A\u6A21\u5757\u7684 <code>Chunk</code>\uFF0C\u518D\u628A\u6BCF\u4E2A <code>Chunk</code> \u8F6C\u6362\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u52A0\u5165\u5230\u8F93\u51FA\u5217\u8868\uFF0C\u8FD9\u6B65\u662F\u53EF\u4EE5\u4FEE\u6539\u8F93\u51FA\u5185\u5BB9\u7684\u6700\u540E\u673A\u4F1A\uFF1B</li><li><strong>\u8F93\u51FA\u5B8C\u6210</strong>\uFF1A\u5728\u786E\u5B9A\u597D\u8F93\u51FA\u5185\u5BB9\u540E\uFF0C\u6839\u636E\u914D\u7F6E\u786E\u5B9A\u8F93\u51FA\u7684\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\uFF0C\u628A\u6587\u4EF6\u5185\u5BB9\u5199\u5165\u5230\u6587\u4EF6\u7CFB\u7EDF\u3002</li></ol><p>\u5728\u4EE5\u4E0A\u8FC7\u7A0B\u4E2D\uFF0CWebpack \u4F1A\u5728\u7279\u5B9A\u7684\u65F6\u95F4\u70B9\u5E7F\u64AD\u51FA\u7279\u5B9A\u7684\u4E8B\u4EF6\uFF0C\u63D2\u4EF6\u5728\u76D1\u542C\u5230\u611F\u5174\u8DA3\u7684\u4E8B\u4EF6\u540E\u4F1A\u6267\u884C\u7279\u5B9A\u7684\u903B\u8F91\uFF0C\u5E76\u4E14\u63D2\u4EF6\u53EF\u4EE5\u8C03\u7528 Webpack \u63D0\u4F9B\u7684 API \u6539\u53D8 Webpack \u7684\u8FD0\u884C\u7ED3\u679C\u3002</p><h2 id="webpack\u7684\u70ED\u66F4\u65B0\u662F\u5982\u4F55\u505A\u5230\u7684" tabindex="-1"><a class="header-anchor" href="#webpack\u7684\u70ED\u66F4\u65B0\u662F\u5982\u4F55\u505A\u5230\u7684" aria-hidden="true">#</a> webpack\u7684\u70ED\u66F4\u65B0\u662F\u5982\u4F55\u505A\u5230\u7684</h2><p>\u70ED\u66F4\u65B0\uFF08Hot Module Replacement\uFF0C\u7B80\u79F0HMR\uFF09\u65E0\u9700\u5B8C\u5168\u5237\u65B0\u6574\u4E2A\u9875\u9762\u7684\u540C\u65F6\uFF0C\u66F4\u65B0\u6A21\u5757</p><p>WDS (webpack-dev-server\u63D2\u4EF6)\u7684\u6A21\u5757\u70ED\u66FF\u6362</p><ol><li>\u4F7F\u7528<code>weback.HotModuleReplacementPlugin</code>,\u4F1A\u751F\u6210\u4E24\u4E2A\u8865\u4E01\u6587\u4EF6\uFF1A</li></ol><ul><li>\u4E0A\u4E00\u6B21\u7F16\u8BD1\u751F\u6210\u7684<code>hash.hot-update.json</code>,\u8BF4\u660E\u4E0A\u6B21\u7F16\u8BD1\u5230\u73B0\u5728\u54EA\u4E9B\u4EE3\u7801\u5757\u53D1\u751F\u6539\u53D8</li><li>chunk\u540D\u5B57\uFF0C\u4E0A\u4E00\u6B21\u7F16\u8BD1\u751F\u6210\u7684<code>hash.hot-update.js</code>\uFF0C\u5B58\u653E\u7740\u6B64\u6B21\u4EE3\u7801\u5757\u6700\u65B0\u7684\u6A21\u5757\u5B9A\u4E49\uFF0C\u91CC\u9762\u4F1A\u7528<code>webpackHotUpdate</code>\u65B9\u6CD5</li></ul><ol start="2"><li><p>\u5411\u4EE3\u7801\u5FEB\u4E2D\u6CE8\u5165HMR runtime\u4EE3\u7801\uFF0C\u70ED\u66F4\u65B0\u7684\u4E3B\u8981\u903B\u8F91\uFF0C\u6BD4\u5982\u62C9\u53D6\u62C9\u53D6\u4EE3\u7801\uFF0C\u6267\u884C\u4EE3\u7801\uFF0C\u6267\u884C<code>accept</code>\u56DE\u8C03\u90FD\u662F\u5B83\u6CE8\u5165\u7684\u5230chunk\u4E2D\u7684</p></li><li><p><code>hotCreateRequire</code>\u4F1A\u5E2E\u52A9\u6211\u4EEC\u7ED9\u6A21\u5757module\u7684<code>parents</code>\uFF0C<code>children</code>\u8D4B\u503C</p></li></ol><h2 id="module-chunk-bundle\u5206\u522B\u4EC0\u4E48\u610F\u601D-\u6709\u4F55\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#module-chunk-bundle\u5206\u522B\u4EC0\u4E48\u610F\u601D-\u6709\u4F55\u533A\u522B" aria-hidden="true">#</a> module chunk bundle\u5206\u522B\u4EC0\u4E48\u610F\u601D\uFF0C\u6709\u4F55\u533A\u522B</h2><ul><li>module - \u5404\u6E90\u7801\u6587\u4EF6</li><li>chunk - \u591A\u6A21\u5757\u7684\u5408\u5E76\u6210\u7684\uFF0C\u5982entry\u3001import()\u3001splitChunk</li><li>bundle - \u6700\u7EC8\u7684\u8F93\u51FA\u6587\u4EF6</li></ul><h2 id="webpack\u5982\u4F55\u5B9E\u73B0\u61D2\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#webpack\u5982\u4F55\u5B9E\u73B0\u61D2\u52A0\u8F7D" aria-hidden="true">#</a> webpack\u5982\u4F55\u5B9E\u73B0\u61D2\u52A0\u8F7D</h2><h2 id="webpack\u5E38\u89C1\u7684\u6027\u80FD\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#webpack\u5E38\u89C1\u7684\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a> webpack\u5E38\u89C1\u7684\u6027\u80FD\u4F18\u5316</h2><h2 id="\u5982\u4F55\u63D0\u9AD8webpack\u7684\u6784\u5EFA\u901F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u63D0\u9AD8webpack\u7684\u6784\u5EFA\u901F\u5EA6" aria-hidden="true">#</a> \u5982\u4F55\u63D0\u9AD8webpack\u7684\u6784\u5EFA\u901F\u5EA6</h2><h2 id="babel-runtime\u548Cbabel-polyfill\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#babel-runtime\u548Cbabel-polyfill\u7684\u533A\u522B" aria-hidden="true">#</a> babel-runtime\u548Cbabel-polyfill\u7684\u533A\u522B</h2><h2 id="webpack\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#webpack\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> webpack\u57FA\u672C\u914D\u7F6E</h2><p>https://www.cnblogs.com/gaoht/p/11310365.html</p>`,45),n=[i];function t(c,o){return a(),l("div",null,n)}var h=e(r,[["render",t],["__file","v4.html.vue"]]);export{h as default};