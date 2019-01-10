<template>
  <main-layout index="/setting">
    <el-form ref="form" :model="form" label-width="150px">
      
      <el-form-item label="首页Banner图配置">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
          :limit="3"
          :file-list="form.sliderImgs">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>

      <el-form-item label="首页图片">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
          :limit="5"
          :file-list="form.indexImgs">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>

      <el-form-item class="btns">
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>

    </el-form>
  </main-layout>
        
</template>

<style lang="less" scoped>
  .btns {
    margin-top: 50px;
  }
</style>

<script>
import MainLayout from '../components/MainLayout.vue'

export default {
  data() {
    return {
      form: {
        indexImgs: [],
        sliderImgs: []
      }
    }
  },
  methods: {
    onSubmit() {

    }
  },
  components: {
    MainLayout
  }
}
</script>

