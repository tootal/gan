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
.el-header,
.el-main {
  padding: 0;
}
.el-main {
  margin-top: 50px;
  overflow: visible;
}
</style>