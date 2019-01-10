<template>
  <main-layout index="/actionList">

    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/actionList' }">活动列表</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/actionMember' }">报名人员</el-breadcrumb-item>
    </el-breadcrumb>

    <el-row>
      <el-button type="primary" @click="showQuery=true">查询</el-button>
      <el-button type="primary" @click="downloadRow">导出</el-button>
    </el-row>

    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号码">
      </el-table-column>
      <el-table-column
        prop="actionName"
        label="活动名称">
      </el-table-column>
      <el-table-column
        prop="createDate"
        label="报名时间">
      </el-table-column>
    </el-table>

    <el-pagination
      layout="prev, pager, next"
      :total="50" @currentChange="updatePageNum">
    </el-pagination>

    <el-dialog title="查询" :visible.sync="showQuery">
      <el-form :model="query">
        <el-form-item label="姓名">
          <el-input v-model="query.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="query.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="query.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="报名时间">
          <el-date-picker
            v-model="query.createDate"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
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
  .el-breadcrumb {
    margin-bottom: 30px;
  }
</style>

<script>
import MainLayout from '../components/MainLayout.vue'

export default {
  data() {
    return {
      showQuery: false,
      list: [
        {
          id: 1,
          name: '',
          phone: '',
          actionName: '',
          createDate: ''
        },
        {
          id: 1,
          name: '',
          phone: '',
          actionName: '',
          createDate: ''
        },
        {
          id: 1,
          name: '',
          phone: '',
          actionName: '',
          createDate: ''
        },
      ],
      query: {
        name: '',
        phone: '',
        actionName: '',
        createDate: '',
        pageSize: this.$route.query.pageSize || 1,
        pageNum: this.$route.query.pageNum || 10
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
    downloadRow() {

    }
  },
  components: {
    MainLayout
  }
}
</script>



