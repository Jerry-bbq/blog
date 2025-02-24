
# 禅道

## 下载开源版本

[官方推荐安装文档](https://www.zentao.net/book/zentaopmshelp/40.html)

进入官网[禅道](https://www.zentao.net/)，找到开源版本，找到Linux对应的版本

## 安装过程

1. 进入`opt`目录

```sh
cd /opt
```

2. 将下载的安装包放置在该目录下

3. 解压安装包

```sh
tar -xzvf 安装包文件名 
```

4. 进入zbox文件夹

```sh
cd zbox/
```

5. 启动禅道Apache和Mysql

```sh
./zbox start
```

6. 修改禅道mysql的端口

```sh
vi etc/mysql/my.cnf
```

然后修改 client port = 3308 mysql port = 3308 保存退出

7. 修改php

```sh
vi app/zentao/config/my.php
```

然后修改port = 3308

8. 重启Apache和Mysql

```sh
./zbox restart
```

9. 在浏览器输入服务器IP地址：80，进入禅道

10. 原始账号密码admin/123456

11. 去掉禅道访问地址中的选择开源还是专业版本

[官网回复](https://www.zentao.net/book/zentaopmshelp/131.html)

- 进入Apache目录

```sh
cd /opt/zbox/etc/apache
```

- 打开`httpd.conf`文件，去掉`VirtualHost`注释

- 重启Apache