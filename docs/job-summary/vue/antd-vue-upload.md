---
sidebar: auto
---

# AntDesignVue自定义图片文件上组件

## 技术实现

```vue
<template>
  <div class="upload-wrapper">
    <a-upload
      ref="upload"
      list-type="picture-card"
      :accept="acceptStr"
      :file-list="fileList"
      @preview="handlePreview"
      @change="handleChange"
      :before-upload="beforeUpload"
      :remove="handleRemove"
      :customRequest="customRequest"
      :multiple="true"
      :disabled="disabled">
      <div v-if="isCanAdd">
        <a-icon type="plus" />
        <div class="ant-upload-text">
          上传
        </div>
      </div>
    </a-upload>
  </div>
</template>

<script>
import { upload } from '@/api/common'
import _ from 'lodash'

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}
export default {
  props: {
    fileObjList: String,
    disabled: [Boolean],
  },
  watch: {
    fileObjList: {
      handler(val) {
        let arr = val ? JSON.parse(val) : []
        if (arr.length) {
          let sessionId = localStorage.getItem('sessionId')
          arr.forEach((item) => {
            item.url += `?sessionId=${sessionId}`
          })
        }
        this.fileList = arr
      },
      immediate: true,
    },
  },
  data() {
    return {
      fileListLength: 9,
      previewVisible: false,
      previewImage: '',
      fileList: [],
      newFileList: [],
      acceptStr: 'image/png,image/jpg,image/jpeg,\n' +
                 'application/vnd.openxmlformats-officedocument.presentationml.presentation,\n' +
                 'application/vnd.ms-powerpoint,\n' +
                 'application/vnd.ms-excel,\n' +
                 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,\n' +
                 'application/msword,\n' +
                 'application/vnd.openxmlformats-officedocument.wordprocessingml.document,\n' +
                 'application/pdf,\n' +
                 'ext/plain',
    }
  },
  computed: {
    isCanAdd() {
      if (this.disabled) {
        return false
      } else if (this.fileList.length >= this.fileListLength) {
        return false
      } else {
        return true
      }
    },
  },
  methods: {
    clearUpload() {
      this.fileList = []
    },
    // 自定义上传
    customRequest(data) {
      this.upload(data)
    },
    // 取消预览
    handleCancelPreview() {
      this.previewVisible = false
    },
    // 预览
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj)
      }
      this.previewImage = file.url || file.preview
      this.previewVisible = true
      window.open(file.url)
    },

    beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 5
      if (!isLt2M) {
        this.$message.error('上传文件大小不可超过5M!')
        return false
      }
    },
    handleChange() {
      // console.log(info,'info')
      // console.log(file, "file");
      // this.fileList = fileList;
      // console.log(fileList, 'fileList')
    },
    // 删除
    handleRemove(file) {
      console.log(file, 'file')
      this.fileList = this.fileList.filter((item) => item.uid !== file.uid)
      this.newFileList = this.newFileList.filter((item) => item.uid !== file.uid)
      this.$emit('uploadSuccess', this.newFileList)
    },
    // 上传
    async upload(data) {
      const formData = new FormData()
      formData.append('file', data.file)
      data.onProgress()

      const { code, rs } = await upload(formData)
      if (code === 200) {
        data.onSuccess() //上传成功
        this.newFileList = []
        let fileFormate = this.fileFormatter(rs.name, rs.url)
        this.fileList.push(fileFormate)
        this.fileList.forEach((item) => {
          let { uid, name, url } = item
          this.newFileList.push({ uid, name, url: url.split('?')[0] })
        })
        this.$emit('uploadSuccess', this.newFileList)
      } else {
        data.onError() //上传失败
      }
    },

    // 图片格式化
    fileFormatter(name, url) {
      let sessionId = localStorage.getItem('sessionId')
      let file = {
        uid: _.uniqueId(),
        name: name,
        url: url + `?sessionId=${sessionId}`,
      }
      return file
    },
  },
}
</script>

```
