import{_ as o,r as c,o as p,c as l,a as n,b as e,d as s,e as t}from"./app.66d69c51.js";const i={},r=n("h1",{id:"nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx","aria-hidden":"true"},"#"),s(" NGINX")],-1),m=n("h2",{id:"centos\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#centos\u5B89\u88C5","aria-hidden":"true"},"#"),s(" centos\u5B89\u88C5")],-1),g={href:"http://nginx.org/en/linux_packages.html#RHEL-CentOS",target:"_blank",rel:"noopener noreferrer"},d=s("\u901A\u8FC7yum\u5B89\u88C5"),u=t(`<p>\u7F16\u8F91\u6587\u4EF6</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/yum.repos.d/nginx.repo
</code></pre></div><p>\u8F93\u5165\u5185\u5BB9\u5982\u4E0B\uFF1A\uFF08\u53C2\u8003\u5B98\u7F51\uFF09</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span>nginx-stable<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>nginx stable repo
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://nginx.org/packages/centos/<span class="token variable">$releasever</span>/<span class="token variable">$basearch</span>/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>https://nginx.org/keys/nginx_signing.key
<span class="token assign-left variable">module_hotfixes</span><span class="token operator">=</span>true
</code></pre></div><p>\u5B89\u88C5\u5E76\u67E5\u770B\u7248\u672C\u53F7</p><div class="language-bash ext-sh"><pre class="language-bash"><code>yum <span class="token function">install</span> nginx
nginx -v
</code></pre></div><p>\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> nginx
</code></pre></div><p>\u542F\u52A8Nginx</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start nginx

</code></pre></div><p>\u67E5\u770B\u72B6\u6001</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl status nginx
</code></pre></div><h2 id="nginx\u7684\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#nginx\u7684\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> Nginx\u7684\u914D\u7F6E\u6587\u4EF6</h2><p>\u67E5\u770Bnginx\u90FD\u5B89\u88C5\u5230\u4E86\u54EA\u4E9B\u76EE\u5F55</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">rpm</span> -ql nginx
</code></pre></div>`,15),h={href:"https://juejin.im/post/6844904020360986631#heading-6",target:"_blank",rel:"noopener noreferrer"},k=s("\u53C2\u8003"),x=t(`<h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h3><p>\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/nginx/conf.d/default.conf
</code></pre></div><p><code>default.conf</code>\u9ED8\u8BA4\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span> <span class="token comment">#\u914D\u7F6E\u76D1\u542C\u7AEF\u53E3</span>
    server_name  localhost<span class="token punctuation">;</span> <span class="token comment">#\u914D\u7F6E\u57DF\u540D</span>

    <span class="token comment">#charset koi8-r;</span>
    <span class="token comment">#access_log  /var/log/nginx/host.access.log  main;</span>

    location / <span class="token punctuation">{</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span> <span class="token comment">#\u670D\u52A1\u9ED8\u8BA4\u542F\u52A8\u76EE\u5F55</span>
        index  index.html index.htm<span class="token punctuation">;</span> <span class="token comment">#\u9ED8\u8BA4\u8BBF\u95EE\u6587\u4EF6</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#error_page  404              /404.html;# \u914D\u7F6E404\u9875\u9762</span>

    <span class="token comment"># redirect server error pages to the static page /50x.html</span>
    <span class="token comment">#</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span><span class="token comment">#\u9519\u8BEF\u72B6\u6001\u7801\u7684\u663E\u793A\u9875\u9762\uFF0C\u914D\u7F6E\u540E\u9700\u8981\u91CD\u542F</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
    <span class="token comment">#</span>
    <span class="token comment">#location ~ \\.php$ {</span>
    <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
    <span class="token comment">#}</span>

    <span class="token comment"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
    <span class="token comment">#</span>
    <span class="token comment">#location ~ \\.php$ {</span>
    <span class="token comment">#    root           html;</span>
    <span class="token comment">#    fastcgi_pass   127.0.0.1:9000;</span>
    <span class="token comment">#    fastcgi_index  index.php;</span>
    <span class="token comment">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
    <span class="token comment">#    include        fastcgi_params;</span>
    <span class="token comment">#}</span>

    <span class="token comment"># deny access to .htaccess files, if Apache&#39;s document root</span>
    <span class="token comment"># concurs with nginx&#39;s one</span>
    <span class="token comment">#</span>
    <span class="token comment">#location ~ /\\.ht {</span>
    <span class="token comment">#    deny  all;</span>
    <span class="token comment">#}</span>
<span class="token punctuation">}</span>


</code></pre></div><h3 id="\u72B6\u6001\u547D\u4EE4\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001\u547D\u4EE4\u7BA1\u7406" aria-hidden="true">#</a> \u72B6\u6001\u547D\u4EE4\u7BA1\u7406</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5173\u95ED nginx</span>
<span class="token function">sudo</span> systemctl stop nginx

<span class="token comment"># \u91CD\u542F nginx</span>
<span class="token function">sudo</span> systemctl restart nginx

<span class="token comment"># \u4FEE\u6539 nginx \u914D\u7F6E\u540E\u91CD\u65B0\u52A0\u8F7D</span>
<span class="token function">sudo</span> systemctl reload nginx

<span class="token comment"># \u8BBE\u7F6E\u5F00\u673A\u542F\u52A8 nginx</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> nginx

<span class="token comment"># \u5173\u95ED\u5F00\u673A\u542F\u52A8 nginx</span>
<span class="token function">sudo</span> systemctl disable nginx

<span class="token comment"># \u67E5\u770B nginx \u72B6\u6001</span>
<span class="token function">sudo</span> systemctl status nginx
</code></pre></div>`,7);function b(f,_){const a=c("ExternalLinkIcon");return p(),l("div",null,[r,m,n("p",null,[n("a",g,[d,e(a)])]),u,n("p",null,[n("a",h,[k,e(a)])]),x])}var y=o(i,[["render",b],["__file","nginx.html.vue"]]);export{y as default};
