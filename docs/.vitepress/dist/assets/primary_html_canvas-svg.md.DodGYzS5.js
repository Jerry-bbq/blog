import{_ as s,c as i,o as a,V as t}from"./chunks/framework.jq6gLv6S.js";const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADcCAMAAAAshD+zAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAABgUExURQAAACYmJn5+fry8vOrq6kNDQ9zc3I6Ojm5ubp2dna2trVtbW87OzsjIyO/v7////zJfofb29v7+/uXl5ff39/39/fj4+Pz8/Pn5+fr6+szMzPv7+6enp+fn59DQ0PT09O486JcAAAQQSURBVHja7N2JjtowEAZgXzPkIi5H2wANvP9b1uFYtZtAE661p/8v8GqjCPxp7JhYK1Z5wVHAAQcccMABB5wAXON4v004e3bNNdyB2R0WCefgmA/DuIbbRfJpuRnEOV4ICLtBHDsJOMeDuP1BAu6wH8RtFyKyBS5ceoiolYqj+WJOQnFtB0uudCNx1oTGWKG4LDSZUNxCn58icXlpy1zsOmeTm3EjcOkscG0YWXY+CZfQAkfz9u86XMGtL2kpNNSuUwiTyf868C+cNaExNjQqWpS6dM3QehouC01mu1eIOsfOlnoabq3Pz/XQ5tjq9jE18rz7j/36s3KWZmYa7rjAxY27hHit20m4MOvs+j5cGC3vxBXmPIsm4D6mbey4fl6Je/ewBA444IADDjjggAMOOOCAux+36qe6fUyNPO/+Y6gccCPfmCvvaxsx7kc/43Gq9qZ8E+7HrbwA50vjNUvFsZqRl4rzpbJycTl5uThdyMVZ7eXiTCEY985PKMABBxxwwAH3JFyUeyio3L24uqi9raTOubKsdGK4pp8ruFqr/AuHZXMrD+P8TNdicYUqtVRcpaow7YY7844/j3pt5erjQyjui9e5J+KUGv3G3akJ4abn2/2Jv3Jp4SYOI+CAAw444IThpu95PIAbu4fyP1RuLheXG21CeCRu00+cuGPXLrjPXRaBuxbg4seZ7g7LCsVpJ7hyJHVYZkSkdWi2AnFbe47D1RK4qHCn3bbPs04ILrObLW0siV0KjN3IxGneOGKnReIKTcrkqpB5tXSWN+ywFAziotxDOY5JszFTblZ3/cRZua5nhdmdcJ+7LAF3NcDFj2NSnEnFkaUdSZ1zgbYzVm7lWDuhuC0pXeBqCVxcuIK63S+hOF10u19ilwKhwzIPn5l1KfSDc27OwV2BdNzPfuLE/bwV4E64KPdQUDnggAMOOOCAA24i7vXHgAMOOOCAexnuez9x4r7fCnD/Ae5V32ny0PehoHLAAQcccMABBxxwwAEHHHDAicAt+4kTt7wV4E64KPdQUDnggAMOOOCA+zfuV4x5Fm6ZXIADbmKsPf00MeCUepLugjKvHxBvx1Wq+sDlHAnu2b3ocGRF4Gx2nF35LIjCrzMqMxOKqMPLGjJfj3ssimtVLPWpVDnVrC+Vs7XmxHGmnGnK6TQCOtQfw5Js4rha6Up3hes0Zb5cZvHgwlxZcvFQ6ah7nHBWF7mKCNd1pXqodMWyzi+rNpu8W8S7peC8IrwT17vJoNpmPrWMxdny03+okYTzZe7l4owFDrjocCkGOOCAiwG330mw7faDOK4l4GoexLmVBNzKDeIadunbHDeDOH/gVZ30vNvVKz74YZxvHO+3CWfPrvHXcNICHHDAAQcccMAlmt8CDABIbErQtEaWvQAAAABJRU5ErkJggg==",o=JSON.parse('{"title":"Canvas与SVG","description":"","frontmatter":{},"headers":[],"relativePath":"primary/html/canvas-svg.md","filePath":"primary/html/canvas-svg.md","lastUpdated":1707833604000}'),l={name:"primary/html/canvas-svg.md"},n=t(`<h1 id="canvas与svg" tabindex="-1">Canvas与SVG <a class="header-anchor" href="#canvas与svg" aria-label="Permalink to &quot;Canvas与SVG&quot;">​</a></h1><ol><li>SVG是一种使用XML描述2D图形的语言</li><li>canvas需要在js中绘制，而SVG只需要在html里面通过标签绘制即可</li></ol><h2 id="svg" tabindex="-1">SVG <a class="header-anchor" href="#svg" aria-label="Permalink to &quot;SVG&quot;">​</a></h2><ul><li><code>SVG</code> 指可伸缩矢量图形 (Scalable Vector Graphics)</li><li>适合做google地图，因为是矢量图，缩放不影响显示</li><li>用svg标签，里面可以是circle标签</li></ul><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100%&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">circle</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;300&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;60&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;50&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#ff0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> stroke-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;red&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ul><li><code>SVG</code> 是一种使用 <code>XML</code> 描述 2D 图形的语言</li><li><code>SVG</code> 基于 <code>XML</code>，这意味着 <code>SVG DOM</code> 中的每个元素都是可用的。您可以为某个元素附加 <code>JavaScript</code> 事件处理器</li><li>在 <code>SVG</code> 中，每个被绘制的图形均被视为对象。如果 <code>SVG</code> 对象的属性发生变化，那么浏览器能够自动重现图形</li></ul><p>特点：</p><ul><li>不依赖分辨率</li><li>支持事件处理器</li><li>最适合带有大型渲染区域的应用程序（比如谷歌地图）</li><li>复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）</li><li>不适合游戏应用</li></ul><h2 id="canvas" tabindex="-1">Canvas <a class="header-anchor" href="#canvas" aria-label="Permalink to &quot;Canvas&quot;">​</a></h2><ul><li><code>Canvas</code> 通过 <code>JavaScript</code> 来绘制 2D 图形</li><li><code>Canvas</code> 是逐像素进行渲染的</li><li>在 <code>Canvas</code> 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象</li></ul><p>特点：</p><ul><li>依赖分辨率</li><li>不支持事件处理器</li><li>弱的文本渲染能力</li><li>能够以 .png 或 .jpg 格式保存结果图像</li><li>最适合图像密集型的游戏，其中的许多对象会被频繁重绘</li></ul><h2 id="对比简述" tabindex="-1">对比简述 <a class="header-anchor" href="#对比简述" aria-label="Permalink to &quot;对比简述&quot;">​</a></h2><p>都是2D做图，svg是矢量图，canvas是位图。Canvas 是逐像素进行渲染的，适合游戏</p><h2 id="canvas绘图" tabindex="-1">canvas绘图 <a class="header-anchor" href="#canvas绘图" aria-label="Permalink to &quot;canvas绘图&quot;">​</a></h2><p>默认坐标系：</p><p><img src="`+h+`" alt="Canvas_default_grid"></p><p>canvas元素只有两个属性<code>width</code>、<code>height</code></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">canvas</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;canvas&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;200&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;200&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">canvas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取HTML元素的引用</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> canvas</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;canvas&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取元素的context</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> canvas.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="绘制矩形rect" tabindex="-1">绘制矩形Rect <a class="header-anchor" href="#绘制矩形rect" aria-label="Permalink to &quot;绘制矩形Rect&quot;">​</a></h3><ul><li>ctx.fillRect(x, y, width, height)：填充矩形（默认颜色时黑色）</li><li>ctx.strokeRect(x, y, width, height)：矩形边框</li><li>ctx.clearRect(x, y, width, height)：清除指定矩形区域，让清除部分完全透明</li><li>ctx.fillStyle = &#39;red&#39;：设置填充色（需要先设置填充色，在创建填充矩形，或者填充色失效）</li></ul><p>说明：</p><ul><li>x与y指定矩形的左上角（相对于原点）的坐标</li><li>width和height设置矩形的尺寸</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;en&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> http-equiv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;X-UA-Compatible&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;IE=edge&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;viewport&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Document&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">canvas</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;canvas&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;200&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;200&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;border: 1px solid #999;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">canvas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;btn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;清除&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;btn&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clearRect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        })</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 获取HTML元素的引用</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> canvas</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;canvas&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 获取元素的context</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> canvas.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 绘制矩形</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ctx.fillStyle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;red&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fillRect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">strokeRect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">150</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">150</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="绘制路径path" tabindex="-1">绘制路径Path <a class="header-anchor" href="#绘制路径path" aria-label="Permalink to &quot;绘制路径Path&quot;">​</a></h3><ul><li><p>创建路径起始点</p></li><li><p>使用画图命令</p></li><li><p>将路径封闭</p></li><li><p>路径生成后，可以描边或填充</p></li><li><p>ctx.beginPath()：创建一条路径</p></li><li><p>ctx.moveTo(x, y)：起始点</p></li><li><p>ctx.lineTo(x, y)：绘制一条从当前位置到指定x以及y位置的直线</p></li><li><p>ctx.closePath()：闭合路径（闭合当前点到起始点），非必须的</p></li><li><p>ctx.stroke()：通过线条来绘制图形轮廓</p></li><li><p>ctx.fill()：填充路径内容</p></li></ul><h3 id="绘制圆弧" tabindex="-1">绘制圆弧 <a class="header-anchor" href="#绘制圆弧" aria-label="Permalink to &quot;绘制圆弧&quot;">​</a></h3><ul><li>ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)：画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。</li></ul>`,29),k=[n];function p(e,E,d,r,g,c){return a(),i("div",null,k)}const F=s(l,[["render",p]]);export{o as __pageData,F as default};