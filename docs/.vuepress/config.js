const dayjs = require('dayjs')

module.exports = {
  title: 'Blog',
  // cache: true,
  host: 'localhost',
  port: 2222,
  description: '前端博客',
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
        text: 'Framework',
        link: '/framework/',
        items: [
          {
            text: 'Vue',
            items: [
              {
                text: 'v3',
                link: '/framework/vue/v3/',
              },
              {
                text: 'v2',
                link: '/framework/vue/v2/',
              },
              {
                text: 'vue-router',
                link: '/framework/vue/vue-router/',
              },
              {
                text: 'vuex',
                link: '/framework/vue/vuex/',
              },
              {
                text: 'axios',
                link: '/framework/vue/axios/',
              },
            ],
          },
          {
            text: 'React',
            link: '/framework/react/',
          },
        ],
      },
      {
        text: 'Bundler',
        link: '/bundler/',
        items: [
          {
            text: 'Webpack',
            items: [
              {
                text: 'v5',
                link: '/bundler/webpack/v5.md',
              },
              {
                text: 'v4',
                link: '/bundler/webpack/v4.md',
              },
              {
                text: 'v2',
                link: '/bundler/webpack/v2.md',
              },
              {
                text: 'babel',
                link: '/bundler/babel.md',
              }
            ],
          },
        ],
      },
      {
        text: 'JobSummary',
        link: '/job-summary/',
      },
      {
        text: 'leetcode',
        link: '/leetcode/',
      },
      {
        text: 'HK-Office',
        link: '/audition/',
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
