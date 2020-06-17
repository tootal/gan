<template>
  <el-container>
    <el-header height="50px" class="top-head bg-white-sm-and-down">
      <gan-head></gan-head>
    </el-header>
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
.el-header, .el-main {
  padding: 0;
}
.el-main {
  overflow: visible;
}
.top-head {
  position: sticky;
  top: 0;
  z-index: 1010;
}
</style>