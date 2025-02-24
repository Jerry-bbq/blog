
# Nginx

## centos安装

[通过yum安装](http://nginx.org/en/linux_packages.html#RHEL-CentOS)

编辑文件

```sh
vim /etc/yum.repos.d/nginx.repo
```

输入内容如下：（参考官网）

```sh
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
```

安装并查看版本号

```sh
yum install nginx
nginx -v
```

设置开机启动

```sh
sudo systemctl enable nginx
```

启动Nginx

```sh
sudo systemctl start nginx

```

查看状态

```sh
sudo systemctl status nginx
```

## Nginx的配置文件

查看nginx都安装到了哪些目录

```sh
rpm -ql nginx
```

[参考](https://juejin.im/post/6844904020360986631#heading-6)

### 配置文件

编辑配置文件

```sh
vim /etc/nginx/conf.d/default.conf
```

`default.conf`默认内容如下：

```bash
server {
    listen       80; #配置监听端口
    server_name  localhost; #配置域名

    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html; #服务默认启动目录
        index  index.html index.htm; #默认访问文件
    }

    #error_page  404              /404.html;# 配置404页面

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;#错误状态码的显示页面，配置后需要重启
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}


```

### 状态命令管理

```sh
# 关闭 nginx
sudo systemctl stop nginx

# 重启 nginx
sudo systemctl restart nginx

# 修改 nginx 配置后重新加载
sudo systemctl reload nginx

# 设置开机启动 nginx
sudo systemctl enable nginx

# 关闭开机启动 nginx
sudo systemctl disable nginx

# 查看 nginx 状态
sudo systemctl status nginx
```
