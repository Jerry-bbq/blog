import { type DefaultTheme } from 'vitepress'

export function nav(): DefaultTheme.NavItem[] {
    return [
      {
        text: '基础',
        link: '/primary/html/doctype',
        activeMatch: '/primary/',
      },
      {
        text: '进阶',
        link: '/advanced/index',
        activeMatch: '/advanced/',
      },
      {
        text: '设计模式',
        link: '/design-patterns/index',
        activeMatch: '/design-patterns/',
      },
      {
        text: '数据结构与算法',
        link: '/data-structures-and-algorithms/index',
        activeMatch: '/data-structures-and-algorithms/',
      },
      {
        text: '总结',
        link: '/job-summary/work-flow/index',
        activeMatch: '/job-summary/',
      },
      {
        text: '分享',
        link: '/share/npm/index',
        activeMatch: '/share/',
      },
      {
        text: '开源',
        items: [
          { text: '工具函数库lgr-tools', link: 'https://www.npmjs.com/package/lgr-tools' },
          { text: 'circle-slider', link: 'https://ext.dcloud.net.cn/plugin?id=8084' },
          { text: '仪表盘或者环形进度条', link: 'https://ext.dcloud.net.cn/plugin?id=8089' },
          { text: 'vue-img-verify', link: 'https://github.com/Jerry-bbq/vue-img-verify' }
        ],
      },
      // {
      //   text: 'HK-Office',
      //   link: '/audition/index',
      // },
    ]
  }