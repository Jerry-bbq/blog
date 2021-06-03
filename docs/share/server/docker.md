---
sidebar: auto
---

# Docker

## 安装Docker

查看镜像列表

```bash
docker images
```

```bash
# 查看所有正在运行容器
docker ps
# 停止,containerId 是容器的ID
docker stop containerId
# 删除所有已停止的容器
docker rm $(docker ps -a -q)
# 删除镜像
docker rmi imageId 
```

## 安装jenkins

### 搜索jenkins镜像

```bash
docker search jenkins
```

### 下载镜像文件

```bash
docker pull jenkinsci/blueocean
```

### 创建映射目录

```bash
mkdir /var/jenkins_home/
chown 1000:1000 /var/jenkins_home　　# docker容器中jenkins用户和用户组id为1000，需要修改后目录才能映射成功
```

### 启动容器

```bash
docker run -d -p 10240:8080 -v /var/jenkins_home/:/var/jenkins_home/ --name="Jenkins" jenkinsci/blueocean
```

- `-d` 后台运行镜像
- `-p 10240:8080` 将镜像的`8080`端口映射到服务器的`10240`端口。
- `-v /var/jenkins_home:/var/jenkins_home` `/var/jenkins_home`目录为容器jenkins工作目录，我们将硬盘上的一个目录挂载到这个位置，方便后续更新镜像后继续使用原来的工作目录。这里我们设置的就是上面我们创建的 `/var/jenkins_home`目录
- `-v /etc/localtime:/etc/localtime`让容器使用和服务器同样的时间设置。
- `--name="Jenkins"` 给容器起一个别名

### 查看jenkins是否启动成功

```bash
docker ps -l
```

### 解锁Jenkins

```bash
vim /var/jenkins_home/secrets/initialAdminPassword
```
