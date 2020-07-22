<template>
  <div class="experience">
    <div class="block">
  <el-timeline>
    <el-timeline-item type="primary" v-for="(val,index) in lists" :key="index" :timestamp="val.tiem" placement="top">
      <el-card>
        <h4>{{val.title}}</h4>
        <p v-html="val.content"></p>
        <p v-if="val.other"  v-html="val.good"></p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</div>

  </div>
</template>

<script>
  export default {
    name:'experience',
    data () {
      return {
        lists:[
          {
            tiem:'2017-07/2017-12',
            title:'武汉清流商务咨询有限公司',
            content:'业务：商务咨询、POS机安装、批零兼营；房地产信息咨询等<br>描述：2017下半年入职武汉清流，担任话务员，负责电联客户，了解客户资质情况，收集客户资料。<br>最大业绩：武汉南湖70万房抵',
            other:''
          },
           {
            tiem:'2018-03/2020-07',
            title:'上海坤朋软件技术有限公司',
            content:'业务：软件和信息技术服务业<br>描述：2018上半年入职上海坤朋,担任前端工程师兼原型图设计师<br>主要使用技术：HTML5、CSS/CSS3、JavaScript、VUE、ajax<br>使用的工具：axure、VSCode、PS、HBX、SVN、',
            other:''
          }
        ]
      }
    }
  }
</script>

<style>
.block{
  width:90%
}
</style>