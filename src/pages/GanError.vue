<template>
  <div class="error">
    <el-alert title="糟糕！出现了一些错误！" type="error" description="可能的原因有：网站正在进行维护或出现了程序问题。" show-icon></el-alert>
  </div>
</template>
<script>
export default {
  name: "GanError"
};
</script>
<style scoped>
.error {
  max-width: 70%;
  margin: 30px auto;
}
</style>