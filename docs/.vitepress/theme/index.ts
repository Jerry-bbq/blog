// https://vitepress.dev/guide/custom-theme
import { h, onMounted, watch, nextTick } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import './custom.css'
import './style/index.css' //自定义样式

import mediumZoom from 'medium-zoom'
import { useRoute } from 'vitepress'

import CanvasConfetti from "./components/CanvasConfetti.vue" // 五彩纸屑

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('CanvasConfetti' , CanvasConfetti) // 五彩纸屑
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('#app img', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },
} satisfies Theme
