---
layout: page
---

<script setup>
    import { ref } from 'vue';
    import data from './data.json'

    const list = ref([])

    const groupData = Object.groupBy(data, ({ group }) => group)

    for (let key in groupData) {
        const item = { title: key, list: groupData[key] }
        list.value.push(item)
    }

    const onClick = (item) => {
        window.open(item.link)
    }
</script>

<div class="portal">
<div class="main-content">
    <div class="group-content">
      <div class="group-item" v-for="group in list" :key="group.title">
        <h2 class="group-title">{{ group.title }}</h2>
        <div class="list-content">
          <div class="list-item" v-for="(item, i) in group.list" :key="i" @click="onClick(item)">
              <div class="item-title-content">
                <img class="item-icon" :src="item.icon" alt="" srcset="" />
                <h5 class="item-title">{{ item.title }}</h5>
              </div>
              <p class="item-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style module>


</style>