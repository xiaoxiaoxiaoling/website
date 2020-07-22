<template>
  <div class="navmenu">
     <el-menu
      router  
      default-active="2"
      class="el-menu-vertical-demo navmenu"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse">
      <el-menu-item  index="/experience">
        <i class="el-icon-menu"></i>
        <span slot="title">个人经历</span>
      </el-menu-item>
      <el-menu-item index="/lists">
        <i class="el-icon-menu"></i>
        <span slot="title">页面列表</span>
      </el-menu-item>
      <el-menu-item index="/logs">
        <i class="el-icon-menu"></i>
        <span slot="title">日志</span>
      </el-menu-item>
      <el-menu-item index="/Echart">
        <i class="el-icon-menu"></i>
        <span slot="title">Echart</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-submenu__title,.el-menu-item{
    line-height: 60px;
    height: 60px;
  }
</style>

<script>
  import {mapState} from 'vuex'
 
  export default {
    name:'navmenu',
    data() {
      return {
      };
    },
    computed: {
      ...mapState(['isCollapse'])
    },
    methods: {
       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>