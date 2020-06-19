<template>
  <el-container>
    <gan-head></gan-head>
    <el-main>
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
import GanHead from "../components/GanHead.vue";
import GanMain from "../layouts/GanMain.vue";
import GanFoot from "../components/GanFoot.vue";
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
.el-header,
.el-main,
.el-footer {
  padding: 0;
}
.el-main {
  margin-top: 50px;
  margin-bottom: 0;
  overflow: visible;
}
</style>