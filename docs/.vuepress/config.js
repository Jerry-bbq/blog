const path = require('path')
const { defaultTheme } = require('@vuepress/theme-default')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const { clipboardPlugin } = require("vuepress-plugin-clipboard")

module.exports = {
  title: 'Blog',
  host: 'localhost',
  port: 2222,
  description: '技术博客',
  base: '/blog/',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  theme: defaultTheme({
    displayAllHeaders: true,
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    contributors: false,
    sidebarDepth: 3, // 1
    navbar: [
      {
        text: 'FE',
        link: '/base/',
      },
      {
        text: 'Framework',
        link: '/framework/',
        children: [
          {
            text: 'Vue',
            children: [
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
        children: [
          {
            text: 'Webpack',
            children: [
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
        text: 'GitHub',
        link: 'https://github.com/Jerry-bbq?tab=repositories',
      },
    ]
  }),
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@code-snippet/, path.resolve(__dirname, '../../docs/base/javascript/code-snippet')),
    }
  },
  extendsMarkdown: md => {
    md.use(require('markdown-it-task-lists'), {})
  },
  plugins: [
    mediumZoomPlugin({}),
    backToTopPlugin(),
    nprogressPlugin(),
    docsearchPlugin({}),
    clipboardPlugin({})
  ]
}
