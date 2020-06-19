<template>
  <gan-content>
    <vue-markdown>{{ readme }}</vue-markdown>
    <h2>开发记录</h2>
    <el-timeline>
      <el-timeline-item
        v-for="(log, index) in logs"
        :key="index"
        :timestamp="log.time"
        :color="log.color"
        size="large"
      >
        <span class="abbr-commit">{{log.abbrCommit}}</span>
        {{log.message}}
      </el-timeline-item>
      <div v-if="logsMore && logsMore.length > 0">
        <div v-show="!showLogsMore">
          <el-divider>
            <el-button @click="showLogsMore = true">显示更多</el-button>
          </el-divider>
        </div>
        <div v-show="showLogsMore">
          <el-timeline-item
            v-for="(log, index) in logsMore"
            :key="index"
            :timestamp="log.time"
            :color="log.color"
            size="large"
          >
            <span class="abbr-commit">{{log.abbrCommit}}</span>
            {{log.message}}
          </el-timeline-item>
        </div>
      </div>
    </el-timeline>
    <h2>开发者工具</h2>
    <div class="buttons">
      <el-button @click="showCache">查看本地缓存数据</el-button>
      <el-button @click="showForumCache">查看论坛缓存数据</el-button>
      <el-button type="danger" plain @click="clearForumCache">清除论坛缓存</el-button>
      <el-button type="danger" plain @click="clearCache">清除所有缓存</el-button>
    </div>
  </gan-content>
</template>
<script>
import GanContent from "../layouts/GanContent.vue";
import readme from "../../README.md";
import VueMarkdown from "vue-markdown";
import gitlog from "../../scripts/gitlog.txt";
export default {
  name: "GanAbout",
  data() {
    return {
      readme: readme,
      showLogsMore: false
    };
  },
  computed: {
    devlogs() {
      let logs = [];
      for (let i of gitlog.split("\n")) {
        if (i === "") continue;
        let t = i.split(" ");
        let c = {};
        c.commit = t[0];
        c.abbrCommit = t[0].slice(0, 7);
        c.time = t[1];
        c.message = t[2];
        logs.push(c);
      }
      logs[0].color = "#0bbd87";
      return logs;
    },
    logs() {
      return this.devlogs.slice(0, 5);
    },
    logsMore() {
      return this.devlogs.slice(5);
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
<style scoped>
.abbr-commit {
  color: red;
  margin-right: 5px;
}
.el-button {
  margin: 10px 5px;
}
.buttons {
  display: flex;
  flex-wrap: wrap;
}
</style>