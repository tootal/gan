<template>
  <div class="content" :style="{ padding: contentPadding }">
    <el-card
      class="content-card"
      :style="{ maxWidth: maxWidth }"
      :body-style="{ padding: cardPadding }"
    >
      <slot></slot>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "GanContent",
  props: {
    maxWidth: {
      type: String,
      default: "1024px"
    },
    contentPadding: {
      type: String,
      default: '10px 0'
    },
    cardPadding: {
      type: String,
      default: "20px"
    }
  }
};
</script>
<style scoped>
.content {
  background-color: #f6f6f6;
}
.content-card {
  margin: 0 auto;
}
</style>