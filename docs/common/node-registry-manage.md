
# NRM镜像管理

`nrm`(**Node Registry Manage**): npm的镜像管理

使用`nrm`切换`npm`和`cnpm`

`nrm`就是专门用来管理和快速切换私人配置的`registry`的一个工具。

## 安装

```bash
cnpm i nrm -g
```

## 查看列表

```bash
nrm ls
```

结果如下：

```bash
* npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
  taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
```

::: tip

`*` 所在的位置就是当前环境所使用的源

:::

## 使用镜像

```bash
nrm use npm
```
