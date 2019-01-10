<template>

  <main-layout index="/shopList">

    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/shopList' }">商户列表</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/shopInfo' }">商户信息</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form ref="form" :model="form" label-width="150px">
      <el-form-item label="商家名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="所属分类">
        <el-select v-model="form.shopClass" placeholder="请选择">
          <el-option
            v-for="item in classList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="排序">
        <el-input v-model="form.sort"></el-input>
      </el-form-item>
      <el-form-item label="商家Banner图">
        <el-upload
          class="upload-demo"
          action="/Api/PostImage"
          multiple
          :limit="3"
          :file-list="form.sliderImgs">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="优惠券图片">
        <el-upload
          class="upload-demo"
          action="/Api/PostImage"
          :file-list="form.couponImg">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>

      <el-form-item label="商家介绍">
        <Editor v-model="form.content"></Editor>
      </el-form-item>
      
      <el-form-item class="btns">
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button @click="goBack">返回</el-button>
      </el-form-item>

    </el-form>
  </main-layout>

</template>

<style lang="less" scoped>

  .el-breadcrumb {
    margin-bottom: 30px;
  }

  .btns {
    margin-top: 80px;
  }

</style>

<script>

import MainLayout from '../components/MainLayout.vue'
import Editor from '../components/Editor.vue'

export default {
  data() {
    return {
      form: {
        name: '',
        sliderImgs: [],
        couponImg: [],
        sort: '',
        shopClass: '',
        phone: '',
        content: '',
        id: ''
      },
      classList: [],
    }
  },
  methods: {
    onSubmit() {

    },
    goBack() {
      this.$router.go(-1)
    },
    update() {
      //获取需要提交的信息
      let info = {}

      this.$ajax.PostShopInfo(this.form)
      .then(data => {

      })
    },
    get() {
      let self = this
      this.$ajax.GetShopInfo({
        id: self.form.id
      })
      .then(data => {
        self.form = data
      })
    }
  },
  components: {
    MainLayout,
    Editor
  },
  mounted() {
    this.form.id = this.$route.params.id
    this.get()
  },
  watch: {
    '$router'() {
      this.form.id = this.$route.params.id
      this.get()
    }
  }
}
</script>



