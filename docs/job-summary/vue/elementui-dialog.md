---
sidebar: auto
---

# ElementUI弹窗组件简单封装

## 技术实现

dialog.vue

```vue
<template>
  <el-dialog title="提示" :visible="visible" width="30%" :before-close="handleCloseDialog">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleCloseDialog">取 消</el-button>
      <el-button type="primary" @click="handleConfirm">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  props: {
    visible: Boolean,
  },
  data() {
    return {
      formInline: {
        user: '',
        region: '',
      },
    }
  },
  mounted() {
    // mounted的操作
    // ...
    console.log('mounted')
  },
  destroyed() {
    console.log('destroyed')
  },
  methods: {
    // 关闭弹窗
    handleCloseDialog() {
      this.$emit('update:visible', false)
      this.$emit('handleCloseDialog')
    },
    // 确定弹窗
    handleConfirm() {
      this.$emit('handleConfirm', this.formInline)
      this.handleCloseDialog()
    },
  },
}
</script>

```

app.vue

```vue
<template>
  <div id="app">
    <Dialog :visible.sync="visible" v-if="visible" @handleConfirm="handleConfirm" @handleCloseDialog="handleCloseDialog" />
    <el-button @click="handleClick">打开弹窗</el-button>
  </div>
</template>

<script>
import Dialog from './components/dialog'
export default {
  components: {
    Dialog,
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    handleClick() {
      this.visible = true
    },
    handleConfirm(data) {
      console.log(data)
    },
    handleCloseDialog() {},
  },
}
</script>
```

::: tip 说明

1. 引用组件时，加上`:visible.sync="visible"`,组件内部是否使用修饰符`.sync`无所谓
2. 关闭组件时，使用`this.$emit('update:visible', false)`
3. 为了能够使用`mounted`,引用组件时，加上`v-if="visible"`，这样在关闭弹窗时，弹窗组件会销毁

:::
