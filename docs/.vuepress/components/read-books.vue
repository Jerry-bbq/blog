<template>
  <div>
    <div v-for="item in list" :key="item">{{ item }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const books = [1, 2, 3, 4, 5]
    const list = reactive(books)
    console.log(this)
    return {
      list,
    }
  },
})
</script>
