<template>
  <gan-content>
    <vue-markdown>{{ readme }}</vue-markdown>
    <el-divider>以上内容来自README</el-divider>
    <h2>开发记录</h2>
    <p v-for="i in devlogs" :key="i">{{ i }}</p>
    <h2>开发者工具</h2>
    <el-button @click="showCache">查看本地缓存数据</el-button>
    <el-button @click="showForumCache">查看论坛缓存数据</el-button>
    <el-button type="danger" plain @click="clearForumCache">清除论坛缓存</el-button>
    <el-button type="danger" plain @click="clearCache">清除所有缓存</el-button>
  </gan-content>
</template>
<script>
import GanContent from "../layouts/GanContent.vue";
import readme from "../../README.md";
import VueMarkdown from "vue-markdown";
import gitlog from '../../scripts/gitlog.txt';
export default {
  name: "GanAbout",
  data() {
    return {
      readme: readme,
    };
  },
  computed: {
    devlogs() {
      return gitlog.split('\n');
    }
  },
  methods: {
    showCache() {
      console.log(window.localStorage);
      this.$message({
        message: "请打开控制台查看数据！",
        type: "info"
      });
    },
    showForumCache() {
      console.log(JSON.parse(localStorage["forumData"]));
      this.$message({
        message: "请打开控制台查看数据！",
        type: "info"
      });
    },
    clearForumCache() {
      window.localStorage.removeItem("forumData");
      this.$message({
        message: "清除论坛缓存成功。",
        type: "success"
      });
    },
    clearCache() {
      window.localStorage.clear();
      this.$message({
        message: "清除所有缓存成功。",
        type: "success"
      });
    }
  },
  components: {
    GanContent,
    VueMarkdown
  }
};
</script>