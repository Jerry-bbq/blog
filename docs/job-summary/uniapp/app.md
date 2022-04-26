---
sidebar: auto
---

# Q&A

## H5跨域

- 使用内置浏览器，不需要配置
- 使用浏览器打开，配置`manifest.json`文件

```json
"h5": {
    "devServer": {
        "proxy": {
            "/api": {
                "target": "https://xxx.com",
                "changeOrigin": true,
                "secure": true,
                "pathRewrite":{"^/api":"/"}
            }
        }
    }
}
```

## 状态栏遮挡

- 定义一个状态栏组件，参考官方文档[系统状态栏高度](https://uniapp.dcloud.io/tutorial/syntax-css.html#css-%E5%8F%98%E9%87%8F)

```scss
var(--status-bar-height)
```

## 页面被整体拖拽

### 禁止页面滚动

```json
"style": {
    "disableScroll": true
}
```

- 会导致页面无法滚动，设置`overflow: scroll`是无效的

### 禁止回弹属性

页面是可以滚动的

```json
"style": {
    "bounce":"none"
}
```

## 输入框的键盘会将页面上移

- 配置`page.json`

```json
{
    "path": "pages/login/index",
    "style": {
        "disableScroll": true,
        "app-plus": {
            "softinputMode": "adjustResize"
        }
    }
}
```

注意，如果底部有`position: absolute`或`position: fixed`定位的元素会被键盘顶起

### absolute和fixed定位上移

解决方案：

```js
// input 添加  @focus="hideFooter" @blur="showFooter"  
// 被顶起的内容添加v-if="show"
onLoad() {
uni.getSystemInfo({
    success: res => {
    this.windowHeight = res.windowHeight
    },
})
uni.onWindowResize(res => {
    if (res.size.windowHeight < this.windowHeight) {
        this.show = false
    } else {
        this.show = true
    }
})
},
hideFooter() {
    this.show = false
},
showFooter() {
    this.show = true
},
```

### 背景图也会被顶起

解决方案？？？

## 不能直接使用echart

- 使用「内置预览」模式可以正常显示，避免被坑
- 使用「运行到手机」时就会不显示图表

需要使用[renderjs](https://uniapp.dcloud.io/tutorial/renderjs.html#renderjs)，仅支持内联使用

```vue
<template>
  <view class="container">
    <view id="chart" :chartData="chartData" :change:chartData="render.updateChart" style="width: 340rpx; height: 180rpx"/>
  </view>
</template>

<script src="./index.js"></script>
<script module="render" lang="renderjs">
import echarts from '@/utils/echart'

let chart = null
export default {
  mounted() {
    chart = echarts.init(document.getElementById('chart'))
    const options = this.initChart(this.chartData)
    chart.setOption(options)
  },
  methods: {
    initChart(data) {
      const options = {
        title: {
          show: true,
          zlevel: 0,
          text: [`{c|${data?.total || 0}}`, '{b|设备总数}'].join('\n'),
          left: 40,
          top: 'center',
          textAlign: 'center',
          textStyle: {
            rich: {
              b: {
                fontSize: 12,
                fontWeight: 400,
                color: '#B4B4B4',
              },
              c: {
                fontSize: 24,
                color: '#fff',
                fontWeight: 500,
                padding: [0, 0, 5, 0],
              },
            },
          },
        },
        legend: {
          selectedMode: false,
          orient: 'vertical',
          right: 0,
          bottom: 0,
          itemWidth: 4,
          itemHeight: 4,
          icon: 'circle',
          textStyle: {
            color: '#B4B4B4',
          },
        },
        series: [
          {
            type: 'pie',
            center: [45, '50%'],
            radius: ['70%', '85%'],
            label: {
              show: false,
              position: 'center',
              backgroundColor: '#000',
              padding: [11, 18],
              borderRadius: 50,
              formatter: ['{c|{c}}', '{b|{b}}'].join('\n'),
              rich: {
                b: {
                  fontSize: 12,
                  fontWeight: 400,
                  color: '#B4B4B4',
                },
                c: {
                  fontSize: 24,
                  color: '#fff',
                  fontWeight: 500,
                  padding: [0, 0, 5, 0],
                },
              },
            },
            emphasis: {
              label: {
                show: true,
              },
              scaleSize: 5,
            },
            zlevel: 1,
            itemStyle: {
              color: function (params) {
                var colorList = [
                  { c1: '#4072FF', c2: '#6791FF' },
                  { c1: '#A5A5A5', c2: '#D2D2D2' },
                  { c1: '#FFC294', c2: '#FF8C71' },
                  { c1: '#E0F18D', c2: '#F2D574' },
                ]
                return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  { offset: 0, color: colorList[params.dataIndex].c1 },
                  { offset: 1, color: colorList[params.dataIndex].c2 },
                ])
              },
            },
            data: data?.deviceStatus,
          },
        ],
      }
      return options
    },
    updateChart(newValue, oldValue) {
      const options = this.initChart(newValue)
      chart.setOption(options)
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
```



## 测试打包

使用云打包的方式,「一个账号一天大概只能打7-8次」，如需继续打包，使用付费服务（2元一次）

### android

公共证书

### ios

- [官方流程](https://ask.dcloud.net.cn/article/152)
- 付费开通开发者账户

### 问题

- android打包时，某一时段使用云打包的开发者太多，到时排队时间长
- 生成下载的链接，只可以下载5次，解决方案，将包下载下来，上传到`fir.im`平台（开通付费），[链接](https://www.betaqr.com/)

## process.env.NODE_ENV引发的问题

由于在项目中年没有配置`process.env.NODE_ENV`,直接使用作为判断，开发环境下没有问题（内置浏览器或运行到手机），但是打包之后，接口不会请求，排查问题浪费太多的时间

