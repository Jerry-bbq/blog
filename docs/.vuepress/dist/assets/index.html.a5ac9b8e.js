import{_ as s,r as o,o as c,c as r,a,b as d,e as n,d as t}from"./app.1fc11eba.js";const i={},l=a("h1",{id:"cordova",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#cordova","aria-hidden":"true"},"#"),n(" cordova")],-1),p=a("p",null,"Cordova \u662F\u4F7F\u7528HTML\uFF0CCSS\u548CJavaScript\u6784\u5EFA\u6DF7\u5408\u79FB\u52A8\u5E94\u7528\u7A0B\u5E8F\u7684\u5E73\u53F0",-1),h=a("p",null,"\u6DF7\u5408\u5E94\u7528\u7A0B\u5E8F\u6BD4\u672C\u5730\u5E94\u7528\u7A0B\u5E8F\u6162\uFF0C\u56E0\u6B64\u5BF9\u4E8E\u9700\u8981\u5927\u91CF\u6570\u636E\u548C\u529F\u80FD\u7684\u5927\u578B\u5E94\u7528\u7A0B\u5E8F\u4F7F\u7528Cordova\u4E0D\u662F\u6700\u4F73\u9009\u62E9\u3002",-1),u={href:"https://cordova.apache.org/#getstarted",target:"_blank",rel:"noopener noreferrer"},g=n("\u5B98\u7F51"),v=t(`<h2 id="\u5168\u5C40\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u5B89\u88C5" aria-hidden="true">#</a> \u5168\u5C40\u5B89\u88C5</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g cordova
cordova -v
</code></pre></div><h2 id="\u521B\u5EFA\u5DE5\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5DE5\u7A0B" aria-hidden="true">#</a> \u521B\u5EFA\u5DE5\u7A0B</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>cordova create MyApp
</code></pre></div><p>\u751F\u6210\u7684\u76EE\u5F55\u5982\u4E0B\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>\u251C\u2500\u2500 config.xml
\u251C\u2500\u2500 package.json
\u2514\u2500\u2500 www
    \u251C\u2500\u2500 css
    \u2502   \u2514\u2500\u2500 index.css
    \u251C\u2500\u2500 img
    \u2502   \u2514\u2500\u2500 logo.png
    \u251C\u2500\u2500 index.html
    \u2514\u2500\u2500 js
        \u2514\u2500\u2500 index.js
</code></pre></div><h2 id="\u6DFB\u52A0\u5E73\u53F0" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5E73\u53F0" aria-hidden="true">#</a> \u6DFB\u52A0\u5E73\u53F0</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> MyApp 
<span class="token comment"># \u6DFB\u52A0\u5E73\u53F0</span>
cordova platform <span class="token function">add</span> browser
<span class="token comment"># \u5220\u9664\u5E73\u53F0</span>
cordova platform <span class="token function">rm</span> android
</code></pre></div><p>\u67E5\u770B\u652F\u6301\u54EA\u4E9B\u5E73\u53F0\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>android ^10.1.1
browser ^6.0.0
electron ^3.0.0
ios ^6.2.0
osx ^6.0.0
</code></pre></div><h2 id="\u6DFB\u52A0\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u63D2\u4EF6" aria-hidden="true">#</a> \u6DFB\u52A0\u63D2\u4EF6</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u6DFB\u52A0\u76F8\u673A\u63D2\u4EF6</span>
cordova plugin <span class="token function">add</span> cordova-plugin-camera
<span class="token comment"># \u84DD\u7259</span>
cordova plugin <span class="token function">add</span> cordova-plugin-bluetooth 
<span class="token comment"># \u67E5\u770B\u5DF2\u5B89\u88C5\u7684\u63D2\u4EF6</span>
cordova plugin <span class="token function">ls</span>
</code></pre></div><h2 id="\u8FD0\u884C\u73AF\u5883\u68C0\u6D4B" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u73AF\u5883\u68C0\u6D4B" aria-hidden="true">#</a> \u8FD0\u884C\u73AF\u5883\u68C0\u6D4B</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5168\u90E8</span>
cordova requirements
<span class="token comment"># ios</span>
cordova requirements ios
<span class="token comment"># \u5B89\u5353</span>
cordova requirements andriod
</code></pre></div><h2 id="\u8FD0\u884C\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u9879\u76EE" aria-hidden="true">#</a> \u8FD0\u884C\u9879\u76EE</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>cordova run browser
cordova run andriod
cordova run ios
</code></pre></div>`,16);function m(x,b){const e=o("ExternalLinkIcon");return c(),r("div",null,[l,p,h,a("p",null,[a("a",u,[g,d(e)])]),v])}var f=s(i,[["render",m],["__file","index.html.vue"]]);export{f as default};
