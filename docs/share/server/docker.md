
# Docker容器

Docker是一个在称为“容器”（或Docker容器）的孤立环境中可运行应用程序的平台。 像Jenkins这样的应用程序可以作为只读的“镜像”（或Docker镜像）下载， 每个镜像都作为容器在Docker中运行。Docker容器实际上是Docker镜像的“运行实例”。 从这个角度来看，镜像永久存储（只要镜像更新发布），而容器暂时存储

## Docker

```bash
yum install docker
```

### 镜像列表

```bash
docker images
```

输出信息 |REPOSITORY | TAG | IMAGE ID | CREATED | SIZE
--|--|--|--|--|--
示例 | jenkinsci/blueocean  | latest | 27841aff0161 | 40 hours ago |745MB
说明 | 镜像的仓库源 | 镜像的标签 | 镜像ID | 镜像创建时间 | 镜像大小

### 容器列表

```bash
# 查看正在运行的容器
docker ps
```

常用参数：

- -a:显示所有的容器，包括未运行的
- -l:显示最近创建的容器

输出信息 | CONTAINER ID | IMAGE | COMMAND | CREATED | STATUS | PORTS | NAMES
--|--|--|--|--|--|--|--
示例 | 45f4a118dddc | jenkinsci/blueocean |  "/sbin/tini -- /usr/…"  | 17 hours ago |  Exited (137) 9 minutes ago | PORTS | Jenkins
说明 | 容器 ID | 使用的镜像 | 启动容器时运行的命令 | 容器的创建时间 | 容器状态 | 容器的端口信息和使用的连接类型（tcp\udp） | 自动分配的容器名称

### 删除容器和镜像

```bash
# 停止,containerId 是容器的ID
docker stop containerId
# 删除所有已停止的容器
docker rm $(docker ps -a -q)
# 删除容器
docker rm containerId
# 删除镜像
docker rmi imageId 

# 重启容器
docker restart gitlab
# 查看一个容器的详情
docker inspect 容器ID/容器别名 
```

## nginx

### 安装

```bash
# 搜索镜像
docker search nginx
# 拉取镜像,官方推荐`jenkinsci/blueocean`
docker pull nginx
```

### 运行容器

```bash
docker run -d -p 8000:80 --name nginx nginx
```

### 访问

`http:ip:8000`

### 修改nginx配置

将nginx容器内部配置文件挂载到主机(把docker里面的nginx相关配置指向方便修改的目录)

```bash
mkdir -p /usr/local/docker_nginx/www/html /usr/local/docker_nginx/logs /usr/local/docker_nginx/conf
```

复制docker里面的nginx配置到以上目录

```bash
# 拿到containerID
docker ps
# 复制
docker cp c155f99aa501:/etc/nginx/nginx.conf /usr/local/docker_nginx/conf
```

### 关闭并移除nginx容器

```bash
docker stop nginx
docker rm $(docker ps -a -q)
```

### 正式启动nginx

```bash
docker run -d -p 8000:80 -v /usr/local/docker_nginx/www/html:/usr/share/nginx/html -v /usr/local/docker_nginx/conf:/etc/nginx/nginx -v /usr/local/docker_nginx/logs:/var/log/nginx --name nginx nginx
```

默认访问页面是403，是因为`/usr/local/docker_nginx/www/html`下没有`index.html`文件

## Jenkins

Jenkins是一款开源 CI&CD 软件，用于自动化各种任务，包括构建、测试和部署软件。

[官方推荐安装](https://www.jenkins.io/zh/doc/book/installing/)

### 安装

```bash
# 搜索镜像
docker search jenkins
# 拉取镜像,官方推荐`jenkinsci/blueocean`
docker pull jenkinsci/blueocean
```

### 创建映射目录

```bash
mkdir /var/jenkins_home/
chown 1000:1000 /var/jenkins_home　　# docker容器中jenkins用户和用户组id为1000，需要修改后目录才能映射成功
```

### 启动容器

```bash
docker run -d -p 9000:8080 -v /var/jenkins_home/:/var/jenkins_home/ --name="jenkins" jenkinsci/blueocean
```

- `-d` 在后台运行容器（即“分离”模式）并输出容器ID
- `-p 9000:8080` 将容器的`8080`端口映射到服务器的`9000`端口
- `-v /var/jenkins_home:/var/jenkins_home` `/var/jenkins_home`目录为容器jenkins工作目录，我们将硬盘上的一个目录挂载到这个位置，方便后续更新镜像后继续使用原来的工作目录。这里我们设置的就是上面我们创建的 `/var/jenkins_home`目录
- `-v /etc/localtime:/etc/localtime`让容器使用和服务器同样的时间设置
- `--name="Jenkins"` 给容器起一个别名

### 是否启动成功

```bash
docker ps
# 重新启动
docker restart jenkins
```

### 访问

`http://ip:9000`

### 解锁Jenkins

```bash
vim /var/jenkins_home/secrets/initialAdminPassword
```

## Gitlab

### 安装

```bash
# 搜索镜像
docker search gitlab
# 拉取镜像
docker pull gitlab/gitlab-ce
```

### 创建挂载的目录

将gitLab 的配置 (config) 、 日志 (logs) 、数据 (data) 放到容器之外， 便于日后升级

```bash
mkdir -p /var/gitlab/config
mkdir -p /var/gitlab/logs
mkdir -p /var/gitlab/data
```

### 启动容器

```bash
docker run -d -p 8443:443 -p 8099:80 -v /var/gitlab/config:/etc/gitlab -v /var/gitlab/logs:/var/log/gitlab -v /var/gitlab/data:/var/opt/gitlab --name="gitlab" gitlab/gitlab-ce
# -d：后台运行
# -p：将容器内部端口向外映射
# --name：命名容器名称
# -v：将容器内数据文件夹或者日志、配置等文件夹挂载到宿主机指定目录
```

### 配置gitLab主机名

```bash
vim /var/gitlab/config/gitlab.rb
```

```json
# 配置http协议所使用的访问地址,不加端口号默认为80
external_url 'http://120.53.120.55'
#
# 配置ssh协议所使用的访问地址和端口
gitlab_rails['gitlab_ssh_host'] = '120.53.120.55'
gitlab_rails['gitlab_shell_ssh_port'] = 2222 # 此端口是run时22端口映射的2222端口
```

修改`/var/gitlab/data/gitlab-rails/etc/gitlab.yml`:

```bash
# 将port改为8099
/var/gitlab/data/gitlab-rails/etc/gitlab.yml
```

### 访问

通过访问`http://ip:8099`来访问gitlab

::: danger 警告

如果服务器内存太小（低于2G），是无法运行gitlab的,提示如下：

`Whoops, GitLab is taking too much time to respond.`

:::

## 禅道

[官方推荐](https://www.zentao.net/book/zentaopmshelp/405.html#5)

### 安装

```bash
# 搜索镜像
docker search zentao
# 拉取镜像
docker pull easysoft/zentao:12.5.3
```

### 启动容器

```bash
docker run -d -p 8088:80 -v /www/zentaopms:/www/zentaopms -v /www/mysqldata:/var/lib/mysql --name zentao easysoft/zentao:12.5.3
```

### 访问

`http://ip:8088`