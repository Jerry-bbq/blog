import { type DefaultTheme } from 'vitepress'

export function nav(): DefaultTheme.NavItem[] {
    return [
      {
        text: '基础',
        link: '/primary/javascript/data-types',
        activeMatch: '/primary/',
      },
      {
        text: '导航',
        link: '/portal/index.md',
        activeMatch: '/portal/',
      },
      {
        text: '进阶',
        link: '/advanced/framework/index.md',
        activeMatch: '/advanced/',
      },
      {
        text: '常用',
        link: '/common/vscode/index.md',
        activeMatch: '/common/',
      },
      {
        text: '开发规范',
        link: '/coding-standards/work-flow',
        activeMatch: '/coding-standards/',
      },
      {
        text: '分享',
        link: '/share/cli',
        activeMatch: '/share/',
      },
      {
        text: '服务器',
        link: '/server/docker/index.md',
        activeMatch: '/server/',
      },
      {
        text: '开源',
        items: [
          { text: '工具函数库：lgr-tools', link: 'https://www.npmjs.com/package/lgr-tools' },
          { text: 'uni-app拖拽进度条插件：jerry-slider', link: 'https://ext.dcloud.net.cn/plugin?id=8084' },
          { text: 'uni-app仪表盘或者环形进度条插件：jerry-gauge', link: 'https://ext.dcloud.net.cn/plugin?id=8089' },
          { text: '图形验证码插件：vue-img-verify', link: 'https://github.com/Jerry-bbq/vue-img-verify' }
        ],
      },
      {
        text: 'HK-Office',
        link: '/audition/index',
      },
    ]
  }