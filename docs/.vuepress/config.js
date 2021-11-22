const dayjs = require('dayjs')

module.exports = {
  title: 'Blog',
  cache: true,
  base: '/blog/',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    displayAllHeaders: true,
    lastUpdated: '上次更新',
    sidebarDepth: 3, // 1
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'FE',
        link: '/base/',
      },
      {
        text: 'JobSummary',
        link: '/job-summary/'
      },
      {
        text: 'Share',
        link: '/share/',
      },
      {
        text: 'lgr-tools',
        link: 'https://gitee.com/luguanrui/lgr-tools?_from=gitee_search',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/luguanrui?tab=repositories',
      },
    ],
    sidebar: {
      // '/base/': [],
      // '/share/': [],
      // '/framework/vue/v2/': [['', '目录'], 'reactive', 'render', 'extend'],
    },
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    '@vuepress/medium-zoom', 
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
        },
      },
    ],
    // 复制代码
    [
      'one-click-copy',
      {
        copyMessage: '代码片段复制成功',
      },
    ],
  ],
}
