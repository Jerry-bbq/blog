---
sidebar: auto
---

# cordova

Cordova 是使用HTML，CSS和JavaScript构建混合移动应用程序的平台

混合应用程序比本地应用程序慢，因此对于需要大量数据和功能的大型应用程序使用Cordova不是最佳选择。

[官网](https://cordova.apache.org/#getstarted)

## 全局安装

```bash
npm install -g cordova
cordova -v
```

## 创建工程

```bash
cordova create MyApp
```

生成的目录如下：

````
├── config.xml
├── package.json
└── www
    ├── css
    │   └── index.css
    ├── img
    │   └── logo.png
    ├── index.html
    └── js
        └── index.js
````

## 添加平台

```bash
cd MyApp 
# 添加平台
cordova platform add browser
# 删除平台
cordova platform rm android
```

查看支持哪些平台：

```bash
android ^10.1.1
browser ^6.0.0
electron ^3.0.0
ios ^6.2.0
osx ^6.0.0
```

## 添加插件

```bash
# 添加相机插件
cordova plugin add cordova-plugin-camera
# 蓝牙
cordova plugin add cordova-plugin-bluetooth 
# 查看已安装的插件
cordova plugin ls
```

## 运行环境检测

```bash
# 全部
cordova requirements
# ios
cordova requirements ios
# 安卓
cordova requirements andriod
```

## 运行项目

```bash
cordova run browser
cordova run andriod
cordova run ios
```