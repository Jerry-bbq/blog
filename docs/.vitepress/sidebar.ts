import { type DefaultTheme } from 'vitepress'

// 基础
export function getSidebarPrimary(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'HTML',
      collapsed: false,
      base: '/primary/html/',
      items: [
        { text: '声明文档类型DOCTYPE', link: 'doctype' },
        { text: '浏览器', link: 'rendering-engine' },
        { text: '浏览器的渲染过程', link: 'painting' },
        { text: '浏览器的回流与重绘', link: 'reflow-repaint' },
        { text: 'Canvas与SVG的区别', link: 'canvas-svg' },
        { text: '其他', link: 'other' },
      ],
    },
    {
      text: 'CSS',
      collapsed: false,
      base: '/primary/css/',
      items: [
        { text: '盒模型', link: 'box-model' },
        { text: 'BFC', link: 'bfc' },
        { text: 'flex', link: 'flex' },
        { text: '移动端适配', link: 'mobile-adaptation' },
        { text: '清除浮动', link: 'clear' },
        { text: '元素水平垂直居中', link: 'center' },
        { text: '页面布局', link: 'layout' },
        { text: 'CSS动画', link: 'animation' },
        { text: '其他', link: 'other' },
      ],
    },
    {
      text: 'JavaScript',
      collapsed: false,
      base: '/primary/javascript/',
      items: [
        { text: '数据类型及检测', link: 'data-types' },
        { text: '原型和原型链', link: 'prototype-chain' },
        { text: '改变this指向', link: 'change-this' },
        { text: '事件循环', link: 'event-loop' },
        { text: '通信', link: 'communications' },
        { text: '垃圾回收机制与内存泄漏', link: 'gc' },
        { text: '作用域和闭包', link: 'scope-closure' },
        { text: 'DOM事件', link: 'dom' },
        { text: 'HTTP', link: 'http' },
        { text: '安全-CSRF/XSS', link: 'safe' },
        { text: '性能优化', link: 'page-performance' },
        { text: '错误监控', link: 'error' },
        { text: 'ES6', link: 'es6' },
        { text: 'Coding', link: 'coding' },
        { text: '前端工程化', link: 'engineering' },
      ],
    },
    {
      text: 'TypeScript',
      collapsed: false,
      base: '/primary/typescript/',
      items: [{ text: 'TypeScript', link: 'index.md' }],
    },
  ]
}

// 进阶
export function getSidebarAdvanced(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '技术栈',
      collapsed: false,
      base: '/advanced/',
      items: [
        { text: '框架', link: 'framework/index.md' },
        { text: '打包工具', link: 'bundler/index.md' },
        { text: 'node', link: 'node/index.md' },
      ],
    },
    {
      text: '数据结构与算法',
      collapsed: false,
      base: '/advanced/dsa/',
      items: [
        { text: '概要', link: 'index.md' },
        { text: '时间复杂度和空间复杂度', link: 'algorithm/complexity' },
        { text: '二分查找', link: 'algorithm/binary-search' },
        { text: '排序', link: 'algorithm/sort' },
        { text: '递归', link: 'algorithm/recursion' },
        { text: '深度优先搜索和广度优先搜索', link: 'algorithm/dfs-bfs' },
        { text: '算法题', link: 'problem/index.md' },
      ],
    },
    { text: '设计模式', link: '/design-patterns/index.md' },
  ]
}

// 前端开发规范
export function getSidebarSpecification(): DefaultTheme.SidebarItem[] {
  return [
    { text: '开发流程', link: 'work-flow/index.md' },
    { text: '编码规范', link: 'convention' },
    { text: '命名规范', link: 'naming' },
    { text: 'Git提交规范', link: 'git-commit' },
    { text: 'Git分支管理规范', link: 'git-flow' },
    { text: '版本号管理规范', link: 'version' },
    { text: 'Code Review规范', link: 'cr' },
    { text: '规范工具', link: 'tools' },
    { text: '项目管理', link: 'work-flow/project-manage' },
  ]
}

// 分享
export function getSidebarShare(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'CLI脚手架', link: 'cli/index.md' },
    { text: 'Mock数据', link: 'mock/index.md' },
    { text: 'uni-app Q&A', link: 'uni-app/app' },
    { text: 'Vue2.0', link: 'vue/index.md' },
    { text: 'JavaScript', link: 'javascript/index.md' },
    { text: 'CSS相关问题', link: 'css/index.md' },
    { text: '埋点SDK', link: 'tracker/index.md' },
    { text: '单点登录', link: 'sso/index.md' },
    { text: '新手引导', link: 'intro' },
    { text: 'npm', link: 'npm/index.md' },
    { text: 'VS Code', link: 'vscode/index.md' },
    { text: 'NRM镜像管理', link: 'node-registry-manage' },
    { text: 'NVM版本管理', link: 'node-version-manager' },
    { text: 'Charles', link: 'charles' },
    { text: 'Git使用记录', link: 'git' },
    { text: '自定义仪表盘', link: 'gauge/index.md' },
    { text: '从零实现一个工具函数库', link: 'tool-library' },
    { text: 'flexible源码解析', link: 'flexible/index.md' },
    { text: 'vue-lazyload源码阅读', link: 'vue-lazyload/index.md' },
    { text: '使用hexo搭建个人博客', link: 'hexo' },
    { text: '其他', link: 'other' },
    {
      text: '服务器',
      collapsed: false,
      base: '/share/server/',
      items: [
        { text: 'Docker使用记录', link: 'docker' },
        { text: 'Nginx使用记录', link: 'nginx' },
        { text: '禅道安装记录', link: 'zentao' },
      ],
    },
  ]
}
