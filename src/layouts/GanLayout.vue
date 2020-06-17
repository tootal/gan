<template>
  <el-container>
    <el-header height="50px">
      <gan-head></gan-head>
    </el-header>
    <el-main style="padding-bottom: 500px">
      <gan-main>
        <slot></slot>
      </gan-main>
    </el-main>
    <el-footer height="90px">
      <gan-foot></gan-foot>
    </el-footer>
  </el-container>
</template>
<script>
import GanHead from "./GanHead.vue";
import GanMain from "./GanMain.vue";
import GanFoot from "./GanFoot.vue";
export default {
  name: "GanLayout",
  components: {
    GanHead,
    GanMain,
    GanFoot
  }
};
</script>
<style scoped>
.el-header, .el-main {
  padding: 0;
}
</style>