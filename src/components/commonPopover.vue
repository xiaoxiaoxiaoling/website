<template>
  <div class="commonPopover">
  <el-popover
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
    :content="describeContent">
  </el-popover>
  </div>
</template>

<script>
  export default {
    name:'commonPopover',
    props: {
      describeContent:String
    },
    data() {
      return {
        visible: false
      };
    }
  };
</script>

<style lang="scss" scoped>

</style>