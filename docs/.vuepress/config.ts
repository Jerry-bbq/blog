const path = require('path')
const { defaultTheme } = require('@vuepress/theme-default')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const { clipboardPlugin } = require('vuepress-plugin-clipboard')

module.exports = {
  // 站点配置
  title: 'Blog',
  description: '技术博客',
  base: '/blog/',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  // dev
  host: 'localhost',
  port: 2222,
  open: true,
  // 主题
  theme: defaultTheme({
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    contributors: false,
    sidebar: 'auto',
    sidebarDepth: 3,
    toggleColorMode: '切换主题',
    navbar: [
      {
        text: 'Primary',
        link: '/primary/',
      },
      {
        text: 'Advanced',
        link: '/advanced/'
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
              },
            ],
          },
        ],
      },
      {
        text: 'JobSummary',
        link: '/job-summary/',
      },
      {
        text: 'HK-Office',
        link: '/audition/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/Jerry-bbq?tab=repositories',
      },
    ],
  }),
  // markdown
  markdown: {
    code: {
      lineNumbers: false,
    },
    extractHeaders: {
      level: [2, 3, 4],
    },
    importCode: {
      handleImportPath: str => str.replace(/^@code-snippet/, path.resolve(__dirname, '../../docs/primary/javascript/code-snippet')),
    },
  },
  // 插件api
  extendsMarkdown: md => {
    md.use(require('markdown-it-task-lists'), {})
  },
  // plugins
  plugins: [
    mediumZoomPlugin({}),
    backToTopPlugin(),
    nprogressPlugin(),
    docsearchPlugin({
      apiKey: '',
      indexName: '',
      appId: '',
    }),
    clipboardPlugin({}),
  ],
}