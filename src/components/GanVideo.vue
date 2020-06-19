<template>
  <el-card class="gan-video">
    <div>
      <slot></slot>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "GanVideo"
};
</script>
<style scoped>
.el-card {
  width: 240px;
  height: 192px;
}
</style>