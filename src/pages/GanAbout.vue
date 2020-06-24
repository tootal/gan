<template>
  <gan-content>
    <vue-markdown :prerender="prerender">{{ readme }}</vue-markdown>
    <h2>开发记录</h2>
    <el-timeline>
      <el-timeline-item
        v-for="(log, index) in logs"
        :key="index"
        :timestamp="log.time"
        :color="log.color"
        size="large"
      >
        <span class="abbr-commit">
          <a target="_blank" :href="`https://github.com/tootal/gan/commit/${log.commit}`">{{log.abbrCommit}}</a>
        </span>
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
            <span class="abbr-commit">
              <a target="_blank" :href="`https://github.com/tootal/gan/commit/${log.commit}`">{{log.abbrCommit}}</a>
            </span>
            {{log.message}}
          </el-timeline-item>
        </div>
      </div>
    </el-timeline>
    <h2>开发者工具</h2>
    网站访问量：{{ visitCount }}
    <div class="buttons">
      <el-button @click="clearLoginCookie">删除登录Cookie</el-button>
      <el-button @click="showCache">查看本地缓存数据</el-button>
      <el-button @click="showForumCache">查看论坛缓存数据</el-button>
      <el-button type="danger" plain @click="clearForumCache">清除论坛缓存</el-button>
      <el-button type="danger" plain @click="clearCache">清除所有缓存</el-button>
    </div>
  </gan-content>
</template>
<script>
import Vue from "vue";
import { Divider, Timeline, TimelineItem } from "element-ui";
Vue.use(Divider);
Vue.use(Timeline);
Vue.use(TimelineItem);

import GanContent from "../layouts/GanContent.vue";
import readme from "../../README.md";
import VueMarkdown from "vue-markdown";
import gitlog from "../../gitlog.txt";
import Cookies from "js-cookie";
import vm from "../main.js";
import axios from "axios";
export default {
  name: "GanAbout",
  data() {
    return {
      readme: readme,
      showLogsMore: false,
      visitCount: 0
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
        c.time = t[1] + " " + t[2];
        c.message = t[3];
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
    prerender(str) {
      "![](public/images/20200621120348481_29735.png)";
      return str.replace(
        /!\[\]\(public\/images\/(.*)\)/g,
        '<img src="images/$1" width="100%">'
      );
    },
    clearLoginCookie() {
      Cookies.remove("loginUser");
      vm.$emit("user-changed");
      this.$message.success("已删除登录Cookie");
    },
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
  },
  mounted() {
    const base_url = "https://openapi.baidu.com/rest/2.0/tongji/report/getData";
    const access_token =
      "121.55d7323c06e8653a55f7956f29bcea69.YaRRoVQjy1xVhNLBr2fuMrnpYasEaq7GDV8UhN8.a7Fizw";
    const site_id = "15225609";
    const url = `${base_url}?access_token=${access_token}&site_id=${site_id}&start_date=20200619&end_date=20200719&metrics=pv_count&method=visit%2Ftoppage%2Fa`;
    axios
      .get(url)
      .then(r => {
        let count = 0;
        let pv = r.data.result.items[1];
        for (let i of pv) {
          count += i[0];
        }
        this.visitCount = count;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style scoped>
.abbr-commit>a {
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