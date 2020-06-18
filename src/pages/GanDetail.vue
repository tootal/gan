<template>
  <div class="detail">
    <el-card class="detail-card">
      <h3 class="title">{{ post.topic }}</h3>
      <p class="article" v-for="(o, i) in article" :key="i">{{ o }}</p>
    </el-card>
  </div>
</template>
<script>
import BullshitGenerator from "../utils/BullshitGenerator.js";
export default {
  name: "GanDetail",
  computed: {
    post() {
      return this.$root.forumData[this.$route.params.id - 1];
    },
    article() {
      return BullshitGenerator(this.post.statement);
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
  line-height: 150%;
  text-align: justify;
}
</style>