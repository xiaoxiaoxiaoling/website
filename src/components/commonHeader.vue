<template>
  <div class="commonHeader">
   <div class="left">
    <el-button @click="setIsCollapse" type="primary" icon="el-icon-menu"></el-button>
    <div class="tabs">
      <common-tab></common-tab>
    </div>
   </div>
   
  <div>
    <div class="demo-fit">
      <div class="block">
          <el-avatar shape="square" :size="50" fit="fill" :src="url"></el-avatar>
      </div>
    </div> 
  </div>
   

  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import commonTab from './commonTab'
  export default {
    name:'commonHeader',
    data () {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    },
    methods: {
       ...mapActions(['setIsCollapse'])
    },
    components: {
      commonTab
    }
  }
</script>

<style>
  .commonHeader{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }
  .block{
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .el-breadcrumb{
    height: 60px;
    display: inline-flex;
    align-items: center;
    font-size: 0;
    float: right;
    margin-left: 10px;
  }
  .el-breadcrumb__item{
    font-size: 14px;
  }
  .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
    color:#409eff
  }
  .left .tabs{
    float: right;
    margin-left: 10px;
  }
</style>