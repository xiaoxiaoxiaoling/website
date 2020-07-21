<template>
  <div class="index">
    <el-container class="container">
      <navmenu></navmenu>
      <el-container>
        <el-header>
          <common-header></common-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer> 
          <common-footer-info></common-footer-info>
        </el-footer>
      </el-container>
    </el-container>
   
  </div>
</template>
  

<style>
*{
  margin: 0;
  padding: 0;
}
.container{
  height: 100vh;
}
html{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.el-header, .el-footer {
    background-color: #f1f4f7ff;
    color: #333;
    line-height: 60px;
  }
  .el-header{
 border: 1px solid #f1f1f1;
    border-style: none none solid solid;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu{
    border: 0;
  }
</style>

<script>
import navmenu from '../components/navmenu'
import commonHeader from '../components/commonHeader'
import lists from '../components/navcontent/lists'
import commonFooterInfo from '../components/commonFooterInfo'
export default {
  name:'index',
  components: {
    navmenu,
    commonHeader,
    lists,
    commonFooterInfo
  }
}
</script>