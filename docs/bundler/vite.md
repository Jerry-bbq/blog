# vite

前端项目构建工具，显著的提升开发体验

有两部分组成：

- 一个是开发服务器，服务于开发环境，ESM+HMR
- 一套构建指令，服务于生产环境，用rollup打包

解决的问题：

- 缓慢的服务启动
- 缓慢的更新

## 创建vite项目

```bash
yarn create vite
```

可以创建vue、react等框架的项目，也可以创建纯纯的纯JS项目。会生成`vite.config.js`配置文件

## 配置

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    // 开发服务器选项
    server: {
        host: 'localhost',
        port: 5173,
        proxy: {
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
        }
    },
    // 插件配置
    plugins: [
        vue(),
    ],
    // 构建选项
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        cssCodeSplit: true,
        sourcemap: false,
        rollupOptions: {
            // https://rollupjs.org/guide/en/#big-list-of-options
        }
    },
    // 预览选项
    preview: {
        host: '0.0.0.0', // 默认指向 server.host
        port: 4173
    }
})
```