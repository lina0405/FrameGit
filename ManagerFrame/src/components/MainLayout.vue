<template>
  
  <el-container class="main-layout">
    <el-header>
      <img src="../assets/logo.png"/>
      <span>管理后台</span>
    </el-header>

    <el-container>
      <el-aside width="200px">
        
        <el-menu :index="index" :router="true" :default-active="index">

          <el-submenu index="/">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>商户管理</span>
            </template>
            <el-menu-item index="/shopClass">商户分类</el-menu-item>
            <el-menu-item index="/shopList">商户列表</el-menu-item>
          </el-submenu>
          <el-menu-item index="/code">
            <i class="el-icon-star-on"></i>
            <span slot="title">会员码管理</span>
          </el-menu-item>
          <el-menu-item index="/actionList">
            <i class="el-icon-tickets"></i>
            <span slot="title">活动管理</span>
          </el-menu-item>
          <el-menu-item index="/setting">
            <i class="el-icon-setting"></i>
            <span slot="title">系统配置</span>
          </el-menu-item>
        </el-menu>

      </el-aside>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>

  </el-container>

</template>

<style lang="less" scoped>
  @import url('../assets/css/app/variables.less');
  .el-header {
    img, span {
      display: inline-block;
      vertical-align: top;
      height: 40px;
      line-height: 40px;
      margin-top: 10px;
      margin-right: 20px;
      color: @brand-primary;
      font-size: 20px;
    }
  }
  .main-layout {
    height: 100%;
  }
  .el-menu {
    min-height: 100%;
  }
</style>

<script>
export default {
  props: {
    index: {
      type: String,
      default: '/shopClass',
      required: false
    }
  }
}
</script>



