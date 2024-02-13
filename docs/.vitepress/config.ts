import { defineConfig, type DefaultTheme } from 'vitepress'

export default defineConfig({
  base: '/blog/',
  title: 'Blog',
  description: '技术博客',
  head: [['link', { rel: 'icon', href: '/blog/favicon.ico' }]],
  ignoreDeadLinks: true,
  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },
    nav: nav(),
    sidebar: {
      '/primary/': {
        base: '/primary/',
        items: getSidebarPrimary(),
      },
      '/advanced/': {
        base: '/advanced/',
        items: getSidebarAdvanced(),
      },
      '/job-summary/': {
        base: '/job-summary/',
        items: getSidebarJobSummary(),
      },
      '/share/': {
        base: '/share/',
        items: getSidebarShare(),
      },
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    footer: {
      message: '',
      copyright: `版权所有 © 2021-${new Date().getFullYear()} Jerry`,
    },
    outline: {
      label: '页面导航',
      level: [2, 3], // 'deep' // 默认值为 2
    },

    // 用于自定义返回顶部按钮的标签，该标签仅在移动端视图中显示。
    returnToTopLabel: '回到顶部',
    // 用于自定义侧边栏菜单标签，该标签仅在移动端视图中显示
    sidebarMenuLabel: '菜单',
    // 用于自定义深色模式开关标签，该标签仅在移动端视图中显示。
    darkModeSwitchLabel: '主题',
    // 用于自定义悬停时显示的浅色模式开关标题。
    lightModeSwitchTitle: '切换到浅色模式',
    // 用于自定义悬停时显示的深色模式开关标题。
    darkModeSwitchTitle: '切换到深色模式',
    // markdown
    // markdown: {
    //   code: {
    //     lineNumbers: false,
    //   },
    //   extractHeaders: {
    //     level: [2, 3, 4],
    //   },
    //   importCode: {
    //     handleImportPath: str => str.replace(/^@code-snippet/, path.resolve(__dirname, '../../docs/primary/javascript/code-snippet')),
    //   },
    // },
    search: {
      provider: 'algolia',
      options: {
        appId: 'J24Y7NQMMO',
        apiKey: '09177ca8ae528238bb95315e838cfc33',
        indexName: 'Blog',
        locales: {
          ...getAlgoliaSearchOptions(),
        },
      },
    },
    socialLinks: [{ icon: 'github', link: 'https://gitee.com/Jerry-bro' }],
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '技术点',
      link: '/primary/html/doctype',
      activeMatch: '/primary/',
    },
    {
      text: '技术栈',
      link: '/advanced/data-structures/index',
      activeMatch: '/advanced/',
    },
    {
      text: '心得',
      link: '/job-summary/work-flow/index',
      activeMatch: '/job-summary/',
    },
    {
      text: '分享',
      link: '/share/npm/index',
      activeMatch: '/share/',
    },
    // {
    //   text: 'HK-Office',
    //   link: '/audition/index',
    // },
  ]
}

function getSidebarPrimary(): DefaultTheme.SidebarItem[] {
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
        { text: 'rem', link: 'rem' },
        { text: '清除浮动', link: 'clear' },
        { text: '元素水平垂直居中', link: 'center' },
        { text: '页面布局', link: 'layout' },
        { text: 'CSS动画', link: 'animation' },
        { text: 'other', link: 'other' },
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
      text: '设计模式',
      collapsed: false,
      base: '/primary/design-patterns/',
      items: [{ text: '设计模式', link: 'index' }],
    },
    {
      text: 'TypeScript',
      collapsed: false,
      base: '/primary/typescript/',
      items: [{ text: 'TypeScript', link: 'index' }],
    },
  ]
}

function getSidebarAdvanced(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '数据结构与算法',
      // collapsed: false,
      // base: '/advanced/',
      items: [
        { text: '数据结构', link: 'data-structures/index' },
        { text: '时间复杂度和空间复杂度', link: 'algorithm/complexity' },
        { text: 'JavaScript数据结构与算法（第3版）', link: 'data-structures-and-algorithms/index' },
        { text: '算法动态演示', link: 'https://algorithm-visualizer.org/brute-force/bubble-sort' },
        { text: '二分查找', link: 'algorithm/binary-search' },
        { text: '排序', link: 'algorithm/sort' },
        { text: '递归', link: 'algorithm/recursion' },
        { text: '深度优先搜索和广度优先搜索', link: 'algorithm/dfs-bfs' },
      ],
    },
    {
      text: '框架',
      collapsed: false,
      base: '/advanced/',
      items: [
        {
          text: 'Vue',
          items: [
            { text: 'v3', link: '/framework/vue/v3/index' },
            { text: 'v2', link: '/framework/vue/v2/index' },
            { text: 'vue-router', link: '/framework/vue/vue-router/index' },
            { text: 'vuex', link: '/framework/vue/vuex/index' },
            { text: 'axios', link: '/framework/vue/axios/index' },
          ],
        },
        { text: 'React', link: '/framework/react/react/index' },
      ],
    },
    {
      text: '打包工具',
      collapsed: false,
      base: '/advanced/',
      items: [
        {
          text: 'Webpack',
          items: [
            { text: 'v5', link: '/bundler/webpack/v5' },
            { text: 'v4', link: '/bundler/webpack/v4' },
            { text: 'v2', link: '/bundler/webpack/v2' },
            { text: 'babel', link: '/bundler/babel' },
          ],
        },
        { text: 'Vite', link: '/bundler/vite' },
      ],
    },
  ]
}

function getSidebarJobSummary(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '随笔与心得',
      collapsed: false,
      base: '/job-summary/',
      items: [
        { text: 'cli', link: 'cli/index' },
        { text: '开发流程', link: 'work-flow/index' },
        {
          text: '前端规范化',
          base: '/job-summary/normalization/',
          items: [
            { text: '编码规范', link: 'convention' },
            { text: '目录文件命名规范', link: 'naming' },
            { text: 'Git提交规范', link: 'git-commit' },
            { text: 'Git分支管理规范', link: 'git-branch' },
            { text: '版本规范', link: 'version' },
            { text: '发布规范', link: 'publish' },
            { text: 'Code Review规范', link: 'cr' },
            { text: '规范工具', link: 'tools' },
          ],
        },
        { text: 'mock数据', link: 'mock/index' },
        { text: '项目管理', link: 'work-flow/project-manage' },
        { text: 'uniapp', link: 'uni-app/app' },
        { text: 'Vue2.0', link: 'vue/index' },
        { text: 'JavaScript', link: 'javascript/index' },
        { text: 'CSS相关问题', link: 'css/index' },
      ],
    },
  ]
}

function getSidebarShare(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '分享',
      collapsed: false,
      base: '/share/',
      items: [
        {
          text: '埋点SDK',
          link: 'tracker/index',
        },
        {
          text: '单点登录',
          link: 'sso/index',
        },
        {
          text: '新手引导',
          link: 'intro',
        },
        {
          text: 'npm',
          link: 'npm/index',
        },
        {
          text: 'vscode',
          link: 'vscode/index',
        },
        // {
        //   text: 'vscode',
        //   base: '/share/vscode/',
        //   items: [{ text: '插件', link: 'plugins' }],
        // },
        { text: 'nrm', link: 'node-registry-manage' },
        { text: 'nvm', link: 'node-version-manager' },
        { text: 'charles', link: 'charles' },
        { text: 'git', link: 'git' },
        { text: '自定义仪表盘', link: 'gauge/index' },
        { text: '从零实现一个工具函数库', link: 'tool-library' },
        { text: 'flexible源码解析', link: 'flexible/index' },
        { text: 'vue-lazyload源码阅读', link: 'vue-lazyload/index' },
        { text: 'Docker', link: 'server/docker' },
        { text: 'nginx', link: 'server/nginx' },
        { text: '禅道', link: 'server/zentao' },
        { text: '使用hexo搭建个人博客', link: 'hexo' },
        { text: '其他', link: 'other' },
      ],
    },
  ]
}

function getAlgoliaSearchOptions(): DefaultTheme.AlgoliaSearchOptions['locales'] {
  return {
    zh: {
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索文档',
          buttonAriaLabel: '搜索文档',
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消',
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存至搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除',
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接',
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索提供者',
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为该查询应该有结果？',
            reportMissingResultsLinkText: '点击反馈',
          },
        },
      },
    },
  }
}
