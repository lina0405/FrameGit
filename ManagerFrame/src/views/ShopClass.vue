<template>
  <main-layout index="/shopClass">
    <el-row>
      <el-button type="primary" @click="newRow()">新增</el-button>
    </el-row>
    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="分类名称">
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

    <el-dialog title="设置信息" :visible.sync="showEdit">
      <el-form :model="form">
        <el-form-item label="分类名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="form.sort" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Logo图">
          <el-upload
            class="upload-demo"
            action="/Api/PostImage"
            :file-list="form.logo">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="图片">
          <el-upload
            class="upload-demo"
            action="/Api/PostImage"
            :file-list="form.image">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showEdit = false">取 消</el-button>
        <el-button type="primary" @click="showEdit = false">确 定</el-button>
      </div>
    </el-dialog>

  </main-layout>
</template>

<style lang="less" scoped>
</style>

<script>
import MainLayout from '../components/MainLayout.vue'

export default {
  data() {
    return {
      showEdit: false,
      form: {
        id: 1,
        name: '食品',
        sort: 1
      },
      list: [
        {
          id: 1,
          name: '食品',
          sort: 1
        },
        {
          id: 2,
          name: '体育用品',
          sort: 2
        },
        {
          id: 3,
          name: '家居生活馆',
          sort: 3
        }
      ]
    }
  },
  methods: {
    deleteRow(row) {
      console.log(row)
    },
    editRow(row) {
      this.form = this.$_.extend({}, row)
      this.showEdit = true
    },
    newRow() {
      this.form = {
        id: -1,
        name: '',
        sort: ''
      }
      this.showEdit = true
    }
  },
  components: {
    MainLayout
  }
}
</script>



