(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{568:function(s,a,t){"use strict";t.r(a);var n=t(26),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker容器"}},[s._v("#")]),s._v(" Docker容器")]),s._v(" "),t("p",[s._v("Docker是一个在称为“容器”（或Docker容器）的孤立环境中可运行应用程序的平台。 像Jenkins这样的应用程序可以作为只读的“镜像”（或Docker镜像）下载， 每个镜像都作为容器在Docker中运行。Docker容器实际上是Docker镜像的“运行实例”。 从这个角度来看，镜像永久存储（只要镜像更新发布），而容器暂时存储")]),s._v(" "),t("h2",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"镜像列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像列表"}},[s._v("#")]),s._v(" 镜像列表")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker images\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("table",[t("thead",[t("tr",[t("th",[s._v("输出信息")]),s._v(" "),t("th",[s._v("REPOSITORY")]),s._v(" "),t("th",[s._v("TAG")]),s._v(" "),t("th",[s._v("IMAGE ID")]),s._v(" "),t("th",[s._v("CREATED")]),s._v(" "),t("th",[s._v("SIZE")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("示例")]),s._v(" "),t("td",[s._v("jenkinsci/blueocean")]),s._v(" "),t("td",[s._v("latest")]),s._v(" "),t("td",[s._v("27841aff0161")]),s._v(" "),t("td",[s._v("40 hours ago")]),s._v(" "),t("td",[s._v("745MB")])]),s._v(" "),t("tr",[t("td",[s._v("说明")]),s._v(" "),t("td",[s._v("镜像的仓库源")]),s._v(" "),t("td",[s._v("镜像的标签")]),s._v(" "),t("td",[s._v("镜像ID")]),s._v(" "),t("td",[s._v("镜像创建时间")]),s._v(" "),t("td",[s._v("镜像大小")])])])]),s._v(" "),t("h3",{attrs:{id:"容器列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器列表"}},[s._v("#")]),s._v(" 容器列表")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看正在运行的容器")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("常用参数：")]),s._v(" "),t("ul",[t("li",[s._v("-a:显示所有的容器，包括未运行的")]),s._v(" "),t("li",[s._v("-l:显示最近创建的容器")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("输出信息")]),s._v(" "),t("th",[s._v("CONTAINER ID")]),s._v(" "),t("th",[s._v("IMAGE")]),s._v(" "),t("th",[s._v("COMMAND")]),s._v(" "),t("th",[s._v("CREATED")]),s._v(" "),t("th",[s._v("STATUS")]),s._v(" "),t("th",[s._v("PORTS")]),s._v(" "),t("th",[s._v("NAMES")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("示例")]),s._v(" "),t("td",[s._v("45f4a118dddc")]),s._v(" "),t("td",[s._v("jenkinsci/blueocean")]),s._v(" "),t("td",[s._v('"/sbin/tini -- /usr/…"')]),s._v(" "),t("td",[s._v("17 hours ago")]),s._v(" "),t("td",[s._v("Exited (137) 9 minutes ago")]),s._v(" "),t("td",[s._v("PORTS")]),s._v(" "),t("td",[s._v("Jenkins")])]),s._v(" "),t("tr",[t("td",[s._v("说明")]),s._v(" "),t("td",[s._v("容器 ID")]),s._v(" "),t("td",[s._v("使用的镜像")]),s._v(" "),t("td",[s._v("启动容器时运行的命令")]),s._v(" "),t("td",[s._v("容器的创建时间")]),s._v(" "),t("td",[s._v("容器状态")]),s._v(" "),t("td",[s._v("容器的端口信息和使用的连接类型（tcp\\udp）")]),s._v(" "),t("td",[s._v("自动分配的容器名称")])])])]),s._v(" "),t("h3",{attrs:{id:"删除容器和镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除容器和镜像"}},[s._v("#")]),s._v(" 删除容器和镜像")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止,containerId 是容器的ID")]),s._v("\ndocker stop containerId\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除所有已停止的容器")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a -q"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除容器")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" containerId\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除镜像")]),s._v("\ndocker rmi imageId \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启容器")]),s._v("\ndocker restart gitlab\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看一个容器的详情")]),s._v("\ndocker inspect 容器ID/容器别名 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" nginx")]),s._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索镜像")]),s._v("\ndocker search nginx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取镜像,官方推荐`jenkinsci/blueocean`")]),s._v("\ndocker pull nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"运行容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行容器"}},[s._v("#")]),s._v(" 运行容器")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v(":80 --name nginx nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问"}},[s._v("#")]),s._v(" 访问")]),s._v(" "),t("p",[t("code",[s._v("http:ip:8000")])]),s._v(" "),t("h3",{attrs:{id:"修改nginx配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改nginx配置"}},[s._v("#")]),s._v(" 修改nginx配置")]),s._v(" "),t("p",[s._v("将nginx容器内部配置文件挂载到主机(把docker里面的nginx相关配置指向方便修改的目录)")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/docker_nginx/www/html /usr/local/docker_nginx/logs /usr/local/docker_nginx/conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("复制docker里面的nginx配置到以上目录")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拿到containerID")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" c155f99aa501:/etc/nginx/nginx.conf /usr/local/docker_nginx/conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"关闭并移除nginx容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭并移除nginx容器"}},[s._v("#")]),s._v(" 关闭并移除nginx容器")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker stop nginx\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a -q"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"正式启动nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正式启动nginx"}},[s._v("#")]),s._v(" 正式启动nginx")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v(":80 -v /usr/local/docker_nginx/www/html:/usr/share/nginx/html -v /usr/local/docker_nginx/conf:/etc/nginx/nginx -v /usr/local/docker_nginx/logs:/var/log/nginx --name nginx nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("默认访问页面是403，是因为"),t("code",[s._v("/usr/local/docker_nginx/www/html")]),s._v("下没有"),t("code",[s._v("index.html")]),s._v("文件")]),s._v(" "),t("h2",{attrs:{id:"jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jenkins"}},[s._v("#")]),s._v(" Jenkins")]),s._v(" "),t("p",[s._v("Jenkins是一款开源 CI&CD 软件，用于自动化各种任务，包括构建、测试和部署软件。")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.jenkins.io/zh/doc/book/installing/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方推荐安装"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"安装-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索镜像")]),s._v("\ndocker search jenkins\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取镜像,官方推荐`jenkinsci/blueocean`")]),s._v("\ndocker pull jenkinsci/blueocean\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"创建映射目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建映射目录"}},[s._v("#")]),s._v(" 创建映射目录")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /var/jenkins_home/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(":1000 /var/jenkins_home　　"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker容器中jenkins用户和用户组id为1000，需要修改后目录才能映射成功")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"启动容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动容器"}},[s._v("#")]),s._v(" 启动容器")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v(":8080 -v /var/jenkins_home/:/var/jenkins_home/ --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jenkins"')]),s._v(" jenkinsci/blueocean\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("-d")]),s._v(" 在后台运行容器（即“分离”模式）并输出容器ID")]),s._v(" "),t("li",[t("code",[s._v("-p 9000:8080")]),s._v(" 将容器的"),t("code",[s._v("8080")]),s._v("端口映射到服务器的"),t("code",[s._v("9000")]),s._v("端口")]),s._v(" "),t("li",[t("code",[s._v("-v /var/jenkins_home:/var/jenkins_home")]),s._v(" "),t("code",[s._v("/var/jenkins_home")]),s._v("目录为容器jenkins工作目录，我们将硬盘上的一个目录挂载到这个位置，方便后续更新镜像后继续使用原来的工作目录。这里我们设置的就是上面我们创建的 "),t("code",[s._v("/var/jenkins_home")]),s._v("目录")]),s._v(" "),t("li",[t("code",[s._v("-v /etc/localtime:/etc/localtime")]),s._v("让容器使用和服务器同样的时间设置")]),s._v(" "),t("li",[t("code",[s._v('--name="Jenkins"')]),s._v(" 给容器起一个别名")])]),s._v(" "),t("h3",{attrs:{id:"是否启动成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#是否启动成功"}},[s._v("#")]),s._v(" 是否启动成功")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新启动")]),s._v("\ndocker restart jenkins\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"访问-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问-2"}},[s._v("#")]),s._v(" 访问")]),s._v(" "),t("p",[t("code",[s._v("http://ip:9000")])]),s._v(" "),t("h3",{attrs:{id:"解锁jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解锁jenkins"}},[s._v("#")]),s._v(" 解锁Jenkins")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /var/jenkins_home/secrets/initialAdminPassword\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"gitlab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gitlab"}},[s._v("#")]),s._v(" Gitlab")]),s._v(" "),t("h3",{attrs:{id:"安装-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-3"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索镜像")]),s._v("\ndocker search gitlab\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取镜像")]),s._v("\ndocker pull gitlab/gitlab-ce\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"创建挂载的目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建挂载的目录"}},[s._v("#")]),s._v(" 创建挂载的目录")]),s._v(" "),t("p",[s._v("将gitLab 的配置 (config) 、 日志 (logs) 、数据 (data) 放到容器之外， 便于日后升级")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /var/gitlab/config\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /var/gitlab/logs\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /var/gitlab/data\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"启动容器-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动容器-2"}},[s._v("#")]),s._v(" 启动容器")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8443")]),s._v(":443 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8099")]),s._v(":80 -v /var/gitlab/config:/etc/gitlab -v /var/gitlab/logs:/var/log/gitlab -v /var/gitlab/data:/var/opt/gitlab --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gitlab"')]),s._v(" gitlab/gitlab-ce\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -d：后台运行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -p：将容器内部端口向外映射")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --name：命名容器名称")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v：将容器内数据文件夹或者日志、配置等文件夹挂载到宿主机指定目录")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"配置gitlab主机名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置gitlab主机名"}},[s._v("#")]),s._v(" 配置gitLab主机名")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /var/gitlab/config/gitlab.rb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("# 配置http协议所使用的访问地址"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("不加端口号默认为"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\nexternal_url 'http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//120.53.120.55'")]),s._v("\n#\n# 配置ssh协议所使用的访问地址和端口\ngitlab_rails"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("'gitlab_ssh_host'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" = '"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("120.53")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("120.55")]),s._v("'\ngitlab_rails"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("'gitlab_shell_ssh_port'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" = "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2222")]),s._v(" # 此端口是run时"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("端口映射的"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2222")]),s._v("端口\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("修改"),t("code",[s._v("/var/gitlab/data/gitlab-rails/etc/gitlab.yml")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将port改为8099")]),s._v("\n/var/gitlab/data/gitlab-rails/etc/gitlab.yml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"访问-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问-3"}},[s._v("#")]),s._v(" 访问")]),s._v(" "),t("p",[s._v("通过访问"),t("code",[s._v("http://ip:8099")]),s._v("来访问gitlab")]),s._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),t("p",[s._v("如果服务器内存太小（低于2G），是无法运行gitlab的,提示如下：")]),s._v(" "),t("p",[t("code",[s._v("Whoops, GitLab is taking too much time to respond.")])])]),s._v(" "),t("h2",{attrs:{id:"禅道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#禅道"}},[s._v("#")]),s._v(" 禅道")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.zentao.net/book/zentaopmshelp/405.html#5",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方推荐"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"安装-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-4"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索镜像")]),s._v("\ndocker search zentao\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取镜像")]),s._v("\ndocker pull easysoft/zentao:12.5.3\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"启动容器-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动容器-3"}},[s._v("#")]),s._v(" 启动容器")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8088")]),s._v(":80 -v /www/zentaopms:/www/zentaopms -v /www/mysqldata:/var/lib/mysql --name zentao easysoft/zentao:12.5.3\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"访问-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问-4"}},[s._v("#")]),s._v(" 访问")]),s._v(" "),t("p",[t("code",[s._v("http://ip:8088")])])])}),[],!1,null,null,null);a.default=e.exports}}]);