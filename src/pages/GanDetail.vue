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
      <p class="article" v-for="(o, i) in article" :key="i">{{ o }}</p>
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
  </div>
</template>
<script>
import GanContent from "../layouts/GanContent.vue";
import BullshitGenerator from "../utils/BullshitGenerator.js";
import ReplyGenerator from "../utils/ReplyGenerator.js";
import Cookies from "js-cookie";
export default {
  name: "GanDetail",
  computed: {
    post() {
      if (localStorage["forumData"]) {
        let data = JSON.parse(localStorage["forumData"]);
        let id = this.$route.params.id;
        if (data && id >= 0 && data.length >= id) {
          return data[id - 1];
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
    }
  }
};
</script>
<style scoped>
.title {
  color: #1a1a1a;
  text-align: center;
  margin: 0;
  padding: 20px 0;
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