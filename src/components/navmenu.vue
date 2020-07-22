<template>
  <div class="navmenu">
     <el-menu
      router  
      default-active="2"
      class="el-menu-vertical-demo navmenu"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse">
      <el-menu-item  v-for="(item,i) in navs" :key="i" :index="item.path">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.title}}</span>
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
        icon:'el-icon-thumb',
        navs:[
          {
            path:'/experience',
            title:'个人经历',
            icon:'user'
          },
          {
            path:'/lists',
            title:'页面展示',
            icon:'s-platform'
          },
          {
            path:'/logs',
            title:'日志',
            icon:'s-order'
          },
           {
            path:'/Echart',
            title:'Echart',
            icon:'s-data'
          }
        ]
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