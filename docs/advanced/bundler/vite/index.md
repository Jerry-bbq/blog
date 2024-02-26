# vite

下一代的前端工具链，为开发提供极速响应

Vite 将会使用 esbuild 预构建依赖。esbuild 使用 Go 编写，并且比以 JavaScript 编写的打包器预构建依赖快 10-100 倍。

## 特点

- 极速的服务启动
- 轻量快速的热重载
- 丰富的功能
- 优化的构建
- 通用的插件
- 完全类型化的API

有两部分组成：

- 一个是开发服务器，服务于开发环境，ESM+HMR
- 一套构建指令，服务于生产环境，用rollup打包

解决的问题：

- 缓慢的服务启动
- 缓慢的更新

以`v5.1.3`为例：

## 创建vite项目

```bash
npm create vite@latest
yarn create vite
pnpm create vite
bun create vite
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