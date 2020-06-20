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
      <el-divider>
        作者：
        <router-link :to="'/user/' + post.author">{{ post.author }}</router-link>
      </el-divider>
      <p class="article" v-for="(o, i) in post.content" :key="'article' + i">{{ o }}</p>
      <div class="text-right">
        <el-button type="primary" @click="handleReply">回复</el-button>
      </div>
    </gan-content>
    <gan-content v-for="(reply, index) in post.replys" :key="'avatar' + index">
      <div class="reply-avatar">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
      </div>
      <div class="reply-main">
        <div class="reply-author">
          <router-link :to="'/user/' + reply.author" class="reply-author-link">{{ reply.author }}</router-link>
        </div>
        <div class="reply-content">{{ reply.content }}</div>
      </div>

      <div class="reply-op">
        <el-button type="text" @click="handleDel(index)">删除</el-button>
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
  data() {
    return {
      id: this.$route.params.id,
      replyPopVisible: false,
      forumData: {},
      post: {
        author: "",
        topic: "未找到该帖子",
        content: [],
        statement: "",
        reply: 0,
        replys: []
      }
    };
  },
  components: {
    GanContent
  },
  mounted() {
    if (!localStorage["forumData"]) return;
    this.forumData = JSON.parse(localStorage["forumData"]);
    if (!this.forumData || this.id < 0 || this.id >= this.forumData.length)
      return;
    for (let i in this.post) {
      if (i === "replys") {
        if (this.forumData[this.id][i]) {
          for (let j of this.forumData[this.id][i]) {
            this.post.replys.push(j);
          }
        }
      } else {
        if (this.forumData[this.id][i])
          this.post[i] = this.forumData[this.id][i];
      }
    }
    if (this.post.content.length === 0) {
      for (let o of BullshitGenerator(this.post.statement)) {
        this.post.content.push(o);
      }
    }
    if (this.post.replys.length === 0) {
      for (let o of ReplyGenerator(
        this.post.topic + this.post.author,
        this.post.reply
      )) {
        this.post.replys.push(o);
      }
    }
    this.syncForumData();
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
    syncForumData() {
      this.forumData[this.id] = this.post;
      localStorage.setItem("forumData", JSON.stringify(this.forumData));
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      Cookies.set(`forum_${this.id}_position`, scrollTop);
    },
    handleReply() {
      this.$prompt("请输入回复内容", "回复", {
        confirmButtonText: "回复",
        cancelButtonText: "取消",
        inputPlaceholder: "写下你的评论..."
      }).then(({ value }) => {
        this.post.reply += 1;
        this.post.replys.push({
          author: "佚名",
          content: value
        });
        this.syncForumData();
        this.$message.success("回复成功！");
      });
    },
    handleDel(index) {
      this.post.reply -= 1;
      this.post.replys.splice(index, 1);
      this.syncForumData();
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
.reply-op {
  float: right;
}
</style>