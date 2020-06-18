<template>
  <div>
    <p class="text-center">{{ post.topic }}</p>
    <p class="article" v-for="(o, i) in article" :key="i"> {{ i + o }} </p>
    <p class="article">{{ article }}</p>
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
.article {
  max-width: 1024px;
  margin: 10px auto;
}
</style>