<template>
  <div class="commonTab">
    <el-tag class="tag"
      v-for="(tag,i) in tags"
      :key="i"
      closable
      size="medium"
      :effect="setmyeffect(i)">
      {{tag.name}}
    </el-tag>
  </div>
</template>

<script>
  export default {
    name:'commonTab',
     data() {
      return {
        tags: [
          { name: '标签一',  },
          { name: '标签二', },
          { name: '标签三', },
          { name: '标签四',},
          { name: '标签五',}
        ],
        index:'0'
      };
    },
    computed: {
      setmyeffect(){
        return (i)=> i==this.index?'dark':'plain'
      }
    }
  }
</script>

<style >
  .commonTab .tag{
    margin-right: 10px;
  }
</style>