<template>
  <el-container>
    <el-main>
      
      <el-form ref="form" :model="form" label-width="80px">
        <h1>登录</h1>
        <el-form-item>
          <el-input v-model="form.username" clearable placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.pwd" type="password" clearable placeholder="密码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>

      </el-form>

    </el-main>
  </el-container>
</template>

<style scoped>
  h1 {
    text-align: center;
    margin-left: 80px;
  }
  .el-form {
    width: 400px;
    margin: 40px auto;
  }
  .el-button {
    width: 100%;
  }

</style>


<script>
export default {
  data() {
    return { 
      form: {
        username: '',
        pwd: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$router.push('/')
    }
  }
}
</script>

