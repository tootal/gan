<template>
  <div class="content" :style="contentStyle">
    <el-card class="content-card" :body-style="cardBodyStyle">
      <slot></slot>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "GanContent",
  props: {
    cardBodyStyle: {
      type: Object,
      default() {
        return {
          padding: "20px"
        };
      }
    },
    contentStyle: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.content {
  background-color: #f6f6f6;
  padding-top: 10px;
  padding-bottom: 10px;
}
.content-card {
  max-width: 1024px;
  margin: 0 auto;
}
</style>