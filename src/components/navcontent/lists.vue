<template>
  <div class="lists">
    <div class="select-search-bxo">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
    </div>

    <el-table :data="tableData" border stripe highlight-current-row style="width: 100%">
      <el-table-column
        v-for="(val,key,index) in tableLabel"
        :key="index"
        :prop="key"
        :label="val"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column label="图片展示" width="80" align="center">
        <template slot-scope="scope">
          <common-cook-img :imgID="scope.row.id"></common-cook-img>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="60" align="center">
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row.url)"
            :disabled="(scope.row.url)=='null'?true:false"
            type="text"
            size="small"
          >访问</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next"
      :page-size="20"
      :pager-count="5"
      :total="500"
    ></el-pagination>
  </div>
</template>

<script>
import commonCookImg from "../commonCookImg";
export default {
  name: "lists",
  components: {
    commonCookImg
  },
  computed: {},
  created() {
    // this.$http.get("http://127.0.0.1:8081/htmllists")
    //   .then((response) => {
    //   console.log(response.data)
    //   }) 
    //   .catch(function(error) {
    //       console.log(error);
    //     })

  },
  methods: {
    // 访问网址
    handleClick(url) {
      window.open(url);
    },
    // 查看图片展示
    handleImgs(imgurl) {
      console.log(imgurl);
    }
  },
  data() {
    return {
      input: "",
      tableData: [
        {
          id: "1",
          date: "2016-05-02",
          name: "项目名称",
          url: "null",
          technology: "html/css",
          describe: "这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        },
        {
          id: "2",
          date: "2016-05-02",
          name: "项目名称",
          url: "null",
          technology: "html/css",
          describe: "描述"
        },
        {
          id: "3",
          date: "2016-05-02",
          name: "项目名称",
          url: "https://element.eleme.cn/#/zh-CN/component/table",
          technology: "html/css",
          describe: "描述"
        }
      ],
      tableLabel: {
        name: "项目名",
        url: "网址",
        date: "上线时间",
        technology: "技术",
        describe: "描述"
      },
      options: [
        {
          value: "选项1",
          label: "全部"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "全部"
    };
  }
};
</script>

<style>
.lists {
  background-color: #fff;
}
.pagination {
  padding: 20px;
}
.select-search-bxo {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.el-input {
  width: 150px;
}
</style>