<template>
  <p class="text-center">{{ post.topic }}</p>
</template>
<script>
export default {
  name: "GanPost",
  computed: {
    post() {
      return this.$root.forumData[this.$route.params.id - 1];
    }
  }
};
</script>