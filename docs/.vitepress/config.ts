import { defineConfig, type DefaultTheme } from 'vitepress'
import taskLists from 'markdown-it-task-list-plus'
import { nav } from './nav'
import { getAlgoliaSearchOptions } from './searchOptions'
import { getSidebarPrimary, getSidebarAdvanced, getSidebarShare, getSidebarSpecification } from './sidebar'

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
      '/specification/': {
        base: '/specification/',
        items: getSidebarSpecification(),
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
      copyright: `Copyright © 2021-${new Date().getFullYear()} <a href="https://github.com/Jerry-bbq">Jerry-bbq</a>`,
    },
    outline: {
      label: '目录',
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
    search: {
      provider: 'algolia',
      options: {
        appId: '1R0EJFK88U',
        apiKey: '93eb907e4b0fca5015ef1a694107e65d',
        indexName: 'jerry-bbq.github.io',
        locales: {
          ...getAlgoliaSearchOptions(),
        },
      },
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Jerry-bbq/blog' }],
  },
  markdown: {
    config: md => {
      md.use(taskLists, { activeStyle: { background: '#a8b1ff', 'border-color': '#a8b1ff' } })
    },
  },
})
