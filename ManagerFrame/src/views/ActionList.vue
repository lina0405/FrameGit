<template>
  <main-layout index="/actionList">

    <el-row>
      <el-button type="primary" @click="newRow">新增</el-button>
    </el-row>

    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="活动名称">
      </el-table-column>
      <el-table-column
        prop="startDate"
        label="开始时间">
      </el-table-column>
      <el-table-column
        prop="endDate"
        label="结束时间">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button @click="updateRow(scope.row, 'status', 1)" type="text" size="small">发布</el-button>
          <el-button @click="editRow(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.row)" type="text" size="small">删除</el-button>
          <el-button @click="goLink('/actionMember/' + scope.row.id)" type="text" size="small">名单</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      layout="prev, pager, next"
      :total="50" @currentChange="updatePageNum">
    </el-pagination>

    <el-dialog title="编辑信息" :visible.sync="showEdit">
      <el-form :model="form">
        <el-form-item label="活动名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="报名开始时间">
          <el-date-picker
            v-model="form.startDate"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="报名结束时间">
          <el-date-picker
            v-model="form.endDate"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="活动介绍">
          <Editor v-model="form.content"></Editor>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showQuery=false">取 消</el-button>
        <el-button type="primary" @click="showQuery=false">确 定</el-button>
      </div>
    </el-dialog>

  </main-layout>
</template>

<style lang="less" scoped>
  .el-pagination {
    text-align: center;
    margin-top: 20px;
  }
</style>

<script>
import MainLayout from '../components/MainLayout.vue'
import Editor from '../components/Editor.vue'

export default {
  data() {
    return {
      showQuery: false,
      showEdit: false,
      list: [
        {
          id: 1,
          name: '',
          startDate: '',
          endDate: '',
          content: ''
        },
        {
          id: 1,
          name: '',
          startDate: '',
          endDate: '',
          content: ''
        },
        {
          id: 1,
          name: '',
          startDate: '',
          endDate: '',
          content: ''
        },
      ],
      query: {
        pageSize: this.$route.query.pageSize || 1,
        pageNum: this.$route.query.pageNum || 10
      },
      form: {
        id: -1,
        name: '',
        startDate: '',
        endDate: '',
        content: ''
      }
    }
  },
  methods: {
    getList() {
      let self = this
      self.$ajax.GetActionMemberList(self.query)
      .then(data => {
        self.pageSize
      })
    },
    //修改页面数
    updatePageNum(pageNum) {
      this.$router.push(this.$route.path + '?pageNum=' + pageNum + '&pageSize=' + 10)
    },
    updateRow(row, field, value) {
      this.form = $.extend({}, row, {field: value})
      this.postRow()
    },
    deleteRow(row) {
      
    },
    editRow(row) {
      this.form = this.$_.extend({}, row)
      this.showEdit = true
    },
    newRow() {
      this.form = {
        id: -1,
        name: '',
        startDate: '',
        endDate: '',
        content: ''
      }
      this.showEdit = true
    },
    postRow() {
      
    },
    goLink(link) {
      this.$router.push(link)
    }
  },
  components: {
    MainLayout,
    Editor
  }
}
</script>



