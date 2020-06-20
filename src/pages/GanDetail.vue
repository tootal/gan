<template>
  <div>
    <gan-content>
      <el-alert
        v-if="!post.content"
        title="此文章内容及评论根据随机算法自动生成，不代表本站赞成文章及评论的内容或立场。"
        type="warning"
        show-icon
        :closable="false"
      ></el-alert>
      <h3 class="title">{{ post.topic }}</h3>
      <el-divider v-if="count">阅读：{{ count }}</el-divider>
      <p class="article" v-for="(o, i) in article" :key="i">{{ o }}</p>
      <div class="text-right">
        <el-button type="primary" @click="handleReply">回复</el-button>
      </div>
    </gan-content>
    <gan-content v-for="(reply, index) in replys" :key="index">
      <div class="reply-avatar">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
      </div>
      <div class="reply-main">
        <div class="reply-author">
          <router-link :to="'/user/' + reply.author" class="reply-author-link">{{ reply.author }}</router-link>
        </div>
        <div class="reply-content">{{ reply.content }}</div>
      </div>
    </gan-content>
    <gan-content v-for="(reply, index) in manuallyReplys" :key="index">
      <div class="reply-avatar">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
      </div>
      <div class="reply-main">
        <div class="reply-author">
          <router-link to="/user/佚名" class="reply-author-link">佚名</router-link>
        </div>
        <div class="reply-content">{{ reply }}</div>
      </div>
    </gan-content>
  </div>
</template>
<script>
import GanContent from "../layouts/GanContent.vue";
import BullshitGenerator from "../utils/BullshitGenerator.js";
import ReplyGenerator from "../utils/ReplyGenerator.js";
import Cookies from "js-cookie";
import axios from "axios";
export default {
  name: "GanDetail",
  data() {
    return {
      count: 0,
      replyPopVisible: false,
      manuallyReplys: []
    };
  },
  computed: {
    post() {
      if (localStorage["forumData"]) {
        let data = JSON.parse(localStorage["forumData"]);
        let id = this.$route.params.id;
        if (data && id >= 0 && data.length > id) {
          return data[id];
        }
      }
      return { topic: "未找到该帖子" };
    },
    article() {
      if (this.post.content) {
        return [this.post.content];
      }
      if (this.post.statement) {
        return BullshitGenerator(this.post.statement);
      }
      return [];
    },
    replys() {
      return ReplyGenerator(this.post.topic, this.post.reply);
    }
  },
  components: {
    GanContent
  },
  mounted() {
    const url =
      "https://openapi.baidu.com/rest/2.0/tongji/report/getData?access_token=121.55d7323c06e8653a55f7956f29bcea69.YaRRoVQjy1xVhNLBr2fuMrnpYasEaq7GDV8UhN8.a7Fizw&site_id=15225609&start_date=20200619&end_date=20200719&metrics=pv_count&method=visit%2Ftoppage%2Fa";
    axios.get(url).then(r => {
      let count = 0;
      let urls = r.data.result.items[0];
      let pv = r.data.result.items[1];
      for (let i = 0; i < urls.length; i++) {
        let u = new URL(urls[i][0].name);
        if (u.pathname === `/forum/${this.$route.params.id}`) {
          count += pv[i][0];
        }
      }
      this.count = count;
    });
    this.manuallyReplys = JSON.parse(localStorage["forumReply" + this.$route.params.id]) || [];
    window.addEventListener("scroll", this.handleScroll);
    let oldPos = Cookies.get(`forum_${this.$route.params.id}_position`);
    if (oldPos) {
      window.scrollTo({
        top: oldPos,
        behavior: "smooth"
      });
    }
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      Cookies.set(`forum_${this.$route.params.id}_position`, scrollTop);
    },
    handleReply() {
      this.$prompt("请输入回复内容", "回复", {
        confirmButtonText: "回复",
        cancelButtonText: "取消",
        inputPlaceholder: "写下你的评论..."
      }).then(({value}) => {
        this.manuallyReplys.push(value);
        localStorage.setItem("forumReply" + this.$route.params.id, JSON.stringify(this.manuallyReplys));
        this.$message.success('回复成功！');
      });
    }
  }
};
</script>
<style scoped>
.title {
  color: #1a1a1a;
  text-align: center;
  margin: 0;
  padding: 20px 0 0 0;
}
.el-divider__text {
  color: #666;
}
.article {
  max-width: 1024px;
  margin: 10px auto;
  padding: 0px 10px;
  line-height: 180%;
  text-align: justify;
}
.reply-avatar {
  float: left;
  margin-right: 15px;
}
.reply-author {
  font-weight: bold;
}
.reply-author-link {
  text-decoration: none;
  color: black;
}
</style>