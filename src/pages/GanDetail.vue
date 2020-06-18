<template>
  <div class="detail">
    <el-card class="detail-card">
      <h3 class="title">{{ post.topic }}</h3>
      <p class="article" v-for="(o, i) in article" :key="i">{{ o }}</p>
      <el-alert title="此文章内容根据随机算法自动生成，不代表本站赞成文章的内容或立场。" 
        type="warning" show-icon :closable="false"></el-alert>
    </el-card>
  </div>
</template>
<script>
import BullshitGenerator from "../utils/BullshitGenerator.js";
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
      if (this.post.statement) {
        return BullshitGenerator(this.post.statement);
      }
      return [];
    }
  }
};
</script>
<style scoped>
.detail {
  background-color: #f6f6f6;
  padding-top: 10px;
  padding-bottom: 10px;
}
.detail-card {
  max-width: 1024px;
  margin: 0 auto;
}
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
</style>