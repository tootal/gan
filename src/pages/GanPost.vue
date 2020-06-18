<template>
  <div>
    <h3 class="title">{{ post.topic }}</h3>
    <p class="article" v-for="(o, i) in article" :key="i"> {{ o }} </p>
  </div>
</template>
<script>
import BullshitGenerator from "../utils/BullshitGenerator.js";
export default {
  name: "GanPost",
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
.title {
  color: #1a1a1a;
  text-align: center;
}
.article {
  max-width: 1024px;
  margin: 10px auto;
  padding: 0px 10px;
  line-height: 150%;
  text-align: justify;
}
</style>