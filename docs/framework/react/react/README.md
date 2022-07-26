# React

用户构建用户界面的javascript库

```bash
# 全局安装 create-react-app 脚手架
sudo npm install -g create-react-app
# 创建应用
npx create-react-app react-demo
```

## 默认三个依赖的作用

### react

react核心库
### react-dom

- 作用是**将虚拟DOM渲染到文档中变成实际DOM**
- 是react开发项目时需要使用的工具包，提供了DOM特定的方法，可以在应用程序的顶层使用，也可以作为React模型之外的特殊操作DOM的接口

### react-scripts

为脚手架`create-react-app`提供脚本命令和webpack配置

```json
{
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    }
}
```

### web-vitals

可获取三个关键指标（CLS、FID、LCP）和两个辅助指标（FCP、TTFB），性能检测工具`reportWebVitals.js`

## 生命周期

- Mounting
  - constructor()
  - static getDerivedStateFromProps()
  - render()
  - componentDidMount()
- Updating
  - static getDerivedStateFromProps()
  - shouldComponentUpdate()
  - render()
  - getSnapshotBeforeUpdate()
  - componentDidUpdate()
- Unmounting
  - componentWillUnmount()
- Error Handling
  - static getDerivedStateFromError()
  - componentDidCatch()

