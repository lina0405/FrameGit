<template>
  <main-layout index="/code">
    <el-row>
      <el-input-number v-model="number" :min="1" :max="100" label="生成会员码"></el-input-number>
      <el-button type="primary">生成</el-button>
    </el-row>
    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="code"
        label="券码">
      </el-table-column>
      <el-table-column
        prop="memo"
        label="备注">
      </el-table-column>
      <el-table-column
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button @click="updateMemo(scope.row)" type="text" size="small">启用</el-button>
          <el-button @click="updateMemo(scope.row)" type="text" size="small">禁用</el-button>
          <el-button @click="editRow(scope.row)" type="text" size="small">备注</el-button>
          <el-button @click="deleteCode(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="设置备注信息" :visible.sync="showEdit">
      <el-form :model="form">
        <el-form-item label="券码">
          <el-input v-model="form.name" disabled autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.memo" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showEdit=false">取 消</el-button>
        <el-button type="primary" @click="showEdit=false">确 定</el-button>
      </div>
    </el-dialog>

  </main-layout>
</template>

<style lang="less" scoped>
  .el-input-number {
    margin-right: 20px;
  }
</style>

<script>
import MainLayout from '../components/MainLayout.vue'

export default {
  data() {
    return {
      number: 0,
      showEdit: false,
      list: [
        {
          id: 1,
          code: '食品',
          memo: 1
        },
        {
          id: 2,
          code: '体育用品',
          memo: 2
        },
        {
          id: 3,
          code: '家居生活馆',
          memo: 3
        }
      ],
      form: {
        id: '',
        name: '',
        memo: ''
      }
    }
  },
  methods: {
    deleteCode(row) {
      console.log(row)
    },
    updateMemo(row) {
      this.form = this.$_.extend({}, row)
      this.showEdit = true
    },
    editRow(row) {
      this.form = this.$_.extend({}, row)
      this.showEdit = true
    }
  },
  components: {
    MainLayout
  }
}
</script>



