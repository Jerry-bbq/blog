
# ElementUI表格和分页组件化

## 业务场景

使用表格的时候，往往都需要添加分页，由于elementui并没有给开发者提供table和pagination的组合，因此需要开发者自己添加，没写一个表格就需要在写一个分页，为了“偷懒”，我们可以将两个组件做一个封装，便于日后的维护

## 技术实现

table.vue

```vue
<template>
  <div class="table-wrapper">
    <el-table ref="table" v-bind="$attrs" v-on="$listeners">
      <slot name="columns"></slot>
    </el-table>
    <div class="pagination-wrapper">
      <el-pagination v-bind="$attrs" v-on="$listeners"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {},
  mounted() {
    console.log(this.$attrs)
    console.log(this.$listeners)
  },
  methods: {},
}
</script>
<style>
.pagination-wrapper {
  text-align: right;
  padding: 20px;
}
</style>

```

使用：

```vue
<template>
  <div id="app">
    <MyTable
      ref="multipleTable"
      :data="this.tableData"
      :tooltip-effect="'dark'"
      :default-sort="{ prop: 'date', order: 'descending' }"
      @selection-change="handleSelectionChange"
      :current-page="pagination.currentPage"
      :page-size="pagination.pageSize"
      :total="pagination.total"
      :layout="pagination.layout"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange">
      <template slot="columns">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="date" label="日期" sortable width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名" sortable width="180"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from './components/table'
export default {
  components: {
    MyTable,
  },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        }
      ],
      multipleSelection: [],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 100,
      },
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleSizeChange(val) {
      console.log(val)
    },
    handleCurrentChange(val) {
      console.log(val)
    },
    handleShow() {
      this.show = !this.show
    },
  },
}
</script>
```
