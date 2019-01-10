<template>
  <main-layout index="/shopList">
    <el-row>
      <el-button type="primary" @click="newRow()">新增</el-button>
    </el-row>
    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="商户名称">
      </el-table-column>
      <el-table-column
        prop="className"
        label="分类">
      </el-table-column>
      <el-table-column
        prop="sort"
        label="排序">
      </el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="editRow(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </main-layout>
</template>

<style lang="less" scoped>
</style>

<script>
import MainLayout from '../components/MainLayout.vue'

export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: '食品',
          className: '食品',
          sort: 1
        },
        {
          id: 2,
          name: '体育用品',
          className: '食品',
          sort: 2
        },
        {
          id: 3,
          name: '家居生活馆',
          className: '食品',
          sort: 3
        }
      ]
    }
  },
  methods: {
    deleteRow(row) {
      console.log(row)
    },
    newRow() {
      this.$router.push('/shopInfo/-1')
    },
    editRow(row) {
      this.$router.push('/shopInfo/' + row.id)
    }
  },
  components: {
    MainLayout
  }
}
</script>



